---
layout: post
title: Identify added annotation mode in ASP.NET Core PDF Viewer control | Syncfusion
description: Learn here all about Identify added annotation mode in Syncfusion ASP.NET Core PDF Viewer control of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Identify added annotation mode
publishingplatform: ASP.NET Core
documentation: ug
---

# Identify added annotation mode in ASP.NET Core PDF Viewer control

The PDF Viewer library allows you to identify whether the added annotations in PDF document is UI drawn, imported or existing annotation. Annotation mode can be identified using the [**annotationAddMode**](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_AnnotationAdd) property of [**annotationSelect**](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_AnnotationSelect) event.

**Step 1:** Follow the steps provided in the [link](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/asp-net-core/getting-started/) to create simple PDF Viewer sample.

**Step 2:** The following code snippet explains how to identify added annotation mode.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer  id="pdfviewer"
                    style="height:600px"
                    documentPath="https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf"
                    resourceUrl="https://cdn.syncfusion.com/ej2/31.1.17/dist/ej2-pdfviewer-lib"
                    annotationSelect=annotationSelected>
    </ejs-pdfviewer>
</div>

<script>
    function annotationSelected(args) {
        console.log(args.annotationAddMode);
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf"
                   serviceUrl="/api/PdfViewer"
                   annotationSelect=annotationSelected>
    </ejs-pdfviewer>
</div>

<script>
    function annotationSelected(args) {
        console.log(args.annotationAddMode);
    }
</script>

{% endhighlight %}
{% endtabs %}
