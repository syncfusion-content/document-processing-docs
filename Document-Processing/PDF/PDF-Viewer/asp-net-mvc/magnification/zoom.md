---
layout: post
title: Zoom in ASP.NET MVC PDF Viewer | Syncfusion
description: Enable zoom in the ASP.NET MVC PDF Viewer and programmatically control zoom levels so users can read document content at the size they prefer.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Zoom in ASP.NET MVC PDF Viewer

This how-to guide demonstrates how to work with zoom functionality in the ASP.NET MVC PDF Viewer component. Learn how to enable magnification, control zoom programmatically, set default zoom levels, and respond to zoom changes.

## Enable zooming

To enable zoom functionality in the PDF Viewer, set the [`EnableMagnification`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.PdfViewer.PdfViewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_EnableMagnification) property to `true`.

{% tabs %}
{% highlight html tabtitle="Standalone" %}
```html
<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").EnableMagnification(true).DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>
```
{% endhighlight %}
{% highlight html tabtitle="Server-Backed" %}
```html
<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/api/PdfViewer/")).EnableMagnification(true).DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>
```
{% endhighlight %}
{% endtabs %}

## Zoom in and out using toolbar and programmatically

The zoom controls are automatically available in the toolbar when magnification is enabled. Users can click the **Zoom In** and **Zoom Out** buttons to adjust the zoom level.

To zoom in or out programmatically, use the [`zoomIn()`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.PdfViewer.Magnification.html#Syncfusion_EJ2_PdfViewer_Magnification_ZoomIn) and [`zoomOut()`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.PdfViewer.Magnification.html#Syncfusion_EJ2_PdfViewer_Magnification_ZoomOut) methods on the magnification instance.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<button id="zoomInBtn" onclick="zoomIn()">Zoom In</button>
<button id="zoomOutBtn" onclick="zoomOut()">Zoom Out</button>

<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").EnableMagnification(true).DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>

<script>
    function zoomIn() {
        var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
        pdfViewer.magnification.zoomIn();
    }
    function zoomOut() {
        var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
        pdfViewer.magnification.zoomOut();
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<button id="zoomInBtn" onclick="zoomIn()">Zoom In</button>
<button id="zoomOutBtn" onclick="zoomOut()">Zoom Out</button>

<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/api/PdfViewer/")).EnableMagnification(true).DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>

<script>
    function zoomIn() {
        var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
        pdfViewer.magnification.zoomIn();
    }
    function zoomOut() {
        var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
        pdfViewer.magnification.zoomOut();
    }
</script>
{% endhighlight %}
{% endtabs %}

## Set a specific zoom value

Use the [`zoomTo()`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.PdfViewer.Magnification.html#Syncfusion_EJ2_PdfViewer_Magnification_ZoomTo) method on the magnification instance to set the PDF to a specific zoom level. You can specify the zoom level as a percentage value.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<button id="zoom75Btn" onclick="zoomTo75()">75%</button>
<button id="zoom150Btn" onclick="zoomTo150()">150%</button>
<button id="zoom200Btn" onclick="zoomTo200()">200%</button>

<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").EnableMagnification(true).DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>

<script>
    function zoomTo75() {
        var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
        pdfViewer.magnification.zoomTo(75);
    }
    function zoomTo150() {
        var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
        pdfViewer.magnification.zoomTo(150);
    }
    function zoomTo200() {
        var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
        pdfViewer.magnification.zoomTo(200);
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<button id="zoom75Btn" onclick="zoomTo75()">75%</button>
<button id="zoom150Btn" onclick="zoomTo150()">150%</button>
<button id="zoom200Btn" onclick="zoomTo200()">200%</button>

<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/api/PdfViewer/")).EnableMagnification(true).DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>

<script>
    function zoomTo75() {
        var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
        pdfViewer.magnification.zoomTo(75);
    }
    function zoomTo150() {
        var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
        pdfViewer.magnification.zoomTo(150);
    }
    function zoomTo200() {
        var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
        pdfViewer.magnification.zoomTo(200);
    }
</script>
{% endhighlight %}
{% endtabs %}

## Initialize the viewer with a default zoom (on load)

Set an initial zoom level when the document is first loaded by using the document-loaded event. Call [`zoomTo()`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.PdfViewer.Magnification.html#Syncfusion_EJ2_PdfViewer_Magnification_ZoomTo) in the [`DocumentLoad`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.PdfViewer.PdfViewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_DocumentLoad) event handler.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").DocumentLoad("documentLoad").EnableMagnification(true).DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>

<script>
    function documentLoad() {
        var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
        // Set default zoom to 150% when document is loaded
        pdfViewer.magnification.zoomTo(150);
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/api/PdfViewer/")).DocumentLoad("documentLoad").EnableMagnification(true).DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>

<script>
    function documentLoad() {
        var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
        // Set default zoom to 150% when document is loaded
        pdfViewer.magnification.zoomTo(150);
    }
</script>
{% endhighlight %}
{% endtabs %}

## Disable user zoom while allowing programmatic zoom

To restrict users from zooming via the UI while still allowing your application to control zoom programmatically, use the [`ToolbarSettings`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.PdfViewer.PdfViewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_ToolbarSettings) with custom toolbar items that exclude zoom controls. Combine this with custom application buttons to provide controlled zoom access.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<!-- Custom Application Toolbar -->
<div style="margin-bottom: 10px; padding: 10px; background-color: #f0f0f0;">
    <button id="zoom150Btn" onclick="zoomTo150()">Zoom 150%</button>
    <button id="zoom200Btn" onclick="zoomTo200()">Zoom 200%</button>
    <p style="font-size: 12px; color: #666;">Zoom level is controlled by the application.</p>
</div>

<!-- PDF Viewer -->
<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").EnableMagnification(true).ToolbarSettings(new Syncfusion.EJ2.PdfViewer.PdfViewerToolbarSettings {
        ToolbarItems = new List<string> { "OpenOption", "PageNavigationTool", "AnnotationEditTool", "FormDesignerEditTool", "PrintOption" }
    }).DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>

<script>
    function zoomTo150() {
        var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
        pdfViewer.magnification.zoomTo(150);
    }
    function zoomTo200() {
        var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
        pdfViewer.magnification.zoomTo(200);
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<!-- Custom Application Toolbar -->
<div style="margin-bottom: 10px; padding: 10px; background-color: #f0f0f0;">
    <button id="zoom150Btn" onclick="zoomTo150()">Zoom 150%</button>
    <button id="zoom200Btn" onclick="zoomTo200()">Zoom 200%</button>
    <p style="font-size: 12px; color: #666;">Zoom level is controlled by the application.</p>
</div>

<!-- PDF Viewer -->
<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/api/PdfViewer/")).EnableMagnification(true).ToolbarSettings(new Syncfusion.EJ2.PdfViewer.PdfViewerToolbarSettings {
        ToolbarItems = new List<string> { "OpenOption", "PageNavigationTool", "AnnotationEditTool", "FormDesignerEditTool", "PrintOption" }
    }).DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>

<script>
    function zoomTo150() {
        var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
        pdfViewer.magnification.zoomTo(150);
    }
    function zoomTo200() {
        var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
        pdfViewer.magnification.zoomTo(200);
    }
</script>
{% endhighlight %}
{% endtabs %}

## Handle zoom changes

Listen for zoom change events on the magnification instance and update custom UI elements (such as a zoom indicator or zoom dropdown) accordingly. Use the [`ZoomChange`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.PdfViewer.PdfViewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_ZoomChange) event to respond to zoom level changes.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div id="zoomIndicator" style="margin-bottom: 10px;">Current Zoom: 100%</div>

<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").EnableMagnification(true).ZoomChange("zoomChange").DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>

<script>
    function zoomChange(args) {
        // Update custom UI with new zoom level from magnification event
        document.getElementById('zoomIndicator').innerText = 'Current Zoom: ' + Math.round(args.zoomValue) + '%';
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<div id="zoomIndicator" style="margin-bottom: 10px;">Current Zoom: 100%</div>

<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/api/PdfViewer/")).EnableMagnification(true).ZoomChange("zoomChange").DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>

<script>
    function zoomChange(args) {
        // Update custom UI with new zoom level from magnification event
        document.getElementById('zoomIndicator').innerText = 'Current Zoom: ' + Math.round(args.zoomValue) + '%';
    }
</script>
{% endhighlight %}
{% endtabs %}

## Zoom range and limits

The PDF Viewer supports zoom values from 10% to 400% by default. You can override these limits using the [`MinZoom`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.PdfViewer.PdfViewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_MinZoom) and [`MaxZoom`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.PdfViewer.PdfViewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_MaxZoom) properties on the `PdfViewer`.

- [`MinZoom`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.PdfViewer.PdfViewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_MinZoom) (double): Specifies the minimum acceptable zoom level for the control. Default: `10`.
- [`MaxZoom`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.PdfViewer.PdfViewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_MaxZoom) (double): Specifies the maximum allowable zoom level for the control. Default: `400`.

Below are full example snippets that show how to set custom `MinZoom` and `MaxZoom` values (Standalone and Server-Backed):

```cs

@{
    ViewBag.Title = "Home Page";
    double maxZoom = 300;
    double minZoom = 50;
}

<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").EnableMagnification(true).MaxZoom(maxZoom).MinZoom(minZoom).Render()
</div>
```

The [`zoomTo()`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.PdfViewer.Magnification.html#Syncfusion_EJ2_PdfViewer_Magnification_ZoomTo) method will clamp values outside the configured `MinZoom`/`MaxZoom` range to the nearest valid limit.

N> Zoom values are clamped between the configured `MinZoom` and `MaxZoom`. Attempting to zoom beyond these limits will set the zoom to the nearest boundary value.

## See also

* [Magnification overview](./magnification)
* [Fit modes](./fitmode)
* [Toolbar items](../toolbar)
* [Feature Modules](../feature-module)
