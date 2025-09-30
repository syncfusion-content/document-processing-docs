---
layout: post
title: Import and Export Annotations in Angular PDF Viewer | Syncfusion
description: Learn how to import and export annotations in Syncfusion Angular PDF Viewer component of Essential JS 2.
platform: document-processing
control: Import export annotation
documentation: ug
domainurl: ##DomainURL##
---

# Import and Export Annotations

The PDF Viewer library allows importing annotations from objects or streams, rather than directly from a file. To facilitate this, the PDF Viewer control must export annotations as objects using the [**ExportAnnotationsAsObject()**](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/#exportannotationsasobject) method. Only annotation objects previously exported from the PDF Viewer can be imported.

To import and export annotations in formats such as objects, JSON, and XFDF, refer to these steps:

**Step 1:** Refer to the [getting started guide](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/angular/getting-started) to set up a basic Angular PDF Viewer.

**Step 2:** Use the following code snippet to perform annotation import and export operations.

```html
  <button (click)="ExportAsJson()" >ExportAsJson</button>
  <button (click)="ExportAsXfdf()" >ExportAsXfdf</button>
  <button (click)="ExportAsObject()" >ExportAsObject</button>
  <button (click)="Import()" >Import</button>
```

```ts

    // export the annotation in JSON format.
    ExportAsJson(): void {
      var viewer = (<any>document.getElementById('pdfViewer')).ej2_instances[0];
      viewer.exportAnnotation('Json');
    }
    // export the annotation in XFDF format.
    ExportAsXfdf(): void {
      var viewer = (<any>document.getElementById('pdfViewer')).ej2_instances[0];
      viewer.exportAnnotation('Xfdf');
    }
    // export the annotation as object.
    ExportAsObject(): void {
      var viewer = (<any>document.getElementById('pdfViewer')).ej2_instances[0];
      return viewer.exportAnnotationsAsObject().then((value: any) => {
        exportObject = value;
      });
    }
    //Import annotation that are exported as object.
    Import(): void {
      var viewer = (<any>document.getElementById('pdfViewer')).ej2_instances[0];
        viewer.importAnnotation(JSON.parse(exportObject));
    }

```

[View sample in GitHub](https://github.com/SyncfusionExamples/angular-pdf-viewer-examples/tree/master/How%20to)