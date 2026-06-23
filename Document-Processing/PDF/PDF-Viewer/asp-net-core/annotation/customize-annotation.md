---
layout: post
title: Customize annotations in ASP.NET Core PDF Viewer | Syncfusion
description: Learn how to customize PDF annotations in Syncfusion ASP.NET Core PDF Viewer using UI tools and programmatic settings (defaults and runtime edits).
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Customize annotations in ASP.NET Core

Annotation appearance and behavior (for example color, stroke color, thickness, and opacity) can be customized using the built‑in UI or programmatically. This page summarizes common customization patterns and shows how to set defaults per annotation type.

## Customize via UI

Use the annotation toolbar after selecting an annotation:
- Edit color: changes the annotation fill/text color
![Edit color](../images/edit_color.png)
- Edit stroke color: changes border or line color for shapes and lines types.
![Edit stroke color](../images/shape_strokecolor.png)
- Edit thickness: adjusts border or line thickness
![Edit thickness](../images/shape_thickness.png)
- Edit opacity: adjusts transparency
![Edit opacity](../images/shape_opacity.png)

Type‑specific options (for example, Line properties) are available from the context menu (right‑click > Properties) where supported.

## Set default properties during initialization

Set defaults for specific annotation types when creating the `PdfViewer` instance. Configure properties such as author, subject, color, and opacity using annotation settings. The examples below reference settings used on the annotation type pages.

Text markup annotations:

- Highlight: Set default properties before creating the control using [`highlightSettings`](./annotation-types/highlight-annotation#set-properties-while-adding-individual-annotation)
- Strikethrough: Use [`strikethroughSettings`](./annotation-types/strikethrough-annotation#set-properties-while-adding-individual-annotation)
- Underline: Use [`underlineSettings`](./annotation-types/underline-annotation#set-properties-while-adding-individual-annotation)
- Squiggly: Use [`squigglySettings`](./annotation-types/Squiggly-annotation#set-properties-while-adding-individual-annotation)

Shape annotations:

- Line: Use [`lineSettings`](./annotation-types/line-annotation#set-properties-while-adding-individual-annotation)
- Arrow: Use [`arrowSettings`](./annotation-types/arrow-annotation#set-properties-while-adding-individual-annotation)
- Rectangle: Use [`rectangleSettings`](./annotation-types/rectangle-annotation#set-properties-while-adding-individual-annotation)
- Circle: Use [`circleSettings`](./annotation-types/circle-annotation#set-properties-while-adding-individual-annotation)
- Polygon: Use [`polygonSettings`](./annotation-types/polygon-annotation#set-properties-while-adding-individual-annotation)

Measurement annotations:

- Distance: Use [`distanceSettings`](./annotation-types/distance-annotation#set-default-properties-during-initialization)
- Perimeter: Use [`perimeterSettings`](./annotation-types/perimeter-annotation#set-default-properties-during-initialization)
- Area: Use [`areaSettings`](./annotation-types/area-annotation#set-default-properties-during-initialization)
- Radius: Use [`radiusSettings`](./annotation-types/radius-annotation#set-default-properties-during-initialization)
- Volume: Use [`volumeSettings`](./annotation-types/volume-annotation#set-default-properties-during-initialization)

Other Annotations:

- Redaction: Use [`redactionSettings`](./annotation-types/redaction-annotation#default-redaction-settings-during-initialization)
- Free text: Use [`freeTextSettings`](./annotation-types/free-text-annotation#set-default-properties-during-initialization)
- Ink (freehand): Use [`inkAnnotationSettings`](./annotation-types/ink-annotation#customize-ink-appearance)
- Stamp: Use [`stampSettings`](./annotation-types/stamp-annotation#set-properties-while-adding-individual-annotation)
- Sticky notes: Use [`stickyNotesSettings`](./annotation-types/sticky-notes#set-default-properties-during-initialization)

Set defaults for specific annotation types when creating the `ejs-pdfviewer` element. Below are examples using settings already used in the annotation type pages.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<div style="width:100%;height:600px">
  <ejs-pdfviewer id="container" style="height:600px" resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib" documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"></ejs-pdfviewer>
</div>
<script>
window.onload = function() {
  var viewer = document.getElementById('container').ej2_instances[0];
  if (viewer) {
    // Text markup defaults
    viewer.highlightSettings = { author: 'QA', subject: 'Review', color: '#ffff00', opacity: 0.6 };
    viewer.strikethroughSettings = { author: 'QA', subject: 'Remove', color: '#ff0000', opacity: 0.6 };
    viewer.underlineSettings = { author: 'Guest User', subject: 'Points to be remembered', color: '#00ffff', opacity: 0.9 };
    viewer.squigglySettings = { author: 'Guest User', subject: 'Corrections', color: '#00ff00', opacity: 0.9 };

    // Shapes
    viewer.lineSettings = { strokeColor: '#0066ff', thickness: 2, opacity: 0.8 };
    viewer.arrowSettings = { strokeColor: '#0066ff', thickness: 2, opacity: 0.8 };
    viewer.rectangleSettings = { fillColor: '#ffffff00', strokeColor: '#222222', thickness: 1, opacity: 1 };
    viewer.circleSettings = { fillColor: '#ffffff00', strokeColor: '#222222', thickness: 1, opacity: 1 };
    viewer.polygonSettings = { fillColor: '#ffffff00', strokeColor: '#222222', thickness: 1, opacity: 1 };

    // Measurements
    viewer.distanceSettings = { strokeColor: '#0066ff', thickness: 2, opacity: 0.8 };
    viewer.perimeterSettings = { strokeColor: '#0066ff', thickness: 2, opacity: 0.8 };
    viewer.areaSettings = { strokeColor: '#0066ff', thickness: 2, opacity: 0.8, fillColor: '#ffffff00' };
    viewer.radiusSettings = { strokeColor: '#0066ff', thickness: 2, opacity: 0.8, fillColor: '#ffffff00' };
    viewer.volumeSettings = { strokeColor: '#0066ff', thickness: 2, opacity: 0.8, fillColor: '#ffffff00' };

    // Others
    viewer.freeTextSettings = { borderColor: '#222222', thickness: 1, opacity: 1 };
    viewer.inkAnnotationSettings = { color: '#0000ff', thickness: 3, opacity: 0.8 };
    viewer.stampSettings = { opacity: 0.9 };
    viewer.stickyNotesSettings = { author: 'QA', subject: 'Review', color: '#ffcc00', opacity: 1 };
  }
};
</script>
{% endhighlight %}
{% endtabs %}

N> After changing defaults using UI tools (for example, Edit color or Edit opacity), the updated values apply to subsequent annotations within the same session.

## Customize programmatically at runtime

To update an existing annotation from code, modify its properties and call editAnnotation.

Example: bulk‑update matching annotations.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<div>
  <button id="bulkUpdate">Bulk Update Annotations</button>
  <div style="width:100%;height:600px">
    <ejs-pdfviewer id="container" style="height:600px" resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib" documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"></ejs-pdfviewer>
  </div>
</div>
<script>
window.onload = function() {
  function getViewer() { return document.getElementById('container').ej2_instances[0]; }
  document.getElementById('bulkUpdate').onclick = function() {
    var viewer = getViewer();
    if (viewer && viewer.annotationCollection) {
      for (var i = 0; i < viewer.annotationCollection.length; i++) {
        var ann = viewer.annotationCollection[i];
        if (ann && (ann.author === 'Guest' || ann.subject === 'Rectangle')) {
          ann.color = '#ff0000';
          ann.opacity = 0.8;
          // For shapes/lines you can also change strokeColor/thickness when applicable
          // ann.strokeColor = '#222222';
          // ann.thickness = 2;
          viewer.annotation.editAnnotation(ann);
        }
      }
    }
  };
};
</script>
{% endhighlight %}
{% endtabs %}

## Customize Annotation Settings

Defines the settings of the annotations. You can change annotation settings like author name, height, width etc., using the `annotationSettings` property.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<div style="width:100%;height:600px">
  <ejs-pdfviewer id="container" style="height:600px" resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib" documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"></ejs-pdfviewer>
</div>
<script>
window.onload = function() {
  var viewer = document.getElementById('container').ej2_instances[0];
  if (viewer) {
    viewer.annotationSettings = {
      author: 'XYZ',
      minHeight: 10,
      minWidth: 10,
      maxWidth: 100,
      maxHeight: 100,
      isLock: false,
      skipPrint: false,
      skipDownload: false,
      allowedInteractions: ['Select', 'Move']
    };
  }
};
</script>
{% endhighlight %}
{% endtabs %}
## Customize Annotation SelectorSettings

Defines the settings of annotation selector. You can customize the annotation selector using the `annotationSelectorSettings` property.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<div style="width:100%;height:600px">
  <ejs-pdfviewer id="container" style="height:600px" resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib" documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"></ejs-pdfviewer>
</div>
<script>
window.onload = function() {
  var viewer = document.getElementById('container').ej2_instances[0];
  if (viewer) {
    viewer.annotationSelectorSettings = {
      selectionBorderColor: 'blue',
      resizerBorderColor: 'red',
      resizerFillColor: '#4070ff',
      resizerSize: 8,
      selectionBorderThickness: 1,
      resizerShape: 'Circle',
      selectorLineDashArray: [5, 6],
      resizerLocation: 'Corners | Edges',
      resizerCursorType: 'grab'
    };
  }
};
</script>
{% endhighlight %}
{% endtabs %}

[View Sample on GitHub](https://github.com/SyncfusionExamples/aspnet-core-pdf-viewer-examples)

## See also

- [Annotation Overview](../overview)
- [Annotation Types](../annotation/annotation-types/area-annotation)
- [Annotation Toolbar](../toolbar-customization/annotation-toolbar)
- [Create and Modify Annotation](../annotation/create-modify-annotation)
- [Remove Annotation](../annotation/delete-annotation)
- [Handwritten Signature](../annotation/signature-annotation)
- [Export and Import Annotation](../annotation/export-import/export-annotation)
- [Annotation Permission](../annotation/annotation-permission)
- [Annotation in Mobile View](../annotation/annotations-in-mobile-view)
- [Annotation Events](../annotation/annotation-event)
- [Annotation API](../annotation/annotations-api)