---
layout: post
title: Identify added annotation mode in TypeScript PDF Viewer | Syncfusion
description: Learn how to determine whether an added annotation was drawn, imported, or existing using the annotationSelect event in the TypeScript PDF Viewer.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Identify added annotation mode in TypeScript PDF Viewer

Determine whether an added annotation was UI-drawn, imported, or existing using the [annotationAddMode](https://ej2.syncfusion.com/documentation/api/pdfviewer/#annotationadd) property of the [annotationSelect](https://ej2.syncfusion.com/documentation/api/pdfviewer/#annotationselect) event.

**Step 1:** Follow the steps in the [Get started with JavaScript ES6 PDF Viewer](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/javascript-es6/getting-started/) guide to create a sample.

**Step 2:** Use the following code to identify the added annotation mode.

```ts

viewer.annotationSelect =(args) =>{
console.log(args.annotationAddMode);
}

```

Find the sample: [Identify added annotation mode](https://stackblitz.com/edit/nldhsr?devtoolsheight=33&file=index.ts)
