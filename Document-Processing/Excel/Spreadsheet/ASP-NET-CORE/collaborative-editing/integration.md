---
layout: post
title: ASP.NET Core SpreadsheetEditor Collaboration Integration | Syncfusion
description: Learn how to integrate real-time collaborative editing into the Syncfusion ASP.NET Core SpreadsheetEditor application.
control: Collaborative Editing
platform: document-processing
documentation: ug
---

# Collaborative editing integration in ASP.NET Core SpreadsheetEditor

The ASP.NET Core SpreadsheetEditor integrates with the Collaborator client to exchange workbook actions, user presence, and selection updates with the Collaboration Server.


## Create the SpreadsheetEditor adapter

```js
function SpreadsheetEditorAdapter(
    spreadsheet,
    serviceUrl,
    currentUser
) {
    this.spreadsheet = spreadsheet;
    this.serviceUrl = serviceUrl.endsWith('/')
        ? serviceUrl
        : serviceUrl + '/';
    this.currentUser = currentUser;
    this.currentRoomName = '';
}

SpreadsheetEditorAdapter.prototype.loadFromServer =
    async function (fileName, roomName) {
        var response = await fetch(
            this.serviceUrl +
            'api/CollaborativeEditing/ImportFile',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    fileName: fileName,
                    roomName: roomName
                })
            }
        );

        if (!response.ok) {
            throw new Error(
                'Failed to load the workbook.'
            );
        }

        var data = JSON.parse(
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
    };

SpreadsheetEditorAdapter.prototype.sendActionToServer =
    function (action) {
        if (action) {
            this.spreadsheet.collaborativeEditingModule
                .sendActionToServer(action);
        }
    };

SpreadsheetEditorAdapter.prototype.applyRemoteAction =
    function (action, data) {
        if (data) {
            this.spreadsheet.collaborativeEditingModule
                .applyRemoteAction(
                    action,
                    data.payload
                );
        }
    };
```

## Inject and enable collaborative editing

```razor
<script>
    var module =
        ej.spreadsheet.CollaborativeEditing ||
        ej.spreadsheet.CollaborativeEditingHandler;
    ej.spreadsheet.Spreadsheet.Inject(module);
</script>

<ejs-spreadsheet id="spreadsheet"
                 enableCollaborativeEditing="true"
                 created="createdHandler"
                 actionComplete="actionCompleteHandler">
</ejs-spreadsheet>
```

## Initialize the Collaboration Client

```js
var collaborationServiceUrl =
    '<your-collaboration-service-url>';
var collaborationRoomName =
    new URL(window.location.href)
        .searchParams.get('id') ||
    'sample-room';
var collaborationAdapter;
var collaborationClient;

async function createdHandler() {
    var currentUser = 'John';

    collaborationAdapter =
        new SpreadsheetEditorAdapter(
            this,
            collaborationServiceUrl,
            currentUser
        );

    await collaborationAdapter.loadFromServer(
        'Sample',
        collaborationRoomName
    );

    collaborationClient =
        new ej.collaborator.CollaborationClient(
            collaborationAdapter,
            {
                serviceUrl: collaborationServiceUrl,
                connectionType: 'signalr',
                currentUser: currentUser
            }
        );

    await collaborationClient.joinRoomAsync(
        collaborationRoomName
    );
}

function actionCompleteHandler(args) {
    if (collaborationAdapter &&
        collaborationClient) {
        collaborationAdapter.sendActionToServer(args);
    }
}
```

## Manage the collaboration room

The application must provide a room ID for each collaboration session and share the same room ID with all participants. Users who use the same room ID join the same collaboration session.

## See also

- [Collaborative editing overview](./overview)
- [Using Redis Cache with ASP.NET Core](./aspnet-core-redis)
- [Collaboration Client](https://help.syncfusion.com/document-processing/collaborator/collaboration-client)
