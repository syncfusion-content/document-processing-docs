---
layout: post
title: Select multi-page annotations in TypeScript PDF Viewer | Syncfusion
description: Learn how to select multi-page TextMarkup annotations as a single annotation using enableMultiPageAnnotation in the Syncfusion TypeScript PDF Viewer.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Select multi-page annotations in TypeScript PDF Viewer

Select a multi-page TextMarkup annotation as a single annotation by enabling the [enableMultiPageAnnotation](https://ej2.syncfusion.com/documentation/api/pdfviewer/#enablemultipageannotation) property (default: `false`).

The following example shows how to select, export, and import a multi-page annotation:

```ts

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

Find the sample: [Select a multi-page TextMarkup annotation as a single annotation](https://stackblitz.com/edit/xuyjgt-bjwrbw?file=index.ts)
