---
layout: post
title: Annotations Permission in ASP.NET Core PDF Viewer | Syncfusion
description: Learn here all about how to use annotation permissions in Syncfusion ASP.NET Core PDF Viewer using programmatic APIs.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Annotation permissions in ASP.NET Core

Use [annotationSettings](hhttps://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_AnnotationSettings) to control creation-time permissions and default behavior for annotations in the PDF Viewer. These settings establish defaults for annotations created through the UI and programmatic flows.

## Common permissions

- `isLock`: Lock an annotation so it cannot be moved, resized, edited, or deleted.
- `skipPrint`: Exclude annotations from the print output when printing from the viewer.
- `skipDownload`: Exclude annotations from the exported/downloaded PDF.

Example: set default `annotationSettings` in an ASP.NET Core view using the `ejs-pdfviewer` tag.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<div style="width:100%;height:600px">
  <ejs-pdfviewer id="pdfviewer"
                 style="height:600px"
                 documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                 resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib">
  </ejs-pdfviewer>
</div>
<script>
window.onload = function () {
  var viewer = document.getElementById('pdfviewer').ej2_instances[0];
  viewer.annotationSettings = { author: 'XYZ', minHeight: 10, minWidth: 10, maxWidth: 100, maxHeight: 100, isLock: false, skipPrint: false, skipDownload: false, allowedInteractions: ['Resize'] };
}
</script>
{% endhighlight %}
{% endtabs %}

## Individual permissions

- `isPrint`: Controls whether a specific annotation participates in printing. Set to `false` to exclude only that annotation from print output.
- `isLock`: Lock or unlock a specific annotation instance programmatically.

Example: set per-annotation defaults for text markup, shapes, and measurements using ASP.NET Core tag attributes.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<div style="width:100%;height:600px">
  <ejs-pdfviewer id="pdfviewer"
                 style="height:600px"
                 documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                 resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib">
  </ejs-pdfviewer>
</div>
<script>
window.onload = function () {
  var viewer = document.getElementById('pdfviewer').ej2_instances[0];
  viewer.highlightSettings = { author: 'QA', subject: 'Review', color: '#ffff00', opacity: 0.6 };
  viewer.strikethroughSettings = { author: 'QA', subject: 'Remove', color: '#ff0000', opacity: 0.6 };
  viewer.underlineSettings = { author: 'Guest User', subject: 'Points to be remembered', color: '#00ffff', opacity: 0.9 };
  viewer.squigglySettings = { author: 'Guest User', subject: 'Corrections', color: '#00ff00', opacity: 0.9 };
  viewer.lineSettings = { strokeColor: '#0066ff', thickness: 2, opacity: 0.8, isLock: false, isPrint: true };
  viewer.arrowSettings = { strokeColor: '#0066ff', thickness: 2, opacity: 0.8, isLock: false, isPrint: true };
  viewer.rectangleSettings = { fillColor: '#ffffff00', strokeColor: '#222222', thickness: 1, opacity: 1, isLock: false, isPrint: true };
  viewer.circleSettings = { fillColor: '#ffffff00', strokeColor: '#222222', thickness: 1, opacity: 1, isLock: false, isPrint: true };
  viewer.polygonSettings = { fillColor: '#ffffff00', strokeColor: '#222222', thickness: 1, opacity: 1, isLock: false, isPrint: true };
  viewer.distanceSettings = { strokeColor: '#0066ff', thickness: 2, opacity: 0.8, isLock: false, isPrint: true };
  viewer.perimeterSettings = { strokeColor: '#0066ff', thickness: 2, opacity: 0.8, isLock: false, isPrint: true };
  viewer.areaSettings = { strokeColor: '#0066ff', thickness: 2, opacity: 0.8, fillColor: '#ffffff00', isLock: false, isPrint: true };
  viewer.radiusSettings = { strokeColor: '#0066ff', thickness: 2, opacity: 0.8, fillColor: '#ffffff00', isLock: false, isPrint: true };
  viewer.volumeSettings = { strokeColor: '#0066ff', thickness: 2, opacity: 0.8, fillColor: '#ffffff00', isLock: false, isPrint: true };
  viewer.freeTextSettings = { borderColor: '#222222', opacity: 1, isLock: false, isPrint: true };
  viewer.inkAnnotationSettings = { strokeColor: '#0000ff', thickness: 3, opacity: 0.8, isLock: false, isPrint: true };
  viewer.stampSettings = { opacity: 0.9, isLock: false, isPrint: true };
  viewer.stickyNotesSettings = { author: 'QA', subject: 'Review', opacity: 1, isLock: false, isPrint: true };
}
</script>
{% endhighlight %}
{% endtabs %}

Behavior notes
- isLock true: The annotation is locked; users cannot move, resize, or edit it through the UI until it is unlocked.
- skipPrint true: All annotations are omitted from the print output initiated from the viewer.
- skipDownload true: All annotations are omitted from the exported/downloaded PDF from the viewer.
- isPrint on an individual annotation: Use this when you only want to exclude a particular annotation from printing while leaving others printable.

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
- [Annotation in Mobile View](../annotation/annotations-in-mobile-view)
- [Annotation Events](../annotation/annotation-event)
- [Annotation API](../annotation/annotations-api)