---
layout: post
title: How to Delete an Annotation in JavaScript (ES6) PDF | Syncfusion
description: Delete a specific annotation in the JavaScript (ES6) PDF Viewer using the deleteAnnotationById method and the annotation identifier from the API.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# How to Delete an Annotation in JavaScript (ES6) PDF Viewer

Use the `deleteAnnotationById()` method to remove a specific annotation from a PDF document by its id.

## Steps to delete a specific annotation

**Step 1:** Follow the getting-started guide to create a simple PDF Viewer sample: [Getting started with JavaScript PDF Viewer](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/javascript-es6/getting-started).

**Step 2:** Add a control to trigger deletion and use the following example to call `deleteAnnotationById()`.

```html
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
