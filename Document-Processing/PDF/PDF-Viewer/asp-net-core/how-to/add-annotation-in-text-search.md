---
layout: post
title: Add Rectangle Annotation via Text Search in ASP.NET Core | Syncfusion
description: Learn to add rectangle annotations using text search bounds in the Syncfusion ASP.NET Core PDF Viewer component, including initialization and search controls.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Add rectangle annotations using text search in ASP.NET Core

A concise guide to adding rectangle annotations at highlighted text search results in the ASP.NET Core PDF Viewer to visually emphasize matches and improve readability.

## Steps to add rectangle annotations on search result highlight

**Step 1:** Follow the steps provided in the [Syncfusion PDF Viewer Getting Started guide](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/asp-net-core/getting-started) to create a simple ASP.NET Core PDF Viewer sample.

**Step 2:** Configure the PDF Viewer to add rectangle annotations based on the bounds of highlighted search text.

```cs

@page "{handler?}"
@model IndexModel
@{
    ViewData["Title"] = "Home page";
}
<div class="text-center">
    <!-- Control buttons for PDF Search functionality -->
    <div style="margin-top: 20px;">
        <button onclick="handleSearch()">Search PDF</button>
        <button onclick="handleSearchNext()">Search Next</button>
        <button onclick="handleCancelSearch()">Cancel Search</button>
    </div>
    <ejs-pdfviewer id="pdfviewer" style="height:600px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                   resourceUrl="https://cdn.syncfusion.com/ej2/28.1.33/dist/ej2-pdfviewer-lib"
                   textSearchHighlight="handleTextSearchHighlight">
    </ejs-pdfviewer>
</div>
<script type="text/javascript">
    // Function to get the PDF Viewer instance
    function getPdfViewerInstance() {
        return document.getElementById('pdfviewer').ej2_instances[0];
    }
    // Initiates a search for the term 'PDF' in the document
    function handleSearch() {
        const pdfViewer = getPdfViewerInstance();
        pdfViewer.textSearchModule.searchText('PDF', false);
    }
    // Searches for the next occurrence of the term
    function handleSearchNext() {
        const pdfViewer = getPdfViewerInstance();
        pdfViewer.textSearchModule.searchNext();
    }
    // Cancels the current text search operation
    function handleCancelSearch() {
        const pdfViewer = getPdfViewerInstance();
        pdfViewer.textSearchModule.cancelTextSearch();
    }
    // Event handler for annotation addition
    // Adds a rectangle annotation around highlighted text
    function handleTextSearchHighlight(args) {
        console.log(args);   // Log details of the added annotation around highlighted text
        const pdfViewer = getPdfViewerInstance();
        const bounds = args.bounds;
        pdfViewer.annotationModule.addAnnotation('Rectangle', {
            pageNumber: args.pageNumber,
            offset: { x: bounds.left, y: bounds.top },
            width: bounds.width,
            height: bounds.height,
        });
    }
</script>

```

**Step 3:** Handle the `textSearchHighlight` event to add a rectangle annotation for each highlighted match. The `handleTextSearchHighlight` callback in the script adds the annotation by using the bounds returned from the search event.

**Step 4:** Ensure the Razor markup includes buttons for search, search next, and cancel operations so users can control the text search workflow.

Following these steps enables the PDF Viewer to add rectangle annotations at search result locations, improving the visibility of matches in your ASP.NET Core application.

[View sample in GitHub](https://github.com/SyncfusionExamples/asp-core-pdf-viewer-examples/tree/master/How%20to)
