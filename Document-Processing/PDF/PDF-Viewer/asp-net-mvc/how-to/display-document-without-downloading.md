---
layout: post
title: Display PDFs without downloading in ASP.NET MVC PDF Viewer
description: Learn how to display PDF documents without triggering downloads by using the Syncfusion ASP.NET MVC PDF Viewer.
platform: document-processing
control: PDF Viewer
publishingplatform: ASP.NET MVC
documentation: ug
---

# Display document without downloading

The PDF Viewer server library allows the control to reload a PDF from memory so users can view the file without downloading it to the local device by calling the **load** method.

Use the following steps to display the document in the viewer without initiating a browser download.

**Step 1:** Follow the steps in the [Getting Started with ASP.NET MVC PDF Viewer guide](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/asp-net-mvc/getting-started) to create a sample and reference the required EJ2 scripts, styles, and (if needed) the server controller.

**Step 2:** Use the following code snippet to reload the document from the saved blob. Place the script after the PDF Viewer markup so it runs once the viewer instance is available.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<button onclick="downloadDocument()">downloadDocument</button>

<div id="e-pv-e-sign-pdfViewer-div">
    @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>

<script>
    function downloadDocument() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        viewer.saveAsBlob().then(function (value) {
            var data = value;
            var reader = new FileReader();
            reader.readAsDataURL(data);
            reader.onload = () => {
                var base64data = reader.result;
                console.log(base64data);
                viewer.load(base64data, null);
            };
        });
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<button onclick="downloadDocument()">downloadDocument</button>

<div id="e-pv-e-sign-pdfViewer-div">
    @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/PdfViewer/")).DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>

<script>
    function downloadDocument() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        viewer.saveAsBlob().then(function (value) {
            var data = value;
            var reader = new FileReader();
            reader.readAsDataURL(data);
            reader.onload = () => {
                var base64data = reader.result;
                console.log(base64data);
                viewer.load(base64data, null);
            };
        });
    }
</script>

{% endhighlight %}
{% endtabs %}

Both **Standalone** and **Server-Backed** examples share the same client logic; configure the `serviceUrl` in the server-backed scenario so the viewer can delegate processing to the ASP.NET MVC controller.
