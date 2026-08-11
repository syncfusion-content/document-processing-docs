---
layout: post
title: Section Format in ASP.NET Core DOCX Editor Component | Syncfusion
description: Learn how to configure page size, margins, header distance, footer distance, and section formatting in the Syncfusion ASP.NET Core Document Editor.
platform: document-processing
control: Section Format
documentation: ug
---


# Section Formatting in ASP.NET Core Document Editor

[ASP.NET Core DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/asp-net-core-docx-editor) (Document Editor) supports various section formatting such as page size, page margins, and more.

## Page size

You can get or set the size of a section at the cursor position by using the following sample code.

```typescript
documenteditor.selection.sectionFormat.pageWidth = 500;
documenteditor.selection.sectionFormat.pageHeight = 600;
```

You can change the orientation of the page by swapping the values of page width and height respectively.

## Page margins

The left and right page margins define the gap between the document content and the left and right sides of the page. The top and bottom page margins define the gap between the document content and the header and footer of the page.

```typescript
documenteditor.selection.sectionFormat.leftMargin = 10;
documenteditor.selection.sectionFormat.rightMargin = 10;
documenteditor.selection.sectionFormat.bottomMargin = 10;
documenteditor.selection.sectionFormat.topMargin = 10;
```

N> The maximum value of `Margin` is 1584, as per the Microsoft Word application, and you can set any value less than or equal to 1584 to this property. If you set any value greater than 1584, then the Syncfusion Document Editor will automatically reset it to 1584.

## Header distance

You can define the distance of header content from the top of the page by using the following sample code.

```typescript
documenteditor.selection.sectionFormat.headerDistance = 72;
```

## Footer distance

You can define the distance of footer content from the bottom of the page by using the following sample code.

```typescript
documenteditor.selection.sectionFormat.footerDistance = 72;
```

## Online demo

Explore how to apply section formatting in Word documents using the ASP.NET Core Document Editor in this [live demo](https://document.syncfusion.com/demos/docx-editor/asp-net-core/documenteditor/sectionformat#/tailwind3).

## See also

* [Page setup dialog](../asp-net-core/dialog#page-setup-dialog)
