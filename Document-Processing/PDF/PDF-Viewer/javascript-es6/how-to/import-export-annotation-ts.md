---
layout: post
title: Import export annotation in Typescript Pdfviewer control | Syncfusion
description: Learn here all about Import export annotation in Syncfusion Typescript Pdfviewer control of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Import export annotation
publishingplatform: Typescript
documentation: ug
domainurl: ##DomainURL##
---

# Import export annotation in Typescript Pdfviewer control

The PDF Viewer library allows you to import annotations from objects or streams instead of loading it as a file. To import such annotation objects, the PDF Viewer control must export the PDF annotations as objects using the [**ExportAnnotationsAsObject()**](https://ej2.syncfusion.com/documentation/api/pdfviewer/#exportannotationsasobject) method. Only the annotations objects that are exported from the PDF Viewer can be imported.

The following steps are used to import and export annotations in various formats such as objects, JSON, and XFDF.

**Step 1:** Follow the steps provided in the [link](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/javascript-es6/getting-started/) to create a simple PDF Viewer sample.

**Step 2:** Use the following code snippet to perform import and export annotation.

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