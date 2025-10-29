---
layout: post
title: Delete an annotation in ASP.NET MVC PDF Viewer | Syncfusion
description: Learn how to delete a specific annotation in the Syncfusion ASP.NET MVC PDF Viewer using the deleteAnnotationById method.
platform: document-processing
control: PDF Viewer
publishingplatform: ASP.NET MVC
documentation: ug
---

# Delete an annotation in the ASP.NET MVC PDF Viewer

Use the `deleteAnnotationById()` method to remove a specific annotation from a PDF document by its id.

## Steps to delete a specific annotation

**Step 1:** Follow the steps provided in the [Syncfusion ASP.NET MVC PDF Viewer getting started guide](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/asp-net-mvc/getting-started) to create a simple PDF Viewer sample.

**Step 2:** Use the following code to delete a specific annotation using `deleteAnnotationById()`.


{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<button onclick="deleteAnnotationbyId()">deleteAnnotationbyId</button>

<div id="e-pv-e-sign-pdfViewer-div">
    @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
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

<div id="e-pv-e-sign-pdfViewer-div">
    @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/PdfViewer/")).DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>

<script>
    function deleteAnnotationbyId() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        viewer.annotationModule.deleteAnnotationById(viewer.annotationCollection[0].annotationId);
    }
</script>

{% endhighlight %}
{% endtabs %}
