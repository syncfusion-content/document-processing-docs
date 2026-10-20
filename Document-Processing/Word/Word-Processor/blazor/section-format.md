---
layout: post
title: Section Format in Blazor DOCX Editor | Syncfusion
description: The section format feature in Blazor DOCX Editor enables users to customize page layout, margins, orientation, and section-specific settings.
platform: document-processing
control: DOCX Editor
documentation: ug
---

# Section Format in Blazor DOCX Editor

[Blazor DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/blazor-docx-editor) (Document Editor) supports various section formatting such as page size, page margins, and more.

## Page size

You can get or set the size of a section at the cursor position by using the following sample code.

```csharp
await documentEditor.Selection.SectionFormat.SetPageWidthAsync(500);
await documentEditor.Selection.SectionFormat.SetPageHeightAsync(600);
```

You can change the orientation of the page by swapping the values of page width and height respectively.

## Page margins

The left and right page margins define the gap between the document content and the left and right sides of the page. The top and bottom page margins define the gap between the document content and the header and footer of the page.

Refer to the following sample code.

```csharp
await documentEditor.Selection.SectionFormat.SetLeftMarginAsync(10);
await documentEditor.Selection.SectionFormat.SetRightMarginAsync(10);
await documentEditor.Selection.SectionFormat.SetTopMarginAsync(10);
await documentEditor.Selection.SectionFormat.SetBottomMarginAsync(10);
```

N> The maximum value of `Margin` is 1584, as per the Microsoft Word application, and you can set any value less than or equal to 1584 to this property. If you set any value greater than 1584, then the Syncfusion DOCX Editor will automatically reset it to 1584.

## Header distance

You can define the distance of header content from the top of the page by using the following sample code.

```csharp
await documentEditor.Selection.SectionFormat.SetHeaderDistanceAsync(72);
```

## Footer distance

You can define the distance of footer content from the bottom of the page by using the following sample code.

```csharp
await documentEditor.Selection.SectionFormat.SetFooterDistanceAsync(72);
```

## Online demo

Explore how to apply section formatting in Word documents using the Blazor DOCX Editor in this [live demo](https://document.syncfusion.com/demos/docx-editor/blazor-server/document-editor/section-format?theme=fluent2).
