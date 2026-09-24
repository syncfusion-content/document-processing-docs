---
layout: post
title: Collaborative Editing in ASP.NET MVC SpreadsheetEditor | Syncfusion
description: Learn how real-time collaborative editing synchronizes workbook changes, user presence, and selections in the ASP.NET MVC SpreadsheetEditor.
control: Collaborative Editing
platform: document-processing
documentation: ug
---

# Collaborative editing in ASP.NET MVC SpreadsheetEditor

The ASP.NET MVC SpreadsheetEditor supports real-time collaborative editing, allowing multiple users to work on the same workbook and view synchronized changes, connected users, and selections. Supported workbook actions are synchronized through a collaboration service to maintain a consistent workbook state for users connected to the same room.

## Key features

- **Real-time workbook updates** - Reflects supported workbook changes across users connected to the same collaboration room.
- **Action synchronization** - Synchronizes supported SpreadsheetEditor actions in server-defined version order.
- **User presence and selections** - Displays connected users and highlights their active cells, editing cells, or selected ranges using participant-specific colors.
- **Conflict resolution** - Transforms concurrent operations to maintain a consistent workbook state.
- **Action recovery** - Retrieves and applies actions missed by a user.
- **Late-join synchronization** - Synchronizes users who join an existing collaboration session with the latest workbook state.

## Prerequisites

Collaborative editing requires:

- The ASP.NET MVC SpreadsheetEditor package.
- The `@syncfusion/ej2-collaborator` package.
- An ASP.NET Core Collaboration Server.
- Redis for temporary collaboration action and version storage.
- WebSocket or SignalR communication.
- A SpreadsheetEditor-specific server adapter.

> **Note:** SpreadsheetEditor collaborative editing requires an ASP.NET-based Collaboration Server for workbook processing and operational transformation.

## Core concepts

### Operational transformation

The Collaboration Server uses operational transformation to process concurrent SpreadsheetEditor actions. When related actions affect cells, ranges, rows, columns, or sheets, the server transforms the operations before storing and broadcasting them. This ensures that users connected to the same room receive a consistent workbook state.

### Session management

Each collaboration session is identified by a room ID. Users connected to the same room receive shared workbook actions and presence updates. A session manages connected users, join and leave events, selections, editing presence, action versions, missed-action recovery, and late-joining users.

### Action types

Collaborative editing supports cell value, formula, formatting, clipboard, sorting, filtering, row, column, sheet, data validation, conditional formatting, comment, note, hyperlink, defined name, image, chart, display, and protection actions.

### Consistency model

The Collaboration Server assigns an authoritative version to each workbook action. Connected users apply actions in version order. When a client detects a missing version, the SpreadsheetEditor retrieves and applies the missed actions before continuing.

## Architecture

### Client - ASP.NET MVC SpreadsheetEditor

The SpreadsheetEditor captures local workbook actions, sends them to the Collaboration Server, receives remote actions, and displays connected users and selections. `CollaborativeEditingHandler` manages SpreadsheetEditor-specific collaboration behavior, while `SpreadsheetEditorAdapter` connects the SpreadsheetEditor to the Collaboration Client.

### Real-time communication layer

The `@syncfusion/ej2-collaborator` package connects the client to the Collaboration Server through WebSocket or SignalR. It manages room connections, user events, workbook action delivery, presence updates, and selection updates.

### Collaboration Server

The Collaboration Server manages rooms and connected users, assigns action versions, transforms concurrent operations, stores actions in Redis, broadcasts actions, and returns missed actions using the client's last synchronized version.

### Redis distributed cache

Redis temporarily stores collaboration actions, versions, and room information in version order for late-join synchronization and missed-action recovery.

## How it works

1. **User joins a session** - A user opens a workbook and joins a collaboration room using a unique room ID.
2. **Real-time connection is established** - A WebSocket or SignalR connection is established with the Collaboration Server.
3. **Actions are synchronized** - Supported SpreadsheetEditor actions are sent to the server as users edit the workbook.
4. **Conflicts are resolved** - The server assigns versions and transforms concurrent actions using operational transformation.
5. **Updates are broadcast** - Processed actions are sent to other users in the same room and applied in version order.
6. **Actions are stored and recovered** - Redis supports late-join synchronization and missed-update recovery.

## Use cases

- **Financial planning** - Update budgets, forecasts, and financial reports.
- **Project tracking** - Maintain schedules, tasks, status updates, and resource information.
- **Inventory management** - Update stock quantities, availability, and order details.
- **Data review** - Review, correct, format, and annotate shared workbook data.
- **Reporting** - Prepare and validate reports with multiple participants.

## See also

- [Collaborative editing integration](./integration)
- [Using Redis Cache with ASP.NET Core](./aspnet-core-redis)
