---
layout: post
title: How to Access the File Name of a PDF in ASP.NET MVC PDF | Syncfusion
description: Access the file name of a PDF loaded into the ASP.NET MVC PDF Viewer so you can show, copy, or use it from custom JavaScript or C# code.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# How to Access the File Name of a PDF in ASP.NET MVC PDF Viewer

The Syncfusion ASP.NET MVC PDF Viewer allows you to access the filename of the loaded PDF document, and to customize the filename used when the document is downloaded. This is achieved using the `DocumentLoad` event.

The following steps demonstrate how to access and modify the filename in the PDF Viewer:

**Step 1:** Create an ASP.NET MVC PDF Viewer sample by following the [getting started guide](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/asp-net-mvc/getting-started).

**Step 2:** Access and change the filename using the code snippets below.

In the `DocumentLoad` event handler, you can access the original filename from `args.fileName`. To change the filename for download, set the `viewer.downloadFileName` property.

{% tabs %}
{% highlight html tabtitle="Standalone" %}

```html
@Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/hive-succinctly.pdf").DocumentLoad("documentLoad").DownloadEnd("documentLoad").Render()

<script>
    function documentLoad(args) {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        args.fileName = "pdf-succinctly.pdf";
        //Sets the name of the file to be downloaded
        viewer.downloadFileName = "pdf-succinctly.pdf";
        console.log(args);
    }
</script>

```
{% endhighlight %}
{% highlight html tabtitle="Server-Backed" %}

```html
@Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/hive-succinctly.pdf").ServiceUrl(VirtualPathUtility.ToAbsolute("~/PdfViewer/")).DocumentLoad("documentLoad").DownloadEnd("documentLoad").Render()

<script>
    function documentLoad(args) {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        args.fileName = "pdf-succinctly.pdf";
        //Sets the name of the file to be downloaded
        viewer.downloadFileName = "pdf-succinctly.pdf";
        console.log(args);
    }
</script>
```
{% endhighlight %}
{% endtabs %}

Download the sample [how to access file name](https://www.syncfusion.com/downloads/support/directtrac/general/ze/MVC_SAMPLE-609765609)
