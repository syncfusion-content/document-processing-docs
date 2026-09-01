# Collaboration Client

The Collaboration Client (@syncfusion/ej2\-collaborator) is a browser\-side library that enables real\-time collaborative editing in Syncfusion Essential JS 2 (EJ2) components such as **Document Editor**, **PDF Viewer**, and **Spreadsheet**.

It connects the client application to a Collaboration Server, synchronizes user actions across participants, and applies remote updates in real time.

## Package Information

- **Package:** @syncfusion/ej2\-collaborator

- **Runtime:** Browser\-based applications (Angular, React, Vue, JavaScript, and TypeScript)

- **Supported Transports:** 

   - SignalR

   - WebSocket

## Key Responsibilities

The Collaboration Client:

- Connects to the Collaboration Server.

- Joins and leaves collaboration sessions.

- Sends local editing actions to the server.

- Receives remote actions from other participants.

- Keeps content synchronized across all connected users.


## Supported Backends

The same client can be used with different Collaboration Server implementations.
|**Connection Type**|**Supported Server**|
|:---|:---|
|SignalR|ASP.NET Core|
|WebSocket|ASP.NET Core|
|WebSocket|ASP.NET MVC|
|WebSocket|Node.js|



## Installation
|npm install @syncfusion/ej2\-collaborator |
|:---|



## Configuration

The Collaboration Client requires the following configuration:
|**Option**|**Description**|
|:---|:---|
|serviceUrl|URL of the Collaboration Server endpoint|
|connectionType|Transport type (signalr or websocket)|
|currentUser|Display name of the current user|

```ts
const client = new CollaborationClient(adapter, { 
   serviceUrl: 'https://localhost:5001', 
   connectionType: 'signalr',
    currentUser: 'John'
     });  
     await client.joinRoomAsync(roomname); 
```



## Adapter Integration

The Collaboration Client is designed to be control\-agnostic. Each supported EJ2 component integrates through an adapter that implements ICollaborationProvider.

The adapter acts as a bridge between the Collaboration Client and the EJ2 component by:

- Sending local editing operations to the Collaboration Client.

- Receiving remote collaboration actions.

- Applying those actions to the host component.

**Adapter Example**
```ts
public applyRemoteAction( action: string, data: ICollaborationActionData ): void { // Apply the remote action to the host component } 
```



Because of this architecture, the same Collaboration Client can be reused across **Document Editor**, **PDF Viewer**, and **Spreadsheet**, with only the adapter implementation changing for each component.
