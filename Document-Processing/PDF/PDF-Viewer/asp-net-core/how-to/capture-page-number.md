---
layout: post
title: Capture Page Number in ASP.NET Core Pdfviewer Component
description: Learn here all about Capture Page Number in Syncfusion ASP.NET Core Pdfviewer component of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Capture Page Number
publishingplatform: ASP.NET Core
documentation: ug
---

# Capture the current page number being viewed

The PDF Viewer server library allows you to capture the page number that is currently being viewed in the load PDF document. Use the [**currentPageNumber**](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/#currentpagenumber) property to get the page number which is currently in view.

The following steps are used to capture the current page number.

**Step 1:** Follow the steps provided in the [link](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/asp-net-core/getting-started) to create a simple PDF Viewer sample.

**Step 2:** Use the following code snippet to Capture the current page number being viewed.


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

[View sample in GitHub](https://github.com/SyncfusionExamples/asp-core-pdf-viewer-examples/tree/master/How%20to/Capture%20the%20current%20page%20number)