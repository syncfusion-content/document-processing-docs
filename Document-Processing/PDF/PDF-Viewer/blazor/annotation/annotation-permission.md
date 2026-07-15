---
layout: post
title: Annotation Permissions in Blazor SfPdfViewer Component | Syncfusion
description: Learn how to use annotation permissions in the Blazor SfPdfViewer to control annotation behavior and access.
platform: document-processing
control: SfPdfViewer
documentation: ug
---

# Annotation permissions in Blazor SfPdfViewer Component

Use [PdfViewerAnnotationSettings](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerAnnotationSettings.html) to configure default permission flags for all annotations in the Blazor SfPdfViewer. Additionally, configure permissions for individual annotation types using their respective settings classes. These settings establish defaults for annotations created through the UI and programmatic flows.

## Common permissions

Common permission properties that apply to all annotation types. These flags are the defaults applied when an annotation is created:

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

Example: Lock all annotations by default

Toggling any flag to `true` (e.g., `IsLock="true"`, `SkipDownload="true"`) locks all annotations or excludes them from the downloaded PDF across the document.

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

Set type-specific permissions to override common settings for particular annotation types. **Type-specific values take precedence over the common `PdfViewerAnnotationSettings` values** for that annotation type.

Each annotation type exposes the same three permission flags:

- `IsLock`: Lock or unlock a specific annotation type.
- `IsPrint`: Control printing behavior for a specific annotation type.
- `SkipDownload`: Exclude a specific annotation type from the downloaded PDF.

### Text markup permissions

```cshtml
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
```

### Shape permissions

```cshtml
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
```

### Measurement permissions

```cshtml
<PdfViewerDistanceSettings StrokeColor="#0066ff"
                           Thickness="2"
                           Opacity="0.8"
                           IsLock="false"
                           IsPrint="true"
                           SkipDownload="false">
</PdfViewerDistanceSettings>
```

### Other annotation permissions

```cshtml
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
```

### Combined example

The following complete example sets individual permissions for different annotation types while maintaining common appearance settings.

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

## Property behavior

- `IsLock` = true: The annotation is locked; users cannot move, resize, edit, or delete it through the UI until it is unlocked.
- `IsPrint` = true: Annotations participate in print output initiated from the viewer.
- `SkipDownload` = true: Annotations are excluded from the exported/downloaded PDF from the viewer.

## Programmatic API

The permission flags are applied at annotation creation. To toggle permissions for an existing annotation at runtime, use the [annotation API methods](create-modify-annotation) (for example, `SelectAnnotationAsync` followed by a property update) or modify the underlying annotation object before saving/exporting.


## See also

* [Annotation Overview](overview)
* [Create and Modify Annotations](create-modify-annotation)
* [Text Markup Annotations](text-markup/highlight-annotation)
* [Shape Annotations](shape/line-annotation)
* [Measurement Annotations](measurement/distance-annotation)
* [Annotation Undo/Redo](annotations-undo-redo)