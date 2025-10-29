---
layout: post
title: Get page info in ASP.NET MVC PDF Viewer | Syncfusion
description: Learn how to retrieve page height, width, and rotation using getPageInfo in the Syncfusion ASP.NET MVC PDF Viewer.
platform: document-processing
control: PDF Viewer
publishingplatform: ASP.NET MVC
documentation: ug
---

# Get page info in the ASP.NET MVC PDF Viewer

Use the **getPageInfo()** method to retrieve information for a specified page, including height, width, and rotation.

The following steps show how to use `getPageInfo`.

**Step 1:** Follow the steps in the [Syncfusion ASP.NET MVC PDF Viewer getting started guide](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/asp-net-mvc/getting-started) to create a sample.

**Step 2:** Use the following code to get the height, width, and rotation for a specified page.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

@using Syncfusion.EJ2
@{
    ViewBag.Title = "Home Page";
}

<div>
    <div style="height:500px;width:100%;">
        <!-- Button to trigger Page Info retrieval -->
        <button id="getPageInfo">GetPageInfo</button>
        <!-- Render PDF Viewer -->
        @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
    </div>
</div>

<!-- Ensure necessary Syncfusion scripts and styles are included -->
<script src="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2.min.js"></script>
<script type="text/javascript">
    window.onload = function () {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        // Add event listener for retrieving page information
        document.getElementById('getPageInfo').addEventListener('click', function () {
            retrievePageInfo();
        });
        function retrievePageInfo() {
            if (viewer) {
                // Set the page index for which info is required
                const pageIndex = 0;
                // To Retrieve and log the page information
                console.log(viewer.getPageInfo(pageIndex));
                // To Log the specific page information details to the console
                var pageInfo = viewer.getPageInfo(pageIndex);
                if (pageInfo) {
                    console.log(`Page Info for Page Index ${pageIndex}:`);
                    console.log(`Height: ${pageInfo.height}`);
                    console.log(`Width: ${pageInfo.width}`);
                    console.log(`Rotation: ${pageInfo.rotation}`);
                }
            }
        }
    };
</script>

{% endhighlight %}
{% endtabs %}

By following these steps, the page info API can be integrated and used in the ASP.NET MVC PDF Viewer.

[View Sample in GitHub](https://github.com/SyncfusionExamples/mvc-pdf-viewer-examples/tree/master/How%20to)
