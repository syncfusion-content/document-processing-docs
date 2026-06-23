---
layout: post
title: Text selection in ASP.NET Core PDF Viewer control | Syncfusion
description: Learn how to enable or disable text selection, programmatically select regions, copy selected text, and handle selection events in the Syncfusion ASP.NET Core PDF Viewer.
platform: document-processing
control: Text selection
documentation: ug
---
# Text Selection in ASP.NET Core PDF Viewer

The TextSelection module enables selecting and copying text from loaded PDF documents. Text selection is enabled by default and can be configured, controlled programmatically, and monitored through events.

## Enable or Disable Text Selection

The **enableTextSelection** property enables or disables selecting text in the PDF Viewer.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                enableTextSelection="false">
    </ejs-pdfviewer>
</div>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}
<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                serviceUrl="/api/PdfViewer"
                documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                enableTextSelection="false">
    </ejs-pdfviewer>
</div>

{% endhighlight %}
{% endtabs %}

## Text Selection Events

User interaction with text can be monitored using events.

### textSelectionStart

The **textSelectionStart** event triggers when selection is initiated. Typical use cases include disabling conflicting UI, logging, or customizing selection behavior.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                textSelectionStart="textSelectionStarted">
    </ejs-pdfviewer>
</div>

<script>
    function textSelectionStarted(args) {
        // args.pageNumber, args.bounds provide the starting context
        console.log('Selection started', args);
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}
<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                serviceUrl="/api/PdfViewer"
                documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                textSelectionStart="textSelectionStarted">
    </ejs-pdfviewer>
</div>

<script>
    function textSelectionStarted(args) {
        // args.pageNumber, args.bounds provide the starting context
        console.log('Selection started', args);
    }
</script>

{% endhighlight %}
{% endtabs %}

### textSelectionEnd

The **textSelectionEnd** event triggers when selection is completed. It is useful for reading selected content, enabling context actions, or persisting analytics.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                textSelectionEnd="textSelectionEnded">
    </ejs-pdfviewer>
</div>

<script>
    function textSelectionEnded(args) {
        // For example, automatically copy or show a custom menu
        console.log('Selection ended', args);
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}
<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                serviceUrl="/api/PdfViewer"
                documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                textSelectionEnd="textSelectionEnded">
    </ejs-pdfviewer>
</div>

<script>
    function textSelectionEnded(args) {
        // For example, automatically copy or show a custom menu
        console.log('Selection ended', args);
    }
</script>

{% endhighlight %}
{% endtabs %}

## See also

* [Text search](./text-search)
* [Interaction modes](./interaction-mode)