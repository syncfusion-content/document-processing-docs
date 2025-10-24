---
layout: post
title: Overlapped annotation in ASP.NET Core Pdfviewer control | Syncfusion
description: Learn here all about Overlapped annotation in Syncfusion ASP.NET Core Pdfviewer control of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Overlapped annotation
publishingplatform: ASP.NET Core
documentation: ug
---

# Overlapped annotation in ASP.NET Core Pdfviewer control

To get the overlapped annotations on a mouse click in a Syncfusion PDF Viewer, you can use the **annotationCollection** property of [**annotationSelect**](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_AnnotationSelect) event.This event is triggered when the user clicks on an annotation in the PDF document.

Here is an example of how you can use the **annotationSelect** event to get the overlapped annotations on a mouse click in a Syncfusion PDF Viewer:

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
