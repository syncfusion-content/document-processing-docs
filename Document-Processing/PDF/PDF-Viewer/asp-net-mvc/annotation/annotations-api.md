---
layout: post
title: Annotations APIs in ASP.NET MVC PDF Viewer | Syncfusion
description: Reference for the annotation-related APIs in the ASP.NET MVC PDF Viewer, including methods, properties, and modes for managing annotations programmatically.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Annotation APIs in ASP.NET MVC PDF Viewer

The PDF Viewer exposes a rich set of annotation-related APIs through the **annotation** module of the client-side viewer instance. This page summarizes the most common methods and properties used to manage annotations programmatically.

## Common Annotation Methods

| Method | Description |
|---|---|
| `addAnnotation(type, settings)` | Adds a new annotation of the given type. |
| `editAnnotation(annotation)` | Edits an existing annotation in place. |
| `deleteAnnotation()` | Deletes the currently selected annotation. |
| `deleteAnnotationById(id)` | Deletes the annotation with the given id. |
| `setAnnotationMode(mode, ...args)` | Switches the viewer to a specific annotation mode. |
| `undo()` | Undoes the most recent annotation action. |
| `redo()` | Redoes the most recently undone annotation action. |
| `flattenAnnotation()` | Flattens all annotations on the current document. |
| `flattenAnnotationById(id)` | Flattens the annotation with the given id. |

## Common Annotation Properties

| Property | Description |
|---|---|
| `annotationCollection` | Read-only array of all annotations currently in the viewer. |
| `annotationSettings` | Configuration for default author name, minimum/maximum sizes, and more. |
| `enableAnnotation` | Globally enables or disables annotation features. |
| `enableShapeAnnotation` | Enables or disables shape annotations (Line, Arrow, Rectangle, Circle, Polygon). |
| `enableTextMarkupAnnotation` | Enables or disables text markup annotations (Highlight, Underline, Strikethrough, Squiggly). |
| `enableMeasureAnnotation` | Enables or disables measurement annotations. |
| `enableStickyNotesAnnotation` | Enables or disables sticky notes. |
| `enableFreeTextAnnotation` | Enables or disables free text annotations. |
| `enableInkAnnotation` | Enables or disables ink annotations. |
| `enableStampAnnotation` | Enables or disables stamp annotations. |
| `enableRedaction` | Enables or disables redaction annotations. |

## Annotation Modes

The following mode values can be passed to **setAnnotationMode()**:

- `None`
- `Highlight`
- `Underline`
- `Strikethrough`
- `Squiggly`
- `Line`
- `Arrow`
- `Rectangle`
- `Circle`
- `Polygon`
- `Ink`
- `FreeText`
- `StickyNotes`
- `Distance`
- `Perimeter`
- `Area`
- `Radius`
- `Volume`
- `Stamp`
- `Redaction`

## Example: Add, Edit, and Delete an Annotation

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<button id="apiAdd" onclick="apiAdd()">Add</button>
<button id="apiEdit" onclick="apiEdit()">Edit</button>
<button id="apiDelete" onclick="apiDelete()">Delete</button>
<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>
<script>
    function apiAdd() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        viewer.annotation.addAnnotation("Rectangle", {
            offset: { x: 200, y: 230 },
            pageNumber: 1,
            width: 150,
            height: 75
        });
    }

    function apiEdit() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        for (var i = 0; i < viewer.annotationCollection.length; i++) {
            if (viewer.annotationCollection[i].subject === 'Rectangle') {
                viewer.annotationCollection[i].fillColor = '#ffff00';
                viewer.annotation.editAnnotation(viewer.annotationCollection[i]);
                break;
            }
        }
    }

    function apiDelete() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        viewer.annotation.deleteAnnotation();
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<button id="apiAdd" onclick="apiAdd()">Add</button>
<button id="apiEdit" onclick="apiEdit()">Edit</button>
<button id="apiDelete" onclick="apiDelete()">Delete</button>
<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/PdfViewer/")).DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>
<script>
    function apiAdd() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        viewer.annotation.addAnnotation("Rectangle", {
            offset: { x: 200, y: 230 },
            pageNumber: 1,
            width: 150,
            height: 75
        });
    }

    function apiEdit() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        for (var i = 0; i < viewer.annotationCollection.length; i++) {
            if (viewer.annotationCollection[i].subject === 'Rectangle') {
                viewer.annotationCollection[i].fillColor = '#ffff00';
                viewer.annotation.editAnnotation(viewer.annotationCollection[i]);
                break;
            }
        }
    }

    function apiDelete() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        viewer.annotation.deleteAnnotation();
    }
</script>

{% endhighlight %}
{% endtabs %}

## See also

- [Annotation Overview](./overview)
- [Annotation Types](./annotation-types/area-annotation)
- [Create and Modify Annotation](./create-modify-annotation)
- [Customize Annotation](./customize-annotation)
- [Remove Annotation](./delete-annotation)
- [Annotation Events](./annotation-event)
- [Export and Import Annotation](./export-import/export-annotation)
