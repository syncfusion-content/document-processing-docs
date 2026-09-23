---
layout: post
title: JavaScript SpreadsheetEditor Collaboration Integration | Syncfusion
description: Learn how to integrate real-time collaborative editing into the Syncfusion JavaScript SpreadsheetEditor application.
control: Collaborative Editing
platform: document-processing
documentation: ug
---

# Collaborative editing integration in JavaScript SpreadsheetEditor

The JavaScript SpreadsheetEditor uses the Collaborator client to exchange workbook actions, presence, and selections with the Collaboration Server.

## Inject and enable collaborative editing

```js
var collaborativeEditingModule =
    ej.spreadsheet.CollaborativeEditing ||
    ej.spreadsheet.CollaborativeEditingHandler;

ej.spreadsheet.Spreadsheet.Inject(collaborativeEditingModule);

var serviceUrl = '<your-collaboration-service-url>';
var roomName = new URL(window.location.href).searchParams.get('id') || 'sample-room';
var adapter;
var client;

var spreadsheet = new ej.spreadsheet.Spreadsheet({
    enableCollaborativeEditing: true,
    created: function () {
        adapter = new SpreadsheetEditorAdapter(spreadsheet, serviceUrl, 'John', roomName);
        adapter.loadFromServer('Sample').then(function () {
            client = new ej.collaborator.CollaborationClient(adapter, {
                serviceUrl: serviceUrl,
                connectionType: 'signalr',
                currentUser: 'John'
            });
            return client.joinRoomAsync(roomName);
        });
    },
    actionComplete: function (args) {
        if (adapter) {
            adapter.sendActionToServer(args);
        }
    }
});

spreadsheet.appendTo('#spreadsheet');
```

## Create the SpreadsheetEditor adapter

The adapter loads the workbook, calls `updateRoomInfo` and `setLocalUser`, sends local actions with `sendActionToServer`, and applies remote actions using `data.payload`.

## Manage the collaboration room

The application must generate a unique room ID and share the same ID with all participants.

## See also

- [Collaborative editing overview](./overview)
- [Using Redis Cache with ASP.NET Core](./aspnet-core-redis)
