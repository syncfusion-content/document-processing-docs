---
layout: post
title: Custom annotation tools in ASP.NET Core PDF Viewer | Syncfusion
description: Learn how to build a custom toolbar for Syncfusion ASP.NET Core PDF Viewer and switch annotation tools programmatically using setAnnotationMode.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Custom annotation tools in ASP.NET Core PDF Viewer

The PDF Viewer supports adding a custom toolbar and toggling annotation tools programmatically using the `setAnnotationMode` method. The viewer can enable tools such as Highlight, Underline, Rectangle, Circle, Arrow, Free Text, Ink, and measurement annotations (Distance, Perimeter, Area, Radius)  

Follow these steps to build a minimal custom annotation toolbar.

Step 1: Start from a basic PDF Viewer sample

Refer to the [Getting started guide](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/asp-net-core/getting-started) to create a basic sample.

Step 2: Add a lightweight custom toolbar with HTML buttons

Add buttons for the tools to expose. The sample below uses plain HTML buttons for simplicity; replace with a Syncfusion ToolbarComponent for a richer UI if desired.

Step 3: Configure the PDF Viewer element

Ensure the PDF Viewer element includes the `resourceUrl` attribute to load required modules for annotation support.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<div style="width:100%;height:680px">
  <div style="display: flex; flex-wrap: wrap; gap: 4px; margin-bottom: 8px;">
    <button onclick="setMode('Highlight')">Highlight</button>
    <button onclick="setMode('Underline')">Underline</button>
    <button onclick="setMode('Strikethrough')">Strikethrough</button>
    <button onclick="setMode('Rectangle')">Rectangle</button>
    <button onclick="setMode('Circle')">Circle</button>
    <button onclick="setMode('Line')">Line</button>
    <button onclick="setMode('Arrow')">Arrow</button>
    <button onclick="setMode('Polygon')">Polygon</button>
    <button onclick="setMode('FreeText')">Free Text</button>
    <button onclick="setMode('Ink')">Ink</button>
    <button onclick="setMode('StickyNotes')">Sticky Note</button>
    <button onclick="setMode('Distance')">Distance</button>
    <button onclick="setMode('Perimeter')">Perimeter</button>
    <button onclick="setMode('Area')">Area</button>
    <button onclick="setMode('Radius')">Radius</button>
    <button onclick="setMode('None')">Exit</button>
  </div>
  <ejs-pdfviewer id="container" style="height:600px" resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib" documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"></ejs-pdfviewer>
</div>
<script>
window.onload = function() {
  var viewer = document.getElementById('container').ej2_instances[0];
};

function getViewer() { 
  return document.getElementById('container').ej2_instances[0]; 
}

function setMode(mode) { 
  var viewer = getViewer();
  if (viewer) {
    viewer.annotation.setAnnotationMode(mode); 
  }
}
</script>
{% endhighlight %}
{% endtabs %}

## Custom tools using Syncfusion Toolbar for a richer UI

Replace the plain buttons with a Syncfusion `ToolbarComponent` and icons for a richer UI. Wire each item's `click` handler to `setAnnotationMode` with appropriate annotation mode values.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<div style="width:100%;height:680px">
  <ejs-toolbar id="annotation-toolbar" style="margin-bottom: 8px;">
    <e-toolbar-items>
      <e-toolbar-item id="annHighlight" text="Highlight" onclick="onToolbarClick('annHighlight')" prefixIcon="e-pv-highlight-icon"></e-toolbar-item>
      <e-toolbar-item id="annUnderline" text="Underline" onclick="onToolbarClick('annUnderline')" prefixIcon="e-pv-underline-icon"></e-toolbar-item>
      <e-toolbar-item id="annStrike" text="Strike" onclick="onToolbarClick('annStrike')" prefixIcon="e-pv-strikethrough-icon"></e-toolbar-item>
      <e-toolbar-item type="Separator"></e-toolbar-item>
      <e-toolbar-item id="annRect" text="Rect" onclick="onToolbarClick('annRect')" prefixIcon="e-pv-shape-rectangle-icon"></e-toolbar-item>
      <e-toolbar-item id="annCircle" text="Circle" onclick="onToolbarClick('annCircle')" prefixIcon="e-pv-shape-circle-icon"></e-toolbar-item>
      <e-toolbar-item id="annLine" text="Line" onclick="onToolbarClick('annLine')" prefixIcon="e-pv-shape-line-icon"></e-toolbar-item>
      <e-toolbar-item id="annArrow" text="Arrow" onclick="onToolbarClick('annArrow')" prefixIcon="e-pv-shape-arrow-icon"></e-toolbar-item>
      <e-toolbar-item id="annPolygon" text="Polygon" onclick="onToolbarClick('annPolygon')" prefixIcon="e-pv-shape-pentagon"></e-toolbar-item>
      <e-toolbar-item type="Separator"></e-toolbar-item>
      <e-toolbar-item id="annFreeText" text="Free Text" onclick="onToolbarClick('annFreeText')" prefixIcon="e-pv-freetext-icon"></e-toolbar-item>
      <e-toolbar-item id="annInk" text="Ink" onclick="onToolbarClick('annInk')" prefixIcon="e-pv-inkannotation-icon"></e-toolbar-item>
      <e-toolbar-item id="annSticky" text="Note" onclick="onToolbarClick('annSticky')" prefixIcon="e-pv-sticky-notes"></e-toolbar-item>
      <e-toolbar-item type="Separator"></e-toolbar-item>
      <e-toolbar-item id="annDistance" text="Distance" onclick="onToolbarClick('annDistance')" prefixIcon="e-pv-calibrate-distance-icon"></e-toolbar-item>
      <e-toolbar-item id="annPerimeter" text="Perimeter" onclick="onToolbarClick('annPerimeter')" prefixIcon="e-pv-calibrate-perimeter-icon"></e-toolbar-item>
      <e-toolbar-item id="annArea" text="Area" onclick="onToolbarClick('annArea')" prefixIcon="e-pv-calibrate-area-icon"></e-toolbar-item>
      <e-toolbar-item id="annRadius" text="Radius" onclick="onToolbarClick('annRadius')" prefixIcon="e-pv-calibrate-radius-icon"></e-toolbar-item>
      <e-toolbar-item type="Separator"></e-toolbar-item>
      <e-toolbar-item id="annNone" text="Exit" onclick="onToolbarClick('annNone')" align="Right"></e-toolbar-item>
    </e-toolbar-items>
  </ejs-toolbar>
  <ejs-pdfviewer id="container" style="height:600px" resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib" documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"></ejs-pdfviewer>
</div>
<script>
window.onload = function() {
  var viewer = document.getElementById('container').ej2_instances[0];
};

function getViewer() { 
  return document.getElementById('container').ej2_instances[0]; 
}

function onToolbarClick(itemId) {
  var modeMap = {
    'annHighlight': 'Highlight',
    'annUnderline': 'Underline',
    'annStrike': 'Strikethrough',
    'annRect': 'Rectangle',
    'annCircle': 'Circle',
    'annLine': 'Line',
    'annArrow': 'Arrow',
    'annPolygon': 'Polygon',
    'annFreeText': 'FreeText',
    'annInk': 'Ink',
    'annSticky': 'StickyNotes',
    'annDistance': 'Distance',
    'annPerimeter': 'Perimeter',
    'annArea': 'Area',
    'annRadius': 'Radius',
    'annNone': 'None'
  };
  var mode = modeMap[itemId];
  if (mode) { 
    var viewer = getViewer();
    if (viewer) {
      viewer.annotation.setAnnotationMode(mode); 
    }
  }
}
</script>
{% endhighlight %}
{% endtabs %}

Note

- `setAnnotationMode` accepts the annotation type name. Common values include: `Highlight`, `Underline`, `Strikethrough`, `StickyNotes`, `FreeText`, `Ink`, `Rectangle`, `Circle`, `Line`, `Arrow`, `Polygon`, `Polyline`, `Distance`, `Perimeter`, `Area`, `Radius`, and `None` to exit.
- Default annotation styles can be predefined using the corresponding settings properties (for example, `areaSettings`).

[View Sample on GitHub](https://github.com/SyncfusionExamples/aspnet-core-pdf-viewer-examples)

## See also

- [Annotation Overview](../overview)
- [Annotation Types](../annotation/annotation-types/area-annotation)
- [Annotation Toolbar](../toolbar-customization/annotation-toolbar)
- [Create and Modify Annotation](../annotation/create-modify-annotation)
- [Customize Annotation](../annotation/customize-annotation)
- [Remove Annotation](../annotation/delete-annotation)
- [Handwritten Signature](../annotation/signature-annotation)
- [Export and Import Annotation](../annotation/export-import/export-annotation)
- [Annotation Permission](../annotation/annotation-permission)
- [Annotation in Mobile View](../annotation/annotations-in-mobile-view)
- [Annotation Events](../annotation/annotation-event)
- [Annotation API](../annotation/annotations-api)
