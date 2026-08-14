---
layout: post
title: How to Print the PDF in ASP.NET Core PDF Viewer | Syncfusion
description: Print the loaded PDF in the ASP.NET Core PDF Viewer from custom UI controls using the print method with optional mode and quality settings.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# How to Print the PDF in ASP.NET Core PDF Viewer

Print PDF documents programmatically by calling the **print()** method on the **PrintModule**. This allows users to send the current document to a printer or save it as a file.

Follow these steps to add print functionality to your PDF Viewer instance.

**Step 1:** Follow the [Getting Started with ASP.NET Core PDF Viewer guide](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/asp-net-core/getting-started/) to set up a basic PDF Viewer sample.

**Step 2:** Add the following code snippet to implement the print operation:

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<button id="Print" onclick="Print()">Print</button>

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf">
    </ejs-pdfviewer>
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

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   serviceUrl='/Index'
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf">
    </ejs-pdfviewer>
</div>

<script>
    function Print() {
        var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
        pdfViewer.printModule.print();
    }
</script>

{% endhighlight %}
{% endtabs %}
