---
layout: post
title: Unload a PDF document programmatically in ASP.NET Core PDF Viewer | Syncfusion
description: Learn how to call the unload method in the Syncfusion ASP.NET Core PDF Viewer to clear the current PDF document programmatically.
platform: document-processing
control: PDF Viewer
publishingplatform: ASP.NET Core
documentation: ug
---

# Unload the PDF document programmatically

The Syncfusion<sup style="font-size:70%">&reg;</sup> ASP.NET Core PDF Viewer exposes the [**unload()**](https://ej2.syncfusion.com/documentation/api/pdfviewer/#unload) method to remove the currently displayed document, release associated resources, and reset the viewer UI. Use this approach when switching between files or clearing sensitive content after it has been reviewed.

Follow these steps to unload a PDF document programmatically:

**Step 1:** Create a PDF Viewer sample by following the [ASP.NET Core getting started guide](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/asp-net-core/getting-started) so the required scripts, styles, and controller endpoints are configured.

**Step 2:** Add the following markup and script to call `unload()` when the button is clicked. Place the script within the Razor page after the viewer element so the instance is available.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<button type="button" onclick="unload()">Unload Document</button>

<div style="width:100%;height:600px">
    <ejs-pdfviewer
        id="pdfviewer"
        documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf">
    </ejs-pdfviewer>
</div>

<script>
    // Unload the PDF document.
    function unload() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        viewer.unload();
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<button type="button" onclick="unload()">Unload Document</button>

<div style="width:100%;height:600px">
    <ejs-pdfviewer
        id="pdfviewer"
        serviceUrl='/Index'
        documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf">
    </ejs-pdfviewer>
</div>

<script>
    // Unload the PDF document.
    function unload() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        viewer.unload();
    }
</script>

{% endhighlight %}
{% endtabs %}


After calling `unload()`, the viewer removes the document and toolbar state until a new file is loaded. Apply the same pattern in both standalone and server-backed configurations to ensure cached data is cleared before loading a different PDF.

[View sample in GitHub](https://github.com/SyncfusionExamples/asp-core-pdf-viewer-examples/tree/master/How%20to/Unload%20the%20PDF%20document%20programmatically)
