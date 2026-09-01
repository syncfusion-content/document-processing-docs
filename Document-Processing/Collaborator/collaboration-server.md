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

