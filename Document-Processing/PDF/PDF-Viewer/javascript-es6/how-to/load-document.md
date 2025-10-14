---
layout: post
title: Load document in Typescript Pdfviewer control | Syncfusion
description: Learn here all about Load document in Syncfusion Typescript Pdfviewer control of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Load document
publishingplatform: Typescript
documentation: ug
domainurl: ##DomainURL##
---

# Load document in Typescript Pdfviewer control

The PDF Viewer library allows to switch or load the PDF documents dynamically after the initial load operation. To achieve this, load the PDF document as a base64 string or file name in PDF Viewer control using the [**Load()**](https://ej2.syncfusion.com/documentation/api/pdfviewer/#load) method dynamically.

The following steps are used to load the PDF document dynamically.

**Step 1:** Follow the steps provided in the [link](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/javascript-es6/getting-started/) to create a simple PDF Viewer sample.

**Step 2:** Use the following code snippet to load PDF document using base64 string.

```
<button id='load1'>LoadDocumentFromBase64</button>
```

```ts
// Load PDF document from Base64 string
document.getElementById('load1').addEventListener('click', () => {
  viewer.load(
    'data:application/pdf;base64,'+ AddBase64String, null);
}
```

**Step 3:** Use the following code snippet to load PDF document using document name.

```
<button id='load2'>LoadDocument</button>
```

```ts
// Load PDF document using file name
document.getElementById('load2').addEventListener('click', () => {
  viewer.load('https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf', null);
});

```

Find the sample, [how to load PDF documents dynamically](https://stackblitz.com/edit/1tkfra-a8yca8?devtoolsheight=33&file=index.ts)