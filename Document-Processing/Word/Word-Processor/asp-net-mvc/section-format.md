---
layout: post
title: Section Format in ASP.NET MVC DOCX Editor | Syncfusion
description: The section format feature in ASP.NET MVC DOCX Editor enables users to customize page layout, margins, orientation, and section-specific settings.
platform: document-processing
control: Section Format
documentation: ug
---


# Section Format in ASP.NET MVC DOCX Editor

The DOCX Editor supports various section formatting options, such as page size and page margins.

## Page size

You can get or set the size of a section at the cursor position by using the following sample code.

```typescript
documenteditor.selection.sectionFormat.pageWidth = 500;
documenteditor.selection.sectionFormat.pageHeight = 600;
```

You can change the page orientation by swapping the page width and height values.

## Page margins

The left and right page margins define the gap between the document content and the left and right sides of the page, respectively. The top and bottom page margins define the gap between the document content and the header and footer of the page, respectively.

```typescript
documenteditor.selection.sectionFormat.leftMargin = 10;
documenteditor.selection.sectionFormat.rightMargin = 10;
documenteditor.selection.sectionFormat.bottomMargin = 10;
documenteditor.selection.sectionFormat.topMargin = 10;
```

N> The maximum value of the margin is 1584, as per the Microsoft Word application, and you can set any value less than or equal to 1584 for this property. If you set a value greater than 1584, Syncfusion DOCX Editor automatically resets it to 1584.

## Header distance

You can define the distance of the header content from the top of the page by using the following sample code.

```typescript
documenteditor.selection.sectionFormat.headerDistance = 72;
```

## Footer distance

You can define the distance of the footer content from the bottom of the page by using the following sample code.

```typescript
documenteditor.selection.sectionFormat.footerDistance = 72;
```

## Online Demo

Explore how to apply section formatting in Word documents using the ASP.NET MVC DOCX Editor in this live demo [here](https://document.syncfusion.com/demos/docx-editor/asp-net-mvc/documenteditor/sectionformatting#/tailwind3).

## See Also

* [Page Setup Dialog](./dialog#page-setup-dialog)
