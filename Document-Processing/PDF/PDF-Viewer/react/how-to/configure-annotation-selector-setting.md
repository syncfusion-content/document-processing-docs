---
layout: post
title: Configure annotation selector settings in React PDF Viewer | Syncfusion
description: Learn how to configure annotation selector settings in the React PDF Viewer using annotationSelectorSettings and related options.
control: PDF Viewer
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Configure annotation selector settings

Use the [annotationSelectorSettings](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/annotationSelectorSettings/) property to customize the appearance and behavior of the annotation selector in the UI.

AnnotationSelectorSettingsModel

The [AnnotationSelectorSettingsModel](https://ej2.syncfusion.com/react/documentation/api/accumulation-chart/accumulationAnnotationSettingsModel/) defines settings such as border colors, sizes, and shapes, enabling fine-grained control over how annotations are displayed and interacted with.

Steps to configure annotation selector settings
- Step 1: Create a PDF Viewer instance and initialize it.
- Step 2: Set the annotationSelectorSettings property to customize selector behavior.

{% raw %}

```javascript
<PdfViewerComponent id="container" documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
    resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib" style={{ 'height': '640px' }}
    annotationSelectorSettings={{
    selectionBorderColor: 'blue',
    resizerBorderColor: 'red',
    resizerFillColor: '#4070ff',
    resizerSize: 8,
    selectionBorderThickness: 1,
    resizerShape: 'Circle',
    selectorLineDashArray: [5, 6],
    resizerLocation: AnnotationResizerLocation.Corners | AnnotationResizerLocation.Edges,
    resizerCursorType: CursorType.grab
    }}>
    <Inject services={[Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, BookmarkView, ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner,PageOrganizer]}/>
</PdfViewerComponent>

```
{% endraw %}

- Step 3: Append the viewer to the target HTML element using appendTo.

Key properties

- selectionBorderColor: Sets the color for the border around selected annotations.
- resizerBorderColor: Sets the color for the border of the resizer handles.
- resizerFillColor: Defines the fill color for the resizer handles.
- resizerSize: Determines the size of the resizer handles.
- selectionBorderThickness: Specifies the thickness of the selection border.
- resizerShape: Sets the shape of the resizer handles (for example, Circle or Square).
- selectorLineDashArray: Specifies the dash pattern for the selector line.
- resizerLocation: Determines where the resizers appear relative to the annotation (for example, Corners or Edges).
- resizerCursorType: Sets the cursor style when hovering over a resizer.

[View sample in GitHub](https://github.com/SyncfusionExamples/react-pdf-viewer-examples/tree/master/How%20to)
