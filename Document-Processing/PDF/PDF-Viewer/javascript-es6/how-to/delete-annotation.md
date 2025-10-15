---
layout: post
title: Delete an annotation in TypeScript PDF Viewer | Syncfusion
description: Learn how to delete a specific annotation in the TypeScript PDF Viewer using the deleteAnnotationById method.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Delete an annotation in PDF Viewer

Use the `deleteAnnotationById()` method to remove a specific annotation from a PDF document by its id.

Steps to delete a specific annotation

**Step 1:** Follow the steps provided in the [link](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/javascript-es6/getting-started/) to create a simple PDF Viewer sample.

**Step 2:** Use the following code to delete a specific annotation using `deleteAnnotationById()`.

```
 <button id="deleteAnnotationbyId">Delete Annotation By Id</button>
```

```ts
// Delete annotation by id
document.getElementById('deleteAnnotationbyId').addEventListener('click', () => {
    viewer.annotationModule.deleteAnnotationById(
      viewer.annotationCollection[0].annotationId
    );
  });
```

Sample: How to delete a specific annotation using deleteAnnotationById
https://stackblitz.com/edit/mcxfte?file=index.ts
