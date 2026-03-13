---
layout: post
title: Set min and max zoom levels in ASP.NET Core PDF Viewer | Syncfusion
description: Learn how to limit the minimum and maximum zoom percentages in the Syncfusion ASP.NET Core PDF Viewer by using the minZoom and maxZoom properties for responsive, consistent viewing.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Minimum and maximum zoom properties

Limit the zoom range in the PDF Viewer to ensure documents remain readable while maintaining consistent performance. Use the `minZoom` and `maxZoom` properties to define acceptable zoom boundaries for the application.

## Minimum zoom level

The [`minZoom`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.PdfViewer.PdfViewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_MinZoom) property sets the lowest zoom percentage allowed. Prevent users from zooming out too far by setting an appropriate minimum value. Ensure this value is less than or equal to the `maxZoom` value.

## Maximum zoom level

The [`maxZoom`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.PdfViewer.PdfViewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_MaxZoom) property restricts the highest zoom percentage. This prevents excessive magnification that can degrade performance or create excessive scrolling. Choose values that balance readability with responsive rendering.

## Set zoom limits at initialization

Configure zoom boundaries when the PDF Viewer is created. The following example sets minimum and maximum zoom levels:

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

## Adjust zoom limits for mobile devices

Optimize zoom settings for mobile devices by updating the `minZoom` and `maxZoom` properties in the `documentLoad` event handler. This improves scrolling performance and rendering consistency on smaller screens:

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

## Best practices

When configuring zoom boundaries, keep these guidelines in mind:

- Ensure `minZoom` ≤ `maxZoom` to prevent conflicts
- Set appropriate values that balance readability and performance
- Adjust zoom limits based on device type
- Consider accessibility requirements for all users
- Use the [`zoomMode`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.PdfViewer.PdfViewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_ZoomMode) property for additional zoom behavior control
