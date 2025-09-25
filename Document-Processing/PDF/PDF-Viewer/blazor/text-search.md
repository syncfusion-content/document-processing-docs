---
layout: post
title: Text Search in Blazor SfPdfViewer Component | Syncfusion
description: Learn how to search text in the Syncfusion Blazor SfPdfViewer, enable or disable the search, and perform programmatic search operations.
platform: document-processing
control: SfPdfViewer
documentation: ug
---

# Text Search in Blazor SfPdfViewer Component

Use the built-in toolbar to find text in a PDF document. When a search is initiated, the viewer highlights all matches across pages and supports navigation between occurrences with next and previous controls.

![Blazor SfPdfViewer text search](../blazor-classic/images/blazor-pdfviewer-text-search.png)

Enable or disable the text search UI using the [EnableTextSearch](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerBase.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerBase_EnableTextSearch) property. When disabled, search commands are unavailable.

```cshtml

@using Syncfusion.Blazor.SfPdfViewer

<SfPdfViewer2 Height="100%" Width="100%" DocumentPath="@DocumentPath" EnableTextSearch="true" />

@code{
    public string DocumentPath { get; set; } = "wwwroot/Data/PDF_Succinctly.pdf";
}

```

Text search can also be performed programmatically using the following APIs: [SearchTextAsync](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerBase.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerBase_SearchTextAsync_System_String_System_Boolean_), [SearchNextAsync](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerBase.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerBase_SearchNextAsync), [SearchPreviousAsync](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerBase.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerBase_SearchPreviousAsync), and [CancelTextSearchAsync](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerBase.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerBase_CancelTextSearchAsync).

```cshtml

@using Syncfusion.Blazor.Buttons
@using Syncfusion.Blazor.SfPdfViewer

<div style="display:inline-block">
    <SfButton OnClick="OnSearchClick">Search Text</SfButton>
</div>

<div style="display:inline-block">
    <SfButton OnClick="OnSearchNext">Search Next</SfButton>
</div>

<div style="display:inline-block">
    <SfButton OnClick="OnSearchPrevious">Search Previous</SfButton>
</div>

<div style="display:inline-block">
    <SfButton OnClick="OnCancelSearch">Cancel Search</SfButton>
</div>

<SfPdfViewer2 Height="100%" Width="100%" DocumentPath="@DocumentPath" @ref="@Viewer" />

@code {
    SfPdfViewer2 Viewer;
    public string DocumentPath { get; set; } = "wwwroot/data/PDF_Succinctly.pdf";

    public async void OnSearchClick(MouseEventArgs args)
    {
        //Here PDF is to be serached from the loaded document
        await Viewer.SearchTextAsync("pdf", false);
    }

    public async void OnSearchNext(MouseEventArgs args)
    {
        await Viewer.SearchNextAsync();
    }

    public async void OnSearchPrevious(MouseEventArgs args)
    {
        await Viewer.SearchPreviousAsync();
    }

    public async void OnCancelSearch(MouseEventArgs args)
    {
        await Viewer.CancelTextSearchAsync();
    }

}

```