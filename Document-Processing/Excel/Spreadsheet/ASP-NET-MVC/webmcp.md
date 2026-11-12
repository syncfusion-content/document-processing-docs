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

## Integrating WebMCP tools

Follow these steps to integrate WebMCP support into Syncfusion® ASP.NET MVC Spreadsheet.

### Step 1: Create an application

Create an ASP.NET MVC application and add the Syncfusion® ASP.NET MVC Spreadsheet by following the [Getting Started with ASP.NET MVC Spreadsheet](https://help.syncfusion.com/document-processing/excel/spreadsheet/asp-net-mvc/getting-started-mvc) guide. After completing the setup, follow the steps below to enable WebMCP integration.

### Step 2: Enable WebMCP support

Set the `enableWebMcp` property to `true` to register the Spreadsheet's available tools with the WebMCP runtime.

When `enableWebMcp` is enabled, Spreadsheet tools are automatically registered with the WebMCP runtime and become discoverable by authorized WebMCP clients.

For example, a Spreadsheet may expose tools such as:

- getCellData
- editCell
- addSheet

An AI assistant can discover these tools and invoke them based on user prompts.

### Step 3: Register Spreadsheet tools

To register Spreadsheet tools with WebMCP, set `enableWebMcp` to `true` and configure the `webMcpSettings` with a `name`.

In ASP.NET MVC, Spreadsheet tools can be enabled using the fluent API:

```cshtml
@Html.EJS().Spreadsheet("sheet").Height("380px").EnableWebMcp(true).BeforeWebMcpToolExecute("onWebMcpBeforeTool").Render()
```

With webMcpSettings configuration:

```cshtml
@Html.EJS().Spreadsheet("sheet").Height("380px").EnableWebMcp(true).BeforeWebMcpToolExecute("onWebMcpBeforeTool")
    .WebMcpSettings(settings => settings.Name("sheet"))
    .Render()
```

### Step 4: Customize tool registration

Use the `webMcpSettings` property to customize how WebMCP tools are exposed to AI agents. The available settings are listed below.

| Property | Description |
|----------|-------------|
| `Name` | Prefix applied to registered tool names. If Name: `sales` is specified, a tool such as `getCellData` may be registered as `sales_getCellData`, allowing multiple Spreadsheet instances to coexist without tool name conflicts. |

> Use only the `Name` property as other properties like `Tools` and `ExposeTo` are not verified for ASP.NET Spreadsheet.

### Step 5: Monitor and control tool execution

The `BeforeWebMcpToolExecute` event is triggered before a tool is executed. This event allows you to:

- Audit tool usage.
- Validate incoming requests.
- Cancel tool execution when necessary.
- Apply custom business rules and security policies.

> AI-generated requests should always be validated before executing write operations. Perform additional authorization checks within `BeforeWebMcpToolExecute` when modifying application data.

Handle the event to implement custom validation:

```javascript
function onWebMcpBeforeTool(args) {
    // Access the tool name through args.toolName
    // Note: Event argument structure may vary in ASP.NET implementation
    console.log("WebMCP tool execution: " + args.toolName);
}
```

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

- **Be Specific** — Include exact column names, cell ranges, colors, and formatting details
- **Provide Context** — Mention the sheet, data type, or business objective
- **One Goal at a Time** — Complex prompts may confuse the AI; break them into steps
- **Reference Cells Clearly** — Use specific addresses (e.g., "A1:C10") instead of vague ranges
- **State Expectations** — Clarify sort order, filter criteria, or output format

## Next steps

After successfully enabling WebMCP, you can:

- Build AI-powered workflows that interact directly with spreadsheet data and UI elements.
- Create secure and controlled tool execution pipelines using custom validation logic.
- Enhance spreadsheet applications with intelligent automation.

## See also

- [MCP Server Setup](./mcp)