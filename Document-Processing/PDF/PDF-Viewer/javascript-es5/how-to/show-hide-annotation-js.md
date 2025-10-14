---
layout: post
title: Show and Hide Annotations in JavaScript PdfViewer | Syncfusion
description: Learn how to show or hide annotations in the Syncfusion Javascript PdfViewer control of Syncfusion Essential JS 2 and more.
platform: document-processing
control: PDF Viewer
publishingplatform: Javascript
documentation: ug
domainurl: ##DomainURL##
---

# Show and Hide Annotations in PDF Viewer

## Overview

This guide demonstrates how to show or hide annotations in the Syncfusion PDF Viewer control. This functionality allows users to temporarily remove annotations from view and restore them later without permanently deleting them.

## How to Show/Hide Annotations

**Step 1:** Follow the steps provided in the [link](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/javascript-es5/getting-started) to create a simple PDF Viewer sample.

**Step 2:** Create a Button in Your HTML File

Add a toggle button element in your HTML file that will control the visibility of annotations.

```html
<button id="hideBtn">Hide Annotations</button>
<button id="unhideBtn">Unhide Annotations</button>
<div id="PdfViewer" style="height:500px;width:100%;"></div>
```
**Step 3:** Initialize the PDF Viewer with Annotation Support

Set up the PDF Viewer with necessary modules including Annotation support.

```js
let exportObject = null;
var pdfviewer = new ej.pdfviewer.PdfViewer({
    resourceUrl: 'https://cdn.syncfusion.com/ej2/30.1.37/dist/ej2-pdfviewer-lib',
    documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
});
ej.pdfviewer.PdfViewer.Inject(ej.pdfviewer.TextSelection, ej.pdfviewer.TextSearch, ej.pdfviewer.Print,
    ej.pdfviewer.Navigation, ej.pdfviewer.Toolbar, ej.pdfviewer.Magnification, ej.pdfviewer.Annotation,
    ej.pdfviewer.FormDesigner, ej.pdfviewer.FormFields, ej.pdfviewer.PageOrganizer);
pdfviewer.appendTo('#PdfViewer');
```
**Step 4:** Add Toggle Functionality for Annotations

Implement the toggle button click event to show or hide annotations.

```js
// Function to hide annotations
function HideAnnotations() {
    pdfviewer.exportAnnotationsAsObject().then(function(value) {
        exportObject = value;
        pdfviewer.deleteAnnotations();
    });
}

// Function to unhide annotations
function UnHideAnnotations() {
    pdfviewer.importAnnotation(JSON.parse(exportObject));
}

// Add event listeners to buttons
document.getElementById('hideBtn').addEventListener('click', HideAnnotations);
document.getElementById('unhideBtn').addEventListener('click', UnHideAnnotations);
```
### Conclusion

This implementation provides a clean way to temporarily hide and show annotations in the PDF Viewer without permanently deleting them. This can be useful in scenarios where users need to temporarily view the document without annotations for better clarity.

[View sample in GitHub](https://github.com/SyncfusionExamples/javascript-pdf-viewer-examples/tree/master/How%20to)