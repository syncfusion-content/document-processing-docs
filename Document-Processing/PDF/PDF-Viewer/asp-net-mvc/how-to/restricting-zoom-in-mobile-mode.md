---
layout: post
title: Restrict zoom percentage on mobile in ASP.NET MVC PDF Viewer | Syncfusion
description: Learn how to limit the maxZoom and minZoom values in the Syncfusion ASP.NET MVC PDF Viewer to control zoom levels on mobile devices.
platform: document-processing
control: PDF Viewer
publishingplatform: ASP.NET MVC
documentation: ug
---

# Restrict zoom percentage on mobile devices

The Syncfusion<sup style="font-size:70%">&reg;</sup> ASP.NET MVC PDF Viewer allows developers tqo cap zoom ranges on phones and tablets by adjusting the `maxZoom` and `minZoom` properties after the `documentLoad` event fires. Setting device-specific limits prevents excessive pinch-zooming, keeps pages readable, and avoids stuttering caused by rendering at extreme scales.

{% tabs %}
{% highlight html tabtitle="Standalone" %}

<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").DocumentLoad("documentLoad").DocumentPath("https://cdn.syncfusion.com/content/pdf/hive-succinctly.pdf").Render()
</div>

<script>
    function documentLoad() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        if (ej2_base_1.Browser.isDevice && !viewer.enableDesktopMode) {
            viewer.maxZoom = 200;
            viewer.minZoom = 10;
        }
       else {
            viewer.zoomMode = 'Default';
        }
    }
</script>

{% endhighlight %}
{% highlight html tabtitle="Server-Backed" %}

<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/api/PdfViewer/")).DocumentLoad("documentLoad").DocumentPath("https://cdn.syncfusion.com/content/pdf/hive-succinctly.pdf").Render()
</div>

<script>
    function documentLoad() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        if (ej2_base_1.Browser.isDevice && !viewer.enableDesktopMode) {
            viewer.maxZoom = 200;
            viewer.minZoom = 10;
        }
       else {
            viewer.zoomMode = 'Default';
        }
    }
</script>
{% endhighlight %}
{% endtabs %}

By enforcing these limits, mobile users can zoom between 10% and 200%, which avoids blurry rendering or performance drops caused by extreme zoom levels. Adjust the thresholds to suit the document content but keep `minZoom` less than or equal to `maxZoom` so the viewer maintains a valid range.

[View Sample in GitHub](https://github.com/SyncfusionExamples/mvc-pdf-viewer-examples/tree/master/How%20to/Restrict%20Zoom%20Percentage%20on%20Mobile%20Devices/PDFViewerSample)
