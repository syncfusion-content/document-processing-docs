---
layout: post
title: How to Import and Export Annotations in JavaScript (ES6) | Syncfusion
description: Import and export annotations in the JavaScript (ES6) PDF Viewer as JavaScript objects, JSON strings, or XFDF for backup, sharing, and migration.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# How to Import and Export Annotations in JavaScript (ES6) PDF Viewer

Import annotations from objects or streams instead of files. To import such objects, first export annotations as objects using the [exportAnnotationsAsObject()] (https://ej2.syncfusion.com/documentation/api/pdfviewer/#exportannotationsasobject) method. Only objects exported from the PDF Viewer can be imported.

Use the following steps to import and export annotations as objects, JSON, or XFDF.

**Step 1:** Follow the steps provided in the [link](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/javascript-es6/getting-started) to create a simple PDF Viewer sample.

**Step 2:** Use the following code to perform import and export operations.

```html
    <button id="ExportXfdf">ExportXfdf</button>
    <button id="ExportJSON">ExportJSON</button>
    <button id="export">ExportasObject</button>
    <button id="import">Import</button>
```

```ts
enum AnnotationDataFormat {
    Json = 'Json',
    Xfdf = 'Xfdf'
  }

let ExportXfdf = document.getElementById('ExportXfdf');
if (ExportXfdf) {
    ExportXfdf.addEventListener('click', function () {
        // export the annotation in XFDF format.
        pdfviewer.exportAnnotation(AnnotationDataFormat.Xfdf);
    });
}

let ExportJSON = document.getElementById('ExportJSON');
if (ExportJSON) {
    ExportJSON.addEventListener('click', function () {
        // export the annotation in JSON format.
        pdfviewer.exportAnnotation(AnnotationDataFormat.Json);
    });
}

let exportObject: any;
let ExportAnnotationsAsObject = document.getElementById('export');
//Export annotation as object.
if (ExportAnnotationsAsObject) {
    ExportAnnotationsAsObject.addEventListener('click', () => {
        pdfviewer.exportAnnotationsAsObject().then(function (value: any) {
            exportObject = value;
        });
    });
}

let Import = document.getElementById('import');
//Import annotations that were exported as an object.
if (Import) {
    Import.addEventListener('click', () => {
        pdfviewer.importAnnotation(JSON.parse(exportObject));
    });
}

```

[View sample in GitHub](https://github.com/SyncfusionExamples/typescript-pdf-viewer-examples/tree/master/How%20to)
