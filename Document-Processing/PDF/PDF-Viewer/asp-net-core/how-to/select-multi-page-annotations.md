---
layout: post
title: Select multi page annotations in ASP.NET Core Pdfviewer control | Syncfusion
description: Learn here all about Select multi page annotations in Syncfusion ASP.NET Core Pdfviewer control of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Select multi page annotations
publishingplatform: ASP.NET Core
documentation: ug
---

# Select multi page annotations in ASP.NET Core Pdfviewer control

To select a multi-page TextMarkup annotation as a single annotation in a Syncfusion PDF viewer, you can use by enabling the [**enableMultiPageAnnotation**](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_EnableMultiPageAnnotation) property. By default it is `false`.

Here is an example of how you can use the [**enableMultiPageAnnotation**](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_EnableMultiPageAnnotation) property to select the multi page TextMarkup annotation as a single annotation, export and import multi page annotation:

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                   enableMultiPageAnnotation=true>
    </ejs-pdfviewer>
</div>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   serviceUrl='/Index'
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                   enableMultiPageAnnotation=true>
    </ejs-pdfviewer>
</div>

{% endhighlight %}
{% endtabs %}
