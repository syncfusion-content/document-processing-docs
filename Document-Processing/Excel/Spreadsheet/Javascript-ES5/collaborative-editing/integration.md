---
layout: post
title: JavaScript SpreadsheetEditor Collaboration Integration | Syncfusion
description: Learn how to integrate real-time collaborative editing into the Syncfusion JavaScript SpreadsheetEditor application.
control: Collaborative Editing
platform: document-processing
documentation: ug
---

# Collaborative editing integration in JavaScript SpreadsheetEditor

The JavaScript SpreadsheetEditor uses the Collaborator client to exchange workbook actions, user presence, and selection updates with the Collaboration Server.


## Include the Collaboration Client

Include the SpreadsheetEditor bundle and the Collaborator client bundle before initializing collaborative editing.

For details about connection types, room management, and collaboration events, refer to the [Collaboration Client documentation](https://help.syncfusion.com/document-processing/collaborator/collaboration-client).

## Create the SpreadsheetEditor adapter

```js
function SpreadsheetEditorAdapter(spreadsheet, serviceUrl, currentUser) {
    this.spreadsheet = spreadsheet;
    this.serviceUrl = serviceUrl.endsWith('/')
        ? serviceUrl
        : serviceUrl + '/';
    this.currentUser = currentUser;
    this.currentRoomName = '';
}

SpreadsheetEditorAdapter.prototype.loadFromServer =
    function (fileName, roomName) {
        var adapter = this;

        return fetch(
            adapter.serviceUrl +
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
        ).then(function (response) {
            if (!response.ok) {
                throw new Error(
                    'Failed to load the workbook.'
                );
            }
            return response.text();
        }).then(function (responseText) {
            var data = JSON.parse(responseText);
            adapter.currentRoomName = roomName;
            adapter.spreadsheet
                .collaborativeEditingModule
                .updateRoomInfo(
                    roomName,
                    data.version,
                    adapter.serviceUrl +
                    'api/CollaborativeEditing/'
                );
            adapter.spreadsheet
                .collaborativeEditingModule
                .setLocalUser(adapter.currentUser);
            adapter.spreadsheet.openFromJson({
                file: data.sfdt
            });
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

```js
var collaborativeEditingModule =
    ej.spreadsheet.CollaborativeEditing ||
    ej.spreadsheet.CollaborativeEditingHandler;

ej.spreadsheet.Spreadsheet.Inject(
    collaborativeEditingModule
);

var serviceUrl =
    '<your-collaboration-service-url>';
var currentUser = 'John';
var roomName =
    new URL(window.location.href)
        .searchParams.get('id') ||
    'sample-room';
var adapter;
var client;

var spreadsheet =
    new ej.spreadsheet.Spreadsheet({
        enableCollaborativeEditing: true,
        created: function () {
            adapter = new SpreadsheetEditorAdapter(
                spreadsheet,
                serviceUrl,
                currentUser
            );
            adapter.loadFromServer(
                'Sample',
                roomName
            ).then(function () {
                client = new ej.collaborator
                    .CollaborationClient(
                        adapter,
                        {
                            serviceUrl: serviceUrl,
                            connectionType: 'signalr',
                            currentUser: currentUser
                        }
                    );
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

## Manage the collaboration room

The application must provide a room ID for each collaboration session and share the same room ID with all participants. Users who use the same room ID join the same collaboration session.

## See also

- [Collaborative editing overview](./overview)
- [Using Redis Cache with ASP.NET Core](./aspnet-core-redis)
- [Collaboration Client](https://help.syncfusion.com/document-processing/collaborator/collaboration-client)
