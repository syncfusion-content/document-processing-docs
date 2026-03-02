---
layout: post
title: Get page info in ASP.NET Core PDF Viewer | Syncfusion
description: Learn how to retrieve page height, width, and rotation using getPageInfo in the Syncfusion ASP.NET Core PDF Viewer.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Retrieve page information in ASP.NET Core PDF Viewer

The Syncfusion<sup style="font-size:70%">&reg;</sup> ASP.NET Core PDF Viewer provides the `getPageInfo()` method to programmatically retrieve metadata for a specific page. This metadata includes the page height, width, and current rotation angle.

Follow these steps to integrate the page information API into your application:

**Step 1:** Initialize your PDF Viewer project by following the [ASP.NET Core getting started guide](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/asp-net-core/getting-started).

**Step 2:** Invoke the `getPageInfo()` method using the page index (zero-based) to retrieve the required metadata.

The following example demonstrates how to retrieve and log page details when a button is clicked:

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

@page "{handler?}"
@model IndexModel
@{
    ViewData["Title"] = "Home page";
}

<div class="text-center">
    <button id="getPageInfo">Get Page Info</button>
    <ejs-pdfviewer id="pdfviewer" style="height:600px" resourceUrl="https://cdn.syncfusion.com/ej2/27.2.2/dist/ej2-pdfviewer-lib" documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf">
    </ejs-pdfviewer>
</div>

<script type="text/javascript">
document.addEventListener('DOMContentLoaded', function () {
    var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];

    document.getElementById('getPageInfo').addEventListener('click', function () {
        // Set the page index for which info is required
        const pageIndex = 0;

        // Retrieve and log the page information
        console.log(pdfViewer.getPageInfo(pageIndex));

        // Log the specific page information details to the console
        var pageInfo = pdfViewer.getPageInfo(pageIndex);

        if (pageInfo) {
            console.log(`Page Info for Page Index ${pageIndex}:`);
            console.log(`Height: ${pageInfo.height}`);
            console.log(`Width: ${pageInfo.width}`);
            console.log(`Rotation: ${pageInfo.rotation}`);
        }
    });
});
</script>

{% endhighlight %}
{% endtabs %}

The `getPageInfo()` method returns an object containing the spatial dimensions and orientation of the specified page, which is essential for custom layout calculations or rendering overlays.

[View sample in GitHub](https://github.com/SyncfusionExamples/asp-core-pdf-viewer-examples/tree/master/How%20to)
