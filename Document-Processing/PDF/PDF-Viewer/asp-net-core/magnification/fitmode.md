---
layout: post
title: Fit Modes in ASP.NET Core PDF Viewer | Syncfusion
description: Configure fit modes in the ASP.NET Core PDF Viewer, including Fit Page and Fit Width, to control the initial view and switch modes at runtime.
control: PDF Viewer
platform: document-processing
documentation: ug
---

# Fit Modes in ASP.NET Core PDF Viewer

This how-to guide demonstrates how to work with fit modes in the ASP.NET Core PDF Viewer component. Learn how to fit pages to the viewport, set initial fit modes, toggle between modes, and handle responsive resizing.

## Fit the entire page to the viewport

Use the `fitToPage()` method to scale the PDF so the entire page fits within the available viewport size.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<button onclick="fitToPage()">Fit to Page</button>

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                   enableMagnification="true">
    </ejs-pdfviewer>
</div>

<script>
function fitToPage() {
    // Fit entire page to viewport
    document.getElementById('pdfviewer').ej2_instances[0].magnification.fitToPage();
}
</script>

{% endhighlight %}
{% endtabs %}

## Fit page width to the viewport

Use the `fitToWidth()` method to scale the PDF so the page width matches the viewport width. The height may extend beyond the visible area.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<button onclick="fitToWidth()">Fit to Width</button>

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                   enableMagnification="true">
    </ejs-pdfviewer>
</div>

<script>
function fitToWidth() {
    // Fit page width to viewport
    document.getElementById('pdfviewer').ej2_instances[0].magnification.fitToWidth();
}
</script>

{% endhighlight %}
{% endtabs %}

## Set a default fit mode on load (initial view)

Set an initial fit mode when the PDF Viewer is rendered by using the `zoomMode` property. The available zoom modes are:
- `Default` — Default zoom mode.
- `FitToWidth` — Fit page width to viewport.
- `FitToPage` — Fit entire page to viewport.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                   enableMagnification="true"
                   zoomMode="FitToWidth">
    </ejs-pdfviewer>
</div>

{% endhighlight %}
{% endtabs %}

## Toggle Fit Page / Fit Width from a custom toolbar

Create custom toolbar buttons to toggle between fit modes. This gives users control over how the PDF is displayed.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div style="padding: 10px; background-color: #f0f0f0; margin-bottom: 10px;">
    <button onclick="fitPage()">Fit Page</button>
    <button onclick="fitWidth()">Fit Width</button>
    <p style="margin: 5px 0; font-size: 12px; color: #666;">Current mode: <span id="fitModeLabel">Fit Width</span></p>
</div>

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                   enableMagnification="true">
    </ejs-pdfviewer>
</div>

<script>
function fitPage() {
    document.getElementById('pdfviewer').ej2_instances[0].magnification.fitToPage();
    document.getElementById('fitModeLabel').textContent = 'Fit Page';
}

function fitWidth() {
    document.getElementById('pdfviewer').ej2_instances[0].magnification.fitToWidth();
    document.getElementById('fitModeLabel').textContent = 'Fit Width';
}
</script>

{% endhighlight %}
{% endtabs %}

## Combine fit mode with user zoom (when to override vs respect last zoom)

When combining fit modes with manual zoom, decide whether fit actions should override the last zoom level or be combined. A common pattern is to reset to fit mode when explicitly called, while respecting manual zoom for programmatic zoom changes.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div style="padding: 10px; background-color: #f0f0f0; margin-bottom: 10px;">
    <button onclick="fitPage()">Fit Page</button>
    <button onclick="fitWidth()">Fit Width</button>
    <button onclick="restoreZoom()">Restore Zoom (<span id="lastZoomLabel">100</span>%)</button>
    <p style="margin: 5px 0; font-size: 12px; color: #666;">Fit modes override zoom. Use Restore to return to last manual zoom.</p>
</div>

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                   enableMagnification="true"
                   zoomChange="onZoomChange">
    </ejs-pdfviewer>
</div>

<script>
var lastZoom = 100;

function fitPage() {
    document.getElementById('pdfviewer').ej2_instances[0].magnification.fitToPage();
}

function fitWidth() {
    document.getElementById('pdfviewer').ej2_instances[0].magnification.fitToWidth();
}

function restoreZoom() {
    document.getElementById('pdfviewer').ej2_instances[0].magnification.zoomTo(lastZoom);
}

function onZoomChange(args) {
    lastZoom = Math.round(args.previousZoomValue);
    document.getElementById('lastZoomLabel').textContent = lastZoom;
}
</script>

{% endhighlight %}
{% endtabs %}

## See also

* [Magnification Overview](./magnification)
* [Zoom](./zoom)
* [Toolbar Items](../toolbar)
