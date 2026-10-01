---
layout: post
title: Zoom in ASP.NET Core PDF Viewer | Syncfusion
description: Enable zoom in the ASP.NET Core PDF Viewer and programmatically control zoom levels so users can read document content at the size they prefer.
control: PDF Viewer
platform: document-processing
documentation: ug
---

# Zoom in ASP.NET Core PDF Viewer

This how-to guide demonstrates how to work with zoom functionality in the ASP.NET Core PDF Viewer component. Learn how to enable magnification, control zoom programmatically, set default zoom levels, and respond to zoom changes.

![PDF Viewer zoom controls](../../react/images/zoomPdf.png)

## Enable zooming

To enable zoom functionality in the PDF Viewer, set the `enableMagnification` property to `true`.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                   enableMagnification="true">
    </ejs-pdfviewer>
</div>

{% endhighlight %}
{% endtabs %}

## Zoom in and out using toolbar and programmatically

The zoom controls are automatically available in the toolbar when magnification is enabled. Users can click the **Zoom In** and **Zoom Out** buttons to adjust the zoom level.

To zoom in or out programmatically, use the `zoomIn()` and `zoomOut()` methods on the PDF Viewer instance.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<button onclick="zoomIn()">Zoom In</button>
<button onclick="zoomOut()">Zoom Out</button>

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                   enableMagnification="true">
    </ejs-pdfviewer>
</div>

<script>
function zoomIn() {
    document.getElementById('pdfviewer').ej2_instances[0].magnification.zoomIn();
}

function zoomOut() {
    document.getElementById('pdfviewer').ej2_instances[0].magnification.zoomOut();
}
</script>

{% endhighlight %}
{% endtabs %}

## Set a specific zoom value

Use the `zoomTo()` method on the PDF Viewer instance to set the PDF to a specific zoom level. You can specify the zoom level as a percentage value.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<button onclick="zoomTo(75)">75%</button>
<button onclick="zoomTo(150)">150%</button>
<button onclick="zoomTo(200)">200%</button>

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                   enableMagnification="true">
    </ejs-pdfviewer>
</div>

<script>
function zoomTo(percentage) {
    document.getElementById('pdfviewer').ej2_instances[0].magnification.zoomTo(percentage);
}
</script>

{% endhighlight %}
{% endtabs %}

## Initialize the viewer with a default zoom (on load)

Set an initial zoom level when the document is first loaded by using the `documentLoad` event. Call `zoomTo()` in the event handler.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                   enableMagnification="true"
                   documentLoad="onDocumentLoad">
    </ejs-pdfviewer>
</div>

<script>
function onDocumentLoad() {
    // Set default zoom to 150% when document is loaded
    document.getElementById('pdfviewer').ej2_instances[0].magnification.zoomTo(150);
}
</script>

{% endhighlight %}
{% endtabs %}

## Disable user zoom while allowing programmatic zoom

To restrict users from zooming via the UI while still allowing your application to control zoom programmatically, customize the toolbar to exclude zoom controls. Combine this with custom application buttons to provide controlled zoom access.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<button onclick="zoomTo(150)">Zoom 150%</button>
<button onclick="zoomTo(200)">Zoom 200%</button>
<p style="font-size: 12px; color: #666;">Zoom level is controlled by the application.</p>

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                   enableMagnification="true"
                   toolbarSettings="@(new Syncfusion.EJ2.PdfViewer.PdfViewerToolbarSettings { ToolbarItems = new List<string> { "OpenOption", "PageNavigationTool", "AnnotationEditTool", "PrintOption" } })">
    </ejs-pdfviewer>
</div>

<script>
function zoomTo(percentage) {
    document.getElementById('pdfviewer').ej2_instances[0].magnification.zoomTo(percentage);
}
</script>

{% endhighlight %}
{% endtabs %}

## Zoom Range and Limits

The PDF Viewer supports zoom values from **10% to 400%** by default. All zoom operations are automatically clamped to this range:
- Values below 10% are adjusted to 10%
- Values above 400% are adjusted to 400%

You can override these defaults using the `minZoom` and `maxZoom` properties on the `PdfViewerControl`.

## See also

* [Magnification Overview](./magnification)
* [Fit Modes](./fitmode)
* [Toolbar Items](../toolbar)
