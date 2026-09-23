---
layout: post
title: Collaborative Editing in TypeScript SpreadsheetEditor | Syncfusion
description: Learn how real-time collaborative editing synchronizes workbook changes, user presence, and selections in the TypeScript SpreadsheetEditor.
control: Collaborative Editing
platform: document-processing
documentation: ug
---

# Collaborative editing in TypeScript SpreadsheetEditor

The TypeScript SpreadsheetEditor supports real-time collaborative editing, allowing multiple users to work on the same workbook and view synchronized changes, connected users, and selections. Supported workbook actions are synchronized through a collaboration service to maintain a consistent workbook state for users connected to the same room.

## Key features

- **Real-time workbook updates** - Reflects supported workbook changes across users connected to the same collaboration room.
- **Action synchronization** - Synchronizes supported SpreadsheetEditor actions in server-defined version order.
- **User presence and selections** - Displays connected users and highlights their active cells, editing cells, or selected ranges using participant-specific colors.
- **Conflict resolution** - Transforms concurrent operations to maintain a consistent workbook state.
- **Action recovery** - Retrieves and applies actions missed by a user.
- **Late-join synchronization** - Synchronizes users who join an existing session with the latest workbook state.

## Prerequisites

Collaborative editing requires the TypeScript SpreadsheetEditor package, the `@syncfusion/ej2-collaborator` package, an ASP.NET Core Collaboration Server, Redis, WebSocket or SignalR communication, and a SpreadsheetEditor-specific server adapter.

> **Note:** SpreadsheetEditor collaborative editing requires an ASP.NET-based Collaboration Server for workbook processing and operational transformation.

## Core concepts

### Operational transformation

The Collaboration Server transforms related concurrent actions that affect cells, ranges, rows, columns, or sheets before storing and broadcasting them. This helps all users in the room maintain a consistent workbook state.

### Session management

Each session is identified by a room ID. Users connected to the same room receive shared workbook actions and presence updates. A session manages connected users, join and leave events, selections, editing presence, action versions, recovery, and late-joining users.

### Action types

Collaborative editing supports cell values, formulas, formatting, clipboard actions, sorting, filtering, row, column, and sheet operations, validation, conditional formatting, comments, notes, hyperlinks, defined names, images, charts, display settings, and protection changes.

### Consistency model

The server assigns an authoritative version to each action. Clients apply actions in version order and retrieve missing versions before continuing.

## Architecture

### Client - TypeScript SpreadsheetEditor

The SpreadsheetEditor captures local actions, sends them to the Collaboration Server, receives remote actions, and displays connected users and selections. The collaborative editing module manages SpreadsheetEditor-specific behavior, while `SpreadsheetEditorAdapter` connects the SpreadsheetEditor to the Collaboration Client.

### Real-time communication layer

The `@syncfusion/ej2-collaborator` package connects the client through WebSocket or SignalR and manages room connections, user events, action delivery, presence, and selections.

### Collaboration Server

The server manages rooms and users, assigns versions, transforms concurrent operations, stores actions in Redis, broadcasts actions, and returns missed actions.

### Redis distributed cache

Redis temporarily stores collaboration actions, versions, and room information in version order for late-join synchronization and missed-action recovery.

## How it works

1. **User joins a session** - A user opens a workbook and joins a room using a unique room ID.
2. **Real-time connection is established** - A WebSocket or SignalR connection is established with the server.
3. **Actions are synchronized** - Supported SpreadsheetEditor actions are sent to the server.
4. **Conflicts are resolved** - The server versions and transforms concurrent actions.
5. **Updates are broadcast** - Processed actions are sent to other users and applied in version order.
6. **Actions are stored and recovered** - Redis supports late-join synchronization and missed-update recovery.

## Use cases

- **Financial planning** - Update budgets, forecasts, and financial reports.
- **Project tracking** - Maintain schedules, tasks, status updates, and resources.
- **Inventory management** - Update stock availability and order details.
- **Data review** - Review, correct, format, and annotate workbook data.
- **Reporting** - Prepare and validate reports with multiple participants.

## See also

- [Collaborative editing integration](./integration)
- [Using Redis Cache with ASP.NET Core](./aspnet-core-redis)
