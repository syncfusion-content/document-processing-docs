---
layout: post
title: How to Identify the Added Annotation Mode in ASP.NET MVC | Syncfusion
description: Identify the annotation mode that was used to add an annotation in the ASP.NET MVC PDF Viewer so you can branch on the annotation type in your code.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# How to Identify the Added Annotation Mode in ASP.NET MVC PDF Viewer

The PDF Viewer library allows you to identify whether the added annotations in a PDF document are UI drawn, imported, or existing annotations. Annotation mode can be identified using the [**annotationAddMode**](https://help.syncfusion.com/cr/aspnetmvc-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_AnnotationAdd) property of the [**annotationSelect**](https://help.syncfusion.com/cr/aspnetmvc-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_AnnotationSelect) event.

**Step 1:** Follow the steps provided in the [link](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/asp-net-mvc/getting-started) to create simple PDF Viewer sample.

**Step 2:** The following code snippet explains how to identify added annotation mode.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div id="e-pv-e-sign-pdfViewer-div">
    @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").AnnotationSelect("annotationSelected").Render()
</div>

<script>
    function annotationSelected(args) {
        console.log(args.annotationAddMode);
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<div id="e-pv-e-sign-pdfViewer-div">
    @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").AnnotationSelect("annotationSelected").Render()
</div>

<script>
    function annotationSelected(args) {
        console.log(args.annotationAddMode);
    }
</script>

{% endhighlight %}
{% endtabs %}
