---
layout: post
title: ASP.NET Core SpreadsheetEditor ASP.NET Core Redis Setup | Syncfusion
description: Learn how to configure the ASP.NET Core Collaboration Server and Redis for ASP.NET Core SpreadsheetEditor collaborative editing.
control: Collaborative Editing
platform: document-processing
documentation: ug
---

# Using Redis Cache with ASP.NET Core

The ASP.NET Core Collaboration Server processes SpreadsheetEditor actions, manages collaboration rooms, and exchanges real-time updates through SignalR or WebSocket. Redis temporarily stores ordered collaboration actions, versions, and room information.

## Prerequisites

- An ASP.NET Core Collaboration Server.
- Redis for action, version, and room storage.
- SignalR or WebSocket for real-time communication.
- A SpreadsheetEditor server adapter for action conversion and operational transformation.

## SignalR

SignalR delivers workbook actions, user presence, selections, and connection updates to users in the same room. Configure `CollaborationConnectionType.SignalR` and call `AddSignalR` to register the required services.

## Redis

Redis stores actions in version order. The `SaveThreshold` setting determines when accumulated actions are queued for processing.

## Configure Redis

```json
{
  "ConnectionStrings": {
    "Redis": "<your-redis-connection-string>"
  }
}
```

## Register the Collaboration Server

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

`AddCollaborationServer` configures Redis for collaboration data, while `AddSignalR` registers real-time communication services.

## Implement the SpreadsheetEditor server adapter

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

Process queued save requests according to application storage requirements and clear Redis records after successful processing.

## Add the SpreadsheetEditor collaboration APIs

- **`ImportFile`** - Loads the workbook, applies pending actions, and returns the workbook JSON and room version.
- **`UpdateAction`** - Versions, transforms, stores, and broadcasts local actions.
- **`UpdateSelection`** - Stores and broadcasts the active cell, selection, and editing presence.
- **`GetActionsFromServer`** - Returns actions created after the client's last synchronized version.

## Limitation

Undo and redo history is maintained locally and is not synchronized among users.

## See also

- [Collaborative editing overview](./overview)
- [Collaborative editing integration](./integration)
