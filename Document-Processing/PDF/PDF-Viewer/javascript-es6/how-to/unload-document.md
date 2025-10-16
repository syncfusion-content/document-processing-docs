---
layout: post
title: Unload document in Typescript Pdfviewer control | Syncfusion
description: Learn here all about Unload document in Syncfusion Typescript Pdfviewer control of Syncfusion Essential JS 2 and more.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Unload document in Typescript PDF Viewer control

The PDF Viewer library allows you to unload the PDF document being display in the PDF Viewer control programmatically using the [**unload()**](https://ej2.syncfusion.com/documentation/api/pdfviewer/#unload) method.

The following steps are used to unload the PDF document programmatically.

**Step 1:** Follow the steps provided in the [link](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/javascript-es6/getting-started/) to create a simple PDF Viewer sample.

**Step 2:** Add the following code snippet to perform the unload operation.

```
  <button id="unload">Unload Document</button>
```

```ts
document.getElementById('unload').addEventListener('click', () => {
   // Unload the document.
  viewer.unload();
});
```

Find the Sample, [how to unload the PDF document programmatically](https://stackblitz.com/edit/jhnx4g?file=index.ts)