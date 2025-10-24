---
layout: post
title: Load PDF from Base64 string in ASP.NET MVC PDF Viewer | Syncfusion
description: Learn how to open a PDF document from a Base64 data string in the Syncfusion ASP.NET MVC PDF Viewer using the load() method for standalone deployments.
platform: document-processing
control: PDF Viewer
publishingplatform: ASP.NET MVC
documentation: ug
---

# Load PDF from Base64 data in PDF Viewer

The Syncfusion<sup style="font-size:70%">&reg;</sup> ASP.NET MVC PDF Viewer can load a PDF document encoded as a Base64 string via the `load()` method. This approach is ideal for standalone deployments where the client receives PDF data from external sources such as APIs, databases, or user uploads.

Follow these steps to load a PDF from Base64 data:

**Step 1:** Create a PDF Viewer sample by following the [ASP.NET MVC getting started guide](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/asp-net-mvc/getting-started/). The guide covers setting up scripts, styles, and Razor markup.

**Step 2:** Add the following markup and script to your Razor view file. Place the script element after the viewer to ensure it initializes before the handler runs.

{% tabs %}
{% highlight html tabtitle="Standalone" %}

@using Syncfusion.EJ2
@{
    ViewBag.Title = "Home Page";
}
<div>
    <div style="height:500px;width:100%;">
        <button type="button" onclick="LoadFromBase64()">Load From Base64</button>
        @Html.EJS().PdfViewer("pdfViewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").ResourceUrl("https://cdn.syncfusion.com/ej2/28.1.33/dist/ej2-pdfviewer-lib").Render()
    </div>
</div>

    <script type="text/javascript">
        //Load PDF document from base64 String
        function LoadFromBase64() {
            var viewer = document.getElementById('pdfViewer').ej2_instances[0];
            //Enter Base64 Data
            viewer.load('Enter Base64 Data',null);
        }
    </script>

{% endhighlight %}
{% highlight html tabtitle="Server-Backed" %}
```html

<div>
    <div style="height:500px;width:100%;">
        <button type="button" onclick="LoadFromBase64()">Load From Base64</button>
        @Html.EJS().PdfViewer("pdfViewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").ServiceUrl(VirtualPathUtility.ToAbsolute("~/api/PdfViewer/")).Render()
    </div>
</div>

    <script type="text/javascript">
        //Load PDF document from base64 String
        function LoadFromBase64() {
            var viewer = document.getElementById('pdfViewer').ej2_instances[0];
            //Enter Base64 Data
            viewer.load('Enter Base64 Data',null);
        }
    </script>

```
{% endhighlight %}
{% endtabs %}

Replace the placeholder `Enter Base64 Data` with a valid PDF Base64 string. Ensure the resourceUrl version matches the viewer scripts.

[View sample in GitHub](https://github.com/SyncfusionExamples/mvc-pdf-viewer-examples/tree/master/How%20to)