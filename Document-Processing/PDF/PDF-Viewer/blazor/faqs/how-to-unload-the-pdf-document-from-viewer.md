---
layout: post
title: Unload the PDF document from Viewer in Blazor SfPdfViewer | Syncfusion
description: Learn how to automatically and programmatically unload PDF documents and release resources in the Syncfusion Blazor SfPdfViewer component.
platform: document-processing
control: SfPdfViewer
documentation: ug
---

# Unload the PDF document from Viewer in Blazor SfPdfViewer Component

The SfPdfViewer component automatically unloads the current PDF and releases its resources when the component is disposed. When a different PDF is loaded, the resources used by the previously loaded file are also released.

To unload a PDF and release its resources programmatically, call the [UnloadAsync](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerBase.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerBase_UnloadAsync) method, as shown below.

```cshtml

@using Syncfusion.Blazor.Buttons
@using Syncfusion.Blazor.SfPdfViewer

<SfButton @onclick="OnClick">Unload Document</SfButton>

<SfPdfViewer2 @ref="@Viewer"
              Height="100%"
              Width="100%"
              DocumentPath="@DocumentPath" />

@code {
    SfPdfViewer2 Viewer;

    public async void OnClick(MouseEventArgs args)
    {
        await Viewer.UnloadAsync();
    }

    public string DocumentPath { get; set; } = "wwwroot/data/PDF_Succinctly.pdf";
}

```

[View sample in GitHub](https://github.com/SyncfusionExamples/blazor-pdf-viewer-examples/tree/master/Common/Unload%20Pdf%20document%20from%20Viewer)

## See also

* [How to show or hide the Component dynamically](./how-to-show-or-hide-sfpdfviewer-dynamically)

* [How to load PDF documents dynamically](./how-to-load-pdf-document-dynamically)