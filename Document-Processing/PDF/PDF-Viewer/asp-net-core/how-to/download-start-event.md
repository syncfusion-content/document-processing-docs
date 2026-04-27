---
layout: post
title: Control file downloads in ASP.NET Core PDF Viewer | Syncfusion
description: Learn how to intercept and control file downloads in the Syncfusion ASP.NET Core PDF Viewer using the downloadStart event.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Control file downloads in ASP.NET Core PDF Viewer

Intercept PDF downloads and apply custom logic using the `downloadStart` event. Set `args.cancel = true` to prevent the download from proceeding. By default, `args.cancel` is `false`, allowing downloads to proceed.

Use the [`downloadStart`](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_DownloadStart) event to implement custom authorization or validation rules before allowing downloads based on the application requirements.

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
        // Apply custom logic to allow or deny downloads
        args.cancel = true; // Prevent download action
    }
</script>
{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   serviceUrl="/Index"
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                   downloadStart="downloadStart">
    </ejs-pdfviewer>
</div>

<script>
    function downloadStart(args) {
        // Apply custom logic to allow or deny downloads
        args.cancel = true; // Prevent download action
    }
</script>

{% endhighlight %}
{% endtabs %}
