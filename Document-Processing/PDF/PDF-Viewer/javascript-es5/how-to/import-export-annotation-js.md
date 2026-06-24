---
layout: post
title: Import and export annotations in JavaScript PDF Viewer | Syncfusion
description: Learn how to import and export annotations as objects, JSON, or XFDF in the Syncfusion JavaScript PDF Viewer.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Import and export annotations in JavaScript PDF Viewer

Import annotations from objects or streams instead of files. To import such objects, first export annotations as objects using the [exportAnnotationsAsObject()](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/#exportannotationsasobject) method. Only objects exported from the PDF Viewer can be imported.

Use the following steps to import and export annotations as objects, JSON, or XFDF.

**Step 1:** Follow the steps provided in this [guide](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/javascript-es5/getting-started/) to create a simple PDF Viewer sample.

**Step 2:** Use the following code to perform import and export operations.

```
<button id="ExportXfdf">Export XFDF</button>
<button id="ExportJSON">Export JSON</button>
<button id="export">Export as Object</button>
<button id="import">Import</button>
```

```js

//Export annotation as object.
// Export annotations in XFDF format.
document.getElementById('ExportXfdf').addEventListener('click', function () {
  viewer.exportAnnotation('Xfdf');
});

// Export annotations in JSON format.
document.getElementById('ExportJSON').addEventListener('click', function () {
  viewer.exportAnnotation('Json');
});

// Export annotations as an object.
document.getElementById('export').addEventListener('click', () => {
  viewer.exportAnnotationsAsObject().then(function(value) {
    exportObject = value;
  });
});

// Import annotations that were exported as objects.
document.getElementById('import').addEventListener('click', () => {
  viewer.importAnnotation(JSON.parse(exportObject));
});

```

[View sample in GitHub](https://github.com/SyncfusionExamples/javascript-pdf-viewer-examples/tree/master/How%20to)