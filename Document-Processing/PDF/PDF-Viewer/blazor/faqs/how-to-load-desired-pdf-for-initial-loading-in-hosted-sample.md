---
layout: post
title: Load a PDF on initial load in Blazor SfPdfViewer | Syncfusion
description: Learn how to display a specific PDF on initial load and switch documents at runtime using the DocumentPath property and base64 data URIs in Blazor SfPdfViewer.
platform: document-processing
control: SfPdfViewer
documentation: ug
---

# Load a specific PDF on initial load in Blazor SfPdfViewer

Load a specific PDF on initial display and change the document at runtime in the Blazor SfPdfViewer component. To set the initial document, assign the [DocumentPath](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.SfPdfViewer2.html#Syncfusion_Blazor_SfPdfViewer_SfPdfViewer2_DocumentPath) property to a file path/URL or a data URI (base64). Updating the DocumentPath property reloads the viewer with the new document.

```cshtml

@inject HttpClient Http;
@using Syncfusion.Blazor.Buttons;
@using Syncfusion.Blazor.SfPdfViewer;

<SfButton OnClick="LoadAnotherDocument">Load Another Document</SfButton>

<SfPdfViewer2 Height="100%"
              Width="100%"
              DocumentPath="@DocumentPath">
</SfPdfViewer2>


@code
{
    private string DocumentPath = "Data/PDF_Succinctly.pdf";

    private async Task LoadAnotherDocument()
    {
        //Sends a GET request to a specified Uri and returns the response body as a byte array.
        byte[] byteArray = await Http.GetByteArrayAsync("Data/FormFillingDocument.pdf");
        //Converts the byte array into base64 string.
        string base64String = Convert.ToBase64String(byteArray);
        //Sets the base64 string as document path for the PDF Viewer.
        DocumentPath = "data:application/pdf;base64," + base64String;
    }
}

```

When the `Load Another Document` button is clicked, the `LoadAnotherDocument` method runs. It uses `HttpClient` to download the PDF as a `byte` array, converts it to a `base64` string, and then updates the [DocumentPath](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.SfPdfViewer2.html#Syncfusion_Blazor_SfPdfViewer_SfPdfViewer2_DocumentPath) property with a data URI. This updates the viewer to display the new document.

[View sample in GitHub](https://github.com/SyncfusionExamples/blazor-pdf-viewer-examples/tree/master/Common/Load%20Desire%20PDF%20in%20Blazor).

## See also

* [How to load Microsoft Office files in Blazor SfPdfViewer Component](./how-to-load-office-files)
* [How to load PDF documents dynamically in Blazor SfPdfViewer Component](./how-to-load-pdf-document-dynamically)
* [How to unload the PDF document from the Viewer in Blazor SfPdfViewer Component](./how-to-unload-the-pdf-document-from-viewer)
