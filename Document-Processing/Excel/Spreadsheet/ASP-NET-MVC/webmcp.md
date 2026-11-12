---
layout: post
title: WebMCP tool integration for ASP.NET MVC Spreadsheet | Syncfusion
description: Learn how to integrate WebMCP with Syncfusion ASP.NET MVC Spreadsheet to enable AI interaction, configure tools, manage access, and monitor execution.
control: WebMCP
platform: document-processing
documentation: ug
---

# WebMCP integration in ASP.NET MVC Spreadsheet

WebMCP enables AI agents to discover and interact with Syncfusion® ASP.NET MVC Spreadsheet through a standardized tool interface. By enabling WebMCP, AI-powered applications can securely discover Spreadsheet capabilities, read data, perform actions, and automate workflows through a standardized interface.

This section demonstrates how to integrate WebMCP with the Syncfusion® ASP.NET MVC Spreadsheet.

## WebMCP Overview

WebMCP allows AI assistants running in the browser to interact directly with Syncfusion® ASP.NET MVC Spreadsheet through natural language prompts.

Instead of relying on DOM inspection or simulating user interactions, AI assistants can interact directly with Spreadsheet APIs through WebMCP tools. This approach provides more reliable and accurate results.

Once connected, an AI assistant can perform tasks such as:

- Update Spreadsheet cells.
- Read and analyze spreadsheet data.
- Perform spreadsheet-specific actions through natural language prompts.

> WebMCP is currently an experimental browser capability and requires a Chromium-based browser with WebMCP support enabled. Availability and required browser flags may change as the specification evolves.

## Prerequisites

- Syncfusion® ASP.NET MVC Spreadsheet
- Chromium-based Browser (like Chrome, Edge, or Brave)
- [Node.js 24+](https://nodejs.org/en) (LTS recommended).
- WebMCP browser extension installed
- AI API key configured in the extension

## WebMCP setup

Before you can use WebMCP locally, enable the feature flag and install the browser extension:

1. Enable `WebMCP for testing` flag in chrome://flags or edge://flags.
2. Download and install the [WebMCP browser extension](https://chromewebstore.google.com/detail/webmcp-alpha/gllfhjjkphogmlodnlkjhejaihcbonbg).
3. Configure your AI provider API key in the extension settings.

## Basic Configuration

To enable WebMCP for the Spreadsheet, set `enableWebMcp` to `true` and add the `e-spreadsheet-webmcpsettings` child tag.

```html
<ejs-spreadsheet id="sheet" enableWebMcp="true" beforeWebMcpToolExecute="onWebMcpBeforeTool">
    <e-spreadsheet-webmcpsettings name="sheet"></e-spreadsheet-webmcpsettings>
</ejs-spreadsheet>
```

The `name` property uniquely identifies this Spreadsheet instance when multiple Spreadsheet instances exist on the same page. AI prompts reference Spreadsheet instances by name to disambiguate operations.

## ASP.NET MVC Integration

The Spreadsheet WebMCP integration requires ASP.NET MVC 5.0 or higher with the Syncfusion EJ2 package installed.

### Installation

Install the Syncfusion EJ2 ASP.NET MVC package:

```xml
<PackageReference Include="Syncfusion.EJ2.MVC5" Version="{Version}" />
```

Add the required namespaces to `web.config`:

```xml
<configuration>
  <system.web>
    <pages>
      <namespaces>
        <add namespace="Syncfusion.EJ2.Spreadsheet"/>
      </namespaces>
    </pages>
  </system.web>
</configuration>
```

### Basic Example

Create a simple Spreadsheet with WebMCP enabled:

```html
@{
    ViewBag.Title = "Spreadsheet WebMCP";
}

<h1>Spreadsheet — WebMCP</h1>

<div class="demo-host">
    @Html.EJS().Spreadsheet("sheet").Height("380px").EnableWebMcp(true).BeforeWebMcpToolExecute("onWebMcpBeforeTool")
        .Sheets(sheet =>
        {
            sheet.RangeSettings(range =>
            {
                range.DataSource(ViewBag.DataSource).Add();
            }).Add();
        })
        .WebMcpSettings(settings => settings.Name("sheet"))
        .Render()
</div>

<script>
    function onWebMcpBeforeTool(args) {
        // Cancel tool execution based on time, user role, or other criteria
        const hour = new Date().getHours();
        if (hour < 9 || hour > 17) {
            args.cancel = true;
            console.log('Cell editing is allowed only between 9:00 AM and 5:00 PM.');
        }
    }
</script>
```



## WebMCP Events

### beforeWebMcpToolExecute

Occurs before a WebMCP tool executes, allowing you to cancel operations based on business rules or security policies.

```html
@Html.EJS().Spreadsheet("sheet").EnableWebMcp(true).BeforeWebMcpToolExecute("onBeforeTool")
    .WebMcpSettings(settings => settings.Name("sheet"))
    .Render()
```

Handle the event to implement custom validation:

```javascript
function onBeforeTool(args) {
    // Access the tool name through args.toolName
    if (args.toolName === "editCell") {
        // Allow editing only for authorized users
        if (!isUserAuthorized()) {
            args.cancel = true;
            console.log("Unauthorized cell editing attempt blocked");
        }
    }
}
```

## WebMCP Settings Properties

| Property | Type | Description |
|----------|------|-------------|
| `Name` | String | Unique identifier for the Spreadsheet instance. Required when multiple Spreadsheet instances exist on the same page. |

## Best practices

- Use the `Name` property when multiple Spreadsheet instances exist on the same page.
- Monitor tool activity through the `BeforeWebMcpToolExecute` event.
- Apply application-specific validation before executing tool operations.

## Supported Features

WebMCP tools are organized into six categories:

| Category | Tools | Example |
|----------|-------|---------|
| **Core Data** | getCellData, getRangeData, getSheetInfo, sheetList, evaluateFormula, find | Read cell values, formulas, sheet metadata, and search content |
| **Editing** | editCell, insertRowsColumns, deleteRowsColumns, insertSheet, cut, copy, paste, autofill, findReplace | Modify spreadsheet content and structure |
| **Formatting** | formatCells, setNumberFormat, addConditionalFormat, mergeCells, toggleWrap | Apply styles, number formats, conditional rules, and cell layout |
| **Data Operations** | sortRange, filterRange, addDataValidation, freezePanes | Sort, filter, validate, and lock data for navigation |
| **Charting & Links** | insertChart, insertHyperlink | Create visualizations and insert clickable links |
| **Workbook & Utility** | save, undo | Export the workbook and manage action history |



## Writing Effective Prompts

AI responses are only as good as the prompt you provide. Vague requests like *"fix this"* give the AI very little context. More specific prompts produce reliable, accurate results.

**Good Prompt Example:**
*"Highlight all values in column B that are greater than 500 in red background with white font."*

**Vague Prompt Example:**
*"make it better"*

### Tips for Effective Prompts

- Be specific about the desired outcome.
- Include relevant context about your data.
- Specify formatting preferences clearly.
- Use natural language that describes the visual result you want.

### Common Spreadsheet Tasks

Here are examples of effective prompts for common Spreadsheet tasks:

**Data Analysis:**
*"Calculate the sum of column D and display it in cell D100."*

**Formatting:**
*"Apply currency format to column E and center align all headers."*

**Data Manipulation:**
*"Sort the data by column C in descending order and filter out empty rows."*

**Chart Creation:**
*"Create a bar chart showing sales data from columns A and B for the first quarter."*



## See also

- [MCP Server Setup](./mcp)
- [Getting Started with ASP.NET MVC Spreadsheet](./getting-started-mvc)
- [Spreadsheet API Reference](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Spreadsheet.html)