---
layout: post
title: Interaction mode in ASP.NET MVC PDF Viewer | Syncfusion
description: Learn how to use selection and panning interaction modes in the Syncfusion ASP.NET MVC PDF Viewer.
platform: document-processing
control: PDF Viewer
publishingplatform: ASP.NET MVC
documentation: ug
---


# Interaction mode in PDF Viewer

The PDF Viewer provides two interaction modes to work with the loaded PDF document: selection mode and panning mode.

## Selection mode

In this mode, users can select and copy text in the loaded PDF document. Panning and touch-based scrolling are disabled. This is useful for copying and sharing text content. Enable or disable text selection as shown in the following example.

{% tabs %}
{% highlight html tabtitle="Standalone" %}
```html
<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").EnableTextSelection(true).DocumentPath("https://cdn.syncfusion.com/content/pdf/hive-succinctly.pdf").Render()
</div>
```
{% endhighlight %}
{% highlight html tabtitle="Server-Backed" %}
```html
<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/api/PdfViewer/")).EnableTextSelection(true).DocumentPath("https://cdn.syncfusion.com/content/pdf/hive-succinctly.pdf").Render()
</div>
```
{% endhighlight %}
{% endtabs %}

![Alt text](./images/selection.png)

## Panning mode

In this mode, panning and touch-based scrolling are enabled, while text selection is disabled.

![Alt text](./images/pan.png)

Switch the interaction mode of the PDF Viewer using the following example:

{% tabs %}
{% highlight html tabtitle="Standalone" %}

```html
<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").InteractionMode(Syncfusion.EJ2.PdfViewer.InteractionMode.Pan).DocumentPath("https://cdn.syncfusion.com/content/pdf/hive-succinctly.pdf").Render()
</div>
```
{% endhighlight %}
{% highlight html tabtitle="Server-Backed" %}

```html
<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/api/PdfViewer/")).InteractionMode(Syncfusion.EJ2.PdfViewer.InteractionMode.Pan).DocumentPath("https://cdn.syncfusion.com/content/pdf/hive-succinctly.pdf").Render()
</div>
```
{% endhighlight %}
{% endtabs %}

## See also

* [Toolbar items](./toolbar)
* [Feature Modules](./feature-module)