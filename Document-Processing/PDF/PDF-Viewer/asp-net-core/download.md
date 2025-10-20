---
layout: post
title: Download in  EJ2 ASP.NET CORE PDF Viewer | Syncfusion
description: Learn here all about Download in ASP.NET CORE PDF Viewer component of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Download
publishingplatform: document-processing
documentation: ug
---

# Download PDF document in PDF Viewer component

The PDF Viewer supports downloading the loaded PDF file. You can enable or disable the download using the following example.

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

![Alt text](./images/download.png)

You can also programmatically invoke the download action using the `download()` method, as shown below:

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

## Get the base64 string while downloading the PDF document

You can use the [downloadEnd](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_DownloadEnd) event of the PDF Viewer to retrieve the downloaded document as a base64 string.

## See also

* [Toolbar items](./toolbar)
* [Feature Modules](./feature-module)