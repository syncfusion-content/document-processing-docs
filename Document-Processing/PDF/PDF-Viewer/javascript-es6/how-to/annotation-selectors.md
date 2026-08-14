---
layout: post
title: How to Customize Annotation Selectors in JavaScript | Syncfusion
description: Customize annotation selectors in the JavaScript (ES6) PDF Viewer using annotationSelectorSettings to control how users select and resize annotations.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# How to Customize Annotation Selectors in JavaScript (ES6) PDF Viewer

Customize the annotation selector using the [annotationSelectorSettings] (https://ej2.syncfusion.com/documentation/api/pdfviewer/#annotationselectorsettings) property of the PDF Viewer.

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

The `resizerShape` property accepts values such as `Circle` or `Square` to change the appearance of the annotation resize handles. The example assumes at least one annotation exists; to avoid errors, verify `viewer.annotationCollection.length > 0` before calling `editAnnotation`.

Sample: [How to customize the annotation selector](https://stackblitz.com/edit/typescript-u7xjdv?file=index.ts)

### Accessibility

Use descriptive button labels and add an `aria-label` when a button uses an icon-only label. Ensure the toolbar or control used to trigger selector changes is reachable by keyboard navigation.
