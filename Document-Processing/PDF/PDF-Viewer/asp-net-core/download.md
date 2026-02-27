---
layout: post
title: Download PDF Documents with EJ2 ASP.NET Core PDF Viewer | Syncfusion
description: Learn how to enable PDF document downloads in the ASP.NET Core PDF Viewer component of Syncfusion Essential JS 2 and more.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Downloading PDF documents in PDF Viewer

The PDF Viewer component enables users to download the currently loaded PDF document. Downloads can be triggered through the user interface or programmatically via code. This feature allows end users to save documents locally for offline access or archival purposes.

By default, the download button appears in the PDF Viewer toolbar. Set the `enableDownload` property to `true` to enable the download feature, or `false` to hide the download button:

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                   enableDownload="true">
    </ejs-pdfviewer>
</div>
{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}
<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   serviceUrl="/api/PdfViewer"
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                   enableDownload="true">
    </ejs-pdfviewer>
</div>
{% endhighlight %}
{% endtabs %}

![Download toolbar button in PDF Viewer](./images/download.png)

In addition to the toolbar button, the PDF Viewer provides the `download()` method to programmatically trigger document downloads. This method initiates a download of the currently displayed PDF file using the document's filename or a default name as shown below:

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
                   enableDownload="true"
                   documentLoad="documentLoaded">
    </ejs-pdfviewer>
</div>
<script>
    function documentLoaded() {
        var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
        pdfViewer.download();
    }
</script>
{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   serviceUrl="/api/PdfViewer"
                   documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
                   enableDownload="true"
                   documentLoad="documentLoaded">
    </ejs-pdfviewer>
</div>
<script>
    function documentLoaded() {
        var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
        pdfViewer.download();
    }
</script>

{% endhighlight %}
{% endtabs %}

## Retrieving base64 data during download

The PDF Viewer component provides the [downloadEnd](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_DownloadEnd) event, which fires when the download process completes. This event can be used to retrieve the downloaded document as a base64-encoded string for custom processing, server transmission, or storage purposes.

## See also

* [Toolbar items](./toolbar)
* [Feature Modules](./feature-module)