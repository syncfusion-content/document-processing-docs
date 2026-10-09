---
layout: post
title: WebMCP Integration in JavaScript DOCX Editor | Syncfusion
description: WebMCP integration in JavaScript DOCX Editor explains setup, tool registration, configuration, and API reference with code examples.
platform: document-processing
control: WebMCP
documentation: ug
---

# WebMCP Integration in JavaScript DOCX Editor

## Integration

WebMCP integrates seamlessly into your JavaScript DOCX Editor (Document Editor) application with minimal configuration. This section covers the required setup, tool discovery, registration, and complete API reference.

### Prerequisites

Ensure the following before integrating WebMCP:

- Syncfusion DOCX Editor component is installed and configured [Getting Started](./getting-started)
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

### Step 2: Initialize Document Editor Container component with WebMCP Settings 

Set the `enableWebMcp` property to `true` in your DocumentEditorContainer configuration:

```javascript
var documenteditorcontainer = new ej.documenteditor.DocumentEditorContainer({ 
    height: '590px', 
    enableWebMcp: true, 
});
```

### Step 3: Register Tools

Set the `webMcpSettings` property to register the available tools in the control level:

```javascript
var documenteditorcontainer = new ej.documenteditor.DocumentEditorContainer({ 
    height: '590px', 
    enableWebMcp: true, 
    webMcpSettings: { name: 'container' }
});    
```

### Step 4: Test Your Setup

**Test with Your Local Setup**
- Run the application locally and open it in a Chromium-based browser such as Chrome, Edge, or Brave.
- Launch the WebMCP extension and confirm that it connects to your application successfully.
- Verify that the registered tools are displayed with your chosen prefix.
- Try a sample prompt that matches your data scenario to validate tool execution and response behavior.

**Sample Prompts**
Here are realistic natural language prompts you can test with the WebMCP extension:

{% promptcards %}
{% promptcard Document Information %}
Summarize the current document and report the total page count and word count
{% endpromptcard %}
{% endpromptcards %}

{% promptcards %}
{% promptcard Search and Replace %}
Find every occurrence of "Syncfusion" and replace it with "Syncfusion Inc."
{% endpromptcard %}
{% endpromptcards %}

## Tool Discovery and Registration

### Getting Available Tools

Use `getWebMcpTools()` to retrieve available tool schemas:

```javascript
// Get all tool schemas
const allTools = documenteditorcontainer.getWebMcpTools();

// Get specific tools only
const tools = documenteditorcontainer.getWebMcpTools(['insertBookmark', 'insertText', 'formatCharacter']);

console.log(allTools[0]); //or tools[0]
// Output:
// {
//   name: 'insertBookmark',
//   title: 'Insert a bookmark',
//   description: 'Creates a bookmark at the current cursor position for navigation.',
//   inputSchema: { type: 'object', properties: {...} },
//   outputSchema: { type: 'object', properties: {...} }
// }
```


**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `prefix` | `string` | ❌ | Unique prefix to avoid tool-name collisions (e.g., `'container'`, `'editor'`). Defaults to the DOCX Editor element's ID if omitted. |
| `toolNames` | `string[]` | ❌ | Array of permitted tool names (e.g., `['getDocumentInfo', 'insertText']`). When omitted, all available tools are registered. |
| `exposedTo` | `string[]` | ❌ | List of trusted origins for cross-origin access (e.g., `['https://trusted.example.com']`). Omit for same-origin only. |

### Usage Examples

**Register all tools:**
```javascript
webMcpSettings: {name:'container'}// Tools registered for allavailable tools as: container_getDocumentInfo, container_insertText, ...
```

**Register specific tools only:**
```javascript
webMcpSettings: {name:'container', tools['getDocumentInfo', 'insertText', 'formatCharacter']};
// Only these 3 tools are registered, reducing attack surface
```

**Multi-instance setup:**
```javascript
var container1 = new DocumentEditorContainer({ enableWebMcp: true, webMcpSettings: {name:'container1'}, ... });
var container2 = new DocumentEditorContainer({ enableWebMcp: true, webMcpSettings: {name:'container2'}, ... });

```

**Cross-origin access:**
```javascript
documenteditorcontainer.registerWebMcpTools('container', undefined, [
    'https://trusted.example.com',
    'https://analytics.example.com'
]);
// Tools are accessible from these origins (requires HTTPS)
```

### Understanding the `beforeWebMcpToolExecute` Event

Hook into tool execution for auditing, restrictions, or custom logic:

```javascript
var documenteditorcontainer = new DocumentEditorContainer({
    enableWebMcp: true,
    beforeWebMcpToolExecute: function (args) { 
        const { toolName, toolArgs } = args;

        console.log(`Tool ${toolName} invoked with:`, toolArgs);

        // Example: Cancel replace operations that target protected ranges
        if (toolName === 'replaceAll' && toolArgs && toolArgs.matchText === 'Confidential') {
            args.cancel = true;
        }
    }
});
```

### Auditing Write Operations

Use the `beforeWebMcpToolExecute` event to enable confirmation prompts for write operations. The example below mirrors the configuration used in the reference `index.js`:

```javascript
beforeWebMcpToolExecute: function (args) { 
    var writeOperations = [
        'saveDocument',
        'configureDocumentEditorSettings',
        'replaceAll',
        'insertText',
        'paste',
        'insertBookmark',
        'enforceProtection',
        'stopProtection',
        'insertField',
        'insertEditingRegion',
        'formatCharacter',
        'formatParagraph',
        'insertImage',
        'insertHyperlink'
    ];
    if (args.toolName) {
        const toolName = args.toolName.indexOf('_') != -1 ? args.toolName.substring(args.toolName.indexOf('_') + 1) : args.toolName;

        if (writeOperations.indexOf(toolName) !== -1) {
            args.showConfirmationDialog = true;
        }
    }
}
```

## Tool Reference

WebMCP tools are organized by category. The tables below provide an overview of all available tools. For complete input/output schemas, call `getWebMcpTools()` programmatically.

> **Note:** Write operations can trigger user confirmation dialogs when the `showConfirmationDialog` property is enabled in the `beforeWebMcpToolExecute` event. Applications can use this event to audit, restrict, or cancel any operation, whereas read operations execute immediately. In the tables below, the condition "Always" indicates that a tool is enabled by default, regardless of the component configuration.

## Document Information Tools

| Tool Name | Type | Condition | Description |
|-----------|------|-----------|-------------|
| getDocumentBookmarks | Read | Always | Returns all bookmark names available in the current document. |
| pageCount | Read | Always | Returns the total number of pages in the document. |
| getSelectionText | Read | Always | Retrieves the plain text content of the current selection. |
| getSelectionSfdt | Read | Always | Retrieves the selected content as formatted SFDT. |

---

## Search & Navigation Tools

| Tool Name | Type | Condition | Description |
|-----------|------|-----------|-------------|
| find | Read | Always | Finds the next occurrence of specified text in the document. |
| findAll | Read | Always | Finds all occurrences of specified text throughout the document. |
| selectBookmark | Write | Always | Navigates to and selects an existing bookmark. |
| goToPage | Write | Always | Navigates to a specified page in the document. |
| select | Write | Always | Selects content between specified document positions or coordinates. |
| selectAll | Write | Always | Selects all content in the document. |
| selectCurrentWord | Write | Always | Selects the word at the current cursor position. |
| selectParagraph | Write | Always | Selects the current paragraph. |

---

## Content Editing Tools

| Tool Name | Type | Condition | Description |
|-----------|------|-----------|-------------|
| insertText | Write | Always | Inserts plain text at the current cursor or selection position. |
| paste | Write | Always | Pastes formatted SFDT content while preserving document structure and formatting. |
| replaceAll | Write | Always | Replaces all occurrences of specified text with new content. |
| insertBookmark | Write | Always | Creates a bookmark at the current cursor position for navigation. |
| insertField | Write | Always | Inserts dynamic fields such as merge fields, or page numbers. |
| insertImage | Write | Always | Inserts an image with optional sizing and alternate text. |
| insertHyperlink | Write | Always | Inserts a hyperlink with optional display text and screen tip. |

---

## Formatting Tools

| Tool Name | Type | Condition | Description |
|-----------|------|-----------|-------------|
| formatCharacter | Write | Always | Applies character formatting such as font, size, color, bold, italic, and highlighting. |
| formatParagraph | Write | Always | Applies paragraph formatting such as alignment, indentation, and spacing. |

---

## Protection & Permissions Tools

| Tool Name | Type | Condition | Description |
|-----------|------|-----------|-------------|
| enforceProtection | Write | Always | Protects the document and restricts editing with a password. |
| stopProtection | Write | Always | Removes document protection and restores editing access. |
| insertEditingRegion | Write | Always | Creates an editable region for specific users in a protected document. |

---

## Document Management Tools

| Tool Name | Type | Condition | Description |
|-----------|------|-----------|-------------|
| saveDocument | Write | Always | Saves or exports the current document in DOCX, DOTX, TXT, or SFDT format. |
| configureDocumentEditorSettings | Write | Always | Configures editor appearance and behavior settings such as ruler, bookmarks, navigation pane, and fonts. |
| print | Write | Always | Opens the print dialog for the current document. |

---

## Code Examples

### Example 1: Basic Setup

Set up a DocumentEditorContainer with WebMCP enabled and register tools on creation.

```javascript
var documenteditorcontainer = new ej.documenteditor.DocumentEditorContainer({ 
    height: '590px', 
    enableWebMcp: true, 
    toolbarMode: 'Ribbon', 
    webMcpSettings: { name: 'container' }, 
    created: function () { 
        // Get the registered WebMCP tools. 
        var webMcpTools = documenteditorcontainer.getWebMcpTools();  

        // Set document name. 
        documenteditorcontainer.documentEditor.documentName = 'WebMCP Tool Demo';  

        // Update document title. 
        document.title = 'WebMCP Tool Demo - DocumentEditorContainer'; 
    }, 

    beforeWebMcpToolExecute: function (args) { 

        // For write operations, show confirmation dialog. 
        var writeOperations = [ 
        'replaceAll', 
        'insertText', 
        'paste', 
        'insertBookmark', 
        'enforceProtection', 
        'stopProtection', 
        'insertField', 
        'insertEditingRegion', 
        'formatCharacter', 
        'formatParagraph', 
        'insertImage', 
        'insertHyperlink' ];  

        if (args.toolName) { 
            var toolName = args.toolName.indexOf('_') !== -1 ? args.toolName.substring(args.toolName.indexOf('_') + 1) : args.toolName;  

            if (writeOperations.indexOf(toolName) !== -1) { 
                args.showConfirmationDialog = true; 
            } 
        } 
    } 
}); 

// Inject required modules. 
ej.documenteditor.DocumentEditorContainer.Inject(ej.documenteditor.Toolbar, ej.documenteditor.Ribbon); 

// Set service URL for document operations. 
documenteditorcontainer.serviceUrl = 'https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/'; 

// Render Document Editor Container component. 
documenteditorcontainer.appendTo('#DocumentEditor'); 
```

### Example 2: Selective Tool Registration

Register only read-only tools to reduce exposure.

```javascript
// Register only read tools (safer for public applications)
 webMcpSettings: {name:'container',tools:[
    'getDocumentInfo',
    'getDocumentText',
    'getSelectionInfo',
    'getBookmarks',
    'getSectionsInfo'
]}
```

### Example 3: Multi-Instance Setup

Shows how to use different prefixes for multiple DOCX Editor instances on the same page.

```javascript
// Two editors on the same page with different prefixes
var docEditor1 = new DocumentEditorContainer({
    enableWebMcp: true,
    webMcpSettings: {name:'container1'}
});

var docEditor2 = new DocumentEditorContainer({
    enableWebMcp: true,
    webMcpSettings: {name:'container2'}
});

// Tools are now:
// container1_getDocumentInfo, container1_insertText, ...
// container2_getDocumentInfo, container2_insertText, ...
```

### Example 4: Auditing and Restrictions

Demonstrates how to intercept tool execution and block restricted actions.

```javascript
beforeWebMcpToolExecute: function (args) { 
    var { toolName, toolArgs } = args;

    // Log all tool invocations
    console.log(`[WebMCP] Executing: ${toolName}`, toolArgs);

    // Block document protection changes for non-admin users
    if (toolName === 'enforceProtection' || toolName === 'stopProtection') {
        if (!userHasAdminPermission()) {
            args.cancel = true;
            logSecurityEvent('Unauthorized protection change attempt', toolArgs);
        }
    }
};
```

### Example 5: Error Handling

Shows how to call a tool manually and handle success or failure.

```javascript
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
1. Verify `enableWebMcp: true` in your DocumentEditorContainer config
2. Confirm `webMcpSettings: {name:'container'}` is added to register the available tools
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
1. Verify that write tools are registered and `args.showConfirmationDialog = true` is set in the `beforeWebMcpToolExecute` event
2. Check that your browser isn't blocking dialogs
3. Ensure the `beforeWebMcpToolExecute` event isn't canceling operations via `args.cancel = true`

---

### Q: "InvalidStateError" when registering tools

**A:**
- This occurs if tools are registered before the DOCX Editor initializes
- Set `webMcpSettings: {name:'container'}` property 
- Ensure `document.modelContext` is available

---

### Q: Multi-instance tools have naming conflicts

**A:**
- Always use different prefixes for each DocumentEditorContainer instance:
  ```javascript
  webMcpSettings: {name:'container1'} // for first DocumentEditorContainer instance
  webMcpSettings: {name:'container2'} // for second DocumentEditorContainer instance
  ```
- Never register the same with same name for multiple instances

---

### Q: How do I avoid performance issues with large documents?

**A:**
1. Use selective tool registration—register only necessary tools
2. Use `getDocumentInfo` to inspect document size before performing bulk operations
3. Prefer `replaceAll` over multiple single edits when changing repeated text
4. Avoid fetching the full text repeatedly; cache `getDocumentText` results when possible

---

### Q: Can I prevent certain operations?

**A:**
Yes, use the `beforeWebMcpToolExecute` event:

```javascript
beforeWebMcpToolExecute: function (args) { 
    var restrictedTools = ['enforceProtection', 'stopProtection', 'saveDocument'];
    if (restrictedTools.includes(args.toolName)) {
        args.cancel = true;
    }
};
```

## See Also

* [Getting Started](getting-started)
* [Supported File Formats](supported-fileformats)
