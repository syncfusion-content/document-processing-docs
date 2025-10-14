---
layout: post
title: Add Annotation in Text Search in JavaScript PdfViewer | Syncfusion
description: Learn how to add rectangle annotations using search text bounds in Syncfusion Javascript Pdfviewer control of Syncfusion Essential JS 2 and more.
platform: document-processing
control: PDF Viewer
publishingplatform: Javascript
documentation: ug
domainurl: ##DomainURL##
---

# Add Rectangle Annotations Using Search Text Bounds in PDF Viewer

## Overview

This guide demonstrates how to add rectangle annotations based on the bounds of highlighted search text in the PDF Viewer. This technique is useful for emphasizing search results with visual markers in annotation-supported applications.

## Steps to Add Rectangle Annotations on Search Result Highlight

**Step 1:** Follow the steps provided in the [link](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/javascript-es5/getting-started) to create a simple PDF Viewer sample.

**Step 2:** Initialize the PDF Viewer with Required Modules

```js
var pdfviewer = new ej.pdfviewer.PdfViewer({
  documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
  resourceUrl:'https://cdn.syncfusion.com/ej2/28.1.33/dist/ej2-pdfviewer-lib'
});
ej.pdfviewer.PdfViewer.Inject(ej.pdfviewer.TextSelection, ej.pdfviewer.TextSearch, ej.pdfviewer.Print, ej.pdfviewer.Navigation, ej.pdfviewer.Toolbar,
  ej.pdfviewer.Magnification, ej.pdfviewer.Annotation, ej.pdfviewer.FormDesigner, ej.pdfviewer.FormFields, ej.pdfviewer.PageOrganizer);
pdfviewer.appendTo('#PdfViewer');
```

**Step 3:** Implement code blocks to automatically add Rectangle Annotation on Search Result Highlight

Define a callback function for the `textSearchHighlight` event to add rectangle annotations

```js
// Highlight event handler for text search, which adds a rectangle annotation where the text is found
pdfviewer.textSearchHighlight = function(args){
  console.log(args);
  var pageNumber = args.pageNumber;
  var bounds = args.bounds;
  pdfviewer.annotation.addAnnotation("Rectangle", {
      offset: {x: bounds.left, y: bounds.top},
      pageNumber: pageNumber,
      width: bounds.width,
      height: bounds.height,
  });
}
```

**Step 3:** Add Search Controls

Ensure you have the appropriate HTML buttons for text search operations

```html
<button id="searchText">Search</button>
<button id="searchNext">Next</button>
<button id="searchCancel">Cancel</button>
```

Use the following JavaScript to handle search controls:

```js
// Event listener for initiating a search
document.getElementById("searchText").addEventListener("click", function() {
  pdfviewer.textSearchModule.searchText('PDF', false);
});

// Event listener for navigating to the next search result
document.getElementById("searchNext").addEventListener("click", function() {
  pdfviewer.textSearchModule.searchNext();
});

// Event listener for canceling the current search
document.getElementById("searchCancel").addEventListener("click", function() {
  pdfviewer.textSearchModule.cancelTextSearch();
});
```

By following this guide, you will enable the PDF Viewer to add rectangle annotations at search result locations, thus increasing the visibility of search results in your application.

[View Sample in GitHub](https://github.com/SyncfusionExamples/javascript-pdf-viewer-examples/tree/master/How%20to/)
