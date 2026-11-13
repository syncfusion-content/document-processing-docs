---
layout: post
title: Resize and Move Annotations in ASP.NET MVC PDF Viewer | Syncfusion
description: Resize and move annotations in the ASP.NET MVC PDF Viewer using the built-in UI and programmatically update the annotation bounds and page number dynamically.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Resize and Move Annotations in ASP.NET MVC PDF Viewer

Annotations can be resized and moved after they are added to a document. The PDF Viewer supports these operations both from the built-in UI and programmatically through the [`editAnnotation`](https://ej2.syncfusion.com/documentation/api/pdfviewer/annotation#editannotation) API.

## Resize annotations

### Resize via UI

1. Add an annotation to the page, or select an existing annotation.
2. When the annotation is selected, resize handles appear on its corners and edges.
3. Drag a handle to change the width and height of the annotation.

![Resize annotations in PDF Viewer UI](../images/resize-annotations-pdf-viewer.gif)

### Resize programmatically

The size of an annotation is defined by its `bounds`. To resize an annotation programmatically, update the `width` and `height` of the respective annotation `bounds` and call the `editAnnotation` API to apply the change dynamically.

{% tabs %}
{% highlight html tabtitle="Standalone" %}
<script>
    function resizeAnnotation() {
        //get recently added annotation
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
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
- To move an annotation **within the same page**, update the `x` and `y` values of the annotation `bounds`.

{% tabs %}
{% highlight html tabtitle="Standalone" %}
<script>
    function moveAnnotation() {
        //get recently added annotation
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
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
{% highlight html tabtitle="Standalone" %}
<script>
    function moveAnnotationInPage() {
        //get recently added annotation
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
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
{% highlight html tabtitle="Standalone" %}

<button id="move" onclick="moveAnnotation()">Move annotation</button>
<button id="resize" onclick="resizeAnnotation()">Resize annotation</button>

<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").ResourceUrl("https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib").DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>

<script>
    function moveAnnotation() {
        //get recently added annotation
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        var annotation = viewer.annotationCollection[viewer.annotationCollection.length - 1];
        //programmatically change page number of annotation
        annotation.pageNumber += 1;
        viewer.annotation.editAnnotation(annotation);
    }

    function resizeAnnotation() {
        //get recently added annotation
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        var annotation = viewer.annotationCollection[viewer.annotationCollection.length - 1];
        //programmatically resize the annotation
        annotation.bounds.width += 100;
        annotation.bounds.height += 100;
        viewer.annotation.editAnnotation(annotation);
    }
</script>

{% endhighlight %}
{% highlight html tabtitle="Server-Backed" %}

<button id="move" onclick="moveAnnotation()">Move annotation</button>
<button id="resize" onclick="resizeAnnotation()">Resize annotation</button>

<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/PdfViewer/")).DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>

<script>
    function moveAnnotation() {
        //get recently added annotation
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        var annotation = viewer.annotationCollection[viewer.annotationCollection.length - 1];
        //programmatically change page number of annotation
        annotation.pageNumber += 1;
        viewer.annotation.editAnnotation(annotation);
    }

    function resizeAnnotation() {
        //get recently added annotation
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        var annotation = viewer.annotationCollection[viewer.annotationCollection.length - 1];
        //programmatically resize the annotation
        annotation.bounds.width += 100;
        annotation.bounds.height += 100;
        viewer.annotation.editAnnotation(annotation);
    }
</script>

{% endhighlight %}
{% endtabs %}

N> The `editAnnotation` API requires an existing annotation. Add an annotation to the document before calling the resize or move methods.

## See also

- [Annotation Events](./annotation-event)
- [Annotation Toolbar](../toolbar-customization/annotation-toolbar)
- [Comments](./comments)
- [Annotation in Mobile View](./annotations-in-mobile-view)
- [Annotation Comment Filter](./annotation-comment-filter)
