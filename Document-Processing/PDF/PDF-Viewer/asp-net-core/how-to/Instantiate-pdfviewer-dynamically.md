---
layout: post
title: Dynamically instantiate the ASP.NET Core PDF Viewer | Syncfusion
description: Learn how to instantiate the Syncfusion ASP.NET Core PDF Viewer at runtime and load PDF documents on demand.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Dynamically instantiate the ASP.NET Core PDF Viewer

The Syncfusion<sup style="font-size:70%">&reg;</sup> ASP.NET Core PDF Viewer can be instantiated at runtime rather than during the initial page load. This dynamic approach is useful when the document to be displayed depends on user interaction or must be retrieved from a secure backend service.

Follow these steps to instantiate the viewer component programmatically:

1. **Verify Prerequisites:** Ensure your application references the required Syncfusion EJ2 script and style assets. The backend PDF Viewer service must be correctly configured in your ASP.NET Core application.
2. **Setup Container:** Add a target container element and a trigger (such as a button) to the Razor view.
3. **Initialize Component:** To create the viewer instance, configure the [`serviceUrl`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.PdfViewer.PdfViewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_ServiceUrl) and [`documentPath`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.PdfViewer.PdfViewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_DocumentPath), and then mount it using the `appendTo` method.

The following example demonstrates how to load the viewer dynamically after an AJAX request:

```html

<div style="width:100%;height:600px">
    <button id="loadPDF Viewer">Load PDF Viewer</button>
    <div id="pdfViewer" style="height: 100%;width: 100%;"></div>
</div>

<script>
    document.getElementById("loadPDF Viewer").addEventListener('click', function () {
        $.ajax({
            url: 'https://localhost:44327/pdfviewer/GetPdfDocument',
            type: "GET",
            success: function (data) {
                var viewer = new ej.pdfviewer.PdfViewer({
                    serviceUrl: "https://localhost:44327/pdfviewer",
                    documentPath: data,
                });
                viewer.appendTo("#pdfViewer");
            }
        });
    });
</script>

```

Ensure the controller action returns a valid PDF file path, stream, or base64 string supported by the viewer. For optimal performance, properly dispose of the viewer instance using the `destroy()` method when the container is removed or the document is no longer required.

[View Sample in GitHub](https://github.com/SyncfusionExamples/asp-core-pdf-viewer-examples/tree/master/Common/Instantiate%20PDF%20Viewer%20dynamically).
