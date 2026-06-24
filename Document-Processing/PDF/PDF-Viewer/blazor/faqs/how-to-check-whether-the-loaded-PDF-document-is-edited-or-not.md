---
layout: post
title: Check document editing status in Blazor PDF Viewer | Syncfusion
description: Learn how to check whether a loaded PDF is edited using the IsDocumentEdited property in the Syncfusion Blazor SfPdfViewer component.
platform: document-processing
control: SfPdfViewer
documentation: ug
---

# Check document editing status in Blazor SfPdfViewer Component

Use the [IsDocumentEdited](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerBase.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerBase_IsDocumentEdited) property to determine whether the loaded PDF has unsaved changes. A document is considered edited when users modify annotations, fill form fields, add or update signatures, apply redactions, or perform other in-viewer changes. The property returns `true` when the document has unsaved edits.

The following example shows how to check the document's edited status and log it.

```cshtml
@using Syncfusion.Blazor.SfPdfViewer
@using Syncfusion.Blazor.Buttons

<SfButton @onclick="OnClick">Check</SfButton>
<SfPdfViewer2 @ref="Viewer"
              DocumentPath="@DocumentPath"
              Height="100%"
              Width="100%">
</SfPdfViewer2>

@code{
    public SfPdfViewer2 Viewer { get; set; }
    private string DocumentPath { get; set; } = "Data/PDF_Succinctly.pdf";

    // Logs the document's edited status to the console (null-safe).
    public void OnClick(MouseEventArgs args)
    {
        Console.WriteLine(Viewer.IsDocumentEdited);
    }
}
```

[View sample on GitHub](https://github.com/SyncfusionExamples/blazor-pdf-viewer-examples/tree/master/Common/Document%20editing%20status).
