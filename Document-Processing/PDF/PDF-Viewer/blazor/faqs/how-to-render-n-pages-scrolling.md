---
layout: post
title: Render multiple pages while scrolling using OverscanCount | Syncfusion
description: Learn how to improve scrolling performance in the Blazor SfPdfViewer by preloading pages with the OverscanCount property.
platform: document-processing
control: SfPdfViewer
documentation: ug
---

# Render multiple pages while scrolling in Blazor SfPdfViewer

Use the [OverscanCount](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerBase.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerBase_OverscanCount) property to preload a specified number of pages before and after the current viewport, improving perceived performance while scrolling through a PDF document.
 
To use this capability in the Blazor SfPdfViewer, set OverscanCount to the desired number of adjacent pages to render. This reduces wait time when navigating across pages. Tune the value based on device capability and document size.

The following example shows how to set OverscanCount:

```cshtml

<SfPdfViewer2 DocumentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
              Height="100%"
              Width="100%" OverscanCount="10">
</SfPdfViewer2>
    
```
[View the OverscanCount sample on GitHub](https://github.com/SyncfusionExamples/blazor-pdf-viewer-examples/tree/master/Load%20and%20Save/Render%20N%20number%20pages%20on%20scrolling).
