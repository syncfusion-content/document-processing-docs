---
layout: post
title: Annotation Selector Settings in ASP.NET Core PDF Viewer | Syncfusion
description: Learn how to customize annotation selector settings in the Syncfusion ASP.NET Core PDF Viewer component for Essential JS 2.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Configure annotation selector settings in ASP.NET Core

The [**annotationSelectorSettings**](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.PdfViewer.PdfViewerAnnotationSelectorSettings.html) property provides granular control over the appearance and behavior of the annotation selector. Customize border colors, thickness, resizer styles, and cursor types to enhance the annotation editing experience.

## Customize the annotation selector

**Step 1:** Follow the [Getting Started guide](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/asp-net-core/getting-started) to create a basic PDF Viewer sample with the required EJ2 script and style assets.

**Step 2:** Define the PDF Viewer in the Razor view (e.g., `Index.cshtml`):

```
@{
    ViewData["Title"] = "Home page";
}

<div class="text-center">
    <ejs-pdfviewer id="pdfviewer" style="height:600px" documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf" resourceUrl="https://cdn.syncfusion.com/ej2/27.1.48/dist/ej2-pdfviewer-lib">
    </ejs-pdfviewer>
</div>
```

**Step 3:** Include the following script to configure the `annotationSelectorSettings`. Ensure this runs after the PDF Viewer instance is initialized.

```html
<script type="text/javascript">
    window.onload = function () {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        viewer.annotationSelectorSettings = {
            selectionBorderColor: 'blue',
            resizerBorderColor: 'red',
            resizerFillColor: '#4070ff',
            resizerSize: 8,
            selectionBorderThickness: 1,
            resizerShape: 'Circle',
            selectorLineDashArray: [5, 6],
            resizerLocation: ej.pdfviewer.AnnotationResizerLocation.Corners | ej.pdfviewer.AnnotationResizerLocation.Edges,
            resizerCursorType: ej.pdfviewer.CursorType.grab
        };
    }
</script>
```

## Property descriptions

The following properties customize the annotation selector's visual feedback:

* **selectionBorderColor**: Defines the color of the selection boundary.
* **resizerBorderColor**: Sets the border color for the resizer handles.
* **resizerFillColor**: Specifies the fill color for the resizer handles.
* **resizerSize**: Controls the diameter or width of the resizer handles.
* **selectionBorderThickness**: Sets the thickness of the selection border in pixels.
* **resizerShape**: Sets the handle shape (e.g., `Circle` or `Square`).
* **selectorLineDashArray**: Defines a dash pattern for the selection border.
* **resizerLocation**: Specifies handle positioning (e.g., `Corners` or `Edges`).
* **resizerCursorType**: Defines the mouse cursor style when hovering over handles.

[View sample on GitHub](https://github.com/SyncfusionExamples/asp-core-pdf-viewer-examples/tree/master/How%20to)
