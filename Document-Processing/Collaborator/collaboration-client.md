---
layout: post
title: Collaboration Client in Syncfusion Collaborator | Syncfusion
description: The Collaboration Client is a browser-side library that enables real-time collaborative editing in Syncfusion EJ2 components using SignalR or WebSocket transports.
control: Collaborator
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

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


## Supported Collaboration Servers

The same client can be used with different Collaboration Server implementations.
|**Connection Type**|**Supported Server**|
|:---|:---|
|SignalR|ASP.NET Core|
|WebSocket|ASP.NET Core|
|WebSocket|ASP.NET MVC|
|WebSocket|Node.js|



## Installation
npm install @syncfusion/ej2\-collaborator 

## Public API

Product teams touch exactly two surfaces: the **`ICollaborationProvider`** interface they implement, and the **`CollaborationClient`** they instantiate. Everything else (`CollaborationConnection`, `ICollaborationOptions`, `ICollaborationTransport`, `TransportFactory`, `SignalRTransport`, `WebSocketTransport`, `CollaborationEvents`) is internal to the common package.

### `ICollaborationProvider` — implement this in your adapter

| Member | Purpose |
|---|---|
| `applyRemoteAction(action: string, data: ICollaborationActionData): void` | Apply a remote action received from the collaboration server to the local editor. The action payload is exposed under `data.payload`. **This is the only method the common package calls on the adapter at runtime.** |

### `CollaborationClient` — call this from your app

| Member | Purpose |
|---|---|
| `constructor(adapter: ICollaborationProvider, options: CollaborationClientOptions)` | Bind an adapter to a transport endpoint and current user. Constructs the underlying transport — does **not** start it. |
| `joinRoomAsync(roomName: string): Promise<void>` | Connects the transport and sends a `JoinGroup` for `roomName`. Re-emits the server's `connectionId` / `addUser` / `removeUser` / `action` events. **Does not fetch the document** — do that in your adapter or app first if needed. |


#### `CollaborationClientOptions` — constructor argument

| Field | Type | Purpose |
|---|---|---|
| `serviceUrl` | `string` | URL of the real-time collaboration server. Example : serviceUrl:"ws://localhost:8080", //Node server      ServiceUrl:"http://localhost:62870", //ASP.NET Core 
| `connectionType` | `'signalr' \| 'websocket'` | Selects the backend. Defaults to `'signalr'`. |
| `currentUser` | `string` | Display name broadcast to peers when joining the room. **Required.** |
| `onUserJoined?` | `(user: UserInfo) => void` | Fired when a remote peer enters the same room. **Optional.** |
| `onUserLeft?` | `(user: UserInfo) => void` | Fired when a remote peer leaves the room. **Optional.** |

> NOTE: `serviceUrl` is the **transport** URL, not a product REST API URL. Each product passes its own REST endpoint through a separate field on its own configuration.

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
