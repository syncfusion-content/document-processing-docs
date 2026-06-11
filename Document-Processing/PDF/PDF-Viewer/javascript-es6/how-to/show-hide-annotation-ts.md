---
layout: post
title: Show or hide annotations in TypeScript PDF Viewer | Syncfusion
description: Learn how to toggle annotation visibility in the Syncfusion TypeScript PDF Viewer by exporting and importing annotations.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Show or hide annotations in PDF Viewer

### Overview

This guide shows how to temporarily hide annotations and restore them later in the TypeScript PDF Viewer. This is useful for presenting a clean view of the document while preserving annotation data for later use.

### How to Toggle Annotation Visibility

**Step 1:** Follow the steps in the [Get started with JavaScript ES6 PDF Viewer](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/javascript-es6/getting-started) guide to create a sample.

**Step 2:** Create Toggle Buttons in Your HTML File

Add button elements in your HTML file that will trigger the show and hide functionality.

```html
<button id="hideBtn">Hide Annotation</button>
<button id="unhideBtn">Show Annotation</button>
<!--Element which will render as PDF Viewer -->
<div id="PdfViewer"></div>
```

**Step 3:** Initialize the PDF Viewer with Required Modules

In your TypeScript file, initialize the PDF Viewer with necessary modules including the Annotation module.

```ts
import { PdfViewer, Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView,
TextSelection, TextSearch, Print, Annotation, FormFields, FormDesigner, PageOrganizer } from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject(Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView,
TextSelection, TextSearch, Print, Annotation, FormFields, FormDesigner, PageOrganizer);

// Create the PDF Viewer instance
let pdfviewer: PdfViewer = new PdfViewer();
pdfviewer.resourceUrl = 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib';
pdfviewer.documentPath = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
// Append the viewer to the container element
pdfviewer.appendTo('#PdfViewer');
```

**Step 4:** Implement the Show/Hide Annotation Functionality

Add the code to handle the show and hide functionality of annotations by exporting and importing them as needed.

```ts
// Variable to store exported annotations
let exportObject: any = "";

// Function to hide annotations
function HideAnnotations(): void {
    pdfviewer.exportAnnotationsAsObject().then(function(value: any) {
        exportObject = value;
        pdfviewer.deleteAnnotations();
    });
}

// Function to unhide annotations
function UnHideAnnotations(): void {
    pdfviewer.importAnnotation(JSON.parse(exportObject));
}

// Add event listeners to buttons
document.getElementById('hideBtn')?.addEventListener('click', HideAnnotations);
document.getElementById('unhideBtn')?.addEventListener('click', UnHideAnnotations);
```

### Conclusion

These steps add the ability to toggle annotation visibility in a PDF Viewer application for selective viewing.

[View sample in GitHub](https://github.com/SyncfusionExamples/typescript-pdf-viewer-examples/tree/master/How%20to)