---
layout: post
title: Dynamically instantiate the ASP.NET Core PDF Viewer | Syncfusion
description: Learn how to instantiate the Syncfusion ASP.NET Core PDF Viewer at runtime and load PDF documents on demand.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Dynamically instantiate the ASP.NET Core PDF Viewer

Create the Syncfusion<sup style="font-size:70%">&reg;</sup> PDF Viewer instance at runtime when a document request succeeds, instead of rendering it during the initial page load. This approach is useful when the PDF is determined after user input or must be fetched securely from a server endpoint.

Follow these steps to instantiate the component dynamically:

- Confirm that the application references the required Syncfusion EJ2 scripts and styles and that the PDF Viewer service endpoint is available in the ASP.NET Core application.
- Add a container element and a button (or another trigger) to the Razor view. The trigger initiates an AJAX request that retrieves the document information.
- Inside the callback, create a new viewer instance, set its [`serviceUrl`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.PdfViewer.PdfViewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_serviceUrl) to the controller endpoint, assign the document identifier to [`documentPath`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.PdfViewer.PdfViewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_documentPath), and call `appendTo` to render the control in the container.

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

Ensure that the controller action returns the PDF file or document token expected by the viewer and that the response respects authentication requirements. Dispose of the dynamically created viewer when it is no longer needed to release resources.

[View Sample in GitHub](https://github.com/SyncfusionExamples/asp-core-pdf-viewer-examples/tree/master/Common/Instantiate%20PDF%20Viewer%20dynamically).
