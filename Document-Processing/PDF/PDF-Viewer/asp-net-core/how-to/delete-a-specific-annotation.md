---
layout: post
title: Delete an annotation in ASP.NET Core PDF Viewer | Syncfusion
description: Learn how to delete a specific annotation in the Syncfusion ASP.NET Core PDF Viewer using the deleteAnnotationById method.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Delete an annotation in the ASP.NET Core PDF Viewer

Use the `deleteAnnotationById()` method to remove a specific annotation from a PDF document by its id.

## Steps to delete a specific annotation

**Step 1:** Follow the steps provided in the [Syncfusion ASP.NET Core PDF Viewer getting started guide](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/asp-net-core/getting-started) to create a simple PDF Viewer sample.

**Step 2:** Use the following code to delete a specific annotation using `deleteAnnotationById()`.


{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<button onclick="deleteAnnotationbyId()">deleteAnnotationbyId</button>

<div style="width:100%;height:600px">
    <ejs-pdfviewer
        id="pdfviewer"
        documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf">
    </ejs-pdfviewer>
</div>


<script>
    function deleteAnnotationbyId() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        viewer.annotationModule.deleteAnnotationById(viewer.annotationCollection[0].annotationId);
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<button onclick="deleteAnnotationbyId()">deleteAnnotationbyId</button>

<div style="width:100%;height:600px">
    <ejs-pdfviewer
        id="pdfviewer"
        serviceUrl='/Index'
        documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf">
    </ejs-pdfviewer>
</div>

<script>
    function deleteAnnotationbyId() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        viewer.annotationModule.deleteAnnotationById(viewer.annotationCollection[0].annotationId);
    }
</script>

{% endhighlight %}
{% endtabs %}
 
[View sample in GitHub](https://github.com/SyncfusionExamples/asp-core-pdf-viewer-examples/tree/master/How%20to/Delete%20a%20specific%20annotation%20using%20deleteAnnotationById)
