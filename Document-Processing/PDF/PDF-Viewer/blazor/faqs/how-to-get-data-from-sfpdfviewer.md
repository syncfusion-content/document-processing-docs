---
layout: post
title: Get PDF document data in Blazor SfPdfViewer | Syncfusion
description: Learn how to retrieve the current PDF as a byte array using GetDocumentAsync and reload it with LoadAsync (data URI/base64) in Blazor SfPdfViewer.
platform: document-processing
control: SfPdfViewer
documentation: ug
---

# Get PDF document data from Blazor SfPdfViewer Component

Use the [GetDocumentAsync](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.SfPdfViewer2.html#Syncfusion_Blazor_SfPdfViewer_SfPdfViewer2_GetDocumentAsync) method of the SfPdfViewer component to retrieve the currently loaded PDF document as a byte array (`Task<byte[]>`), including user edits, annotations, and form field data. The byte array can be reloaded into the viewer using [LoadAsync](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.SfPdfViewer2.html#Syncfusion_Blazor_SfPdfViewer_SfPdfViewer2_LoadAsync_System_String_System_String_), which accepts a data URI/base64 string and an optional document password.

## Retrieve and reload the document

The following example retrieves the current document data and then reloads the same document into the viewer.

```cshtml

@using Syncfusion.Blazor.SfPdfViewer
@using Syncfusion.Blazor.Buttons

<SfButton @onclick="retrieve">Retrieve Document</SfButton>

<SfButton @onclick="load">Reload Retrieved Document</SfButton>

<SfPdfViewer2 @ref="@viewer"
              DocumentPath="@DocumentPath"
              Height="100%"
              Width="100%">
</SfPdfViewer2>

@code
{
    private SfPdfViewer2 viewer;
    private string DocumentPath { get; set; } = "wwwroot/Data/PDF_Succinctly.pdf";

    private byte[]? save;

    private async Task retrieve()
    {
        //Gets the loaded PDF document
        save = await viewer.GetDocumentAsync();
    }

    private async Task load()
    {
        //Converts the byte array into base64 string.
        string base64String = Convert.ToBase64String(save);
        //Loads the PDF document from the specified base64 string. The second parameter is the document password (null for unprotected PDFs).
        await viewer.LoadAsync("data:application/pdf;base64," + base64String, null);
    }
}

```

[View sample in GitHub](https://github.com/SyncfusionExamples/blazor-pdf-viewer-examples/tree/master/Common/Get%20the%20PDF%20document%20as%20a%20byte%20array).

## See also

* [Events in SfPdfViewer Component](../events)
* [How to create SfPdfViewer Component in a Splitter Component](./how-to-create-sfpdfviewer-in-a-splitter-component)
* [How to create a SfPdfViewer within a popup window in Blazor](./how-to-create-sfpdfviewer-in-a-popup-window)