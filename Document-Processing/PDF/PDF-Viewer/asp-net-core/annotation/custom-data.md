---
layout: post
title: Custom Data in annotations in ASP.NET Core PDF Viewer | Syncfusion
description: Learn here all about how to use add custom Data in annotation in Syncfusion ASP.NET Core PDF Viewer Component.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Custom data in annotations in ASP.NET Core

Annotations can include custom key–value data via the `customData` property. This is supported at two levels:

- Default level via `annotationSettings`: applies to all annotations created through the UI.
- Per-annotation-type level: provide `customData` inside specific annotation-type settings (for example, `highlightSettings`, `rectangleSettings`).

The `customData` value can be any JSON-serializable object. It is preserved during annotation export/import and is available at runtime on the annotation object.

## Default custom data (annotationSettings)

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
      allowedInteractions: ['Resize'],
      // Custom data applied to all newly created annotations
      customData: {
        appId: 'pdf-review',
        tenant: 'northwind',
        featureFlags: { allowShare: true, qaStamp: false }
      }
    };
  }
};
</script>
{% endhighlight %}
{% endtabs %}

## Custom data for Individual Annotation

Provide customData inside individual annotation-type settings when you want specific payloads for different tools.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<div style="width:100%;height:600px">
  <ejs-pdfviewer id="container" style="height:600px" resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib" documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"></ejs-pdfviewer>
</div>
<script>
window.onload = function() {
  var viewer = document.getElementById('container').ej2_instances[0];
  if (viewer) {
    // Text markup
    viewer.highlightSettings = { author: 'QA', subject: 'Review', color: '#ffff00', opacity: 0.6, customData: { tag: 'needs-review', priority: 'high' } };
    viewer.strikethroughSettings = { author: 'QA', subject: 'Remove', color: '#ff0000', opacity: 0.6, customData: { tag: 'remove', priority: 'medium' } };
    viewer.underlineSettings = { author: 'Guest User', subject: 'Notes', color: '#00ffff', opacity: 0.9, customData: { tag: 'note', owner: 'guest' } };
    viewer.squigglySettings = { author: 'Guest User', subject: 'Corrections', color: '#00ff00', opacity: 0.9, customData: { tag: 'typo' } };

    // Shapes
    viewer.lineSettings = { strokeColor: '#0066ff', thickness: 2, opacity: 0.8, customData: { id: 'ln-1', category: 'connector' } };
    viewer.arrowSettings = { strokeColor: '#0066ff', thickness: 2, opacity: 0.8, customData: { id: 'ar-1', category: 'direction' } };
    viewer.rectangleSettings = { fillColor: '#ffffff00', strokeColor: '#222222', thickness: 1, opacity: 1, customData: { id: 'rect-1', zone: 'content' } };
    viewer.circleSettings = { fillColor: '#ffffff00', strokeColor: '#222222', thickness: 1, opacity: 1, customData: { id: 'circ-1', zone: 'highlight' } };
    viewer.polygonSettings = { fillColor: '#ffffff00', strokeColor: '#222222', thickness: 1, opacity: 1, customData: { id: 'poly-1', group: 'area' } };

    // Measurements
    viewer.distanceSettings = { strokeColor: '#0066ff', thickness: 2, opacity: 0.8, customData: { units: 'cm', scale: 1 } };
    viewer.perimeterSettings = { strokeColor: '#0066ff', thickness: 2, opacity: 0.8, customData: { units: 'cm', calc: 'perimeter' } };
    viewer.areaSettings = { strokeColor: '#0066ff', thickness: 2, opacity: 0.8, fillColor: '#ffffff00', customData: { units: 'cm^2', calc: 'area' } };
    viewer.radiusSettings = { strokeColor: '#0066ff', thickness: 2, opacity: 0.8, fillColor: '#ffffff00', customData: { units: 'cm', calc: 'radius' } };
    viewer.volumeSettings = { strokeColor: '#0066ff', thickness: 2, opacity: 0.8, fillColor: '#ffffff00', customData: { units: 'cm^3', calc: 'volume' } };

    // Others
    viewer.freeTextSettings = { borderColor: '#222222', opacity: 1, customData: { template: 'comment', mentions: ['qa'] } };
    viewer.inkAnnotationSettings = { strokeColor: '#0000ff', thickness: 3, opacity: 0.8, customData: { tool: 'pen', userId: 12345 } };
    viewer.stampSettings = { opacity: 0.9, customData: { stampType: 'Approved', by: 'Manager' } };
    viewer.stickyNotesSettings = { author: 'QA', subject: 'Review', opacity: 1, customData: { channel: 'inbox', unread: true } };
  }
};
</script>
{% endhighlight %}
{% endtabs %}

## Retrieve custom data at runtime

You can access the customData for any annotation through the viewer's annotationCollection. For example, wire a button click to iterate all annotations and read their custom payloads.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<div>
  <button id="showData">Show Custom Data</button>
  <div style="width:100%;height:600px">
    <ejs-pdfviewer id="container" style="height:600px" resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib" documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"></ejs-pdfviewer>
  </div>
</div>
<script>
window.onload = function() {
  function getViewer() { return document.getElementById('container').ej2_instances[0]; }
  document.getElementById('showData').onclick = function() {
    var viewer = getViewer();
    if (viewer && viewer.annotationCollection) {
      for (var i = 0; i < viewer.annotationCollection.length; i++) {
        var a = viewer.annotationCollection[i];
        console.log('Annotation', a.id, 'customData:', a.customData);
      }
    }
  };
};
</script>
{% endhighlight %}
{% endtabs %}

### Note
- `customData` can be any JSON-serializable object and is stored with the annotation.
- Use `annotationSettings.customData` for global defaults and override with per-tool settings as needed.

[View Sample on GitHub](https://github.com/SyncfusionExamples/aspnet-core-pdf-viewer-examples)

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
