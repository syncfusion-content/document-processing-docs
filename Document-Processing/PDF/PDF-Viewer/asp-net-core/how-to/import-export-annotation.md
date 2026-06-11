---
layout: post
title: Import and export annotations in ASP.NET Core PDF Viewer | Syncfusion
description: Learn how to import and export annotations as objects, JSON, or XFDF in the Syncfusion ASP.NET Core PDF Viewer.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Import and export annotations in ASP.NET Core PDF Viewer

Save and restore PDF annotations by exporting them in various formats (JSON, XFDF, or object) and importing them back into the viewer. This enables scenarios such as saving user annotations to a database or transferring annotations between documents.

Use the [**exportAnnotationsAsObject()**](https://ej2.syncfusion.com/documentation/api/pdfviewer#exportannotationsasobject) method to export annotations as objects, which can then be imported back. Only annotation objects exported from the PDF Viewer are compatible with the import function.

Follow these steps to implement annotation import and export functionality:

**Step 1:** Follow the [Syncfusion ASP.NET Core PDF Viewer getting started guide](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/asp-net-core/getting-started) to create a basic PDF Viewer instance.

**Step 2:** Use the following code snippets to implement annotation import and export functionality:

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
@page "{handler?}"
@model IndexModel
@{
    ViewData["Title"] = "Home page";
}

<button type="button" onclick="exportAsJson()">Export Annotation As Json</button>
<button type="button" onclick="exportAsXfdf()">Export Annotation As Xfdf</button>
<button type="button" onclick="exportAnnotation()">Export Annotation</button>
<button type="button" onclick="importAnnotation()">Import Annotation</button>

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf">
    </ejs-pdfviewer>
</div>

<script type ="text/javascript">

     var exportObject;
    //Export annotation as Json
    function exportAsJson(){
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        viewer.exportAnnotation('Json');
    }
    //Export annotation as Xfdf
    function exportAsXfdf(){
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        viewer.exportAnnotation('Xfdf');
    }
    //Export annotation as object.
    function exportAnnotation() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        viewer.exportAnnotationsAsObject().then(function (value) {
            exportObject = value;
        });
    }
    //Import annotation that are exported as object.
    function importAnnotation() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        viewer.importAnnotation(JSON.parse(exportObject));
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

@page "{handler?}"
@model IndexModel
@{
    ViewData["Title"] = "Home page";
}

<button type="button" onclick="exportAsJson()">Export Annotation As Json</button>
<button type="button" onclick="exportAsXfdf()">Export Annotation As Xfdf</button>
<button type="button" onclick="exportAnnotation()">Export Annotation</button>
<button type="button" onclick="importAnnotation()">Import Annotation</button>

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   serviceUrl="/Index"
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf">
    </ejs-pdfviewer>
</div>

<script type="text/javascript">
    var exportObject;
    // Export annotations in JSON format
    function exportAsJson() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        viewer.exportAnnotation('Json');
    }
    // Export annotations in XFDF format
    function exportAsXfdf() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        viewer.exportAnnotation('Xfdf');
    }
    // Export annotations as object
    function exportAnnotation() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        viewer.exportAnnotationsAsObject().then(function (value) {
            exportObject = value;
        });
    }
    // Import previously exported annotation objects
    function importAnnotation() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        viewer.importAnnotation(JSON.parse(exportObject));
    }
</script>

{% endhighlight %}
{% endtabs %}

[View sample in GitHub](https://github.com/SyncfusionExamples/asp-core-pdf-viewer-examples/tree/master/How%20to/Import%20and%20Export%20annotation%20as%20object)
