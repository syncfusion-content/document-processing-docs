---
layout: post
title: Overlapped annotation in  Pdfviewer control | Syncfusion
description: Learn here all about Overlapped annotation in Syncfusion  Pdfviewer control of Syncfusion Essential JS 2 and more.
platform: document-processing
control: PDF Viewer
publishingplatform: ASP.NET MVC
documentation: ug
---

# Overlapped annotation in  Pdfviewer control

To get the overlapped annotations on a mouse click in a Syncfusion PDF Viewer, you can use the **annotationCollection** property of [**annotationSelect**](https://help.syncfusion.com/cr/aspnetmvc-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_AnnotationSelect) event.This event is triggered when the user clicks on an annotation in the PDF document.

Here is an example of how you can use the **annotationSelect** event to get the overlapped annotations on a mouse click in a Syncfusion PDF Viewer:

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div id="e-pv-e-sign-pdfViewer-div">
    @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").AnnotationSelect("annotationSelected").Render()
</div>

<script>
    function annotationSelected(args) {
        console.log('Annotation selected with ID: ' + args.annotationCollection);
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<div id="e-pv-e-sign-pdfViewer-div">
    @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/PdfViewer/")).DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").AnnotationSelect("annotationSelected").Render()
</div>

<script>
    function annotationSelected(args) {
        console.log('Annotation selected with ID: ' + args.annotationCollection);
    }
</script>

{% endhighlight %}
{% endtabs %}
