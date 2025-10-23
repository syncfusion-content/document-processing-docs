---
layout: post
title: Capture current page number in ASP.NET MVC PDF Viewer | Syncfusion
description: Discover how to read the current page number in the Syncfusion ASP.NET MVC PDF Viewer using built-in properties.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Capture the current page number

The PDF Viewer server library allows you to capture the page number that is currently visible when a PDF document is loaded. Use the [**currentPageNumber**](https://help.syncfusion.com/cr/aspnetmvc-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_CurrentPageNumber) property to obtain the page that is in view.

The following steps outline how to capture the current page number.

**Step 1:** Follow the steps in the [Getting Started with ASP.NET MVC PDF Viewer guide](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/asp-net-mvc/getting-started) to configure a simple PDF Viewer sample, including the required script and style references.

**Step 2:** Place the following markup and script in the Razor view after the PDF Viewer component renders to capture the current page number on demand.


{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<button onclick="currentPage()">currentpage</button>

<div id="e-pv-e-sign-pdfViewer-div">
    @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
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

<div id="e-pv-e-sign-pdfViewer-div">
    @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/PdfViewer/")).DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
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
