---
layout: post
title: Select multi page annotations in ASP.NET MVC Pdfviewer control | Syncfusion
description: Learn here all about Select multi page annotations in Syncfusion ASP.NET MVC Pdfviewer control of Syncfusion Essential JS 2 and more.
platform: document-processing
control: PDF Viewer
publishingplatform: ASP.NET MVC
documentation: ug
---

# Select multi page annotations in ASP.NET MVC Pdfviewer control

To select a multi-page TextMarkup annotation as a single annotation in a Syncfusion PDF viewer, you can use by enabling the [**EnableMultiPageAnnotation**](https://help.syncfusion.com/cr/aspnetmvc-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_EnableMultiPageAnnotation) property. By default it is `false`.

Here is an example of how you can use the [**EnableMultiPageAnnotation**](https://help.syncfusion.com/cr/aspnetmvc-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_EnableMultiPageAnnotation) property to select the multi page TextMarkup annotation as a single annotation, export and import multi page annotation:

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div id="e-pv-e-sign-pdfViewer-div">
    @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").EnableMultiPageAnnotation(true).Render()
</div>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<div id="e-pv-e-sign-pdfViewer-div">
    @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/PdfViewer/")).DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").EnableMultiPageAnnotation(true).Render()
</div>

{% endhighlight %}
{% endtabs %}
