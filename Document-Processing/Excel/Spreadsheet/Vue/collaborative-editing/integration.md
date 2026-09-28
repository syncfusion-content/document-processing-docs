---
layout: post
title: Vue SpreadsheetEditor Collaboration Integration | Syncfusion
description: Learn how to integrate real-time collaborative editing into the Syncfusion Vue SpreadsheetEditor application.
control: Collaborative Editing
platform: document-processing
documentation: ug
---

# Collaborative editing integration in Vue SpreadsheetEditor

The Vue SpreadsheetEditor integrates with the `@syncfusion/ej2-collaborator` package to exchange workbook actions, user presence, and selection updates with the Collaboration Server.


## Install the Collaboration Client

Install the Collaborator package in the Vue application.

```bash
npm install @syncfusion/ej2-collaborator
```

For details about connection types, room management, and collaboration events, refer to the [Collaboration Client documentation](https://help.syncfusion.com/document-processing/collaborator/collaboration-client).

## Collaboration Client configuration

The `CollaborationClient` connects the SpreadsheetEditor to the Collaboration Server and manages the collaboration session. Configure it with the following options:

- `serviceUrl` - Specifies the Collaboration Server URL.
- `connectionType` - Specifies `signalr` or `websocket`. The client and server must use the same transport.
- `currentUser` - Specifies the display name of the current user.
- `onUserJoined` - Invoked when another user joins the room.
- `onUserLeft` - Invoked when another user leaves the room.

```ts
const client = new CollaborationClient(adapter, {
    serviceUrl,
    connectionType: 'signalr',
    currentUser,
    onUserJoined: (user) => {
        console.log('User joined', user);
    },
    onUserLeft: (user) => {
        console.log('User left', user);
    }
});
```

## Create the SpreadsheetEditor adapter

The `SpreadsheetEditorAdapter` implements `ICollaborationProvider` and connects the Collaboration Client with the SpreadsheetEditor. It loads the synchronized workbook, sends local SpreadsheetEditor actions, and applies remote actions received through `data.payload`.

Create the `SpreadsheetEditorAdapter.ts` file.

```ts
import {
    ICollaborationActionData,
    ICollaborationProvider
} from '@syncfusion/ej2-collaborator';
import { Spreadsheet } from '@syncfusion/ej2-spreadsheet';

export class SpreadsheetEditorAdapter
    implements ICollaborationProvider {
    public currentRoomName: string = '';

    public constructor(
        private spreadsheet: Spreadsheet,
        private serviceUrl: string,
        private currentUser: string
    ) {
        this.serviceUrl = serviceUrl.endsWith('/')
            ? serviceUrl
            : serviceUrl + '/';
    }

    public async loadFromServer(
        fileName: string,
        roomName: string
    ): Promise<void> {
        const response: Response = await fetch(
            this.serviceUrl +
            'api/CollaborativeEditing/ImportFile',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    fileName,
                    roomName
                })
            }
        );

        if (!response.ok) {
            throw new Error(
                'Failed to load the workbook.'
            );
        }

        const data: any = JSON.parse(
            await response.text()
        );

        this.currentRoomName = roomName;
        this.spreadsheet.collaborativeEditingModule
            .updateRoomInfo(
                roomName,
                data.version,
                this.serviceUrl +
                'api/CollaborativeEditing/'
            );
        this.spreadsheet.collaborativeEditingModule
            .setLocalUser(this.currentUser);
        this.spreadsheet.openFromJson({
            file: data.sfdt
        });
    }

    public sendActionToServer(action: any): void {
        if (action) {
            this.spreadsheet.collaborativeEditingModule
                .sendActionToServer(action);
        }
    }

    public applyRemoteAction(
        action: string,
        data: ICollaborationActionData
    ): void {
        if (data) {
            this.spreadsheet.collaborativeEditingModule
                .applyRemoteAction(
                    action,
                    data.payload
                );
        }
    }
}
```

## Configure the Vue SpreadsheetEditor

Set `enableCollaborativeEditing` to `true`, inject `CollaborativeEditingHandler`, load the workbook, initialize the Collaboration Client, and join the collaboration room.

```vue
<template>
    <ejs-spreadsheet
        ref="spreadsheet"
        :enableCollaborativeEditing="true"
        :created="created"
        :actionComplete="actionComplete">
    </ejs-spreadsheet>
</template>

<script>
import { defineComponent } from 'vue';
import {
    CollaborativeEditingHandler,
    SpreadsheetComponent
} from '@syncfusion/ej2-vue-spreadsheet';
import { CollaborationClient } from '@syncfusion/ej2-collaborator';
import { SpreadsheetEditorAdapter } from './spreadsheetEditorAdapter';

const serviceUrl = '<your-collaboration-service-url>';

export default defineComponent({
    components: {
        'ejs-spreadsheet': SpreadsheetComponent
    },
    provide: {
        spreadsheet: [CollaborativeEditingHandler]
    },
    data() {
        return {
            adapter: null,
            client: null
        };
    },
    methods: {
        async created() {
            const roomName =
                new URL(window.location.href)
                    .searchParams.get('id') ||
                'sample-room';
            const spreadsheet =
                this.$refs.spreadsheet.ej2Instances;

            this.adapter = new SpreadsheetEditorAdapter(
                spreadsheet,
                serviceUrl,
                'John'
            );

            await this.adapter.loadFromServer(
                'Sample',
                roomName
            );

            this.client = new CollaborationClient(
                this.adapter,
                {
                    serviceUrl,
                    connectionType: 'signalr',
                    currentUser: 'John'
                }
            );

            await this.client.joinRoomAsync(roomName);
        },
        actionComplete(args) {
            this.adapter?.sendActionToServer(args);
        }
    }
});
</script>
```

## Manage the collaboration room

The application must provide a room ID for each collaboration session and share the same room ID with all participating users. Users who use the same room ID join the same collaboration session. The room ID can be provided through a query parameter or another application-specific session mechanism.

## Join a collaboration room

Call `joinRoomAsync` with the shared room ID after loading the latest workbook state and room version.

```ts
await client.joinRoomAsync(roomName);
```

After joining the room, supported local actions are sent through `actionComplete`, and remote actions are applied through `SpreadsheetEditorAdapter.applyRemoteAction`.

## See also

- [Collaborative editing overview](./overview)
- [Using Redis Cache with ASP.NET Core](./aspnet-core-redis)
- [Collaboration Client](https://help.syncfusion.com/document-processing/collaborator/collaboration-client)
