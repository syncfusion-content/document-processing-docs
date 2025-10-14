---
layout: post
title: Annotation selectors in Typescript Pdfviewer control | Syncfusion
description: Learn here all about Annotation selectors in Syncfusion Typescript Pdfviewer control of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Annotation selectors
publishingplatform: Typescript
documentation: ug
domainurl: ##DomainURL##
---

# Annotation selectors in Typescript Pdfviewer control

To customize the annotation selector in Syncfusion PDF Viewer, you can use the [**annotationSelectorSettings**](https://ej2.syncfusion.com/documentation/api/pdfviewer/#annotationselectorsettings) property of the PdfViewer control.

Here is an example of how you can customize the selector of the shape annotation:

```

 <button id="annotationSelector">annotationSelector</button>

```

```ts

document.getElementById('annotationSelector').addEventListener('click', () => {
  viewer.rectangleSettings.annotationSelectorSettings.resizerShape = 'Circle';
  viewer.annotationModule.editAnnotation(viewer.annotationCollection[0]);
});

```

Find the sample [how to customize the annotation selector](https://stackblitz.com/edit/typescript-u7xjdv?file=index.ts)