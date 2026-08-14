---
layout: post
title: How to Identify the Added Annotation Mode in JavaScript | Syncfusion
description: Identify the annotation mode that was used to add an annotation in the JavaScript (ES6) PDF Viewer so you can branch on the annotation type in your code.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# How to Identify the Added Annotation Mode in JavaScript (ES6) PDF

Determine whether an added annotation was UI-drawn, imported, or existing using the [annotationAddMode](https://ej2.syncfusion.com/documentation/api/pdfviewer/#annotationadd) property of the [annotationSelect](https://ej2.syncfusion.com/documentation/api/pdfviewer/#annotationselect) event.

**Step 1:** Follow the steps in the [Get started with JavaScript ES6 PDF Viewer](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/javascript-es6/getting-started/) guide to create a sample.

**Step 2:** Use the following code to identify the added annotation mode.

```ts

viewer.annotationSelect =(args) =>{
console.log(args.annotationAddMode);
}

```

Find the sample: [Identify added annotation mode](https://stackblitz.com/edit/nldhsr?devtoolsheight=33&file=index.ts)
