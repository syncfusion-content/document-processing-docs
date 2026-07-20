---
layout: post
title: Move the scrollbar to the exact annotations location | Syncfusion
description: Learn how to scroll the scrollbar precisely to the location of annotations in the Blazor SfPdfViewer component.
platform: document-processing
control: SfPdfViewer
documentation: ug
---

# Scroll to an Annotation's Position

Use the Blazor SfPdfViewer component to scroll to the location of an annotation in a loaded PDF by calling the [GoToBookmarkAsync()](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerBase.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerBase_GoToBookmarkAsync_System_Int32_System_Double_) method, inherited from `PdfViewerBase`, with the target page number and vertical offset (from the top of the page).

The following example shows how to scroll to an annotation.

```cshtml

@using Syncfusion.Blazor.SfPdfViewer

<button @onclick="ScrollToAnnotation">Scroll to Annotation</button>

<SfPdfViewer2 @ref="PdfViewer" DocumentPath="@DocumentPath">
    <PdfViewerEvents DocumentLoaded="DocumentLoad"></PdfViewerEvents>
</SfPdfViewer2>

@code {
    private SfPdfViewer2 PdfViewer;
    private string DocumentPath { get; set; } = "wwwroot/data/PDF Succinctly.pdf";
    private Dictionary<int, System.Drawing.SizeF> PageSize { get; set; }

    private void DocumentLoad(LoadEventArgs args)
    {
        PageSize = args.PageData.PageSizes;
    }

    private async Task ScrollToAnnotation()
    {
        var annotationCollection = await PdfViewer.GetAnnotationsAsync();
        var pageNumber = annotationCollection[0].PageNumber;
        // Bound.Top is measured from the top of the page in PDF coordinates; subtract from the page height to convert to the viewer's vertical offset.
        var Y = annotationCollection[0].Bound.Top;
        await PdfViewer.GoToBookmarkAsync(pageNumber, (PageSize[pageNumber].Height - Y));
    }

}

```

[View sample in GitHub](https://github.com/SyncfusionExamples/blazor-pdf-viewer-examples/tree/master/Common/Move%20scrollbar%20programmatically).

## See also

* [How to load Microsoft Office files in Blazor SfPdfViewer Component](./how-to-load-office-files)
* [How to unload the PDF document from Viewer](./how-to-unload-the-pdf-document-from-viewer)
* [How to show or hide the Component dynamically](./how-to-show-or-hide-sfpdfviewer-dynamically)
