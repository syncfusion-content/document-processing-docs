---
layout: post
title: Customize annotations in Blazor PDF Viewer | Syncfusion
description: Learn how to customize PDF annotations in Syncfusion Blazor SfPdfViewer using UI tools and programmatic settings (defaults and runtime edits).
platform: document-processing
control: SfPdfViewer
documentation: ug
---

# Customize annotations in Blazor

Annotation appearance and behavior (for example color, stroke color, thickness, and opacity) can be customized using the built‑in UI or programmatically. This page summarizes common customization patterns and shows how to set defaults per annotation type.

## Customize via UI

Use the annotation toolbar after selecting an annotation:
- Edit color: changes the annotation fill/text color
![Edit color](../images/blazor-pdfviewer-edit-fill-color.png)
- Edit stroke color: changes border or line color for shapes and lines types.
![Edit stroke color](../images/blazor-pdfviewer-edit-shape-stroke-color.png)
- Edit thickness: adjusts border or line thickness
![Edit thickness](../images/blazor-pdfviewer-shape-thickness.png)
- Edit opacity: adjusts transparency
![Edit opacity](../images/blazor-pdfviewer-shape-opacity.png)

N> Type‑specific options (for example, Line properties) are available from the context menu (right‑click > Properties) where supported.

## Set Default Properties During Initialization

Set defaults for specific annotation types when creating the `SfPdfViewer2` component. Configure properties such as author, subject, color, and opacity using annotation settings. The examples below reference settings used on the annotation type pages.

Text markup annotations:

- Highlight: Set default properties before creating the control using [HighlightSettings](./text-markup/highlight-annotation#set-default-properties-during-initialization)
- Strikethrough: Use [StrikethroughSettings](./text-markup/strikethrough-annotation#set-default-properties-during-initialization)
- Underline: Use [UnderlineSettings](./text-markup/underline-annotation#set-default-properties-during-initialization)
- Squiggly: Use [SquigglySettings](./text-markup/squiggly-annotation#set-default-properties-during-initialization)

Shape annotations:

- Line: Use [LineSettings](./shape/line-annotation#customize-line-appearance)
- Arrow: Use [ArrowSettings](./shape/arrow-annotation#customize-arrow-appearance)
- Rectangle: Use [RectangleSettings](./shape/rectangle-annotation#customize-rectangle-appearance)
- Circle: Use [CircleSettings](./shape/circle-annotation#customize-circle-appearance)
- Polygon: Use [PolygonSettings](./shape/polygon-annotation#customize-polygon-appearance)

Set defaults for specific annotation types when creating the `SfPdfViewer2` component. Below are examples using settings already used in the annotation type pages.

```cshtml
@using Syncfusion.Blazor.SfPdfViewer

<SfPdfViewer2 @ref="@viewer"
              DocumentPath="@DocumentPath"
              LineSettings="@LineSettings"
              ArrowSettings="@ArrowSettings"
              RectangleSettings="@RectangleSettings"
              CircleSettings="@CircleSettings"
              PolygonSettings="@PolygonSettings"
              Width="100%"
              Height="100%">
</SfPdfViewer2>

@code {
    SfPdfViewer2 viewer;
    private string DocumentPath { get; set; } = "wwwroot/Data/PDF_Succinctly.pdf";

    // Text markup defaults
    PdfViewerLineSettings LineSettings = new PdfViewerLineSettings
    {
        StrokeColor = "#0066ff",
        Thickness = 2,
        Opacity = 0.8
    };

    PdfViewerArrowSettings ArrowSettings = new PdfViewerArrowSettings
    {
        StrokeColor = "#0066ff",
        Thickness = 2,
        Opacity = 0.8
    };

    PdfViewerRectangleSettings RectangleSettings = new PdfViewerRectangleSettings
    {
        FillColor = "#ffffff00",
        StrokeColor = "#222222",
        Thickness = 1,
        Opacity = 1
    };

    PdfViewerCircleSettings CircleSettings = new PdfViewerCircleSettings
    {
        FillColor = "#ffffff00",
        StrokeColor = "#222222",
        Thickness = 1,
        Opacity = 1
    };

    PdfViewerPolygonSettings PolygonSettings = new PdfViewerPolygonSettings
    {
        FillColor = "#ffffff00",
        StrokeColor = "#222222",
        Thickness = 1,
        Opacity = 1
    };
}
```

N> After changing defaults using UI tools (for example, Edit color or Edit opacity), the updated values apply to subsequent annotations within the same session.

## Customize Programmatically at Runtime

To update an existing annotation from code, modify its properties and call [EditAnnotationAsync](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerBase.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerBase_EditAnnotationAsync_Syncfusion_Blazor_SfPdfViewer_PdfAnnotation_).

Example: bulk‑update matching annotations.

```cshtml
@using Syncfusion.Blazor.Buttons
@using Syncfusion.Blazor.SfPdfViewer

<SfButton OnClick="BulkUpdateAnnotations">Bulk Update Annotations</SfButton>
<SfPdfViewer2 @ref="@Viewer"
              DocumentPath="@DocumentPath"
              Height="100%"
              Width="100%">
</SfPdfViewer2>

@code {
    SfPdfViewer2 Viewer;
    public string DocumentPath { get; set; } = "wwwroot/Data/PDF_Succinctly.pdf";

    public async void BulkUpdateAnnotations(MouseEventArgs args)
    {
        // Get all annotations
        List<PdfAnnotation> annotationCollection = await Viewer.GetAnnotationsAsync();
        
        // Example criteria; customize as needed
        foreach (var ann in annotationCollection)
        {
            if (ann.Author == "Guest" || ann.Subject == "Rectangle")
            {
                ann.Color = "#ff0000";
                ann.Opacity = 0.8;
                // For shapes/lines you can also change StrokeColor/Thickness when applicable
                // ann.StrokeColor = "#222222";
                // ann.Thickness = 2;
                await Viewer.EditAnnotationAsync(ann);
            }
        }
    }
}
```

## Customize Annotation Settings

Defines the settings of the annotations. You can change annotation settings like author name, height, width etc., using the [AnnotationSettings](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerAnnotationSettings.html) property.

```cshtml
@using Syncfusion.Blazor.SfPdfViewer

<SfPdfViewer2 @ref="viewer"
              DocumentPath="@DocumentPath"
              Height="100%"
              Width="100%"
              AnnotationSettings="@AnnotationSettings">
</SfPdfViewer2>

@code {
    SfPdfViewer2 viewer;
    private string DocumentPath { get; set; } = "wwwroot/Data/PDF_Succinctly.pdf";

    PdfViewerAnnotationSettings AnnotationSettings = new PdfViewerAnnotationSettings
    {
        Author = "XYZ",
        MinHeight = 10,
        MinWidth = 10,
        MaxWidth = 100,
        MaxHeight = 100,
        IsLock = false,
        SkipPrint = false,
        SkipDownload = false
    };
}
```

## Customize Annotation SelectorSettings

Defines the settings of annotation selector. You can customize the annotation selector using the [AnnotationSelectorSettings](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerAnnotationSelectorSettings.html) property on individual annotation settings classes.

```cshtml
@using Syncfusion.Blazor.SfPdfViewer

<SfPdfViewer2 @ref="viewer"
              DocumentPath="@DocumentPath"
              Height="100%"
              Width="100%"
              RectangleSettings="@RectangleSettings">
</SfPdfViewer2>

@code {
    SfPdfViewer2 viewer;
    private string DocumentPath { get; set; } = "wwwroot/Data/PDF_Succinctly.pdf";

    PdfViewerRectangleSettings RectangleSettings = new PdfViewerRectangleSettings
    {
        AnnotationSelectorSettings = new PdfViewerAnnotationSelectorSettings
        {
            SelectionBorderColor = "blue",
            ResizerBorderColor = "red",
            ResizerFillColor = "#4070ff",
            ResizerSize = 8,
            SelectionBorderThickness = 1,
            ResizerShape = AnnotationResizerShape.Circle
        }
    };
}
```

[View Sample on GitHub](https://github.com/SyncfusionExamples/blazor-pdf-viewer-examples)

## See also

- [Annotation Overview](../overview)
- [Annotation Types](../annotation/annotation-types/area-annotation)
- [Annotation Toolbar](../toolbar-customization/annotation-toolbar)
- [Create and Modify Annotation](../annotation/create-modify-annotation)
- [Remove Annotation](../annotation/delete-annotation)
- [Handwritten Signature](../annotation/signature-annotation)
- [Export and Import Annotation](../annotation/export-import/export-annotation)
- [Annotation Permission](../annotation/annotation-permission)
- [Annotation in Mobile View](../annotation/annotations-in-mobile-view)
- [Annotation Events](../annotation/annotation-event)
- [Annotation API](../annotation/annotations-api)