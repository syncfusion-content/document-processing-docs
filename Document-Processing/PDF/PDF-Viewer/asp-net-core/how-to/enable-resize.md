---
layout: post
title: Enable resize in ASP.NET Core PDF Viewer control | Syncfusion
description: Learn here all about Enable resize in Syncfusion ASP.NET Core PDF Viewer control of Syncfusion Essential JS 2 and more.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Resize text markup annotations in ASP.NET Core PDF Viewer

The PDF Viewer has the option to display resizers for text markup annotations using the **enableTextMarkupResizer** property. This feature allows users to adjust the dimensions of the markup after it has been added to the document.

The default value for this property is `false`.

## Enable text markup resizer

Set the **EnableTextMarkupResizer** property to `true` in the Razor view to display resizer handles on text markup annotations:

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf"
                   resourceUrl="https://cdn.syncfusion.com/ej2/31.1.17/dist/ej2-pdfviewer-lib"
                   enableTextMarkupResizer="true">
    </ejs-pdfviewer>
</div>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf"
                   serviceUrl="/api/PdfViewer"
                   enableTextMarkupResizer="true">
    </ejs-pdfviewer>
</div>

{% endhighlight %}
{% endtabs %}
