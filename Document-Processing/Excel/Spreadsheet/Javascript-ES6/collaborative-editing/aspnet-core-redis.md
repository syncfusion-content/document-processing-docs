---
layout: post
title: TypeScript SpreadsheetEditor ASP.NET Core Redis Setup | Syncfusion
description: Learn how to configure the ASP.NET Core Collaboration Server and Redis for TypeScript SpreadsheetEditor collaborative editing.
control: Collaborative Editing
platform: document-processing
documentation: ug
---

# Using Redis Cache with ASP.NET Core

The ASP.NET Core Collaboration Server processes SpreadsheetEditor actions, manages collaboration rooms, and exchanges real-time updates through SignalR or WebSocket. Redis temporarily stores ordered collaboration actions, versions, and room information.

For package installation, service registration, transport configuration, and endpoint mapping, refer to [Getting Started with ASP.NET Core Collaboration Server](https://help.syncfusion.com/document-processing/collaborator/getting-started/getting-started-with-core).

## Prerequisites

The following are required:

- `Syncfusion.Collaborator.Server.AspNet.Core` for the ASP.NET Core Collaboration Server.
- Redis for collaboration action, version, and room storage.
- SignalR or WebSocket for real-time communication.
- A SpreadsheetEditor server adapter for action conversion and operational transformation.

## SignalR

SignalR maintains a real-time connection between the Collaboration Client and the Collaboration Server. It delivers workbook actions, user presence, selections, and connection updates to users in the same room.

Configure `CollaborationConnectionType.SignalR` when registering the Collaboration Server, and call `AddSignalR` to register the required SignalR services.

## Redis

Redis stores collaboration actions in version order together with room and version information. This allows the Collaboration Server to process concurrent actions and return missed operations to users who join late or temporarily lose connection.

The `SaveThreshold` setting determines when accumulated actions are queued for processing. Choose the Redis capacity and `SaveThreshold` based on the expected number of active rooms, connected users, workbook complexity, and editing frequency.

## Configure Redis

Add the Redis connection string to `appsettings.json`.

```json
{
  "ConnectionStrings": {
    "Redis": "<your-redis-connection-string>"
  }
}
```

Store production credentials in a secure secret provider.

## Collaboration Server configuration

The Collaboration Server uses `CollaborationOptions` to configure Redis, the real-time transport, and the save threshold:

- `ConnectionString` - Specifies the Redis connection string.
- `ConnectionType` - Specifies SignalR or WebSocket. SignalR is the default.
- `SaveThreshold` - Specifies the action count after which pending actions are queued for save processing. The default value is `100`.

## Register the Collaboration Server

Configure the Collaboration Server and SpreadsheetEditor adapter in `Program.cs`.

```csharp
using Syncfusion.Collaboration.Core.Extensions;
using Syncfusion.Collaboration.Core.Interfaces;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCollaborationServer(options =>
{
    options.ConnectionString = builder.Configuration
        .GetConnectionString("Redis");
    options.ConnectionType = CollaborationConnectionType.SignalR;
});

builder.Services.AddSingleton<ICollaborationAdapter, SpreadsheetCollaborativeAdaptor>();
builder.Services.AddControllers();
builder.Services.AddSignalR();

var app = builder.Build();
app.UseRouting();
app.MapControllers();
app.MapCollaborationServer();
app.Run();
```

`AddCollaborationServer` configures Redis for collaboration data, while `AddSignalR` registers real-time communication services. A SignalR Redis backplane is not required for this configuration.

For more information about room management, operation processing, and supported transports, refer to the [Collaboration Server documentation](https://help.syncfusion.com/document-processing/collaborator/collaboration-server).

## Implement the SpreadsheetEditor server adapter

Implement `ICollaborationAdapter` to convert SpreadsheetEditor actions, transform concurrent operations, and process queued save requests.

```csharp
public void TransformOperations(List<CollaborationAction> actions)
{
    List<ActionInfo> spreadsheetActions = actions
        .Select(action => MapGenericToControlAction(action) as ActionInfo)
        .Where(action => action != null)
        .ToList();

    if (CollaborativeEditingHandler.TransformOperations(spreadsheetActions))
    {
        ActionInfo transformedAction = spreadsheetActions.Last();
        actions.Last().Data = JsonConvert.SerializeObject(
            transformedAction.Operations
        );
    }
}
```

Process queued save requests based on the application storage requirements, and clear the associated Redis records only after the operations are processed successfully.

## Add the SpreadsheetEditor collaboration APIs

Create `CollaborativeEditingController.cs` and implement the following endpoints:

- **`ImportFile`** - Loads the workbook, applies pending room actions, and returns the latest workbook JSON and server version.
- **`UpdateAction`** - Receives a local SpreadsheetEditor action, assigns its server version, transforms concurrent operations, stores the action in Redis, and broadcasts it to the room.
- **`UpdateSelection`** - Stores and broadcasts the active cell, selected range, and editing presence of a user.
- **`GetActionsFromServer`** - Returns actions created after the client's last synchronized version so missed updates can be applied in order.

## Limitation

Undo and redo history is maintained locally and is not synchronized among users. An undo or redo action performed by one user does not modify another user's local undo or redo history.

## See also

- [Collaborative editing overview](./overview)
- [Collaborative editing integration](./integration)
- [Collaboration Server](https://help.syncfusion.com/document-processing/collaborator/collaboration-server)
- [Getting Started with ASP.NET Core Collaboration Server](https://help.syncfusion.com/document-processing/collaborator/getting-started/getting-started-with-core)
- [Collaborator frequently asked questions](https://help.syncfusion.com/document-processing/collaborator/faq)
