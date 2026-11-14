---
layout: post
title: Resize and Move Annotations in ASP.NET Core PDF Viewer | Syncfusion
description: Resize and move annotations in the ASP.NET Core PDF Viewer using the built-in UI and programmatically update the annotation bounds and page number dynamically.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Resize and Move Annotations in ASP.NET Core PDF Viewer

Annotations can be resized and moved after they are added to a document. The PDF Viewer supports these operations both from the built-in UI and programmatically through the [`editAnnotation`](https://ej2.syncfusion.com/aspnetcore/documentation/api/pdfviewer/annotation#editannotation) API.

## Resize annotations

### Resize via UI

1. Add an annotation to the page, or select an existing annotation.
2. When the annotation is selected, resize handles appear on its corners and edges.
3. Drag a handle to change the width and height of the annotation.

![Resize annotations in PDF Viewer UI](../images/resize-annotations-pdf-viewer.gif)

### Resize programmatically

The size of an annotation is defined by its `bounds`. To resize an annotation programmatically, update the `width` and `height` of the respective annotation `bounds` and call the `editAnnotation` API to apply the change dynamically.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<script>
function resizeAnnotation() {
  //get recently added annotation
  var viewer = getViewer();
  var annotation = viewer.annotationCollection[viewer.annotationCollection.length - 1];
  //programmatically resize the annotation
  annotation.bounds.width += 100;
  annotation.bounds.height += 100;
  viewer.annotation.editAnnotation(annotation);
}
</script>
{% endhighlight %}
{% endtabs %}

## Move annotations

### Move via UI

1. Select an annotation.
2. Drag the annotation to reposition it within the same page, or drag it to a different page in the document.

![Move annotations between pages in PDF Viewer UI](../images/move-annotations-between-pages.gif)

### Move programmatically

To move an annotation programmatically, update the relevant property of the annotation and call the `editAnnotation` API.

- To move an annotation to a **different page**, update the `pageNumber` property of the annotation.
- To move an annotation **within the same page**, update the `left` and `top` values (or `x` and `y`, depending on the bounds object structure) of the annotation's `bounds` object.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<script>
function moveAnnotation() {
  //get recently added annotation
  var viewer = getViewer();
  var annotation = viewer.annotationCollection[viewer.annotationCollection.length - 1];
  //programmatically change page number of annotation
  annotation.pageNumber += 1;
  viewer.annotation.editAnnotation(annotation);
}
</script>
{% endhighlight %}
{% endtabs %}

To move an annotation to a new position on the same page, update the `bounds` of the annotation instead.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<script>
function moveAnnotationInPage() {
  //get recently added annotation
  var viewer = getViewer();
  var annotation = viewer.annotationCollection[viewer.annotationCollection.length - 1];
  // Update the annotation's coordinates (using left/top or x/y depending on the bounds object)
  annotation.bounds.left += 50;
  annotation.bounds.top += 50;
  viewer.annotation.editAnnotation(annotation);
}
</script>
{% endhighlight %}
{% endtabs %}

## Sample

The following sample shows both the resize and move operations with a single viewer instance.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<div style="width:100%;height:650px">
  <div style="margin-bottom: 8px;">
    <button onclick="moveAnnotation()">Move annotation</button>
    <button onclick="resizeAnnotation()">Resize annotation</button>
  </div>
  <ejs-pdfviewer id="container" style="height:600px" resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib" documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"></ejs-pdfviewer>
</div>
<script>
window.onload = function() {
  function getViewer() {
    return document.getElementById('container').ej2_instances[0];
  }

  function moveAnnotation() {
    //get recently added annotation
    var viewer = getViewer();
    var annotation = viewer.annotationCollection[viewer.annotationCollection.length - 1];
    //programmatically change page number of annotation
    annotation.pageNumber += 1;
    viewer.annotation.editAnnotation(annotation);
  }

  function resizeAnnotation() {
    //get recently added annotation
    var viewer = getViewer();
    var annotation = viewer.annotationCollection[viewer.annotationCollection.length - 1];
    //programmatically resize the annotation
    annotation.bounds.width += 100;
    annotation.bounds.height += 100;
    viewer.annotation.editAnnotation(annotation);
  }
};
</script>
{% endhighlight %}
{% endtabs %}

N> The `editAnnotation` API requires an existing annotation. Add an annotation to the document before calling the resize or move methods.

## See also

- [Annotation Overview](../overview)
- [Annotation Types](../annotation/annotation-types/area-annotation)
- [Annotation Toolbar](../toolbar-customization/annotation-toolbar)
- [Create and Modify Annotation](../annotation/create-modify-annotation)
- [Customize Annotation](../annotation/customize-annotation)
- [Remove Annotation](../annotation/delete-annotation)
- [Handwritten Signature](../annotation/signature-annotation)
- [Export and Import Annotation](../annotation/export-import/export-annotation)
- [Annotation Permission](../annotation/annotation-permission)
- [Annotation in Mobile View](../annotation/annotations-in-mobile-view)
- [Annotation Events](../annotation/annotation-event)
- [Annotation API](../annotation/annotations-api)
