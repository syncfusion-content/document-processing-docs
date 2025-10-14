---
layout: post
title: Identify added annotation mode in Typescript Pdfviewer control | Syncfusion
description: Learn here all about Identify added annotation mode in Syncfusion Typescript Pdfviewer control of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Identify added annotation mode
publishingplatform: Typescript
documentation: ug
domainurl: ##DomainURL##
---

# Identify added annotation mode in Typescript Pdfviewer control

The PDF Viewer library allows you to identify whether the added annotations in PDF document is UI drawn, imported or existing annotation. Annotation mode can be identified using the [**annotationAddMode**](https://ej2.syncfusion.com/documentation/api/pdfviewer/#annotationadd) property of [**annotationSelect**](https://ej2.syncfusion.com/documentation/api/pdfviewer/#annotationselect) event.

**Step 1:** Follow the steps provided in the [link](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/javascript-es6/getting-started/) to create simple PDF Viewer sample.

**Step 2:** The following code snippet explains how to identify added annotation mode.

```ts

viewer.annotationSelect =(args) =>{
console.log(args.annotationAddMode);
}

```

Find the Sample [how to identify added annotation mode](https://stackblitz.com/edit/nldhsr?devtoolsheight=33&file=index.ts)
