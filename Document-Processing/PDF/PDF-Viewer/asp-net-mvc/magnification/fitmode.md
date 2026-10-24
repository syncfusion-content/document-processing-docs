---
layout: post
title: Fit Modes in ASP.NET MVC PDF Viewer | Syncfusion
description: Configure fit modes in the ASP.NET MVC PDF Viewer, including Fit Page and Fit Width, to control the initial view and switch modes at runtime.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Fit Modes in ASP.NET MVC PDF Viewer

This how-to guide demonstrates how to work with fit modes in the ASP.NET MVC PDF Viewer component. Learn how to fit pages to the viewport, set initial fit modes, toggle between modes, and handle responsive resizing.

## Fit the entire page to the viewport

Use the [`fitToPage()`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.PdfViewer.Magnification.html#Syncfusion_EJ2_PdfViewer_Magnification_FitToPage) method to scale the PDF so the entire page fits within the available viewport size.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<button id="fitPageBtn" onclick="fitToPage()">Fit to Page</button>

<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").EnableMagnification(true).DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>

<script>
    function fitToPage() {
        var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
        // Fit entire page to viewport
        pdfViewer.magnification.fitToPage();
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<button id="fitPageBtn" onclick="fitToPage()">Fit to Page</button>

<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/api/PdfViewer/")).EnableMagnification(true).DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>

<script>
    function fitToPage() {
        var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
        // Fit entire page to viewport
        pdfViewer.magnification.fitToPage();
    }
</script>
{% endhighlight %}
{% endtabs %}

## Fit page width to the viewport

Use the [`fitToWidth()`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.PdfViewer.Magnification.html#Syncfusion_EJ2_PdfViewer_Magnification_FitToWidth) method to scale the PDF so the page width matches the viewport width. The height may extend beyond the visible area.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<button id="fitWidthBtn" onclick="fitToWidth()">Fit to Width</button>

<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").EnableMagnification(true).DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>

<script>
    function fitToWidth() {
        var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
        // Fit page width to viewport
        pdfViewer.magnification.fitToWidth();
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<button id="fitWidthBtn" onclick="fitToWidth()">Fit to Width</button>

<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/api/PdfViewer/")).EnableMagnification(true).DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>

<script>
    function fitToWidth() {
        var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
        // Fit page width to viewport
        pdfViewer.magnification.fitToWidth();
    }
</script>
{% endhighlight %}
{% endtabs %}

## Set a default fit mode on load (initial view)

Set an initial fit mode when the PDF Viewer is rendered by using the [`ZoomMode`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.PdfViewer.PdfViewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_ZoomMode) property. The available zoom modes are:
- **Default**: Default zoom mode.
- **FitToWidth**: Fit page width to viewport.
- **FitToPage**: Fit entire page to viewport.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").EnableMagnification(true).ZoomMode(Syncfusion.EJ2.PdfViewer.ZoomMode.FitToWidth).DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/api/PdfViewer/")).EnableMagnification(true).ZoomMode(Syncfusion.EJ2.PdfViewer.ZoomMode.FitToWidth).DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>
{% endhighlight %}
{% endtabs %}

## Toggle Fit Page / Fit Width from a custom toolbar

Create custom toolbar buttons to toggle between fit modes. This gives users control over how the PDF is displayed.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div class="custom-toolbar" style="margin-bottom: 10px; padding: 10px; background-color: #f0f0f0;">
    <button id="fitPageBtn" onclick="fitToPage()" style="font-weight: bold;">Fit Page</button>
    <button id="fitWidthBtn" onclick="fitToWidth()" style="font-weight: normal;">Fit Width</button>
    <p id="fitModeLabel" style="margin: 5px 0; font-size: 12px; color: #666;">Current mode: Fit Width</p>
</div>

<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").EnableMagnification(true).DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>

<script>
    function fitToPage() {
        var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
        pdfViewer.magnification.fitToPage();
        document.getElementById('fitPageBtn').style.fontWeight = 'bold';
        document.getElementById('fitWidthBtn').style.fontWeight = 'normal';
        document.getElementById('fitModeLabel').innerText = 'Current mode: Fit Page';
    }
    function fitToWidth() {
        var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
        pdfViewer.magnification.fitToWidth();
        document.getElementById('fitPageBtn').style.fontWeight = 'normal';
        document.getElementById('fitWidthBtn').style.fontWeight = 'bold';
        document.getElementById('fitModeLabel').innerText = 'Current mode: Fit Width';
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<div class="custom-toolbar" style="margin-bottom: 10px; padding: 10px; background-color: #f0f0f0;">
    <button id="fitPageBtn" onclick="fitToPage()" style="font-weight: bold;">Fit Page</button>
    <button id="fitWidthBtn" onclick="fitToWidth()" style="font-weight: normal;">Fit Width</button>
    <p id="fitModeLabel" style="margin: 5px 0; font-size: 12px; color: #666;">Current mode: Fit Width</p>
</div>

<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/api/PdfViewer/")).EnableMagnification(true).DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>

<script>
    function fitToPage() {
        var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
        pdfViewer.magnification.fitToPage();
        document.getElementById('fitPageBtn').style.fontWeight = 'bold';
        document.getElementById('fitWidthBtn').style.fontWeight = 'normal';
        document.getElementById('fitModeLabel').innerText = 'Current mode: Fit Page';
    }
    function fitToWidth() {
        var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
        pdfViewer.magnification.fitToWidth();
        document.getElementById('fitPageBtn').style.fontWeight = 'normal';
        document.getElementById('fitWidthBtn').style.fontWeight = 'bold';
        document.getElementById('fitModeLabel').innerText = 'Current mode: Fit Width';
    }
</script>
{% endhighlight %}
{% endtabs %}

## Combine fit mode with user zoom (when to override vs respect last zoom)

When combining fit modes with manual zoom, decide whether fit actions should override the last zoom level or be combined. A common pattern is to reset to fit mode when explicitly called, while respecting manual zoom for programmatic zoom changes.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div class="toolbar" style="margin-bottom: 10px; padding: 10px; background-color: #f0f0f0;">
    <button id="fitPageBtn" onclick="fitToPage()">Fit Page</button>
    <button id="fitWidthBtn" onclick="fitToWidth()">Fit Width</button>
    <button id="restoreZoomBtn" onclick="restoreZoom()">Restore Zoom (<span id="lastZoomLabel">100</span>%)</button>
    <p style="margin: 5px 0; font-size: 12px; color: #666;">Fit modes override zoom. Use Restore to return to last manual zoom.</p>
</div>

<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").EnableMagnification(true).ZoomChange("zoomChange").DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>

<script>
    var lastZoom = 100;
    function fitToPage() {
        var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
        // Fit mode overrides last zoom
        pdfViewer.magnification.fitToPage();
    }
    function fitToWidth() {
        var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
        // Fit mode overrides last zoom
        pdfViewer.magnification.fitToWidth();
    }
    function restoreZoom() {
        var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
        // Restore previously saved zoom level
        pdfViewer.magnification.zoomTo(lastZoom);
    }
    function zoomChange(args) {
        // Capture user's manual zoom level
        lastZoom = Math.round(args.previousZoomValue);
        document.getElementById('lastZoomLabel').innerText = lastZoom;
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<div class="toolbar" style="margin-bottom: 10px; padding: 10px; background-color: #f0f0f0;">
    <button id="fitPageBtn" onclick="fitToPage()">Fit Page</button>
    <button id="fitWidthBtn" onclick="fitToWidth()">Fit Width</button>
    <button id="restoreZoomBtn" onclick="restoreZoom()">Restore Zoom (<span id="lastZoomLabel">100</span>%)</button>
    <p style="margin: 5px 0; font-size: 12px; color: #666;">Fit modes override zoom. Use Restore to return to last manual zoom.</p>
</div>

<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/api/PdfViewer/")).EnableMagnification(true).ZoomChange("zoomChange").DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>

<script>
    var lastZoom = 100;
    function fitToPage() {
        var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
        // Fit mode overrides last zoom
        pdfViewer.magnification.fitToPage();
    }
    function fitToWidth() {
        var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
        // Fit mode overrides last zoom
        pdfViewer.magnification.fitToWidth();
    }
    function restoreZoom() {
        var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
        // Restore previously saved zoom level
        pdfViewer.magnification.zoomTo(lastZoom);
    }
    function zoomChange(args) {
        // Capture user's manual zoom level
        lastZoom = Math.round(args.previousZoomValue);
        document.getElementById('lastZoomLabel').innerText = lastZoom;
    }
</script>
{% endhighlight %}
{% endtabs %}

## Fit mode behavior and calculation

- **Fit to Page:** Scales the PDF page to fit within the available viewport (both width and height constrained).
- **Fit to Width:** Scales the PDF to match the viewport width (height may extend beyond visible area).
- **Fit calculations:** Consider the page box, page rotation, DPI/render scale, and container dimensions.
- **Multi-page layouts:** Fit modes apply to the currently visible page; they work the same in continuous and single-page views.

N> Fit modes automatically recalculate based on the current page dimensions and container size. If you change container size, fit mode dimensions are recomputed accordingly.

## See also

* [Magnification overview](./magnification)
* [Zoom how-to](./zoom)
* [Toolbar items](../toolbar)
* [Feature Modules](../feature-module)
