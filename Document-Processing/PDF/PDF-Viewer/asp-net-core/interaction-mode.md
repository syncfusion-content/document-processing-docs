---
layout: post
title: Interaction mode in ASP.NET Core PDF Viewer | Syncfusion
description: Learn how to switch between selection and panning modes in the Syncfusion ASP.NET Core PDF Viewer to easily select content or navigate pages.
platform: document-processing
control: PDF Viewer
documentation: ug
---


# PDF Viewer Interaction Settings

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

![Selection mode in the PDF Viewer](./images/selection.png)

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