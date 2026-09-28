---
layout: post
title: WebMCP Integration in ASP.NET Core Spreadsheet | Syncfusion
description: WebMCP integration in ASP.NET Core Spreadsheet explains setup, tool registration, configuration, and API reference with code examples.
platform: document-processing
control: WebMCP
documentation: ug
---

# WebMCP Integration in ASP.NET Core Spreadsheet

## Integration

WebMCP integrates seamlessly into your ASP.NET Core Spreadsheet application with minimal configuration. This section covers the required setup, tool discovery, registration, and complete API reference.

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

Inject the `WebMcpSpreadsheet` module into the Spreadsheet using JavaScript. Add the following script after the Syncfusion script references in `~/Pages/Shared/_Layout.cshtml`.

{% tabs %}
{% highlight cshtml tabtitle="~/_Layout.cshtml" %}

```html
<script>
    ej.spreadsheet.Spreadsheet.Inject(ej.spreadsheet.WebMcpSpreadsheet);
</script>
```

{% endhighlight %}
{% endtabs %}

### Step 3: Enable WebMCP

Set the `enableWebMcp` property to `true` in the Spreadsheet tag helper. When enabled, all WebMCP tools are registered automatically:

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}

```cshtml
<ejs-spreadsheet id="spreadsheet" enableWebMcp="true"
    openUrl="https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/open"
    saveUrl="https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/save">
</ejs-spreadsheet>
```

{% endhighlight %}
{% endtabs %}

### Step 4: Configure WebMCP Settings (Optional)

Use the `webMcpSettings` child tag helper to customize tool registration — set a unique name prefix, restrict which tools are exposed, or configure cross-origin access:

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}

```cshtml
<ejs-spreadsheet id="spreadsheet" enableWebMcp="true"
    openUrl="https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/open"
    saveUrl="https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/save">
    <e-spreadsheet-sheets>
        <e-spreadsheet-sheet name="Gross Pay">
            <e-spreadsheet-ranges>
                <e-spreadsheet-range dataSource="@ViewBag.GrossPayData"></e-spreadsheet-range>
            </e-spreadsheet-ranges>
        </e-spreadsheet-sheet>
    </e-spreadsheet-sheets>
    <e-spreadsheet-webmcpsettings name="sales">
    </e-spreadsheet-webmcpsettings>
</ejs-spreadsheet>
```

{% endhighlight %}
{% endtabs %}

### Step 5: Test Your Setup

**Test with Your Local Setup**
- Run the application locally and open it in a Chromium-based browser such as Chrome, Edge, or Brave.
- Launch the WebMCP extension and confirm that it connects to your application successfully.
- Verify that the registered tools are displayed with your chosen prefix, such as `sales_getCellData`.
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

Use `getWebMcpTools()` to retrieve available tool schemas via JavaScript:

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}

```cshtml
<ejs-spreadsheet id="spreadsheet" enableWebMcp="true"
    openUrl="https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/open"
    saveUrl="https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/save">
</ejs-spreadsheet>

<script>
    var spreadsheet = document.getElementById('spreadsheet').ej2_instances[0];

    // Get all tool schemas
    var allTools = spreadsheet.getWebMcpTools();

    // Get specific tools only
    var tools = spreadsheet.getWebMcpTools(['getCellData', 'editCell', 'formatCells']);

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
</script>
```

{% endhighlight %}
{% endtabs %}

### WebMCP Settings

Use the `<e-spreadsheet-webmcpsettings>` child tag helper to customize tool registration. When `enableWebMcp` is `true`, all tools are registered automatically. Use `webMcpSettings` to control the prefix, restrict tool exposure, or allow cross-origin access.

**Properties:**

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `name` | `string` | ❌ | Unique prefix to avoid tool-name collisions (e.g., `'sales'`, `'inventory'`). Defaults to the spreadsheet element's ID if omitted. |
| `tools` | `string[]` | ❌ | Array of permitted tool names (e.g., `['getCellData', 'editCell']`). When omitted, all available tools are registered. |
| `exposedTo` | `string[]` | ❌ | List of trusted origins for cross-origin access (e.g., `['https://trusted.example.com']`). Omit for same-origin only. |

### Usage Examples

**Register all tools:**

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}

```cshtml
<ejs-spreadsheet id="spreadsheet" enableWebMcp="true"
    openUrl="https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/open"
    saveUrl="https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/save">
    <e-spreadsheet-webmcpsettings name="sales">
        <%-- Tools registered as: sales_getCellData, sales_editCell, ... --%>
    </e-spreadsheet-webmcpsettings>
</ejs-spreadsheet>
```

{% endhighlight %}
{% endtabs %}

**Register specific tools only:**

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}

```cshtml
<ejs-spreadsheet id="spreadsheet" enableWebMcp="true"
    openUrl="https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/open"
    saveUrl="https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/save">
    <e-spreadsheet-webmcpsettings name="sales"
        tools="@(new string[] { "getCellData", "editCell", "formatCells" })">
        <%-- Only these 3 tools are registered, reducing attack surface --%>
    </e-spreadsheet-webmcpsettings>
</ejs-spreadsheet>
```

{% endhighlight %}
{% endtabs %}

**Multi-instance setup:**

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}

```cshtml
<ejs-spreadsheet id="spreadsheet1" enableWebMcp="true"
    openUrl="https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/open"
    saveUrl="https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/save">
    <e-spreadsheet-webmcpsettings name="sales">
        <%-- sales_getCellData, sales_editCell, ... --%>
    </e-spreadsheet-webmcpsettings>
</ejs-spreadsheet>

<ejs-spreadsheet id="spreadsheet2" enableWebMcp="true"
    openUrl="https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/open"
    saveUrl="https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/save">
    <e-spreadsheet-webmcpsettings name="inventory">
        <%-- inventory_getCellData, inventory_editCell, ... --%>
    </e-spreadsheet-webmcpsettings>
</ejs-spreadsheet>
<%-- No tool-name collisions; both spreadsheets can share a page safely --%>
```

{% endhighlight %}
{% endtabs %}

**Cross-origin access:**

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}

```cshtml
<ejs-spreadsheet id="spreadsheet" enableWebMcp="true"
    openUrl="https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/open"
    saveUrl="https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/save">
    <e-spreadsheet-webmcpsettings name="sales"
        exposedTo="@(new string[] { "https://trusted.example.com", "https://analytics.example.com" })">
        <%-- Tools are accessible from these origins (requires HTTPS) --%>
    </e-spreadsheet-webmcpsettings>
</ejs-spreadsheet>
```

{% endhighlight %}
{% endtabs %}

### Understanding the `beforeWebMcpToolExecute` Event

Hook into tool execution for auditing, restrictions, or custom logic:

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}

```cshtml
<ejs-spreadsheet id="spreadsheet" enableWebMcp="true"
    beforeWebMcpToolExecute="onBeforeWebMcpToolExecute"
    openUrl="https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/open"
    saveUrl="https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/save">
    <e-spreadsheet-webmcpsettings name="sales">
    </e-spreadsheet-webmcpsettings>
</ejs-spreadsheet>

<script>
    function onBeforeWebMcpToolExecute(args) {
        console.log('Tool ' + args.toolName + ' invoked with:', args.toolArgs);

        // Example: Prevent writing to specific ranges
        if (args.toolName === 'editCell' && args.toolArgs.address === 'A1') {
            args.cancel = true; // Cancel this operation
        }
    }
</script>
```

{% endhighlight %}
{% endtabs %}

## Tool Reference

WebMCP tools are organized by category. The tables below provide an overview of all available tools. For complete input/output schemas, call `getWebMcpTools()` programmatically.

> **Note:** Write operations can trigger user confirmation dialogs when the `showConfirmationDialog` property is enabled in the `beforeWebMcpToolExecute` event. Applications can use this event to audit, restrict, or cancel any operation, whereas read operations execute immediately. In the tables below, the condition "Always" indicates that a tool is enabled by default, regardless of the component configuration.

### Core Data Tools

| Tool Name | Type | Condition | Description |
|-----------|------|-----------|-------------|
| getCellData | Read | Always | Returns the value, formula, display text, and optional format of a single cell |
| getRangeData | Read | Always | Returns cell values, formulas, and display text for a cell range (capped at 200 rows) |
| getSheetInfo | Read | Always | Returns structural metadata of a sheet — row count, column count, used range, and optional cell data |
| sheetList | Read | Always | Returns the ordered list of all sheet names in the workbook |
| evaluateFormula | Read | Always | Evaluates a formula expression and returns the result |
| find | Read | Always | Searches a sheet or range for a value and returns all matching cell addresses |

### Editing Tools

| Tool Name | Type | Condition | Description |
|-----------|------|-----------|-------------|
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
|-----------|------|-----------|-------------|
| formatCells | Write | Always | Applies visual formatting (bold, italic, font, color, background) to a range without changing values |
| setNumberFormat | Write | Always | Applies a named number format (Currency, Percentage, Date, etc.) to a range |
| addConditionalFormat | Write | Always | Adds a rule-based conditional formatting highlight that updates dynamically as values change |
| mergeCells | Write | Always | Merges a group of cells into one spanning cell |
| toggleWrap | Write | Always | Enables or disables text wrapping within cells of a range |

### Data Manipulation Tools

| Tool Name | Type | Condition | Description |
|-----------|------|-----------|-------------|
| sortRange | Write | Always | Reorders the rows of a range by the values in a specified column |
| filterRange | Write | Always | Applies a column filter to show only rows matching a condition, or clears an existing filter |
| addDataValidation | Write | Always | Attaches an input validation rule to a range to restrict what values can be entered |
| freezePanes | Write | Always | Freezes or unfreezes rows, columns, or both so they remain visible while scrolling |

### Charting & Shapes Tools

| Tool Name | Type | Condition | Description |
|-----------|------|-----------|-------------|
| insertChart | Write | Always | Creates and inserts a chart bound to a data range into the active sheet |
| insertHyperlink | Write | Always | Inserts a clickable hyperlink into a cell with a display label |

### Workbook & Utility Tools

| Tool Name | Type | Condition | Description |
|-----------|------|-----------|-------------|
| save | Write | Always | Opens the export dialog so the user can save the workbook in a chosen format (xlsx, csv, pdf, etc.) |
| undo | Write | Always | Reverses the last action performed on the spreadsheet |

## Code Examples

### Example 1: Basic Setup

Set up a Spreadsheet with WebMCP enabled and all tools registered automatically.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}

```cshtml
<ejs-spreadsheet id="spreadsheet" enableWebMcp="true"
    openUrl="https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/open"
    saveUrl="https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/save">
    <e-spreadsheet-sheets>
        <e-spreadsheet-sheet name="Sales Data">
            <e-spreadsheet-ranges>
                <e-spreadsheet-range dataSource="@ViewBag.SalesData"></e-spreadsheet-range>
            </e-spreadsheet-ranges>
        </e-spreadsheet-sheet>
    </e-spreadsheet-sheets>
    <e-spreadsheet-webmcpsettings name="sales">
    </e-spreadsheet-webmcpsettings>
</ejs-spreadsheet>
```

{% endhighlight %}
{% endtabs %}

### Example 2: Selective Tool Registration

Register only read-only tools to reduce exposure.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}

```cshtml
<ejs-spreadsheet id="spreadsheet" enableWebMcp="true"
    openUrl="https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/open"
    saveUrl="https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/save">
    <e-spreadsheet-webmcpsettings name="analytics"
        tools="@(new string[] {
            "getCellData", "getRangeData", "getSheetInfo",
            "evaluateFormula", "find", "sheetList"
        })">
        <%-- Only read tools are registered — safer for public applications --%>
    </e-spreadsheet-webmcpsettings>
</ejs-spreadsheet>
```

{% endhighlight %}
{% endtabs %}

### Example 3: Multi-Instance Setup

Shows how to use different prefixes for multiple Spreadsheet instances on the same page.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}

```cshtml
<ejs-spreadsheet id="spreadsheet1" enableWebMcp="true"
    openUrl="https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/open"
    saveUrl="https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/save">
    <e-spreadsheet-webmcpsettings name="sales">
    </e-spreadsheet-webmcpsettings>
</ejs-spreadsheet>

<ejs-spreadsheet id="spreadsheet2" enableWebMcp="true"
    openUrl="https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/open"
    saveUrl="https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/save">
    <e-spreadsheet-webmcpsettings name="inventory">
    </e-spreadsheet-webmcpsettings>
</ejs-spreadsheet>

<%--
    Tools are now:
    sales_getCellData, sales_editCell, ...
    inventory_getCellData, inventory_editCell, ...
--%>
```

{% endhighlight %}
{% endtabs %}

### Example 4: Auditing and Restrictions

Demonstrates how to intercept tool execution and block restricted actions.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}

```cshtml
<ejs-spreadsheet id="spreadsheet" enableWebMcp="true"
    beforeWebMcpToolExecute="onBeforeWebMcpToolExecute"
    openUrl="https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/open"
    saveUrl="https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/save">
    <e-spreadsheet-webmcpsettings name="sales">
    </e-spreadsheet-webmcpsettings>
</ejs-spreadsheet>

<script>
    function onBeforeWebMcpToolExecute(args) {
        // Log all tool invocations
        console.log('[WebMCP] Executing: ' + args.toolName, args.toolArgs);

        // Block sensitive operations
        if (args.toolName === 'deleteRowsColumns') {
            if (!userHasAdminPermission()) {
                args.cancel = true;
            }
        }

        // Restrict editing to specific ranges
        if (args.toolName === 'editCell' && !isEditableRange(args.toolArgs.address)) {
            args.cancel = true;
        }
    }

    function userHasAdminPermission() { return false; }
    function isEditableRange(address) { return true; }
</script>
```

{% endhighlight %}
{% endtabs %}

### Example 5: Error Handling

Shows how to call a tool manually and handle success or failure.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}

```cshtml
<script>
    async function invokeToolManually(toolName, toolArgs) {
        try {
            // Get tool from context
            var tool = await document.modelContext.getTool(toolName);

            if (!tool) {
                console.error('Tool not found: ' + toolName);
                return null;
            }

            // Invoke the tool
            var result = await tool.execute(toolArgs, {});

            // Handle response
            if (result.error) {
                console.error('Tool error: ' + result.error);
                return null;
            }

            var responseText = result.content[0].text;
            var responseData = JSON.parse(responseText);

            console.log('Tool result:', responseData);
            return responseData;
        } catch (error) {
            console.error('Failed to invoke tool:', error);
            return null;
        }
    }
</script>
```

{% endhighlight %}
{% endtabs %}

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
1. Verify `enableWebMcp="true"` in your Spreadsheet tag helper
2. Confirm the `Inject` script is placed after the Syncfusion script references in `_Layout.cshtml`
3. Open DevTools (F12) → Console, check for errors
4. Try refreshing the page and opening the extension again
5. Verify the tool prefix is correct in `<e-spreadsheet-webmcpsettings name="...">` (check console logs)

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
- Default ASP.NET Core dev server: `https://localhost:{port}` (as defined in `launchSettings.json`)

---

### Q: Confirmation dialogs don't appear for write operations

**A:**
1. Verify that write tools are registered (they have `confirmation: Yes`)
2. Check that your browser isn't blocking dialogs
3. Ensure the `beforeWebMcpToolExecute` event handler isn't setting `args.cancel = true`

---

### Q: Multi-instance tools have naming conflicts

**A:**
- Always use different `name` values in `<e-spreadsheet-webmcpsettings>` for each Spreadsheet instance:
  ```cshtml
  <%-- Spreadsheet 1 --%>
  <e-spreadsheet-webmcpsettings name="sales"></e-spreadsheet-webmcpsettings>
  <%-- Spreadsheet 2 --%>
  <e-spreadsheet-webmcpsettings name="inventory"></e-spreadsheet-webmcpsettings>
  ```
- Never use the same name for multiple instances on the same page

---

### Q: How do I avoid performance issues with large datasets?

**A:**
1. Use selective tool registration — restrict to necessary tools via the `tools` attribute
2. Limit data ranges: Instead of "read entire sheet", specify "A1:Z100"
3. For large datasets, use `getRangeData()` instead of looping `getCellData()`
4. Avoid fetch-all operations; filter or paginate when possible
5. Write batches: Use `editCell` with targeted addresses rather than broad range operations

---

### Q: Can I prevent certain operations?

**A:**
Yes, use the `beforeWebMcpToolExecute` event:

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}

```cshtml
<ejs-spreadsheet id="spreadsheet" enableWebMcp="true"
    beforeWebMcpToolExecute="onBeforeWebMcpToolExecute"
    openUrl="https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/open"
    saveUrl="https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/save">
</ejs-spreadsheet>

<script>
    function onBeforeWebMcpToolExecute(args) {
        var restrictedTools = ['deleteRowsColumns', 'save'];
        if (restrictedTools.indexOf(args.toolName) !== -1) {
            args.cancel = true;
        }
    }
</script>
```

{% endhighlight %}
{% endtabs %}

## See Also

* [Open and Save](../open-save)
* [Data Binding](../data-binding)
