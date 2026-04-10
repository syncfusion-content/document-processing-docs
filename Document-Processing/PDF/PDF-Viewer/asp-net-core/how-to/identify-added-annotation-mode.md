---
layout: post
title: Identify annotation mode in ASP.NET Core PDF Viewer | Syncfusion
description: Learn here all about Identify added annotation mode in Syncfusion ASP.NET Core PDF Viewer control of Syncfusion Essential JS 2 and more.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Identify annotation addition mode

The Syncfusion<sup style="font-size:70%">&reg;</sup> ASP.NET Core PDF Viewer allows you to verify how an annotation was added to the document. By inspecting the [`annotationAddMode`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.PdfViewer.PdfViewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_AnnotationAdd) property within the [`annotationSelect`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.PdfViewer.PdfViewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_AnnotationSelect) event, you can distinguish between annotations that were manually drawn by the user, imported from a data source, or pre-existing in the PDF file.

## Implementation guide

Follow these steps to identify the addition mode of an annotation:

**Step 1:** Initialize a PDF Viewer project by following the [ASP.NET Core getting started guide](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/asp-net-core/getting-started).

**Step 2:** Subscribe to the `annotationSelect` event and log the `annotationAddMode` property from the event arguments.

The following example demonstrates this implementation across standalone and server-backed configurations:

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer  id="pdfviewer"
                    style="height:600px"
                    documentPath="https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf"
                    resourceUrl="https://cdn.syncfusion.com/ej2/31.1.17/dist/ej2-pdfviewer-lib">
    </ejs-pdfviewer>
</div>

<script>
    const viewer = document.getElementById("pdfviewer").ej2_instances[0];
    viewer.annotationSelect = function annotationSelected(args) {
        console.log(args.annotationAddMode);
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf"
                   serviceUrl="/api/PdfViewer">
    </ejs-pdfviewer>
</div>

<script>
    const viewer = document.getElementById("pdfviewer").ej2_instances[0];
    viewer.annotationSelect = function annotationSelected(args) {
        console.log(args.annotationAddMode);
    }
</script>

{% endhighlight %}
{% endtabs %}
