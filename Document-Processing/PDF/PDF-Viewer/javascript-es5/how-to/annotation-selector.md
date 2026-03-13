---
layout: post
title: Annotation selector customization | Syncfusion PDF Viewer
description: Learn how to customize annotation selectors in the JavaScript PDF Viewer component using annotationSelectorSettings with examples.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Customize annotation selectors in JavaScript ES5 PDF Viewer

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

The `resizerShape` property accepts values such as `Circle` or `Square` to change the appearance of the annotation resize handles. The example assumes at least one annotation exists; to avoid errors, verify `viewer.annotationCollection.length > 0` before calling `editAnnotation`.

Sample: [How to customize the annotation selector](https://stackblitz.com/edit/js-5p3ae6?file=index.js)

Accessibility: Use descriptive button labels and add an `aria-label` when a button uses an icon-only label. Ensure the toolbar or control used to trigger selector changes is reachable by keyboard navigation.