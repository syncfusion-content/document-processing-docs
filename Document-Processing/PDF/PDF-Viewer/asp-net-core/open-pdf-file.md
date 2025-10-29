---
layout: post
title: Load PDF from Base64 string in ASP.NET Core PDF Viewer | Syncfusion
description: Learn how to load a PDF document from a Base64 string in the Syncfusion ASP.NET Core PDF Viewer using the load method in a standalone setup.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Opening a PDF from Base64 data in PDF Viewer
### Overview

This article explains how to load a PDF document from a Base64 string in the Syncfusion ASP.NET Core PDF Viewer. This approach is useful when PDF data is received from an API, database, or other sources where the document is provided as Base64.

### Opening PDF from Base64 data

**Step 1:** Set up the PDF Viewer in an ASP.NET Core project

Follow the steps in the ASP.NET Core getting started [guide](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/asp-net-core/getting-started) for the PDF Viewer to create a sample

**Step 2:** Use the following code snippet to load a PDF document from a Base64 string

{% tabs %}
{% highlight html tabtitle="Standalone" %}

@page "{handler?}"
@model IndexModel
@{
    ViewData["Title"] = "Home page";
}

<div class="text-center">
    <button type="button" id="loadButton">Load PDF from Base64</button>
    <ejs-pdfviewer id="pdfviewer" style="height:600px" resourceUrl="https://cdn.syncfusion.com/ej2/28.1.33/dist/ej2-pdfviewer-lib" documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf">
    </ejs-pdfviewer>
</div>

<script type="text/javascript">
    document.getElementById('loadButton').addEventListener('click', function () {
        var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
            //Enter the base 64 Data
           var base64String = 'Enter Base64 Data';
           // Load the PDF document using the load() method with Base64 string
           pdfViewer.load(base64String, null); // Pass null for filename if not required
       });
</script>

{% endhighlight %}
{% endtabs %}

[View sample in GitHub](https://github.com/SyncfusionExamples/asp-core-pdf-viewer-examples/tree/master/How%20to)