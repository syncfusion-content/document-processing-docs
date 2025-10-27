---
layout: post
title: Unload document in JavaScript PDF Viewer | Syncfusion
description: Learn here all about Unload document in Syncfusion JavaScript PDF Viewer control of Syncfusion Essential JS 2 and more.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Unload document in JavaScript PDF Viewer

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