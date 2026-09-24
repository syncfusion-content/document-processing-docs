---
layout: post
title: TypeScript SpreadsheetEditor Collaboration Integration | Syncfusion
description: Learn how to integrate real-time collaborative editing into the Syncfusion TypeScript SpreadsheetEditor application.
control: Collaborative Editing
platform: document-processing
documentation: ug
---

# Collaborative editing integration in TypeScript SpreadsheetEditor

The TypeScript SpreadsheetEditor integrates with `@syncfusion/ej2-collaborator` to exchange workbook actions, presence, and selections with the Collaboration Server.

## Install the Collaboration Client

```bash
npm install @syncfusion/ej2-collaborator
```

## Inject and enable collaborative editing

```ts
import { CollaborativeEditingHandler, Spreadsheet } from '@syncfusion/ej2-spreadsheet';
import { CollaborationClient } from '@syncfusion/ej2-collaborator';
import { SpreadsheetEditorAdapter } from './spreadsheet-editor-adapter';

Spreadsheet.Inject(CollaborativeEditingHandler);

const serviceUrl: string = '<your-collaboration-service-url>';
const roomName: string = new URL(window.location.href).searchParams.get('id') || 'sample-room';
let adapter: SpreadsheetEditorAdapter;
let client: CollaborationClient;

const spreadsheet: Spreadsheet = new Spreadsheet({
    enableCollaborativeEditing: true,
    created: async (): Promise<void> => {
        adapter = new SpreadsheetEditorAdapter(spreadsheet, serviceUrl, 'John', roomName);
        await adapter.loadFromServer('Sample');
        client = new CollaborationClient(adapter, {
            serviceUrl,
            connectionType: 'signalr',
            currentUser: 'John'
        });
        await client.joinRoomAsync(roomName);
    },
    actionComplete: (args: any): void => {
        adapter?.sendActionToServer(args);
    }
});

spreadsheet.appendTo('#spreadsheet');
```

## Create the SpreadsheetEditor adapter

The adapter implements `ICollaborationProvider`, initializes room information, sets the local user, sends local actions, and applies remote actions using `data.payload`.

## Manage the collaboration room

The application must generate a unique room ID and share the same ID with all participants.

## See also

- [Collaborative editing overview](./overview)
- [Using Redis Cache with ASP.NET Core](./aspnet-core-redis)
