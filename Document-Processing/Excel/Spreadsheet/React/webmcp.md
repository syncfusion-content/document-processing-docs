---
layout: post
title: WebMCP Tools in React Spreadsheet | Syncfusion
description: Learn how to get started with WebMCP tools in the React Spreadsheet Editor SDK to expose spreadsheet operations to AI agents and external applications.
platform: document-processing
control: WebMCP
documentation: ug
---

# WebMCP Tools in React Spreadsheet

The React Spreadsheet component exposes a curated set of **WebMCP (Model Context Protocol)** tools that let AI agents, LLMs, and external applications read data, edit cells, apply formatting, sort and filter, insert charts, and save the workbook — all through a standardized, schema-validated interface. WebMCP is a proposed web standard for exposing structured browser tools to AI agents through explicit JSON Schemas instead of DOM scraping. In the React Spreadsheet component, this gives agents a reliable way to discover and invoke workbook operations such as `getCellData`, `formatCells`, `sortRange`, and `insertChart`, etc.

> **Note:** WebMCP is an experimental browser standard. It is currently available behind a feature flag in some Chromium-based browsers. The API and behavior may change as the standard evolves. The Syncfusion React Spreadsheet WebMCP integration is a preview feature.

This integration is delivered through the injectable `WebMcpAdapter` module. When WebMCP is enabled, the adapter:

- Owns the tool catalog and registers each tool on `document.modelContext`.
- Binds an `execute` callback for every tool and routes calls to the right handler internally.
- Shows a built-in confirmation dialog for write operations by default.
- Integrates with the Spreadsheet's native undo/redo history through the internal `CommandExecutor`.
- Cleans up automatically via an `AbortController` when the Spreadsheet is destroyed.

### Key Benefits

- **Universal Tool Access** — Expose spreadsheet operations as standardized MCP tools that any AI agent, LLM, or MCP-compatible client can discover and invoke.
- **Zero Custom Integration Code** — Inject `WebMcpAdapter`, call `registerWebMcpTools()`, and the adapter handles prefixing, schema binding, execution, and lifecycle cleanup.
- **Schema-Validated Input/Output** — Every tool ships with a JSON Schema for both inputs and outputs, giving AI clients reliable contracts to work against.
- **Controlled Execution** — Write operations trigger a built-in user confirmation dialog, and the `beforeWebMcpToolExecute` event lets applications audit, restrict, or cancel any call.
- **Multi-Instance Friendly** — Unique prefixes per Spreadsheet instance prevent tool-name collisions when multiple spreadsheets share a page.
- **Native Spreadsheet Integration** — Write tools participate in the Spreadsheet's undo/redo pipeline and clean up automatically when the component is destroyed.
- **Real-Time Feedback** — Tools return immediate, structured responses so the AI agent can confirm or chain the next action.

### How It Works

1. **Tool Discovery** — `spreadsheet.getWebMcpTools(toolNames?)` returns schema-validated definitions of available tools, optionally filtered by an allowlist.
2. **Tool Registration** — `spreadsheet.registerWebMcpTools(prefix, tools, exposedTo)` dispatches an event that the adapter handles. The adapter prefixes each `tool.name` with `${prefix}_`, attaches an `execute` callback, and calls `modelContext.registerTool()` for each tool.
3. **Tool Invocation** — When an AI agent calls a tool on `document.modelContext`, the bound `execute` callback invokes `WebMcpAdapter.executeHandler(prefixedName, args)`.
4. **Adapter Routing** — The handler strips the prefix, fires `beforeWebMcpToolExecute`, and dispatches to a read handler (e.g., `handleGetCellData`) or, for write tools, the confirmation flow plus `CommandExecutor.executeHandler`.
5. **Confirmation Flow** — Write handlers show a modal dialog by default. The user clicks "Ok" to apply the change or closes the dialog to cancel. The `beforeWebMcpToolExecute` event can override the dialog per call.
6. **Command Execution** — Write handlers delegate to `CommandExecutor` for batching and undo/redo integration.
7. **Response Formatting** — Results are wrapped via `message()` (success/cancellation) or `error()` (failure) into a `WebMcpToolResponse` with `content: [{ type: 'text', text: JSON.stringify(payload) }]`.

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
public registerWebMcpTools(prefix?: string, toolNames?: string[], exposedTo?: string[]): void
```

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `prefix` | `string` | ❌ | Unique prefix to avoid name collisions across multiple instances (e.g. `sales`, `requirement`). Defaults to the spreadsheet element's `id` if omitted. |
| `toolNames` | `string[]` | ❌ | Array of permitted tool names to register. When omitted, all available tools are registered. |
| `exposedTo` | `string[]` | ❌ | Optional list of trusted origins allowed to access the tool in cross-origin embedding scenarios. Values must be secure origins (e.g., `"https://trusted.example"`). When omitted, the tool is not exposed to additional cross-origin sites. |

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

### Cross-Origin Tool Access

Use the `exposedTo` parameter to grant access to tools from trusted cross-origin sites. This is useful when your spreadsheet is embedded in a partner domain or a micro-frontend architecture:

```ts
// Allow tools to be accessed from a trusted partner origin
spreadsheet.registerWebMcpTools('sales', ['getCellData', 'getRangeData'], [
    'https://partner.example.com',
    'https://dashboard.trusted.com'
]);
```

> **Security Note:** Only specify origins you explicitly trust. When `exposedTo` is omitted, the tools are not exposed to any additional cross-origin sites.

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

WebMCP exposes a comprehensive set of tools that any MCP client can discover and invoke. Read-only tools execute immediately without a confirmation dialog; write tools require user confirmation by default. The `beforeWebMcpToolExecute` event lets you customize or skip confirmation per call.

### Read-Only Tools (No Confirmation Required)

| Tool | Description | Input Schema | Output Schema |
|------|-------------|--------------|---------------|
| **getCellData** | Retrieve the value, formula, display text, and optional format of a single cell. | `{ address: string, sheetName?: string, includeFormat?: boolean }` | `{ sheetName, address, value, displayText, formula?, format?, style? }` |
| **getRangeData** | Retrieve values, formulas, and formatting from a cell range. Returns up to 200 rows; check the `truncated` flag and paginate for larger ranges. | `{ range: string, sheetName?: string, includeFormat?: boolean }` | `{ sheetName, range, rowCount, colCount, truncated, cells: [][] }` |
| **getSheetInfo** | Get sheet metadata including name, dimensions, used range, and row/column counts. | `{ sheetName?: string }` | `{ sheetName, sheetIndex, ...sheetProperties }` |
| **sheetList** | Retrieve the names of all sheets in the workbook. Use to discover available sheet names before calling `getSheetInfo`, `getRangeData`, or `getCellData`. | `{}` | `{ sheets: string[] }` |
| **evaluateFormula** | Evaluate a formula string and return the computed result without writing to any cell. | `{ formula: string }` | `{ formula, value }` |
| **find** | Find all cell addresses matching a search value within a sheet or specified range. | `{ findValue: string, sheetName?: string, range?: string, caseSensitive?: boolean, exactMatch?: boolean }` | `{ action: 'find', message: string, addresses: string[] }` |

### Cell Editing Tools

| Tool | Description | Input Schema | Output Schema |
|------|-------------|--------------|---------------|
| **editCell** | Set the value or formula of a single cell. Prefix with `=` for formulas (e.g., `value: '=SUM(A1:A5)'`). | `{ address: string, value: string \| number \| boolean }` | `{ action: 'edit', cancelled: boolean, message: string }` |

### Formatting Tools

| Tool | Description | Input Schema | Output Schema |
|------|-------------|--------------|---------------|
| **formatCells** | Apply visual formatting (bold, italic, color, alignment, etc.) to a range. | `{ range: string, formatting: { bold?, italic?, underline?, strikethrough?, fontSize?, fontFamily?, color?, backgroundColor? } }` | `{ action: 'cellFormat', cancelled: boolean, message: string }` |
| **setNumberFormat** | Apply a named number format (General, Number, Currency, Percentage, Date, etc.) to a range. | `{ range: string, format: 'General' \| 'Number' \| 'Currency' \| 'Accounting' \| 'ShortDate' \| 'LongDate' \| 'Time' \| 'Percentage' \| 'Fraction' \| 'Scientific' \| 'Text' }` | `{ action: 'numberFormat', cancelled: boolean, message: string }` |
| **addConditionalFormat** | Add a rule-based conditional formatting rule (e.g., `GreaterThan`, `LessThan`) to a range. | `{ range: string, type: 'GreaterThan' \| 'LessThan' \| 'Between' \| 'EqualTo' \| 'ContainsText' \| 'DateOccur' \| 'Duplicate' \| 'Unique' \| 'Top10Items' \| 'Bottom10Items' \| 'Top10Percentage' \| 'Bottom10Percentage' \| 'AboveAverage' \| 'BelowAverage', value?: string, cFColor?: 'RedFT' \| 'YellowFT' \| 'GreenFT' }` | `{ action: 'conditionalFormat', cancelled: boolean, message: string }` |
| **mergeCells** | Merge cells in a range (All, Vertically, or Horizontally). | `{ range: string, direction: 'All' \| 'Vertically' \| 'Horizontally' }` | `{ action: 'merge', cancelled: boolean, message: string }` |
| **toggleWrap** | Enable or disable text wrapping for a range. | `{ range: string, wrap: boolean }` | `{ action: 'wrap', cancelled: boolean, message: string }` |

### Clipboard Tools

| Tool | Description | Input Schema | Output Schema |
|------|-------------|--------------|---------------|
| **cut** | Cut a range to the clipboard. | `{ range: string }` | `{ action: 'cut', cancelled: boolean, message: string }` |
| **copy** | Copy a range to the clipboard. | `{ range: string }` | `{ action: 'copy', cancelled: boolean, message: string }` |
| **paste** | Paste clipboard contents into a target range. | `{ range: string }` | `{ action: 'paste', cancelled: boolean, message: string }` |

### Data Transformation Tools

| Tool | Description | Input Schema | Output Schema |
|------|-------------|--------------|---------------|
| **sortRange** | Sort a range by a specified column (Ascending or Descending). | `{ range: string, sortColumn: string, sortOrder: 'Ascending' \| 'Descending', sortContainsHeader?: boolean }` | `{ action: 'sort', cancelled: boolean, message: string }` |
| **filterRange** | Apply or clear AutoFilter on a range. | `{ range: string, filterColumn?: string, filterOperator?: 'equal' \| 'notequal' \| 'greaterthan' \| 'lessthan' \| 'greaterthanorequal' \| 'lessthanorequal' \| 'contains' \| 'startswith' \| 'endswith' \| 'isempty' \| 'isnotempty', filterValue?: string, clearFilter?: boolean }` | `{ action: 'filter', cancelled: boolean, message: string }` |
| **autofill** | Autofill a target range from a source pattern or series. | `{ dataRange: string, fillRange: string, direction?: 'Down' \| 'Up' \| 'Left' \| 'Right', fillType?: 'FillSeries' \| 'CopyCells' \| 'FillFormattingOnly' \| 'FillWithoutFormatting' }` | `{ action: 'autofill', cancelled: boolean, message: string }` |
| **findReplace** | Find and replace all occurrences of a value in the spreadsheet. | `{ findValue: string, replaceValue: string, caseSensitive?: boolean, exactMatch?: boolean }` | `{ action: 'findAndReplace', cancelled: boolean, message: string }` |

### Structure Tools

| Tool | Description | Input Schema | Output Schema |
|------|-------------|--------------|---------------|
| **insertRowsColumns** | Insert rows or columns at a specified 1-based position. | `{ modelType: 'Row' \| 'Column', startIndex: number, count?: number }` | `{ action: 'insert', cancelled: boolean, message: string }` |
| **deleteRowsColumns** | Delete rows or columns starting at a specified 1-based position. | `{ modelType: 'Row' \| 'Column', startIndex: number, count?: number }` | `{ action: 'delete', cancelled: boolean, message: string }` |
| **insertSheet** | Insert one or more new blank sheets into the workbook at a specified 0-based position. Optionally provide a name when inserting a single sheet. | `{ startIndex?: number, count?: number, sheetName?: string }` | `{ action: 'insertSheet', cancelled: boolean, message: string }` |
| **freezePanes** | Freeze or unfreeze rows, columns, or panes. | `{ freezeType: 'Rows' \| 'Columns' \| 'Panes' \| 'Unfreeze', row?: number, column?: number }` | `{ action: 'freezePanes', cancelled: boolean, message: string }` |

### Visualization & Analytics Tools

| Tool | Description | Input Schema | Output Schema |
|------|-------------|--------------|---------------|
| **insertChart** | Insert a chart (Column, Bar, Line, Pie, etc.) for a data range. `range` may be a single contiguous range (e.g. `"A1:H11"`) or space-separated discontinuous ranges (e.g. `"A1:A11 E1:E11"`). | `{ range: string, chartType: 'Column' \| 'Bar' \| 'Line' \| 'Area' \| 'Pie' \| 'Doughnut' \| 'Scatter' \| 'StackingColumn' \| 'StackingColumn100' \| 'StackingBar' \| 'StackingBar100' \| 'StackingLine' \| 'StackingLine100' \| 'StackingArea' \| 'StackingArea100', title?: string, theme?: 'Material' \| 'Bootstrap' \| 'Fabric' \| 'Office365' \| 'Tailwind', isSeriesInRows?: boolean, height?: number, width?: number }` | `{ action: 'chart', cancelled: boolean, message: string }` |

### Validation & Linking Tools

| Tool | Description | Input Schema | Output Schema |
|------|-------------|--------------|---------------|
| **addDataValidation** | Add a data validation rule (WholeNumber, Decimal, Date, List, etc.) to a range. | `{ range: string, dvType: 'WholeNumber' \| 'Decimal' \| 'Date' \| 'Time' \| 'TextLength' \| 'List' \| 'Custom', dvOperator?: 'Between' \| 'NotBetween' \| 'EqualTo' \| 'NotEqualTo' \| 'GreaterThan' \| 'LessThan' \| 'GreaterThanOrEqualTo' \| 'LessThanOrEqualTo', dvValue1?: string, dvValue2?: string, dvIgnoreBlank?: boolean, dvInCellDropDown?: boolean }` | `{ action: 'dataValidation', cancelled: boolean, message: string }` |
| **insertHyperlink** | Insert a hyperlink (URL or sheet reference) into a cell. | `{ address: string, displayText?: string, range?: string }` | `{ action: 'hyperlink', cancelled: boolean, message: string }` |

### Utility Tools

| Tool | Description | Input Schema | Output Schema |
|------|-------------|--------------|---------------|
| **save** | Open the save/export dialog to save the spreadsheet (xlsx, xls, csv, or pdf). | `{ saveType?: 'xlsx' \| 'xls' \| 'csv' \| 'pdf' }` | `{ action: 'save', cancelled: boolean, message: string }` |
| **undo** | Revert the last action in the undo history. Does not show the confirmation dialog. | `{}` | `{ action: 'undo', message: string }` |

### Response Format

All tools return a `WebMcpToolResponse` object with this canonical shape:

```ts
interface WebMcpToolResponse {
    content: { type: 'text'; text: string }[];   // Single text entry containing JSON.stringify(payload)
    isError?: boolean;                            // True when the tool errored out
}
```

Parse `content[0].text` as JSON to read the payload. Common payload shapes include:

- **Success** (most tools): `{ action: string, cancelled: false, message: string, ...result }`
- **Cancellation** (event cancel or user denial): `{ action: string, cancelled: true, message: string }`
- **Read tool** (e.g., `getCellData`): `{ sheetName, address, value, displayText, formula?, format?, style? }`
- **Error**: response carries `isError: true`; `content[0].text` contains the error message.


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
* [Model Context Protocol](https://modelcontextprotocol.io/docs/2026-07-28/getting-started/intro)