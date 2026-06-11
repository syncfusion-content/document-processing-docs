---
layout: post
title: Import and export annotations in TypeScript PDF Viewer | Syncfusion
description: Learn how to import and export annotations as objects, JSON, or XFDF in the Syncfusion TypeScript PDF Viewer.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Import and export annotations in TypeScript PDF Viewer

Import annotations from objects or streams instead of files. To import such objects, first export annotations as objects using the [exportAnnotationsAsObject()](https://ej2.syncfusion.com/documentation/api/pdfviewer/#exportannotationsasobject) method. Only objects exported from the PDF Viewer can be imported.

Use the following steps to import and export annotations as objects, JSON, or XFDF.

**Step 1:** Follow the steps provided in the [link](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/javascript-es6/getting-started/) to create a simple PDF Viewer sample.

**Step 2:** Use the following code to perform import and export operations.

```
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
//Import annotation that are exported as object.
if (Import) {
    Import.addEventListener('click', () => {
        pdfviewer.importAnnotation(JSON.parse(exportObject));
    });
}

```

[View sample in GitHub](https://github.com/SyncfusionExamples/typescript-pdf-viewer-examples/tree/master/How%20to)
