---
layout: post
title: How to Instantiate the PDF Viewer Dynamically in ASP.NET | Syncfusion
description: Instantiate the ASP.NET MVC PDF Viewer dynamically at runtime using JavaScript or C# code so the control is created only when it is needed.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# How to Instantiate the PDF Viewer Dynamically in ASP.NET MVC PDF

Create the Syncfusion<sup style="font-size:70%">&reg;</sup> PDF Viewer instance at runtime when a document request succeeds, instead of rendering it during the initial page load. This approach is useful when the PDF is determined after user input or must be fetched securely from a server endpoint.

Follow these steps to instantiate the component dynamically:

- Confirm that the application references the required Syncfusion EJ2 scripts and styles and that the PDF Viewer service endpoint is available in the ASP.NET MVC application.
- Add a container element and a button (or another trigger) to the Razor view. The trigger initiates an AJAX request that retrieves the document information.
- Inside the callback, create a new viewer instance, set its [`serviceUrl`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.PdfViewer.PdfViewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_serviceUrl) to the controller endpoint, assign the document identifier to [`documentPath`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.PdfViewer.PdfViewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_documentPath), and call `appendTo` to render the control in the container.

```html

<button id="loadPDFViewer" onclick="loadPDFViewer()">Load PDF Viewer</button>

<div id="e-pv-e-sign-pdfViewer-div">
    @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>

<script type="text/javascript">
    function loadPDFViewer() {
        var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
        var xhr = new XMLHttpRequest();
        xhr.open('GET', '/Home/GetPdfDocument', true);

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                var base64String = 'data:application/pdf;base64,' + xhr.responseText;
                pdfViewer.load(base64String);
            }
        };

        xhr.send();
    }
</script>

```

Ensure that the controller action returns the PDF file or document token expected by the viewer and that the response respects authentication requirements. Dispose of the dynamically created viewer when it is no longer needed to release resources.
