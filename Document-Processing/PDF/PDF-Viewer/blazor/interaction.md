---
layout: post
title: Interaction mode in Blazor SfPdfViewer Component | Syncfusion
description: Checkout and learn here all about interaction mode in Syncfusion Blazor SfPdfViewer component and more.
platform: document-processing
control: SfPdfViewer
documentation: ug
---

# Interaction mode in Blazor SfPdfViewer Component

SfPdfViewer provides two user interaction options to control how the document responds to pointer input. By default, text selection is enabled and the interaction mode is Selection.

The built-in toolbar of SfPdfViewer contains the following two interaction options:

* Selection mode
* Panning mode

## Selection mode

In this mode, users can select and copy text from the PDF document loaded in SfPdfViewer. This is useful for extracting and sharing textual content.

N> In Selection mode, page panning by touch/drag is disabled. Scrolling is still available through the mouse wheel scrollbars, or keyboard shortcuts.

You can enable or disable text selection by setting the [EnableTextSelection](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerBase.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerBase_EnableTextSelection) property.

```cshtml

@using Syncfusion.Blazor.SfPdfViewer

<SfPdfViewer2 DocumentPath="@DocumentPath"
              Height="100%"
              Width="100%"
              EnableTextSelection="true">
</SfPdfViewer2>

@code{
    public string DocumentPath { get; set; } = "wwwroot/Data/PDF_Succinctly.pdf";
}
```

## Panning mode

In this mode, users can pan and scroll pages in the loaded PDF document in the SfPdfViewer, but the text selection cannot be performed.

The interaction mode of the SfPdfViewer component can be modified using the [InteractionMode](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerBase.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerBase_InteractionMode) property. This property supports runtime updates, and any changes are applied immediately to the viewer.

```cshtml

@using Syncfusion.Blazor.SfPdfViewer

<SfPdfViewer2 DocumentPath="@DocumentPath"
              Height="100%"
              Width="100%"
              InteractionMode="InteractionMode.Pan">
</SfPdfViewer2>
@code{
    public string DocumentPath { get; set; } = "wwwroot/Data/PDF_Succinctly.pdf";
}

```
## Disable interaction with Annotations

Annotation interactions such as dragging, resizing, and deleting can be disabled by setting the `IsLock` property in the [AnnotationSettings](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerBase.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerBase_AnnotationSettings) configuration.

The following code illustrates how to disable the annotation interaction.

```cshtml

@using Syncfusion.Blazor.Buttons
@using Syncfusion.Blazor.SfPdfViewer

<SfButton OnClick="@OnClick">Lock Annotation</SfButton>
<SfPdfViewer2 @ref="viewer"
              DocumentPath="@DocumentPath">
</SfPdfViewer2>

@code {
    SfPdfViewer2 viewer;
    private string DocumentPath { get; set; } = "wwwroot/Data/PDF_Succinctly.pdf";

    public async void OnClick(MouseEventArgs args)
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
}

```

[View sample in GitHub](https://github.com/SyncfusionExamples/blazor-pdf-viewer-examples/tree/master/Annotations/FAQs/Lock_annotations)

## See also

* [Navigation in Blazor SfPdfViewer Component](./interactive-pdf-navigation)