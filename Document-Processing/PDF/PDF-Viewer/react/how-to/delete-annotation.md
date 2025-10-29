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

Use the `deleteAnnotationById()` method to remove a specific annotation from a PDF document by its id.

Steps to delete a specific annotation

**Step 1:** Follow the steps provided in the [link](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/react/getting-started/) to create a simple PDF Viewer sample.

**Step 2:** Use the following code to delete a specific annotation using `deleteAnnotationById()`.

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