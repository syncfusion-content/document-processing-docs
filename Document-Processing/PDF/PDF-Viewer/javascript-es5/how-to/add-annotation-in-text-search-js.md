---
layout: post
title: Add rectangle annotation via textSearch | Syncfusion PDF Viewer
description: Learn to add rectangle annotations using text search bounds in the JavaScript PDF Viewer component, including initialization and search controls.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Add rectangle annotations using text search bounds in JS PDF Viewer

A concise guide to adding rectangle annotations at highlighted text search results in the JavaScript PDF Viewer to visually emphasize matches and improve readability.

## Steps to add rectangle annotations on search result highlight

**Step 1:** Follow the steps provided in the [link](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/javascript-es5/getting-started) to create a simple PDF Viewer sample.

**Step 2:** Initialize the PDF Viewer with the required modules

```js
var pdfviewer = new ej.pdfviewer.PdfViewer({
  documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
  resourceUrl:'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib'
});
ej.pdfviewer.PdfViewer.Inject(ej.pdfviewer.TextSelection, ej.pdfviewer.TextSearch, ej.pdfviewer.Print, ej.pdfviewer.Navigation, ej.pdfviewer.Toolbar,
  ej.pdfviewer.Magnification, ej.pdfviewer.Annotation, ej.pdfviewer.FormDesigner, ej.pdfviewer.FormFields, ej.pdfviewer.PageOrganizer);
pdfviewer.appendTo('#PdfViewer');
```

**Step 3:** Add a rectangle annotation when a search result is highlighted

Define a callback for the `textSearchHighlight` event to add a rectangle annotation at each match.

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

**Step 4:** Add search controls

Ensure that the HTML includes buttons for text search operations.

```html
<button id="searchText">Search</button>
<button id="searchNext">Next</button>
<button id="searchCancel">Cancel</button>
```

Use the following JavaScript code to handle search controls:

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

Following these steps enables the PDF Viewer to add rectangle annotations at search result locations, improving the visibility of matches.

[View Sample in GitHub](https://github.com/SyncfusionExamples/javascript-pdf-viewer-examples/tree/master/How%20to/)
