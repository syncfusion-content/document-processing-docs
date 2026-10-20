---
layout: post
title: How to Open the Thumbnail Pane Programmatically | Syncfusion
description: Open the thumbnail pane programmatically in the ASP.NET MVC PDF Viewer using openThumbnailPane to show page thumbnails from custom UI controls.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# How to Open the Thumbnail Pane Programmatically in ASP.NET MVC PDF

The Syncfusion<sup style="font-size:70%">®</sup> ASP.NET MVC PDF Viewer lets you open the thumbnail pane programmatically by calling the [**openThumbnailPane()**](https://ej2.syncfusion.com/documentation/api/pdfviewer/thumbnailview#openthumbnailpane) method after the document loads. This approach helps highlight page navigation immediately or in response to user actions.

The following steps explain how to open the thumbnail pane.

**Step 1:** Create an ASP.NET MVC PDF Viewer sample by following the [ASP.NET MVC getting started guide for the PDF Viewer](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/asp-net-mvc/getting-started). The tutorial shows how to configure Razor Pages, reference the required Syncfusion scripts and styles, and register the PDF Viewer service endpoint.

**Step 2:** Add the following markup and script to open the thumbnail pane automatically or on demand.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<button type="button" onclick="openThumbnail()">Open Thumbnail Pane</button>

<div id="e-pv-e-sign-pdfViewer-div">
    @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>

<script>
    function openThumbnail() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        // Open Thumbnail Pane.
        viewer.thumbnailViewModule.openThumbnailPane();
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<button type="button" onclick="openThumbnail()">Open Thumbnail Pane</button>

<div id="e-pv-e-sign-pdfViewer-div">
    @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/PdfViewer/")).DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>

<script>
    function openThumbnail() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        // Open Thumbnail Pane.
        viewer.thumbnailViewModule.openThumbnailPane();
    }
</script>

{% endhighlight %}
{% endtabs %}

[how to open the thumbnail pane programmatically](https://www.syncfusion.com/downloads/support/directtrac/general/ze/EJ2MvcSample1928984973.zip)
