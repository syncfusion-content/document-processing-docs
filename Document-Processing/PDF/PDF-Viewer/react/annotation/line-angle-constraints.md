---
layout: post
title: Line angle constraints in React PDF Viewer | Syncfusion
description: Explore how to add, edit, delete, and configure text markup annotations like highlight, underline, and squiggly in JavaScript (ES6) using the PDF Viewer.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Line angle constraints in React PDF Viewer

The PDF Viewer control provides robust **line angle constraints** for line-type annotations. This enables angle snapping to improve accuracy and consistency in technical drawings and measurements within PDF documents.

## Enable line angle constraintsSet 
Configure the `enableLineAngleConstraints` property inside `annotationDrawingOptions`. When enabled, supported line-type annotations snap to fixed angles according to the `restrictLineAngleTo` setting.

The following example demonstrates how to enable line angle constraints:

{% tabs %}
{% highlight js tabtitle="Standalone" %}
{% raw %}

import * as ReactDOM from 'react-dom';
import * as React from 'react';
import './index.css';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView, Print, TextSelection, Annotation, TextSearch, FormFields, FormDesigner, Inject } from '@syncfusion/ej2-react-pdfviewer';
export function App() {
  return (<div>
    <div className='control-section'>
      <PdfViewerComponent
        id="container"
        documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
        resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
        style={{ 'height': '680px' }}
        annotationDrawingOptions = {{
          enableLineAngleConstraints: true,
          restrictLineAngleTo: 90
        }}

      >
        <Inject services={[Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, BookmarkView, ThumbnailView,
          Print, TextSelection, TextSearch, FormFields, FormDesigner]} />
      </PdfViewerComponent>
    </div>
  </div>);
}
const root = ReactDOM.createRoot(document.getElementById('sample'));
root.render(<App />);

{% endraw %}
{% endhighlight %}
{% endtabs %}

## Configuration Properties

### enableLineAngleConstraints

Setting `enableLineAngleConstraints` activates angle snapping for line-based annotations. When set to `true`, the following annotation types snap to fixed angles defined by `restrictLineAngleTo`:

- Lines
- Arrows
- Polygon
- Distance measurements
- Perimeter measurements
- Area measurements
- Volume measurements

**Key Benefits:**

- Automatic angle snapping while drawing
- Improved precision for technical drawings and measurements
- On desktop, holding `Shift` toggles snapping: when constraints are disabled, `Shift` temporarily enables snapping; when enabled, `Shift` enforces snapping
- Visual feedback indicates snapping in real time

### restrictLineAngleTo

`restrictLineAngleTo` defines the angle increment (in degrees) used to constrain supported annotations. The default value is `45`.

Angle snapping rules:

- The initial drawing direction is treated as the 0° reference point
- Snapped angles are calculated by adding the configured increment to the reference angle
- If the increment does not divide 360 evenly, snapped angles wrap after 360°

Examples:

- `restrictLineAngleTo: 45` → Snapped angles: 0°, 45°, 90°, 135°, 180°, 225°, 270°, 315°, 360°
- `restrictLineAngleTo: 100` → Snapped angles: 0°, 100°, 200°, 300°, 360°

## Work with constrained annotations

### Drawing Behavior

When line angle constraints are enabled:

- Drawing a supported annotation (Line, Arrow, Polyline, Distance, or Perimeter) causes the current segment to snap to the nearest allowed angle.
- A visual indicator shows the snapping behavior in real time.
- Releasing completes the annotation.

### Keyboard Shortcuts

On desktop:
- `Shift` + drag toggles snapping. If constraints are disabled, `Shift` temporarily enables snapping; if enabled, `Shift` enforces snapping.

### Selector-Based Modifications

Selector-based modifications:

- Constraints apply relative to the annotation's original direction.
- The reference angle (0°) is determined by the annotation's current orientation.
- Constraint snapping during modification is supported for Line and Arrow annotations.
- Adjustments snap to the configured angle increment.

[View samples on GitHub](https://github.com/SyncfusionExamples/react-pdf-viewer-examples/tree/master/How%20to)

N> Refer to the React PDF Viewer [feature tour](https://www.syncfusion.com/pdf-viewer-sdk/react-pdf-viewer) for feature highlights, and the React PDF Viewer examples repository to see full rendering and configuration samples.
