---
layout: post
title: Process large PDFs without upping message size | Syncfusion
description: Learn how to process large PDFs in the Blazor SfPdfViewer by enabling chunk messaging to avoid SignalR hub message size limits.
platform: document-processing
control: SfPdfViewer
documentation: ug
---

# Process large files without increasing maximum message size

The Blazor SfPdfViewer component can process large files under the default SignalR hub maximum receive message size (MaximumReceiveMessageSize, 32 KB) by using chunk messaging.

Enable this behavior by setting [EnableChunkMessages](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerBase.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerBase_EnableChunkMessages) to true (the default is false). When enabled, the viewer segments large payloads into smaller chunks and processes them sequentially, which improves reliability when loading large PDFs under SignalR message size limits.

## Enable chunk messaging

The following example shows how to enable chunk messaging:

```cshtml
@using Syncfusion.Blazor.SfPdfViewer

<SfPdfViewer2 @ref="PdfViewer" EnableChunkMessages="true" DocumentPath="@DocumentPath" Height="100%" Width="100%">
</SfPdfViewer2>

@code {
    private SfPdfViewer2 PdfViewer;
    private string DocumentPath { get; set; } = "wwwroot/data/PDF Succinctly.pdf";
}
```

[View the chunk messaging sample on GitHub](https://github.com/SyncfusionExamples/blazor-pdf-viewer-examples/tree/master/Load%20and%20Save/Processing%20Large%20Files%20Without%20Increasing%20Maximum%20Message%20Size).


## See also

* [How to load Microsoft Office files in Blazor SfPdfViewer Component](./how-to-load-office-files)
* [How to unload the PDF document from Viewer](./how-to-unload-the-pdf-document-from-viewer)
* [How to show or hide the Component dynamically](./how-to-show-or-hide-sfpdfviewer-dynamically)
