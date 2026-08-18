---
layout: post
title: Section format in JavaScript (ES5) Document editor | Syncfusion
description: Learn here all about Section format in Syncfusion JavaScript (ES5) Document editor control of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Section format 
documentation: ug
domainurl: ##DomainURL##
---

# Section format in JavaScript (ES5) Document editor control

[JavaScript DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/javascript-docx-editor) (Document Editor) supports various section-format options such as page size, page margins, and more.

## Page size

You can get or set the size of a section at the cursor position by using the following sample code.

```js
documenteditor.selection.sectionFormat.pageWidth = 500;
documenteditor.selection.sectionFormat.pageHeight = 600;
```

You can change the orientation of the page by swapping the values of page width and height.

## Page margins

The left and right page margins define the gap between the document content and the left and right sides of the page, respectively. The top and bottom page margins define the gap between the document content and the header and footer of the page, respectively.

Refer to the following sample code.

```js
documenteditor.selection.sectionFormat.leftMargin = 10;
documenteditor.selection.sectionFormat.rightMargin = 10;
documenteditor.selection.sectionFormat.bottomMargin = 10;
documenteditor.selection.sectionFormat.topMargin = 10;
```

N> The maximum value of a margin is 1584, per the Microsoft Word application, and you can set any value up to 1584 for this property. If you set any value greater than 1584, the Syncfusion Document Editor will automatically reset it to 1584.

## Header distance

You can define the distance of the header content from the top of the page by using the following sample code.

```js
documenteditor.selection.sectionFormat.headerDistance = 72;
```

## Footer distance

You can define the distance of the footer content from the bottom of the page by using the following sample code.

```js
documenteditor.selection.sectionFormat.footerDistance = 72;
```

## Columns

You can define the number of columns, column width, and space between columns for the pages in a section.

The following code example illustrates how to define a two-column layout for a section.

```js
var column = new ej.documenteditor.SelectionColumnFormat(documenteditor.selection);
column.width = 216;
column.space = 36;
documenteditor.selection.sectionFormat.columns = [column, column];
documenteditor.selection.sectionFormat.lineBetweenColumns = true;
```

### Online demo

Explore how to format Word documents with multiple columns using the JavaScript (ES5) Document Editor in this live demo [here](https://document.syncfusion.com/demos/docx-editor/javascript-es5/#/material3/document-editor/multiple-columns.html).

## Breaks

You can insert a column break. The following code example illustrates how to insert a column break.

```js
container.documentEditor.editor.insertColumnBreak();
```

You can insert a next-page section break to start the new section on the next page.

The following code example illustrates how to insert a next-page section break.

```js
container.documentEditor.editor.insertSectionBreak(SectionBreakType.NewPage);
```

You can insert a continuous section break to start the new section on the same page.

The following code example illustrates how to insert a continuous section break.

```js
container.documentEditor.editor.insertSectionBreak(SectionBreakType.Continuous);
```

## Online demo

Explore how to apply section formatting in Word documents using the JavaScript (ES5) Document Editor in this live demo [here](https://document.syncfusion.com/demos/docx-editor/javascript-es5/#/material3/document-editor/section-formatting.html).

## See also

* [Page setup dialog](./dialog#page-setup-dialog)
* [Column dialog](./dialog#column-dialog)
