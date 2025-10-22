---
layout: post
title: Toggle annotation visibility in ASP.NET MVC PDF Viewer | Syncfusion
description: Learn how to toggle annotation visibility in the Syncfusion ASP.NET MVC PDF Viewer by exporting and restoring annotations with custom buttons.
platform: document-processing
control: PDF Viewer
publishingplatform: ASP.NET MVC
documentation: ug
---

# Toggle annotation visibility

The Syncfusion<sup style="font-size:70%">&reg;</sup> ASP.NET MVC PDF Viewer lets developers temporarily hide annotations by exporting them, clearing them from the UI, and then importing them back on demand. This workflow is helpful when presenters need to focus on document content or compare marked-up and clean versions of the same file.

Follow these steps to add annotation toggle controls:

**Step 1:** Create a PDF Viewer sample by following the [ASP.NET MVC getting started guide](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/asp-net-mvc/getting-started). Ensure the viewer scripts, styles, and Razor Page model are registered before wiring annotation logic.

**Step 2:** Add buttons that export and delete annotations to hide them, and re-import the cached annotations to show them again. Place the markup and script within the Razor page so the code runs after the viewer is initialized.

{% tabs %}
{% highlight html tabtitle="Standalone" %}

@using Syncfusion.EJ2
@{
    ViewBag.Title = "Home Page";
}
<div>
    <div class="button-container" style="margin-bottom: 10px;">
        <button id="hideBtn" class="e-btn e-primary">Hide Annotations</button>
        <button id="unhideBtn" class="e-btn e-primary">Show Annotations</button>
    </div>
    <div style="height:500px;width:100%;">
        @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").ResourceUrl("https://cdn.syncfusion.com/ej2/30.1.37/dist/ej2-pdfviewer-lib").Render()
    </div>
</div>

<script type="text/javascript">
    var exportObject;

    // Function to hide annotations
    function HideAnnotations() {
        var pdfviewer = document.getElementById('pdfviewer').ej2_instances[0];
        pdfviewer.exportAnnotationsAsObject().then(function(value) {
            exportObject = value;
            pdfviewer.deleteAnnotations();
        });
    }

    // Function to unhide annotations
    function UnHideAnnotations() {
        var pdfviewer = document.getElementById('pdfviewer').ej2_instances[0];
        if (exportObject) {
            pdfviewer.importAnnotation(JSON.parse(exportObject));
        }
    }

    // Add event listeners to buttons
    document.getElementById('hideBtn').addEventListener('click', HideAnnotations);
    document.getElementById('unhideBtn').addEventListener('click', UnHideAnnotations);
</script>

{% endhighlight %}
{% endtabs %}

The `exportAnnotationsAsObject` method returns a promise whose resolved value stores the serialized annotations; persist this object securely if it contains sensitive content. The `resourceUrl` must reference a PDF Viewer build that matches your application version, and similar logic can be applied in server-backed samples by replacing the `resourceUrl` with `serviceUrl`.

[View sample in GitHub](https://github.com/SyncfusionExamples/mvc-pdf-viewer-examples/tree/master/How%20to)
