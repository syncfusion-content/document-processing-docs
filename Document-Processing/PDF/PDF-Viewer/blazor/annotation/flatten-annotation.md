---
layout: post
title: Flatten Annotations in Blazor SfPdfViewer Component | Syncfusion
description: Learn how to flatten PDF annotations and form fields before saving documents in the Blazor SfPdfViewer component for consistent output.
platform: document-processing
control: SfPdfViewer
documentation: ug
---

# Flatten annotations in Blazor SfPdfViewer Component

Flattening takes the visual appearance of annotations and embeds them into each page's content stream. The visual result remains visible, but the annotation objects and interactive form field structures are removed, leaving only the rendered appearance. Once flattened, they can no longer be selected, edited, or filled.

Flattening annotations permanently merges them into the PDF content. Once flattened:
- Annotations are **no longer editable** in any PDF viewer.
- Useful for **secure sharing**, preventing modifications.
- Ideal when **finalizing markup** before distribution.

## How to flatten annotations

You can flatten annotations on button click by exporting the PDF with flattened content. This approach:
- Preserves the original viewer session with editable annotations
- Produces a flattened output PDF for download
- Uses `PdfLoadedDocument` to load, flatten, and save the PDF

Use the example below to flatten annotations on button click.

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
    private string DocumentPath { get; set; } = "wwwroot/Data/PDF_Succinctly.pdf";

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

## API reference

- `GetDocumentAsync()`: Retrieves the current document from the viewer as a byte array, including all annotations and form data.
- `PdfLoadedDocument.Form.Flatten = true`: Merges form field appearances into the page content, making them non-interactive.
- `page.Annotations.Flatten = true`: Embeds annotation appearances into the page, removing interactivity.
- `LoadAsync()`: Reloads the flattened PDF into the viewer for display.
- `DownloadAsync()`: Triggers the browser download of the currently displayed document.
- `loadedDocument.Close(true)`: Closes the document and releases resources. Pass `true` to dispose the underlying streams; pass `false` to keep them alive.

## Notes

- Flattening applies to **all annotation types**: text markup, shapes, stamps, notes, ink, and form fields.
- Once flattened, annotations **cannot be edited or removed**.
- The flattening process uses `PdfLoadedDocument` from Syncfusion.Pdf library to load, process, and save the PDF.
- Use flattening **on export** (button click), not during regular document interactions, to preserve the editing experience in the viewer.
- After flattening and reloading, the viewer displays the flattened version for verification before download.

## See also

- [Annotation Overview](./overview)
- [Create and Modify Annotations](./create-modify-annotation)
- [Annotation Permissions](./annotation-permission)
- [Text Markup Annotations](./text-markup/highlight-annotation)
- [Shape Annotations](./shape/line-annotation)
- [Measurement Annotations](./measurement/distance-annotation)
- [Annotation Undo/Redo](./annotations-undo-redo)