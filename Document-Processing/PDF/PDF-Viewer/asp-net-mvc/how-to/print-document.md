---
layout: post
title: Print document in ASP.NET MVC PDF Viewer control | Syncfusion
description: Learn here all about Print document in Syncfusion ASP.NET MVC PDF Viewer control of Syncfusion Essential JS 2 and more.
platform: document-processing
control: PDF Viewer
publishingplatform: ASP.NET MVC
documentation: ug
---

# Print document in ASP.NET MVC PDF Viewer control

The PDF Viewer library allows you to print the PDF document programmatically using the **print()** method in the **PrintModule**.

The following steps are used to print the PDF document programmatically.

**Step 1:** Follow the steps provided in the [link](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/asp-net-mvc/getting-started/) to create a simple PDF Viewer sample.

**Step 2:** Add the following code snippet to perform the print operation.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<button id="Print" onclick="Print()">Print</button>

<div id="e-pv-e-sign-pdfViewer-div">
    @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>

<script>
    function Print() {
        var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
        pdfViewer.printModule.print();
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<button id="Print" onclick="Print()">Print</button>

<div id="e-pv-e-sign-pdfViewer-div">
    @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/PdfViewer/")).DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>

<script>
    function Print() {
        var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
        pdfViewer.printModule.print();
    }
</script>

{% endhighlight %}
{% endtabs %}
