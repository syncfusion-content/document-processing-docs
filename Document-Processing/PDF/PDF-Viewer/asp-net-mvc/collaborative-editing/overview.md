---
layout: post
title: Collaborative Editing in MVC PDF Viewer | Syncfusion
description: Learn how to configure real-time collaborative editing in the Syncfusion MVC PDF Viewer with the Syncfusion Collaborator packages.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Collaborative Editing in Syncfusion MVC PDF Viewer

The MVC PDF Viewer supports real-time collaborative editing through the Syncfusion Collaborator framework. The framework uses a shared client package and a platform-specific Collaboration Server to synchronize PDF Viewer actions between users.

![Collaborative Editing in MVC PDF Viewer](../images/collaborative-editing-pdf-viewer.gif)

## Architecture

Collaborative editing uses the following components:

- **PDF Viewer adapter** - A client-side `PdfViewerAdapter` (JavaScript) implements the collaboration provider contract and translates actions between the PDF Viewer and the Collaboration Client.
- **ej2.min.js** - The Syncfusion EJ2 script (CDN) provides PdfViewer and CollaborationClient components.
- **Collaboration Server** - Use `ej2-collaborator-server` for Node.js.
- **Redis** - Required by the Collaboration Server for operation storage, synchronization, and scale-out.

The Collaboration Server manages the transport, collaboration sessions, operation synchronization, and save processing. The MVC application supplies the control adapter and document routes. Do not add a separate Socket.IO Redis adapter or implement the collaboration operation queue in the PDF Viewer application.

## Collaborative features

Users can collaborate on the same PDF room and see shared changes to:

- **Annotations** - Comments, highlights, drawings, and stamps
- **Form field interactions** - Form field changes and value updates
- **Page Organizer operations** - Page reordering, page rotation, and page changes

## Prerequisites

- An MVC application with HTML views.
- A Redis instance reachable from the server.
- Node.js 18 or later for the Collaboration Server.
- A PDF Viewer adapter (JavaScript) on the client and server. The adapter is the control-specific bridge; the common Collaborator packages provide the collaboration infrastructure.

## Client setup

Load the Syncfusion EJ2 library from CDN and create a `pdfViewerAdapter.js` file that implements the collaboration provider contract. Then create a `CollaborationClient` with the adapter and join the room after the PDF document has been loaded:

**Load from CDN:**

```html
<link href="https://cdn.syncfusion.com/ej2/35.1.37/tailwind3.css" rel="stylesheet" />
<script src="https://cdn.syncfusion.com/ej2/35.1.37/dist/ej2.min.js"></script>
```

Create a `pdfViewerAdapter.js` file that implements the collaboration provider contract, then initialize the CollaborationClient. See the platform-specific pages for the adapter and initialization examples:

- [Collaborative editing with Node.js](./using-redis-cache-nodejs)

## Server setup

The MVC application works with a Node.js Collaboration Server for real-time synchronization:

| Server | Package | Transport |
| --- | --- | --- |
| Node.js | `ej2-collaborator-server` | WebSocket |

Install the Collaboration Server on Node.js and configure Redis for operation storage and synchronization. Register the PDF Viewer server adapter and collaboration routes before starting the server.

The MVC application communicates with the Node.js server via HTTP endpoints (`/api/CollaborativeEditing`) to import files, update actions, and retrieve PDF documents.

## Collaboration flow

1. The adapter posts to `ImportFile` with the room name, PDF file name, and user name.
2. The server returns the current version and pending PDF Viewer action snapshots.
3. The client joins the room with `CollaborationClient.joinRoomAsync`.
4. The PDF Viewer `documentChanged` event sends annotation, form field, form field action, or page organizer operations to `UpdateAction`.
5. The server stores the operation and broadcasts the clean action request to the other users in the room.
6. The adapter applies remote actions through the PDF Viewer collaborative editing handler.
7. `GetPDFDocument` returns the current PDF content for the room, including the finalized document when it is available.

The Node.js sample uses the following routes under `/api/CollaborativeEditing`:

| Route | Purpose |
| --- | --- |
| `POST /ImportFile` | Loads the room state and returns pending operations. |
| `POST /UpdateAction` | Validates, stores, and broadcasts a PDF Viewer operation. |
| `GET /GetPDFDocument` | Retrieves the PDF content for a room as Base64. |

## See Also

- [Collaborative editing with Node.js](./using-redis-cache-nodejs)
- [Collaboration Client](../../../../Collaborator/collaboration-client)
- [Collaboration Server](../../../../Collaborator/collaboration-server)