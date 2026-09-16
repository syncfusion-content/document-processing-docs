---
layout: post
title: Collaboration Server in Syncfusion Collaborator | Syncfusion
description: The Collaboration Server manages collaboration sessions, synchronizes editing actions, persists changes, and broadcasts updates in real time.
control: Collaborator
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Collaboration Server

The Collaboration Server is the back\-end component of the Collaborator framework. It manages collaboration sessions, synchronizes editing actions, persists changes, and broadcasts updates to connected participants in real time.

The same common collaborator framework is shared across all supported server platforms, allowing the collaboration infrastructure to be reused across EJ2 components such as DOCX Editor, PDF Viewer, and Spreadsheet.

## Packages

| Package | Description |
| --- | --- |
| Syncfusion.Collaborator.Server.AspNet.Core | Collaboration server for ASP.NET Core |
| Syncfusion.Collaborator.Server.AspNet.Mvc | Collaboration server for ASP.NET MVC |
| ej2-collaborator-server | Collaboration server for Node.js |


**Note**: The Node.js Collaboration Server currently supports PDF Viewer collaborative editing only. DOCX Editor and Spreadsheet require the ASP.NET\-based web service implementation for document processing, operation transformation, and save operations.

## Key Features

- Real\-time synchronization of editing actions.

- Support for SignalR and WebSocket transports.

- Redis\-based storage and messaging for scalable deployments.

- Shared collaboration services across supported EJ2 components.

## Redis Requirement

Redis is required for the Collaboration Server to store operations, synchronize sessions, and support scalable multi-server deployments.

## Adapter Integration

The Collaboration Server is designed to work with multiple EJ2 components. Each supported EJ2 component integrates through a server adapter that translates component\-specific actions into the common collaboration format. The same collaboration infrastructure can therefore be reused across DOCX Editor, PDF Viewer, and Spreadsheet with only the adapter implementation changing.

## ASP.NET Core Server

The ASP.NET Core Collaboration Server is provided through the Syncfusion.Collaborator.Server.AspNet.Core package. It supports both SignalR and WebSocket transports and is recommended for modern .NET applications.

**Installation**

Install the Collaboration Server package in your ASP.NET Core project:

```bash
dotnet add package Syncfusion.Collaborator.Server.AspNet.Core
```

**Supported Transports**

- **SignalR** (default)

- **WebSocket**

## Public API

The interfaces below represent the public API exposed by the Collaboration Server.

### ICollaborationAdapter — adapter contract

| Member | Purpose |
|---|---|
| MapControlToGenericAction(object controlAction) | Convert a control-specific action into a CollaborationAction. |
| MapGenericToControlAction(CollaborationAction action) | Convert a CollaborationAction into a control-specific action. |
| TransformOperations(List<CollaborationAction> actions) | Run your control's OT over a batch of actions |
| SaveOperationsAsync(actions, roomName, partialSave) | Queues pending actions for document save processing. |
| ProcessSaveRequestAsync(SaveRequest, cancellationToken) | Processes the queued save request and persists the document. |

### IActionService — common service API

| Method | Purpose |
|---|---|
| AddOperationAsync(action, adapter) | Persist action + return transformed version |
| GetPendingOperationsAsync(room, from, to) | Fetch stored actions in a range |
| GetEffectivePendingVersionAsync(room, version) | Fetch newer-than-version actions for a joining client |
| ClearRecordsAsync(roomName, partialSave) | Flush after save completes |

### IActiveTransport (common, transport-agnostic broadcast)

| Member | Purpose |
|---|---|
| SendToGroupAsync(roomName, eventName, payload) | Broadcast to every client in a room. |

### CollaborationOptions (registration configuration)

| Property | Default | Purpose |
|---|---|---|
| ConnectionString | localhost:6379 | Redis connection string used for storage and pub/sub. |
| ConnectionType | CollaborationConnectionType.SignalR | ConnectionType is a single enum choice — set it to SignalR or WebSocket. |
| SaveThreshold | 100 | The save threshold (in actions) after which a pending save is flushed to the document. |

**Configuration**

Register the Collaboration Server and configure the Redis connection string during application start.

**SignalR (Default)**
```c#
builder.Services.AddCollaborationServer(options =>
{
    options.ConnectionString = "localhost:6379";
});
```
**WebSocket**
```c#
builder.Services.AddCollaborationServer(options =>
{
    options.ConnectionString = "localhost:6379";
    options.ConnectionType = CollaborationConnectionType.WebSocket;
});
```
### Adapter Integration

Register a control\-specific adapter to translate between the EJ2 component and the Common Collaborator framework. Refer to the [getting started with ASP.NET Core page](./getting-started/getting-started-with-core) for more details.
```C#
builder.Services.AddSingleton\<ICollaborationAdapter, DocumentEditorAdapter\>(); 
```

## ASP.NET MVC Server

The ASP.NET MVC Collaboration Server provides the same collaboration capabilities as the ASP.NET Core server for applications built on .NET Framework and ASP.NET MVC 5.

**Requirements**

- .NET Framework 4.6.2
- ASP.NET MVC 5
- Redis

**Installation**

Install the Collaboration Server package in your ASP.NET MVC project:

```powershell
Install-Package Syncfusion.Collaborator.Server.AspNet.Mvc
```
**Transport Support**

The ASP.NET MVC Collaboration Server supports **WebSocket** communication for real\-time synchronization between connected users.

**Configuration**

Configure the Collaboration Server with a Redis connection string and register the required adapter implementation.
```c#
ServiceCollectionExtensions.RegisterAdapter(
    new DocumentEditorCollaborationAdapter());

ServiceCollectionExtensions.AddCollaborationServer(options =>
{
    options.ConnectionString = "<redis-connection-string>";
    options.ConnectionType = CollaborationConnectionType.WebSocket;
});
```
**Adapter Integration**

Register a control\-specific adapter to connect the EJ2 component with the Common Collaborator framework. Refer to the [getting started with MVC page](./getting-started/getting-started-with-mvc) for more details.

## Node.js Server

The Node.js Collaboration Server provides real\-time collaboration capabilities for JavaScript and TypeScript applications.

**Requirements**

- Node.js 18 or later

- Redis

**Installation**

Install the Collaboration Server package in your Node.js project:

```bash
npm install ej2-collaborator-server
```

**Transport Support**

The Node.js Collaboration Server supports **WebSocket** communication for real-time synchronization and collaboration between connected users.

## Public API

The interfaces below represent the public API exposed by the Collaboration Server.

### ICollaborationAdapter — adapter contract

| Member | Purpose |
| --- | --- |
| mapControlToGenericAction(controlAction) | Pack a control action into the common CollaborationAction. |
| mapGenericToControlAction(collaborationAction) | Unpack a common CollaborationAction into the control action shape. |
| transformOperations(actions) | Run your control's OT over a batch of actions. Returns the transformed array. |
| processSaveRequestAsync(request) | Runs the actual save (called by DocumentSaveWorker). |

### CollaborationServer (the package entry point)

| Member | Purpose |
| --- | --- |
| new CollaborationServer({ port, redis, adapter, saveThreshold? }) | Construct the server. The port can be overridden by process.env.PORT. |
| start() | Start the HTTP + WebSocket server, mount REST routes, and run the background save worker. |
| app | The underlying express.Express instance — attach product-specific routes (e.g. server.app.get('/api/test', ...)). |
| actionService | The ActionService instance wired for you; useful when mounting custom Edit-Control routes. |


### ActionService

| Member | Purpose |
| --- | --- |
| addOperation(action, adapter) | Adds the operation to Redis, assigns a version, transforms prior operations through adapter.transformOperations, persists the result, and queues a partial save when the threshold is reached. |
| getPendingOperations(roomName, startIndex, endIndex) | Returns the stored actions in the specified range. |
| getEffectivePendingVersion(roomName, startIndex) | Returns actions newer than startIndex for a joining client. |
| clearRecords(roomName, partialSave) | Clears stored actions after the save completes. |

**Configuration**

Create the CollaborationServer instance with your Redis connection details and adapter implementation.
```ts
const server = new CollaborationServer({
    redis: {
        host: "<redis-host>",
        port: 6379
    },
    adapter
});
```
**Adapter Integration**

Register a control\-specific adapter to connect the EJ2 component with the Common Collaborator framework. Refer to the [getting started with Node.js page](./getting-started/getting-started-with-node) for more details.

