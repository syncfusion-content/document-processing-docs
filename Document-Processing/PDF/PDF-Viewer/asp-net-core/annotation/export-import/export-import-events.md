---
layout: post
title: Import/Export events in ASP.NET Core PDF Viewer | Syncfusion
description: Learn how to handle Import/Export events for PDF Annotations in the Syncfusion ASP.NET Core PDF Viewer component.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Import/Export events in ASP.NET Core PDF Viewer

Import/export events let developers monitor and control annotation data as it flows into and out of the PDF Viewer. These events enable validation, progress reporting, audit logging, and conditional blocking of import/export operations.

Common use cases:
- Progress UI and user feedback
- Validation and sanitation of imported annotation data
- Audit logging and telemetry
- Blocking or altering operations based on business rules

Each event exposes typed event-args: `ImportStartEventArgs`, `ImportSuccessEventArgs`, `ImportFailureEventArgs`, `ExportStartEventArgs`, `ExportSuccessEventArgs`, and `ExportFailureEventArgs` that describe the operation context.

## Import events
- [`importStart`](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_ImportStart): Triggers when an import operation starts.
- [`importSuccess`](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_ImportSuccess): Triggers when annotations are successfully imported.
- [`importFailed`](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_ImportFailed): Triggers when importing annotations fails.

## Handle import events
Example: handle import events by wiring handlers after initializing the viewer.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<div style="width:100%;height:650px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:650px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                   resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib">
    </ejs-pdfviewer>
</div>
<script>
window.onload = function () {
  var viewer = document.getElementById('pdfviewer').ej2_instances[0];
  viewer.importStart = function(args) { console.log('Import started', args); };
  viewer.importSuccess = function(args) { console.log('Import success', args); };
  viewer.importFailed = function(args) { console.error('Import failed', args); };
}
</script>
{% endhighlight %}
{% endtabs %}

## Export events
- [`exportStart`](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_ExportStart): Triggers when an export operation starts.
- [`exportSuccess`](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_ExportSuccess): Triggers when annotations are successfully exported.
- [`exportFailed`](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_ExportFailed): Triggers when exporting annotations fails.

## Handle export events

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<div style="width:100%;height:650px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:650px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                   resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib">
    </ejs-pdfviewer>
</div>
<script>
window.onload = function () {
  var viewer = document.getElementById('pdfviewer').ej2_instances[0];
  viewer.exportStart = function(args) { console.log('Export started', args); };
  viewer.exportSuccess = function(args) { console.log('Export success', args); };
  viewer.exportFailed = function(args) { console.error('Export failed', args); };
}
</script>
{% endhighlight %}
{% endtabs %}

N> `importStart`, `importSuccess`, and `importFailed` cover the life cycle of annotation imports; `exportStart`, `exportSuccess`, and `exportFailed` cover the life cycle of annotation exports.

## See also

- [Annotation Overview](../../overview)
- [Annotation Types](../../annotation/annotation-types/area-annotation)
- [Annotation Toolbar](../../toolbar-customization/annotation-toolbar)
- [Create and Modify Annotation](../../annotation/create-modify-annotation)
- [Customize Annotation](../../annotation/customize-annotation)
- [Remove Annotation](../../annotation/delete-annotation)
- [Handwritten Signature](../../annotation/signature-annotation)
- [Export Annotation](../export-import/export-annotation)
- [Import Annotation](../export-import/import-annotation)
- [Annotation Permission](../../annotation/annotation-permission)
- [Annotation in Mobile View](../../annotation/annotations-in-mobile-view)
- [Annotation Events](../../annotation/annotation-event)
- [Annotation API](../../annotation/annotations-api)