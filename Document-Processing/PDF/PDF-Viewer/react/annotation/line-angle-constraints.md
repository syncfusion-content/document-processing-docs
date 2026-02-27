---
layout: post
title: Line angle constraints in React PDF Viewer | Syncfusion
description: Learn how to enable and configure line angle constraints for line-type annotations in the Syncfusion React PDF Viewer.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Line angle constraints in React PDF Viewer

The PDF Viewer provides line angle constraints functionality that allows drawing line-type annotations with controlled angle snapping. This improves precision for technical drawings and measurements in PDF documents.

![Line angle constraint](../annotations/annotation-images/line-angle-constraint.gif)

## Enable line angle constraints

Set the `enableLineAngleConstraints` property within `annotationDrawingOptions` to enable angle snapping for supported line-type annotations.

The following code demonstrates enabling line angle constraints:

{% tabs %}
{% highlight js tabtitle="Standalone" %}
{% raw %}
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { PdfViewerComponent, Inject, Toolbar, Annotation, TextSelection } from '@syncfusion/ej2-react-pdfviewer';

function App() {
  return (
    <PdfViewerComponent
      id="container"
      documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
      resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
      style={{ height: '650px' }}
      annotationDrawingOptions={{
        enableLineAngleConstraints: true,
        restrictLineAngleTo: 90
      }}
    >
      <Inject services={[Toolbar, Annotation, TextSelection]} />
    </PdfViewerComponent>
  );
}

ReactDOM.createRoot(document.getElementById('sample')).render(<App />);
{% endraw %}
{% endhighlight %}
{% endtabs %}

## Work with constrained annotations

### Drawing behavior

When line angle constraints are enabled:

- Start drawing a supported annotation (Line, Arrow, Polyline, Distance, or Perimeter).
- The segment snaps to the nearest allowed angle.
- A visual indicator reflects snapping in real time.
- Release to complete the annotation.

### Keyboard shortcuts

- `Shift` + drag: toggles snapping. If constraints are disabled, `Shift` temporarily enables them; if enabled, `Shift` enforces snapping.

### Selector-based modifications

When modifying existing line annotations using selectors:

- Constraints apply based on the original line direction.
- The reference angle (0°) is determined by the line’s current orientation.
- Constraint snapping during modification is supported for Line and Arrow.
- Adjustments snap to the configured angle increment.

[View a sample in GitHub](https://github.com/SyncfusionExamples/react-pdf-viewer-examples/tree/master/How%20to)

## Configuration properties

### enableLineAngleConstraints

The `enableLineAngleConstraints` property activates angle snapping for line-based annotations. When set to `true`, the following annotation types will snap to fixed angles as defined by the `restrictLineAngleTo` property:

- Lines
- Arrows
- Polygon
- Distance measurements
- Perimeter measurements
- Area measurements
- Volume measurements

Key Benefits:

- Automatic angle snapping during drawing
- Enhanced precision for technical drawings and measurements
- Desktop behavior: hold `Shift` while drawing to toggle constraints (when disabled, `Shift` temporarily enables; when enabled, `Shift` enforces snapping)
- Real-time visual feedback showing angle snapping behavior

### restrictLineAngleTo

Defines the angle increment (in degrees) used to constrain supported annotations. The default is 45.

Angle snapping rules:

- The initial drawing direction is treated as the 0° reference point.
- Snapped angles are calculated based on the increment.
- If the increment does not divide 360 evenly, angles reset after 360°.

Examples:

- `restrictLineAngleTo: 45` → Snapped angles: 0°, 45°, 90°, 135°, 180°, 225°, 270°, 315°, 360°
- `restrictLineAngleTo: 100` → Snapped angles: 0°, 100°, 200°, 300°, 360°

N> Refer to the React PDF Viewer [feature tour](https://www.syncfusion.com/pdf-viewer-sdk/react-pdf-viewer) for feature highlights, and to the [React PDF Viewer examples](https://github.com/SyncfusionExamples/react-pdf-viewer-examples) for rendering and configuration examples.

## See also

- [Annotation Overview](../overview)
- [Annotation Types](../annotations/annotation-types/area-annotation)
- [Annotation Toolbar](../toolbar-customization/annotation-toolbar)
- [Create and Modify Annotation](../annotations/create-modify-annotation)
- [Customize Annotation](../annotations/customize-annotation)
- [Remove Annotation](../annotations/delete-annotation)
- [Handwritten Signature](../annotations/signature-annotation)
- [Export and Import Annotation](../annotations/export-import/export-annotation)
- [Annotation Permission](../annotations/annotation-permission)
- [Annotation in Mobile View](../annotations/annotations-in-mobile-view)
- [Annotation Events](../annotations/annotation-event)
- [Annotation API](../annotations/annotations-api)