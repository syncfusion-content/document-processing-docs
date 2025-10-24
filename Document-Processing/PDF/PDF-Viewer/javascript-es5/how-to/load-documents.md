---
layout: post
title: Load documents dynamically in JavaScript PDF Viewer | Syncfusion
description: Learn how to load or switch PDF documents dynamically in the Syncfusion JavaScript PDF Viewer using the load method.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Load documents dynamically in JavaScript PDF Viewer

Load or switch PDF documents dynamically after the initial load. Use the [load](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/#load) method to load a PDF by Base64 string or file name.

The following steps show how to load a PDF dynamically.

**Step 1:** Follow the steps in the [Get started with JavaScript ES5 PDF Viewer](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/javascript-es5/getting-started/) guide to create a sample.

**Step 2:** Use the following code to load a PDF using a Base64 string.

```
<button id='load1'>LoadDocumentFromBase64</button>
```

```javascript
// Load PDF document from Base64 string
document.getElementById('load1').addEventListener('click', () => {
  viewer.load(
    'data:application/pdf;base64,'+ AddBase64String, null);
}
```

**Step 3:** Use the following code to load a PDF by document name.

```
<button id='load2'>LoadDocument</button>
```

```javascript
// Load PDF document using file name
document.getElementById('load2').addEventListener('click', () => {
  viewer.load('https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf', null);
});

```

Find the sample: [Load PDF documents dynamically](https://stackblitz.com/edit/w82pgd?devtoolsheight=33&file=index.js)