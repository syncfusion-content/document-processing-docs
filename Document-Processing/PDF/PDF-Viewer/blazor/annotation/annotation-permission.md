---
layout: post
title: Annotation Permissions in Blazor SfPdfViewer Component | Syncfusion
description: Learn how to use annotation permissions in the Syncfusion Blazor SfPdfViewer to control annotation behavior and access.
platform: document-processing
control: SfPdfViewer
documentation: ug
---

# Annotation permissions in Blazor SfPdfViewer

Use [PdfViewerAnnotationSettings](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerAnnotationSettings.html) to control permissions and default behavior for all annotations in the Blazor SfPdfViewer. Additionally, configure permissions for individual annotation types using their respective settings classes. These settings establish defaults for annotations created through the UI and programmatic flows.

## Common permissions

Common permission properties that apply to all annotation types:

- `IsLock`: Lock annotations so they cannot be moved, resized, edited, or deleted.
- `IsPrint`: Control whether annotations participate in printing.
- `SkipDownload`: Skip annotations from the exported/downloaded PDF.

Example: Set common permissions using `PdfViewerAnnotationSettings` for all annotations in the SfPdfViewer.

```cshtml
@using Syncfusion.Blazor.SfPdfViewer

<SfPdfViewer2 DocumentPath="@DocumentPath"
              Width="100%"
              Height="100%">
    <PdfViewerAnnotationSettings IsLock="false" 
                                  IsPrint="true" 
                                  SkipDownload="false">
    </PdfViewerAnnotationSettings>
</SfPdfViewer2>

@code {
    private string DocumentPath { get; set; } = "wwwroot/Data/PDF_Succinctly.pdf";
}
```

### Example: Lock all annotations by default

```cshtml
@using Syncfusion.Blazor.SfPdfViewer

<SfPdfViewer2 DocumentPath="@DocumentPath"
              Width="100%"
              Height="100%">
    <PdfViewerAnnotationSettings IsLock="true" 
                                  IsPrint="true" 
                                  SkipDownload="true">
    </PdfViewerAnnotationSettings>
</SfPdfViewer2>

@code {
    private string DocumentPath { get; set; } = "wwwroot/Data/PDF_Succinctly.pdf";
}
```

## Individual annotation permissions

Set type-specific permissions to override common settings for particular annotation types:

- `IsLock`: Lock or unlock a specific annotation type.
- `IsPrint`: Control printing behavior for a specific annotation type.
- `SkipDownload`: Skip a specific annotation type from download behavior.

Example: Set individual permissions for different annotation types while maintaining common appearance settings.

```cshtml
@using Syncfusion.Blazor.SfPdfViewer

<SfPdfViewer2 DocumentPath="@DocumentPath"
              Width="100%"
              Height="100%">
    <!-- Common permissions for all annotations -->
    <PdfViewerAnnotationSettings IsLock="false" 
                                  IsPrint="true" 
                                  SkipDownload="false">
    </PdfViewerAnnotationSettings>

    <!-- Text Markup Settings with individual permissions -->
    <PdfViewerHighlightSettings Author="QA" 
                                 Color="#ffff00" 
                                 Opacity="0.6"
                                 IsLock="false"
                                 IsPrint="true"
                                 SkipDownload="false">
    </PdfViewerHighlightSettings>

    <PdfViewerStrikethroughSettings Author="QA"
                                     Color="#ff0000"
                                     Opacity="0.6"
                                     IsLock="true"
                                     IsPrint="false"
                                     SkipDownload="true">
    </PdfViewerStrikethroughSettings>

    <!-- Shape Settings with individual permissions -->
    <PdfViewerLineSettings StrokeColor="#0066ff"
                           Thickness="2"
                           Opacity="0.8"
                           IsLock="false"
                           IsPrint="true"
                           SkipDownload="false">
    </PdfViewerLineSettings>

    <PdfViewerCircleSettings FillColor="transparent"
                             StrokeColor="#222222"
                             Thickness="1"
                             Opacity="1"
                             IsLock="false"
                             IsPrint="true"
                             SkipDownload="false">
    </PdfViewerCircleSettings>

    <PdfViewerRectangleSettings FillColor="transparent"
                                StrokeColor="#222222"
                                Thickness="1"
                                Opacity="1"
                                IsLock="false"
                                IsPrint="true"
                                SkipDownload="false">
    </PdfViewerRectangleSettings>

    <!-- Measurement Settings with individual permissions -->
    <PdfViewerDistanceSettings StrokeColor="#0066ff"
                               Thickness="2"
                               Opacity="0.8"
                               IsLock="false"
                               IsPrint="true"
                               SkipDownload="false">
    </PdfViewerDistanceSettings>

    <!-- Other Annotation Settings with individual permissions -->
    <PdfViewerFreeTextSettings BorderColor="#222222"
                               Opacity="1"
                               IsLock="false"
                               IsPrint="true"
                               SkipDownload="false">
    </PdfViewerFreeTextSettings>

    <PdfViewerStampSettings Opacity="0.9"
                            IsLock="false"
                            IsPrint="true"
                            SkipDownload="false">
    </PdfViewerStampSettings>
</SfPdfViewer2>

@code {
    private string DocumentPath { get; set; } = "wwwroot/Data/PDF_Succinctly.pdf";
}
```

## Behavior notes

- `IsLock` = true: The annotation is locked; users cannot move, resize, or edit it through the UI until it is unlocked.
- `IsPrint` = true: Annotations participate in print output initiated from the viewer.
- `SkipDownload` = true: Annotations are excluded from the exported/downloaded PDF from the viewer.
- `IsLock` on individual annotation: Use this when you want to lock a specific annotation type while leaving others editable.

## See also

* [Annotation Overview](overview.md)
* [Create and Modify Annotations](create-modify-annotation.md)
* [Text Markup Annotations](text-markup/highlight-annotation.md)
* [Shape Annotations](shape/line-annotation.md)
* [Measurement Annotations](measurement/distance-annotation.md)
* [Annotation Undo/Redo](annotations-undo-redo.md)