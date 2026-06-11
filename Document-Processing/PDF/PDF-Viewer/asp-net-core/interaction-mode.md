---
layout: post
title: Interaction mode in ASP.NET Core PDF Viewer | Syncfusion
description: Learn how to use selection and panning interaction modes in the Syncfusion ASP.NET Core PDF Viewer.
platform: document-processing
control: PDF Viewer
documentation: ug
---


# Interaction Mode in PDF Viewer

The PDF Viewer provides two interaction modes for working with loaded PDF documents: selection mode and panning mode.

## Selection Mode

In selection mode, text can be selected and copied from the loaded PDF document. Panning and touch-based scrolling are disabled. This is useful for copying and sharing text content. Text selection can be enabled or disabled as shown in the following example:

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                   enableTextSelection="true">
    </ejs-pdfviewer>
</div>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   serviceUrl="/api/PdfViewer"
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                   enableTextSelection="true">
    </ejs-pdfviewer>
</div>

{% endhighlight %}
{% endtabs %}

![Alt text](./images/selection.png)

## Panning Mode

In panning mode, panning and touch-based scrolling are enabled, while text selection is disabled.

![Panning mode interface](./images/pan.png)

The interaction mode can be switched using the following example:

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                   InteractionMode=@Syncfusion.EJ2.PdfViewer.InteractionMode.Pan>
    </ejs-pdfviewer>
</div>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   serviceUrl="/api/PdfViewer"
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                   InteractionMode=@Syncfusion.EJ2.PdfViewer.InteractionMode.Pan>
    </ejs-pdfviewer>
</div>

{% endhighlight %}
{% endtabs %}

## See also

* [Toolbar items](./toolbar)
* [Feature Modules](./feature-module)