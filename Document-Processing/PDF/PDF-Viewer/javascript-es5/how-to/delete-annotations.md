---
layout: post
title: Delete annotations in Javascript Pdfviewer control | Syncfusion
description: Learn here all about Delete annotations in Syncfusion Javascript Pdfviewer control of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Delete annotations
publishingplatform: Javascript
documentation: ug
domainurl: ##DomainURL##
---

# Delete annotations in Javascript Pdfviewer control

The PDF Viewer library allows you to delete a specific annotation from a PDF document. Deleting a specific annotation can be done using the **deleteAnnotationById()** method. This method is used to delete a specific annotation using its id.

The following steps are used to delete a specific annotation from PDF Document.

**Step 1:** Follow the steps provided in the [link](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/javascript-es5/getting-started/) to create simple PDF Viewer sample.

**Step 2:** Use the following code snippet to delete a specific annotation using `deleteAnnotationById()` method.

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

Find the sample [how to delete a specific annotation using deleteAnnotationById](https://stackblitz.com/edit/5ygaeq?file=index.js)