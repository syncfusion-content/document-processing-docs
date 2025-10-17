---
layout: post
title: Customize annotation selectors in JavaScript PDF Viewer
description: Learn how to customize annotation selectors in the JavaScript PDF Viewer component using annotationSelectorSettings with examples.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Customize annotation selectors in JavaScript PDF Viewer

Customize the annotation selector using the [annotationSelectorSettings](https://ej2.syncfusion.com/documentation/api/pdfviewer/#annotationselectorsettings) property of the PDF Viewer.

Example: Customize the selector of a shape annotation

```

 <button id="annotationSelector">annotationSelector</button>

```

```javascript

document.getElementById('annotationSelector').addEventListener('click', () => {
  viewer.rectangleSettings.annotationSelectorSettings.resizerShape = 'Circle';
  viewer.annotationModule.editAnnotation(viewer.annotationCollection[0]);
});

```

Sample: [How to customize the annotation selector]
(https://stackblitz.com/edit/js-5p3ae6?file=index.js)