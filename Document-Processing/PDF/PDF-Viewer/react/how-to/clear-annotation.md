---
layout: post
title: Clear annotations in React PDF Viewer | Syncfusion
description: Learn how to clear all annotations or delete specific annotations in the React PDF Viewer using deleteAnnotations and deleteAnnotationById.
control: PDF Viewer
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Clear annotations in React PDF Viewer

Use the [deleteAnnotations](https://ej2.syncfusion.com/react/documentation/api/pdfviewer#deleteannotations) method to clear all annotations in the currently loaded document.

Example: Clear all annotations in the loaded document

```html
<button onclick="deleteAnnotations()">Delete Annotations</button>

<script>
// Clear all annotations
function deleteAnnotations() {
    var viewer = document.getElementById("container").ej2_instances[0];
    viewer.deleteAnnotations();
}
</script>
```

To remove a specific annotation, use the deleteAnnotationById method to target an annotation by its id.

Example: Delete a specific annotation by id

```html
<button onclick="deleteAnnotationbyId()">Delete Annotation by ID</button>

<script>
// Delete an annotation by id
function deleteAnnotationbyId() {
    var viewer = document.getElementById("container").ej2_instances[0];
    viewer.annotationModule.deleteAnnotationById(viewer.annotationCollection[0].annotationId);
}
</script>
```

Sample: [How to clear annotations using deleteAnnotations]
(https://stackblitz.com/edit/react-xlvqkm?file=public%2Findex.html)