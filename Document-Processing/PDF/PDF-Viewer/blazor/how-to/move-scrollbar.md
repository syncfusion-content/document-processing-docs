---
layout: post
title: Move the scrollbar to the exact annotations location | Syncfusion
description: Learn how to scroll the scrollbar precisely to the location of annotations in the Syncfusion Blazor SfPdfViewer component.
platform: document-processing
control: SfPdfViewer
documentation: ug
---

# Scroll to the Exact Annotation position Using Scrollbar

Use the Syncfusion&reg; Blazor SfPdfViewer component to scroll to the location of an annotation in a loaded PDF by calling the [GoToBookmarkAsync()](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerBase.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerBase_GoToBookmarkAsync_System_Int32_System_Double_) method with the target page number and vertical offset (from the top of the page).

The following example shows how to scroll to an annotation.

```cshtml

@using Syncfusion.Blazor.SfPdfViewer

<button @onclick="navigate">Navigation</button>

<SfPdfViewer2 @ref="PdfViewer" DocumentPath="@DocumentPath">
    <PdfViewerEvents DocumentLoaded="DocumentLoad"></PdfViewerEvents>
</SfPdfViewer2>

@code {
    SfPdfViewer2 PdfViewer;
    public string DocumentPath { get; set; } = "wwwroot/data/PDF Succinctly.pdf";
    public Dictionary<int, System.Drawing.SizeF> pageSize { get; set; }

    private void DocumentLoad(LoadEventArgs args)
    {
        pageSize = args.PageData.PageSizes;
    }

    private async void navigate()
    {
        var annotationCollection = await PdfViewer.GetAnnotationsAsync();
        var pageNumber = (annotationCollection[0].PageNumber);
        var Y = annotationCollection[0].Bound.Top;
        await PdfViewer.GoToBookmarkAsync(pageNumber, (pageSize[pageNumber].Height - Y));
    }

}

```

[View sample in GitHub](https://github.com/SyncfusionExamples/blazor-pdf-viewer-examples/tree/master/Common/Move%20scrollbar%20programmatically).