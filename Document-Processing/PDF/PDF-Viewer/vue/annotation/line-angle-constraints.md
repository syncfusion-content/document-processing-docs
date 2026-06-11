---
layout: post
title: Line Angle Constraints in Vue PdfViewer | Syncfusion
description: Discover how to manage text markup annotations like highlight, underline, strikethrough, and squiggly in the Syncfusion Vue PDF Viewer.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Line angle constraints in Vue PDF Viewer

The PDF Viewer control provides angle-constraint functionality for line-type annotations. When enabled, drawing operations snap to configured angle increments, improving accuracy and consistency for technical drawings and measurements.

## Enable line angle constraints
Configure the `enableLineAngleConstraints` property within `annotationDrawingOptions`. When enabled, supported line-type annotations snap to fixed angles.

The following code demonstrates how to enable line angle constraints:

{% tabs %}
{% highlight html tabtitle="Composition API (Standalone)" %}

<template>
  <div id="app">
    <ejs-pdfviewer
      id="pdfViewer"
      ref="pdfviewer"
      :annotationDrawingOptions="annotationDrawingOptions"
      :documentPath="documentPath"
      :resourceUrl="resourceUrl"
      style="height: 640px;"
    >
    </ejs-pdfviewer>
  </div>
</template>

<script>
import {
  PdfViewerComponent,
  Toolbar,
  Magnification,
  Navigation,
  Annotation,
  TextSelection,
  TextSearch,
  FormFields,
  FormDesigner,
  PageOrganizer,
} from '@syncfusion/ej2-vue-pdfviewer';
export default {
  name: 'App',
  components: {
    'ejs-pdfviewer': PdfViewerComponent,
  },
  data() {
    return {
        documentPath:'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
        resourceUrl: 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib',
        annotationDrawingOptions : {enableLineAngleConstraints : true, restrictLineAngleTo: 90}
    };
  },
  provide: {
    PdfViewer: [
      Toolbar,
      Magnification,
      Navigation,
      Annotation,
      TextSelection,
      TextSearch,
      FormFields,
      FormDesigner,
      PageOrganizer,
    ],
  },
};
</script>

{% endhighlight %}
{% endtabs %}

## Configuration Properties

### enableLineAngleConstraints

The `enableLineAngleConstraints` property activates angle snapping for line-based annotations. When set to `true`, the following annotation types snap to fixed angles as defined by `restrictLineAngleTo`:

- Lines
- Arrows
- Polygon
- Distance measurements
- Perimeter measurements
- Area measurements
- Volume measurements

**Key benefits:**

- Automatic angle snapping while drawing
- Improved precision for technical drawings and measurements
- Desktop behavior: hold Shift while drawing to toggle constraints (if constraints are disabled, Shift temporarily enables snapping; if enabled, Shift enforces snapping)
- Real-time visual feedback during drawing

### restrictLineAngleTo

Specifies the angle increment (in degrees) used for snapping. The default increment is 45°.

Angle snapping behavior:

- The initial drawing direction is treated as the 0° reference point.
- Snapped angles are calculated by adding the increment to the reference direction.
- If the increment does not divide 360 evenly, angles continue wrapping after 360°.

Examples:

- `restrictLineAngleTo: 45` → snapped angles: 0°, 45°, 90°, 135°, 180°, 225°, 270°, 315°, 360°
- `restrictLineAngleTo: 100` → snapped angles: 0°, 100°, 200°, 300°, 360°

## Work with constrained annotations

### Drawing behavior

When angle constraints are enabled:

- Begin drawing a supported annotation (Line, Arrow, Polyline, Distance, or Perimeter).
- The segment snaps to the nearest allowed angle according to `restrictLineAngleTo`.
- A visual indicator displays the current snapping angle in real time.
- Release to finalize the annotation.

### Keyboard shortcuts

Desktop platforms:

- `Shift` + drag: toggles snapping during the drag operation. If constraints are disabled, `Shift` temporarily enables snapping; if enabled, `Shift` enforces snapping.

### Modifying constrained annotations

When editing existing line annotations with selectors:

- Constraints apply relative to the annotation's current orientation (the line's direction is the 0° reference).
- Constraint snapping during modification is supported for Line and Arrow annotations.
- Adjustments snap according to the configured `restrictLineAngleTo` increment.

N> Refer to the Vue PDF Viewer [feature tour](https://www.syncfusion.com/pdf-viewer-sdk/vue-pdf-viewer) for highlights. See additional [Vue PDF Viewer examples](https://github.com/SyncfusionExamples/vue-pdf-viewer-examples)