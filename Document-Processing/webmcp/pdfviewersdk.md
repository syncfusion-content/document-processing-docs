---
layout: post
title: WebMCP Tools for PDF Viewer SDK | Syncfusion
description: Learn about WebMCP (Model Context Protocol) and how to use it with the Syncfusion PDF Viewer SDK to expose PDF operations to AI agents.
platform: document-processing
control: WebMCP
documentation: ug
---

# WebMCP Tools for PDF Viewer SDK

**WebMCP** (Model Context Protocol) brings AI automation capabilities directly into the Syncfusion® PDF Viewer. Instead of AI agents attempting to read the DOM or simulate user clicks, web pages explicitly declare their capabilities through structured tool definitions — giving agents reliable, deterministic ways to interact with PDF documents.

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

> **Note:** WebMCP is an experimental browser standard. The API and behavior may change as the standard evolves. The Syncfusion PDF Viewer WebMCP integration is a preview feature.

## Integration

WebMCP integrates seamlessly into Syncfusion PDF Viewer applications across all major platforms. Choose your framework below to get started with platform-specific setup instructions, API references, code examples, and sample prompts.

### Supported Platforms

- **[WebMCP Integration for React PDF Viewer](../PDF/PDF-Viewer/react/webmcp)** — React-based PDF Viewer
- **[WebMCP Integration for Angular PDF Viewer](../PDF/PDF-Viewer/angular/webmcp)** — Angular-based PDF Viewer
- **[WebMCP Integration for Vue PDF Viewer](../PDF/PDF-Viewer/vue/webmcp)** — Vue.js-based PDF Viewer
- **[WebMCP Integration for Blazor PDF Viewer](../PDF/PDF-Viewer/blazor/webmcp)** — Blazor-based PDF Viewer
- **[WebMCP Integration for TypeScript PDF Viewer](../PDF/PDF-Viewer/javascript-es6/webmcp)** — TypeScript/ES6 PDF Viewer
- **[WebMCP Integration for JavaScript PDF Viewer](../PDF/PDF-Viewer/javascript-es5/webmcp)** — Vanilla JavaScript/ES5 PDF Viewer
- **[WebMCP Integration for ASP.NET Core PDF Viewer](../PDF/PDF-Viewer/asp-net-core/webmcp)** — ASP.NET Core PDF Viewer
- **[WebMCP Integration for ASP.NET MVC PDF Viewer](../PDF/PDF-Viewer/asp-net-mvc/webmcp)** — ASP.NET MVC PDF Viewer

## Why Use WebMCP for PDF Viewer?

Syncfusion PDF Viewer integration with WebMCP provides significant benefits for building AI-powered PDF applications:

### ✅ Key Benefits

- **Universal Tool Access** — AI agents, LLMs, and any MCP-compatible client can discover and invoke PDF operations
- **Zero Custom Integration** — Inject the WebMcpAdapter module, call `registerWebMcpTools()`, and all tool registration, schema binding, and life cycle management is automatic
- **Schema-Validated I/O** — Every tool includes JSON Schema for inputs and outputs, eliminating hallucination and enabling AI clients to validate data reliably
- **Controlled Execution** — Write operations (annotations, redaction, form fields) can trigger user confirmation dialogs when enabled. Applications can use events to audit, restrict, or cancel any operation
- **Multi-Instance Friendly** — Unique prefixes per PDF Viewer prevent tool-name collisions when multiple instances share a page
- **Native Integration** — Write tools participate in PDF Viewer's undo/redo pipeline and clean up automatically on component destruction
- **Real-Time Feedback** — Tools return immediate structured responses so agents can confirm or chain the next action
- **Security-Focused** — User confirmation required for sensitive operations, maintaining document integrity and compliance

## How WebMCP Works in PDF Viewer

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
│     viewer.getWebMcpTools(toolNames?)                           │
│     → Returns available tool schemas, optionally filtered       │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│  2. Tool Registration                                           │
│     viewer.registerWebMcpTools(prefix, tools, exposedTo)        │
│     → Registers tools on document.modelContext                  │
│     → Prefixes each tool name (e.g., pdf_navigateToPage)        │
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
│     For Write Tools (Annotations, Forms, Redaction):            │
│     → Shows user confirmation dialog by default                 │
│     → Executes via PDF Viewer API (undo/redo support)           │
│     For Read Tools (Navigation, Extraction):                    │
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

## Supported WebMCP Tools

WebMCP tools enable AI agents to interact with PDF documents and automate PDF-related operations. Through the tools exposed by the PDF Viewer, AI agents can access document pages, extract content, manage annotations, process form fields, perform redaction operations, and execute document actions.

### Document Navigation & Access

- **`navigateToPage`** — Navigate to a specific page number in the PDF
- **`searchAndNavigate`** — Search for text and navigate to search results
- **`getPageMetadata`** — Retrieve metadata information about specific pages
- **`zoomAndView`** — Control zoom level, fit modes, and viewing options
- **`getBookmarksAndNavigate`** — Access bookmarks and navigate to bookmarked locations

### Content Extraction

- **`extractTextContent`** — Extract text from specified pages with position information
- **`extractPages`** — Extract and export specific pages as separate documents

### Annotation Management

- **`addAnnotation`** — Add annotations (highlights, comments, stamps, ink)
- **`editAnnotation`** — Modify existing annotation properties and content
- **`retrieveAnnotations`** — Get all annotations from document with metadata
- **`deleteAnnotation`** — Remove annotations from document

### Form Field Operations

- **`retrieveFormFields`** — Get all form fields with type and value information
- **`addFormField`** — Create new form fields (text, checkbox, radio, dropdown)
- **`editFormField`** — Modify form field properties and values
- **`resetFormField`** — Reset form field values to defaults
- **`deleteFormField`** — Remove form fields from document

### Redaction Operations

- **`addRedaction`** — Add redaction marks (marks sensitive content for removal)
- **`updateRedaction`** — Modify redaction properties and coverage areas
- **`applyRedaction`** — Apply and finalize redactions (permanently removes content)

### Document Actions

- **`downloadDocument`** — Download processed document with all changes
- **`printDocument`** — Send document to printer with print settings
- **`copyText`** — Copy text content to clipboard
- **`undoRedoActions`** — Undo or redo document changes

## Common Use Cases

### AI-Assisted Document Analysis
Agents analyze PDFs, extract key information, summarize content, and identify important sections via natural language prompts.

**Example:** "Analyze this contract and extract key terms: parties, dates, payment amounts, and termination clauses."

### Automated Document Review
Transform documents through annotations, highlights, and comments for team review workflows.

**Example:** "Review this form, highlight missing fields in red, add comments for sections that need clarification, and create a summary of issues."

### Intelligent Form Processing
Populate forms automatically while respecting validation rules and maintaining data integrity.

**Example:** "Fill this application form with the customer data, validate email and phone fields, and flag any inconsistencies."

### Sensitive Data Protection
Identify and redact sensitive information automatically while maintaining document usability.

**Example:** "Find all phone numbers, social security numbers, and email addresses in this document and apply redaction to protect privacy."

### Multi-Step Document Workflows
Orchestrate complex operations in sequence based on user intent.

**Example:** "Extract pages 5-10, add review comments, highlight discrepancies, create a summary document, and prepare for download."

### Document Comparison & Reconciliation
Compare multiple PDFs and identify differences or missing content.

**Example:** "Compare original and modified versions of this agreement, highlight differences, and create an annotated summary of changes."

## Primary WebMCP Capabilities

The primary WebMCP capabilities focus on:

- **Document Navigation** — Access and navigate through document content
- **Content Extraction** — Extract text and pages programmatically
- **Annotation Management** — Add, edit, and manage annotations
- **Form Field Operations** — Work with PDF forms intelligently
- **Redaction** — Protect sensitive information
- **Document Actions** — Download, print, and transform documents

Using these capabilities, AI agents can:

- **Analyze and summarize** document content intelligently
- **Automate PDF form** workflows with validation
- **Protect sensitive information** through intelligent redaction
- **Manage document life cycle** with precision and control
- **Enhance collaboration** through annotations and comments

## Security & Control

Developers and users retain complete control over AI-driven operations through:

- **Review & Approval** — User confirmation dialogs for sensitive operations
- **Customization** — Custom handlers and event listeners for specific behaviors
- **Audit Logging** — Track all AI-driven operations for compliance
- **Undo/Redo Support** — Revert unwanted AI actions instantly
- **Schema Validation** — Ensure data integrity with JSON Schema validation

This ensures **secure, controlled, and efficient** interaction with PDF documents while maintaining data integrity and user control.

## Related Topics

- [PDF Viewer MCP Server](../mcp-server/pdfviewersdk)
- [Model Context Protocol](https://modelcontextprotocol.io/docs/2026-07-28/getting-started/intro)
- [PDF Viewer Documentation](../PDF/PDF-Viewer/overview)
