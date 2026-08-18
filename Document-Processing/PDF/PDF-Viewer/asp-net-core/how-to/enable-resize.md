---
layout: post
title: How to Enable Resize Text in ASP.NET Core PDF Viewer | Syncfusion
description: Enable or disable text resize inside form fields in the ASP.NET Core PDF Viewer using the enableResizeText property for accessibility.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# How to Enable Resize Text in ASP.NET Core PDF Viewer

The PDF Viewer has the option to display resizer for text markup annotations using the **enableTextMarkupResizer** property. This feature allows users to adjust the dimensions of the markup after it has been added to the document.

The default value for this property is `false`.

## Enable text markup resizer

Set the **enableTextMarkupResizer** property to `true` in the Razor view to display resizer handles on text markup annotations:

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
