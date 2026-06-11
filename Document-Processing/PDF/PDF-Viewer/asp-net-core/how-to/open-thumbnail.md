---
layout: post
title: Open the thumbnail pane programmatically in ASP.NET Core PDF Viewer | Syncfusion
description: Learn how to open the thumbnail pane programmatically in the Syncfusion ASP.NET Core PDF Viewer by calling the openThumbnailPane method after the document loads.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Open the thumbnail pane programmatically in ASP.NET Core PDF Viewer

Display page thumbnails by calling the [**openThumbnailPane()**](https://ej2.syncfusion.com/documentation/api/pdfviewer/thumbnailView/#openthumbnailpane) method. This enables quick navigation between pages and can be triggered automatically when the document loads or in response to user interactions.

Follow these steps to open the thumbnail pane:

**Step 1:** Follow the [ASP.NET Core PDF Viewer getting started guide](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/asp-net-core/getting-started) to set up a basic viewer with required Syncfusion scripts, styles, and service endpoints.

**Step 2:** Add a button and script to open the thumbnail pane on demand or automatically when the document loads:

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
                   serviceUrl="/Index"
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

[View sample on GitHub](https://github.com/SyncfusionExamples/asp-core-pdf-viewer-examples/tree/master/How%20to/Open%20Thumbnail%20pane%20programmatically)
