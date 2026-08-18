---
layout: post
title: Download in ASP.NET MVC PDF Viewer | Syncfusion
description: Enable, disable, and programmatically trigger PDF downloads in the ASP.NET MVC PDF Viewer, including download events and Base64 handling.
platform: document-processing
control: Download
documentation: ug
---

# Download in ASP.NET MVC PDF Viewer

The PDF Viewer supports downloading the loaded PDF file. You can enable or disable the download using the following example.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div id="e-pv-e-sign-pdfViewer-div">
    @Html.EJS().PdfViewer("pdfviewer").ResourceUrl("https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib").DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").EnableDownload(true).Render()
</div>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<div id="e-pv-e-sign-pdfViewer-div">
    @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/PdfViewer/")).DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").EnableDownload(true).Render()
</div>

{% endhighlight %}
{% endtabs %}

![Download option in the PDF Viewer toolbar](./images/download.png)

You can also programmatically invoke the download action using the `download()` method, as shown below:

{% tabs %}
{% highlight html tabtitle="Standalone" %}
```html
<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").DocumentLoad("download").EnableDownload(true).DocumentPath("https://cdn.syncfusion.com/content/pdf/hive-succinctly.pdf").Render()
</div>

<script>
    function download() {
        var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
        pdfViewer.download();
    }
</script>
```
{% endhighlight %}
{% highlight html tabtitle="Server-Backed" %}
```html
<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").DocumentLoad("download").ServiceUrl(VirtualPathUtility.ToAbsolute("~/api/PdfViewer/")).EnableDownload(true).DocumentPath("https://cdn.syncfusion.com/content/pdf/hive-succinctly.pdf").Render()
</div>

<script>
    function download() {
        var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
        pdfViewer.download();
    }
</script>
```
{% endhighlight %}
{% endtabs %}

## Get the base64 string while downloading the PDF document

You can use the [downloadEnd](https://help.syncfusion.com/cr/aspnetmvc-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_DownloadEnd) event of the PDF Viewer to retrieve the downloaded document as a base64 string.

## See also

* [Toolbar items](./toolbar)
* [Feature Modules](./feature-module)