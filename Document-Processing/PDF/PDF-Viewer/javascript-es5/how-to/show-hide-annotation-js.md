---
layout: post
title: Show or hide annotations in JavaScript PDF Viewer | Syncfusion
description: Learn how to toggle annotation visibility in the Syncfusion JavaScript PDF Viewer by exporting and importing annotations.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Show or hide annotations in the PDF Viewer

### Overview

Toggle annotation visibility in the Syncfusion PDF Viewer using JavaScript. Hide annotations for a cleaner view and show them again as needed.

### How to Toggle Annotation Visibility

**Step 1:** Follow the steps in the [Get started with JavaScript ES5 PDF Viewer](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/javascript-es5/getting-started) guide to create a sample.

**Step 2:** Create Toggle Buttons in Your HTML File

Add button elements in your HTML file that will trigger the show and hide functionality.

```html
<button id="hideBtn">Hide Annotations</button>
<button id="unhideBtn">Unhide Annotations</button>
<div id="PdfViewer" style="height:500px;width:100%;"></div>
```

**Step 3:** Initialize the PDF Viewer with Required Modules

In your JavaScript file, initialize the PDF Viewer with necessary modules including the Annotation module.

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

**Step 4:** Implement the Show/Hide Annotation Functionality

Add the code to handle the show and hide functionality of annotations by exporting and importing them as needed.

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

These steps add the ability to toggle annotation visibility in a PDF Viewer application for selective viewing.

[View sample in GitHub](https://github.com/SyncfusionExamples/javascript-pdf-viewer-examples/tree/master/How%20to)