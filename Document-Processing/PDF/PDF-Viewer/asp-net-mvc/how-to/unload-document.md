---
layout: post
title: Unload a PDF document programmatically in ASP.NET MVC PDF Viewer | Syncfusion
description: Learn how to call the unload method in the Syncfusion ASP.NET MVC PDF Viewer to clear the current PDF document programmatically.
platform: document-processing
control: PDF Viewer
publishingplatform: ASP.NET MVC
documentation: ug
---

# Unload the PDF document programmatically

The Syncfusion<sup style="font-size:70%">&reg;</sup> ASP.NET MVC PDF Viewer exposes the [**unload()**](https://ej2.syncfusion.com/documentation/api/pdfviewer/#unload) method to remove the currently displayed document, release associated resources, and reset the viewer UI. Use this approach when switching between files or clearing sensitive content after it has been reviewed.

Follow these steps to unload a PDF document programmatically:

**Step 1:** Create a PDF Viewer sample by following the [ASP.NET MVC getting started guide](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/asp-net-mvc/getting-started) so the required scripts, styles, and controller endpoints are configured.

**Step 2:** Add the following markup and script to call `unload()` when the button is clicked. Place the script within the Razor page after the viewer element so the instance is available.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<button type="button" onclick="unload()">Unload Document</button>

<div id="e-pv-e-sign-pdfViewer-div">
    @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
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

<div id="e-pv-e-sign-pdfViewer-div">
    @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/PdfViewer/")).DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
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

[how to unload the PDF document programmatically](https://www.syncfusion.com/downloads/support/directtrac/general/ze/EJ2MvcSample-1421635547.zip)
