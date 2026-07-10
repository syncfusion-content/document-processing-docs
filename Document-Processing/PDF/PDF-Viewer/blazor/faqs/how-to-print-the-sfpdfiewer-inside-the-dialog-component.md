---
layout: post
title: Print the SfPdfViewer inside the Dialog component | Syncfusion
description: Learn here all about how to print the SfPdfViewer inside a Syncfusion Dialog in the Blazor SfPdfViewer.
platform: document-processing
control: SfPdfViewer
documentation: ug
---

# Print the SfPdfViewer inside the Dialog component in Blazor

The `SfPdfViewer` supports printing the loaded PDF document by default. The following example hosts the viewer inside a Syncfusion Dialog (popup) and prints the document after the PDF finishes loading.

The following code illustrates how to perform a print action once the SfPdfViewer is loaded.

1. Click **Open PDF Viewer** to display the dialog.
2. Click **Open PDF Document** to load the PDF into the viewer.
3. The `DocumentLoaded` event triggers `PrintAsync()` to open the browser print dialog.

```cshtml
@using Syncfusion.Blazor.Buttons
@using Syncfusion.Blazor.Popups
@using Syncfusion.Blazor.SfPdfViewer

<div id="target" style="width:800px;height:500px">
    <SfButton @onclick="OnClick">Open PDF Viewer</SfButton>
    <SfDialog @ref="@dialog"
              Target="#target"
              MinHeight="100%"
              Width="100%"
              CloseOnEscape="true"
              AllowDragging="true"
              Visible="false"
              IsModal="true"
              Header="@Header"
              ShowCloseIcon="true">
        <SfPdfViewer2 @ref="viewer"
                      Width="100%"
                      Height="100%">
            <PdfViewerEvents DocumentLoaded="@documentLoad">
            </PdfViewerEvents>
        </SfPdfViewer2>
    </SfDialog>
    <SfButton @onclick="OnClickopen">Open PDF Document</SfButton>
</div>

@code{
    private SfPdfViewer2 viewer;
    private SfDialog dialog;

    // Shows the dialog window.
    private void OnClick(MouseEventArgs args)
    {
        this.dialog.Show(true);
    }

    // Loads the PDF document into the viewer.
    private async Task OnClickopen(MouseEventArgs args)
    {
        // Read the contents of the file into a byte array.
        byte[] byteArray = System.IO.File.ReadAllBytes("wwwroot/data/HTTP Succinctly.pdf");
        // Convert the byte array into a base64 string.
        string base64String = Convert.ToBase64String(byteArray);
        // Load the PDF document from the base64 string. The second argument is the document password; pass null for an unprotected document.
        await viewer.LoadAsync("data:application/pdf;base64," + base64String, null);
    }

    // Triggers when the document finishes loading.
    private async Task documentLoad(LoadEventArgs args)
    {
        // Performs the print action on the SfPdfViewer.
        await viewer.PrintAsync();
    }

    private string Header { get; set; } = "SfPdfViewer";
}
```

[View sample in GitHub](https://github.com/SyncfusionExamples/blazor-pdf-viewer-examples/tree/master/Print/PDF%20Viewer%20in%20a%20Dialog).

## See also

* [Print in Blazor SfPdfViewer Component](../print)
* [How to perform print in same window](./how-to-perform-print-in-same-window)
