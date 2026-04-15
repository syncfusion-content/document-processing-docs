---
layout: post
title: Spreadsheet architecture overview | Syncfusion
description: Comprehensive overview of the Syncfusion React Spreadsheet architecture, including rendering, calculations, and data binding. Suitable for beginners and advanced users.
control: Architecture
platform: document-processing
documentation: ug
---

# Spreadsheet Architecture Guide

## Introduction

The **Syncfusion React Spreadsheet** is a powerful, web-based Excel-like editor built on a clear, three-layer architecture. This guide explains how the Spreadsheet handles rendering, calculations, and data flow—making it easy to understand whether you are a beginner or an advanced user. By the end, you’ll know how your data and actions move through the component, and how to make the best architectural choices for your application.

## Spreadsheet Architecture Overview

The Spreadsheet is organized into three main layers, each with a specific role:

```
┌──────────────────────────────────────────┐
│  UI Layer (What you see)                 │
│  - Cells, menus, toolbars, interactions  │
├──────────────────────────────────────────┤
│  Data Layer (Workbook Model)             │
│  - Sheets, cell values, formatting, state│
├──────────────────────────────────────────┤
│  Calculation Layer (Calculate Engine)    │
│  - Formulas, dependencies, calculations  │
└──────────────────────────────────────────┘
```

### UI Layer
This is the visible part of the Spreadsheet. It handles user interactions—like typing in cells, selecting ranges, using menus, and applying formatting. The UI responds instantly to your actions and updates as you scroll or edit.

### Data Layer (Workbook Model)
This layer stores all your spreadsheet data: cell values, formatting (colors, fonts, borders), sheet structure, validation rules, and undo/redo history. Think of it as the database that keeps everything organized and persistent.

### Calculation Layer (Calculate Engine)
This engine automatically computes formulas and manages dependencies between cells. If you enter `=A1+B1`, this layer recalculates the result whenever A1 or B1 changes. It supports 150+ Excel-compatible functions and advanced features like cross-sheet references and named ranges.

### How Data Flows (User Action to Update)

1. **User interacts with UI** (e.g., edits a cell)
2. **UI captures the action** and triggers the relevant feature module (editing, formatting, etc.)
3. **Data Layer updates** the cell value or formatting
4. **Calculation Layer recalculates** any affected formulas
5. **UI re-renders** to show the updated result

This flow ensures the Spreadsheet always displays the latest data and calculated values.

## Rendering Architecture

### Smart (Viewport-Based) Rendering

The Spreadsheet is optimized for performance—even with millions of rows. It uses **viewport rendering**, which means only the cells currently visible on screen are rendered. As you scroll, new cells come into view and are drawn, while off-screen cells are removed from memory.

```
OFF-SCREEN (not rendered)
    ↓
VIEWPORT (visible cells only)
    ↓
OFF-SCREEN (not rendered)
```

**Benefits:**
- Handles huge datasets smoothly
- Keeps memory usage low
- Fast, responsive scrolling and editing

### Formatting and Frozen Areas

Formatting (bold, colors, alignment, borders) is stored in the Data Layer. When a cell is rendered, these rules are applied instantly. Frozen rows/columns (like headers) stay visible as you scroll, making large sheets easier to navigate.


## Formula Calculation Engine

### How Formula Calculation Works

When you enter a formula (e.g., `=SUM(A1:A10)`):

```
Formula entered → Parser reads it → Engine identifies referenced cells
    → Calculates result → Stores result → UI displays updated value
```

If a referenced cell changes, the engine automatically recalculates and updates all dependent cells.

### Key Features

- **80+ Excel-compatible functions:** Math, text, date, logic, lookup, statistics, and more
- **Dependency tracking:** Automatically updates all cells that depend on changed values
- **Cross-sheet formulas:** Reference cells from other sheets
- **Named ranges:** Assign names to cell ranges for readable formulas (e.g., `=SUM(Sales)`)
- **Error handling:** Detects and reports errors like division by zero, invalid references, wrong data types, and circular references
- **Calculation modes:**
  - **Automatic (default):** Formulas update instantly when data changes
  - **Manual:** Formulas update only when triggered (useful for very large sheets)

---

## Data Binding Architecture

Data binding is how you get data into the Spreadsheet. There are three main approaches:

### Local Data Binding

Your data is already in your application (e.g., a React component). You pass it directly to the Spreadsheet:

```
Your App Data → Spreadsheet → Display
```

**Example:**
```js
const myData = [
  { name: 'Alice', sales: 100 },
  { name: 'Bob', sales: 200 }
];

<Spreadsheet dataSource={myData} />
```

**Use Local when:**
- Data is small to medium (< 100K rows)
- Data is already loaded in your app
- You want instant response (no server delay)

### Remote Data Binding

Your data comes from an external source (Excel file, CSV, database). The server processes the file and sends it to the Spreadsheet:

```
Upload File → Server Converts → Spreadsheet Receives Data → Display
```

**Use Remote when:**
- Importing Excel/CSV files
- Loading data from a database
- Data is very large or needs secure processing
- You want to preserve Excel formatting and formulas

### Hybrid Data Binding

Combine local and remote data for flexible workflows:
- **Load + Edit:** Import initial data from server, allow full client-side editing, export modified version back
- **Mixed Data:** Bind some cells/ranges to remote sources, others to local data
- **Progressive Loads:** Start with local data, import updated datasets from server as needed

---

## Client-Side vs Server-Side Processing

Some operations happen instantly in your browser (client-side), while others require a server (server-side).

### Client-Side Processing

**Operations:**
- Typing/editing cells
- Formatting (bold, colors, alignment)
- Sorting/filtering small datasets
- Formula calculations
- Undo/redo
- Data validation

**Advantages:**
- Instant feedback
- Works offline
- No server needed
- Lower server load

**Limitations:**
- Limited by browser memory
- Large datasets may slow down
- Data/formulas visible in browser (not secure for sensitive info)

### Server-Side Processing

**Operations:**
- Import/export Excel/CSV files
- Report generation
- Loading data from databases
- Secure or complex calculations

**Advantages:**
- Handles huge files
- Protects sensitive data
- Consistent behavior across browsers
- Can access external databases

**Limitations:**
- Network delay
- Requires backend infrastructure
- Higher server resource usage

### Quick Decision Table

| Task | Where? | Why |
|------|--------|-----|
| User types in cell | Client | Instant feedback |
| User clicks sort button | Client | No delay |
| User imports Excel file | Server | File parsing needed |
| User exports to Excel | Server | Format conversion |
| User filters 1000 rows | Client | Small enough for browser |
| Database query needed | Server | Must access database |


## Summary

Understanding these layers helps you:
- Know why the Spreadsheet performs well
- Understand how your data moves through the system
- Make good choices about local vs remote data
- Troubleshoot performance issues
- Design better spreadsheet workflows

## See Also

- [Getting Started with React Spreadsheet](./getting-started)
- [Data Binding](./data-binding)
- [Formulas](./formulas)
- [Events](./events)