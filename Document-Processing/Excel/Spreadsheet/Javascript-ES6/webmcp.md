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

- Syncfusion Spreadsheet component is installed and configured [Getting Started](./getting-started)
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

Import and inject the `WebMcpSpreadsheet` module into your Spreadsheet:

```typescript
import { Spreadsheet, WebMcpSpreadsheet } from '@syncfusion/ej2-react-spreadsheet';

// Inject the WebMCP module to enable MCP tool support
Spreadsheet.Inject(WebMcpSpreadsheet);
```

### Step 3: Enable WebMCP

Set the `enableWebMcp` property to `true` in your Spreadsheet configuration. When enabled, all WebMCP tools are registered automatically:

```typescript
const spreadsheet = new Spreadsheet({
    enableWebMcp: true,  // Enable WebMCP integration — registers all tools automatically
    sheets: [{
        name: 'Sales Data',
        ranges: [{ dataSource: salesData }]
    }],
    // ... other configuration
});
```

### Step 4: Configure WebMCP Settings

Use the `webMcpSettings` property to customize tool registration — set a unique name prefix, restrict which tools are exposed, or configure cross-origin access:

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
    webMcpSettings: { name: 'sales' }, 
    sheets: [{
        name: 'Gross Pay',
        ranges: [{ dataSource: grosspay }]
    }]
});
```

### Step 5: Test Your Setup

**Test with Your Local Setup**
- Run the application locally and open it in a Chromium-based browser such as Chrome, Edge, or Brave.
- Launch the WebMCP extension and confirm that it connects to your application successfully.
- Verify that the registered tools are displayed with your chosen prefix, such as sales_getCellData.
- Try a sample prompt that matches your data scenario to validate tool execution and response behavior.

Additionally, we have hosted a sample for your reference Syncfusion WebMCP demo.

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

### WebMCP Settings

Use the `webMcpSettings` property to customize tool registration. When `enableWebMcp` is `true`, all tools are registered automatically. Use `webMcpSettings` to control the prefix, restrict tool exposure, or allow cross-origin access.

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `prefix` | `string` | ❌ | Unique prefix to avoid tool-name collisions (e.g., `'sales'`, `'inventory'`). Defaults to the spreadsheet element's ID if omitted. |
| `toolNames` | `string[]` | ❌ | Array of permitted tool names (e.g., `['getCellData', 'editCell']`). When omitted, all available tools are registered. |
| `exposedTo` | `string[]` | ❌ | List of trusted origins for cross-origin access (e.g., `['https://trusted.example.com']`). Omit for same-origin only. |

### Usage Examples

**Register all tools:**
```typescript
const spreadsheet = new Spreadsheet({
    enableWebMcp: true,
    webMcpSettings: { name: 'sales' }
    // Tools registered as: sales_getCellData, sales_editCell, ...
});
```

**Register specific tools only:**
```typescript
const spreadsheet = new Spreadsheet({
    enableWebMcp: true,
    webMcpSettings: {
        name: 'sales',
        tools: ['getCellData', 'editCell', 'formatCells']
    }
    // Only these 3 tools are registered, reducing attack surface
});
```

**Multi-instance setup:**
```typescript
const spreadsheet1 = new Spreadsheet({
    enableWebMcp: true,
    webMcpSettings: { name: 'sales' }
    // sales_getCellData, sales_editCell, ...
});

const spreadsheet2 = new Spreadsheet({
    enableWebMcp: true,
    webMcpSettings: { name: 'inventory' }
    // inventory_getCellData, inventory_editCell, ...
});

// No tool-name collisions; both spreadsheets can share a page safely
```

**Cross-origin access:**
```typescript
const spreadsheet = new Spreadsheet({
    enableWebMcp: true,
    webMcpSettings: {
        name: 'sales',
        exposedTo: [
            'https://trusted.example.com',
            'https://analytics.example.com'
        ]
    }
    // Tools are accessible from these origins (requires HTTPS)
});
```

### Understanding the `beforeWebMcpToolExecute` Event

Hook into tool execution for auditing, restrictions, or custom logic:

```typescript
const spreadsheet = new Spreadsheet({
    enableWebMcp: true,
    webMcpSettings: { name: 'sales' },
    // ... config
});

// Listen for tool execution attempts
spreadsheet.beforeWebMcpToolExecute = (args: BeforeWebMcpToolExecuteEventArgs) => {
    const { toolName, toolArgs } = args;
    
    console.log(`Tool ${toolName} invoked with:`, toolArgs);
    
    // Example: Prevent writing to specific ranges
    if (toolName === 'editCell' && toolArgs.address === 'A1') {
        args.cancel = true; // Cancel this operation
    }
};
```

## Tool Reference

WebMCP tools are organized by category. The tables below provide an overview of all available tools. For complete input/output schemas, call `getWebMcpTools()` programmatically.

> **Note:** Write operations can trigger user confirmation dialogs when the `showConfirmationDialog` property is enabled in the `beforeWebMcpToolExecute` event. Applications can use this event to audit, restrict, or cancel any operation, whereas read operations execute immediately. In the tables below, the condition "Always" indicates that a tool is enabled by default, regardless of the component configuration.

### Core Data Tools

| Tool Name | Type | Condition | Description |
|----|----|----|-----|
| getCellData | Read | Always | Returns the value, formula, display text, and optional format of a single cell |
| getRangeData | Read | Always | Returns cell values, formulas, and display text for a cell ranges (capped at 200 rows) |
| getSheetInfo | Read | Always | Returns structural metadata of a sheet — row count, column count, used range, and optional cell data |
| sheetList | Read | Always | Returns the ordered list of all sheet names in the workbook |
| evaluateFormula | Read | Always | Evaluates a formula expression and returns the result |
| find | Searches a sheet or range for a value and returns all matching cell addresses |

### Editing Tools

| Tool Name | Type | Condition | Description |
|----|----|----|-----|
| editCell | Write | Always | Writes a value or formula into a single cell |
| insertRowsColumns | Write | Always | Inserts one or more blank rows or columns at a specified position |
| deleteRowsColumns | Write | Always | Deletes one or more rows or columns at a specified position |
| insertSheet | Write | Always | Inserts one or more new blank sheets into the workbook at a given position |
| cut | Write | Always | Cuts a range to the internal clipboard, ready for paste |
| copy | Write | Always | Copies a range to the internal clipboard without removing source data |
| paste | Write | Always | Pastes the current clipboard content into the specified destination range |
| autofill | Write | Always | Extends a data pattern or series from a source range into an adjacent target range |
| findReplace | Write | Always | Finds all occurrences of a value in the active sheet and replaces them with a new value |

### Formatting Tools

| Tool Name | Type | Condition | Description |
|----|----|----|-----|
| formatCells | Write | Always | Applies visual formatting (bold, italic, font, color, background) to a range without changing values |
| setNumberFormat | Write | Always | Applies a named number format (Currency, Percentage, Date, etc.) to a range |
| addConditionalFormat | Write | Always | Adds a rule-based conditional formatting highlight that updates dynamically as values change |
| mergeCells | Write | Always | Merges a group of cells into one spanning cell |
| toggleWrap | Write | Always | Enables or disables text wrapping within cells of a range |

### Data Manipulation Tools

| Tool Name | Type | Condition | Description |
|----|----|----|-----|
| sortRange | Write | Always | Reorders the rows of a range by the values in a specified column |
| filterRange | Write | Always | Applies a column filter to show only rows matching a condition, or clears an existing filter |
| addDataValidation | Write | Always | Attaches an input validation rule to a range to restrict what values can be entered |
| freezePanes | Write | Always | Freezes or unfreezes rows, columns, or both so they remain visible while scrolling |

### Charting & Shapes Tools

| Tool Name | Type | Condition | Description |
|----|----|----|-----|
| insertChart | Write | Always | Creates and inserts a chart bound to a data range into the active sheet |
| insertHyperlink | Write | Always | Inserts a clickable hyperlink into a cell with a display label |

### Workbook & Utility Tools

| Tool Name | Type | Condition | Description |
|----|----|----|-----|
| save | Write | Always | Opens the export dialog so the user can save the workbook in a chosen format (xlsx, csv, pdf, etc.) |
| undo | Write | Always | Reverses the last action performed on the spreadsheet |

## Code Examples

### Example 1: Basic Setup

Set up a Spreadsheet with WebMCP enabled and all tools registered automatically on creation.

```typescript
import { Spreadsheet, WebMcpSpreadsheet } from '../../../../src/index';
import { defaultData } from '../../../common/data-source';

// Inject WebMCP module globally
Spreadsheet.Inject(WebMcpSpreadsheet);

const spreadsheet: Spreadsheet = new Spreadsheet({
    enableWebMcp: true,
    webMcpSettings: { name: 'sales' },
    sheets: [{
        name: 'Price Details',
        ranges: [{ dataSource: defaultData }]
    }]
});
spreadsheet.appendTo('#spreadsheet');
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

const spreadsheet = new Spreadsheet({
    enableWebMcp: true,
    webMcpSettings: {
        name: 'analytics',
        tools: readOnlyTools
    },
    // ... other config
});
```

### Example 3: Multi-Instance Setup

Shows how to use different prefixes for multiple Spreadsheet instances.

```typescript
// Two spreadsheets on the same page with different prefixes
const salesSpreadsheet = new Spreadsheet({
    enableWebMcp: true,
    webMcpSettings: { name: 'sales' },
    sheets: [...],
});

const inventorySpreadsheet = new Spreadsheet({
    enableWebMcp: true,
    webMcpSettings: { name: 'inventory' },
    sheets: [...],
});

// Tools are now:
// sales_getCellData, sales_editCell, ...
// inventory_getCellData, inventory_editCell, ...
```

### Example 4: Auditing and Restrictions

Demonstrates how to intercept tool execution and block restricted actions.

```typescript
spreadsheet.beforeWebMcpToolExecute = (args: WebMcpToolExecuteEventArgs) => {
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

### Q: Multi-instance tools have naming conflicts

**A:**
- Always use different name values in `webMcpSettings` for each Spreadsheet instance:
```typescript
// Spreadsheet 1
webMcpSettings: { name: 'sales' }
// Spreadsheet 2
webMcpSettings: { name: 'inventory' }
```
- Never use the same name for multiple instances on the same page

---

### Q: How do I avoid performance issues with large datasets?

**A:**
1. Use selective tool registration — restrict to necessary tools via `webMcpSettings.tools`
2. Limit data ranges: Instead of "read entire sheet", specify "A1:Z100"
3. For large datasets, use `getRangeData()` instead of looping `getCellData()`
4. Avoid fetch all operations; filter or paginate when possible
5. Write batches: Use `editRange()` instead of multiple `editCell()` calls

---

### Q: Can I prevent certain operations?

**A:**
Yes, use the `beforeWebMcpToolExecute` event:

```typescript
spreadsheet.beforeWebMcpToolExecute = (args: WebMcpToolExecuteEventArgs) => {
    const restrictedTools = ['deleteSheet', 'saveWorkbook'];
    if (restrictedTools.includes(args.toolName)) {
        args.cancel = true;
    }
};
```

## See Also

* [Open and Save](../open-save)
* [Data Binding](../data-binding)
