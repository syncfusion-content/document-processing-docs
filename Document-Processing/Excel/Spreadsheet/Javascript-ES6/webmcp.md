---
layout: post
title: WebMCP Integration in TypeScript Spreadsheet | Syncfusion
description: WebMCP integration in TypeScript Spreadsheet explains setup, tool registration, configuration, and API reference with code examples.
platform: document-processing
control: WebMCP
documentation: ug
---

# WebMCP Integration in TypeScript Spreadsheet

## Integration

WebMCP integrates seamlessly into your TypeScript Spreadsheet application with minimal configuration. This section covers the required setup, tool discovery, registration, and complete API reference.

### Prerequisites

Ensure the following before integrating WebMCP:

- Syncfusion Spreadsheet component is installed and configured
- A Chromium-based browser, such as Chrome, Edge, or Brave, has the WebMCP flag enabled

## Getting Started

### Step 1: Configure Your Browser

Before you can use WebMCP locally, enable the feature flag and install the browser extension:

1. **Enable WebMCP Flag**
   - Enable WebMCP for testing via `chrome://flags/`
   - Click **"Relaunch"** to restart Chrome

2. **Install WebMCP Extension**
   - Search for **"WebMCP - Model Context Tool Inspector"** in [Chrome Web Store](https://chromewebstore.google.com/detail/webmcp-model-context-tool/gbpdfapgefenggkahomfgkhfehlcenpd)
   - Click **"Add to Chrome"**
   - Pin the extension icon to your toolbar

3. **Configure Gemini API Key**
   - Visit [Google AI Studio](https://aistudio.google.com/app/apikey) to create or copy an API key
   - Open the WebMCP extension → paste your API key
   - Extension is now ready to use

### Step 2: Inject the WebMCP Module

Import and inject the `WebMcpAdapter` module into your Spreadsheet:

```typescript
import { Spreadsheet, WebMcpAdapter } from '@syncfusion/ej2-react-spreadsheet';

// Inject the WebMCP module to enable MCP tool support
Spreadsheet.Inject(WebMcpAdapter);
```

### Step 3: Enable WebMCP

Set the `enableWebMcp` property to `true` in your Spreadsheet configuration:

```typescript
const spreadsheet = new Spreadsheet({
    enableWebMcp: true,  // Enable WebMCP integration
    sheets: [{
        name: 'Sales Data',
        ranges: [{ dataSource: salesData }]
    }],
    // ... other configuration
});
```

### Step 4: Register Tools

Call the `registerWebMcpTools()` method after the Spreadsheet initializes inside created event:

```typescript
export const grossPay: Object[] = [
    {
        "EMPLOYEE ID": "1001",
        "EMPLOYEE NAME": "Vin Diesel",
        "DATE": "04-05-2021",
        "WEEKDAY": "Mon",
        "TIME IN": "8:00 AM",
        "TIME OUT": "10:00 PM",
        "HOURS WORKED": "=HOUR(F4)-HOUR(E4)",
        "BASIC SALARY (30/hour)": "=G4*30",
        "GROSS PAY WITH OVERTIME(15/hour)": "=H4+((G4-8)*15)"
    },
    {
        "EMPLOYEE ID": "1002",
        "EMPLOYEE NAME": "Steve Rogers",
        "DATE": "04-06-2021",
        "WEEKDAY": "Tue",
        "TIME IN": "8:00 AM",
        "TIME OUT": "6:00 PM",
        "HOURS WORKED": "=HOUR(F5)-HOUR(E5)",
        "BASIC SALARY (30/hour)": "=G5*30",
        "GROSS PAY WITH OVERTIME(15/hour)": "=H5+((G5-8)*15)"
    },
    {
        "EMPLOYEE ID": "1003",
        "EMPLOYEE NAME": "Paul Walker",
        "DATE": "04-06-2021",
        "WEEKDAY": "Tue",
        "TIME IN": "11:00 AM",
        "TIME OUT": "4:00 PM",
        "HOURS WORKED": "=HOUR(F6)-HOUR(E6)",
        "BASIC SALARY (30/hour)": "=G6*30",
        "GROSS PAY WITH OVERTIME(15/hour)": "=H6+((G6-8)*15)"
    },
    {
        "EMPLOYEE ID": "1004",
        "EMPLOYEE NAME": "John Carter",
        "DATE": "04-08-2021",
        "WEEKDAY": "Thu",
        "TIME IN": "8:00 AM",
        "TIME OUT": "4:00 PM",
        "HOURS WORKED": "=HOUR(F7)-HOUR(E7)",
        "BASIC SALARY (30/hour)": "=G7*30",
        "GROSS PAY WITH OVERTIME(15/hour)": "=H7+((G7-8)*15)"
    },
    {
        "EMPLOYEE ID": "1005",
        "EMPLOYEE NAME": "Sam Wilson",
        "DATE": "04-09-2021",
        "WEEKDAY": "Fri",
        "TIME IN": "7:00 AM",
        "TIME OUT": "6:00 PM",
        "HOURS WORKED": "=HOUR(F8)-HOUR(E8)",
        "BASIC SALARY (30/hour)": "=G8*30",
        "GROSS PAY WITH OVERTIME(15/hour)": "=H8+((G8-8)*15)"
    },
    {
        "EMPLOYEE ID": "1006",
        "EMPLOYEE NAME": "Chris Evans",
        "DATE": "04-12-2021",
        "WEEKDAY": "Mon",
        "TIME IN": "10:00 AM",
        "TIME OUT": "6:00 PM",
        "HOURS WORKED": "=HOUR(F9)-HOUR(E9)",
        "BASIC SALARY (30/hour)": "=G9*30",
        "GROSS PAY WITH OVERTIME(15/hour)": "=H9+((G9-8)*15)"
    },
    {
        "EMPLOYEE ID": "1007",
        "EMPLOYEE NAME": "Andrew Scott",
        "DATE": "04-13-2021",
        "WEEKDAY": "Tue",
        "TIME IN": "10:00 AM",
        "TIME OUT": "7:00 PM",
        "HOURS WORKED": "=HOUR(F10)-HOUR(E10)",
        "BASIC SALARY (30/hour)": "=G10*30",
        "GROSS PAY WITH OVERTIME(15/hour)": "=H10+((G10-8)*15)"
    },
    {
        "EMPLOYEE ID": "1008",
        "EMPLOYEE NAME": "John Martin",
        "DATE": "04-14-2021",
        "WEEKDAY": "Wed",
        "TIME IN": "8:00 AM",
        "TIME OUT": "4:00 PM",
        "HOURS WORKED": "=HOUR(F11)-HOUR(E11)",
        "BASIC SALARY (30/hour)": "=G11*30",
        "GROSS PAY WITH OVERTIME(15/hour)": "=H11+((G11-8)*15)"
    },
    {
        "EMPLOYEE ID": "1009",
        "EMPLOYEE NAME": "Bravo Thomas",
        "DATE": "04-14-2021",
        "WEEKDAY": "Wed",
        "TIME IN": "11:00 AM",
        "TIME OUT": "8:00 PM",
        "HOURS WORKED": "=HOUR(F12)-HOUR(E12)",
        "BASIC SALARY (30/hour)": "=G12*30",
        "GROSS PAY WITH OVERTIME(15/hour)": "=H12+((G12-8)*15)"
    },
    {
        "EMPLOYEE ID": "1010",
        "EMPLOYEE NAME": "Steve Parker",
        "DATE": "04-15-2021",
        "WEEKDAY": "Thu",
        "TIME IN": "9:00 AM",
        "TIME OUT": "8:00 PM",
        "HOURS WORKED": "=HOUR(F13)-HOUR(E13)",
        "BASIC SALARY (30/hour)": "=G13*30",
        "GROSS PAY WITH OVERTIME(15/hour)": "=H13+((G13-8)*15)"
    },
    {
        "EMPLOYEE ID": "1011",
        "EMPLOYEE NAME": "Robert Brown",
        "DATE": "04-16-2021",
        "WEEKDAY": "Fri",
        "TIME IN": "8:00 AM",
        "TIME OUT": "7:00 PM",
        "HOURS WORKED": "=HOUR(F14)-HOUR(E14)",
        "BASIC SALARY (30/hour)": "=G14*30",
        "GROSS PAY WITH OVERTIME(15/hour)": "=H14+((G14-8)*15)"
    },
    {
        "EMPLOYEE ID": "1012",
        "EMPLOYEE NAME": "Chris Hemsworth",
        "DATE": "04-19-2021",
        "WEEKDAY": "Mon",
        "TIME IN": "9:00 AM",
        "TIME OUT": "6:00 PM",
        "HOURS WORKED": "=HOUR(F15)-HOUR(E15)",
        "BASIC SALARY (30/hour)": "=G15*30",
        "GROSS PAY WITH OVERTIME(15/hour)": "=H15+((G15-8)*15)"
    },
    {
        "EMPLOYEE ID": "1013",
        "EMPLOYEE NAME": "Kevin Hart",
        "DATE": "04-20-2021",
        "WEEKDAY": "Tue",
        "TIME IN": "8:00 AM",
        "TIME OUT": "5:00 PM",
        "HOURS WORKED": "=HOUR(F16)-HOUR(E16)",
        "BASIC SALARY (30/hour)": "=G16*30",
        "GROSS PAY WITH OVERTIME(15/hour)": "=H16+((G16-8)*15)"
    },
    {
        "EMPLOYEE ID": "1014",
        "EMPLOYEE NAME": "Martin Lewis",
        "DATE": "04-21-2021",
        "WEEKDAY": "Wed",
        "TIME IN": "8:00 AM",
        "TIME OUT": "8:00 PM",
        "HOURS WORKED": "=HOUR(F17)-HOUR(E17)",
        "BASIC SALARY (30/hour)": "=G17*30",
        "GROSS PAY WITH OVERTIME(15/hour)": "=H17+((G17-8)*15)"
    },
    {
        "EMPLOYEE ID": "1015",
        "EMPLOYEE NAME": "Thomas Moore",
        "DATE": "04-22-2021",
        "WEEKDAY": "Thu",
        "TIME IN": "10:00 AM",
        "TIME OUT": "6:00 PM",
        "HOURS WORKED": "=HOUR(F18)-HOUR(E18)",
        "BASIC SALARY (30/hour)": "=G18*30",
        "GROSS PAY WITH OVERTIME(15/hour)": "=H18+((G18-8)*15)"
    },
    {
        "EMPLOYEE ID": "1016",
        "EMPLOYEE NAME": "Richard Allen",
        "DATE": "04-23-2021",
        "WEEKDAY": "Fri",
        "TIME IN": "7:00 AM",
        "TIME OUT": "6:00 PM",
        "HOURS WORKED": "=HOUR(F19)-HOUR(E19)",
        "BASIC SALARY (30/hour)": "=G19*30",
        "GROSS PAY WITH OVERTIME(15/hour)": "=H19+((G19-8)*15)"
    },
    {
        "EMPLOYEE ID": "1017",
        "EMPLOYEE NAME": "Peter Johnson",
        "DATE": "04-26-2021",
        "WEEKDAY": "Mon",
        "TIME IN": "8:00 AM",
        "TIME OUT": "4:00 PM",
        "HOURS WORKED": "=HOUR(F20)-HOUR(E20)",
        "BASIC SALARY (30/hour)": "=G20*30",
        "GROSS PAY WITH OVERTIME(15/hour)": "=H20+((G20-8)*15)"
    },
    {
        "EMPLOYEE ID": "1018",
        "EMPLOYEE NAME": "Michael Clark",
        "DATE": "04-27-2021",
        "WEEKDAY": "Tue",
        "TIME IN": "8:00 AM",
        "TIME OUT": "9:00 PM",
        "HOURS WORKED": "=HOUR(F21)-HOUR(E21)",
        "BASIC SALARY (30/hour)": "=G21*30",
        "GROSS PAY WITH OVERTIME(15/hour)": "=H21+((G21-8)*15)"
    },
    {
        "EMPLOYEE ID": "1019",
        "EMPLOYEE NAME": "Bruce Wayne",
        "DATE": "04-28-2021",
        "WEEKDAY": "Wed",
        "TIME IN": "9:00 AM",
        "TIME OUT": "7:00 PM",
        "HOURS WORKED": "=HOUR(F22)-HOUR(E22)",
        "BASIC SALARY (30/hour)": "=G22*30",
        "GROSS PAY WITH OVERTIME(15/hour)": "=H22+((G22-8)*15)"
    },
    {
        "EMPLOYEE ID": "1020",
        "EMPLOYEE NAME": "Henry Adams",
        "DATE": "04-29-2021",
        "WEEKDAY": "Thu",
        "TIME IN": "8:00 AM",
        "TIME OUT": "5:00 PM",
        "HOURS WORKED": "=HOUR(F23)-HOUR(E23)",
        "BASIC SALARY (30/hour)": "=G23*30",
        "GROSS PAY WITH OVERTIME(15/hour)": "=H23+((G23-8)*15)"
    }
];
const spreadsheet = new Spreadsheet({
    enableWebMcp: true,
    sheets: [{
        name: 'Gross Pay',
        ranges: [{ dataSource: grosspay }]
    }],
    created: (): void => {
        // Register all WebMCP tools with instance prefix 'sales'
        spreadsheet.registerWebMcpTools('sales');
    }
});
```

### Step 5: Test Your Setup

**Test with Your Local Setup**
- Deploy your application locally (e.g., `http://localhost:3000`)
- Open your application in the browser
- Open the WebMCP extension
- Verify your registered tools appear with your custom prefix (e.g., `sales_getCellData`)
- Try a sample prompt specific to your data

Additionally, we have hosted a sample for your reference. Kindly check it. [Syncfusion WebMCP demo](https://npmci.syncfusion.com/development/showcase/react/spreadsheet-editor/gross-pay)

**Sample Prompts**
Here are realistic natural language prompts you can test with the WebMCP extension:

{% promptcards %}
{% promptcard Data Analysis %}
Analyze the Gross Pay dataset and summarize
{% endpromptcard %}
{% endpromptcards %}

{% promptcards %}
{% promptcard Formatting & Presentation %}
Format the Gross Pay sheet for better readability
{% endpromptcard %}
{% endpromptcards %}

{% promptcards %}
{% promptcard Data Manipulation %}
Sort employee records by Gross Pay in descending order
{% endpromptcard %}
{% endpromptcards %}

{% promptcards %}
{% promptcard Advanced Workflows %}
Add formulas to calculate the Gross Pay with Overtime based on Hours Worked
{% endpromptcard %}
{% endpromptcards %}

## Tool Discovery and Registration

### Getting Available Tools

Use `getWebMcpTools()` to retrieve available tool schemas:

```typescript
// Get all tool schemas
const allTools = spreadsheet.getWebMcpTools();

// Get specific tools only
const tools = spreadsheet.getWebMcpTools(['getCellData', 'editCell', 'formatCells']);

console.log(allTools[0]);
// Output:
// {
//   name: 'getCellData',
//   title: 'Get Cell Data',
//   description: 'Retrieves data from a specified cell',
//   inputSchema: { type: 'object', properties: {...} },
//   outputSchema: { type: 'object', properties: {...} },
//   annotations: { readOnlyHint: true }
// }
```

### Registering Tools

Use `registerWebMcpTools()` to register tools on `document.modelContext`:

**Signature:**
```typescript
public registerWebMcpTools(prefix?: string, toolNames?: string[], exposedTo?: string[]): void
```

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `prefix` | `string` | ❌ | Unique prefix to avoid tool-name collisions (e.g., `'sales'`, `'inventory'`). Defaults to the spreadsheet element's ID if omitted. |
| `toolNames` | `string[]` | ❌ | Array of permitted tool names (e.g., `['getCellData', 'editCell']`). When omitted, all available tools are registered. |
| `exposedTo` | `string[]` | ❌ | List of trusted origins for cross-origin access (e.g., `['https://trusted.example.com']`). Omit for same-origin only. |

### Usage Examples

**Register all tools:**
```typescript
spreadsheet.registerWebMcpTools('sales');
// Tools registered as: sales_getCellData, sales_editCell, ...
```

**Register specific tools only:**
```typescript
spreadsheet.registerWebMcpTools('sales', ['getCellData', 'editCell', 'formatCells']);
// Only these 3 tools are registered, reducing attack surface
```

**Multi-instance setup:**
```typescript
const spreadsheet1 = new Spreadsheet({ ... });
const spreadsheet2 = new Spreadsheet({ ... });

spreadsheet1.registerWebMcpTools('sales');     // sales_getCellData, sales_editCell, ...
spreadsheet2.registerWebMcpTools('inventory'); // inventory_getCellData, inventory_editCell, ...

// No tool-name collisions; both spreadsheets can share a page safely
```

**Cross-origin access:**
```typescript
spreadsheet.registerWebMcpTools('sales', undefined, [
    'https://trusted.example.com',
    'https://analytics.example.com'
]);
// Tools are accessible from these origins (requires HTTPS)
```

### Understanding the `beforeWebMcpToolExecute` Event

Hook into tool execution for auditing, restrictions, or custom logic:

```typescript
const spreadsheet = new Spreadsheet({
    enableWebMcp: true,
    // ... config
});

// Listen for tool execution attempts
spreadsheet.beforeWebMcpToolExecute = (args: BeforeWebMcpToolExecuteEventArgs) => {
    const { toolName, toolArgs } = args;
    
    console.log(`Tool ${toolName} invoked with:`, toolArgs);
    
    // Example: Prevent writing to specific ranges
    if (toolName === 'editCell' && toolArgs.address === 'A1') {
        args.cancel = true; // Cancel this operation
        alert('Cannot modify cell A1');
    }
};
```

## Tool Reference

WebMCP tools are organized by category. The tables below provide an overview of all 28 available tools. For complete input/output schemas, call `getWebMcpTools()` programmatically or consult the implementation specification.

> **Note:** Write operations trigger user confirmation dialogs by default; the `beforeWebMcpToolExecute` event lets applications audit, restrict, or cancel any operation and read tools execute immediately. In the tables below, a condition "Always" indicates a tool that is enabled by default, regardless of component configuration.

### Core Data Tools

| Tool Name | Type | Condition | Description |
|-----------|------|--------------|-----------|-------------|
| getCellData | Read | Always | Retrieves data from a single cell by address |
| getRangeData | Read | Always | Retrieves data from a range as a 2D array |
| getSheetInfo | Read | Always | Gets metadata about the current sheet (name, rows, columns, etc.) |
| getCellFormula | Read | Always | Retrieves the formula string from a cell |
| evaluateFormula | Read | Always | Evaluates a formula expression and returns the result |

### Editing Tools

| Tool Name | Type | Condition | Description |
|-----------|------|--------------|-----------|-------------|
| editCell | Write | Always | Edits the value of a single cell |
| editRange | Write | Always | Edits values in multiple cells at once |
| insertRows | Write | Always | Inserts new rows at a specified position |
| insertColumns | Write | Always | Inserts new columns at a specified position |
| insertSheet | Write | Always | Adds a new sheet to the workbook |
| deleteRows | Write | Always | Removes rows from the spreadsheet |
| deleteColumns | Write | Always | Removes columns from the spreadsheet |
| deleteSheet | Write | Always | Removes a sheet from the workbook |
| renameSheet | Write | Always | Renames a sheet |

### Formatting Tools

| Tool Name | Type | Condition | Description |
|-----------|------|--------------|-----------|-------------|
| formatCells | Write | Always | Applies formatting (colors, fonts, alignment, borders) to cells |
| clearFormatting | Write | Always | Removes all formatting from a range |
| applyConditionalFormatting | Write | Always | Adds conditional formatting rules to a range |
| autoFill | Write | Always | Autofill a target range from a source pattern or series |

### Data Manipulation Tools

| Tool Name | Type | Condition | Description |
|-----------|------|--------------|-----------|-------------|
| sortRange | Write | Always | Sorts cells in a range by specified columns |
| filterData | Write | Always | Applies auto-filter to a range |
| find | Read | Always | Searches for text in the spreadsheet |
| replace | Write | Always | Finds and replaces text |
| freezePanes | Write | Always | Freezes rows and columns for scrolling |
| unfreezePanes | Write | Always | Removes frozen panes |

### Charting & Shapes Tools

| Tool Name | Type | Condition | Description |
|-----------|------|--------------|-----------|-------------|
| insertChart | Write | Always | Inserts a chart based on a data range |
| editChart | Write | Always | Modifies chart properties and data |
| deleteChart | Write | Always | Removes a chart from the sheet |
| insertShape | Write | Always | Adds a shape (rectangle, circle, etc.) to the sheet |

### Workbook & Utility Tools

| Tool Name | Type | Condition | Description |
|-----------|------|--------------|-----------|-------------|
| save | Write | Always | Saves the workbook file |
| undo | Write | Always | Reverts the last action |
| getSheetList | Read | Always | Returns a list of all sheet names in the workbook |

## Code Examples

### Example 1: Basic Setup

Set up a Spreadsheet with WebMCP enabled and registers tools on creation.

```typescript
import React, { useRef } from 'react';
import { Spreadsheet, WebMcpAdapter, SheetModel } from '@syncfusion/ej2-react-spreadsheet';

// Inject WebMCP module globally
Spreadsheet.Inject(WebMcpAdapter);

const spreadsheetData = [
    { OrderID: 10248, CustomerID: 'VINET', Amount: 32.38 },
    { OrderID: 10249, CustomerID: 'TOMSP', Amount: 11.61 },
];

export const BasicSetup = () => {
    const spreadsheetRef = useRef<Spreadsheet>(null);

    const onCreated = () => {
        if (spreadsheetRef.current) {
            // Register all WebMCP tools with 'sales' prefix
            spreadsheetRef.current.registerWebMcpTools('sales');
        }
    };

    const sheets: SheetModel[] = [
        {
            name: 'Sales Data',
            ranges: [{ dataSource: spreadsheetData }],
        },
    ];

    return (
        <Spreadsheet
            ref={spreadsheetRef}
            sheets={sheets}
            enableWebMcp={true}
            created={onCreated}
        />
    );
};
```

### Example 2: Selective Tool Registration

Register only read-only tools to reduce exposure.

```typescript
// Register only read tools (safer for public applications)
const readOnlyTools = [
    'getCellData',
    'getRangeData',
    'getSheetInfo',
    'getCellFormula',
    'evaluateFormula',
    'find',
    'getSheetList',
    'undo',
    'redo'
];

spreadsheet.registerWebMcpTools('analytics', readOnlyTools);
```

### Example 3: Multi-Instance Setup

Shows how to use different prefixes for multiple Spreadsheet instances.

```typescript
// Two spreadsheets on the same page with different prefixes
const salesSpreadsheet = new Spreadsheet({
    enableWebMcp: true,
    sheets: [...],
    created: () => {
        salesSpreadsheet.registerWebMcpTools('sales');
    }
});

const inventorySpreadsheet = new Spreadsheet({
    enableWebMcp: true,
    sheets: [...],
    created: () => {
        inventorySpreadsheet.registerWebMcpTools('inventory');
    }
});

// Tools are now:
// sales_getCellData, sales_editCell, ...
// inventory_getCellData, inventory_editCell, ...
```

### Example 4: Auditing and Restrictions

Demonstrates how to intercept tool execution and block restricted actions.

```typescript
spreadsheet.beforeWebMcpToolExecute = (args) => {
    const { toolName, toolArgs } = args;

    // Log all tool invocations
    console.log(`[WebMCP] Executing: ${toolName}`, toolArgs);

    // Block sensitive operations
    if (toolName === 'deleteSheet') {
        if (!userHasAdminPermission()) {
            args.cancel = true;
            logSecurityEvent('Unauthorized sheet deletion attempt', toolArgs);
        }
    }

    // Restrict editing to specific ranges
    if (toolName === 'editCell' && !isEditableRange(toolArgs.address)) {
        args.cancel = true;
    }
};
```

### Example 5: Error Handling

Shows how to call a tool manually and handle success or failure.

```typescript
async function invokeToolManually(toolName: string, toolArgs: any) {
    try {
        // Get tool from context
        const tool = await document.modelContext.getTool(toolName);
        
        if (!tool) {
            console.error(`Tool not found: ${toolName}`);
            return null;
        }

        // Invoke the tool
        const result = await tool.execute(toolArgs, {});
        
        // Handle response
        if (result.error) {
            console.error(`Tool error: ${result.error}`);
            return null;
        }

        const responseText = result.content[0].text;
        const responseData = JSON.parse(responseText);
        
        console.log('Tool result:', responseData);
        return responseData;
    } catch (error) {
        console.error('Failed to invoke tool:', error);
        return null;
    }
}
```

## Troubleshooting

### Q: I get "WebMCP not available" or "modelContext is undefined"

**A:**
1. Verify WebMCP flag is enabled:
   - Open `chrome://flags/#enable-webmcp-testing`
   - Confirm it shows "Enabled"
   - Fully restart Chrome (not just reload the page)

2. Check your Chrome version is up-to-date (WebMCP requires recent Chromium)

3. Ensure you're testing on a secure context (HTTPS or localhost)

---

### Q: The extension doesn't show my registered tools

**A:**
1. Verify `enableWebMcp: true` in your Spreadsheet config
2. Confirm `registerWebMcpTools()` is called after Spreadsheet creation
3. Open DevTools (F12) → Console, check for errors
4. Try refreshing the page and opening the extension again
5. Verify the tool prefix is correct (check console logs)

---

### Q: Tools are registered but don't execute

**A:**
1. Check your Gemini API key is valid:
   - Visit [Google AI Studio](https://aistudio.google.com/app/apikey)
   - Create a new key if needed
   - Re-enter it in the WebMCP extension

2. Verify the extension has permission to access the site:
   - Right-click WebMCP extension → Manage extension
   - Ensure "Allow on this site" is enabled

3. Check browser console for errors (F12 → Console)

---

### Q: "Permission denied" or "Secure context required"

**A:**
- WebMCP requires HTTPS in production or localhost for development
- If using cross-origin tools, both sites must be HTTPS
- Test locally using `localhost:3000` or similar

---

### Q: Confirmation dialogs don't appear for write operations

**A:**
1. Verify that write tools are registered (they have `confirmation: Yes`)
2. Check that your browser isn't blocking dialogs
3. Ensure the `beforeWebMcpToolExecute` event isn't canceling operations

---

### Q: "InvalidStateError" when registering tools

**A:**
- This occurs if tools are registered before Spreadsheet initializes
- Call `registerWebMcpTools()` inside the `created` event or after initialization
- Ensure `document.modelContext` is available

---

### Q: Multi-instance tools have naming conflicts

**A:**
- Always use different prefixes for each Spreadsheet instance:
  ```typescript
  spreadsheet1.registerWebMcpTools('sales');
  spreadsheet2.registerWebMcpTools('inventory');
  ```
- Never register the same instance multiple times

---

### Q: How do I avoid performance issues with large datasets?

**A:**
1. Use selective tool registration—register only necessary tools
2. Limit data ranges: Instead of "read entire sheet", specify "A1:Z100"
3. For large datasets, use `getRangeData()` instead of looping `getCellData()`
4. Avoid fetch all operations; filter or paginate when possible
5. Write batches: Use `editRange()` instead of multiple `editCell()` calls

---

### Q: Can I prevent certain operations?

**A:**
Yes, use the `beforeWebMcpToolExecute` event:

```typescript
spreadsheet.beforeWebMcpToolExecute = (args) => {
    const restrictedTools = ['deleteSheet', 'saveWorkbook'];
    if (restrictedTools.includes(args.toolName)) {
        args.cancel = true;
    }
};
```

## See Also

* [Open and Save](../open-save)
* [Data Binding](../data-binding)
