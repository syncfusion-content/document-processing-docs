---
layout: post
title: Suspend and Resume UI Refresh in React Spreadsheet | Syncfusion
description: Improve performance in Syncfusion React Spreadsheet by using suspendRefresh and resumeRefresh to group multiple updates and avoid repeated rendering.
platform: document-processing
control: Spreadsheet
documentation: ug
---

# Supported actions and limitations in React Spreadsheet collaborative editing

Collaborative editing synchronizes supported Spreadsheet actions among users connected to the same room. The Spreadsheet sends local actions to the collaboration service, and remote Spreadsheet instances apply the transformed actions in version order.

## Supported actions

The following Spreadsheet action categories are supported:

### Cell updates

- Edit cell values.
- Enter and update formulas.
- Clear cell content.
- Delete cell content.
- Use AutoFill for cells and ranges.

### Formatting

- Apply font, color, alignment, border, and other cell formatting.
- Apply number formats.
- Wrap cell content.
- Merge and unmerge cells.
- Add and clear conditional formatting.
- Add and remove cell highlights.

### Clipboard operations

- Cut cells and ranges.
- Copy cells and ranges.
- Paste cells and ranges.

### Data operations

- Sort ranges.
- Apply and clear filters.
- Find and replace values.
- Replace all matching values.

### Row and column operations

- Insert rows and columns.
- Delete rows and columns.
- Resize rows and columns.
- Resize rows and columns to fit content.
- Hide and show rows and columns.

### Sheet operations

- Insert and remove sheets.
- Rename sheets.
- Duplicate sheets.
- Move sheets.
- Hide and show sheets.
- Navigate between sheets.

### Data validation

- Add data validation.
- Remove data validation.

### Comments and notes

- Add, edit, delete, resolve, and reopen comments.
- Add, edit, and delete comment replies.
- Add, edit, and delete notes.

### Hyperlinks and defined names

- Add and remove hyperlinks.
- Add defined names.

### Images and charts

- Insert, delete, and refresh images.
- Insert, delete, refresh, and update the design of charts.

### Workbook display and protection

- Show and hide grid lines.
- Show and hide row and column headers.
- Freeze panes.
- Protect sheets.
- Protect the workbook.
- Lock cells.

## User presence and selections

Collaborative editing also synchronizes presence-related information:

- Users connected to the current room.
- User join and leave events.
- Active cells and selected ranges.
- Editing presence.
- Distinct user colors for presence and selections.
- Connected-user information displayed in the Spreadsheet ribbon.

Presence and selection updates are metadata and do not modify workbook content.

## Conflict resolution

The collaboration service uses operational transformation to process concurrent Spreadsheet actions. Each action contains client and server version information. When actions affect related workbook positions or structures, the server adapter transforms the operations before storing and broadcasting them.

This process helps all Spreadsheet instances connected to the same room converge to the same workbook state.

## Action recovery

Redis stores collaboration actions in version order. If a user joins an existing room or misses an action, the Spreadsheet requests actions created after the last synchronized version through `GetActionsFromServer`.

The client applies the returned actions in version order to recover the latest room state.

## Limitations

### Undo and redo

Undo and redo are not synchronized between users. The local undo or redo history must not be treated as a shared collaboration history.

An undo or redo performed in one Spreadsheet does not reverse the corresponding action in another user’s local history.

### Same room requirement

Only users connected to the same room receive each other’s actions and presence information. Applications must provide the same room name to all users participating in the same session.

### Connection requirement

Real-time synchronization requires an active connection to the collaboration service. Actions performed while the connection is unavailable are not guaranteed to synchronize until the application reconnects and recovers missed actions.

### Transport configuration

The transport selected on the client must match the transport configured on the server:

- ASP.NET Core supports SignalR and WebSocket.
- ASP.NET MVC supports WebSocket.
- The Node.js Collaboration Server does not currently support Spreadsheet document processing and operational transformation.

### Server-side processing

Spreadsheet collaborative editing requires a Spreadsheet-specific server adapter to:

- Convert Spreadsheet actions to the common collaboration format.
- Convert common collaboration actions back to Spreadsheet actions.
- Transform concurrent Spreadsheet operations.
- Load and reconstruct the latest workbook state.
- Process queued save requests based on application storage requirements.

### Redis availability

Redis is required by the Collaboration Server. If Redis is unavailable, room operations, versions, user information, and action recovery cannot be maintained reliably.

### Persistence

Redis stores collaboration actions temporarily. Applications must implement workbook persistence in `ProcessSaveRequestAsync` according to their storage requirements.

Redis records should be cleared only after the related workbook changes are successfully processed and saved.

### Custom actions

Custom application actions are not synchronized automatically. Applications must convert custom actions into a supported collaboration action format and implement matching server transformation and client application behavior.

### Version compatibility

Use compatible versions of the Spreadsheet, Spreadsheet server-side package, Collaboration Client, and Collaboration Server. Mismatched package versions can result in missing collaboration modules, incompatible action payloads, or connection failures.

## Recommendations

- Use a stable, unique room name for each workbook session.
- Share the room URL only with intended participants.
- Set the local user before joining the room.
- Join the room only after the latest workbook state and version are loaded.
- Forward local actions only after collaboration initialization completes.
- Apply remote actions using `data.payload`.
- Keep client and server transports consistent.
- Store Redis credentials outside source code.
- Monitor Redis memory, room count, action count, and real-time transport throughput.
- Validate concurrent structural changes such as row, column, and sheet operations for application-specific workflows.

## See also

- [Collaborative editing overview](./overview)
- [Collaborative editing using ASP.NET Core with Redis](./using-redis-cache-asp-net-core)
- [Syncfusion Collaborator overview](https://helpstaging.syncfusion.com/document-processing/collaborator/overview)
