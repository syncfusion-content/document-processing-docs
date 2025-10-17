---
layout: post
title: Toggle annotation visibility in ASP.NET Core PDF Viewer | Syncfusion
description: Learn how to toggle annotation visibility in the Syncfusion ASP.NET Core PDF Viewer by exporting and restoring annotations with custom buttons.
platform: document-processing
control: PDF Viewer
publishingplatform: ASP.NET Core
documentation: ug
---

# Toggle annotation visibility

The Syncfusion<sup style="font-size:70%">&reg;</sup> ASP.NET Core PDF Viewer lets developers temporarily hide annotations by exporting them, clearing them from the UI, and then importing them back on demand. This workflow is helpful when presenters need to focus on document content or compare marked-up and clean versions of the same file.

Follow these steps to add annotation toggle controls:

**Step 1:** Create a PDF Viewer sample by following the [ASP.NET Core getting started guide](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/asp-net-core/getting-started). Ensure the viewer scripts, styles, and Razor Page model are registered before wiring annotation logic.

**Step 2:** Add buttons that export and delete annotations to hide them, and re-import the cached annotations to show them again. Place the markup and script within the Razor page so the code runs after the viewer is initialized.

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

The `exportAnnotationsAsObject` method returns a promise whose resolved value stores the serialized annotations; persist this object securely if it contains sensitive content. The `resourceUrl` must reference a PDF Viewer build that matches your application version, and similar logic can be applied in server-backed samples by replacing the `resourceUrl` with `serviceUrl`.

[View sample in GitHub](https://github.com/SyncfusionExamples/asp-core-pdf-viewer-examples/tree/master/How%20to/ShowHideAnnotations)