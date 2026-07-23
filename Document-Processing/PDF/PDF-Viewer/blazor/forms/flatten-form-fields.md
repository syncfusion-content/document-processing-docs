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

Flattening PDF forms converts interactive fields such as textboxes, dropdowns, checkboxes, signatures, etc. into non‑editable page content. Use this when you want to protect filled data, finalize a document, or prepare it for secure sharing.

## Prerequisites

- Blazor SfPdfViewer installed and configured
- Basic viewer setup completed. For more information, see [getting started guide](../getting-started/web-app)

## Flatten forms before download

1. Add a reference to the [`SfPdfViewer2`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.SfPdfViewer2.html) component using `@ref` and set its `DocumentPath` so the viewer loads a PDF.
2. Retrieve the current document from the viewer using [`GetDocumentAsync()`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerBase.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerBase_GetDocumentAsync) as a byte array.
3. Load the document into a [`PdfLoadedDocument`](https://help.syncfusion.com/cr/file-formats/Syncfusion.Pdf.Parsing.PdfLoadedDocument.html) from the Syncfusion PDF Library.
4. Set `Form.Flatten` to `true` and `Annotations.Flatten` to `true` on each page to convert the form fields and annotations to non-editable content.
5. Save the flattened PDF to a byte array and reload it into the viewer using [`LoadAsync()`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerBase.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerBase_LoadAsync_System_Byte___).
6. Download the flattened PDF using [`DownloadAsync()`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerBase.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerBase_DownloadAsync).

## Complete example

{% tabs %}
{% highlight razor %}
@page "/flatten-form-fields"
@using Syncfusion.Blazor
@using Syncfusion.Blazor.SfPdfViewer
@using Syncfusion.Blazor.Buttons
@using Syncfusion.Pdf
@using Syncfusion.Pdf.Parsing
@using System.IO

<SfButton OnClick="FlattenDownload">Flatten</SfButton>

<SfPdfViewer2 Height="600px"
              Width="100%"
              DocumentPath="@DocumentPath"
              @ref="Viewer">
</SfPdfViewer2>

@code {
    private SfPdfViewer2? Viewer;
    private string DocumentPath { get; set; } = "wwwroot/data/form-filling-document.pdf";

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
{% endhighlight %}
{% endtabs %}

## Expected result

- The downloaded or "Save As" PDF will contain the visible appearance of filled form fields as static, non-editable content.
- Form fields will no longer be interactive or editable in common PDF readers.

N> For a hands-on reference with working code examples, explore the sample projects available on [GitHub](https://github.com/SyncfusionExamples/blazor-pdf-viewer-examples/tree/master/Form%20Designer/Components/Pages).

## Troubleshooting

- If the `Viewer` is null, ensure `@ref="Viewer"` is present and the document is loaded before invoking [`GetDocumentAsync()`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerBase.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerBase_GetDocumentAsync).
- A null reference exception can occur. Add a null check using `if (Viewer is null) return;` before accessing viewer properties, and check `loadedDocument.Form` before flattening.
- Ensure the Syncfusion.Pdf NuGet package is installed for `PdfLoadedDocument` and flattening functionality.
- After flattening, use [`LoadAsync()`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerBase.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerBase_LoadAsync_System_Byte___) to reload the flattened PDF into the viewer.

## See also

- [Form Designer overview](./overview)
- [Create form fields](./overview-create-forms)
- [Read form field values](./read-form-field-values)
