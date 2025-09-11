---
layout: post
title: Annotation Selector Setting in Javascript Pdfviewer|Syncfusion.
description: Learn here all about Annotation Selector Settings in Syncfusion Javascript Pdfviewer control of Syncfusion Essential JS 2 and more.
platform: document-processing
control: PDF Viewer
publishingplatform: Javascript
documentation: ug
domainurl: ##DomainURL##
---


# How to Configure Annotation Selector Settings

### Annotation Selector Settings

The [**annotationSelectorSettings**](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/annotationSelectorSettings/) property allows you to customize the appearance and behavior of the annotation selector in the UI.

### AnnotationSelectorSettingsModel

The [**AnnotationSelectorSettingsModel**](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/annotationSelectorSettingsModel/) defines the settings for the annotation selector, including border colors, sizes, and shapes. It provides fine-grained control over how annotations are displayed and interacted with.

### How to Configure Annotation Selector Settings

**Step 1:**	Create a PdfViewer Instance: Initialize your PdfViewer instance.

**Step 2:** Set the annotationSelectorSettings Property: Define your settings to customize the annotation selector.

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

**Step 3:**	Append the Viewer to Your HTML Element: Use the appendTo method to render the PDF viewer in your desired HTML element.

#### Key properties include:

* **selectionBorderColor:** Sets the color for the border around selected annotations.

* **resizerBorderColor:** Sets the color for the border of the resizer handles.

* **resizerFillColor:** Defines the fill color for the resizer handles.

* **resizerSize:** Determines the size of the resizer handles.

* **selectionBorderThickness:** Specifies how thick the selection border should be.

* **resizerShape:** Allows you to choose the shape of the resizer handles (e.g., Circle or Square).

* **selectorLineDashArray:** Specifies the dash pattern for the selector line to enhance visual cues.

* **resizerLocation:** Determines where the resizer appear in relation to the annotation (e.g., Corners or Edges).

* **resizerCursorType:** Sets the cursor style when hovering over the resizer, improving user interaction.

[View sample in GitHub](https://github.com/SyncfusionExamples/javascript-pdf-viewer-examples/tree/master/How%20to)