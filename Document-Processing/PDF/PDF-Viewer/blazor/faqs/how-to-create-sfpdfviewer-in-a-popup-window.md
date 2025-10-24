---
layout: post
title: Create a SfPdfViewer within a popup window in Blazor | Syncfusion
description: Learn everything about integrating the Syncfusion Blazor SfPdfViewer component within a popup window.
platform: document-processing
control: SfPdfViewer
documentation: ug
---

# Create a SfPdfViewer within a popup window in Blazor

For a quick preview experience, the PDF viewer can be hosted inside a dialog (popup) window. The following example demonstrates placing the SfPdfViewer component inside a Syncfusion&reg; Dialog in a Blazor application. Selecting the Open PDF Viewer button opens a modal dialog sized to its container, and the viewer loads the specified document in the Created event.

```cshtml

@using Syncfusion.Blazor.Buttons
@using Syncfusion.Blazor.Popups
@using Syncfusion.Blazor.SfPdfViewer

<div id="target" style="width:800px;height:500px">

    <SfButton @onclick="OnClick">Open PDF Viewer</SfButton>

    <SfDialog @ref="@Dialog"
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
    public SfPdfViewer2 Viewer { get; set; }
    SfDialog Dialog;

    public async void OnClick(MouseEventArgs args)
    {
        await this.Dialog.ShowAsync();
    }

    private async void Created()
    {
        await Viewer.LoadAsync(DocumentPath, null);
    }

    public string DocumentPath { get; set; } = "wwwroot/data/PDF_Succinctly.pdf";
    public string Header { get; set; } = "PDF Viewer";
}

```

[View the popup dialog sample on GitHub](https://github.com/SyncfusionExamples/blazor-pdf-viewer-examples/tree/master/Common/PdfViewer%20in%20Popup%20window)

## See also

* [How to create SfPdfViewer Component in a Splitter Component](./how-to-create-sfpdfviewer-in-a-splitter-component)

* [How to view the created PDF document](./how-to-create-sfpdfviewer)