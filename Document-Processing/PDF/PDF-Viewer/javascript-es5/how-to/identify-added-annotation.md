---
layout: post
title: How to Identify the Added Annotation Mode in JavaScript | Syncfusion
description: Identify the annotation mode that was used to add an annotation in the JavaScript (ES5) PDF Viewer so you can branch on the annotation type in your code.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# How to Identify the Added Annotation Mode in JavaScript (ES5) PDF

Determine whether an added annotation was UI-drawn, imported, or existing using the [annotationAddMode](https://ej2.syncfusion.com/documentation/api/pdfviewer/#annotationadd) property of the [annotationSelect](https://ej2.syncfusion.com/documentation/api/pdfviewer/#annotationselect) event.

**Step 1:** Follow the steps in the [Get started with JavaScript ES5 PDF Viewer](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/javascript-es5/getting-started/) guide to create a sample.

**Step 2:** Use the following code to identify the added annotation mode.

```javascript

viewer.annotationSelect =(args) =>{
console.log(args.annotationAddMode);
}

```

Find the sample: [Identify added annotation mode](https://stackblitz.com/edit/xntzu8?devtoolsheight=33&file=index.js)
