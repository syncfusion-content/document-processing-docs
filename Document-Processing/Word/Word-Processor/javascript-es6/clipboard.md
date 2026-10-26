---
layout: post
title: Clipboard in TypeScript DOCX Editor | Syncfusion
description: The clipboard support in TypeScript DOCX Editor provides copy, cut, paste, and local paste operations for efficient content management.
platform: document-processing
control: Clipboard
documentation: ug
domainurl: ##DomainURL##
---

# Clipboard in TypeScript DOCX Editor

[TypeScript DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/javascript-docx-editor) (Document Editor) takes advantage of the system clipboard and allows you to copy or move a portion of the document into it in HTML format, so that it can be pasted in any application that supports the clipboard.

## Copy

Copy a portion of a document to the system clipboard using the built-in context menu of the DOCX Editor. You can also do it programmatically using the following sample code.

```ts
documentEditor.selection.copy();
```

## Cut

Cut a portion of a document to the system clipboard using the built-in context menu of the DOCX Editor. You can also do it programmatically using the following sample code.

```ts
documentEditor.editor.cut();
```

## Paste

Due to limitations, you can paste contents from the system clipboard in the DOCX Editor only using the 'Ctrl + V' keyboard shortcut.

N> Due to browser limitation of getting content from the system clipboard, paste using the API and context menu option doesn't work.

## Local paste (copy/paste within control)

The DOCX Editor exposes an API to enable local paste within the control. On enabling this, the following is performed:
* Selected contents will be stored to an internal clipboard in addition to the system clipboard.
* Clipboard paste will be overridden, and internally stored data (SFDT data) that has formatted text will be pasted using the paste() API in the DOCX Editor.

Refer to the following sample code.

```ts
//Initialize the Document Editor.
let editor: DocumentEditor = new DocumentEditor({ enableEditor: true, isReadOnly: false, enableSelection: true });
//Enable the local paste.
editor.enableLocalPaste = true;
```

By default, **enableLocalPaste** is false.

When local paste is enabled for a DOCX Editor instance, you can paste contents programmatically if the internal clipboard has stored data during the last copy operation. Refer to the following sample code.

```ts
documentEditor.editor.paste();
```

### Paste options in context menu

In the DOCX Editor, paste options in the context menu will be in a disabled state if you try to copy/paste content from outside the DOCX Editor. They are enabled when **enableLocalPaste** is true and you are trying to copy/paste content inside the DOCX Editor.

N> Due to browser limitation of getting content from the system clipboard, paste using the API and context menu option doesn't work. Hence, the paste option is disabled in the context menu.

Alternatively, you can use the keyboard shortcuts:

* Cut: Ctrl + X
* Copy: Ctrl + C
* Paste: Ctrl + V

### EnableLocalPaste behavior

|**EnableLocalPaste** |**Paste behavior details**|
|--------------------------|----------------------|
|True |Allows pasting of content that is copied from the same DOCX Editor component alone and prevents pasting content from the system clipboard. Hence, the content copied from outside the DOCX Editor component can't be pasted.<br>Browser limitation of pasting from the system clipboard using the API and context menu options will be resolved. So, you can copy and paste content within the DOCX Editor component using the API and context menu options too.|
|False|Allows pasting of content from the system clipboard. Hence, the content copied from both the DOCX Editor component and outside can be pasted.<br>Browser limitation of pasting from the system clipboard using the API and context menu options will remain a limitation.|

N> 1. The keyboard shortcut for pasting will work properly in both cases.
N> 2. Copying content from the DOCX Editor component and pasting outside will work properly in both cases.

## Paste with formatting

The DOCX Editor provides support to paste the system clipboard data with formatting. To enable clipboard paste with formatting options and copy/paste content from outside the DOCX Editor, set the `enableLocalPaste` property in the DOCX Editor to `false` and use this .NET Standard library [`Syncfusion.EJ2.WordEditor.AspNet.Core`](https://www.nuget.org/packages/Syncfusion.EJ2.WordEditor.AspNet.Core/) through the web API service implementation. This library helps you to paste the system clipboard data with formatting.

Refer to this [page](./web-services-overview) for more details.

You can paste your system clipboard data in the following ways:
* **Keep Source Formatting:** This option retains the character styles and direct formatting applied to the copied text. Direct formatting includes characteristics such as font size, italics, or other formatting that is not included in the paragraph style.
* **Match Destination Formatting:** This option discards most of the formatting applied directly to the copied text, but it retains the formatting applied for emphasis, such as bold and italic when it is applied to only a portion of the selection. The text takes on the style characteristics of the paragraph where it is pasted. The text also takes on any direct formatting or character style properties of text that immediately precedes the cursor when the text is pasted.
* **Text Only:** This option discards all formatting and non-text elements such as pictures or tables. The text takes on the style characteristics of the paragraph where it is pasted and takes on any direct formatting or character style properties of text that immediately precedes the cursor when the text is pasted. Graphical elements are discarded and tables are converted to a series of paragraphs.

These paste options appear as follows.

![Image](images/paste.PNG)

N> When you paste content from an external source into the DOCX Editor, some formatting or elements may not appear as expected because certain elements are not supported. Refer [here](./unsupported-features) to learn more about unsupported elements.

## See Also

* [Feature modules](./feature-module)
* [Keyboard shortcuts](./keyboard-shortcut#clipboard)
