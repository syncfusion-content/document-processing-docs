---
layout: post
title: JavaScript SpreadsheetEditor Collaboration Integration | Syncfusion
description: Learn how to integrate real-time collaborative editing into the Syncfusion JavaScript SpreadsheetEditor application.
control: Collaborative Editing
platform: document-processing
documentation: ug
---

# Collaborative editing integration in JavaScript SpreadsheetEditor

The JavaScript SpreadsheetEditor integrates with the `@syncfusion/ej2-collaborator` package to exchange workbook actions, user presence, and selection updates with the Collaboration Server.

## Install the Collaboration Client

Install the Collaborator package in the JavaScript application.

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

## Configure the JavaScript SpreadsheetEditor

Set `enableCollaborativeEditing` to `true`, inject `CollaborativeEditingHandler`, load the workbook, initialize the Collaboration Client, and join the collaboration room.

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
