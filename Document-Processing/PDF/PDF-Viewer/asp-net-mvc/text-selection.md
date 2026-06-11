---
layout: post
title: Text_selection in ASP.NET MVC PDF Viewer Component
description: Learn here all about Text_selection in Syncfusion ASP.NET MVC PDF Viewer component of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Text_selection
publishingplatform: ASP.NET MVC
documentation: ug
---

# Text selection in ASP.NET MVC PDF Viewer control

The TextSelection module enables users to select and copy text from the loaded PDF document. Text selection is enabled by default and can be configured, controlled programmatically, and monitored through events.

## Enable or disable text selection

Use the enableTextSelection property to enable or disable selecting text in the PDF Viewer.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div id="e-pv-e-sign-pdfViewer-div">
    @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").EnableTextSelection(true).Render()
</div>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<div id="e-pv-e-sign-pdfViewer-div">
    @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/PdfViewer/")).DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").EnableTextSelection(true).Render()
</div>

{% endhighlight %}
{% endtabs %}

## Text selection events

Monitor user interaction with text using events.

### textSelectionStart

The textSelectionStart event triggers when selection is initiated. Typical use cases include disabling conflicting UI, logging, or customizing selection behavior.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div id="e-pv-e-sign-pdfViewer-div">
    @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").TextSelectionStart("textSelectionStarted").Render()
</div>

<script>
    function textSelectionStarted(args) {
        // args.pageNumber, args.bounds provide the starting context
        console.log('Selection started', args);
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<div id="e-pv-e-sign-pdfViewer-div">
    @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/PdfViewer/")).DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").TextSelectionStart("textSelectionStarted").Render()
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

The textSelectionEnd event triggers when selection is completed. It is useful to read the selected content, enable context actions, or persist analytics.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div id="e-pv-e-sign-pdfViewer-div">
    @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").TextSelectionEnd("textSelectionEnded").Render()
</div>

<script>
    function textSelectionEnded(args) {
        // For example, automatically copy or show a custom menu
        console.log('Selection ended', args);
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<div id="e-pv-e-sign-pdfViewer-div">
    @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/PdfViewer/")).DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").TextSelectionEnd("textSelectionEnded").Render()
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