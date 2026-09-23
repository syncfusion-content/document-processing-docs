---
layout: post
title: Collaborative Editing React SpreadsheetEditor with ASP.NET Core | Syncfusion
description: Learn how to configure collaborative editing in React SpreadsheetEditor using ASP.NET Core and Redis.
control: Collaborative Editing
platform: document-processing
documentation: ug
---

# Collaborative editing in React SpreadsheetEditor using ASP.NET Core with Redis

The React SpreadsheetEditor can use the ASP.NET Core Collaboration Server to synchronize workbook actions among multiple users. SignalR or WebSocket provides real-time communication, while Redis temporarily stores ordered collaboration actions, versions, and room information.

To enable collaborative editing, set `enableCollaborativeEditing` to `true` and inject the `CollaborativeEditingHandler` module into the SpreadsheetEditor. The `SpreadsheetEditorAdapter` connects the SpreadsheetEditor to the Collaboration Client and applies actions exchanged with the Collaboration Server.

## Prerequisites

The following are required:

- **SignalR or WebSocket** - Provides real-time communication between clients and the server.
- **Redis** - Stores collaboration operations, versions, and session information.
- **Collaboration Client** - Connects the SpreadsheetEditor to a collaboration room.
- **SpreadsheetEditor server adapter** - Converts and transforms SpreadsheetEditor actions on the server.

## SignalR

SignalR maintains a real-time connection between the Collaboration Client and the Collaboration Server. It delivers workbook actions, user presence, selections, and connection updates to users in the same room.

Configure `CollaborationConnectionType.SignalR` when registering the Collaboration Server and call `AddSignalR` to register the required SignalR services. The client must use the same connection type as the server.

## Redis

Redis stores collaboration actions in version order together with room and version information. This allows the Collaboration Server to process concurrent actions and return missed operations to users who join late or temporarily lose connection.

The `SaveThreshold` setting determines when accumulated actions are queued for processing. Choose the Redis capacity and `SaveThreshold` based on the expected number of active rooms, connected users, workbook complexity, and editing frequency.

## Integrate collaborative editing on the client

### Step 1: Install the Collaboration Client

Install the Collaborator package in the React application.

```bash
npm install @syncfusion/ej2-collaborator
```

### Step 2: Create the SpreadsheetEditor adapter

Create the `SpreadsheetEditorAdapter.ts` file to load the workbook, initialize the room, send local actions, and apply remote actions.

```ts
import { ICollaborationActionData, ICollaborationProvider } from '@syncfusion/ej2-collaborator';
import { SpreadsheetComponent } from '@syncfusion/ej2-react-spreadsheet';

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

### Step 3: Configure the React SpreadsheetEditor

Enable collaborative editing, inject `CollaborativeEditingHandler`, load the workbook, and join the collaboration room.

```tsx
import { useRef } from 'react';
import { CollaborativeEditingHandler, Inject, SpreadsheetComponent } from '@syncfusion/ej2-react-spreadsheet';
import { CollaborationClient } from '@syncfusion/ej2-collaborator';
import { SpreadsheetEditorAdapter } from './SpreadsheetEditorAdapter';

const serviceUrl: string = '<your-collaboration-service-url>';
const currentUser: string = 'John';

export default function App() {
    const spreadsheetRef = useRef<SpreadsheetComponent>(null);
    const adapterRef = useRef<SpreadsheetEditorAdapter | null>(null);

    const created = async (): Promise<void> => {
        const spreadsheet = spreadsheetRef.current;
        if (!spreadsheet) return;

        const roomName: string = new URL(window.location.href).searchParams.get('id') || 'sample-room';
        const adapter = new SpreadsheetEditorAdapter(spreadsheet, serviceUrl, currentUser);

        // Load the latest workbook state for the room.
        await adapter.loadFromServer('Sample', roomName);

        const client = new CollaborationClient(adapter, {
            serviceUrl,
            connectionType: 'signalr',
            currentUser
        });

        adapterRef.current = adapter;

        // Join the collaboration room.
        await client.joinRoomAsync(roomName);
    };

    const actionComplete = (args: any): void => {
        adapterRef.current?.sendActionToServer(args);
    };

    return (
        <SpreadsheetComponent
            ref={spreadsheetRef}
            // Enable collaborative editing in the SpreadsheetEditor.
            enableCollaborativeEditing={true}
            created={created}
            actionComplete={actionComplete}
        >
            {/* Inject the collaborative editing module. */}
            <Inject services={[CollaborativeEditingHandler]} />
        </SpreadsheetComponent>
    );
}
```

The application is responsible for generating a unique room ID for each collaboration session and sharing the same room ID with all participating users.

Users who use the same room ID join the same collaboration session.

## Integrate collaborative editing on the server

### Step 1: Configure Redis

Add the Redis connection string to `appsettings.json`.

```json
{
  "ConnectionStrings": {
    "Redis": "<your-redis-connection-string>"
  }
}
```

Store production credentials in a secure secret provider.

### Step 2: Register the Collaboration Server

Configure the Collaboration Server and the SpreadsheetEditor adapter in `Program.cs`.

```csharp
using Syncfusion.Collaboration.Core.Extensions;
using Syncfusion.Collaboration.Core.Interfaces;

var builder = WebApplication.CreateBuilder(args);

// Register Redis storage and SignalR communication.
builder.Services.AddCollaborationServer(options =>
{
    options.ConnectionString = builder.Configuration
        .GetConnectionString("Redis");
    options.ConnectionType =
        CollaborationConnectionType.SignalR;
});

// Register the SpreadsheetEditor collaboration adapter.
builder.Services.AddSingleton<ICollaborationAdapter, SpreadsheetCollaborativeAdaptor>();

builder.Services.AddControllers();
builder.Services.AddSignalR();

var app = builder.Build();

app.UseRouting();
app.MapControllers();

// Map the Collaboration Server endpoints.
app.MapCollaborationServer();

app.Run();
```

`AddCollaborationServer` configures Redis for collaboration data, while `AddSignalR` registers the real-time communication services. A SignalR Redis backplane is not required for this configuration.

### Step 3: Implement the SpreadsheetEditor server adapter

Implement `ICollaborationAdapter` to convert SpreadsheetEditor actions, transform concurrent operations, and process queued save requests.

```csharp
public void TransformOperations(
    List<CollaborationAction> actions)
{
    List<ActionInfo> spreadsheetActions = actions
        .Select(action =>
            MapGenericToControlAction(action) as ActionInfo
        )
        .Where(action => action != null)
        .ToList();

    // Transform related concurrent SpreadsheetEditor actions.
    if (CollaborativeEditingHandler.TransformOperations(
        spreadsheetActions
    ))
    {
        ActionInfo transformedAction =
            spreadsheetActions.Last();

        actions.Last().Data =
            JsonConvert.SerializeObject(
                transformedAction.Operations
            );
    }
}
```

Process queued save requests based on the application storage requirements, and clear the associated Redis records only after the operations are processed successfully.

### Step 4: Add the SpreadsheetEditor collaboration APIs

Create `CollaborativeEditingController.cs` and implement the following endpoints:

- **`ImportFile`** - Loads the workbook, applies pending room actions, and returns the latest workbook JSON and room version. This endpoint initializes both new users and users joining an existing room.
- **`UpdateAction`** - Receives a local SpreadsheetEditor action, assigns its server version, transforms concurrent operations when required, stores the action in Redis, and broadcasts it to the room.
- **`UpdateSelection`** - Stores the active cell, selected range, and editing presence of a user, then broadcasts the presence update to the other users in the room.
- **`GetActionsFromServer`** - Returns actions created after the client's last synchronized version so that missed updates can be applied in version order.

## Limitation

Undo and redo history is maintained locally and is not synchronized among users. An undo or redo action performed by one user does not modify another user's local undo or redo history.

## See also

- [Collaborative editing overview](./overview)
