---
layout: post
title: How to Clear Annotations in JavaScript (ES6) PDF Viewer | Syncfusion
description: Clear all annotations or delete specific annotations in the JavaScript (ES6) PDF Viewer using deleteAnnotations and the deleteAnnotationById method.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# How to Clear Annotations in JavaScript (ES6) PDF Viewer

Use the [deleteAnnotations] (https://ej2.syncfusion.com/documentation/api/pdfviewer/#deleteannotations) method to remove all annotations from the currently loaded document.

Example: Clear all annotations in the loaded document

```

 <button id="deleteAnnotations">Delete Annotations</button>

```

```ts

// Attach a click handler to clear annotations
document.getElementById('deleteAnnotations').addEventListener('click',()=> {
  viewer.deleteAnnotations();
});

```

To remove a specific annotation, use the `deleteAnnotationById` method and provide the target annotation's id.

Example: delete a specific annotation by id

```

 <button id="deleteAnnotationbyId">Delete Annotation By Id</button>

```

```ts

// Delete a specific annotation by id
document.getElementById('deleteAnnotationbyId').addEventListener('click', () => {
    viewer.annotationModule.deleteAnnotationById(
      viewer.annotationCollection[0].annotationId
    );
});

```

Sample: How to clear annotations using deleteAnnotations
https://stackblitz.com/edit/typescript-86gwqu?file=index.ts
