---
layout: post
title: Annotation Toolbar in ASP.NET Core PDF Viewer control | Syncfusion
description: Learn here all about annotation toolbar customization in Syncfusion ASP.NET Core PDF Viewer control of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Annotation Toolbar Customization
documentation: ug
---

# Annotation Toolbar Customization in ASP.NET Core

Customize the annotation toolbar by showing or hiding default items and controlling their order.

## Show or hide the annotation toolbar

Toggle the annotation toolbar programmatically during initialization or at runtime.

Use the [EnableAnnotationToolbar](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_EnableAnnotationToolbar) property or the [showAnnotationToolbar](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/toolbar#showannotationtoolbar) method to change visibility.

The following code snippet shows how to show or hide the annotation toolbar using the `showAnnotationToolbar` method.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<button id="showToolbar" onclick="ShowAnnotationToolbar()">Show Annotation Toolbar</button>
<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf">
    </ejs-pdfviewer>
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
<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   serviceUrl='/Index'
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf">
    </ejs-pdfviewer>
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

Select which tools appear and set their order in the annotation toolbar.

Configure the [`PdfViewerToolbarSettings`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.PdfViewer.PdfViewerToolbarSettings.html) with the [`AnnotationToolbarItems`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.PdfViewer.PdfViewerToolbarSettings.html#Syncfusion_EJ2_PdfViewer_PdfViewerToolbarSettings_AnnotationToolbarItems) property to specify which tools appear. The property accepts a list of `AnnotationToolbarItem` values. Only listed items are displayed and the render order follows the list sequence.

The annotation toolbar appears when entering annotation mode in the PdfViewer and adapts responsively to available width. Include the Close tool to enable exiting the annotation toolbar.

The following example demonstrates how to customize the annotation toolbar by specifying a set of tools using `AnnotationToolbarItem`.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                   toolbarSettings="@(new Syncfusion.EJ2.PdfViewer.PdfViewerToolbarSettings { AnnotationToolbarItems = "HighlightTool UnderlineTool StrikethroughTool ColorEditTool OpacityEditTool AnnotationDeleteTool StampAnnotationTool HandWrittenSignatureTool InkAnnotationTool ShapeTool CalibrateTool StrokeColorEditTool ThicknessEditTool" })">
    </ejs-pdfviewer>
</div>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   serviceUrl='/Index'
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                   toolbarSettings="@(new Syncfusion.EJ2.PdfViewer.PdfViewerToolbarSettings { AnnotationToolbarItems = "HighlightTool UnderlineTool StrikethroughTool ColorEditTool OpacityEditTool AnnotationDeleteTool StampAnnotationTool HandWrittenSignatureTool InkAnnotationTool ShapeTool CalibrateTool StrokeColorEditTool ThicknessEditTool" })">
    </ejs-pdfviewer>
</div>

{% endhighlight %}
{% endtabs %}
