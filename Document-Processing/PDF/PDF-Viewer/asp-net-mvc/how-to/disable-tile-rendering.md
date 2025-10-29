---
layout: post
title: Disable tile rendering in ASP.NET MVC PDF Viewer control | Syncfusion
description: Learn here all about Disable tile rendering in Syncfusion ASP.NET MVC PDF Viewer control of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Disable tile rendering
publishingplatform: ASP.NET MVC
documentation: ug
---

# Disable tile rendering in ASP.NET MVC PDF Viewer control

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
