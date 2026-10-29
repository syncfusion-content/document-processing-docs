---
layout: post
title: WebMCP Integration in Vue DOCX Editor | Syncfusion
description: WebMCP integration in Vue DOCX Editor explains setup, tool registration, configuration, and API reference with code examples.
platform: document-processing
control: WebMCP
documentation: ug
---

# WebMCP Integration in Vue DOCX Editor

## Integration

WebMCP integrates seamlessly into your [Vue DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/Vue-docx-editor) (Document Editor) application with minimal configuration.

### Prerequisites

Ensure the following before integrating WebMCP:

- Syncfusion DOCX Editor component is installed and configured [Getting Started](./getting-started)
- A Chromium-based browser with the WebMCP origin trial or chrome://flags/#enable-webmcp enabled. The API is experimental, so confirm it in the browser versions you support.

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

### Step 2: Import and Inject the Modules

Import and inject the needed modules into your DOCX Editor:

```ts
import { 
    DocumentEditorContainerComponent as EjsDocumenteditorcontainer, 
    Toolbar, 
    Ribbon 
} from '@syncfusion/ej2-vue-documenteditor';
...
provide('DocumentEditorContainer', [Toolbar, Ribbon]);
```

### Step 3: Enable WebMCP

Set the `enableWebMcp` property to `true` in your DocumentEditorContainer configuration:

```ts
    <ejs-documenteditorcontainer
      ref="container"
      :serviceUrl="serviceUrl"
      :height="height"
      :width="width"
      :enableToolbar="true"
      toolbarMode="Ribbon"
      :enableWebMcp="true">
    </ejs-documenteditorcontainer>
```

### Step 4: Register Tools

Set the `webMcpSettings` property to register the available tools in the control level:

```ts
<template> 
<div id="app"> 
<ejs-documenteditorcontainer
      ref="container"
      :serviceUrl="serviceUrl"
      :height="height"
      :width="width"
      :enableToolbar="true"
      toolbarMode="Ribbon"
      :enableWebMcp="true"
      :webMcpSettings="webMcpSettings">
    </ejs-documenteditorcontainer>
</div>
</template>
<script setup>
const webMcpSettings = { name: 'container' };
</script>
```

### Step 5: Test Your Setup

**Test with Your Local Setup**
- Run the application locally and open it in a Chromium-based browser.
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

## Tool Reference

WebMCP tools are organized by category. The tables below provide an overview of all available tools. For complete input/output schemas, call `getWebMcpTools()` programmatically.

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

### Basic Setup

Set up a DocumentEditorContainer with WebMCP enabled and register tools on creation.

```ts
<template>
  <div id="app">
    <ejs-documenteditorcontainer
      ref="container"
      :serviceUrl="serviceUrl"
      :height="height"
      :width="width"
      :enableToolbar="true"
      :enableWebMcp="true"
      toolbarMode="Ribbon"
      :webMcpSettings="webMcpSettings"
      :created="created">
    </ejs-documenteditorcontainer>
  </div>
</template>

<script setup>
import { provide, ref } from 'vue';
import {
  DocumentEditorContainerComponent as EjsDocumenteditorcontainer,
  Toolbar,
  Ribbon
} from '@syncfusion/ej2-vue-documenteditor';

const container = ref(null);
// Use the following service URL only for demo purposes
const serviceUrl = 'https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/';

const height = '100%';
const width = '100%';

const webMcpSettings = {
  name: 'container'
};

provide('DocumentEditorContainer', [Toolbar, Ribbon]);

const created = () => {
  const documentEditorContainer = container.value.ej2Instances;
  // Set document name
  documentEditorContainer.documentEditor.documentName = 'WebMCP Tool Demo';
  // Update document title
  document.title = 'WebMCP Tool Demo - DocumentEditorContainer';
};

</script>
<style>
@import "../node_modules/@syncfusion/ej2-tailwind3-theme/styles/document-editor/index.css";
@import "../node_modules/@syncfusion/ej2-tailwind3-theme/styles/document-editor-container/index.css";
</style>
```

N> [View Sample in GitHub](https://github.com/SyncfusionExamples/Vue-DOCX-Editor-Examples/tree/master/webmcp/getting-started).

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
2. Confirm `webMcpSettings: {{name:'docx-editor'}}` is added to register the available tools
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

---

### Q: "Permission denied" or "Secure context required"

**A:**
- WebMCP requires HTTPS in production or localhost for development
- If using cross-origin tools, both sites must be HTTPS
- Test locally using `localhost:3000` or similar

---

## See Also

* [Getting Started](getting-started)
* [Supported File Formats](supported-fileformats)
