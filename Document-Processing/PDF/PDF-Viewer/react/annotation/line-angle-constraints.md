---
layout: post
title: Line Angle Constraints in React PDF Viewer | Syncfusion
description: Learn all about Line Angle Constraints Annotation in the Syncfusion React PDF Viewer component of Essential JS 2 and more.
platform: document-processing
control: Line Angle Constraints
documentation: ug
---

# Line Angle Constraints in React PDF Viewer

The PDF Viewer control provides robust **line angle constraints** functionality. This allows users to draw line type annotations with controlled angle snapping, improving accuracy and consistency across technical drawings and measurements across your PDF documents.

## Enabling Line Angle Constraints
To enable line angle constraints, configure the `enableLineAngleConstraints` property within the `annotationDrawingOptions` of the PDF Viewer. When enabled, line-type annotations are automatically restricted to fixed angles.

The following code demonstrates how to enable line angle constraints:

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
        resourceUrl="https://cdn.syncfusion.com/ej2/30.1.37/dist/ej2-pdfviewer-lib"
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

The `enableLineAngleConstraints` property activates angle snapping for line-based annotations. When set to `true`, the following annotation types will snap to fixed angles as defined by the `restrictLineAngleTo` property:

- Lines
- Arrows
- Polygon
- Distance measurements
- Perimeter measurements
- Area measurements
- Volume measurements

**Key Benefits:**

- Automatic angle snapping during the drawing
- Enhanced precision for technical drawings and measurements
- Desktop support: Hold **Shift** while drawing to activate constraints
- Real-time visual feedback showing angle snapping behavior

### restrictLineAngleTo

The `restrictLineAngleTo` property defines the angle increment (in degrees) that constrains line-based annotations. The default value is **45 degrees**.

**Angle Snapping Rules:**

- The initial drawing direction is treated as the 0° reference point
- Snapped angles are calculated based on the increment
- If the increment doesn’t divide 360 evenly, angles reset after 360°

**Examples:**

- restrictLineAngleTo: 45 → Snapped angles: 0°, 45°, 90°, 135°, 180°, 225°, 270°, 315°, 360°
- restrictLineAngleTo: 100 → Snapped angles: 0°, 100°, 200°, 300°, 360°

## Working with Constrained Annotations

### Drawing Behavior

When line angle constraints are enabled:

**Initial Drawing:** Start drawing a line, arrow, polygon, distance, perimeter, area, or volume as usual.
**Angle Snapping:** The line snaps to the nearest allowed angle.
**Visual Feedback:** Snapped angle is shown in real time.
**Completion:** Release to complete the annotation.

### Keyboard Shortcuts

**Desktop Platforms:**

**Shift + Drag:** Enables angle snapping even when `enableLineAngleConstraints` is false.

### Selector-Based Modifications

When modifying existing line annotations using selectors:

- Constraints apply based on the original line direction.
- The reference angle (0°) is determined by the lines current orientation.
- Only lines and arrows support constraint snapping during modification.
- Adjustments snap to the configured angle increment relative to the original direction.

N> You can refer to our [React PDF Viewer](https://www.syncfusion.com/React-ui-components/React-pdf-viewer) feature tour page for its groundbreaking feature representations. You can also explore our [React PDF Viewer example](https://github.com/syncfusion/ej2-React-samples/tree/master/src/app/pdfviewer) to know how to render and configure the PDF Viewer.
