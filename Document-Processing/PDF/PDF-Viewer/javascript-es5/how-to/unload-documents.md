---
layout: post
title: How to Unload a Document in JavaScript (ES5) PDF Viewer | Syncfusion
description: Unload the current document in the JavaScript (ES5) PDF Viewer to free resources and prepare the viewer for loading a different PDF document.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# How to Unload a Document in JavaScript (ES5) PDF Viewer

The PDF Viewer provides the [unload()](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/index-default#unload) method to remove the currently loaded PDF from the viewer instance. Use this API to free memory or reset the viewer when navigating between documents or closing the viewer.

The following steps are used to unload the PDF document programmatically.

**Step 1:** Follow the steps provided in the [link](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/javascript-es5/getting-started) to create a simple PDF Viewer sample.

**Step 2:** Add the following code snippet to perform the unload operation.

```html
  <button id="unload">Unload Document</button>
```

```js
document.getElementById('unload').addEventListener('click', () => {
   // Unload the document.
  viewer.unload();
});
```

Find the Sample, [how to unload the PDF document programmatically](https://stackblitz.com/edit/vkr6f1?file=index.js)