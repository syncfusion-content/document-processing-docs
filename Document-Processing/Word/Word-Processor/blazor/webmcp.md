---
layout: post
title: WebMCP Integration in Blazor DOCX Editor | Syncfusion
description: WebMCP integration in Blazor DOCX Editor explains setup, tool registration, configuration, and API reference with code examples.
platform: document-processing
control: WebMCP
documentation: ug
---

# WebMCP Integration in Blazor DOCX Editor

## Integration

WebMCP integrates seamlessly into your [Blazor DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/blazor-docx-editor) (Document Editor) application with minimal configuration.

### Prerequisites

Ensure the following before integrating WebMCP:

- Syncfusion DOCX Editor component is installed and configured [Getting Started](./getting-started/web-app)
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

### Step 2: Import the Required Namespace

Add the following namespace to your Razor component:

```
@using Syncfusion.Blazor.DocumentEditor
```

### Step 3: Enable WebMCP

Set the `EnableWebMcp` property to `true` in your DocumentEditorContainer configuration:

```
<SfDocumentEditorContainer
    EnableToolbar="true"
    EnableWebMcp="true"
    Height="590px">
</SfDocumentEditorContainer>
```

### Step 4: Register Tools

Set the `DocumentEditorWebMcpSettings` property to register the available tools in the control level:

```
<SfDocumentEditorContainer
    EnableToolbar="true"
    EnableWebMcp="true"
    Height="590px">

    <DocumentEditorWebMcpSettings Name="container" />

</SfDocumentEditorContainer>
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


## Code Examples

### Basic Setup

Set up a DocumentEditorContainer with WebMCP enabled and register tools on creation.

```
@using Syncfusion.Blazor.DocumentEditor

<div style="height:100%; width:100%;">
    <SfDocumentEditorContainer
        @ref="container"
        EnableToolbar="true"
        EnableWebMcp="true"
        Height="100%">

        <DocumentEditorWebMcpSettings Name="container" />

    </SfDocumentEditorContainer>
</div>

@code {
    private SfDocumentEditorContainer? container;
}
```
N> [View Sample in GitHub](https://github.com/SyncfusionExamples/Blazor-DOCX-Editor-Examples/tree/master/WebMcp/getting-started).

## Troubleshooting FAQs

### What are the common causes of "WebMCP Not Available" or an "modelContext is Undefined" errors?

1. Verify WebMCP flag is enabled:
   - Open `chrome://flags/#enable-webmcp-testing`
   - Confirm it shows "Enabled"
   - Fully restart Chrome (not just reload the page)
2. Check your Chrome version is up-to-date (WebMCP requires recent Chromium)
3. Ensure you're testing on a secure context (HTTPS or localhost)

---

### Why aren't my registered tools displayed in the extension?

1. Verify `enableWebMcp: true` in your DocumentEditorContainer config
2. Confirm `<DocumentEditorWebMcpSettings Name="container" />` is bind to register the available tools
3. Open DevTools (F12) → Console, check for errors
4. Try refreshing the page and opening the extension again
5. Verify the tool prefix is correct (check console logs)

---

### Why don't registered tools execute?

1. Check your Gemini API key is valid:
   - Visit [Google AI Studio](https://aistudio.google.com/app/apikey)
   - Create a new key if needed
   - Re-enter it in the WebMCP extension
2. Verify the extension has permission to access the site:
   - Right-click WebMCP extension → Manage extension
   - Ensure "Allow on this site" is enabled
---

### Why do I get a "Permission denied" or "Secure context required" error?

1. WebMCP requires HTTPS in production or localhost for development
2. If using cross-origin tools, both sites must be HTTPS
3. Test locally using localhost URL.
---

## See Also

* [Getting Started](getting-started/web-app)
* [Supported File Formats](supported-fileformats)
