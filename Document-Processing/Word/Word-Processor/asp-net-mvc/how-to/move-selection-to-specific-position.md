---
layout: post
title: Move the selection to specific position in DOCX Editor | Syncfusion
description: Learn how to move the selection to a specific position in a document from the ASP.NET MVC Document Editor Component
platform: document-processing
control: Move The Selection To Specific Position
documentation: ug
---

# How to move the selection to a specific position in DOCX Editor

Using the [`select`](https://ej2.syncfusion.com/aspnetmvc/documentation/api/document-editor/selection#select) API in the selection module, you can set the cursor position to anywhere in the document.

## Selects content based on start and end hierarchical index

The hierarchical index will be in the below format.

`sectionIndex;blockIndex;offset`

The following code snippet illustrates how to select using the hierarchical index.

```typescript
// Selection will occur between the provided start and end offset
this.documentEdContainerIns.documentEditor.editor.insertText("Welcome");
// The below code will select the letters "We" from the inserted text "Welcome"
this.documentEdContainerIns.documentEditor.selection.select("0;0;0", "0;0;2");
```

The following table illustrates the hierarchical index in detail.

| Element |Hierarchical Format | Explanation |
|-----------------|-------------|----|
|Move selection to Paragraph |sectionIndex;blockIndex;offset <br>**Ex:** 0;0;0|It moves the cursor to the start of the paragraph.|
|Move selection to Table|sectionIndex;tableIndex;rowIndex;cellIndex;blockIndex;offset <br>**Ex:** 0;0;0;0;1;0|It moves the cursor to the second paragraph which is inside the first row and cell of the table.|
|Move selection to header|pageIndex;H;sectionIndex;blockIndex;offset<br>**Ex:** 1;H;0;0;0|It moves the cursor to the header on the second page.|
|Move selection to Footer|pageIndex;F;sectionIndex;blockIndex;offset<br>**Ex:** 1;F;0;0;0|It moves the cursor to the footer on the second page.|

## Get the selection start and end hierarchical index

Using [`startOffset`], you can get the start hierarchical index which denotes the start index of the current selection.
Similarly, using [`endOffset`], you can get the end hierarchical index which denotes the end index of the current selection.

The following code snippet illustrates how to get the selection start and end offset on selection changes in the document.


{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-mvc/document-editor-container/select/razor %}
{% endhighlight %}
{% highlight c# tabtitle="select.cs" %}
{% endhighlight %}
{% endtabs %}


## Selects the content based on left and top position

Here, you can specify the [`selection settings`] to select the content based on the left and top position.

`x` denotes the left position, `y` denotes the top position, and `extend` denotes whether to extend or update the selection.

Check the below code sample for reference.

```typescript
this.container.documentEditor.selection.select({ x: 188.4814208984375 , y: 662.00005, extend: true });
```