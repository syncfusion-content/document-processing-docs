---
layout: post
title: Open or close the bookmark pane in ASP.NET Core PDF Viewer | Syncfusion
description: Learn how to open or close the bookmark pane programmatically in the Syncfusion ASP.NET Core PDF Viewer by calling the bookmarkViewModule APIs.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Open or close the bookmark pane in ASP.NET Core PDF Viewer

Toggle the bookmark sidebar at runtime using **openBookmarkPane()** and **closeBookmarkPane()** methods. These APIs allow flexible document navigation workflows where bookmarks appear only when needed.

Follow these steps to implement bookmark pane toggling:

**Step 1:** Follow the [Getting Started with ASP.NET Core PDF Viewer guide](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/asp-net-core/getting-started) to set up a basic PDF Viewer instance with required Syncfusion EJ2 script and style references.

**Step 2:** Add buttons to open and close the bookmark pane. Place the viewer and script blocks in the Razor page. Ensure the document contains bookmarks before invoking the API, otherwise the pane will appear empty.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<button type="button" onclick="openBookmark()">Open Bookmark Pane</button>

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                   resourceUrl="https://cdn.syncfusion.com/ej2/31.1.17/dist/ej2-pdfviewer-lib"">
    </ejs-pdfviewer>
</div>

<script>
    function openBookmark() {
        var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
        viewer.bookmarkViewModule.openBookmarkPane();
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<button type="button" onclick="openBookmark()">Open Bookmark Pane</button>

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   serviceUrl="/Index"
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf">
    </ejs-pdfviewer>
</div>

<script>
    function openBookmark() {
        var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
        viewer.bookmarkViewModule.openBookmarkPane();
    }
</script>

{% endhighlight %}
{% endtabs %}

## Close the bookmark pane

To hide the bookmark pane, call the `closeBookmarkPane()` method. Use the following code:

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<button type="button" onclick="closeBookmark()">Close Bookmark Pane</button>

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                   resourceUrl="https://cdn.syncfusion.com/ej2/31.1.17/dist/ej2-pdfviewer-lib">
    </ejs-pdfviewer>
</div>

<script>
    function closeBookmark() {
        var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
        viewer.bookmarkViewModule.closeBookmarkPane();
    }
</script>
{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<button type="button" onclick="closeBookmark()">Close Bookmark Pane</button>

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   serviceUrl="/Index"
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf">
    </ejs-pdfviewer>
</div>

<script>
    function closeBookmark() {
        var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
        viewer.bookmarkViewModule.closeBookmarkPane();
    }
</script>

{% endhighlight %}
{% endtabs %}

[View sample on GitHub](https://github.com/SyncfusionExamples/asp-core-pdf-viewer-examples/tree/master/How%20to/Open%20and%20Close%20bookmark%20pane/PDFViewerSample)
