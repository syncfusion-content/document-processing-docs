---
layout: post
title: How to Handle Overlapped Annotations in ASP.NET Core PDF | Syncfusion
description: Handle overlapping annotations in the ASP.NET Core PDF Viewer so users can select, move, and edit the right annotation when several are stacked on a page.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# How to Handle Overlapped Annotations in ASP.NET Core PDF Viewer

The Syncfusion<sup style="font-size:70%">&reg;</sup> ASP.NET Core PDF Viewer allows you to identify all annotations that occupy the same spatial coordinates when a user clicks or taps the document. This is particularly useful for managing stacked or closely grouped highlights, notes, or shapes.

## Accessing overlapped annotations

Collection of overlapping annotations can be retrieved by inspecting the `annotationCollection` property within the [`annotationSelect`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.PdfViewer.PdfViewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_AnnotationSelect) event arguments. This event triggers automatically whenever an annotation is selected in the viewer.

The following example demonstrates how to capture and log the IDs of all overlapping annotations during a selection event:

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                documentPath="https://cdn.syncfusion.com/content/pdf/blazor-annotations.pdf"
                annotationSelect="annotationSelected">
    </ejs-pdfviewer>
</div>

<script>
    function annotationSelected(args) {
        console.log('Annotation selected with ID: ' + args.annotationCollection);
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}
<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                serviceUrl="/api/PdfViewer"
                documentPath="https://cdn.syncfusion.com/content/pdf/blazor-annotations.pdf"
                annotationSelect="annotationSelected">
    </ejs-pdfviewer>
</div>

<script>
    function annotationSelected(args) {
        console.log('Annotation selected with ID: ' + args.annotationCollection);
    }
</script>

{% endhighlight %}
{% endtabs %}
