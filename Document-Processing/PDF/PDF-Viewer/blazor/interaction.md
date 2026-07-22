---
layout: post
title: Interaction mode in Blazor SfPdfViewer Component | Syncfusion
description: Learn how to use interaction modes in the Blazor SfPdfViewer component, including text selection, panning, and annotation locking.
platform: document-processing
control: SfPdfViewer
documentation: ug
---

# Interaction mode in Blazor SfPdfViewer Component

SfPdfViewer provides two user interaction options to control how the viewer responds to pointer input. By default, text selection is enabled and the interaction mode is `Selection`.

SfPdfViewer's built-in toolbar provides two interaction options:

* Selection mode
* Panning mode

## Selection mode

In this mode, users can select and copy text from the PDF document loaded in SfPdfViewer. This is useful for extracting and sharing textual content.

N> In Selection mode, page panning by touch/drag is disabled. Users can still scroll using the mouse wheel, scrollbars, or keyboard shortcuts.

You can enable or disable text selection by setting the [EnableTextSelection](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerBase.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerBase_EnableTextSelection) property.

The following example enables text selection in the SfPdfViewer.

```cshtml

@using Syncfusion.Blazor.SfPdfViewer

<SfPdfViewer2 DocumentPath="@DocumentPath"
              Height="100%"
              Width="100%"
              EnableTextSelection="true">
</SfPdfViewer2>

@code{
    private string DocumentPath { get; set; } = "wwwroot/Data/PDF_Succinctly.pdf";
}
```

## Panning mode

In this mode, users can pan and scroll pages in the loaded PDF document, but text selection is disabled.

The interaction mode of the SfPdfViewer component can be modified using the [InteractionMode](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerBase.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerBase_InteractionMode) property. Changes to this property take effect immediately.

The following example sets the SfPdfViewer to Panning mode.

```cshtml

@using Syncfusion.Blazor.SfPdfViewer

<SfPdfViewer2 DocumentPath="@DocumentPath"
              Height="100%"
              Width="100%"
              InteractionMode="InteractionMode.Pan">
</SfPdfViewer2>
@code{
    private string DocumentPath { get; set; } = "wwwroot/Data/PDF_Succinctly.pdf";
}

```
## Disabling annotation interaction

Annotation interactions, such as dragging, resizing, and deleting, can be disabled by setting the [IsLock](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerAnnotationSettings.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerAnnotationSettings_IsLock) property in the [AnnotationSettings](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerBase.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerBase_AnnotationSettings) configuration. When `IsLock` is set to `true`, existing annotations cannot be moved, resized, selected, or deleted, but new annotations can still be added.

The following code illustrates how to lock annotation interactions.

```cshtml

@using Syncfusion.Blazor.Buttons
@using Syncfusion.Blazor.SfPdfViewer

<SfButton OnClick="@LockAnnotations">Lock Annotation</SfButton>
<SfButton OnClick="@UnlockAnnotations">Unlock Annotation</SfButton>
<SfPdfViewer2 @ref="viewer"
              DocumentPath="@DocumentPath">
</SfPdfViewer2>

@code {
    private SfPdfViewer2 viewer;
    private string DocumentPath { get; set; } = "wwwroot/Data/PDF_Succinctly.pdf";

    private async Task LockAnnotations(MouseEventArgs args)
    {
        //Gets the annotation collection of the SfPdfViewer.
        var allAnnots = await viewer.GetAnnotationsAsync();

        foreach (var item in allAnnots)
        {
            //Disabling the interaction with annotation.
            item.AnnotationSettings.IsLock = true;
            await viewer.EditAnnotationAsync(item);
        }
    }

    private async Task UnlockAnnotations(MouseEventArgs args)
    {
        //Gets the annotation collection of the SfPdfViewer.
        var allAnnots = await viewer.GetAnnotationsAsync();

        foreach (var item in allAnnots)
        {
            //Enabling the interaction with annotation.
            item.AnnotationSettings.IsLock = false;
            await viewer.EditAnnotationAsync(item);
        }
    }
}

```

[View sample in GitHub](https://github.com/SyncfusionExamples/blazor-pdf-viewer-examples/tree/master/Annotations/FAQs/Lock_annotations)

## See also

* [Navigation in Blazor SfPdfViewer Component](./interactive-pdf-navigation-overview)
* [Magnification in Blazor SfPdfViewer Component](./magnification)
* [Events in Blazor SfPdfViewer Component](./events)