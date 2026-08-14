---
layout: post
title: How to Select Multi-Page Annotations in JavaScript (ES5) | Syncfusion
description: Select multiple annotations across pages in the JavaScript (ES5) PDF Viewer so users can perform batch actions like delete or export on the selection.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# How to Select Multi-Page Annotations in JavaScript (ES5) PDF Viewer

Select a multi-page TextMarkup annotation as a single annotation by enabling the [enableMultiPageAnnotation](https://ej2.syncfusion.com/documentation/api/pdfviewer/#enablemultipageannotation) property (default: `false`).

The following example shows how to select, export, and import a multi-page annotation:

```javascript

// Enable multi-page TextMarkup Annotation.
viewer.enableMultiPageAnnotation = true;

// Export Annotation
document.getElementById('export').addEventListener('click', () => {
  viewer.exportAnnotation();
});

// Import Annotation.
document.getElementById('import').addEventListener('click', () => {
  viewer.importAnnotation("Add Export annotation file content");
});

```

Find the sample: [Select a multi-page TextMarkup annotation as a single annotation](https://stackblitz.com/edit/1epvap-vewcbt?file=index.js)