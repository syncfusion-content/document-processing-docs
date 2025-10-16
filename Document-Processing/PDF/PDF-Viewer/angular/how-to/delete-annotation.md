---
layout: post
title: Delete Annotation in Angular PDF Viewer component | Syncfusion
description: Learn how to delete annotations in the Syncfusion Angular PDF Viewer component of Essential JS 2.
platform: document-processing
control: Delete annotation
documentation: ug
domainurl: ##DomainURL##
---

# Delete a specific annotation using deleteAnnotationById

The PDF Viewer library allows deletion of a specific annotation from a PDF document using the `deleteAnnotationById()` method. This method deletes a specific annotation using its id.

Follow these steps to delete a specific annotation from a PDF document:

**Step 1:** Create a simple PDF Viewer sample by following the steps in this [guide](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/angular/getting-started).

**Step 2:** Use the following code snippet to delete a specific annotation using the `deleteAnnotationById()` method.

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