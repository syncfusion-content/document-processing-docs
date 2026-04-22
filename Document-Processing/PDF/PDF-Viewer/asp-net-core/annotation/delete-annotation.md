---
layout: post
title: Remove annotations in ASP.NET Core PDF Viewer | Syncfusion
description: Learn how to remove/delete PDF annotations in Syncfusion ASP.NET Core PDF Viewer using UI options (context menu, toolbar, Delete key) and programmatic APIs.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Remove annotations in ASP.NET Core

Annotations can be removed using the built-in UI or programmatically. This page shows common methods to delete annotations in the viewer.

## Delete via UI

A selected annotation can be deleted in three ways:

- Context menu: right-click the annotation and choose Delete.
![Delete via context menu](../../javascript-es6/annotations/annotation-images/delete-annot-context-menu.png)
- Annotation toolbar: select the annotation and click the Delete button on the annotation toolbar.
![Delete via annotation toolbar](../../javascript-es6/annotations/annotation-images/delete-annot.png)
- Keyboard: select the annotation and press the `Delete` key.

## Delete programmatically

Annotations can be deleted programmatically either by removing the currently selected annotation or by specifying an annotation id.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<div style="width:100%;height:650px">
  <div style="margin-bottom: 8px;">
    <button onclick="deleteAnnotation()">Delete Annotation</button>
    <button onclick="deleteAnnotationById()">Delete Annotation By ID</button>
  </div>
  <ejs-pdfviewer id="container" style="height:600px" resourceUrl="https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib" documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"></ejs-pdfviewer>
</div>
<script>
window.onload = function() {
  var viewer = document.getElementById('container').ej2_instances[0];
};

function getViewer() { 
  return document.getElementById('container').ej2_instances[0]; 
}

function deleteAnnotation() {
  // Delete the selected annotation
  var viewer = getViewer();
  if (viewer) {
    viewer.annotation.deleteAnnotation();
  }
}

function deleteAnnotationById() {
  var viewer = getViewer();
  // Delete the first annotation using its id from the annotation collection
  if (viewer && viewer.annotationCollection && viewer.annotationCollection.length > 0) {
    viewer.annotation.deleteAnnotationById(viewer.annotationCollection[0].annotationId);
  }
}
</script>
{% endhighlight %}
{% endtabs %}

N> Deleting via the API requires the annotation to exist in the current document. Ensure an annotation is selected when using `deleteAnnotation()`, or pass a valid id to `deleteAnnotationById()`.

[View Sample on GitHub](https://github.com/SyncfusionExamples/aspnet-core-pdf-viewer-examples)

## See also

- [Annotation Overview](../overview)
- [Annotation Types](../annotation/annotation-types/area-annotation)
- [Annotation Toolbar](../toolbar-customization/annotation-toolbar)
- [Create and Modify Annotation](../annotation/create-modify-annotation)
- [Customize Annotation](../annotation/customize-annotation)
- [Handwritten Signature](../annotation/signature-annotation)
- [Export and Import Annotation](../annotation/export-import/export-annotation)
- [Annotation Permission](../annotation/annotation-permission)
- [Annotation in Mobile View](../annotation/annotations-in-mobile-view)
- [Annotation Events](../annotation/annotation-event)
- [Annotation API](../annotation/annotations-api)
