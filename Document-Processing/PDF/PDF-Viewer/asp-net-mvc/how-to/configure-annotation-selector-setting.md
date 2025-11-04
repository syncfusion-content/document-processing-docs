---
layout: post
title: Configure selector settings in ASP.NET MVC PDF Viewer | Syncfusion
description: Learn how to customize annotation selector settings in the Syncfusion ASP.NET MVC PDF Viewer component for Essential JS 2.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# How to Initialize Annotation Selector Settings

### Annotation Selector Settings

The [**annotationSelectorSettings**](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.PdfViewer.PdfViewerAnnotationSelectorSettings.html) property customizes the appearance and behavior of the annotation selector in the UI. These settings control border colors, sizes, and handle styles so users can differentiate selected annotations and adjust them precisely during review workflows.

### How to Configure Annotation Selector Settings

**Step 1:** Follow the steps provided in the [link](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/asp-net-mvc/getting-started) to create simple PDF Viewer sample and include the required EJ2 script and style assets in the layout or view.

**Step 2:** Set Up PDF Viewer in Your View: Add the following code snippet to your view (e.g., Index.cshtml)

```
@{
    ViewData["Title"] = "PDF Viewer";
}
<div>
    <div style="height:500px;width:1350px;">
        <br /><br />
        @Html.EJS().PdfViewer("pdfviewer")
            .DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf")
            .ResourceUrl("https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib")
            .Render()
    </div>
</div>
```

**Step 3:**	 Add JavaScript for Annotation Selector Settings: Below the PDF Viewer in your view, include the following script to configure the annotationSelectorSettings.

```
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
    };
</script>
```

#### Key properties include:

* **selectionBorderColor**: Sets the color for the border around selected annotations.

* **resizerBorderColor**: Sets the color for the border of the resizer handles.

* **resizerFillColor**: Defines the fill color for the resizer handles.

* **resizerSize**: Determines the size of the resizer handles.

* **selectionBorderThickness**: Specifies how thick the selection border should be.

* **resizerShape**: Allows you to choose the shape of the resizer handles (e.g., Circle or Square).

* **selectorLineDashArray**: Specifies the dash pattern for the selector line to enhance visual cues.

* **resizerLocation**: Determines where the resizer appear in relation to the annotation (e.g., Corners or Edges).

* **resizerCursorType**: Sets the cursor style when hovering over the resizer, improving user interaction.

[View sample in GitHub](https://github.com/SyncfusionExamples/mvc-pdf-viewer-examples/tree/master/How%20to)
