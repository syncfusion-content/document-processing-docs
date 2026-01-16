---
layout: post
title: Enable resize in ASP.NET MVC PDF Viewer control | Syncfusion
description: Learn here all about Enable resize in Syncfusion ASP.NET MVC PDF Viewer control of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Enable resize
publishingplatform: ASP.NET MVC
documentation: ug
---

# Enable resize in ASP.NET MVC PDF Viewer control

To enable the resizer for the text markup annotation in Syncfusion PDF viewer, you can use the [**enableTextMarkupResizer**](https://help.syncfusion.com/cr/aspnetmvc-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_EnableTextMarkupResizer) property. Default value of the property is false.

Here is an example of how you can enable the resizer for the text markup annotation:

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div id="e-pv-e-sign-pdfViewer-div">
    @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").EnableTextMarkupResizer(true).Render()
</div>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<div id="e-pv-e-sign-pdfViewer-div">
    @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/PdfViewer/")).DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").EnableTextMarkupResizer(true).Render()
</div>

{% endhighlight %}
{% endtabs %}
