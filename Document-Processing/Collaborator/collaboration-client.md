---
layout: post
title: Collaboration Client in Syncfusion Collaborator | Syncfusion
description: The Collaboration Client is a browser-side library that enables real-time collaborative editing in Syncfusion EJ2 components.
control: Collaborator
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Collaboration Client

The Collaboration Client (**@syncfusion/ej2\-collaborator**) is a browser\-side library that enables real\-time collaborative editing in Syncfusion Essential JS 2 (EJ2) components such as DOCX Editor, PDF Viewer, and Spreadsheet.

It connects the client application to a Collaboration Server, synchronizes user actions across participants, and applies remote updates in real time.

## Package Overview

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


## Supported Collaborator Servers

The same client can be used with different Collaboration Server implementations.

|Connection Type|Supported Server|
|---|---|
|SignalR|ASP.NET Core|
|WebSocket|ASP.NET Core|
|WebSocket|ASP.NET MVC|
|WebSocket|Node.js|



## Installation
```bash
npm install @syncfusion/ej2\-collaborator 
```

## Public API

Applications typically interact with two public APIs: the `ICollaborationProvider` interface and the `CollaborationClient` class.

### `ICollaborationProvider` — adapter contract


| Member | Purpose |
|---|---|
| `applyRemoteAction(action: string, data: ICollaborationActionData): void` | Apply a remote action received from the collaboration server to the local editor. The action payload is exposed under `data.payload`.|

### `CollaborationClient` — client API surface


| Member | Purpose |
|---|---|
| `constructor(adapter: ICollaborationProvider, options: CollaborationClientOptions)` | Initializes the Collaboration Client with an adapter and connection settings. |
| `joinRoomAsync(roomName: string): Promise<void>` | Connects the transport and sends a `JoinGroup` for `roomName`. Re-emits the server's `connectionId` / `addUser` / `removeUser` / `action` events. |


#### `CollaborationClientOptions` — constructor argument


| Field | Type | Purpose |
|---|---|---|
| `serviceUrl` | `string` | URL of the real-time collaboration server. Example : serviceUrl:"ws://localhost:8080", //Node server      ServiceUrl:"http://localhost:62870", //ASP.NET Core/ASP.NET MVC 
| `connectionType` | `'signalr' | 'websocket'` | Selects the server transport option. Defaults to `'signalr'`. |
| `currentUser` | `string` | Display name broadcast to peers when joining the room. |
| `onUserJoined?` | `(user: UserInfo) => void` | Fired when a remote peer enters the same room.|
| `onUserLeft?` | `(user: UserInfo) => void` | Fired when a remote peer leaves the room.|

## Configuration

The Collaboration Client requires the following configuration:
|Option|Description|
|---|---|
|serviceUrl|URL of the Collaboration Server endpoint|
|connectionType|Transport type (signalr or websocket)|
|currentUser|Display name of the current user|

```ts
const client = new CollaborationClient(adapter, {
    serviceUrl: 'https://localhost:5001',
    connectionType: 'signalr',
    currentUser: 'John',
    onUserJoined: (user: UserInfo) => {
        // User joined
    },
    onUserLeft: (user: UserInfo) => {
        // User left
    }
});

await client.joinRoomAsync(roomName);
```

## Adapter Integration

The Collaboration Client is designed to be control\-agnostic. Each supported EJ2 component integrates through an adapter that implements ICollaborationProvider.

The adapter acts as a bridge between the Collaboration Client and the EJ2 component by:

- Sending local editing operations to the Collaboration Client.

- Receiving remote collaboration actions.

- Applying those actions to the host component.

**Adapter Example**
```ts
public applyRemoteAction( action: string, data: ICollaborationActionData ):void { 
// Apply the remote action to the host component

 } 
```
Because of this architecture, the same Collaboration Client can be reused across DOCX Editor, PDF Viewer, and Spreadsheet, with only the adapter implementation changing for each component.
