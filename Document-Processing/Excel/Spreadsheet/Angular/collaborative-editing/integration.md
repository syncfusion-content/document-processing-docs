---
layout: post
title: Angular SpreadsheetEditor Collaboration Integration | Syncfusion
description: Learn how to integrate real-time collaborative editing into the Syncfusion Angular SpreadsheetEditor application.
control: Collaborative Editing
platform: document-processing
documentation: ug
---

# Collaborative editing integration in Angular SpreadsheetEditor

The Angular SpreadsheetEditor integrates with the `@syncfusion/ej2-collaborator` package to exchange workbook actions, user presence, and selection updates with the Collaboration Server.

## Install the Collaboration Client

Install the Collaborator package in the Angular application.

```bash
npm install @syncfusion/ej2-collaborator
```

## Create the SpreadsheetEditor adapter

Create the `spreadsheetEditorAdapter.ts` file to load the workbook, initialize the collaboration room, send local actions, and apply remote actions.

```ts
import { ICollaborationActionData, ICollaborationProvider } from '@syncfusion/ej2-collaborator';
import { SpreadsheetComponent } from '@syncfusion/ej2-angular-spreadsheet';

export class SpreadsheetEditorAdapter implements ICollaborationProvider {
    public currentRoomName: string = '';

    public constructor(private spreadsheet: SpreadsheetComponent, private serviceUrl: string, private currentUser: string) {
        this.serviceUrl = serviceUrl.endsWith('/') ? serviceUrl : serviceUrl + '/';
    }

    public async loadFromServer(fileName: string, roomName: string): Promise<void> {
        const response: Response = await fetch(this.serviceUrl + 'api/CollaborativeEditing/ImportFile', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ fileName, roomName })
        });

        if (!response.ok) {
            throw new Error('Failed to load the workbook.');
        }

        const data: any = JSON.parse(await response.text());
        this.currentRoomName = roomName;

        // Initialize the collaboration room and server version.
        this.spreadsheet.collaborativeEditingModule.updateRoomInfo(roomName, data.version, this.serviceUrl + 'api/CollaborativeEditing/');

        // Set the name displayed for the local user.
        this.spreadsheet.collaborativeEditingModule.setLocalUser(this.currentUser);

        // Open the synchronized workbook state.
        this.spreadsheet.openFromJson({ file: data.sfdt });
    }

    public sendActionToServer(action: any): void {
        if (!action) return;

        // Send a local SpreadsheetEditor action to the server.
        this.spreadsheet.collaborativeEditingModule.sendActionToServer(action);
    }

    public applyRemoteAction(action: string, data: ICollaborationActionData): void {
        if (!data) return;

        // Apply an action received from another user.
        this.spreadsheet.collaborativeEditingModule.applyRemoteAction(action, data.payload);
    }
}
```

## Register the collaborative editing service

Import `SpreadsheetModule` and register `CollaborativeEditingHandlerService` in the component-level `providers` collection. Registering the service at the component level enables collaborative editing only for the required SpreadsheetEditor instance.

```ts
import { Component, ViewChild } from '@angular/core';
import {
    CollaborativeEditingHandlerService,
    SpreadsheetComponent,
    SpreadsheetModule
} from '@syncfusion/ej2-angular-spreadsheet';
import { CollaborationClient } from '@syncfusion/ej2-collaborator';
import { SpreadsheetEditorAdapter } from './spreadsheetEditorAdapter';

const serviceUrl: string = '<your-collaboration-service-url>';
const currentUser: string = 'John';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [SpreadsheetModule],
    providers: [CollaborativeEditingHandlerService],
    templateUrl: './app.component.html'
})
export class AppComponent {
    @ViewChild('spreadsheet')
    public spreadsheetObj: SpreadsheetComponent;

    private adapter: SpreadsheetEditorAdapter | null = null;
    private client: CollaborationClient | null = null;

    public async created(): Promise<void> {
        if (!this.spreadsheetObj) return;

        const roomName: string = new URL(window.location.href).searchParams.get('id') || 'sample-room';

        this.adapter = new SpreadsheetEditorAdapter(
            this.spreadsheetObj,
            serviceUrl,
            currentUser
        );

        // Load the latest workbook state for the room.
        await this.adapter.loadFromServer('Sample', roomName);

        this.client = new CollaborationClient(this.adapter, {
            serviceUrl,
            connectionType: 'signalr',
            currentUser
        });

        // Join the collaboration room.
        await this.client.joinRoomAsync(roomName);
    }

    public actionComplete(args: any): void {
        this.adapter?.sendActionToServer(args);
    }
}
```

## Enable collaborative editing

Set `enableCollaborativeEditing` to `true`, bind the `created` event to initialize collaboration, and forward local actions through the `actionComplete` event.

```html
<ejs-spreadsheet
    #spreadsheet
    [enableCollaborativeEditing]="true"
    (created)="created()"
    (actionComplete)="actionComplete($event)">
</ejs-spreadsheet>
```

## Manage the collaboration room

The application is responsible for generating a unique room ID for each collaboration session and sharing the same room ID with all participating users.

Users who use the same room ID join the same collaboration session. The room ID can be provided through a query parameter or another application-specific session mechanism.

## Initialize the Collaboration Client

Create `CollaborationClient` after the latest workbook state and room version are loaded. The client and server must use the same connection type.

```ts
this.client = new CollaborationClient(this.adapter, {
    serviceUrl,
    connectionType: 'signalr',
    currentUser
});
```

## Join a collaboration room

Call `joinRoomAsync` with the shared room ID to connect the user to the collaboration session.

```ts
await this.client.joinRoomAsync(roomName);
```

After joining the room, supported local actions are sent through `actionComplete`, and remote actions are applied through `SpreadsheetEditorAdapter.applyRemoteAction`.

## See also

- [Collaborative editing overview](./overview)
- [Using Redis Cache with ASP.NET Core](./aspnet-core-redis)
