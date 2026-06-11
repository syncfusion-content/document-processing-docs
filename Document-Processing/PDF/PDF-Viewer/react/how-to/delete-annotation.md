---
layout: post
title: Delete an annotation in React PDF Viewer | Syncfusion
description: Learn how to delete a specific annotation in the React PDF Viewer using the deleteAnnotationById method.
control: PDF Viewer
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Delete an annotation in PDF Viewer

This article shows how to remove a specific annotation from a PDF document using the `deleteAnnotationById()` method. The example below demonstrates a simple delete flow; for production code prefer accessing the viewer instance with React `@ViewChild` rather than `document.getElementById`.

The following steps are used to delete a specific annotation from PDF Document:

**Step 1:** Create a basic PDF Viewer sample by following the [getting-started](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/react/getting-started) guide.

**Step 2:** Use the following snippet to trigger deletion using `deleteAnnotationById()`.

  ```
   <button onclick="deleteAnnotationbyId()">Delete Annotation by ID</button>

   <script>
    // Delete Annotation by id.
   function deleteAnnotationbyId() {
    var viewer = document.getElementById('container').ej2_instances[0];
    viewer.annotationModule.deleteAnnotationById(viewer.annotationCollection[0].annotationId);
   }
   </script>
 ```

Sample: How to delete a specific annotation using deleteAnnotationById
(https://stackblitz.com/edit/react-svdb9y?file=src%2Findex.js)