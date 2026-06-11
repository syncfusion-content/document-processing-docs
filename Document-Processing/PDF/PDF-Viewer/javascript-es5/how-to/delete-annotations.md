---
layout: post
title: Delete an annotation in JavaScript PDF Viewer | Syncfusion
description: Learn how to delete a specific annotation in the JavaScript PDF Viewer using the deleteAnnotationById method.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Delete an annotation in PDF Viewer

Use the `deleteAnnotationById()` method to remove a specific annotation from a PDF document by its id.

### Steps to delete a specific annotation

**Step 1:** Follow the getting-started guide to create a simple PDF Viewer sample: [Getting started with JavaScript PDF Viewer](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/javascript-es5/getting-started/).

**Step 2:** Add a control to trigger deletion and use the following example to call `deleteAnnotationById()`.

```
 <button id="deleteAnnotationbyId">Delete Annotation By Id</button>
```

```javascript
// Delete Annotation by ID.
document.getElementById('deleteAnnotationbyId').addEventListener('click', () => {
    viewer.annotationModule.deleteAnnotationById(
      viewer.annotationCollection[0].annotationId
    );
  });
```

Sample: [How to delete a specific annotation using deleteAnnotationById](https://stackblitz.com/edit/5ygaeq?file=index.js)
