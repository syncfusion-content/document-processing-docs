---
layout: post
title: Spreadsheet architecture overview | Syncfusion
description: Overview of Syncfusion React Spreadsheet architecture, covering rendering, calculations, and data binding for beginners and advanced users.
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
This engine automatically computes formulas and manages dependencies between cells. If you enter `=A1+B1`, this layer recalculates the result whenever A1 or B1 changes. It supports 80+ Excel-compatible functions and advanced features like cross-sheet references and named ranges.

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

## Local Data Binding

Local data binding allows you to bind in-memory application data directly to the Spreadsheet component. The data, typically structured as an array of objects, is assigned to the `dataSource` property of the `RangeDirective`, enabling immediate rendering in the Spreadsheet.

```
Application Data → Spreadsheet → Display
```

### Example
```js
const myData = [
  { name: 'Alice', sales: 100 },
  { name: 'Bob', sales: 200 }
];

<SpreadsheetComponent>
  <SheetsDirective>
    <SheetDirective>
      <RangesDirective>
        <RangeDirective dataSource={myData}></RangeDirective>
      </RangesDirective>
    </SheetDirective>
  </SheetsDirective>
</SpreadsheetComponent>
```

### Use Local Data Binding When:
- The dataset size is small to medium (typically less than 100,000 rows).
- The data is already available in the client application.
- Immediate responsiveness is required without any server round trips.

---

## Remote Data Binding

Remote data binding enables the Spreadsheet to retrieve and display data from external sources, such as APIs or databases, instead of relying solely on in-memory application data.

```
External Source (API / Database) → Spreadsheet → Display
```

### Recommended Use Cases:
- Loading data from remote databases or web services
- Working with large, dynamic, or frequently updated datasets
- Maintaining security by keeping sensitive data on the server

### How It Works:
- The Spreadsheet requests data from a backend service or remote endpoint (for example, a REST API, GraphQL endpoint, or custom service).
- The backend fetches, processes, or transforms the data as required (such as converting database results or file contents into a JSON format).
- The processed data is sent to the client and rendered in the Spreadsheet.
- Any edits or changes made in the Spreadsheet can optionally be sent back to the backend for persistence or further processing.

**Note:** Remote data binding focuses on connecting to and displaying data from external sources. File-based operations such as importing or exporting Excel or CSV files are handled separately through dedicated import/export features.

---

## Client-Side vs. Server-Side Processing

Spreadsheet operations can be executed either in the browser (client-side) or on a backend system (server-side), depending on the nature and complexity of the task.

### Client-Side Processing

Client-side processing handles operations directly within the user's browser.

**Common Operations:**
- Cell editing and data entry
- Formatting (font styles, colors, alignment)
- Sorting and filtering smaller datasets
- Formula evaluation
- Undo and redo actions
- Data validation

**Advantages:**
- Immediate visual feedback
- Works offline once data is loaded
- No backend dependency for basic operations
- Reduced server load

**Limitations:**
- Constrained by browser memory and performance
- Reduced performance with very large datasets
- Data and formulas remain visible in the browser, which may not be suitable for sensitive information

---

### Server-Side Processing

Server-side processing offloads data handling and computation to a backend system.

**Common Operations**:
- Loading data from databases
- Generating reports
- Performing secure or computationally intensive calculations

**Advantages:**
- Efficient handling of large datasets
- Enhanced data security
- Consistent behavior across different browsers
- Direct access to databases and enterprise systems

**Limitations:**
- Network latency may occur, especially under high traffic or single-endpoint load
- Requires backend infrastructure and ongoing maintenance

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