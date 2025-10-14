---
layout: post
title: Access File Name in ASP.NET MVC Pdfviewer Component
description: Learn here all about Access File Name in Syncfusion ASP.NET MVC Pdfviewer component of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Access File Name
publishingplatform: ASP.NET MVC
documentation: ug
---


# Access file name

The PDF Viewer server library allows you to can access the filename of the loaded PDF document using the **documentLoad** and **downloadEnd** event. Using these events, we can access the filename while loading and downloading the PDF document.

The following steps are used to access the file name of loaded PDF document in PDF viewer control,

**Step 1:** Follow the steps provided in the [link](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/asp-net-mvc/getting-started/) to create simple PDF Viewer sample.

**Step 2:** Access file name using below code snippet,

{% tabs %}
{% highlight html tabtitle="Standalone" %}

```html
@Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/hive-succinctly.pdf").DocumentLoad("documentLoad").DownloadEnd("documentLoad").Render()

<script>
    function documentLoad(args) {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        args.fileName = "pdfsuccintly.pdf";
        //Sets the name of the file to be downloaded
        viewer.downloadFileName = "pdfsuccintly.pdf";
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
        args.fileName = "pdfsuccintly.pdf";
        //Sets the name of the file to be downloaded
        viewer.downloadFileName = "pdfsuccintly.pdf";
        console.log(args);
    }
</script>
```
{% endhighlight %}
{% endtabs %}

Download the sample [how to access file name](https://www.syncfusion.com/downloads/support/directtrac/general/ze/MVC_SAMPLE-609765609)