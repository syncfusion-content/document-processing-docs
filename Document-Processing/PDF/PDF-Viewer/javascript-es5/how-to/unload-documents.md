---
layout: post
title: Unload documents in Javascript Pdfviewer control | Syncfusion
description: Learn here all about Unload documents in Syncfusion Javascript Pdfviewer control of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Unload documents
publishingplatform: Javascript
documentation: ug
domainurl: ##DomainURL##
---

# Unload documents in Javascript Pdfviewer control

The PDF Viewer library allows you to unload the PDF document being display in the PDF Viewer control programmatically using the [**unload()**](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/#unload) method.

The following steps are used to unload the PDF document programmatically.

**Step 1:** Follow the steps provided in the [link](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/javascript-es5/getting-started/) to create a simple PDF Viewer sample.

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

Find the Sample, [how to unload the PDF document programmatically](https://stackblitz.com/edit/vkr6f1?file=index.js)