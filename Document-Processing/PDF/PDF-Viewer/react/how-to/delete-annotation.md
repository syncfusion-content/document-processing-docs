---
layout: post
title: Delete annotation in React Pdfviewer component | Syncfusion
description: Learn here all about Delete annotation in Syncfusion React Pdfviewer component of Syncfusion Essential JS 2 and more.
control: Delete annotation
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Delete annotation in React Pdfviewer component

The PDF Viewer library allows you to delete a specific annotation from a PDF document. Deleting a specific annotation can be done using the **deleteAnnotationById()** method. This method is used to delete a specific annotation using its id.

The following steps are used to delete a specific annotation from PDF Document.

**Step 1:** Follow the steps provided in the [link](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/angular/getting-started/) to create a simple PDF Viewer sample.

**Step 2:** Use the following code snippet to delete a specific annotation using `deleteAnnotationById()` method.

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

Find the sample [how to delete a specific annotation using deleteAnnotationById](https://stackblitz.com/edit/react-svdb9y?file=src%2Findex.js)