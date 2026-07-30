---
layout: post
title: WebMCP Integration in React Spreadsheet | Syncfusion
description: Integrate WebMCP with React Spreadsheet to enable AI agents and external tools to automate spreadsheet operations programmatically.
platform: document-processing
control: WebMCP
documentation: ug
---

# WebMCP Integration in React Spreadsheet

## Overview

**WebMCP (Model Context Protocol)** is a powerful integration framework that exposes your Syncfusion Spreadsheet as a set of standardized tools accessible to AI agents, LLMs, and external applications. Instead of building custom APIs for each tool integration, WebMCP provides a universal interface that enables seamless interoperability between your spreadsheet and any MCP-compatible client.

## Why WebMCP?

### Key Benefits

| Benefit | Description |
|---------|-------------|
| **Universal Tool Access** | Expose spreadsheet operations as standardized MCP tools that any AI agent or LLM can discover and invoke. |
| **Zero Custom Code** | No need to build proprietary APIs or middleware — WebMCP handles the integration automatically. |
| **Secure & Controlled** | Selectively register only the tools your application needs, ensuring a focused and secure interface. |
| **Multi-Instance Support** | Run multiple spreadsheets on the same page, each with independently scoped tools to prevent naming conflicts. |
| **Undo/Redo Compatible** | All tool operations integrate with the spreadsheet's native undo/redo history for seamless user control. |
| **Real-Time Feedback** | Tools provide immediate, actionable feedback and confirmation messages via the MCP protocol. |

### Use Cases

- **AI-Powered Assistants**: Enable LLMs and chatbots to perform spreadsheet tasks autonomously
- **Enterprise Automation**: Integrate with enterprise AI systems and workflow orchestration platforms
- **External Tool Integration**: Connect third-party applications and services to your spreadsheet
- **Multi-Agent Workflows**: Build distributed workflows where multiple AI agents collaborate on spreadsheet data
- **Custom Data Processing**: Allow external systems to read data, analyze it, and apply transformations


## Getting Started

### Inject the WebMCP Module

Import and inject the `WebMcpAdapter` module into your Spreadsheet component:

```ts
import { Spreadsheet, WebMcpAdapter } from '@syncfusion/ej2-react-spreadsheet';

// Inject the WebMCP module to expose MCP tools
Spreadsheet.Inject(WebMcpAdapter);
```

### Enable WebMCP

Set the `enableWebMcp` property to `true` in the Spreadsheet configuration:

```ts
const spreadsheet = new Spreadsheet({
    enableWebMcp: true,  // Enable WebMCP integration
    sheets: [{
        name: 'Sales Data',
        ranges: [{ dataSource: myData }]
    }],
    // ... other configuration
});
```

### Register Tools on the Application

Once WebMCP is enabled, call the built-in `registerWebMcpTools()` public method on the Spreadsheet instance to register tools on `document.modelContext`. This method internally retrieves tool schemas, prefixes each tool name, binds the execute callback, and calls `modelContext.registerTool()` — no custom helper function is required.

**Signature:**
```ts
public registerWebMcpTools(prefix?: string, toolNames?: string[]): void
```

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `prefix` | `string` | ❌ | Unique prefix to avoid name collisions across multiple instances (e.g. `sales`, `requirement`). Defaults to the spreadsheet element's `id` if omitted. |
| `toolNames` | `string[]` | ❌ | Array of permitted tool names to register. When omitted, all available tools are registered. |

### Use in Your Application

Call `registerWebMcpTools()` directly on the Spreadsheet instance after it is initialized:

```ts
const spreadsheet = new Spreadsheet({
    enableWebMcp: true,
    sheets: [{
        name: 'Price Details',
        ranges: [{ dataSource: defaultData }]
    }],
    created: (): void => {
        // Register all WebMCP tools with instance prefix 'sales'
        spreadsheet.registerWebMcpTools('sales');
    }
});

spreadsheet.appendTo('#spreadsheet');
```

## WebMCP Customization

### Selective Tool Registration

By default, all available WebMCP tools are registered. To expose only specific tools, pass an array of permitted tool names as the second argument:

```ts
// Register only data reading and editing tools
spreadsheet.registerWebMcpTools('sales', [
    'getCellData',
    'getRangeData',
    'editCell',
    'formatCells'
]);
```

### Multiple Spreadsheet Instances

When hosting multiple spreadsheets on the same page, use unique prefixes to prevent tool name collisions:

```ts
// First spreadsheet instance
spreadsheet1.registerWebMcpTools('sales');

// Second spreadsheet instance
spreadsheet2.registerWebMcpTools('gdp');
```

Now MCP clients can call `sales_getCellData`, `sales_editCell`, etc., distinguishing between instances automatically.

### Event Handling

Implement the `beforeWebMcpToolExecute` event to validate, monitor, or control tool execution:

```ts
const spreadsheet = new Spreadsheet({
    enableWebMcp: true,
    beforeWebMcpToolExecute: (args: WebMcpToolExecuteEventArgs): void => {
        console.log(`Tool: ${args.toolName}, Args:`, args.toolArgs);
        
        // Example: Cancel risky operations
        if (args.toolName.includes('delete')) {
            args.cancel = true;  // Prevent execution
            console.warn('Delete operations are not allowed');
        }
        
        // Example: Show confirmation dialog for critical operations
        if (args.toolName.includes('formatCells')) {
            args.showConfirmationDialog = true;
        }
    }
});
```

## Spreadsheet WebMCP Tools

WebMCP exposes **28 tools** that any MCP client can discover and invoke. Read-only tools execute immediately without a confirmation dialog; write tools require user confirmation by default.

### Read-Only Tools (No Confirmation Required)

| Tool | Description |
|------|-------------|
| **getCellData** | Retrieve the value, formula, display text, and format of a single cell (e.g., `"A1"`, `"Sheet2!B3"`). |
| **getRangeData** | Retrieve values, formulas, and formatting from a cell range (e.g., `"A1:C10"`). Returns up to 200 rows; check the `truncated` flag and paginate for larger ranges. |
| **getSheetInfo** | Get sheet metadata including name, dimensions, used range, and row/column counts. |
| **evaluateFormula** | Evaluate a formula string and return the computed result without writing to any cell. |
| **find** | Find all cell addresses matching a search value within a sheet or specified range. |
| **sheetList** | Retrieve the names of all sheets in the workbook. Use to discover available sheet names before calling getSheetInfo, getRangeData, or getCellData. |
| **undo** | Revert the last action in the undo history. |

### Cell Editing Tools

| Tool | Description |
|------|-------------|
| **editCell** | Set the value or formula of a single cell. |

### Formatting Tools

| Tool | Description |
|------|-------------|
| **formatCells** | Apply visual formatting (bold, italic, color, alignment, etc.) to a range. |
| **setNumberFormat** | Apply a named number format (General, Number, Currency, Percentage, Date, etc.) to a range. |
| **addConditionalFormat** | Add a rule-based conditional formatting rule (e.g., GreaterThan, LessThan) to a range. |
| **mergeCells** | Merge cells in a range (All, Vertically, or Horizontally). |
| **toggleWrap** | Enable or disable text wrapping for a range. |

### Clipboard Tools

| Tool | Description |
|------|-------------|
| **cut** | Cut a range to the clipboard. |
| **copy** | Copy a range to the clipboard. |
| **paste** | Paste clipboard contents into a target range. |

### Data Transformation Tools

| Tool | Description |
|------|-------------|
| **sortRange** | Sort a range by a specified column (Ascending or Descending). |
| **filterRange** | Apply or clear AutoFilter on a range. |
| **autofill** | Autofill a target range from a source pattern or series. |
| **findReplace** | Find and replace all occurrences of a value in the spreadsheet. |

### Structure Tools

| Tool | Description |
|------|-------------|
| **insertRowsColumns** | Insert rows or columns at a specified 1-based position. |
| **deleteRowsColumns** | Delete rows or columns starting at a specified 1-based position. |
| **insertSheet** | Insert one or more new blank sheets into the workbook at a specified 0-based position. Optionally provide a name when inserting a single sheet. |
| **freezePanes** | Freeze or unfreeze rows, columns, or panes. |

### Visualization & Analytics Tools

| Tool | Description |
|------|-------------|
| **insertChart** | Insert a chart (Column, Bar, Line, Pie, etc.) for a data range. |

### Validation & Linking Tools

| Tool | Description |
|------|-------------|
| **addDataValidation** | Add a data validation rule (WholeNumber, Decimal, Date, List, etc.) to a range. |
| **insertHyperlink** | Insert a hyperlink (URL or sheet reference) into a cell. |

### Utility Tools

| Tool | Description |
|------|-------------|
| **save** | Open the save/export dialog to save the spreadsheet (xlsx, xls, csv, or pdf). |


## Best Practices

### 1. **Scope Tools Appropriately**

Register only the tools your application requires. This reduces exposure and simplifies the MCP client's interface:

```ts
// GOOD: Expose only read and edit tools
spreadsheet.registerWebMcpTools('app', [
    'getCellData', 'getRangeData', 'editCell', 'formatCells'
]);

// AVOID: Exposing all tools including potentially risky operations
spreadsheet.registerWebMcpTools('app');  // All tools registered
```

### 2. **Use Unique Prefixes for Multiple Instances**

When multiple spreadsheets share the page, always assign unique prefixes to avoid tool name conflicts:

```ts
salesSheet.registerWebMcpTools('sales');
inventorySheet.registerWebMcpTools('inventory');
reportSheet.registerWebMcpTools('reports');
```

### 3. **Monitor Tool Execution**

Use the `beforeWebMcpToolExecute` event to audit, validate, or restrict tool usage:

```ts
beforeWebMcpToolExecute: (args: WebMcpToolExecuteEventArgs): void => {
    if (args.toolName.includes('edit')) {
        console.log('Edit command is not allowed');
        args.cancel = true;
    }
}
```

## Troubleshooting

### WebMCP Tools Not Appearing

**Problem**: Tools are not registered on `document.modelContext`.

**Solution**:
- Verify `enableWebMcp: true` is set on the Spreadsheet configuration.
- Ensure `WebMcpAdapter` is injected via `Spreadsheet.Inject(WebMcpAdapter)`.
- Confirm `registerWebMcpTools()` is called on the Spreadsheet instance (e.g., inside the `created` callback).
- Check that `document.modelContext` is available and exposes a `registerTool` function before `registerWebMcpTools()` is invoked.

### Tool Execution Fails

**Problem**: MCP client calls a tool but receives an error.

**Solution**:
- Verify the tool name is correct (use the registered prefix: `sales_editCell`, not just `editCell`).
- Check the `beforeWebMcpToolExecute` event — the command may have been cancelled.
- Review the `CommandResult` error object for specific failure reason.

### Multiple Spreadsheets Conflict

**Problem**: Tool names collide when running multiple spreadsheets.

**Solution**:
- Use unique prefix values for each spreadsheet when calling `registerWebMcpTools()`.
- Example: `sheet1.registerWebMcpTools('report_q1')`, `sheet2.registerWebMcpTools('report_q2')`.

## Integration Examples

### Example 1: Simple Tool Registration (All Tools)

```ts
import { Spreadsheet, WebMcpAdapter } from '@syncfusion/ej2-react-spreadsheet';

Spreadsheet.Inject(WebMcpAdapter);

const spreadsheet = new Spreadsheet({
    enableWebMcp: true,
    sheets: [{
        name: 'Sales',
        ranges: [{ dataSource: salesData }]
    }],
    created: (): void => {
        // Register all 28 WebMCP tools with instance prefix 'sales'
        spreadsheet.registerWebMcpTools('sales');
    }
});
```

### Example 2: Selective Tool Registration

```ts
const spreadsheet = new Spreadsheet({
    enableWebMcp: true,
    sheets: [{
        name: 'Inventory',
        ranges: [{ dataSource: inventoryData }]
    }],
    created: (): void => {
        // Register only safe, read-only tools
        spreadsheet.registerWebMcpTools('inventory', [
            'getCellData',
            'getRangeData',
            'find',
            'evaluateFormula'
        ]);
    }
});
```

### Example 3: With Event Validation

```ts
const spreadsheet = new Spreadsheet({
    enableWebMcp: true,
    sheets: [{
        name: 'Financial',
        ranges: [{ dataSource: financialData }]
    }],
    beforeWebMcpToolExecute: (args: WebMcpToolExecuteEventArgs): void => {
        // Audit log
        console.log(`[AUDIT] Tool: ${args.toolName}`, args.toolArgs);
        
        // Restrict delete operations
        if (args.toolName.includes('delete')) {
            args.cancel = true;
            console.error('Delete operations are disabled for security.');
        }
    },
    created: (): void => {
        spreadsheet.registerWebMcpTools('finance', [
            'getCellData', 'getRangeData', 'editCell', 'formatCells'
        ]);
    }
});
```

## Real-World Usage Examples

This section demonstrates how AI agents use WebMCP tools to handle practical spreadsheet tasks through natural language prompts.

### Example 1: Search and Retrieve

**User Prompt:** "What is the price of formal shoes?"

**AI Tool Execution Flow:**
```
AI calls: find({findValue: "formal shoes"})
         ↓
Tool returns: addresses: ["Price Details!A4"]
         ↓
AI calls: getRangeData({range: "A1:Z1"})  // Get headers
         ↓
AI identifies that column E contains "Price"
         ↓
AI calls: getCellData({address: "E4"})
         ↓
Tool returns: value: 15
         ↓
AI responds: "The price of formal shoes is 15"
```

**Key Insight:** Complex tasks require multiple tool calls. The AI chains tools together — find → identify structure → retrieve data.

### Example 2: Data Analysis with Conditional Formatting

**User Prompt:** "Highlight the profit values greater than 30"

**AI Tool Execution Flow:**
```
AI calls: find({findValue: "Profit"})
         ↓
Tool returns: addresses: ["Price Details!H1"]
         ↓
AI calls: getSheetInfo({sheetName: "Price Details"})
         ↓
Tool returns: full sheet structure with row/column info
         ↓
AI calls: addConditionalFormat({
    range: "H2:H11",
    type: "GreaterThan",
    value: "30",
    cFColor: "GreenFT"
})
         ↓
Tool returns: message: "Applied conditional format to H2:H11"
         ↓
AI responds: "Profit values > 30 in H2:H11 are now highlighted"
```

**Key Insight:** Data analysis tasks often require sheet introspection first, then applying formatting based on discovered data ranges.

### Example 3: Formula Evaluation

**User Prompt:** "What is the result of =SUM(H2:H11)?"

**AI Tool Execution Flow:**
```
AI calls: evaluateFormula({formula: "=SUM(H2:H11)"})
         ↓
Tool returns: value: 554
         ↓
AI responds: "The result is 554"
```

**Key Insight:** Formula evaluation is one of the fastest operations — direct calculation without iterating cells.

### Example 4: Data Modification

**User Prompt:** "Change the quantity of Sneakers from 40 to 45"

**AI Tool Execution Flow:**
```
AI calls: find({findValue: "Sneakers"})
         ↓
Tool returns: addresses: ["Price Details!A7"]  // Row 7
         ↓
AI calls: getRangeData({range: "A1:E10"})  // Retrieve headers + data
         ↓
Tool returns: Column D is "Quantity"
         ↓
AI calls: editCell({address: "D7", value: "45"})
         ↓
Tool returns: message: "Updated D7 to 45"
         ↓
Action added to undo/redo history
         ↓
AI responds: "Updated quantity of Sneakers in D7 from 40 to 45"
```

**Key Insight:** Even simple edits require context discovery. AI must locate the item and identify the correct column before editing.

### Example 5: Formatting Operations

**User Prompt:** "Apply bold and blue background to the header row"

**AI Tool Execution Flow:**
```
AI calls: formatCells({
    range: "A1:H1",
    formatting: {
        bold: true,
        backgroundColor: "#0000FF"
    }
})
         ↓
Tool returns: message: "Applied cell style to A1:H1"
         ↓
AI responds: "Header row (A1:H1) is now bold with blue background"
```

**Key Insight:** Multiple formatting attributes can be applied in a single tool call for efficiency.

### Example 6: Number Format Application

**User Prompt:** "Apply currency format to the Price and Amount columns"

**AI Tool Execution Flow:**
```
AI calls: find({findValue: "Price"})
         ↓
Tool returns: addresses: ["Price Details!E1"]
         ↓
AI calls: find({findValue: "Amount"})
         ↓
Tool returns: addresses: ["Price Details!F1"]
         ↓
AI calls: getSheetInfo()  // Determine data range extent
         ↓
AI calls: setNumberFormat({
    range: "E2:E11",
    format: "Currency"
})
         ↓
AI calls: setNumberFormat({
    range: "F2:F11",
    format: "Currency"
})
         ↓
AI responds: "Applied currency format to Price (E2:E11) and Amount (F2:F11)"
```

**Key Insight:** AI discovers target columns first, then applies formatting to the relevant data rows only.

### Example 7: Discovering and Adding Sheets

**User Prompt:** "Add a new sheet called 'Q4 Summary' at the end of the workbook"

**AI Tool Execution Flow:**
```
AI calls: sheetList()
         ↓
Tool returns: sheets: ["Sheet1", "Sales", "Inventory"]
         ↓
AI determines there are 3 sheets; inserts after the last (index 3)
         ↓
AI calls: insertSheet({
    startIndex: 3,
    sheetName: "Q4 Summary"
})
         ↓
Tool returns: message: "Inserted 1 sheet named "Q4 Summary" at position 3"
         ↓
AI responds: "Added a new sheet 'Q4 Summary' at the end of the workbook"
```

**Key Insight:** `sheetList` should be called first to discover the current sheet structure, then `insertSheet` can target the correct position.

## Limitations

* **Single Sheet Scope**: WebMCP tools operate on the currently active sheet only.
* **Synchronous Communication**: Most tools execute synchronously; plan accordingly for performance-critical operations.
* **Data Size**: Large range operations (e.g., formatting 100,000 rows) may impact performance.

## See Also

* [AI Assist in React Spreadsheet](../ai-assist/overview)
* [Open Excel Files](../open-excel-files)
* [Save Excel Files](../save-excel-files)