---
layout: post
title: Print a document in TypeScript PDF Viewer | Syncfusion
description: Learn how to programmatically print a PDF document using the print method in the Syncfusion TypeScript PDF Viewer.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Print a document in TypeScript PDF Viewer

Print a PDF document programmatically using the [print](https://ej2.syncfusion.com/documentation/api/pdfviewer/#print) method in the Print module.

The following steps are used to print the PDF document programmatically.

**Step 1:** Follow the steps in the [Get started with JavaScript ES6 PDF Viewer](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/javascript-es6/getting-started/) guide to create a sample.

**Step 2:** Add the following code snippet to perform the print operation.

```
 <button id="print">Print</button>
```

```ts
document.getElementById('print').addEventListener('click', ()=> {
   //Print the loaded document.
   viewer.printModule.print();
});
```

Find the sample: [Print the PDF document programmatically](https://stackblitz.com/edit/j9tu5j-cc3akh?devtoolsheight=33&file=index.ts)
