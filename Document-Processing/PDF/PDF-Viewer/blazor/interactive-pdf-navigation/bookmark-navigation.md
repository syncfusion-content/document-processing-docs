---
layout: post
title: Bookmark navigation in Blazor SfPdfViewer | Syncfusion
description: Learn how to use the bookmark panel in the Blazor PDF Viewer to navigate to labeled destinations, including visibility options and behavior.
platform: document-processing
control: SfPdfViewer
documentation: ug
---

# Bookmark navigation in SfPdfViewer

Use the bookmark panel to jump directly to labeled destinations in a PDF.

Bookmarks defined in the PDF document are automatically loaded and listed in the bookmark panel. Selecting a bookmark navigates to its target. Nested bookmarks are supported; if the document has no bookmarks, the panel appears empty.

![Bookmark panel in Blazor PDF Viewer showing document bookmarks](../../blazor-classic/images/blazor-pdfviewer-bookmark-navigation.png)

Enable or disable the bookmark panel by setting the [EnableBookmarkPanel](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerBase.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerBase_EnableBookmarkPanel) property. This property only controls the panel’s visibility; bookmarks are read from the PDF.

```cshtml

@using Syncfusion.Blazor.SfPdfViewer

<SfPdfViewer2 Height="100%" Width="100%" DocumentPath="@DocumentPath" EnableBookmarkPanel="true" />

@code{
    public string DocumentPath { get; set; } = "wwwroot/Data/PDF_Succinctly.pdf";
}

```
