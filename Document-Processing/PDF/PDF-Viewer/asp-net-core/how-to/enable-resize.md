---
layout: post
title: Enable resize in ASP.NET Core PDF Viewer control | Syncfusion
description: Learn here all about Enable resize in Syncfusion ASP.NET Core PDF Viewer control of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Enable resize
publishingplatform: ASP.NET Core
documentation: ug
---

# Enable resize in ASP.NET Core PDF Viewer control

To enable the resizer for the text markup annotation in Syncfusion PDF viewer, you can use the [**enableTextMarkupResizer**](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_EnableTextMarkupResizer) property. Default value of the property is false.

Here is an example of how you can enable the resizer for the text markup annotation:

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf"
                   resourceUrl="https://cdn.syncfusion.com/ej2/31.1.17/dist/ej2-pdfviewer-lib"
                   enableTextMarkupResizer=false>
    </ejs-pdfviewer>
</div>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf"
                   serviceUrl="/api/PdfViewer"
                   enableTextMarkupResizer=false>
    </ejs-pdfviewer>
</div>

{% endhighlight %}
{% endtabs %}
