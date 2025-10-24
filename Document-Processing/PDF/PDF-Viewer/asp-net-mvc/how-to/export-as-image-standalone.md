---
layout: post
title: Export PDF pages as images in Syncfusion ASP.NET MVC PDF Viewer
description: Learn how to export PDF pages as Base64-encoded images by using the Syncfusion ASP.NET MVC PDF Viewer component.
platform: document-processing
control: PDF Viewer
publishingplatform: ASP.NET MVC
documentation: ug
---

# Export PDF pages as images

The PDF Viewer library enables exporting individual pages as Base64-encoded image strings by using the **exportAsImage()** method and exporting page ranges as Base64-encoded image strings by using the **exportAsImages()** method.

Follow these steps to export PDF pages as images.

**Step 1:** Follow the steps in the [Getting Started with ASP.NET MVC PDF Viewer guide](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/asp-net-mvc/getting-started) to create a sample and reference the required EJ2 script and style resources.

**Step 2:** Add the following code to enable exporting a specified page or a range of pages as Base64-encoded image strings. Place the script after the viewer markup so it executes once the PDF Viewer instance is available.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<button type="button" onclick="exportAsImage()">ExportAsImage</button>
<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/hive-succinctly.pdf").Render()
</div>

<script>
    function exportAsImage() {
        var imageDetail;
        var pageIndex = 1;
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        viewer.exportAsImage(pageIndex).then(function (value) {
            imageDetail = value;
            console.log(imageDetail);
        });
    }
</script>

{% endhighlight %}
{% endtabs %}

Use the following code snippet to export a specified page as a Base64-encoded image string while supplying a custom image size:

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<button type="button" onclick="exportAsImageWithSize()">ExportAsImageWithSize</button>
<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/hive-succinctly.pdf").Render()
</div>

<script>
 function exportAsImageWithSize() {
        let imageDetail;
        let pageIndex = 1;
        let size: Size = new Size(200,500);
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        viewer.exportAsImage(pageIndex,size).then(function (value) {
            imageDetail = value;
            console.log(imageDetail);
        });
    }
</script>

{% endhighlight %}
{% endtabs %}

Use this code snippet to export a range of pages as Base64-encoded image strings:

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<button type="button" onclick="exportAsImages()">ExportAsImages</button>
<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/hive-succinctly.pdf").Render()
</div>

<script>
 function exportAsImages() {
    let startPageIndex: number = 1;
    let endPageIndex: number = 5;
     var viewer = document.getElementById('pdfviewer').ej2_instances[0];
    viewer.exportAsImages(startPageIndex, endPageIndex).then(function (value) {
        imageDetails = value;
        console.log(imageDetails);
    });
}
</script>

{% endhighlight %}
{% endtabs %}

Use this code snippet to export a range of pages as Base64-encoded image strings while specifying a custom image size:

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<button type="button" onclick="exportAsImageWithSize()">ExportAsImageWithSize</button>
<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/hive-succinctly.pdf").Render()
</div>

<script>
 function exportAsImageWithSize() {
        let startPageIndex: number = 1;
        let endPageIndex: number = 5;
        let size: Size = new Size(200,500);
        var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
        viewer.exportAsImages(startPageIndex, endPageIndex, size).then(function (value) {
            imageDetails = value;
            console.log(imageDetails);
        });
    }
</script>

{% endhighlight %}
{% endtabs %}

By following these steps, you can integrate the export-as-image APIs into the EJ2 PDF Viewer. Store the generated Base64 data securely and consider optimizing image size when working with large documents.
