---
layout: post
title: Collaborative Editing in React PDF Viewer | Syncfusion
description: Learn about the overview of collaborative editing in Syncfusion React PDF Viewer and real-time multi-user annotation and interaction.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Collaborative Editing in Syncfusion React PDF Viewer

The React PDF Viewer supports collaborative editing features that allow multiple users to work on the same PDF document simultaneously. This enables real-time collaboration where users can see annotations, markups, and interactions from other collaborators as they are made.

## Key Features

Collaborative editing in React PDF Viewer provides:

- **Real-time synchronization** - Multiple users can view and interact with the same PDF document
- **Instant updates** - Changes made by one user are immediately visible to all collaborators
- **User presence tracking** - See which users are currently viewing and editing the document
- **Shared annotations** - Add, modify, and delete annotations that are visible to all users
- **Conflict resolution** - Automatic handling of simultaneous edits using operational transformation
- **Session management** - Room-based collaboration where users join a document session

## Prerequisites

To enable collaborative editing in PDF Viewer, you need:

- **Real-Time Transport Protocol** - Enables instant communication between clients and the server
  - Manages active connections for seamless collaboration
  - Broadcasts changes to all connected users in real-time
  
- **Distributed Cache or Database** - Stores and queues collaborative editing operations
  - Distributed Cache: Recommended for better performance (handles ~125 requests/second on 2 vCPU, 8GB RAM)
  - Database: Alternative option (handles ~50 requests/second on same configuration)

## Core Concepts

### Operational Transformation (OT)

Operational Transformation is the algorithm used to resolve conflicts when multiple users edit the document simultaneously. It ensures that all users see the same final state of the document regardless of the order in which operations arrive.

- **Transformation Function** - Transforms operations based on concurrent changes to maintain consistency
- **Version Control** - Each operation is assigned a version number to track sequence
- **Conflict Resolution** - Automatically reconciles conflicting edits from different users
- **Consistency Guarantee** - All users converge to the same document state

### Session Management

Sessions represent collaborative editing contexts where multiple users work together on a PDF document.

- **Room-based sessions** - Each document has a unique room ID that users join
- **User tracking** - Active users in a session are identified and displayed
- **Operation queuing** - All changes are queued and applied in order
- **State synchronization** - New users receive the complete operation history when joining

### Operation Types

Different types of operations that can occur in collaborative editing:

- **Annotation Operations** - Adding, modifying, or deleting annotations (highlights, comments, stamps)
- **Interaction Operations** - Page navigation, zoom changes, scroll position
- **Navigation Operations** - Page changes, view adjustments
- **Metadata Operations** - User presence, cursor position, selection state

### Consistency Models

- **Strong Consistency** - All users see the same state at the same time
- **Eventual Consistency** - Users may temporarily see different states but converge to the same state
- **Causal Consistency** - Causally related operations maintain their order

## Architecture

Collaborative editing consists of three main components:

### Client (React PDF Viewer)
- Captures user interactions (annotations, markups, zoom, page navigation)
- Converts interactions into operations and sends them to the server
- Receives updates from other users and applies them in real-time

### Real-Time Communication Layer
- Facilitates instant two-way communication between clients and server
- Broadcasts user changes to all connected collaborators
- Manages connection lifecycle and user presence

### Distributed Cache/Database
- Temporarily stores all editing operations in order
- Maintains operation history for new users joining sessions
- Resolves conflicts between simultaneous edits using Operational Transformation algorithm

## How It Works

1. **User joins session** - A user opens a PDF document and joins a collaborative room using a unique session ID

2. **Real-time connection established** - WebSocket connection is opened with the server for instant communication

3. **Operations are synchronized** - When a user makes changes (annotations, markups), operations are sent to server

4. **Conflict resolution** - Server resolves concurrent edits using operational transformation

5. **Broadcasting updates** - All changes are broadcast to other connected users in the same session

6. **Persistence** - Operations are saved to the distributed cache/database and can be recovered if connections drop

## Use Cases

- **Document review and approval** - Multiple reviewers can annotate and comment on the same PDF
- **Real-time collaboration** - Teams working together on document analysis and markup
- **Shared training sessions** - Instructors and participants collaborating on document review
- **Legal document annotation** - Multiple attorneys reviewing and marking legal documents
- **Publishing workflows** - Editorial teams collaborating on document editing and markup

## Performance Considerations

For estimating your application's capacity:

- Average user edit rate: 2-5 requests per second per user
- Example: 1000 concurrent users = 2000-5000 requests per second total
- Choose a distributed cache configuration that supports your expected traffic

> For better reliability and performance, use a distributed cache (like Redis) instead of a database for storing operations.

## See Also

- [Collaborative editing using ASP.NET Core with Redis](./using-redis-cache-asp-net-core)
- [Collaborative editing using Node.js with Redis](./using-redis-cache-nodejs)
- [PDF Viewer getting started](../getting-started)
- [Annotations and markup](../annotation)