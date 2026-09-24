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

## Why Use WebMCP for PDF Viewer?

Syncfusion PDF Viewer integration with WebMCP provides significant benefits for building AI-powered PDF applications:

### ✅ Key Benefits

- **Universal Tool Access** — AI agents, LLMs, and any MCP-compatible client can discover and invoke PDF operations
- **Zero Custom Integration** — Inject the WebMcpAdapter module, call `registerWebMcpTools()`, and all tool registration, schema binding, and life cycle management is automatic
- **Schema-Validated I/O** — Every tool includes JSON Schema for inputs and outputs, eliminating hallucination and enabling AI clients to validate data reliably
- **Controlled Execution** — Write operations (annotations, redaction, form fields) can trigger user confirmation dialogs when enabled. Applications can use events to audit, restrict, or cancel any operation
- **Multi-Instance Friendly** — Unique prefixes per PDF Viewer prevent tool-name collisions when multiple instances share a page
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
│  5. Confirmation & Execution                                    │
│     For Write Tools (Annotations, Forms, Redaction):            │
│     → Shows user confirmation dialog by default                 │
│     → Executes via PDF Viewer API                               │
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
Analyze PDF content, extract key information, identify important entities, and generate concise summaries.

**Example:** "Analyze the currently opened PDF document and provide a clear summary of its purpose, main topics, key findings, important dates, entities, and action items."

### Smart Text Search & Highlighting
Find text, keywords, dates, and values throughout a document and apply visual markup for easier review.

**Example:** "Search for all dates in the document and highlight them in yellow, then highlight every occurrence of 'Payment due:' in green."

### Automated Annotation & Review
Add highlights, comments, sticky notes, free text, underlines, strikeouts, and drawing annotations to support document review workflows.

**Example:** "Highlight the text 'please register' in yellow, add a review comment, and create a sticky note annotation for follow-up."

### Intelligent Form Creation & Processing
Create, populate, validate, and manage interactive PDF forms while maintaining data integrity and compliance.

**Example:** "Add a required customerName textbox, create a country dropdown with predefined values, populate the form with customer data."

### Sensitive Data Protection & Redaction
Identify confidential information and securely apply redactions to protect sensitive content before sharing documents.

**Example:** "Find all email addresses and payment amounts, create redaction markers, and permanently apply the redactions so the underlying content cannot be recovered."

### Multi-Step PDF Workflows
Execute multiple PDF operations in sequence through a single prompt, streamlining complex document processes.

**Example:** "Search for 'Invoice number:', highlight all matches in yellow, add review comments, create a summary of findings, and download the updated PDF."

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

This ensures **secure, controlled, and efficient** interaction with PDF documents while maintaining data integrity and user control.

## Related Topics

- [PDF Viewer MCP Server](../mcp-server/pdfviewersdk)
- [Model Context Protocol](https://modelcontextprotocol.io/docs/2026-07-28/getting-started/intro)
- [PDF Viewer Documentation](../PDF/PDF-Viewer/overview)
