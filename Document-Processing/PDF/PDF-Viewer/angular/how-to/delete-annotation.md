---
layout: post
title: Delete annotation in Angular PDF Viewer component | Syncfusion
description: Learn here all about Delete annotation in Syncfusion Angular PDF Viewer component of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Delete annotation
documentation: ug
domainurl: ##DomainURL##
---

# Delete a specific annotation using deleteAnnotationById

This article shows how to remove a specific annotation from a PDF document using the `deleteAnnotationById()` method. The example below demonstrates a simple delete flow; for production code prefer accessing the viewer instance with Angular `@ViewChild` rather than `document.getElementById`.

The following steps are used to delete a specific annotation from PDF Document:

**Step 1:** Create a basic PDF Viewer sample by following the [getting-started](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/angular/getting-started) guide.

**Step 2:** Use the following snippet to trigger deletion using `deleteAnnotationById()`.

```html
<button (click)="deleteAnnotationbyId()">Delete Annotation by Id</button>
```

```typescript
// Delete Annotation by id.
deleteAnnotationbyId() {
  var viewer = (<any>document.getElementById('pdfViewer')).ej2_instances[0];
  viewer.annotationModule.deleteAnnotationById(
    viewer.annotationCollection[0].annotationId
  );
}
```

Find the sample [how to delete a specific annotation using deleteAnnotationById](https://stackblitz.com/edit/angular-pfuexf?file=app.component.ts)