---
layout: post
title: Print documents in ##Platform_Name## Pdfviewer control | Syncfusion
description: Learn here all about Print documents in Syncfusion ##Platform_Name## Pdfviewer control of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Print documents
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Print documents in ##Platform_Name## Pdfviewer control

The PDF Viewer library allows you to print the PDF document programmatically using the [**print()**](https://helpej2.syncfusion.com/documentation/api/pdfviewer/#print) method in the **PrintModule**.

The following steps are used to print the PDF document programmatically.

**Step 1:** Follow the steps provided in the [link](https://helpej2.syncfusion.com/javascript/documentation/pdfviewer/getting-started/) to create a simple PDF Viewer sample.

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

Find the Sample, [how to print the PDF document programmatically](https://stackblitz.com/edit/rawhaj?devtoolsheight=33&file=index.js)