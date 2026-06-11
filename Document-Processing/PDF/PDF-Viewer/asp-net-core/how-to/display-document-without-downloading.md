---
layout: post
title: Display PDF without download in ASP.NET Core PDF Viewer | Syncfusion
description: Learn how to display PDF documents without triggering downloads by using the Syncfusion ASP.NET Core PDF Viewer.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Display PDFs without downloading in ASP.NET Core PDF Viewer

View PDF documents within the viewer without triggering a browser download by loading the PDF from memory using the **load()** method. This allows users to view documents directly in the viewer without saving files to their device.

Follow these steps to display documents without downloads:

**Step 1:** Follow the [Getting Started with ASP.NET Core PDF Viewer guide](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/asp-net-core/getting-started) to set up a basic viewer with required EJ2 scripts, styles, and optionally a server controller.

**Step 2:** Use the following code to reload the document from a saved blob. Place the script after the PDF Viewer markup so it executes once the viewer is initialized:

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<button onclick="downloadDocument()">downloadDocument</button>

<div style="width:100%;height:600px">
    <ejs-pdfviewer
            id="pdfviewer"
            documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf">
    </ejs-pdfviewer>
</div>

<script>
    function downloadDocument() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        viewer.saveAsBlob().then(function (value) {
            var data = value;
            var reader = new FileReader();
            reader.readAsDataURL(data);
            reader.onload = function () {
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

<div style="width:100%;height:600px">
    <ejs-pdfviewer
            id="pdfviewer"
            documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf">
    </ejs-pdfviewer>
</div>

<script>
    function downloadDocument() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        viewer.saveAsBlob().then(function (value) {
            var data = value;
            var reader = new FileReader();
            reader.readAsDataURL(data);
            reader.onload = function () {
                var base64data = reader.result;
                console.log(base64data);
                viewer.load(base64data, null);
            };
        });
    }
</script>

{% endhighlight %}
{% endtabs %}

The client-side logic is identical in both **Standalone** and **Server-Backed** modes. In the server-backed scenario, configure the `serviceUrl` property so the viewer can delegate processing to your ASP.NET Core controller.

[View sample on GitHub](https://github.com/SyncfusionExamples/asp-core-pdf-viewer-examples/tree/master/How%20to/Display%20document%20without%20downloading)
