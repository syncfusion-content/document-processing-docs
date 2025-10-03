---
layout: post
title: Show and Hide Annotations in TypeScript PdfViewer | Syncfusion
description: Learn how to show and hide annotations in the Syncfusion Typescript Pdfviewer control of Syncfusion Essential JS 2 and more.
platform: document-processing
control: PDF Viewer
publishingplatform: Typescript
documentation: ug
domainurl: ##DomainURL##
---

# Show and Hide Annotations in PDF Viewer

### Overview

This guide demonstrates how to toggle the visibility of annotations in the Syncfusion PDF Viewer using TypeScript. This feature is useful when you want to temporarily hide annotations for a cleaner view or show them again as needed.

### How to Toggle Annotation Visibility

**Step 1:** Follow the steps provided in the [link](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/javascript-es6/getting-started) to create a simple PDF Viewer sample.

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

// Create the PDF viewer instance
let pdfviewer: PdfViewer = new PdfViewer();
pdfviewer.resourceUrl = 'https://cdn.syncfusion.com/ej2/30.1.37/dist/ej2-pdfviewer-lib';
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

By implementing these steps, you can easily add functionality to toggle the visibility of annotations in your PDF Viewer application. This feature enhances user experience by allowing selective viewing of annotations.

[View sample in GitHub](https://github.com/SyncfusionExamples/typescript-pdf-viewer-examples/tree/master/How%20to)