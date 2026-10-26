---
layout: post
title: How to Enable Resize Text in ASP.NET MVC PDF Viewer | Syncfusion
description: Enable or disable text resize inside form fields in the ASP.NET MVC PDF Viewer using the enableResizeText property for accessibility.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# How to Enable Resize Text in ASP.NET MVC PDF Viewer

To enable the resizer for the text markup annotation in Syncfusion PDF viewer, you can use the [**enableTextMarkupResizer**](https://help.syncfusion.com/cr/aspnetmvc-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_EnableTextMarkupResizer) property. The default value of the property is false.

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
