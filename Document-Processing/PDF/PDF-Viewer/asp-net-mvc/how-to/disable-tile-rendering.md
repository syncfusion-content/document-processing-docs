---
layout: post
title: How to Disable Tile Rendering in ASP.NET MVC PDF Viewer | Syncfusion
description: Disable tile rendering in the ASP.NET MVC PDF Viewer to use the classic full-page rendering mode for simpler PDF display scenarios.
platform: document-processing
control: Disable tile rendering

documentation: ug
---

# How to Disable Tile Rendering in ASP.NET MVC PDF Viewer

To disable the tile rendering feature in the Syncfusion PDF viewer control, you can use the **enableTileRendering** property. This property allows you to enable or disable the tile rendering feature, which is used to improve the performance of the PDF viewer when displaying large documents.

To disable the tile rendering feature, you can set the **enableTileRendering** property to `false`.

By default, the tile rendering feature is enabled in the PDF viewer. Disabling it may improve the performance of the PDF viewer when displaying small documents, but it may also reduce the performance when displaying large documents.

Here is an example of how you can use the **enableTileRendering** property:

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div id="e-pv-e-sign-pdfViewer-div">
    @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").TileRenderingSettings(new Syncfusion.EJ2.PdfViewer.PdfViewerTileRenderingSettings { EnableTileRendering = false }).Render()
</div>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<div id="e-pv-e-sign-pdfViewer-div">
    @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/PdfViewer/")).DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").TileRenderingSettings(new Syncfusion.EJ2.PdfViewer.PdfViewerTileRenderingSettings { EnableTileRendering = false }).Render()
</div>

{% endhighlight %}
{% endtabs %}
