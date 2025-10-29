---
layout: post
title: Set min and max zoom levels in ASP.NET Core PDF Viewer | Syncfusion
description: Learn how to limit the minimum and maximum zoom percentages in the Syncfusion ASP.NET Core PDF Viewer by using the minZoom and maxZoom properties for responsive, consistent viewing.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Minimum and maximum zoom properties

The Syncfusion<sup style="font-size:70%">&reg;</sup> PDF Viewer lets developers control zoom limits for every document view. Configure the `minZoom` and `maxZoom` properties to prevent users from zooming beyond the range that keeps content legible and maintains predictable performance.

### minZoom

Use the [`minZoom`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.PdfViewer.PdfViewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_MinZoom) property to define the lowest zoom percentage that the viewer allows. Setting an appropriate minimum avoids unreadable pages when users zoom out. Assign the value that matches the smallest acceptable scale for the application, and keep it lower than or equal to `maxZoom`.

### maxZoom

Use the [`maxZoom`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.PdfViewer.PdfViewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_MaxZoom) property to cap the highest zoom percentage. Limiting the upper bound prevents excessive magnification that can slow rendering or introduce scrolling issues. Choose a value that balances detail visibility with responsiveness.

```html

@{
    ViewData["Title"] = "Home page";
    double MaxZoom = 10;
    double MinZoom = 5;
}


<div class="text-center">
    <ejs-pdfviewer id="pdfviewer" style="height:600px" maxZoom="@MaxZoom" minZoom="@MinZoom" documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf">
    </ejs-pdfviewer>
</div>
```

#### Restrict zoom percentage on mobile devices

You can restrict zoom percentages on mobile devices by updating the `minZoom` and `maxZoom` properties when the document load event fires. This ensures smoother scrolling performance and consistent page rendering on smaller screens. Attach the handler by wiring the `documentLoad` event to the `documentLoad` function in the PDF Viewer markup or initialization script.

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

When configuring zoom limits, keep `minZoom` less than or equal to `maxZoom`, and adjust the values to meet accessibility expectations across desktop and mobile experiences. Review the [`zoomMode`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.PdfViewer.PdfViewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_ZoomMode) property if you need additional control over how the viewer interprets zoom operations.
