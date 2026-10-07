---
layout: post
title: Export Import Events in ASP.NET MVC PDF Viewer | Syncfusion
description: Handle import and export events in the ASP.NET MVC PDF Viewer to run custom logic when annotations are loaded or saved from the control.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Annotation Import and Export Events in ASP.NET MVC PDF Viewer

Import/export events let developers monitor and control annotation data as it flows into and out of the PDF Viewer. These events enable validation, progress reporting, audit logging, and conditional blocking of import/export operations.

Common use cases:
- Progress UI and user feedback
- Validation and sanitization of imported annotation data
- Audit logging and telemetry
- Blocking or altering operations based on business rules

Each event passes a typed event-args object: **ImportStartEventArgs**, **ImportSuccessEventArgs**, **ImportFailureEventArgs**, **ExportStartEventArgs**, **ExportSuccessEventArgs**, and **ExportFailureEventArgs** that describe the operation context.

## Import events
- **importStart**: Triggers when an import operation starts.
- **importSuccess**: Triggers when annotations are successfully imported.
- **importFailed**: Triggers when importing annotations fails.

## Handle import events

Wire the events to the viewer after it is initialized.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>
<script>
    var viewer = document.getElementById('pdfviewer').ej2_instances[0];
    viewer.importStart = function (args) { console.log('Import started', args); };
    viewer.importSuccess = function (args) { console.log('Import success', args); };
    viewer.importFailed = function (args) { console.error('Import failed', args); };
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/PdfViewer/")).DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>
<script>
    var viewer = document.getElementById('pdfviewer').ej2_instances[0];
    viewer.importStart = function (args) { console.log('Import started', args); };
    viewer.importSuccess = function (args) { console.log('Import success', args); };
    viewer.importFailed = function (args) { console.error('Import failed', args); };
</script>

{% endhighlight %}
{% endtabs %}

## Export events
- **exportStart**: Triggers when an export operation starts.
- **exportSuccess**: Triggers when annotations are successfully exported.
- **exportFailed**: Triggers when exporting annotations fails.

## Handle export events

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>
<script>
    var viewer = document.getElementById('pdfviewer').ej2_instances[0];
    viewer.exportStart = function (args) { console.log('Export started', args); };
    viewer.exportSuccess = function (args) { console.log('Export success', args); };
    viewer.exportFailed = function (args) { console.error('Export failed', args); };
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/PdfViewer/")).DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>
<script>
    var viewer = document.getElementById('pdfviewer').ej2_instances[0];
    viewer.exportStart = function (args) { console.log('Export started', args); };
    viewer.exportSuccess = function (args) { console.log('Export success', args); };
    viewer.exportFailed = function (args) { console.error('Export failed', args); };
</script>

{% endhighlight %}
{% endtabs %}

N> `importStart`, `importSuccess`, and `importFailed` cover the lifecycle of annotation imports; `exportStart`, `exportSuccess`, and `exportFailed` cover the lifecycle of annotation exports.

## See also

- [Annotation Overview](../overview)
- [Annotation Types](../annotation-types/area-annotation)
- [Annotation Toolbar](../../toolbar-customization/annotation-toolbar)
- [Create and Modify Annotation](../create-modify-annotation)
- [Customize Annotation](../customize-annotation)
- [Remove Annotation](../delete-annotation)
- [Handwritten Signature](../signature-annotation)
- [Export Annotation](./export-annotation)
- [Import Annotation](./import-annotation)
- [Annotation Permission](../annotation-permission)
- [Annotation in Mobile View](../annotations-in-mobile-view)
- [Annotation Events](../annotation-event)
- [Annotation API](../annotations-api)
