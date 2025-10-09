---
layout: post
title: Suppress the error dialog in the Blazor SfPdfViewer | Syncfusion
description: Learn how to suppress the built-in error dialog in the Syncfusion Blazor SfPdfViewer component using the EnableErrorDialog property.
platform: document-processing
control: SfPdfViewer
documentation: ug
---

# Suppress the error dialog in Blazor SfPdfViewer Component

The Syncfusion&reg; Blazor SfPdfViewer component supports suppressing the built-in error dialog using the [**EnableErrorDialog**](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerBase.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerBase_EnableErrorDialog) property. When EnableErrorDialog is set to false, the error dialog is not displayed. The default value is true. Applications can handle errors through custom logic when the dialog is disabled.

The following code example shows how to suppress the error dialog.

```cshtml
@using Syncfusion.Blazor.SfPdfViewer

<SfPdfViewer2 @ref="PdfViewer"
              DocumentPath="@DocumentPath"
              EnableErrorDialog="false"
              Height="100%"
              Width="100%">
</SfPdfViewer2>

@code{
    SfPdfViewer2 PdfViewer;
    private string DocumentPath { get; set; } = "PDF_Succinctly.pdf";
}
```
 
[View sample on GitHub](https://github.com/SyncfusionExamples/blazor-pdf-viewer-examples/tree/master/Common/Supress%20the%20Error%20Dialog)