---
layout: post
title: Select multi page annotations in ASP.NET Core PDF Viewer control | Syncfusion
description: Learn here all about Select multi page annotations in Syncfusion ASP.NET Core PDF Viewer control of Syncfusion Essential JS 2 and more.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Select multi-page annotations in ASP.NET Core PDF Viewer

The Syncfusion<sup style="font-size:70%">&reg;</sup> ASP.NET Core PDF Viewer allows you to treat TextMarkup annotations that span multiple pages as a single, unified annotation entity. This feature simplifies the interaction, selection, and management of highlights or underlines that cross page boundaries.

## Enable multi-page selection

Set the [`enableMultiPageAnnotation`](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_EnableMultiPageAnnotation) property to `true` to activate this behavior. When enabled, selecting any part of the multi-page annotation highlights the entire sequence across all pages. You can also export and import these unified annotations as a single record.

The following example demonstrates how to configure the `enableMultiPageAnnotation` property in both standalone and server-backed viewer setups.

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
