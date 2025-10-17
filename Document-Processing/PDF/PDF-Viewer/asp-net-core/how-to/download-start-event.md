---
layout: post
title: Control file downloads in ASP.NET Core PDF Viewer | Syncfusion
description: Learn how to intercept and control file downloads in the Syncfusion ASP.NET Core PDF Viewer using the downloadStart event.
platform: document-processing
control: PDF Viewer
publishingplatform: ASP.NET Core
documentation: ug
---

# Control file downloads in the ASP.NET Core PDF Viewer

Use the `downloadStart` event to intercept the start of a download and optionally cancel it. In the event handler, set `args.cancel = true` to prevent the download.

By default, `args.cancel` is `false`, so the download proceeds unless explicitly canceled.

## Flexibility

Leverage the [`downloadStart`](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_DownloadStart) event to apply custom rules for allowing or preventing downloads based on application needs.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                   downloadStart="downloadStart">
    </ejs-pdfviewer>
</div>

<script>
    function downloadStart(args) {
        // Your custom logic here
        args.cancel = true; // Prevent download action
    };
</script>
{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   serviceUrl='/Index'
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                   downloadStart="downloadStart">
    </ejs-pdfviewer>
</div>

<script>
    function downloadStart(args) {
        // Your custom logic here
        args.cancel = true; // Prevent download action
    };
</script>

{% endhighlight %}
{% endtabs %}

