---
layout: post
title: TypeScript SpreadsheetEditor Collaboration Integration | Syncfusion
description: Learn how to integrate real-time collaborative editing into the Syncfusion TypeScript SpreadsheetEditor application.
control: Collaborative Editing
platform: document-processing
documentation: ug
---

# Collaborative editing integration in TypeScript SpreadsheetEditor

The TypeScript SpreadsheetEditor integrates with the `@syncfusion/ej2-collaborator` package to exchange workbook actions, user presence, and selection updates with the Collaboration Server.


## Install the Collaboration Client

```bash
npm install @syncfusion/ej2-collaborator
```

For details about connection types, room management, and collaboration events, refer to the [Collaboration Client documentation](https://help.syncfusion.com/document-processing/collaborator/collaboration-client).

## Create the SpreadsheetEditor adapter

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

## Inject and enable collaborative editing

```ts
import {
    CollaborativeEditingHandler,
    Spreadsheet
} from '@syncfusion/ej2-spreadsheet';
import { CollaborationClient } from '@syncfusion/ej2-collaborator';
import { SpreadsheetEditorAdapter } from './spreadsheet-editor-adapter';

Spreadsheet.Inject(CollaborativeEditingHandler);

const serviceUrl: string =
    '<your-collaboration-service-url>';
const currentUser: string = 'John';
const roomName: string =
    new URL(window.location.href)
        .searchParams.get('id') ||
    'sample-room';
let adapter: SpreadsheetEditorAdapter;
let client: CollaborationClient;

const spreadsheet: Spreadsheet = new Spreadsheet({
    enableCollaborativeEditing: true,
    created: async (): Promise<void> => {
        adapter = new SpreadsheetEditorAdapter(
            spreadsheet,
            serviceUrl,
            currentUser
        );
        await adapter.loadFromServer(
            'Sample',
            roomName
        );
        client = new CollaborationClient(adapter, {
            serviceUrl,
            connectionType: 'signalr',
            currentUser
        });
        await client.joinRoomAsync(roomName);
    },
    actionComplete: (args: any): void => {
        adapter?.sendActionToServer(args);
    }
});

spreadsheet.appendTo('#spreadsheet');
```

## Manage the collaboration room

The application must provide a room ID for each collaboration session and share the same room ID with all participants. Users who use the same room ID join the same collaboration session.

## See also

- [Collaborative editing overview](./overview)
- [Using Redis Cache with ASP.NET Core](./aspnet-core-redis)
- [Collaboration Client](https://help.syncfusion.com/document-processing/collaborator/collaboration-client)
