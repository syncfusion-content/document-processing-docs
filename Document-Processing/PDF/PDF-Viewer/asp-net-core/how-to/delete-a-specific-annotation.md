---
layout: post
title: Delete an annotation in ASP.NET Core PDF Viewer | Syncfusion
description: Learn how to delete a specific annotation in the Syncfusion ASP.NET Core PDF Viewer using the deleteAnnotationById method.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Delete a specific annotation in ASP.NET Core PDF Viewer

Remove specific annotations programmatically using the `deleteAnnotationById()` method. This allows you to implement custom deletion workflows based on annotation identifiers or user interactions.

## Remove annotations programmatically

**Step 1:** Follow the [Syncfusion ASP.NET Core PDF Viewer getting started guide](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/asp-net-core/getting-started) to set up a basic PDF Viewer sample.

**Step 2:** Add a button and script to delete an annotation by its unique ID. The following example demonstrates how to remove the first annotation from the viewer's collection:

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

[View sample on GitHub](https://github.com/SyncfusionExamples/asp-core-pdf-viewer-examples/tree/master/How%20to/Delete%20a%20specific%20annotation%20using%20deleteAnnotationById)
