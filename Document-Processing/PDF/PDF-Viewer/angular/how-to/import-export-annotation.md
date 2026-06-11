---
layout: post
title: Import & Export Annotations in Angular PDF Viewer | Syncfusion
description: Explore how to handle PDF annotations with import and export features in Syncfusion Angular PDF Viewer component.
platform: document-processing
control: Import export annotation
documentation: ug
domainurl: ##DomainURL##
---

# Import Export annotation in Angular PDF Viewer component

The PDF Viewer control supports exporting and importing annotations in multiple formats: JSON, XFDF, or as native annotation objects. Use `exportAnnotation('Json')` or `exportAnnotation('Xfdf')` for serialized formats, and `exportAnnotationsAsObject()` to obtain the in-memory annotation objects that can be re-imported with `importAnnotation()`.

The following steps show how to export annotations in different formats and import annotation objects back into the viewer.

**Step 1:** Follow the steps provided in the [getting started guide](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/angular/getting-started) to create a simple PDF Viewer sample.

**Step 2:** Use the following code snippet to perform import and export annotation.

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
        // Store the exported object in a local variable or persist it remotely.
        // `value` is the annotation object (not a serialized JSON string).
        this.exportedAnnotations = value;
      });
    }
    // Import annotations that were exported as object.
    Import(): void {
      var viewer = (<any>document.getElementById('pdfViewer')).ej2_instances[0];
        // Pass the annotation object directly to importAnnotation.
        // If the annotations were serialized, parse them back into an object first.
        viewer.importAnnotation(this.exportedAnnotations);
    }

```

[View sample in GitHub](https://github.com/SyncfusionExamples/angular-pdf-viewer-examples/tree/master/How%20to)