---
layout: post
title: Capture the current page number in ASP.NET Core PDF Viewer
description: Discover how to read the current page number in the Syncfusion ASP.NET Core PDF Viewer using built-in properties.
platform: document-processing
control: PDF Viewer
publishingplatform: ASP.NET Core
documentation: ug
---

# Capture the current page number being viewed

The PDF Viewer server library allows you to capture the page number that is currently visible when a PDF document is loaded. Use the [**currentPageNumber**](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/#currentpagenumber) property to obtain the page that is in view.

The following steps outline how to capture the current page number.

**Step 1:** Follow the steps in the [Getting Started with ASP.NET Core PDF Viewer guide](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/asp-net-core/getting-started) to configure a simple PDF Viewer sample, including the required script and style references.

**Step 2:** Place the following markup and script in the Razor view after the PDF Viewer component renders to capture the current page number on demand.


{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<button onclick="currentPage()">currentpage</button>

<div style="width:100%;height:600px">
    <ejs-pdfviewer
        id="pdfviewer"
        documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf">
    </ejs-pdfviewer>
</div>

<script>
    function currentPage() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        var pageNumber = viewer.currentPageNumber;
        alert("current page number is" + pageNumber);
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<button onclick="currentPage()">currentpage</button>

<div style="width:100%;height:600px">
    <ejs-pdfviewer
        id="pdfviewer"
        documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
        serviceUrl='/Index'>
    </ejs-pdfviewer>
</div>

<script>
    function currentPage() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        var pageNumber = viewer.currentPageNumber;
        alert("current page number is" + pageNumber);
    }
</script>

{% endhighlight %}
{% endtabs %}

The script retrieves the PDF Viewer instance from the page, reads the `currentPageNumber` property, and surfaces the value in an alert dialog when the button is clicked.

[View sample in GitHub](https://github.com/SyncfusionExamples/asp-core-pdf-viewer-examples/tree/master/How%20to/Capture%20the%20current%20page%20number)
