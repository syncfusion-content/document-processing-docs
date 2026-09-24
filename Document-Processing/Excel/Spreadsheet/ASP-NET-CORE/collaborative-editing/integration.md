---
layout: post
title: ASP.NET Core SpreadsheetEditor Collaboration Integration | Syncfusion
description: Learn how to integrate real-time collaborative editing into the Syncfusion ASP.NET Core SpreadsheetEditor application.
control: Collaborative Editing
platform: document-processing
documentation: ug
---

# Collaborative editing integration in ASP.NET Core SpreadsheetEditor

The ASP.NET Core SpreadsheetEditor integrates with the `@syncfusion/ej2-collaborator` package to exchange workbook actions, user presence, and selection updates with the Collaboration Server.

## Include the Collaboration Client

Include the SpreadsheetEditor scripts and the Collaborator client bundle before initializing collaborative editing.

## Create the SpreadsheetEditor adapter

Create `SpreadsheetEditorAdapter` to load the workbook, initialize room information, send local actions, and apply remote actions.

```js
function SpreadsheetEditorAdapter(spreadsheet, serviceUrl, currentUser, roomName) {
    this.spreadsheet = spreadsheet;
    this.serviceUrl = serviceUrl.endsWith('/') ? serviceUrl : serviceUrl + '/';
    this.currentUser = currentUser;
    this.roomName = roomName;
    this.currentRoomName = roomName;
}

SpreadsheetEditorAdapter.prototype.loadFromServer = function (fileName) {
    var adapter = this;

    return fetch(adapter.serviceUrl + 'api/CollaborativeEditing/ImportFile', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ fileName: fileName, roomName: adapter.roomName })
    }).then(function (response) {
        if (!response.ok) {
            throw new Error('Failed to load the workbook.');
        }
        return response.text();
    }).then(function (responseText) {
        var data = JSON.parse(responseText);

        adapter.spreadsheet.collaborativeEditingModule.updateRoomInfo(
            adapter.roomName,
            data.version,
            adapter.serviceUrl + 'api/CollaborativeEditing/'
        );
        adapter.spreadsheet.collaborativeEditingModule.setLocalUser(
            adapter.currentUser
        );
        adapter.spreadsheet.openFromJson({ file: data.sfdt });

        return adapter.roomName;
    });
};

SpreadsheetEditorAdapter.prototype.sendActionToServer = function (action) {
    if (action) {
        this.spreadsheet.collaborativeEditingModule.sendActionToServer(action);
    }
};

SpreadsheetEditorAdapter.prototype.applyRemoteAction = function (action, data) {
    if (data) {
        this.spreadsheet.collaborativeEditingModule.applyRemoteAction(
            action,
            data.payload
        );
    }
};
```

## Inject and enable collaborative editing

Resolve and inject the collaborative editing module before the SpreadsheetEditor is created. Enable collaborative editing and bind the `created` and `actionComplete` events.

```razor
<script>
    var collaborativeEditingModule =
        ej.spreadsheet.CollaborativeEditing ||
        ej.spreadsheet.CollaborativeEditingHandler;

    ej.spreadsheet.Spreadsheet.Inject(collaborativeEditingModule);
</script>

<ejs-spreadsheet id="spreadsheet"
                 enableCollaborativeEditing="true"
                 created="createdHandler"
                 actionComplete="actionCompleteHandler">
</ejs-spreadsheet>
```

## Initialize the Collaboration Client

Load the latest workbook state before creating the Collaboration Client and joining the room.

```js
var collaborationServiceUrl = '<your-collaboration-service-url>';
var collaborationRoomName =
    new URL(window.location.href).searchParams.get('id') || 'sample-room';
var collaborationAdapter;
var collaborationClient;

async function createdHandler() {
    var currentUser = 'John';

    collaborationAdapter = new SpreadsheetEditorAdapter(
        this,
        collaborationServiceUrl,
        currentUser,
        collaborationRoomName
    );

    await collaborationAdapter.loadFromServer('Sample');

    collaborationClient = new ej.collaborator.CollaborationClient(
        collaborationAdapter,
        {
            serviceUrl: collaborationServiceUrl,
            connectionType: 'signalr',
            currentUser: currentUser
        }
    );

    await collaborationClient.joinRoomAsync(collaborationRoomName);
}

function actionCompleteHandler(args) {
    if (collaborationAdapter && collaborationClient) {
        collaborationAdapter.sendActionToServer(args);
    }
}
```

## Manage the collaboration room

The application is responsible for generating a unique room ID for each collaboration session and sharing the same room ID with all participating users. Users who use the same room ID join the same collaboration session.

## See also

- [Collaborative editing overview](./overview)
- [Using Redis Cache with ASP.NET Core](./aspnet-core-redis)
