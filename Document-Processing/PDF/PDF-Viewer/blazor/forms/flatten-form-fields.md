---
layout: post
title: Flatten PDF form fields in Blazor SfPdfViewer | Syncfusion
description: Learn how to flatten interactive PDF form fields before download in Blazor SfPdfViewer.
platform: document-processing
control: SfPdfViewer
documentation: ug
domainurl: ##DomainURL##
---

# Flatten PDF form fields in Blazor SfPdfViewer

## Overview

Flattening PDF forms converts interactive fields such as textboxes, dropdowns, checkboxes, signatures, etc., into non‑editable page content. Use this when you want to protect filled data, finalize a document, or prepare it for secure sharing.

## Prerequisites

- Blazor SfPdfViewer installed and configured
- Basic viewer setup completed. For more information, see [getting started guide](../getting-started/web-app)

## Flatten forms before downloading PDF

1. Add a reference to the [`SfPdfViewer2`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.SfPdfViewer2.html) component using `@ref` so you can access viewer APIs.
2. Retrieve the current document from the viewer using [`GetDocumentAsync()`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerBase.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerBase_GetDocumentAsync) as a byte array.
3. Load the document into [`PdfLoadedDocument`](https://help.syncfusion.com/cr/file-formats/Syncfusion.Pdf.Parsing.PdfLoadedDocument.html) from the Syncfusion PDF Library.
4. Set the `Flatten` property to `true` on both form fields and annotations to convert them to non-editable content.
5. Save the flattened PDF to a byte array and reload it into the viewer using [`LoadAsync()`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerBase.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerBase_LoadAsync_System_Byte___).
6. Download the flattened PDF using [`DownloadAsync()`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerBase.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerBase_DownloadAsync).

## Complete example

```cshtml
@using Syncfusion.Blazor
@using Syncfusion.Blazor.SfPdfViewer
@using Syncfusion.Blazor.Buttons
@using Syncfusion.Pdf
@using Syncfusion.Pdf.Parsing

<SfButton OnClick="FlattenDownload">Flatten</SfButton>

<SfPdfViewer2 Height="600px"
              Width="100%"
              @ref="Viewer">
</SfPdfViewer2>

@code {
    private SfPdfViewer2? Viewer;
    public string DocumentPath { get; set; } = "wwwroot/data/form-filling-document.pdf";

    private async Task FlattenDownload()
    {
        if (Viewer is null) return;
        
        // Get current document from viewer as byte array
        byte[] bytes = await Viewer.GetDocumentAsync();
        
        // Load into PdfLoadedDocument for flattening
        PdfLoadedDocument loadedDocument = new PdfLoadedDocument(bytes);
        
        // Flatten form fields
        if (loadedDocument.Form != null)
        {
            loadedDocument.Form.Flatten = true;
        }

        // Flatten annotations on all pages
        foreach (PdfLoadedPage page in loadedDocument.Pages)
        {
            page.Annotations.Flatten = true;
        }
        
        // Save flattened PDF to byte array
        byte[] flattenedBytes;
        using (MemoryStream stream = new MemoryStream())
        {
            loadedDocument.Save(stream);
            flattenedBytes = stream.ToArray();
        }
        
        loadedDocument.Close(true);

        // Reload flattened document into viewer
        await Viewer.LoadAsync(flattenedBytes);

        // Download the flattened PDF
        await Viewer.DownloadAsync();
    }
}
```

## Expected result

- The downloaded or "Save As" PDF will contain the visible appearance of filled form fields as static, non-editable content.
- Form fields will no longer be interactive or editable in common PDF readers.

## Troubleshooting

- If Viewer is null, ensure `@ref="Viewer"` is present and the document is loaded before invoking [`GetDocumentAsync()`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerBase.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerBase_GetDocumentAsync).
- Null reference exception: Add a null check using `if (Viewer is null) return;` before accessing viewer properties.
- Ensure the Syncfusion.Pdf NuGet package is installed for `PdfLoadedDocument` and flattening functionality.
- After flattening, use [`LoadAsync()`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerBase.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerBase_LoadAsync_System_Byte___) to reload the flattened PDF into the viewer.

## Related topics

- [GetDocumentAsync API reference](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerBase.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerBase_GetDocumentAsync)
- [LoadAsync API reference](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerBase.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerBase_LoadAsync_System_Byte___)
- [DownloadAsync API reference](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerBase.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerBase_DownloadAsync)
- [Form Designer overview](./overview)   
- [Create form fields](./create-form-fields)  
- [Read Form Field Values in Blazor SfPdfViewer](./read-form-field-values)