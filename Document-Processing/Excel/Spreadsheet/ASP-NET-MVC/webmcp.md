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

## Basic Configuration

To enable WebMCP for the Spreadsheet, set `enableWebMcp` to `true`, bind the `beforeWebMcpToolExecute` event, and configure the `webMcpSettings` with a `name`.

The `name` property uniquely identifies this Spreadsheet instance when multiple Spreadsheet instances exist on the same page. AI prompts reference Spreadsheet instances by name to disambiguate operations.

## WebMCP Events

### beforeWebMcpToolExecute

The `beforeWebMcpToolExecute` event is a Spreadsheet event that occurs before a WebMCP tool executes.

## WebMCP Settings Properties

| Property | Type | Description |
|----------|------|-------------|
| `name` | String | Unique identifier for the Spreadsheet instance. Required when multiple Spreadsheet instances exist on the same page. |

## Best practices

- Use the `name` property when multiple Spreadsheet instances exist on the same page.
- Monitor tool activity through the `beforeWebMcpToolExecute` event.

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
