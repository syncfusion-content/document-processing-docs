---
layout: post
title: Create a SfPdfViewer within a popup window in Blazor | Syncfusion
description: Learn here all about how to integrating the Blazor SfPdfViewer Component within a Dialog popup window.
platform: document-processing
control: SfPdfViewer
documentation: ug
---

# Create a SfPdfViewer within a popup window in Blazor

The PDF viewer can be hosted inside a dialog (popup) window. The following example demonstrates placing the `SfPdfViewer` component inside a Syncfusion<sup style="font-size:70%">&reg;</sup> Dialog in a Blazor application. Selecting the **Open PDF Viewer** button opens a modal dialog that fills the target container, and the viewer loads the specified document in the [Created](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerEvents.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerEvents_Created) event.

```cshtml

@using Syncfusion.Blazor.Buttons
@using Syncfusion.Blazor.Popups
@using Syncfusion.Blazor.SfPdfViewer

<div id="target" style="width:800px;height:500px">

    <SfButton @onclick="OnClick">Open PDF Viewer</SfButton>

    <SfDialog @ref="Dialog"
              Target="#target"
              Width="100%"
              Visible="false"
              IsModal="true"
              Header="@Header"
              ShowCloseIcon="true">
        <SfPdfViewer2 @ref="Viewer">
            <PdfViewerEvents Created="Created"></PdfViewerEvents>
        </SfPdfViewer2>
    </SfDialog>

</div>

@code {
    private SfPdfViewer2 Viewer { get; set; }
    private SfDialog Dialog = new SfDialog();

    private async Task OnClick(MouseEventArgs args)
    {
        await this.Dialog.ShowAsync();
    }

    private async Task Created()
    {
        await Viewer.LoadAsync(DocumentPath, null);
    }

    private string DocumentPath { get; set; } = "wwwroot/data/PDF_Succinctly.pdf";
    private string Header { get; set; } = "PDF Viewer";
}

```

[View the popup dialog sample on GitHub](https://github.com/SyncfusionExamples/blazor-pdf-viewer-examples/tree/master/Common/PdfViewer%20in%20Popup%20window)

## See also

* [How to create SfPdfViewer Component in a Splitter Component](./how-to-create-sfpdfviewer-in-a-splitter-component)
* [How to preview the newly created PDF document](./how-to-create-sfpdfviewer)