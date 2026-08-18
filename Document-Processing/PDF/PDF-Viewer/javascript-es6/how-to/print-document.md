---
layout: post
title: How to Print the PDF in JavaScript (ES6) PDF Viewer | Syncfusion
description: Print the loaded PDF in the JavaScript (ES6) PDF Viewer from custom UI controls using the print method with optional mode and quality settings.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# How to Print the PDF in JavaScript (ES6) PDF Viewer

Print a PDF document programmatically using the [print] (https://ej2.syncfusion.com/documentation/api/pdfviewer/#print) method in the Print module.

The following steps are used to print the PDF document programmatically.

**Step 1:** Follow the steps in the [Get started with JavaScript ES6 PDF Viewer](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/javascript-es6/getting-started) guide to create a sample.

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
