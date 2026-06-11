---
layout: post
title: Unload a PDF document programmatically in ASP.NET Core PDF Viewer | Syncfusion
description: Learn how to call the unload method in the Syncfusion ASP.NET Core PDF Viewer to clear the current PDF document programmatically.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Unload PDF documents programmatically in ASP.NET Core PDF Viewer

Clear the current PDF document and release associated resources by calling the [**unload()**](https://ej2.syncfusion.com/documentation/api/pdfviewer/#unload) method. This resets the viewer UI and is useful when switching between documents or clearing sensitive content after review.

Follow these steps to unload a PDF document programmatically:

**Step 1:** Follow the [ASP.NET Core PDF Viewer getting started guide](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/asp-net-core/getting-started) to set up the required scripts, styles, and controller configuration.

**Step 2:** Add a button and script to call the `unload()` method. Place the script in your Razor page after the viewer element:

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
        serviceUrl="/Index"
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

After calling `unload()`, the viewer clears the document, toolbar state, and cached data until a new PDF is loaded. This pattern works identically in both standalone and server-backed configurations, ensuring clean state management before loading different documents.

[View sample on GitHub](https://github.com/SyncfusionExamples/asp-core-pdf-viewer-examples/tree/master/How%20to/Unload%20the%20PDF%20document%20programmatically)
