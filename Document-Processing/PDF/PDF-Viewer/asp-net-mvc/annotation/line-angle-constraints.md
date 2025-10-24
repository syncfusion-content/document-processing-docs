---
layout: post
title: Line angle constraints in ASP.NET MVC PDF Viewer | Syncfusion
description: Learn to add, edit, delete, and configure highlight, underline, strikethrough, and squiggly text markup annotations programmatically.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Line angle constraints in ASP.NET MVC PDF Viewer

The PDF Viewer control provides robust **line angle constraints** functionality. This allows users to draw line type annotations with controlled angle snapping, improving accuracy and consistency across technical drawings and measurements across your PDF documents.

## Enable line angle constraints
Configure the `enableLineAngleConstraints` property within `annotationDrawingOptions`. When enabled, supported line-type annotations snap to fixed angles.

The following code demonstrates how to enable line angle constraints:

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

@using Syncfusion.EJ2
@{
    ViewBag.Title = "Home Page";
}

<div>
    <!-- Render PDF Viewer -->
    @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>

<!-- Ensure necessary Syncfusion scripts and styles are included -->
<script src="https://cdn.syncfusion.com/ej2/31.1.17/dist/ej2.min.js"></script>
<script type="text/javascript">
    window.onload = function () {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        viewer.annotationDrawingOptions.enableLineAngleConstraints = true;
        viewer.annotationDrawingOptions.restrictLineAngleTo = 90;
    };
</script>

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
- Desktop behavior: hold Shift while drawing to toggle constraints (when disabled, Shift temporarily enables; when enabled, Shift enforces snapping)
- Real-time visual feedback showing angle snapping behavior

### restrictLineAngleTo

Defines the angle increment (in degrees) used to constrain supported annotations. The default is 45.

Angle snapping rules:

- The initial drawing direction is treated as the 0° reference point
- Snapped angles are calculated based on the increment
- If the increment doesn’t divide 360 evenly, angles reset after 360°

**Examples:**

- restrictLineAngleTo: 45 → Snapped angles: 0°, 45°, 90°, 135°, 180°, 225°, 270°, 315°, 360°
- restrictLineAngleTo: 100 → Snapped angles: 0°, 100°, 200°, 300°, 360°

## Work with constrained annotations

### Drawing Behavior

When line angle constraints are enabled:

- Start drawing a supported annotation (Line, Arrow, Polyline, Distance, or Perimeter).
- The segment snaps to the nearest allowed angle.
- A visual indicator reflects snapping in real time.
- Release to complete the annotation.

### Keyboard Shortcuts

**Desktop platforms:**

**Shift + drag:** toggles snapping. If constraints are disabled, Shift temporarily enables them; if enabled, Shift enforces snapping.

### Selector-Based Modifications

When modifying existing line annotations using selectors:

- Constraints apply based on the original line direction.
- The reference angle (0°) is determined by the line’s current orientation.
- Constraint snapping during modification is supported for Line and Arrow.
- Adjustments snap to the configured angle increment.

[View a sample in GitHub](https://github.com/SyncfusionExamples/mvc-pdf-viewer-examples/tree/master/How%20to)

N> Refer to the ASP.NET MVC PDF Viewer [feature tour](https://www.syncfusion.com/pdf-viewer-sdk/asp-net-mvc-pdf-viewer) for feature highlights. Explore the [ASP.NET MVC PDF Viewer examples](https://github.com/SyncfusionExamples/mvc-pdf-viewer-examples) to learn how to render and configure the PDF Viewer.
