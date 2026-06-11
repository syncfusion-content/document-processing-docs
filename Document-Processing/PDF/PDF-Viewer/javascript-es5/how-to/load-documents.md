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

The PDF Viewer supports loading or switching PDF documents at runtime after the initial viewer initialization. Use the [load](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/#load) method to open a document from a URL or a Base64 string.

The following steps show common approaches for loading documents dynamically.

**Step 1:** Follow the getting started guide to create a basic JavaScript PDF Viewer sample: https://help.syncfusion.com/document-processing/pdf/pdf-viewer/javascript/getting-started

**Step 2:** Use the following code snippet to load the document from a Base64 string.
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

**Step 3:** Use the following code snippet to load a PDF document from a URL (document name)

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