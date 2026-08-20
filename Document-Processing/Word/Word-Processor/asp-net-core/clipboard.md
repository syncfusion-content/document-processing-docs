---
layout: post
title: Clipboard in ASP.NET Core DOCX editor | Syncfusion
description: The clipboard support in ASP.NET Core DOCX Editor provides copy, cut, paste, and local paste operations for efficient content management.
platform: document-processing
control: Clipboard
documentation: ug
---


# Clipboard in ASP.NET Core DOCX Editor

[ASP.NET Core DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/asp-net-core-docx-editor) (Document Editor) takes advantage of the system clipboard and allows you to copy or move a portion of the document into it in HTML format, so that it can be pasted in any application that supports clipboard.

## Copy

Copy a portion of the document to the system clipboard using the built-in context menu of the Document Editor. You can also do it programmatically using the following sample code.

```typescript
container.documentEditor.selection.copy();
```

## Cut

Cut a portion of the document to the system clipboard using the built-in context menu of the Document Editor. You can also do it programmatically using the following sample code.

```typescript
container.documentEditor.editor.cut();
```

## Paste

Due to limitations, you can paste content from the system clipboard as plain text in the Document Editor only using the "Ctrl + V" keyboard shortcut.

N> Due to browser limitations of getting content from the system clipboard, paste using the API and context menu options doesn't work.

## Local paste

The Document Editor exposes an API to enable local paste within the control. On enabling this, the following is performed:

* Selected contents will be stored to an internal clipboard in addition to the system clipboard.
* Clipboard paste will be overridden, and internally stored data that has formatted text will be pasted.

The following example shows how to enable local paste in the Document Editor.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-core/clipboard/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Document-editor.cs" %}
{% include code-snippet/document-editor/asp-net-core/clipboard/document-editor.cs %}
{% endhighlight %}
{% endtabs %}


By default, **enableLocalPaste** is false. When local paste is enabled for a Document Editor instance, you can paste content programmatically if the internal clipboard has stored data during the last copy operation.


```typescript
container.documentEditor.editor.pasteLocal();
```

### EnableLocalPaste behavior

|**EnableLocalPaste** |**Paste behavior details**|
|--------------------------|----------------------|
|True |Allows pasting content that is copied from the same Document Editor component alone and prevents pasting content from the system clipboard. Hence, content copied from outside the Document Editor component cannot be pasted.<br>The browser limitation of pasting from the system clipboard using API and context menu options will be resolved. So, you can copy and paste content within the Document Editor component using API and context menu options too.|
|False|Allows pasting content from the system clipboard. Hence, content copied from both the Document Editor component and outside can be pasted.<br>The browser limitation of pasting from the system clipboard using API and context menu options will remain.|

 
N> Keyboard shortcut for pasting will work properly in both cases. Copying content from Document editor component and pasting outside will work properly in both cases.

### Paste options in context menu

In the Document Editor, paste options in the context menu will be in a disabled state if you try to copy/paste content from outside of the Document Editor. It gets enabled when `enableLocalPaste` is `true` and you copy/paste content within the Document Editor.

N> Due to browser limitations of getting content from the system clipboard, paste using the API and context menu options doesn't work. Hence, the paste option is disabled in the context menu.

Alternatively, you can use the keyboard shortcuts:

* Cut: Ctrl + X
* Copy: Ctrl + C
* Paste: Ctrl + V

## Paste with formatting

The Document Editor provides support to paste the system clipboard data with formatting. To enable clipboard paste with formatting options, set the `enableLocalPaste` property in the Document Editor to `false` and use the `Syncfusion.EJ2.WordEditor.AspNet.Core` .NET Standard library for the ASP.NET Core web API service implementation. This library helps you to paste the system clipboard data with formatting.

You can paste your system clipboard data in the following ways:

* **Keep Source Formatting:** This option retains the character styles and direct formatting applied to the copied text. Direct formatting includes characteristics such as font size, italics, or other formatting that is not included in the paragraph style.
* **Match Destination Formatting:** This option discards most of the formatting applied directly to the copied text, but it retains the formatting applied for emphasis, such as bold and italic when it is applied to only a portion of the selection. The text takes on the style characteristics of the paragraph where it is pasted. The text also takes on any direct formatting or character style properties of text that immediately precedes the cursor when the text is pasted.
* **Text Only:** This option discards all formatting and non-text elements such as pictures or tables. The text takes on the style characteristics of the paragraph where it is pasted and takes on any direct formatting or character style properties of text that immediately precedes the cursor when the text is pasted. Graphical elements are discarded, and tables are converted to a series of paragraphs.

This paste option appears as follows.

![Paste options](images/paste.png)

N> When you paste content from an external source into the Document Editor, some formatting or elements may not appear as expected because certain elements are not supported. Refer [here](./unsupported-features) to learn more about unsupported elements.

## See Also

* [Feature modules](../asp-net-core/feature-module)
* [Keyboard shortcuts](../asp-net-core/keyboard-shortcut#clipboard)
