---
layout: post
title: Disable tile rendering in ASP.NET Core PDF Viewer control | Syncfusion
description: Learn here all about Disable tile rendering in Syncfusion ASP.NET Core PDF Viewer control of Syncfusion Essential JS 2 and more.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Disable tile rendering in ASP.NET Core PDF Viewer

Tile rendering is a performance-optimization feature used to display large PDF documents efficiently. In some scenarios, such as when viewing smaller documents or troubleshooting rendering artifacts, disabling this feature will help.

Use the **enableTileRendering** property within the `tileRenderingSettings` object to toggle this behavior. By default, tile rendering is enabled.

N> Disabling tile rendering can improve initial performance for small documents but may result in slower rendering and increased memory usage for larger PDF files.

## Configure tile rendering settings

Set the **EnableTileRendering** property to `false` in the Razor view to disable the feature:

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf"
                   resourceUrl="https://cdn.syncfusion.com/ej2/31.1.17/dist/ej2-pdfviewer-lib"
                   tileRenderingSettings="@(new Syncfusion.EJ2.PdfViewer.PdfViewerTileRenderingSettings
                    { EnableTileRendering=false })">
    </ejs-pdfviewer>
</div>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf"
                   serviceUrl="/api/PdfViewer"
                   tileRenderingSettings="@(new Syncfusion.EJ2.PdfViewer.PdfViewerTileRenderingSettings
                    { EnableTileRendering=false })">
    </ejs-pdfviewer>
</div>

{% endhighlight %}
{% endtabs %}
