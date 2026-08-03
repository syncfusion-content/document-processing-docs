---
layout: post
title: Move selection to a specific position in DOCX Editor | Syncfusion
description: Learn how to move the selection to a specific position in a document using the Syncfusion DOCX Editor component.
platform: document-processing
control: Move The Selection To Specific Position
documentation: ug
---

# How to move the selection to a specific position in the DOCX Editor

Using the [`select`](https://ej2.syncfusion.com/javascript/documentation/api/document-editor/selection#select) API in the selection module, you can set the cursor position anywhere in the document.

N> Before using the `select` API, the DOCX Editor component must be initialized and a `DocumentEditorContainer` instance must be available. Refer to the [getting started](https://help.syncfusion.com/document-processing/word/word-processor/asp-net-core/getting-started-core) documentation for setup details. All hierarchical indices used by the `select` API are **zero-based**.

## Select content based on the start and end hierarchical index

The hierarchical index follows the format shown below.

`sectionIndex;blockIndex;offset`

The following table illustrates the hierarchical index format in detail.

| Element | Hierarchical Format | Explanation |
|---|---|---|
| Move selection to Paragraph | `sectionIndex;blockIndex;offset` <br>**Ex:** `0;0;0` | It moves the cursor to the start of the paragraph. |
| Move selection to Table | `sectionIndex;tableIndex;rowIndex;cellIndex;blockIndex;offset` <br>**Ex:** `0;0;0;0;1;0` | It moves the cursor to the second paragraph (zero-based block index `1`) which is inside the first row and cell of the table. |
| Move selection to Header | `pageIndex;H;sectionIndex;blockIndex;offset` <br>**Ex:** `1;H;0;0;0` | It moves the cursor to the header on the second page. |
| Move selection to Footer | `pageIndex;F;sectionIndex;blockIndex;offset` <br>**Ex:** `1;F;0;0;0` | It moves the cursor to the footer on the second page. |

The following code snippet illustrates how to select content using the hierarchical index.

```typescript
// Ensure the DocumentEditorContainer is loaded before calling the APIs below.
// Selection occurs between the provided start and end offsets.
this.documentEdContainerIns.documentEditor.editor.insertText("Welcome");
// The following code selects the letters "We" from the inserted text "Welcome".
this.documentEdContainerIns.documentEditor.selection.select("0;0;0", "0;0;2");
```

## Get the selection start and end hierarchical index

Using [`startOffset`](https://ej2.syncfusion.com/javascript/documentation/api/document-editor/selection#get-startoffset-string), you can get the start hierarchical index which denotes the start index of the current selection. Similarly, using [`endOffset`](https://ej2.syncfusion.com/javascript/documentation/api/document-editor/selection#get-endoffset-string), you can get the end hierarchical index which denotes the end index of the current selection.

The following code snippet illustrate how to get the selection start and end offset on selection changes in document.


{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-core/document-editor-container/select/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="select.cs" %}
{% endhighlight %}
{% endtabs %}


## Selects the content based on left and top position

Here, you can specify the [`selection settings`](https://ej2.syncfusion.com/javascript/documentation/api/document-editor/selectionSettings) to select the content based on the left and top positions.

The available parameters are listed below.

| Parameter | Description |
|---|---|
| `x` | The left position. The value is measured in **pixels** from the left edge of the editor area. |
| `y` | The top position. The value is measured in **pixels** from the top edge of the editor area. |
| `extend` | A boolean value that determines whether to extend or update the selection. When `true`, the current selection is extended from the existing start point to the specified position. When `false`, the selection is reset to the specified position. |

The following code sample shows how to select content based on the left and top position.

```typescript
this.documentEdContainerIns.documentEditor.selection.select({ x: 188.4814208984375 , y: 662.00005, extend: true });
```