---
layout: post
title: Identify added annotation mode in ASP.NET MVC PDF Viewer control | Syncfusion
description: Learn here all about Identify added annotation mode in Syncfusion ASP.NET MVC PDF Viewer control of Syncfusion Essential JS 2 and more.
platform: document-processing
control: PDF Viewer
publishingplatform: ASP.NET MVC
documentation: ug
---

# Identify added annotation mode in ASP.NET MVC PDF Viewer control

The PDF Viewer library allows you to identify whether the added annotations in PDF document is UI drawn, imported or existing annotation. Annotation mode can be identified using the [**annotationAddMode**](https://help.syncfusion.com/cr/aspnetmvc-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_AnnotationAdd) property of [**annotationSelect**](https://help.syncfusion.com/cr/aspnetmvc-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_AnnotationSelect) event.

**Step 1:** Follow the steps provided in the [link](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/asp-net-mvc/getting-started/) to create simple PDF Viewer sample.

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
