# Collaboration Server

The Collaboration Server is the back\-end component of the Collaborator framework. It manages collaboration sessions, synchronizes editing actions, persists changes, and broadcasts updates to connected participants in real time.

The same Common Collaborator framework is shared across all supported server platforms, allowing the collaboration infrastructure to be reused across EJ2 components such as **Document Editor**, **PDF Viewer**, and **Spreadsheet**.

## Packages
|**Package**|**Description**|
|:---|:---|
|Syncfusion.Collaborator.Server|Collaboration server for ASP.NET Core and ASP.NET MVC|
|ej2\-collaborator\-server|Collaboration server for Node.js|



**Note**: The Node.js Collaboration Server currently supports PDF Viewer collaborative editing only. Document Editor and Spreadsheet require the ASP.NET\-based web service implementation for document processing, operation transformation, and save operations.

## Key Features

- Real\-time synchronization of editing actions.

- Support for SignalR and WebSocket transports.

- Redis\-based storage and messaging for scalable deployments.

- Shared collaboration services across supported EJ2 components.

## Redis Requirement

The Collaboration Server uses Redis for operation storage, session synchronization, and scalable multi\-server deployments.

## Adapter Integration

The Collaboration Server is control\-agnostic. Each supported EJ2 component integrates through a server adapter that translates component\-specific actions into the common collaboration format. The same collaboration infrastructure can therefore be reused across Document Editor, PDF Viewer, and Spreadsheet with only the adapter implementation changing.

# ASP.NET Core Server

The ASP.NET Core Collaboration Server is provided through the Syncfusion.Collaborator.Server package. It supports both SignalR and WebSocket transports and is recommended for modern .NET applications.

**Installation**
|dotnet add package Syncfusion.Collaborator.Server|
|:---|



**Supported Transports**

- **SignalR(** default **)** 

- **WebSocket** 

## Public API

The interfaces below are what product teams **implement or call**. Everything else is internal.

### `ICollaborationAdapter` — the interface (provided by the common package)

| Member | Purpose |
|---|---|
| `MapControlToGenericAction(object controlAction)` | Pack control action → common `CollaborationAction` |
| `MapGenericToControlAction(CollaborationAction action)` | Unpack common → control action |
| `TransformOperations(List<CollaborationAction> actions)` | Run your control's OT over a batch of actions |
| `SaveOperationsAsync(actions, roomName, partialSave)` | Hand off save to background queue |
| `ProcessSaveRequestAsync(SaveRequest, cancellationToken)` | Runs the actual save (called by the background hosted service) |

### `IActionService` (common, you call)

| Method | Purpose |
|---|---|
| `AddOperationAsync(action, adapter)` | Persist action + return transformed version |
| `GetPendingOperationsAsync(room, from, to)` | Fetch stored actions in a range |
| `GetEffectivePendingVersionAsync(room, version)` | Fetch newer-than-version actions for a joining client |
| `ClearRecordsAsync(roomName, partialSave)` | Flush after save completes |

### `IActiveTransport` (common, transport-agnostic broadcast)

| Member | Purpose |
|---|---|
| `SendToGroupAsync(roomName, eventName, payload)` | Broadcast to every client in a room. |

### `CollaborationOptions` (registration configuration)

| Property | Default | Purpose |
|---|---|---|
| `ConnectionString` | `localhost:6379` | Redis connection string used for storage and pub/sub. |
| `ConnectionType` | `CollaborationConnectionType.SignalR` | Pick **either** `SignalR` **or** `WebSocket`. |
| `SaveThreshold` | `CollaborativeEditingHelper.SaveThreshold` | Operation list size that triggers a background save. |

> `ConnectionType` is a single enum choice — set it to `SignalR` **or** `WebSocket`.


**Configuration**:

Register the Collaboration Server and configure the Redis connection string during application start.

**SignalR (Default)**
```c#
builder.Services.AddCollaborationServer(options => { options.ConnectionString = "localhost:6379"; }); 
```
**WebSocket**
```c#
builder.Services.AddCollaborationServer(options => { options.ConnectionString \= "localhost:6379"; options.ConnectionType = CollaborationConnectionType.WebSocket; }); 
```
**Configuration Options**
|**Property**|**Description**|
|:---|:---|
|ConnectionString|Redis connection string|
|ConnectionType|SignalR or WebSocket transport|
|SaveThreshold|Number of operations before triggering a save|



**Adapter Integration**

Register a control\-specific adapter to translate between the EJ2 component and the Common Collaborator framework.
|builder.Services.AddSingleton\<ICollaborationAdapter, DocumentEditorAdapter\>(); |
|:---|



# ASP.NET MVC Server

The ASP.NET MVC Collaboration Server provides the collaboration capabilities as the ASP.NET Core server for applications built on .NET Framework and ASP.NET MVC 5.

**Requirements**

- .NET Framework 4.6.2 or later

- ASP.NET MVC 5

- Redis

**Installation**

Install\-Package Syncfusion.Collaborator.Server 


**Transport Support**

The ASP.NET MVC Collaboration Server supports **WebSocket** communication for real\-time synchronization between connected users.

**Configuration**

Configure the Collaboration Server with a Redis connection string and register the required adapter implementation.
```c#
ServiceCollectionExtensions.RegisterAdapter( new DocumentEditorCollaborationAdapter());  ServiceCollectionExtensions.AddCollaborationServer(options => { options.ConnectionString = "<redis-connection-string>"; options.ConnectionType = CollaborationConnectionType.WebSocket; }); 
```
**Adapter Integration**

Register a control\-specific adapter to connect the EJ2 component with the Common Collaborator framework.

# Node.js Server

The Node.js Collaboration Server provides real\-time collaboration capabilities for JavaScript and TypeScript applications.

**Note:** The Node.js Collaboration Server currently supports PDF Viewer collaborative editing only. Document Editor and Spreadsheet require the ASP.NET\-based web service implementation for document processing, operation transformation, and save operations.

**Requirements**

- Node.js 18 or later

- Redis

**Installation**
npm install ej2\-collaborator\-server

**Transport Support**

The Node.js Collaboration Server supports **WebSocket** communication for real\-time synchronization and collaboration between connected users.

## Public API

The members below are what product teams **call or implement**. Everything
else is internal to this package.

### `ICollaborationAdapter` (base class — implemented by the consumer)

| Member | Purpose |
| --- | --- |
| `mapControlToGenericAction(controlAction)` | Pack a control action into the common `CollaborationAction`. |
| `mapGenericToControlAction(collaborationAction)` | Unpack a common `CollaborationAction` into the control action shape. |
| `transformOperations(actions)` | Run your control's OT over a batch of actions. Returns the transformed array. |
| `saveOperationsAsync(actions, roomName, partialSave)` | Hand off save to the background queue. |
| `processSaveRequestAsync(request)` | Runs the actual save (called by `DocumentSaveWorker`). |

### `CollaborationServer` (the package entry point)

| Member | Purpose |
| --- | --- |
| `new CollaborationServer({ port, redis, adapter, saveThreshold? })` | Construct the server. The `port` can be overridden by `process.env.PORT`. |
| `start()` | Start the HTTP + WebSocket server, mount REST routes, and run the background save worker. |
| `app` | The underlying `express.Express` instance — attach product-specific routes (e.g. `server.app.get('/api/test', ...)`). |
| `actionService` | The `ActionService` instance wired for you; useful when mounting custom Edit-Control routes. |


### `ActionService`

| Member | Purpose |
| --- | --- |
| `addAction(roomName, action)` | Persist a `CollaborationAction` and bump the room version. |
| `getActions(roomName)` | Fetch the current action list for a room. |
| `addOperation(action, adapter)` | Run the Lua-script flow: assign version, transform prior ops via `adapter.transformOperations`, persist, and enqueue a partial save when the threshold is reached. |
| `getPendingOperations(roomName, startIndex, endIndex)` | Fetch stored actions in a range. |
| `getEffectivePendingVersion(roomName, startIndex)` | Fetch newer-than-`startIndex` actions for a joining client. |
| `clearRecords(roomName, partialSave)` | Flush actions after save completes. |

### Configuration (constructor options)

| Property | Default | Purpose |
| --- | --- | --- |
| `port` | `process.env.PORT` or `8080` | HTTP/WS port. |
| `redis` | — | `ioredis` connection options (`host`, `port`, `username`, `password`, `tls`, ...). |
| `adapter` | — | The `ICollaborationAdapter` instance used by the save worker and REST controller. |
| `saveThreshold` | `Helper.SAVE_THRESHOLD` (100) | Operations per partial save. A flush fires when the Redis list length is a multiple of `2 * saveThreshold`, moving the first `saveThreshold` actions into the staging list handed to `adapter.processSaveRequestAsync`. Lower values shorten recovery, higher values reduce write pressure. Must be a positive integer. |

**Configuration**
```ts
const server = new CollaborationServer({
     redis: { host: "<redis-host>",
      port: 6379 },
       adapter 
       });
```
**Adapter Integration**

Register a control\-specific adapter to connect the EJ2 component with the Common Collaborator framework.

