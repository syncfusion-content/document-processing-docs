---
layout: post
title: Section format in React DOCX Editor | Syncfusion
description: Learn here all about Section format in the Syncfusion React Document Editor of Syncfusion Essential JS 2 and more.
control: Section format 
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Section format in React Document Editor

[React Document Editor](https://www.syncfusion.com/docx-editor-sdk/react-docx-editor) (Document Editor) supports various section formatting such as page size, page margins, and more.

## Page size

You can get or set the size of a section at the cursor position by using the following sample code.

```ts
documenteditor.selection.sectionFormat.pageWidth = 500;
documenteditor.selection.sectionFormat.pageHeight = 600;
```

You can change the orientation of the page by swapping the values of page width and height respectively.

## Page margins

Left and right page margins define the gap between the document content from the left and right sides of the page respectively. Top and bottom page margins define the gap between the document content from the header and footer of the page respectively.

Refer to the following sample code.

```ts
documenteditor.selection.sectionFormat.leftMargin = 10;
documenteditor.selection.sectionFormat.rightMargin = 10;
documenteditor.selection.sectionFormat.bottomMargin = 10;
documenteditor.selection.sectionFormat.topMargin = 10;
```

N> The maximum value of margin is 1584, as per Microsoft Word application, and you can set any value less than or equal to 1584 to this property. If you set any value greater than 1584, then the Syncfusion Document Editor will automatically reset it to 1584.

## Header distance

You can define the distance of header content from the top of the page by using the following sample code.

```ts
documenteditor.selection.sectionFormat.headerDistance = 72;
```

## Footer distance

You can define the distance of footer content from the bottom of the page by using the following sample code.

```ts
documenteditor.selection.sectionFormat.footerDistance = 72;
```

## Columns

You can define the number of columns, column width, and space between columns for the pages in a section.

The following code example illustrates how to define a two-column layout for the pages in a section.

```typescript
var column = new SelectionColumnFormat(documenteditor.selection);
column.width = 216;
column.space = 36;
documenteditor.selection.sectionFormat.columns = [column, column];
documenteditor.selection.sectionFormat.lineBetweenColumns = true;
```

### Online Demo

Explore how to format Word documents with multiple columns using the React Document Editor in this live demo [here](https://document.syncfusion.com/demos/docx-editor/react/#/tailwind3/document-editor/multiple-columns).

## Breaks

You can insert a column break.

The following code indicates that the text following the column break will begin in the next column.

```typescript
documenteditor.editor.insertColumnBreak();
```

You can insert a next-page section break to start the new section on the next page.

The following code example illustrates how to insert a next-page section break.

```typescript
documenteditor.editor.insertSectionBreak(SectionBreakType.NewPage);
```

You can insert a continuous section break to start the new section on the same page.

The following code example illustrates how to insert a continuous section break.

```typescript
documenteditor.editor.insertSectionBreak(SectionBreakType.Continuous);
```

## Online Demo

Explore how to apply section formatting in Word documents using the React Document Editor in this live demo [here](https://document.syncfusion.com/demos/docx-editor/react/#/tailwind3/document-editor/section-formatting).


## See Also

* [Page setup dialog](./dialog#page-setup-dialog)
