---
layout: post
title: Toggle annotation visibility in ASP.NET Core PDF Viewer | Syncfusion
description: Learn how to toggle annotation visibility in the Syncfusion ASP.NET Core PDF Viewer by exporting and restoring annotations with custom buttons.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Show and hide annotations in ASP.NET Core PDF Viewer

Temporarily hide and restore annotations by exporting them to memory, removing them from the view, and then re-importing them on demand. This is useful for presentations or comparing annotated versus clean document versions.

Follow these steps to implement annotation visibility toggling:

**Step 1:** Follow the [ASP.NET Core PDF Viewer getting started guide](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/asp-net-core/getting-started) to set up the viewer with required scripts, styles, and configuration.

**Step 2:** Add buttons to export, clear, and re-import annotations. Place the markup and script in the Razor page to execute after the viewer initializes:

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

@page "{handler?}"
@using ShowHideAnnotations.Pages
@model IndexModel
@{
ViewData["Title"] = "Home page";
}
<div class="text-center">
    <button id="hideBtn">Hide Annotations</button>
    <button id="unhideBtn">Show Annotations</button>
    <ejs-pdfviewer id="pdfviewer" style="height:600px" resourceUrl="https://cdn.syncfusion.com/ej2/30.1.37/dist/ej2-pdfviewer-lib" documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf">
</ejs-pdfviewer>
</div>
<script type="text/javascript">
    var exportObject = null;
    document.addEventListener('DOMContentLoaded', function() {
    var pdfviewer = document.getElementById('pdfviewer').ej2_instances[0];
        function HideAnnotations() {
            pdfviewer.exportAnnotationsAsObject().then(function(value) {
            exportObject = value;
        pdfviewer.deleteAnnotations();
    });
    }
    function UnHideAnnotations() {
        if (exportObject) {
        pdfviewer.importAnnotation(JSON.parse(exportObject));
        }
    }
    document.getElementById('hideBtn').addEventListener('click', HideAnnotations);
    document.getElementById('unhideBtn').addEventListener('click', UnHideAnnotations);
    });
</script>

{% endhighlight %}
{% endtabs %}

- The `exportAnnotationsAsObject()` method returns a promise containing serialized annotation data. Store this securely if it contains sensitive information.
- The `resourceUrl` must match the application's PDF Viewer library version.
- In server-backed scenarios, replace `resourceUrl` with `serviceUrl` pointing to the ASP.NET Core controller.

[View sample on GitHub](https://github.com/SyncfusionExamples/asp-core-pdf-viewer-examples/tree/master/How%20to/ShowHideAnnotations)
