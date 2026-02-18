---
layout: post
title: Page Navigation in Blazor SfPdfViewer Component | Syncfusion
description: Learn how to navigate PDF pages in Blazor SfPdfViewer using toolbar buttons and programmatic APIs—first, previous, next, last, and go to page.
platform: document-processing
control: SfPdfViewer
documentation: ug
---

# Page navigation in SfPdfViewer

Navigate pages using the toolbar or programmatic APIs.

SfPdfViewer's toolbar includes these page navigation tools:

* **First page**: Navigate to the first page.
* **Previous page**: Scroll backward one page.
* **Next page**: Scroll forward one page.
* **Last page**: Navigate to the last page.
* **Go to page**: Jump to a specified page number.

![Page navigation tools in Blazor SfPdfViewer](../../blazor-classic/images/blazor-pdfviewer-page-navigation.png)

These toolbar buttons are controlled by the [EnableNavigation](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerBase.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerBase_EnableNavigation) property. Programmatic navigation APIs remain available regardless.

```cshtml

@using Syncfusion.Blazor.SfPdfViewer

<SfPdfViewer2 Width="100%"
              Height="100%"
              DocumentPath="@DocumentPath"
              EnableNavigation="false" />

@code{
    public string DocumentPath { get; set; } = "wwwroot/Data/PDF_Succinctly.pdf";
}

```

Navigate pages programmatically using the APIs shown in the example below.

N> `GoToPageAsync` expects a 1‑based page number.

```cshtml

@using Syncfusion.Blazor.Buttons
@using Syncfusion.Blazor.Inputs
@using Syncfusion.Blazor.SfPdfViewer

<div style="display:inline-block">
    <SfButton OnClick="OnFirstPageClick">Go To First Page</SfButton>
</div>

<div style="display:inline-block">
    <SfButton OnClick="OnLastPageClick">Go To Last Page</SfButton>
</div>

<div style="display:inline-block">
    <SfButton OnClick="OnNextPageClick">Go To Next Page</SfButton>
</div>

<div style="display:inline-block">
    <SfTextBox @ref="@TextBox"></SfTextBox>
</div>

<div style="display:inline-block;">
    <SfButton OnClick="OnPageClick">Go To Page</SfButton>
</div>

<div style="display:inline-block">
    <SfButton OnClick="OnPreviousPageClick">Go To Previous Page</SfButton>
</div>

<SfPdfViewer2 Width="100%" Height="100%" DocumentPath="@DocumentPath" @ref="@Viewer" />

@code{
    SfPdfViewer2 Viewer;
    SfTextBox TextBox;
    public string DocumentPath { get; set; } = "wwwroot/data/PDF_Succinctly.pdf";

    public async void OnFirstPageClick(MouseEventArgs args)
    {
        await Viewer.GoToFirstPageAsync();
    }

    public async void OnLastPageClick(MouseEventArgs args)
    {
        await Viewer.GoToLastPageAsync();
    }

    public async void OnNextPageClick(MouseEventArgs args)
    {
        await Viewer.GoToNextPageAsync();
    }

    public async void OnPageClick(MouseEventArgs args)
    {
        int pageIndex =  int.Parse(TextBox.Value.ToString());
        await Viewer.GoToPageAsync(pageIndex);
    }

    public async void OnPreviousPageClick(MouseEventArgs args)
    {
        await Viewer.GoToPreviousPageAsync();
    }
}

```

## See also

* [Magnification in Blazor SfPdfViewer](../magnification)

* [Bookmark navigation in Blazor SfPdfViewer](./bookmark)