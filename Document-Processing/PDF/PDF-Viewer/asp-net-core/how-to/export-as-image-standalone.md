---
layout: post
title: Export PDF pages as images in Syncfusion ASP.NET Core PDF Viewer
description: Learn how to export PDF pages as Base64-encoded images by using the Syncfusion ASP.NET Core PDF Viewer component.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Export PDF pages as images in ASP.NET Core PDF Viewer

The PDF Viewer allows you to export individual pages or specific page ranges as Base64-encoded image strings directly from the client side.

## Export a single page

To export a specific page as a Base64-encoded image string, use the **exportAsImage()** method. This method returns a promise that resolves to the image data.

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

### Export with custom size

Custom size for the exported image can also be specified by passing a `Size` object as the second parameter:

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

## Export a range of pages

To export multiple pages within a range, use the **exportAsImages()** method. This method returns a promise that resolves to an array of Base64-encoded strings.

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
