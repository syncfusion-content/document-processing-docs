---
layout: post
title: WebMCP Integration in Blazor Spreadsheet | Syncfusion
description: WebMCP integration in Blazor Spreadsheet explains setup, tool registration, configuration, and API reference with code examples.
platform: document-processing
control: WebMCP
documentation: ug
---

# WebMCP Integration in Blazor Spreadsheet

## Integration

WebMCP integrates seamlessly into your [Blazor Spreadsheet Editor](https://www.syncfusion.com/blazor-components/blazor-spreadsheet) application with minimal configuration. The integration exposes specialized tools that allow AI agents to perform workbook management, data analysis, worksheet manipulation, and spreadsheet insights operations through natural language.


### Prerequisites

Ensure the following before integrating WebMCP:

- Syncfusion Spreadsheet component is installed and configured. Refer to [Getting Started](https://help.syncfusion.com/document-processing/excel/spreadsheet/blazor/getting-started-webapp).
- A Chromium-based browser, such as Chrome, Edge, or Brave, has the WebMCP flag enabled.

## Getting Started

### Step 1: Configure Your Browser

Before you can use WebMCP locally, enable the feature flag and install the browser extension:

1. **Enable WebMCP Flag**
   - Enable WebMCP for testing through `chrome://flags/`.
   - Search for "WebMCP" and set to "Enabled (testing)".
   - Click **Relaunch** to restart Chrome.

2. **Install WebMCP Extension**
   - Search for **WebMCP - Model Context Tool Inspector** in the [Chrome Web Store](https://chromewebstore.google.com/detail/webmcp-model-context-tool/gbpdfapgefenggkahomfgkhfehlcenpd).
   - Click **Add to Chrome**.
   - Pin the extension icon to your toolbar.

3. **Configure Gemini API Key**
   - Visit [Google AI Studio](https://aistudio.google.com/app/apikey) to create or copy an API key.
   - Open the WebMCP extension and paste your API key.
   - The extension is now ready to use.

### Step 2: Import the Required Namespace

Add the following namespace to your Razor component:

{% highlight razor %}

@using Syncfusion.Blazor.Spreadsheet

{% endhighlight %}

### Step 3: Enable WebMCP

Set the `EnableWebMcp` property to `true` in the Spreadsheet configuration:

{% highlight razor %}

<SfSpreadsheet EnableWebMcp="true">
    <SpreadsheetRibbon></SpreadsheetRibbon>
</SfSpreadsheet>

{% endhighlight %}

### Step 4: Register Tools

Add `SpreadsheetWebMcpSettings` to register the available tools at the component level:

{% highlight razor %}

<SfSpreadsheet EnableWebMcp="true">
    <SpreadsheetWebMcpSettings Name="SpreadsheetEditor" />
</SfSpreadsheet>

{% endhighlight %}

### Step 5: Test Your Setup

**Test with your local setup**

- Run the application locally and open it in a Chromium-based browser.
- Launch the WebMCP extension and confirm that it connects to your application successfully.
- Verify that the registered tools are displayed with the configured prefix.
- Try a sample prompt that matches your data scenario to validate tool execution and response behavior.

**Sample prompts**

{% promptcards %}
{% promptcard Workbook Information %}
Summarize the current workbook and report the number of sheets and the used range
{% endpromptcard %}
{% endpromptcards %}

{% promptcards %}
{% promptcard Search and Replace %}
Find every occurrence of "Syncfusion" and replace it with "Syncfusion Inc." across the entire workbook
{% endpromptcard %}
{% endpromptcards %}

## Tool Reference

WebMCP tools are organized by category. The following tables provide an overview of all available tools. For complete input and output schemas, call `getWebMcpTools()` programmatically.

## Workbook Information Tools

| Tool Name | Type | Condition | Description |
|-----------|------|-----------|-------------|
| getActiveSheet | Read | Always | Gets the active sheet name, index, visibility, and row and column count. |
| getWorkbookInfo | Read | Always | Gets the sheet count, active sheet index, used range, and password-protection status. |
| getSelection | Read | Always | Gets the active cell, selected range, and sheet name. |
| getRangeData | Read | Opt-in | Gets the values of a cell range as row and column arrays, capped by `maxRows`. Enable it using `SpreadsheetWebMcpTool` with `Command="GetRangeData"`. |

## Cell Content Tools

| Tool Name | Type | Condition | Description |
|-----------|------|-----------|-------------|
| getCellValue | Read | Always | Gets a cell's value, formula, display text, address, and sheet name. |
| updateCell | Write | Always | Writes a value to a single cell. |
| updateCells | Write | Always | Writes multiple cell values in one call. |
| clearRange | Write | Always | Clears content, formats, hyperlinks, or all data from a range. |
| calculate | Write | Always | Recalculates all formulas in the workbook. |
| refresh | Write | Always | Refreshes the Spreadsheet UI. |

## Search, Replace, and Navigation Tools

| Tool Name | Type | Condition | Description |
|-----------|------|-----------|-------------|
| findAll | Read | Always | Finds all occurrences of text in the workbook and returns the match positions. It accepts `searchText` with optional `searchScope`, `matchCase`, and `matchEntireCell` options. |
| find | Write | Always | Finds the next or previous occurrence of text and navigates to it. |
| replace | Write | Always | Finds and replaces text with scope, case, whole-cell, and replace-all options. |
| selectRange | Write | Always | Selects a specific cell or range in the active sheet. |

## Data Manipulation Tools

| Tool Name | Type | Condition | Description |
|-----------|------|-----------|-------------|
| sortRange | Write | Always | Sorts a range in ascending or descending order. |
| autofill | Write | Always | Autofill a range from an optional source range. |
| filterByCellValue | Write | Always | Applies a filter that matches a cell's value. |
| clearFilter | Write | Always | Clears the filter on a specific field. |
| clearAllFilters | Write | Always | Clears all filters on the sheet. |
| reapplyFilters | Write | Always | Reapplies the current filters. |

## Formatting Tools

| Tool Name | Type | Condition | Description |
|-----------|------|-----------|-------------|
| setCellFormat | Write | Always | Applies cell styling, including background color, font color, size, family, weight, and text alignment. |
| setNumberFormat | Write | Always | Applies a number format code to a range. |
| setBorders | Write | Always | Applies borders to a range using the specified border type, line style, and color. |
| mergeCells | Write | Always | Merges cells in a range using Cells, Across, or Center. |
| unmergeCells | Write | Always | Unmerges cells in a range. |
| setColumnWidth | Write | Always | Sets the width of a column. |
| setRowHeight | Write | Always | Sets the height of a row. |

## Hyperlink Tools

| Tool Name | Type | Condition | Description |
|-----------|------|-----------|-------------|
| addHyperlink | Write | Always | Inserts a hyperlink at a cell with a URL and optional display text. |
| removeHyperlink | Write | Always | Removes the hyperlink from a cell. |

## Sheet Management Tools

| Tool Name | Type | Condition | Description |
|-----------|------|-----------|-------------|
| insertSheet | Write | Always | Inserts a new sheet using a name and index. The count must be `1`, and the command does not rename existing sheets. |
| deleteSheet | Write | Always | Deletes a sheet by name or index. |
| duplicateSheet | Write | Always | Duplicates an existing sheet. |
| moveSheet | Write | Always | Reorders a sheet within the workbook. |
| insertRow | Write | Always | Inserts rows above or below the specified row index. |
| insertColumn | Write | Always | Inserts columns to the left or right of the specified column index. |
| protectSheet | Write | Always | Enables protection on a sheet. |
| unprotectSheet | Write | Always | Removes protection from a sheet. |

## Formula and Name Tools

| Tool Name | Type | Condition | Description |
|-----------|------|-----------|-------------|
| addDefinedName | Write | Always | Defines a named range with a name, range, and optional scope. |
| removeDefinedName | Write | Always | Removes a defined name from the workbook. |

## Data Rules Tools

| Tool Name | Type | Condition | Description |
|-----------|------|-----------|-------------|
| addConditionalFormat | Write | Always | Adds a conditional-formatting rule to a range. |
| clearConditionalFormats | Write | Always | Clears conditional formatting from a range. |
| addDataValidation | Write | Always | Adds data validation to a range using a type, operator, values, and list source. |
| removeDataValidation | Write | Always | Removes data validation from a range. |

## Chart Tools

| Tool Name | Type | Condition | Description |
|-----------|------|-----------|-------------|
| insertChart | Write | Always | Inserts a chart over a data range with an optional theme and series orientation. |
| deleteChart | Write | Always | Deletes a chart using its chart ID. |
| listCharts | Read | Always | Lists all charts on the active sheet. |

## History Tools

| Tool Name | Type | Condition | Description |
|-----------|------|-----------|-------------|
| undo | Write | Always | Undoes the last action. |
| redo | Write | Always | Redoes the last undone action. |

## Document Management Tools

| Tool Name | Type | Condition | Description |
|-----------|------|-----------|-------------|
| save | Write | Always | Saves the workbook as Xlsx, Xls, Csv, or Pdf with an optional file name. |

## Code Examples

### Basic Setup

Set up a Spreadsheet with WebMCP enabled and register tools on creation.

{% tabs %}
{% highlight razor tabtitle="Home.razor" %}

@page "/spreadsheet-basic"
@using Syncfusion.Blazor.Spreadsheet
@rendermode InteractiveServer

<SfSpreadsheet 
    @ref="SpreadsheetInstance"
    DataSource="@WorkbookData"
    EnableWebMcp="true">
    <SpreadsheetWebMcpSettings Name="SpreadsheetEditor" />
    <SpreadsheetRibbon></SpreadsheetRibbon>
</SfSpreadsheet>

@code {
    private SfSpreadsheet SpreadsheetInstance;
    private byte[] WorkbookData;

    protected override void OnInitialized()
    {
        string filePath = "wwwroot/Sample.xlsx";
        WorkbookData = File.ReadAllBytes(filePath);
    }
}

{% endhighlight %}
{% endtabs %}


### Custom Tool Configuration

Configure WebMCP tools with custom descriptions, disable specific tools, and handle custom tool execution.

{% tabs %}
{% highlight razor tabtitle="Home.razor" %}

@page "/spreadsheet-custom"
@using Syncfusion.Blazor.Spreadsheet
@rendermode InteractiveServer

<SfSpreadsheet 
    @ref="SpreadsheetInstance"
    DataSource="@WorkbookData"
    EnableWebMcp="true"
    OnWebMcpExecute="OnWebMcpExecute">
    <SpreadsheetWebMcpSettings Name="SpreadsheetEditor">
        <SpreadsheetWebMcpTools>
            <!-- Change built-in tool description -->
            <SpreadsheetWebMcpTool 
                Command="SpreadsheetWebMcpToolCommand.UpdateCell" 
                Description="Modify a cell value" />
            <!-- Disable a built-in tool -->
            <SpreadsheetWebMcpTool 
                Command="SpreadsheetWebMcpToolCommand.DeleteSheet" 
                Enabled="false" />
            <!-- Register custom tool -->
            <SpreadsheetWebMcpTool 
                Command="SpreadsheetWebMcpToolCommand.Custom" 
                Name="getTotalAmount" 
                Description="Calculate total amount from selected range" 
                InputSchema="@inputSchema" />
        </SpreadsheetWebMcpTools>
    </SpreadsheetWebMcpSettings>
    <SpreadsheetRibbon></SpreadsheetRibbon>
</SfSpreadsheet>

@code {
    private SfSpreadsheet SpreadsheetInstance;
    private byte[] WorkbookData;

    private const string inputSchema = """
    {
        "type": "object",
        "properties": {
            "range": {
                "type": "string",
                "description": "Cell range like A1:A10"
            }
        }
    }
    """;

    protected override void OnInitialized()
    {
        string filePath = "wwwroot/Sample.xlsx";
        WorkbookData = File.ReadAllBytes(filePath);
    }

    private Task OnWebMcpExecute(SpreadsheetWebMcpExecuteEventArgs args)
    {
        if (args.Name == "getTotalAmount")
        {
            args.Result = System.Text.Json.JsonSerializer.Serialize(new
            {
                total = 5000,
                range = args.Arguments?["range"]?.ToString() ?? "Unknown"
            });
        }

        return Task.CompletedTask;
    }
}

{% endhighlight %}
{% end tabs %}

## See Also

* [Getting Started with Blazor Spreadsheet](https://help.syncfusion.com/document-processing/excel/spreadsheet/blazor/getting-started-webapp)