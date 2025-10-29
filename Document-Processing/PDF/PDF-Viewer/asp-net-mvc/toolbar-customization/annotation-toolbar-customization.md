---
layout: post
title: Annotation Toolbar Customization in ASP.NET MVC PDF Viewer control | Syncfusion
description: Learn here all about annotation toolbar customization in Syncfusion ASP.NET MVC PDF Viewer control of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Annotation Toolbar Customization
publishingplatform: PDF Viewer
publishingplatform: ASP.NET MVC
documentation: ug
---

# Annotation Toolbar Customization

The annotation toolbar can be customized by showing or hiding default items and by controlling the order in which they appear.

## Show or hide the annotation toolbar

Show or hide the annotation toolbar programmatically during initialization or at runtime.

Use the [EnableAnnotationToolbar](https://help.syncfusion.com/cr/aspnetmvc-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_EnableAnnotationToolbar) property or the [showAnnotationToolbar](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/toolbar/#showannotationtoolbar) method to toggle visibility.

The following code snippet explains how to show or hide the annotation toolbar using the `showAnnotationToolbar` method.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<button id="showToolbar" onclick="ShowAnnotationToolbar()">Show Annotation Toolbar</button>
<div id="e-pv-e-sign-pdfViewer-div">
    @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>

<script>
    function ShowAnnotationToolbar() {
        var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
        pdfViewer.toolbar.showAnnotationToolbar(false);
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<button id="showToolbar" onclick="ShowAnnotationToolbar()">Show Annotation Toolbar</button>
<div id="e-pv-e-sign-pdfViewer-div">
    @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/PdfViewer/")).DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>

<script>
    function ShowAnnotationToolbar() {
        var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
        pdfViewer.toolbar.showAnnotationToolbar(false);
    }
</script>

{% endhighlight %}
{% endtabs %}

## How to customize the annotation toolbar

Choose which tools appear and control their order in the annotation toolbar.

Use [`PdfViewerToolbarSettings`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.PdfViewer.PdfViewerToolbarSettings.html/) with the [`AnnotationToolbarItems`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.PdfViewer.PdfViewerToolbarSettings.html#Syncfusion_EJ2_PdfViewer_PdfViewerToolbarSettings_AnnotationToolbarItems) property to choose which tools are displayed in the annotation toolbar. The property accepts a list of [`AnnotationToolbarItem`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.PdfViewer.PdfViewerToolbarSettings.html#Syncfusion_EJ2_PdfViewer_PdfViewerToolbarSettings_AnnotationToolbarItems/) values. Only the items included in this list are shown; any item not listed is hidden. The rendered order follows the sequence of items in the list.

The annotation toolbar is presented when entering annotation mode in PdfViewer and adapts responsively based on the available width. Include the Close tool to allow users to exit the annotation toolbar when needed.

The following example demonstrates how to customize the annotation toolbar by specifying a selected set of tools using `AnnotationToolbarItem`.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div id="e-pv-e-sign-pdfViewer-div">
    @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").ToolbarSettings(new Syncfusion.EJ2.PdfViewer.PdfViewerToolbarSettings { ShowTooltip = true, AnnotationToolbarItems = "HighlightTool UnderlineTool StrikethroughTool ColorEditTool OpacityEditTool AnnotationDeleteTool StampAnnotationTool HandWrittenSignatureTool InkAnnotationTool ShapeTool CalibrateTool StrokeColorEditTool ThicknessEditTool" }).Render()
</div>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<div id="e-pv-e-sign-pdfViewer-div">
    @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/PdfViewer/")).DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").ToolbarSettings(new Syncfusion.EJ2.PdfViewer.PdfViewerToolbarSettings { ShowTooltip = true, AnnotationToolbarItems = "HighlightTool UnderlineTool StrikethroughTool ColorEditTool OpacityEditTool AnnotationDeleteTool StampAnnotationTool HandWrittenSignatureTool InkAnnotationTool ShapeTool CalibrateTool StrokeColorEditTool ThicknessEditTool" }).Render()
</div>

{% endhighlight %}
{% endtabs %}
