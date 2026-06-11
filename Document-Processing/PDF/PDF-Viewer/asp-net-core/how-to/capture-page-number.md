---
layout: post
title: Capture current page number in ASP.NET Core PDF Viewer | Syncfusion
description: Discover how to read the current page number in the Syncfusion ASP.NET Core PDF Viewer using built-in properties.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Capture the current page number in ASP.NET Core PDF Viewer

Retrieve the page number of the currently displayed page using the [**currentPageNumber**](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/#currentpagenumber) property. This is useful for tracking navigation or implementing custom page navigation logic.

Follow these steps to capture the current page number on demand.

**Step 1:** Follow the [Getting Started with ASP.NET Core PDF Viewer guide](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/asp-net-core/getting-started) to set up a basic PDF Viewer sample with required script and style references.

**Step 2:** Add a button and script to retrieve and display the current page number. Place the following code in the Razor view after the PDF Viewer component:


{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<button onclick="currentPage()">Get Current Page</button>

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
        alert('Current page number is ' + pageNumber);
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<button onclick="currentPage()">Get Current Page</button>

<div style="width:100%;height:600px">
    <ejs-pdfviewer
        id="pdfviewer"
        documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
        serviceUrl="/Index">
    </ejs-pdfviewer>
</div>

<script>
    function currentPage() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        var pageNumber = viewer.currentPageNumber;
        alert('Current page number is ' + pageNumber);
    }
</script>

{% endhighlight %}
{% endtabs %}

The script retrieves the PDF Viewer instance and accesses the `currentPageNumber` property to display the current page in an alert dialog when the button is clicked.

[View sample on GitHub](https://github.com/SyncfusionExamples/asp-core-pdf-viewer-examples/tree/master/How%20to/Capture%20the%20current%20page%20number)
