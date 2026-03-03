---
layout: post
title: Line Angle Constraints in ASP.NET Core PDF Viewer | Syncfusion
description: Master line angle constraints in ASP.NET Core PDF Viewer. Enable angle snapping for precise technical drawings, measurements, and consistent annotation angles.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Line Angle Constraints in ASP.NET Core PDF Viewer

The PDF Viewer control provides robust line angle constraints functionality for precise technical drawings and measurements. Enable angle snapping to automatically align line-based annotations to fixed angles, improving accuracy and consistency across professional documents.

## Enable line angle constraints

Configure the `enableLineAngleConstraints` property within `annotationDrawingOptions` to enable automatic angle snapping. When enabled, supported line-type annotations snap to fixed angles as defined by the `restrictLineAngleTo` property.

**Example: Enable line angle constraints configuration**

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

@page "{handler?}"
@model IndexModel
@{
    ViewData["Title"] = "Home page";
}

<div style="width:100%;height:600px">
    <!-- To configure the server-backed PDF Viewer, include the "serviceUrl='/Index'" attribute -->
    <ejs-pdfviewer id="pdfviewer"
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                   resourceUrl="https://cdn.syncfusion.com/ej2/31.1.17/dist/ej2-pdfviewer-lib"
                   style="height:641px;">
    </ejs-pdfviewer>
</div>

<script type="text/javascript">
    window.onload = function () {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        viewer.annotationDrawingOptions.enableLineAngleConstraints = true;
        viewer.annotationDrawingOptions.restrictLineAngleTo = 90;
    };
</script>

{% endhighlight %}
{% endtabs %}

## Configuration properties

Line angle constraints are configured through two main properties in the `annotationDrawingOptions` object.

### enableLineAngleConstraints

When `enableLineAngleConstraints` is set to `true`, the following annotation types automatically snap to fixed angles:
- Lines
- Arrows
- Polygon
- Distance measurements
- Perimeter measurements
- Area measurements
- Volume measurements

#### Key behaviors
- **Automatic snapping** - Angles align to configured increment during drawing
- **Precision enhancement** - Improved accuracy for technical documents
- **Shift key toggle** - Hold Shift to temporarily toggle constraint behavior
- **Real-time feedback** - Visual indicators show angle alignment
- **Persistent constraints** - Constraints apply during modification via selectors

### restrictLineAngleTo

Defines the angle increment in degrees for snapping. The default value is 45.

#### Angle snapping rules

- **Initial reference** - The first drawing direction is treated as 0° reference point
- **Increment calculation** - Snapped angles are multiples of the specified increment
- **Angle wrapping** - Angles reset after 360° based on the increment value

Examples:

- restrictLineAngleTo: 45 → Snapped angles: 0°, 45°, 90°, 135°, 180°, 225°, 270°, 315°, 360°
- restrictLineAngleTo: 100 → Snapped angles: 0°, 100°, 200°, 300°, 360°

## Work with constrained annotations

### Drawing behavior

When line angle constraints are enabled, constrained drawing provides automatic angle alignment:

1. **Start drawing** - Click to start drawing a supported annotation type
2. **Snapping occurs** - Annotation segment snaps to nearest allowed angle
3. **Visual feedback** - Real-time indicators show angle alignment
4. **Continue or release** - Continue drawing for multi-segment shapes or release to complete
5. **Angle confirmation** - Final annotation locks to the snapped angle

### Keyboard shortcuts

Desktop platforms:
- Shift + drag: toggles snapping. If constraints are disabled, Shift temporarily enables them; if enabled, Shift enforces snapping.

### Selector-based modifications

When modifying existing line annotations using selectors:

- Constraints apply based on the original line direction.
- The reference angle (0°) is determined by the line’s current orientation.
- Constraint snapping during modification is supported for Line and Arrow.
- Adjustments snap to the configured angle increment.

[View a sample in GitHub](https://github.com/SyncfusionExamples/asp-core-pdf-viewer-examples/tree/master/How%20to)

N> Refer to the ASP.NET Core PDF Viewer [feature tour](https://www.syncfusion.com/pdf-viewer-sdk/javascript-pdf-viewer) for feature highlights. Explore the [ASP.NET Core PDF Viewer examples](https://github.com/SyncfusionExamples/asp-core-pdf-viewer-examples) to learn how to render and configure the PDF Viewer.
