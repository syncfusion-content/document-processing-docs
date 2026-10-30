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

## Tool Reference

WebMCP tools are organized by category. The tables below provide an overview of all available tools. For complete input/output schemas, call `getWebMcpTools()` programmatically.

## Document Information Tools

| Tool Name | Type | Condition | Description |
|-----------|------|-----------|-------------|
| getBookmarks | Read | Always | Retrieve all bookmarks in the document. |
| getPageCount | Read | Always | Get the total number of pages in the document. |
| getSelectedText | Read | Always | Get the currently selected text from the document. |
| getSelectedContent | Read | Always | Get the selected content as SFDT (Syncfusion Document Format) format. |

---

## Search & Navigation Tools

| Tool Name | Type | Condition | Description |
|-----------|------|-----------|-------------|
| findAll | Read | Always | Search all occurrences of text in the document. Returns array of match positions. Accepts `text`, with optional `matchCase` and `wholeWord` flags. |
| goToPage | Write | Always | Navigate to a specific page number in the document. Accepts `pageNumber`. |
| selectAll | Write | Always | Select all content in the document. |
| selectCurrentWord | Write | Always | Select the word at the current cursor position. |
| selectParagraph | Write | Always | Select the current paragraph. |
| selectBookmark | Write | Always | Navigate to and select a bookmark in the document. Accepts `bookmarkName`. |

---

## Content Editing Tools

| Tool Name | Type | Condition | Description |
|-----------|------|-----------|-------------|
| insertText | Write | Always | Insert text at the current selection position. Replaces selected text if any. Accepts `text`. |
| paste | Write | Always | Paste SFDT content at the current selection. Replaces selected content. Accepts `sfdt`. |
| insertBookmark | Write | Always | Insert a bookmark at the current selection or for the selected content. Accepts `bookmarkName`. |
| insertEditingRegion | Write | Always | Insert an editing region (merge field) with field code and result text. Accepts `fieldCode` and `fieldResult`. |
| insertHyperlink | Write | Always | Insert a hyperlink with URL and display text at the current selection. Accepts `url` and `displayText`. |
| insertImage | Write | Always | Insert an image from a base64-encoded string at the current selection. Accepts `base64String`. |

---

## Document Management Tools

| Tool Name | Type | Condition | Description |
|-----------|------|-----------|-------------|
| saveDocument | Write | Always | Save the document to a file with specified format (Docx, Pdf, Rtf, Txt, Html, WordML). Accepts `fileName` and optional `formatType`. |
| print | Write | Always | Print the current document. |

---

## Character Format Tools

| Tool Name | Type | Condition | Description |
|-----------|------|-----------|-------------|
| getCharacterFormatBaselineAlignment | Read | Always | Get the baseline alignment of the selected text. |
| getCharacterFormatBold | Read | Always | Get the bold status of the selected text. |
| getCharacterFormatFontColor | Read | Always | Get the font color of the selected text. |
| getCharacterFormatFontFamily | Read | Always | Get the font family of the selected text. |
| getCharacterFormatFontSize | Read | Always | Get the font size of the selected text. |
| getCharacterFormatHighlightColor | Read | Always | Get the highlight color of the selected text. |
| getCharacterFormatItalic | Read | Always | Get the italic status of the selected text. |
| getCharacterFormatStrikethrough | Read | Always | Get the strikethrough status of the selected text. |
| getCharacterFormatUnderline | Read | Always | Get the underline type of the selected text. |
| setCharacterFormatBaselineAlignment | Write | Always | Set the baseline alignment of the selected text (Normal, Superscript, Subscript). |
| setCharacterFormatBold | Write | Always | Set bold formatting on the selected text. |
| setCharacterFormatFontColor | Write | Always | Set the font color of the selected text (hex color code, e.g., #FF0000). |
| setCharacterFormatFontFamily | Write | Always | Set the font family of the selected text. |
| setCharacterFormatFontSize | Write | Always | Set the font size of the selected text (in points). |
| setCharacterFormatHighlightColor | Write | Always | Set the highlight color of the selected text. |
| setCharacterFormatItalic | Write | Always | Set italic formatting on the selected text. |
| setCharacterFormatStrikethrough | Write | Always | Set strikethrough formatting on the selected text (None, Single, Double). |
| setCharacterFormatUnderline | Write | Always | Set underline formatting on the selected text (None, Single, Double, Dotted, DashDotDotHeavy, etc.). |

---

## Paragraph Format Tools

| Tool Name | Type | Condition | Description |
|-----------|------|-----------|-------------|
| getParagraphFormatAfterSpacing | Read | Always | Get the spacing after the current paragraph (in points). |
| getParagraphFormatBeforeSpacing | Read | Always | Get the spacing before the current paragraph (in points). |
| getParagraphFormatBidi | Read | Always | Get the bidirectional text setting of the current paragraph. |
| getParagraphFormatContextualSpacing | Read | Always | Get the contextual spacing setting of the current paragraph. |
| getParagraphFormatFirstLineIndent | Read | Always | Get the first line indent of the current paragraph (in points). |
| getParagraphFormatLeftIndent | Read | Always | Get the left indent of the current paragraph (in points). |
| getParagraphFormatLineSpacing | Read | Always | Get the line spacing of the current paragraph. |
| getParagraphFormatLineSpacingType | Read | Always | Get the line spacing type of the current paragraph. |
| getParagraphFormatListLevelNumber | Read | Always | Get the list level number of the current paragraph. |
| getParagraphFormatListText | Read | Always | Get the list text of the current paragraph (read-only). |
| getParagraphFormatOutlineLevel | Read | Always | Get the outline level of the current paragraph. |
| getParagraphFormatRightIndent | Read | Always | Get the right indent of the current paragraph (in points). |
| getParagraphFormatTextAlignment | Read | Always | Get the text alignment of the current paragraph. |
| setParagraphFormatAfterSpacing | Write | Always | Set the spacing after the paragraph (in points). |
| setParagraphFormatBeforeSpacing | Write | Always | Set the spacing before the paragraph (in points). |
| setParagraphFormatBidi | Write | Always | Set the bidirectional text setting of the paragraph. |
| setParagraphFormatContextualSpacing | Write | Always | Set the contextual spacing of the paragraph. |
| setParagraphFormatFirstLineIndent | Write | Always | Set the first line indent of the paragraph (in points). |
| setParagraphFormatLeftIndent | Write | Always | Set the left indent of the paragraph (in points). |
| setParagraphFormatLineSpacing | Write | Always | Set the line spacing of the paragraph. |
| setParagraphFormatLineSpacingType | Write | Always | Set the line spacing type of the paragraph (Single, OnePointFiveLines, Double, AtLeast, Exactly, Multiple). |
| setParagraphFormatListLevelNumber | Write | Always | Set the list level number of the paragraph (0-8). Paragraph must already be in a list. |
| setParagraphFormatOutlineLevel | Write | Always | Set the outline level of the paragraph (BodyText, Level1-Level9). |
| setParagraphFormatRightIndent | Write | Always | Set the right indent of the paragraph (in points). |
| setParagraphFormatTextAlignment | Write | Always | Set the text alignment of the paragraph (Left, Center, Right, Justify). |

---

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
1. Verify EnableWebMcp="true" is set.
2. Confirm <DocumentEditorWebMcpSettings Name="container" /> is configured.
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
- Test locally using localhost URL.
---

## See Also

* [Getting Started](getting-started/web-app)
* [Supported File Formats](supported-fileformats)
