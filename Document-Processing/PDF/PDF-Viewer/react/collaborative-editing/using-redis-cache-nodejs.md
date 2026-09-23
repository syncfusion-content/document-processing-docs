---
layout: post
title: Collaborative Editing in React PDF Viewer with Node.js | Syncfusion
description: Learn how to implement collaborative editing in React PDF Viewer using Node.js with Redis for real-time multi-user PDF annotation and interaction.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
appliesto: PDF Viewer SDK
---

# Collaborative Editing in React PDF Viewer with Node.js and Redis

The React PDF Viewer supports collaborative editing which allows multiple users to work on the same PDF document simultaneously. This can be done in real-time so that collaborators can see the annotations and interactions as they are made.

## Prerequisites

The following are needed to enable collaborative editing in PDF Viewer:

- **Socket.IO** or **WebSocket** - For real-time communication
- **Redis** - For distributed caching and operation storage

## Core Concepts

### WebSocket and Socket.IO

- **WebSocket** - A communication protocol that provides full-duplex communication over a single TCP connection
- **Socket.IO** - A library that provides real-time bidirectional communication with fallback options
- **Event-based** - Uses event emitters for sending and receiving messages
- **Broadcasting** - Messages can be sent to one user or broadcast to multiple users

### Operation Transformation in Node.js Context

- **OT Algorithm** - Ensures consistency when multiple users edit simultaneously
- **Transformation Engine** - Server-side logic that transforms operations based on concurrent changes
- **Version Vectors** - Track operation versions for each user
- **Conflict Resolution** - Automatic resolution of concurrent edits

### Room-Based Architecture

- **Rooms** - Isolated collaboration spaces, one per PDF document
- **Broadcasting within rooms** - Changes sent to all users in a room
- **Leave on disconnect** - Automatic cleanup when users disconnect
- **Room state management** - Track all operations and users in each room

### Redis Data Structures

- **Lists** - Store ordered sequence of operations
- **Hashes** - Store user information and room metadata
- **Strings** - Store version information and configuration
- **Sets** - Track active connections and users

## Real-Time Communication Layer

Real-time communication enables instant updates between clients and the server, ensuring seamless collaboration. Socket.IO provides a robust abstraction over WebSockets and can scale across multiple servers using a Redis adapter.

### Scaling Real-Time Communication

Socket.IO with Redis adapter enables horizontal scaling in a Node.js application. It allows you to run multiple instances of your Node.js server while maintaining real-time communication across all connected users.

## Redis

In collaborative editing, Redis is used to store temporary data that helps queue editing operations and resolve conflicts using the `Operational Transformation` algorithm.

All editing operations are stored in the Redis cache. To prevent memory buildup, a `SaveThreshold` limit can be configured at the application level. For example, if the SaveThreshold is set to 100, up to twice that number of editing operations are retained in Redis per document. When this limit is exceeded, the first 100 operations are removed from the cache and automatically saved to the source document.

### Configuration

The configuration and storage size of the Redis cache can be adjusted based on the following considerations:

- **Storage Requirements** - A minimum of 400 KB of cache memory is required per document to store up to 100 editing operations
- **Operation Size** - Increases with the complexity of PDF annotations and markups
- **Connection Limits** - Redis has a limit on concurrent connections that should be configured based on your user base

> For better performance, a minimum `SaveThreshold` value of 100 is recommended.

## Collaborative Editing Architecture

Collaborative editing is built using three main components:

### Client (React PDF Viewer)

- Captures user interactions in the PDF document
- Converts interactions into operations and sends them to the server
- Receives updates from other users and applies them to stay in sync
- Manages user presence and awareness of other collaborators

### Real-Time Communication (Socket.IO/WebSocket)

- Acts as the communication layer between clients and server
- Sends and receives changes instantly
- Broadcasts updates to all connected users in real-time
- Handles connection management and user presence tracking

### Distributed Cache (Redis)

- Temporarily stores all editing operations
- Maintains the correct order of changes
- Resolves conflicts between multiple users using the OT (Operational Transformation) algorithm
- Provides operation history for consistency

## Integrate Collaborative Editing in Client Side

### Step 1: Set up React PDF Viewer

Refer to the [React PDF Viewer getting started](../getting-started) documentation to set up the PDF Viewer component in your React application.

### Step 2: Enable collaborative editing

To enable collaborative editing, configure the PDF Viewer component to support real-time collaboration and set up connection parameters for the collaborative session.

### Step 3: Configure real-time communication

Install Socket.IO client library for real-time communication:

```bash
npm install socket.io-client
```

### Step 4: Join collaborative session

Implement logic to join a collaborative editing session using a unique document ID. Users joining the same session will be able to see each other's annotations and interactions in real-time.

### Step 5: Handle real-time updates

Set up event handlers to receive and process updates from other collaborators, including:

- New annotations added by other users
- Modifications to existing annotations
- User presence updates
- Document page navigation and zoom changes

### Step 6: Broadcast local changes

Send local user changes to the server so they can be broadcast to all other collaborators in the session.

## Integrate Collaborative Editing in Server Side

### Step 1: Create the Node.js web service

Create a Node.js server application using Express or similar framework to handle server-side operations.

### Step 2: Install required dependencies

Install the following Node.js packages for collaborative editing:

```bash
npm install socket.io redis express
```

### Step 3: Configure Redis connection

Configure the Redis cache that stores temporary data for the collaborative editing session. Provide the Redis connection details in your environment configuration or server setup.

### Step 4: Configure Socket.IO for real-time communication

Set up Socket.IO to enable real-time communication between clients and the server. Configure a Redis adapter to enable communication across multiple server instances.

### Step 5: Create collaboration rooms

Implement room management to group users editing the same PDF document. Each document session has a unique room ID that users join to collaborate.

### Step 6: Manage user sessions

Track active users in each collaboration room, including:

- User identification and tracking
- Connection and disconnection management
- Presence notifications to other users in the room
- Session persistence and recovery

### Step 7: Handle operation storage and transformation

Implement logic to:

- Store editing operations in Redis with version tracking
- Transform concurrent operations to resolve conflicts
- Retrieve operation history for consistency
- Clean up operations when save threshold is reached

### Step 8: Implement background persistence

Create a background service to:

- Monitor Redis operation queues
- Save pending operations to the source PDF document
- Maintain consistency across collaborative sessions
- Handle cleanup and cache management

## Save and Recovery

### Auto-Save Mechanism

Collaborative editing includes an automatic save mechanism that:

- Periodically saves pending operations to the PDF document
- Clears Redis cache after successful save
- Recovers unsaved changes if connection is lost
- Maintains document consistency across all users

### Operation History

All editing operations are maintained in order:

- New users joining a session receive the full operation history
- Version numbers track operation sequence
- Operational transformation ensures consistency
- Lost messages can be recovered from Redis

## Troubleshooting

### Connection Issues

- Verify Socket.IO server is running and accessible
- Check firewall and network configuration
- Ensure Redis is accessible from the server
- Review server logs for connection errors

### Data Consistency

- Verify Redis connection and operation storage
- Check operational transformation logic
- Review version numbering and conflict resolution
- Monitor save threshold and operation cleanup

### Performance

- Monitor Redis memory usage
- Track operation queue size
- Review Socket.IO message throughput
- Adjust SaveThreshold if needed

## See Also

- [Collaborative editing overview](./overview)
- [PDF Viewer annotations](../annotation)
- [PDF Viewer getting started](../getting-started)