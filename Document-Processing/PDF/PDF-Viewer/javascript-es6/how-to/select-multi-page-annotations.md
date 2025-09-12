---
layout: post
title: Select multi page annotations in Typescript Pdfviewer control | Syncfusion
description: Learn here all about Select multi page annotations in Syncfusion Typescript Pdfviewer control of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Select multi page annotations
publishingplatform: Typescript
documentation: ug
domainurl: ##DomainURL##
---

# Select multi page annotations in Typescript Pdfviewer control

To select a multi-page TextMarkup annotation as a single annotation in a Syncfusion PDF viewer, you can use by enabling the [**enableMultiPageAnnotation**](https://ej2.syncfusion.com/documentation/api/pdfviewer/#enablemultipageannotation) property. By default it is `false`.

Here is an example of how you can use the [**enableMultiPageAnnotation**](https://ej2.syncfusion.com/documentation/api/pdfviewer/#enablemultipageannotation) property to select the multi page TextMarkup annotation as a single annotation, export and import multi page annotation:

```ts

// Enable multi-page TextMarkup Annotation.
viewer.enableMultiPageAnnotation = true;

// Export Annotation
document.getElementById('export').addEventListener('click', () => {
  viewer.exportAnnotation();
});

// Import Annotation.
document.getElementById('import').addEventListener('click', () => {
  viewer.importAnnotation("Add Export annotation file content");
});

```

Find the sample [how to select multi-page TextMarkup annotation as single annotation](https://stackblitz.com/edit/xuyjgt-bjwrbw?file=index.ts)