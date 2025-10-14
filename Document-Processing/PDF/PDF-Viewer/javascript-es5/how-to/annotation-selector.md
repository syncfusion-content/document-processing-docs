---
layout: post
title: Annotation selector in Javascript Pdfviewer control | Syncfusion
description: Learn here all about Annotation selector in Syncfusion Javascript Pdfviewer control of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Annotation selector
publishingplatform: Javascript
documentation: ug
domainurl: ##DomainURL##
---

# Annotation selector in Javascript Pdfviewer control

To customize the annotation selector in Syncfusion PDF Viewer, you can use the [**annotationSelectorSettings**](https://ej2.syncfusion.com/documentation/api/pdfviewer/#annotationselectorsettings) property of the PdfViewer control.

Here is an example of how you can customize the selector of the shape annotation:

```

 <button id="annotationSelector">annotationSelector</button>

```

```javascript

document.getElementById('annotationSelector').addEventListener('click', () => {
  viewer.rectangleSettings.annotationSelectorSettings.resizerShape = 'Circle';
  viewer.annotationModule.editAnnotation(viewer.annotationCollection[0]);
});

```

Find the sample [how to customize the annotation selector](https://stackblitz.com/edit/js-5p3ae6?file=index.js)