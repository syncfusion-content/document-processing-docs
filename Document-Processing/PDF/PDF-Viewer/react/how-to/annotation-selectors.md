---
layout: post
title: Customize annotation selectors in React PDF Viewer
description: Learn how to customize annotation selectors in the React PDF Viewer component using annotationSelectorSettings with examples.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Customize annotation selectors in TypeScript PDF Viewer

Customize the annotation selector using the [annotationSelectorSettings](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/#annotationselectorsettings) property of the PDF Viewer.

Example: Customize the selector of a shape annotation

```

 <button id="annotationSelector">annotationSelector</button>

```

```ts

document.getElementById('annotationSelector').addEventListener('click', () => {
  viewer.rectangleSettings.annotationSelectorSettings.resizerShape = 'Circle';
  viewer.annotationModule.editAnnotation(viewer.annotationCollection[0]);
});

```

Sample: [How to customize the annotation selector](https://stackblitz.com/edit/react-dnkbqh66-tsqcqdcx?file=index.js,index.html)