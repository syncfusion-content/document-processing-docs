---
layout: post
title: Create and modify annotations in Blazor PDF Viewer | Syncfusion
description: Learn how to create and modify annotations in Syncfusion Blazor PDF Viewer with UI and programmatic examples, plus quick links to all annotation types.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Create and modify annotations in Blazor PDF Viewer

The PDF Viewer annotation tools add, edit, and manage markups across documents. This page provides an overview with quick navigation to each annotation type and common creation and modification workflows.

## Quick navigation to annotation types

Jump directly to a specific annotation type for detailed usage and examples:

**Text Markup annotations:**
- Highlight: [Highlight annotation](./text-markup/highlight-annotation)
- Strikethrough: [Strikethrough annotation](./text-markup/strikethrough-annotation)
- Underline: [Underline annotation](./text-markup/underline-annotation)
- Squiggly: [Squiggly annotation](./text-markup/squiggly-annotation)

**Shape annotations:**
- Line: [Line annotation](./shape/line-annotation)
- Arrow: [Arrow annotation](./shape/arrow-annotation)
- Rectangle: [Rectangle annotation](./shape/rectangle-annotation)
- Circle: [Circle annotation](./shape/circle-annotation)
- Polygon: [Polygon annotation](./shape/polygon-annotation)

**Measurement annotations:**
- Distance: [Distance annotation](./measurement/distance-annotation)
- Perimeter: [Perimeter annotation](./measurement/perimeter-annotation)
- Area: [Area annotation](./measurement/area-annotation)
- Radius: [Radius annotation](./measurement/radius-annotation)
- Volume: [Volume annotation](./measurement/volume-annotation)

**Other annotations:**
- Redaction: [Redaction annotation](./redaction-annotation)
- Free Text: [Free text annotation](./free-text-annotation)
- Ink (Freehand): [Ink annotation](./ink-annotation)
- Stamp: [Stamp annotation](./stamp-annotation)
- Sticky Notes: [Sticky notes annotation](./sticky-notes-annotation)

N> Each annotation type page includes both UI steps and programmatic examples specific to that type.

## Create annotations

### Create via UI
- Open the annotation toolbar in the PDF Viewer.
- Choose the required tool (for example, Shape, Free text, Ink, Stamp, Redaction).
- Click or drag on the page to place the annotation.

![Annotation toolbar](../images/blazor-annotation-toolbar.png)

**Note:**
- When pan mode is active and a shape or stamp tool is selected, the viewer switches to text select mode automatically.
- Property pickers in the annotation toolbar let users choose color, stroke color, thickness, and opacity while drawing

### Create programmatically

Creation patterns vary by type. Refer to the individual annotation pages for tailored code.

Example: creating a Rectangle annotation using [`AddAnnotationAsync`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerBase.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerBase_AddAnnotationAsync_Syncfusion_Blazor_SfPdfViewer_PdfAnnotation_).

```cshtml
@using Syncfusion.Blazor.Buttons
@using Syncfusion.Blazor.SfPdfViewer

<SfButton OnClick="@AddShapeAnnotationAsync">Add Shape Annotation</SfButton>
<SfPdfViewer2 Width="100%" Height="100%" DocumentPath="@DocumentPath" @ref="@Viewer" />

@code {
    SfPdfViewer2 Viewer;
    public string DocumentPath { get; set; } = "wwwroot/Data/Shape_Annotation.pdf";

    public async void AddShapeAnnotationAsync(MouseEventArgs args)
    {
        PdfAnnotation annotation = new PdfAnnotation();
        // Set the Shape annotation type like Rectangle, Line, Arrow, Circle, Polygon.
        annotation.Type = AnnotationType.Rectangle;
        // Page numbers start from 0. So, if set to 0 it represents page 1.
        annotation.PageNumber = 0;

        // Bound of the rectangle annotation
        annotation.Bound = new Bound();
        annotation.Bound.X = 200;
        annotation.Bound.Y = 150;
        annotation.Bound.Width = 300;
        annotation.Bound.Height = 100;
        // Add rectangle annotation
        await Viewer.AddAnnotationAsync(annotation);
    }
}
```

Refer to the individual annotation pages for enabling draw modes from UI buttons and other type-specific creation samples.

## Modify annotations

### Modify via UI

Use the annotation toolbar after selecting an annotation:
- Edit color: change the fill or text color (when applicable)

![Edit color](../images/blazor-pdfviewer-edit-fill-color.png)

- Edit stroke color: change the border or line color (shape and line types)

![Edit stroke color](../images/blazor-pdfviewer-edit-shape-stroke-color.png)

- Edit thickness: adjust the border or line thickness

![Edit thickness](../images/blazor-pdfviewer-shape-thickness.png)

- Edit opacity: change transparency

![Edit opacity](../images/blazor-pdfviewer-shape-opacity.png)

Additional options such as Line Properties (for line/arrow) are available from the context menu (right-click > Properties) where supported.

### Modify programmatically

Use `EditAnnotationAsync` to apply changes to an existing annotation. Common flow:
- Locate the target annotation from `GetAnnotationsAsync()`.
- Update the desired properties.
- Call `EditAnnotationAsync` with the modified object.

```cshtml
@using Syncfusion.Blazor.Buttons
@using Syncfusion.Blazor.SfPdfViewer

<SfButton OnClick="@EditShapeAnnotationAsync">Edit Shape Annotation</SfButton>
<SfPdfViewer2 Width="100%" Height="100%" DocumentPath="@DocumentPath" @ref="@Viewer" />

@code {
    SfPdfViewer2 Viewer;
    public string DocumentPath { get; set; } = "wwwroot/Data/Shape_Annotation.pdf";

    public async void EditShapeAnnotationAsync(MouseEventArgs args)
    {
        // Get annotation collection
        List<PdfAnnotation> annotationCollection = await Viewer.GetAnnotationsAsync();
        // Select the annotation want to edit
        PdfAnnotation annotation = annotationCollection[0];
        // Change the fill color of rectangle annotation
        annotation.FillColor = "#FFFF00";
        // Change the stroke color of rectangle annotation
        annotation.StrokeColor = "#0000FF";
        // Change the thickness of rectangle annotation
        annotation.Thickness = 3;
        // Change the Opacity (0 to 1) of rectangle annotation
        annotation.Opacity = 0.5;
        // Edit the rectangle shape annotation
        await Viewer.EditAnnotationAsync(annotation);
    }
}
```

N> For type-specific creation and edit examples (for example, editing line endings, moving stamps, or updating sticky note bounds), see the corresponding annotation type page linked above.

## See also

- [Annotation Overview](./overview)
- [Text Markup Annotation](./text-markup/highlight-annotation)
- [Shape Annotation](./shape/line-annotation)
- [Measurement Annotation](./measurement/distance-annotation)
- [Free Text Annotation](./free-text-annotation)
- [Ink Annotation](./ink-annotation)
- [Stamp Annotation](./stamp-annotation)
- [Comments](./comments)
- [Redaction](./redaction-annotation)
- [Annotation Permission](./annotation-permission)
- [Undo and Redo](./annotations-undo-redo)
- [Delete Annotation](./delete-annotation)
- [Export and Import Annotation](./export-annotation)
