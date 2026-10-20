---
layout: post
title: Annotation Toolbar in ASP.NET Core PDF Viewer | Syncfusion
description: Customize the annotation toolbar in the ASP.NET Core PDF Viewer to show, hide, or replace the default annotation actions for your users.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Customize the Annotation Toolbar in ASP.NET Core PDF Viewer

## Overview

This guide shows how to show or hide the annotation toolbar and how to choose which tools appear and their order.

**Outcome**: A working ASP.NET Core example that toggles the annotation toolbar and uses [`annotationToolbarItems`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.PdfViewer.PdfViewerToolbarSettings.html#Syncfusion_EJ2_PdfViewer_PdfViewerToolbarSettings_AnnotationToolbarItems) to customize the toolbar.

## Prerequisites

- EJ2 ASP.NET Core PDF Viewer installed and added to your project. See [getting started guide](../getting-started)
- A valid [`resourceUrl`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.PdfViewer.PdfViewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_ResourceUrl) or [`serviceUrl`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.PdfViewer.PdfViewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_ServiceUrl) for accessing PDF Viewer assets

## Steps

### 1. Show or hide the annotation toolbar

Toggle the annotation toolbar programmatically during initialization or at runtime.

Use the [`enableAnnotationToolbar`](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_EnableAnnotationToolbar) property or the [`showAnnotationToolbar`](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/toolbar#showannotationtoolbar) method to change visibility.

**Example using the `showAnnotationToolbar()` method:**

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
{% endtabs %}

### 2. Show or hide annotation toolbar items

Use [`annotationToolbarItems`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.PdfViewer.PdfViewerToolbarSettings.html#Syncfusion_EJ2_PdfViewer_PdfViewerToolbarSettings_AnnotationToolbarItems) with a list of [`AnnotationToolbarItem`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.PdfViewer.PdfViewerToolbarSettings.html) values. The toolbar shows only items in this list.

Configure the [`toolbarSettings`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.PdfViewer.PdfViewerToolbarSettings.html) property to specify which annotation tools appear. The property accepts a list of `AnnotationToolbarItem` values. Only listed items are displayed and the render order follows the list sequence.

The annotation toolbar appears when entering annotation mode in the PdfViewer and adapts responsively to available width. Include the Close tool to enable exiting the annotation toolbar.

**Example customizing the annotation toolbar:**

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                   toolbarSettings="@(new Syncfusion.EJ2.PdfViewer.PdfViewerToolbarSettings { AnnotationToolbarItems = "HighlightTool UnderlineTool StrikethroughTool ColorEditTool OpacityEditTool AnnotationDeleteTool StampAnnotationTool HandWrittenSignatureTool InkAnnotationTool ShapeTool CalibrateTool StrokeColorEditTool ThicknessEditTool" })">
    </ejs-pdfviewer>
</div>

{% endhighlight %}
{% endtabs %}

## Expected result

- The annotation toolbar shows only the items you list in [`annotationToolbarItems`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.PdfViewer.PdfViewerToolbarSettings.html#Syncfusion_EJ2_PdfViewer_PdfViewerToolbarSettings_AnnotationToolbarItems).
- Tools appear in the order specified in the configuration.

## Troubleshooting

- **Annotation toolbar tools do not appear**
    - **Cause**: Invalid item names or Annotation and Toolbar services not injected.
    - **Solution**: Verify item names match the predefined list and ensure both Toolbar and Annotation services are enabled in the PDF Viewer.

- **Annotation toolbar does not show at runtime**
    - **Cause**: Annotation mode not activated or service not properly configured.
    - **Solution**: Ensure the user has activated annotation mode and the viewer is properly initialized with annotation support.

## Related topics

- [Customize form designer toolbar](./form-designer-toolbar)
- [Customize primary toolbar](./primary-toolbar)
- [Customize mobile toolbar](./mobile-toolbar)
