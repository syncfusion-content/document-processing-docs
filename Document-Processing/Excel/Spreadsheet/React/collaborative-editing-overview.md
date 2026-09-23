---
layout: post
title: Suspend and Resume UI Refresh in React Spreadsheet | Syncfusion
description: Improve performance in Syncfusion React Spreadsheet by using suspendRefresh and resumeRefresh to group multiple updates and avoid repeated rendering.
platform: document-processing
control: Spreadsheet
documentation: ug
---

# Collaborative editing in Syncfusionn React SpreadsheetEditor

The React Spreadsheet supports real-time collaborative editing, allowing multiple users to edit the same workbook and view synchronized changes, connected users, and selections. To enable collaborative editing, set the `enableCollaborativeEditing` property to `true` and inject the `CollaborativeEditingHandler` module into the Spreadsheet.

The Spreadsheet integrates with the `@syncfusion/ej2-collaborator` package to enable multi-user editing through a WebSocket/SignalR-based collaboration service. A `SpreadsheetEditorAdapter` acts as a bridge between the Spreadsheet, the Collaboration Client, and the backend collaboration service.

## Key features

### Real-time workbook updates

Changes made by one user are reflected in the Spreadsheet instances of the other users connected to the same collaboration room. This keeps the workbook state synchronized while users edit cells, apply formatting, manage workbook content, and perform other supported actions.

> **GIF placeholder:** Real-time workbook updates across multiple users.

### Comprehensive action synchronization

Collaborative editing synchronizes supported Spreadsheet actions, including cell value updates, formatting, clipboard operations, sorting, filtering, row and column operations, formulas, comments, notes, hyperlinks, images, charts, and data validation.

The Spreadsheet sends local actions to the collaboration service in the order in which the actions occur. The service assigns versions, transforms concurrent actions when required, stores the actions in Redis, and broadcasts the resulting actions to other users in the room.

> **GIF placeholder:** Synchronizing Spreadsheet actions between users.

### User presence and selections

The Spreadsheet displays the users connected to the current collaboration room. Each user is represented using a distinct color. The same color is used to highlight the active cell or selected range of that user, helping participants identify where others are working.

Connected users are also displayed in the Spreadsheet ribbon. User presence is updated when participants join or leave the room.

> **GIF placeholder:** User presence in the ribbon and colored selections in the workbook.

### Editing presence

When a participant edits a cell, the other connected users can identify the participant working in that area of the workbook. Editing and selection indicators help reduce overlapping changes and improve awareness during a collaborative session.

> **GIF placeholder:** Editing presence while users work in shared cells and ranges.

### Conflict resolution

When multiple users perform concurrent operations, the collaboration service uses operational transformation to process the actions in a consistent order. The transformation process adjusts affected operations when required so that all connected Spreadsheet instances converge to the same workbook state.

Each action is associated with version information. Version tracking helps the service identify concurrent operations, recover actions that a client has not received, and maintain consistency among participants.

> **GIF placeholder:** Concurrent operations resolved consistently across users.

### Room-based collaboration

Users collaborate by joining the same room. A room name uniquely identifies a collaboration session. Users who open the Spreadsheet with the same room name receive the latest workbook state and subsequent updates for that room.

A room name can be included in a shareable URL. Opening that URL in another browser window or tab connects the user to the same collaboration session.

> **GIF placeholder:** Joining the same room through a shared URL.

### Action recovery and consistency

The collaboration service stores pending actions in Redis. When a user joins an existing room or reconnects after missing an update, the Spreadsheet requests actions created after the last synchronized version and applies them in order.

This recovery process helps connected users return to the latest workbook state without requiring another participant to repeat an action.

> **GIF placeholder:** Recovering missed actions after joining or reconnecting.

## Architecture

Collaborative editing uses the following parts:

- **React Spreadsheet** captures local workbook actions and applies remote actions.
- **CollaborativeEditingHandler** manages Spreadsheet-specific room, version, presence, selection, action-sending, and action-application behavior.
- **SpreadsheetEditorAdapter** implements the collaboration provider contract and connects the Spreadsheet to the Collaboration Client.
- **Collaboration Client** joins rooms and exchanges actions and presence information with the server.
- **Collaboration Server** manages rooms, versions, connected users, action transformation, Redis storage, and real-time broadcasting.
- **Redis** temporarily stores ordered collaboration actions and room-related information.

## How collaborative editing works

1. The application enables collaborative editing and injects `CollaborativeEditingHandler`.
2. The adapter loads the workbook and obtains the room version from the server.
3. The adapter initializes the Spreadsheet by calling `updateRoomInfo` and opens the workbook JSON.
4. The Collaboration Client joins the room through SignalR or WebSocket.
5. The Spreadsheet sends supported local actions to the server.
6. The server versions, transforms, stores, and broadcasts the actions.
7. Other users receive the actions and apply them through `applyRemoteAction`.
8. Users who join late or miss actions retrieve updates created after their last synchronized version.

## Prerequisites

Collaborative editing requires:

- The `@syncfusion/ej2-collaborator` client package.
- An ASP.NET Core or ASP.NET MVC Collaboration Server.
- A Redis instance accessible from the Collaboration Server.
- SignalR or WebSocket communication between the client and server.
- Spreadsheet server-side processing for loading workbooks, transforming Spreadsheet actions, and saving changes.

> **Note:** Spreadsheet collaborative editing requires an ASP.NET-based Collaboration Server. The Node.js Collaboration Server does not currently provide Spreadsheet document processing and operation transformation.

## See also

- [Syncfusion Collaborator overview](https://helpstaging.syncfusion.com/document-processing/collaborator/overview)
- [Collaboration Client](https://helpstaging.syncfusion.com/document-processing/collaborator/collaboration-client)
- [Collaboration Server](https://helpstaging.syncfusion.com/document-processing/collaborator/collaboration-server)
