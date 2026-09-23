---
layout: post
title: React SpreadsheetEditor Collaborative Editing | Syncfusion
description: Learn how real-time collaborative editing synchronizes workbook changes, user presence, and selections in the React SpreadsheetEditor.
control: Collaborative Editing
platform: document-processing
documentation: ug
---

# Collaborative editing in React SpreadsheetEditor

The React SpreadsheetEditor supports real-time collaborative editing, allowing multiple users to work on the same workbook and view synchronized changes, connected users, and selections. It synchronizes supported workbook actions through a collaboration service and maintains a consistent workbook state across users connected to the same room.

## Key features

The React SpreadsheetEditor collaborative editing feature provides:

- **Real-time workbook updates** - Reflects supported workbook changes across users connected to the same collaboration room.
- **Action synchronization** - Synchronizes supported SpreadsheetEditor actions in server-defined version order.
- **User presence and selections** - Displays connected users and highlights their active cells, editing cells, or selected ranges using participant-specific colors.
- **Conflict resolution** - Transforms concurrent operations to maintain a consistent workbook state.
- **Action recovery** - Retrieves and applies actions missed by a user.
- **Late-join synchronization** - Synchronizes users who join an existing collaboration session with the latest workbook state.

## Prerequisites

Collaborative editing requires:

- The React SpreadsheetEditor package.
- The `@syncfusion/ej2-collaborator` package.
- An ASP.NET Core Collaboration Server.
- Redis for temporary collaboration action and version storage.
- WebSocket or SignalR communication.
- A SpreadsheetEditor-specific server adapter.

> **Note:** SpreadsheetEditor collaborative editing requires an ASP.NET-based Collaboration Server for workbook processing and operational transformation.

## Core concepts

### Operational transformation

The Collaboration Server uses operational transformation to process concurrent SpreadsheetEditor actions. When related actions affect cells, ranges, rows, columns, or sheets, the server transforms the operations before storing and broadcasting them.

This ensures that all users connected to the same room receive a consistent workbook state.

### Session management

Each collaboration session is identified by a room ID. Users connected to the same room receive shared workbook actions and presence updates.

A collaboration session manages:

- Connected users and user join or leave events.
- Participant selections and editing presence.
- Server-assigned action versions.
- Missed-action recovery.
- Late-joining users.

### Action types

Collaborative editing supports SpreadsheetEditor actions such as:

- Cell value, formula, and formatting changes.
- Clipboard, sorting, and filtering operations.
- Row, column, and sheet operations.
- Data validation and conditional formatting.
- Comments, replies, notes, hyperlinks, and defined names.
- Images, charts, workbook display, and protection changes.

### Consistency model

The Collaboration Server assigns an authoritative version to each workbook action. Connected users apply actions in version order.

When the client detects a missing version, the SpreadsheetEditor retrieves and applies the missed actions before continuing. This helps all connected users converge to the same workbook state.

## Architecture

### Client - React SpreadsheetEditor

The React SpreadsheetEditor captures local workbook actions, sends them to the Collaboration Server, receives remote actions, and displays connected users and their selections.

The `CollaborativeEditingHandler` manages SpreadsheetEditor-specific collaboration behavior. The `SpreadsheetEditorAdapter` connects the SpreadsheetEditor to the common Collaboration Client.

### Real-time communication layer

The `@syncfusion/ej2-collaborator` package connects the client to the Collaboration Server through WebSocket or SignalR. It manages room connections, user join and leave events, workbook action delivery, presence updates, and selection updates.

### Collaboration Server

The Collaboration Server manages rooms and connected users, assigns action versions, transforms concurrent SpreadsheetEditor operations, stores actions in Redis, broadcasts actions to room participants, and returns missed actions using the client's last synchronized version.

### Redis distributed cache

Redis temporarily stores collaboration actions, versions, and room-related information. Actions are stored in version order so that late-joining users and users who missed updates can synchronize with the latest workbook state.

## How It Works

1. **User joins a session** - A user opens a workbook and joins a collaboration room using a unique room ID.
2. **Real-time connection is established** - A WebSocket or SignalR connection is established with the Collaboration Server.
3. **Actions are synchronized** - Supported SpreadsheetEditor actions are sent to the Collaboration Server as users edit the workbook.
4. **Conflicts are resolved** - The server assigns authoritative versions and transforms concurrent actions using operational transformation.
5. **Updates are broadcast** - Processed actions are broadcast to other users connected to the same room and applied in version order.
6. **Actions are stored and recovered** - Actions are temporarily stored in Redis and can be retrieved to synchronize late-joining users or recover missed updates.

## Use cases

Collaborative editing is suitable for workflows where multiple users review or update the same workbook, including:

- **Financial planning** - Update budgets, forecasts, and financial reports.
- **Project tracking** - Maintain shared schedules, task lists, status updates, and resource information.
- **Inventory management** - Update stock quantities, item availability, and order details.
- **Data review** - Review, correct, format, and annotate shared workbook data.
- **Reporting** - Prepare and validate operational or business reports with multiple participants.

## See also

- [Collaborative editing using ASP.NET Core with Redis](./collaborative-editing-aspnet-core-redis)
