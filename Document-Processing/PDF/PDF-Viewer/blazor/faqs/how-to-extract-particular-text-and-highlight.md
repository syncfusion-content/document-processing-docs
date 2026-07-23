---
layout: post
title: Extract and Highlight Text in Blazor PDF Viewer | Syncfusion
description: Learn here all about how to extract specific text and highlight it in the Blazor PDF Viewer component.
platform: document-processing
control: SfPdfViewer
documentation: ug
---

# Extract and Highlight Text in Blazor PDF Viewer Component

The Blazor PDF Viewer component allows extracting text from a PDF document and highlighting specific text. This functionality enables users to interactively process PDF content, making it easier to emphasize important information.

To extract text, the Syncfusion PDF Library provides the `FindText` method on `PdfLoadedDocument`, which identifies the positions of specified text within the PDF. Once the text is found, users can highlight it by creating a highlight annotation and asynchronously adding it via the [`AddAnnotationAsync`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerBase.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerBase_AddAnnotationAsync_Syncfusion_Blazor_SfPdfViewer_PdfAnnotation_) method.

The following code example demonstrates how to extract text from a PDF document and highlight it in the Blazor PDF Viewer component.

```cshtml
@page "/"
@using Microsoft.Extensions.Caching.Memory;
@using Syncfusion.Blazor.SfPdfViewer;
@using System.Drawing;
@using Syncfusion.Pdf.Parsing;
@using Syncfusion.Pdf;

@inject IJSRuntime jsRuntime
@inject IMemoryCache MemoryCache

<button @onclick="loadDocument">Extract Text</button>
<button @onclick="highlightText">Highlight Text</button>

<SfPdfViewer2 @ref="viewer" Height="100%" DocumentPath="@DocumentPath"
              Width="100%" IsExtractText="true">
    <PdfViewerEvents DocumentLoaded="OnDocumentLoaded"></PdfViewerEvents>
</SfPdfViewer2>

@code {
    private SfPdfViewer2 viewer;
    private string DocumentPath { get; set; } = "wwwroot/data/pdf-succinctly.pdf";
    private Dictionary<int, List<Syncfusion.Drawing.RectangleF>> matchRects = new Dictionary<int, List<Syncfusion.Drawing.RectangleF>>();

    private void loadDocument()
    {
        using (FileStream docStream = new FileStream(Path.GetFullPath("wwwroot/data/pdf-succinctly.pdf"), FileMode.Open, FileAccess.Read))
        {
            // Load the PDF document.
            PdfLoadedDocument loadedDocument = new PdfLoadedDocument(docStream);

            // Find the text and store its positions.
            loadedDocument.FindText("the", out matchRects);
        }
    }

    private async void highlightText()
    {
        if (matchRects != null && matchRects.Count > 0)
        {
            var targetText = matchRects.FirstOrDefault(target => target.Value.Count > 0);

            if (targetText.Key > 0)
            {
                PdfAnnotation pdfAnnotation = new PdfAnnotation
                {
                    Type = AnnotationType.Highlight,
                    PageNumber = targetText.Key
                };

                List<Bound> newBounds = new List<Bound>();
                Bound newBound = new Bound
                {
                    X = ConvertPointToPixel(targetText.Value[0].X),
                    Y = ConvertPointToPixel(targetText.Value[0].Y),
                    Width = ConvertPointToPixel(targetText.Value[0].Width),
                    Height = ConvertPointToPixel(targetText.Value[0].Height)
                };
                newBounds.Add(newBound);
                pdfAnnotation.Bounds = newBounds;

                await viewer.AddAnnotationAsync(pdfAnnotation);
            }
            else
            {
                // Handle the case where the text was not found
                Console.WriteLine("Text not found for highlighting.");
            }
        }
        else
        {
            Console.WriteLine("No text found to highlight.");
        }
    }

    private void OnDocumentLoaded()
    {
        // This method can be used to perform actions once the document is loaded, if needed.
    }

    private float ConvertPointToPixel(double number)
    {
        return (float)(number * (float)96 / 72);
    }
}
```

[View sample in GitHub](https://github.com/SyncfusionExamples/blazor-pdf-viewer-examples/tree/master/Common/Extract%20Particular%20Text%20and%20Highlight).

## See also

* [Highlight Annotation](../annotation/text-markup/highlight-annotation)
* [Events in Blazor PDF Viewer](../events)
* [Supported features: Desktop vs mobile](../overview#supported-features-desktop-vs-mobile).
* [Render a PDF document from a URL in the MAUI app](../getting-started/maui-blazor-app).
