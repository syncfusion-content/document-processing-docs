---
layout: post
title: Import export annotation in Javascript Pdfviewer control | Syncfusion
description: Learn here all about Import export annotation in Syncfusion Javascript Pdfviewer control of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Import export annotation
publishingplatform: Javascript
documentation: ug
domainurl: ##DomainURL##
---

# Import export annotation in Javascript Pdfviewer control

The PDF Viewer library allows you to import annotations from objects or streams instead of loading it as a file. To import such annotation objects, the PDF Viewer control must export the PDF annotations as objects using the [**ExportAnnotationsAsObject()**](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/#exportannotationsasobject) method. Only the annotation objects that are exported from the PDF Viewer can be imported.

The following steps are used to import and export annotations in various formats such as objects, JSON, and XFDF.

**Step 1:** Follow the steps provided in the [link](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/javascript-es5/getting-started/) to create a simple PDF Viewer sample.

**Step 2:** Use the following code snippet to perform import and export annotation.

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

[View Sample in GitHub](https://github.com/SyncfusionExamples/javascript-pdf-viewer-examples/tree/master/How%20to)