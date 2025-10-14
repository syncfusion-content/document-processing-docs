---
layout: post
title: Delete annotation in Typescript Pdfviewer control | Syncfusion
description: Learn here all about Delete annotation in Syncfusion Typescript Pdfviewer control of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Delete annotation
publishingplatform: Typescript
documentation: ug
domainurl: ##DomainURL##
---

# Delete annotation in Typescript Pdfviewer control

The PDF Viewer library allows you to delete a specific annotation from a PDF document. Deleting a specific annotation can be done using the **deleteAnnotationById()** method. This method is used to delete a specific annotation using its id.

The following steps are used to delete a specific annotation from PDF Document.

**Step 1:** Follow the steps provided in the [link](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/javascript-es6/getting-started/) to create simple PDF Viewer sample.

**Step 2:** Use the following code snippet to delete a specific annotation using `deleteAnnotationById()` method.

```
 <button id="deleteAnnotationbyId">Delete Annotation By Id</button>
```

```ts
// Delete Annotation by ID.
document.getElementById('deleteAnnotationbyId').addEventListener('click', () => {
    viewer.annotationModule.deleteAnnotationById(
      viewer.annotationCollection[0].annotationId
    );
  });
```

Find the sample [how to delete a specific annotation using deleteAnnotationById](https://stackblitz.com/edit/mcxfte?file=index.ts)