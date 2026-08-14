---
layout: post
title: How to Configure Annotation Selectors in JavaScript | Syncfusion
description: Configure annotation selector settings in the JavaScript (ES5) PDF Viewer using annotationSelectorSettings to control selection and resize behavior.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# How to Configure Annotation Selectors in JavaScript (ES5) PDF Viewer

Use the [annotationSelectorSettings](https://ej2.syncfusion.com/documentation/api/pdfviewer/annotationSelectorSettings) property to customize the appearance and behavior of the annotation selector in the UI.

### AnnotationSelectorSettingsModel

The [AnnotationSelectorSettingsModel](https://ej2.syncfusion.com/documentation/api/pdfviewer/annotationselectorsettingsmodel) defines settings such as border colors, sizes, and shapes, enabling fine-grained control over how annotations are displayed and interacted with.

Steps to configure annotation selector settings

- Step 1: Create a PDF Viewer instance and initialize it.
- Step 2: Set the annotationSelectorSettings property to customize selector behavior.

```js
 let viewer: PdfViewer = new PdfViewer();
 viewer.annotationSelectorSettings = {
     selectionBorderColor: '',
     resizerBorderColor: 'Circle',
     resizerFillColor: '#4070FF',
     resizerSize: 8,
     selectionBorderThickness: 1,
     resizerShape: 'Square',
     selectorLineDashArray: [],
     resizerLocation: AnnotationResizerLocation.Corners | AnnotationResizerLocation.Edges,
     resizerCursorType: null
 };
 viewer.appendTo("#pdfViewer");
```

- Step 3: Append the viewer to the target HTML element using appendTo.

#### Key properties

- `selectionBorderColor`: Sets the color for the border around selected annotations. Provide a color value (for example, `#4070FF`) to make the selection visible.
- `resizerBorderColor`: Sets the color for the border of the resize handles.
- `resizerFillColor`: Defines the fill color for the resize handles.
- `resizerSize`: Determines the size of the resize handles.
- `selectionBorderThickness`: Specifies the thickness of the selection border.
- `resizerShape`: Sets the shape of the resize handles (for example, `Circle` or `Square`).
- `selectorLineDashArray`: Specifies the dash pattern for the selector line.
- `resizerLocation`: Determines where the resize handles appear relative to the annotation (for example, `Corners` or `Edges`).
- `resizerCursorType`: Sets the cursor style when hovering over a resize handle.

N> In the example code block `selectionBorderColor` is left empty for demonstration; supply a color string when configuring the viewer. Also ensure `resizerShape` and `resizerBorderColor` use the correct value types — `resizerShape` expects a shape name (for example, `Circle`) while `resizerBorderColor` expects a color value format.

[View sample in GitHub](https://github.com/SyncfusionExamples/javascript-pdf-viewer-examples/tree/master/How%20to)