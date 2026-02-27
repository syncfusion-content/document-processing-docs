---
layout: post
title: Restrict zoom percentage on mobile in ASP.NET Core PDF Viewer | Syncfusion
description: Learn how to limit the maxZoom and minZoom values in the Syncfusion ASP.NET Core PDF Viewer to control zoom levels on mobile devices.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Restrict zoom percentage on mobile devices

The Syncfusion<sup style="font-size:70%">&reg;</sup> ASP.NET Core PDF Viewer allows developers to restrict zoom ranges on mobile devices by adjusting the `maxZoom` and `minZoom` properties during the `documentLoad` event. Implementing device-specific zoom limits prevents excessive pinch-zooming, maintains document readability, and optimizes rendering performance on phones and tablets.

The following example demonstrates how to check for mobile devices and apply zoom restrictions in both standalone and server-backed configurations.

{% tabs %}
{% highlight html tabtitle="Standalone" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf">
    </ejs-pdfviewer>
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
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   serviceUrl="/api/PdfViewer"
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf">
    </ejs-pdfviewer>
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

By enforcing these limits, users can zoom between 10% and 200% on mobile devices, ensuring a balance between detail and performance. Ensure that `minZoom` is always less than or equal to `maxZoom` to maintain a valid functional range.

[View sample in GitHub](https://github.com/SyncfusionExamples/asp-core-pdf-viewer-examples/tree/master/How%20to/Restrict%20Zoom%20Percentage%20on%20Mobile%20Devices)
