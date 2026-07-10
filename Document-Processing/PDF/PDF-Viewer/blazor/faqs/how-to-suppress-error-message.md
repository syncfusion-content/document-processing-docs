---
layout: post
title: Suppress the error dialog in the Blazor SfPdfViewer | Syncfusion
description: Learn how to suppress the built-in error dialog in the Blazor SfPdfViewer component using the EnableErrorDialog property.
platform: document-processing
control: SfPdfViewer
documentation: ug
---

# Suppress the error dialog in Blazor SfPdfViewer Component

The Blazor SfPdfViewer component supports suppressing the built-in error dialog using the [**EnableErrorDialog**](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerBase.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerBase_EnableErrorDialog) property. The default value is `true`; set it to `false` to hide the dialog and handle errors through custom logic.

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
    private SfPdfViewer2 PdfViewer;
    private string DocumentPath { get; set; } = "PDF_Succinctly.pdf";
}
```
 
[View sample in GitHub](https://github.com/SyncfusionExamples/blazor-pdf-viewer-examples/tree/master/Common/Supress%20the%20Error%20Dialog)


## See also

* [How to load Microsoft Office files in Blazor SfPdfViewer Component](./how-to-load-office-files)
* [How to unload the PDF document from Viewer](./how-to-unload-the-pdf-document-from-viewer)
* [How to show or hide the Component dynamically](./how-to-show-or-hide-sfpdfviewer-dynamically)
