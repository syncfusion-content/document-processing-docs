---
layout: post
title: Add Rectangle Annotation via Text Search in ASP.NET MVC | Syncfusion
description: Learn to add rectangle annotations using text search bounds in the Syncfusion ASP.NET MVC PDF Viewer component, including initialization and search controls.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Add rectangle annotations using text search bounds in PDF Viewer

A concise guide to adding rectangle annotations at highlighted text search results in the ASP.NET MVC PDF Viewer to visually emphasize matches and improve readability.

## Steps to add rectangle annotations on search result highlight

**Step 1:** Follow the steps provided in the [Syncfusion PDF Viewer Getting Started guide](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/asp-net-mvc/getting-started) to create a simple ASP.NET MVC PDF Viewer sample.

**Step 2:** Configure the PDF Viewer to add rectangle annotations based on the bounds of highlighted search text.

```cs
@using Syncfusion.EJ2
@{
    ViewBag.Title = "Home Page";
}
<!-- Control buttons for PDF Search functionality -->
<div style="margin-top: 20px;">
    <button onclick="handleSearch()">Search PDF</button>
    <button onclick="handleSearchNext()">Search Next</button>
    <button onclick="handleCancelSearch()">Cancel Search</button>
</div>
<div>
    <!-- Render PDF Viewer using the Html helper method -->
    @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").TextSearchHighlight("handleTextSearchHighlight").Render()
</div>


<script type="text/javascript">
    window.onload = function () {
        // Access the PDF Viewer instance on page load
        var pdfViewer = getPdfViewerInstance();
        pdfViewer.enableLocalStorage = true; // Enable or configure as needed
    };
    // Function to get the PDF Viewer instance conveniently
    function getPdfViewerInstance() {
        return document.getElementById('pdfviewer').ej2_instances[0];
    }
    // Initiate search for the term 'PDF' in the document
    function handleSearch() {
        const pdfViewer = getPdfViewerInstance();
        pdfViewer.textSearchModule.searchText('PDF', false);
    }
    // Move to next search result
    function handleSearchNext() {
        const pdfViewer = getPdfViewerInstance();
        pdfViewer.textSearchModule.searchNext();
    }
    // Cancel any ongoing text search operation
    function handleCancelSearch() {
        const pdfViewer = getPdfViewerInstance();
        pdfViewer.textSearchModule.cancelTextSearch();
    }
    // Event handler for when text is highlighted during search
    function handleTextSearchHighlight(args) {
        const pdfViewer = getPdfViewerInstance();
        console.log(args);  // Display highlight event data
        const bounds = args.bounds;
        // Add rectangle annotation around highlighted text
        pdfViewer.annotationModule.addAnnotation('Rectangle', {
            pageNumber: args.pageNumber,
            offset: { x: bounds.left, y: bounds.top },
            width: bounds.width,
            height: bounds.height,
            strokeColor: "red", // Customize the stroke color if desired
            borderWidth: 2
        });
    }
</script>
```

**Step 3:** Handle the `textSearchHighlight` event to add a rectangle annotation for each highlighted match. The `handleTextSearchHighlight` callback in the script adds the annotation by using the bounds returned from the search event.

Following these steps enables the PDF Viewer to add rectangle annotations at search result locations, improving the visibility of matches in your ASP.NET mvc application.

[View sample in GitHub](https://github.com/SyncfusionExamples/mvc-pdf-viewer-examples/tree/master/How%20to)
