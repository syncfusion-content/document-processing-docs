---
layout: post
title: Process large PDFs without upping message size | Syncfusion
description: Learn how to process large PDFs in the Blazor SfPdfViewer by enabling chunk messaging to avoid SignalR hub message size limits.
platform: document-processing
control: SfPdfViewer
documentation: ug
---

# Process large files without increasing maximum message size

The Blazor SfPdfViewer component supports processing large files without increasing the SignalR hub maximum receive message size (MaximumReceiveMessageSize, 32 KB) by using chunk messaging.

Enable this behavior by setting [EnableChunkMessages](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerBase.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerBase_EnableChunkMessages) to true. The default is false.

The following example shows how to enable chunk messaging:

```cshtml
@using Syncfusion.Blazor.SfPdfViewer

<SfPdfViewer2 @ref=" PdfViewer" EnableChunkMessages="true" DocumentPath="@DocumentPath" Height="100%" Width="100%">
</SfPdfViewer2>

@code {
    SfPdfViewer2 PdfViewer;
    public string DocumentPath { get; set; } = "wwwroot/data/PDF Succinctly.pdf";
}
```
With [EnableChunkMessages](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerBase.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerBase_EnableChunkMessages) set to true, the viewer segments large payloads into smaller chunks and processes them sequentially. This improves reliability when loading large PDFs under SignalR message size limits.

[View the chunk messaging sample on GitHub](https://github.com/SyncfusionExamples/blazor-pdf-viewer-examples/tree/master/Load%20and%20Save/Processing%20Large%20Files%20Without%20Increasing%20Maximum%20Message%20Size).
