---
layout: post
title: Customize annotation selectors in React PDF Viewer
description: Learn how to customize annotation selectors in the React PDF Viewer component using annotationSelectorSettings with examples.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Customize annotation selectors in TypeScript PDF Viewer

Use the [annotationSelectorSettings](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/#annotationselectorsettings) property to configure the appearance and behavior of annotation selectors. This includes selection handles and resizers (for example, handle shape and size), which determine how users interact with annotations during editing.

The example below changes the selector's resizer handle shape to circular and opens an existing annotation for editing. Setting `resizerShape = 'Circle'` updates the selector appearance to circular resizer handles; ensure an annotation exists before calling `editAnnotation` to avoid runtime errors.

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