---
layout: post
title: Open the thumbnail pane programmatically in ASP.NET Core PDF Viewer | Syncfusion
description: Learn how to open the thumbnail pane programmatically in the Syncfusion ASP.NET Core PDF Viewer by calling the openThumbnailPane method after the document loads.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Open thumbnail pane programmatically

The Syncfusion<sup style="font-size:70%">®</sup> ASP.NET Core PDF Viewer lets you open the thumbnail pane programmatically by calling the [**openThumbnailPane()**](https://ej2.syncfusion.com/documentation/api/pdfviewer/thumbnailView/#openthumbnailpane) method after the document loads. This approach helps highlight page navigation immediately or in response to user actions.

The following steps explain how to open the thumbnail pane.

**Step 1:** Create an ASP.NET Core PDF Viewer sample by following the [ASP.NET Core getting started guide for the PDF Viewer](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/asp-net-core/getting-started). The tutorial shows how to configure Razor Pages, reference the required Syncfusion scripts and styles, and register the PDF Viewer service endpoint.

**Step 2:** Add the following markup and script to open the thumbnail pane automatically or on demand.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<button type="button" onclick="openThumbnail()">Open Thumbnail Pane</button>

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                   documentLoad="openThumbnail">
    </ejs-pdfviewer>
</div>

<script>
    function openThumbnail() {
        var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
        pdfViewer.thumbnailViewModule.openThumbnailPane();
    }
</script>
{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<button type="button" onclick="openThumbnail()">Open Thumbnail Pane</button>

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   serviceUrl='/Index'
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                   documentLoad="openThumbnail">
    </ejs-pdfviewer>
</div>

<script>
    function openThumbnail() {
        var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
        pdfViewer.thumbnailViewModule.openThumbnailPane();
    }
</script>

{% endhighlight %}
{% endtabs %}

[View sample in GitHub](https://github.com/SyncfusionExamples/asp-core-pdf-viewer-examples/tree/master/How%20to/Open%20Thumbnail%20pane%20programmatically)
