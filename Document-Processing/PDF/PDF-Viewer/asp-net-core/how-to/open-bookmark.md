---
layout: post
title: Open or close the bookmark pane in ASP.NET Core PDF Viewer | Syncfusion
description: Learn how to open or close the bookmark pane programmatically in the Syncfusion ASP.NET Core PDF Viewer by calling the bookmarkViewModule APIs.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Open or close the bookmark pane programmatically

The PDF Viewer exposes methods to toggle the bookmark pane at runtime. Call **openBookmarkPane()** to display the pane and **closeBookmarkPane()** to hide it. These APIs enable workflows where bookmarks are revealed only when users request them.

Follow these steps to add the bookmark toggle buttons:

**Step 1:** Create an ASP.NET Core PDF Viewer sample by following the [getting started instructions](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/asp-net-core/getting-started). Ensure that the Razor page includes the required Syncfusion EJ2 script and style references.

**Step 2:** Place a button and the PDF Viewer Tag Helper in the same Razor page. Add a script block after the viewer markup so the handler can retrieve the viewer instance and call the bookmark module when the button is clicked. If the button is disabled or the bookmark tree is empty, confirm that the loaded document contains bookmarks before invoking the API.

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
                   serviceUrl='/Index'
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

To close the bookmark pane with a button click, reuse the same structure and call the close method in the handler.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<button type="button" onclick="closeBookmark()">Close Bookmark Pane</button>

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                   resourceUrl="https://cdn.syncfusion.com/ej2/31.1.17/dist/ej2-pdfviewer-lib"">
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
                   serviceUrl='/Index'
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

[View sample in GitHub](https://github.com/SyncfusionExamples/asp-core-pdf-viewer-examples/tree/master/How%20to/Open%20and%20Close%20bookmark%20pane/PDFViewerSample)
