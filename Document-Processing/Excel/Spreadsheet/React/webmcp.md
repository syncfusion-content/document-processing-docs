---
layout: post
title: WebMCP Integration in React Spreadsheet | Syncfusion
description: Learn how to integrate WebMCP (Model Context Protocol) with Syncfusion React Spreadsheet to enable AI agents and external tools to interact with your spreadsheet data and operations.
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

Once WebMCP is enabled, retrieve the available tools and register them with the MCP client (typically the `document.modelContext` global object):

```ts
/**
 * Registers Spreadsheet WebMCP tools on document.modelContext.
 *
 * @param parent        The Spreadsheet instance to bind tools to.
 * @param instanceName  Unique prefix for tool names (e.g. 'sales', 'gdp').
 *                      Avoids collisions when multiple spreadsheets are on the page.
 * @param toolNames     Optional allowlist of tool names to register.
 *                      When omitted, ALL tools are registered.
 *                      Example: ['getCellData', 'editCell', 'formatCells']
 */
function registerSpreadsheetTools(parent: Spreadsheet, instanceName: string, toolNames?: string[]): void {
    const modelContext: any = (document as any).modelContext;
    if (!modelContext || typeof modelContext.registerTool !== 'function') {
        return;
    }
    const tools: WebMcpTool[] = parent.getWebMcpTools(toolNames);
    for (const tool of tools) {
        tool.name = `${instanceName}_${tool.name}`;
        tool.execute = async (args: any) => parent.executeWebMcpTool(tool.name, args || {});
        modelContext.registerTool(tool);
    }
}
```

### Use in Your Application

Call the registration function after your Spreadsheet is initialized:

```ts
const spreadsheet = new Spreadsheet({
    enableWebMcp: true,
    sheets: [{
        name: 'Price Details',
        ranges: [{ dataSource: defaultData }]
    }],
    created: (): void => {
        // Register all WebMCP tools with instance prefix 'sales'
        registerSpreadsheetTools(spreadsheet, 'sales');
    }
});

spreadsheet.appendTo('#spreadsheet');
```

## WebMCP Customization

### Selective Tool Registration

By default, all available WebMCP tools are registered. To expose only specific tools, pass an array of tool names:

```ts
// Register only data reading and editing tools
registerSpreadsheetTools(spreadsheet, 'sales', [
    'getCellData',
    'getRangeData',
    'editCell',
    'formatCells'
]);
```

### Multiple Spreadsheet Instances

When hosting multiple spreadsheets on the same page, use unique instance names to prevent tool name collisions:

```ts
// First spreadsheet instance
registerSpreadsheetTools(spreadsheet1, 'sales');

// Second spreadsheet instance
registerSpreadsheetTools(spreadsheet2, 'gdp');
```

Now MCP clients can call `sales_getCellData`, `sales_editCell`, `gdp_getCellData`, etc., distinguishing between instances automatically.

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

WebMCP exposes the following tools that any MCP client can discover and invoke:

### Data Reading Tools

| Tool | Description |
|------|-------------|
| **getCellData** | Retrieve the value of a single cell by address (e.g., "A1", "Sheet2!B3"). |
| **getRangeData** | Retrieve values, formulas, and formatting from a cell range (e.g., "A1:C10"). |
| **getSheetInfo** | Get metadata about a sheet including name, dimensions, and row/column counts. |
| **evaluateFormula** | Evaluate a formula string and return the computed result. |
| **find** | Find all cell addresses matching a search value within a range. |

### Data Editing Tools

| Tool | Description |
|------|-------------|
| **editCell** | Set the value or formula of a single cell. |
| **formatCells** | Apply formatting (bold, italic, color, alignment, etc.) to a range. |
| **numberFormat** | Apply number formatting (currency, percentage, date, etc.) to a range. |
| **clearRange** | Clear contents and/or formatting from a range. |

### Spreadsheet Structure Tools

| Tool | Description |
|------|-------------|
| **insertRows** | Insert new rows at a specified position. |
| **insertColumns** | Insert new columns at a specified position. |
| **deleteRows** | Delete rows from a specified range. |
| **deleteColumns** | Delete columns from a specified range. |
| **mergeCells** | Merge cells in a range. |
| **freezePanes** | Freeze rows and columns to keep them visible during scrolling. |

### Data Transformation Tools

| Tool | Description |
|------|-------------|
| **sortRange** | Sort a range by one or more columns (ascending/descending). |
| **filterRange** | Apply or clear AutoFilter on a range. |
| **autoFill** | Fill cells following a pattern or series. |
| **findReplace** | Find and replace all occurrences of a value in a range. |

### Visualization & Analytics Tools

| Tool | Description |
|------|-------------|
| **insertChart** | Insert a chart (Column, Line, Pie, etc.) for a data range. |
| **conditionalFormat** | Apply conditional formatting rules (e.g., highlight cells greater than a threshold). |

### Utility & Integration Tools

| Tool | Description |
|------|-------------|
| **dataValidation** | Add data validation rules (dropdown lists, number ranges, date ranges). |
| **hyperlink** | Insert hyperlinks into cells. |
| **cut** / **copy** / **paste** | Perform clipboard operations. |


## Best Practices

### 1. **Scope Tools Appropriately**

Register only the tools your application requires. This reduces exposure and simplifies the MCP client's interface:

```ts
// GOOD: Expose only read and edit tools
registerSpreadsheetTools(spreadsheet, 'app', [
    'getCellData', 'getRangeData', 'editCell', 'formatCells'
]);

// AVOID: Exposing all tools including potentially risky operations
registerSpreadsheetTools(spreadsheet, 'app');  // All tools registered
```

### 2. **Use Unique Instance Names**

When multiple spreadsheets share the page, always assign unique instance names to avoid tool name conflicts:

```ts
registerSpreadsheetTools(salesSheet, 'sales');
registerSpreadsheetTools(inventorySheet, 'inventory');
registerSpreadsheetTools(reportSheet, 'reports');
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
- Check browser console for errors in the `registerSpreadsheetTools` function.

### Tool Execution Fails

**Problem**: MCP client calls a tool but receives an error.

**Solution**:
- Verify the tool name is correct (use instance prefix: `sales_editCell`, not just `editCell`).
- Check the `beforeWebMcpToolExecute` event — the command may have been cancelled.
- Review the `CommandResult` error object for specific failure reason.

### Multiple Spreadsheets Conflict

**Problem**: Tool names collide when running multiple spreadsheets.

**Solution**:
- Use unique `instanceName` values for each spreadsheet in `registerSpreadsheetTools`.
- Example: `registerSpreadsheetTools(sheet1, 'report_q1')`, `registerSpreadsheetTools(sheet2, 'report_q2')`.

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
        registerSpreadsheetTools(spreadsheet, 'sales');  // All tools registered
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
        registerSpreadsheetTools(spreadsheet, 'inventory', [
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
        registerSpreadsheetTools(spreadsheet, 'finance', [
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
AI calls: conditionalFormat({
    range: "H2:H11",
    type: "GreaterThan",
    value: "30",
    color: "GreenFT"
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

## Limitations

* **Single Sheet Scope**: WebMCP tools operate on the currently active sheet only.
* **Synchronous Communication**: Most tools execute synchronously; plan accordingly for performance-critical operations.
* **Data Size**: Large range operations (e.g., formatting 100,000 rows) may impact performance.

## See Also

* [AI Assist in React Spreadsheet](../ai-assist/overview)
* [Open Excel Files](../open-excel-files)
* [Save Excel Files](../save-excel-files)