---
layout: post
title: Identify added annotation mode in JavaScript PDF Viewer | Syncfusion
description: Learn how to determine whether an added annotation was drawn, imported, or existing using the annotationSelect event in the JavaScript PDF Viewer.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Identify added annotation mode in JavaScript PDF Viewer

Determine whether an added annotation was UI-drawn, imported, or existing using the [annotationAddMode](https://ej2.syncfusion.com/documentation/api/pdfviewer/#annotationadd) property of the [annotationSelect](https://ej2.syncfusion.com/documentation/api/pdfviewer/#annotationselect) event.

**Step 1:** Follow the steps in the [Get started with JavaScript ES5 PDF Viewer](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/javascript-es5/getting-started/) guide to create a sample.

**Step 2:** Use the following code to identify the added annotation mode.

```javascript

viewer.annotationSelect =(args) =>{
console.log(args.annotationAddMode);
}

```

Find the sample: [Identify added annotation mode](https://stackblitz.com/edit/xntzu8?devtoolsheight=33&file=index.js)
