---
layout: post
title: Print document in Typescript Pdfviewer control | Syncfusion
description: Learn here all about Print document in Syncfusion Typescript Pdfviewer control of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Print document
publishingplatform: Typescript
documentation: ug
domainurl: ##DomainURL##
---

# Print document in Typescript Pdfviewer control

The PDF Viewer library allows you to print the PDF document programmatically using the [**print()**](https://ej2.syncfusion.com/documentation/api/pdfviewer/#print) method in the **PrintModule**.

The following steps are used to print the PDF document programmatically.

**Step 1:** Follow the steps provided in the [link](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/javascript-es6/getting-started/) to create a simple PDF Viewer sample.

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

Find the Sample, [how to print the PDF document programmatically](https://stackblitz.com/edit/j9tu5j-cc3akh?devtoolsheight=33&file=index.ts)