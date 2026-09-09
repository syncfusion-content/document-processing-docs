---
layout: post
title: WebMCP Tools for Spreadsheet Editor SDK | Syncfusion
description: Learn about WebMCP (Model Context Protocol) and how to use it with the Syncfusion Spreadsheet Editor SDK to expose spreadsheet operations to AI agents.
platform: document-processing
control: WebMCP
documentation: ug
---

# WebMCP Tools for Spreadsheet Editor SDK

**WebMCP** (Model Context Protocol) brings AI automation capabilities directly into the Syncfusion® Spreadsheet Editor. Instead of AI agents attempting to read the DOM or simulate user clicks, web pages explicitly declare their capabilities through structured tool definitions — giving agents reliable, deterministic ways to interact with applications.

## What is WebMCP?

WebMCP is a proposed web standard that enables web applications to expose functionality as structured tools that AI agents can invoke directly. Each tool includes:

- **Natural Language Description** — Explains what the tool does in human-readable terms
- **Input/Output Schemas** — JSON Schema definitions describing parameters and return values
- **Execution Context** — Direct function invocation without DOM manipulation or UI simulation

### Key Concepts

- **Tool**: A JavaScript function with schema definitions that agents can invoke
- **ModelContext**: The browser API (`document.modelContext`) that manages tool registration and invocation
- **Schema**: JSON Schema definitions describing tool inputs, outputs, and constraints
- **Agent**: An autonomous assistant (LLM-powered) that can understand goals and invoke registered tools to accomplish tasks

### Browser Support

WebMCP is currently available:
- Behind a feature flag in **Chromium-based browsers** (Chrome, Edge, Brave, etc.)
- Experimental status; API and browser behavior may change as the standard evolves
- Requires secure context (HTTPS or localhost) for development and cross-origin scenarios

For local development, enable WebMCP for testing via `chrome://flags/`.

> **Note:** WebMCP is an experimental browser standard. The API and behavior may change as the standard evolves. The Syncfusion Spreadsheet WebMCP integration is a preview feature.

## Integration

WebMCP integrates seamlessly into Syncfusion Spreadsheet applications across all major platforms. Choose your framework below to get started with platform-specific setup instructions, API references, code examples, and sample prompts.

### Supported Platforms

- **[WebMCP Integration for React Spreadsheet](../Excel/Spreadsheet/react/webmcp)** — React-based Spreadsheet Editor
- **[WebMCP Integration for Angular Spreadsheet](../Excel/Spreadsheet/angular/webmcp)** — Angular-based Spreadsheet Editor
- **[WebMCP Integration for Vue Spreadsheet](../Excel/Spreadsheet/vue/webmcp)** — Vue.js-based Spreadsheet Editor
- **[WebMCP Integration for TypeScript Spreadsheet](../Excel/Spreadsheet/javascript-es6/webmcp)** — TypeScript/ES6 Spreadsheet Editor
- **[WebMCP Integration for JavaScript Spreadsheet](../Excel/Spreadsheet/javascript-es5/webmcp)** — Vanilla JavaScript/ES5 Spreadsheet Editor
- **[WebMCP Integration for ASP.NET Core Spreadsheet](../Excel/Spreadsheet/asp-net-core/webmcp)** — ASP.NET Core Spreadsheet Editor
- **[WebMCP Integration for ASP.NET MVC Spreadsheet](../Excel/Spreadsheet/asp-net-mvc/webmcp)** — ASP.NET MVC Spreadsheet Editor

## Why Use WebMCP for Spreadsheet?

Syncfusion Spreadsheet integration with WebMCP provides significant benefits for building AI-powered spreadsheet applications:

### ✅ Key Benefits

- **Universal Tool Access** — AI agents, LLMs, and any MCP-compatible client can discover and invoke spreadsheet operations
- **Zero Custom Integration** — Inject the WebMcpAdapter module, call `registerWebMcpTools()`, and all tool registration, schema binding, and life cycle management is automatic
- **Schema-Validated I/O** — Every tool includes JSON Schema for inputs and outputs, eliminating hallucination and enabling AI clients to validate data reliably
- **Controlled Execution** — Write operations can trigger user confirmation dialogs when the `showConfirmationDialog` property is enabled in the `beforeWebMcpToolExecute` event. Applications can use this event to audit, restrict, or cancel any operation
- **Multi-Instance Friendly** — Unique prefixes per Spreadsheet prevent tool-name collisions when multiple instances share a page
- **Native Integration** — Write tools participate in Spreadsheet's undo/redo pipeline and clean up automatically on component destruction
- **Real-Time Feedback** — Tools return immediate structured responses so agents can confirm or chain the next action

## How WebMCP Works in Spreadsheet

Understanding how WebMCP processes your request helps you write better prompts and get more reliable results.

### The Six-Stage Pipeline

When you invoke a WebMCP tool, the following happens behind the scenes:

1. **Tool Discovery** — Retrieve available tool schemas via `getWebMcpTools()`
2. **Tool Registration** — Register tools on `document.modelContext` with unique prefixes
3. **Tool Invocation** — AI Agent calls tool via `document.modelContext`
4. **Adapter Routing** — WebMcpAdapter strips prefix and fires `beforeWebMcpToolExecute` event
5. **Confirmation & Execution** — Write tools are confirmed through `beforeWebMcpToolExecute`, while read tools execute immediately
6. **Response Formatting** — Returns structured response with success or error

```
┌─────────────────────────────────────────────────────────────────┐
│  1. Tool Discovery                                              │
│     spreadsheet.getWebMcpTools(toolNames?)                      │
│     → Returns available tool schemas, optionally filtered       │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│  2. Tool Registration                                           │
│     spreadsheet.registerWebMcpTools(prefix, tools, exposedTo)   │
│     → Registers tools on document.modelContext                  │
│     → Prefixes each tool name (e.g., sales_getCellData)         │
│     → Binds execute callbacks                                   │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│  3. Tool Invocation                                             │
│     AI Agent calls tool via document.modelContext               │
│     → Sends tool name and input parameters                      │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│  4. Adapter Routing                                             │
│     WebMcpAdapter.executeHandler() routes the call              │
│     → Strips prefix from tool name                              │
│     → Fires beforeWebMcpToolExecute event                       │
│     → Dispatches to appropriate handler                         │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│  5. Confirmation & Execution                                   │
│     For Write Tools:                                            │
│     → Shows user confirmation dialog by default                 │
│     → Executes via CommandExecutor (undo/redo support)          │
│     For Read Tools:                                             │
│     → Executes immediately                                      │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│  6. Response Formatting                                         │
│     Returns structured WebMcpToolResponse                       │
│     → Success: { content: [{ type: 'text', text: JSON }] }      │
│     → Error: { error: 'Error message' }                         │
└─────────────────────────────────────────────────────────────────┘
```

## Common Use Cases

### AI-Assisted Data Analysis
Agents analyze datasets, create summaries, and apply formatting via natural language prompts.

**Example:** "Analyze the sales data and show me the top 3 performing regions with their total revenue."

### Automated Reporting
Transform raw data into professionally formatted reports with charts and conditional highlighting.

**Example:** "Create a summary report: highlight top performers, add a total row, and insert a chart showing performance by department."

### Data Entry Automation
Populate spreadsheets from external sources while respecting data validation rules.

**Example:** "Import the customer list and apply data validation for email addresses."

### Multi-Step Workflows
Orchestrate complex operations in sequence based on user intent.

**Example:** "Sort by sales amount, filter for items above $1000, apply conditional formatting to highlight top 10%, and create a chart."

## Supported Features

WebMCP tools are organized into six categories, covering 28 operations:

| Category | Tools | Example |
|----------|-------|---------|
| **Core Data** | getCellData, getRangeData, getSheetInfo, getCellFormula, evaluateFormula | Read cell values and formulas programmatically |
| **Editing** | editCell, editRange, insertRows, insertColumns, insertSheet, deleteRows, deleteColumns, deleteSheet, renameSheet | Modify spreadsheet structure and content |
| **Formatting** | formatCells, clearFormatting, applyConditionalFormatting, autoFit | Apply styles and conditional rules |
| **Data Manipulation** | sortRange, filterData, find, replace, freezePanes, unfreezePanes | Transform and navigate data |
| **Charting & Shapes** | insertChart, editChart, deleteChart, insertShape | Create visualizations |
| **Workbook & Utility** | saveWorkbook, undo, redo, getSheetList | Manage workbook and history |

For complete tool reference with schemas, see [WebMCP Integration — Tool Reference](./integration#tool-reference).

## Writing Effective Prompts

AI responses are only as good as the prompt you provide. Vague requests like *"fix this"* give the AI very little context. More specific prompts produce reliable, accurate results.

**Good Prompt Example:**
*"Highlight all values in column B that are greater than 500 in red background with white font."*

**Vague Prompt Example:**
*"make it better"*

### Tips for Effective Prompts

- **Be Specific** — Include exact column names, cell ranges, colors, and formatting details
- **Provide Context** — Mention the sheet, data type, or business objective
- **One Goal at a Time** — Complex prompts may confuse the AI; break into steps
- **Reference Cells Clearly** — Use specific addresses (e.g., "A1:C10") instead of vague ranges
- **State Expectations** — Clarify sort order, filter criteria, or output format

## Limitations

- **Operates on the active sheet only** — WebMCP actions are scoped to the currently open sheet. Multi-sheet operations require separate prompts.

- **Prompt clarity affects result quality** — The AI interprets your request as written, so the quality of the output depends on how clearly the prompt is phrased.

- **Experimental status** — WebMCP is a preview standard. APIs and browser support may change as the specification evolves.

## See Also

* [Official WebMCP Specification](https://github.com/webmachinelearning/webmcp)
* [Chrome Developer Documentation](https://developer.chrome.com/docs/ai/webmcp/)
* [AI Assist](../ai-assist/overview) — Alternative AI-powered feature with backend-driven workflows
