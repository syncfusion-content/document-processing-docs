---
layout: post
title: Get page info in ASP.NET Core PDF Viewer | Syncfusion
description: Learn how to retrieve page height, width, and rotation using getPageInfo in the Syncfusion ASP.NET Core PDF Viewer.
platform: document-processing
control: PDF Viewer
publishingplatform: ASP.NET Core
documentation: ug
---

# Get page info in the ASP.NET Core PDF Viewer

Use the `getPageInfo()` method to retrieve information for a specified page, including height, width, and rotation.

The following steps show how to use `getPageInfo`.

**Step 1:** Follow the steps in the [Syncfusion ASP.NET Core PDF Viewer getting started guide](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/asp-net-core/getting-started) to create a sample.

**Step 2:** Use the following code to get the height, width, and rotation for a specified page.

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

By following these steps, the page info API can be integrated and used in the ASP.NET Core PDF Viewer.

[View sample in GitHub](https://github.com/SyncfusionExamples/asp-core-pdf-viewer-examples/tree/master/How%20to)
