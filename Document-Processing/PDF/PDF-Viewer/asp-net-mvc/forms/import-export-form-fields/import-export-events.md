---
layout: post
title: Import/Export events in MVC PDF Viewer | Syncfusion
description: Learn how to handle Import/Export events for PDF form fields in the Syncfusion ASP.NET MVC PDF Viewer.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# PDF Form Import and Export Events in MVC

Import/Export events let you **track and customize the entire life cycle** of form data being imported into or exported from the PDF Viewer.
Use these events to:
- Validate inputs before processing.
- Show progress indicators.
- Log audit trails.
- Block operations based on business rules.

Each event provides detailed context through typed event arguments such as [ImportStartEventArgs](https://ej2.syncfusion.com/documentation/api/pdfviewer/importstarteventargs), [ImportSuccessEventArgs](https://ej2.syncfusion.com/documentation/api/pdfviewer/importsuccesseventargs), [ImportFailureEventArgs](https://ej2.syncfusion.com/documentation/api/pdfviewer/importfailureeventargs), [ExportStartEventArgs](https://ej2.syncfusion.com/documentation/api/pdfviewer/exportstarteventargs), [ExportSuccessEventArgs](https://ej2.syncfusion.com/documentation/api/pdfviewer/exportsuccesseventargs), and [ExportFailureEventArgs](https://ej2.syncfusion.com/documentation/api/pdfviewer/exportfailureeventargs).

## Import Events
- [importStart](https://help.syncfusion.com/cr/aspnetmvc-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_ImportStart) — Fires when an import begins.
- [importSuccess](https://help.syncfusion.com/cr/aspnetmvc-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_ImportSuccess) — Fires when form fields are successfully imported.
- [importFailed](https://help.syncfusion.com/cr/aspnetmvc-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_ImportFailed) — Fires if the import fails.

**Example: Handle Import Events**

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf").Render()
</div>

<script>
  document.addEventListener('DOMContentLoaded', function () {
    var viewer = document.getElementById('pdfviewer').ej2_instances[0];
    viewer.importStart = function (args) {
      console.log('Import started', args);
      // e.g. show spinner, validate inputs
    };
    viewer.importSuccess = function (args) {
      console.log('Import success', args);
      // e.g. hide spinner, show toast
    };
    viewer.importFailed = function (args) {
      console.error('Import failed', args);
      // e.g. show error dialog
    };
  });
</script>
{% endhighlight %}
{% endtabs %}

## Export Events
- [exportStart](https://help.syncfusion.com/cr/aspnetmvc-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_ExportStart) — Fires when an export begins.
- [exportSuccess](https://help.syncfusion.com/cr/aspnetmvc-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_ExportSuccess) — Fires when form fields are successfully exported.
- [exportFailed](https://help.syncfusion.com/cr/aspnetmvc-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_ExportFailed) — Fires if the export fails.

**Example: Handle Export Events**

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf").Render()
</div>

<script>
  document.addEventListener('DOMContentLoaded', function () {
    var viewer = document.getElementById('pdfviewer').ej2_instances[0];
    viewer.exportStart = function (args) {
      console.log('Export started', args);
      // e.g. disable export UI
    };
    viewer.exportSuccess = function (args) {
      console.log('Export success', args);
      // e.g. enable UI, provide download link
    };
    viewer.exportFailed = function (args) {
      console.error('Export failed', args);
      // e.g. re-enable UI, notify user
    };
  });
</script>
{% endhighlight %}
{% endtabs %}

## Key Notes
- importStart, importSuccess, importFailed cover the full import life cycle.
- exportStart, exportSuccess, exportFailed cover the full export life cycle.

## See also

- [Form Designer overview](../overview)
- [Form Designer Toolbar](../../toolbar-customization/form-designer-toolbar)
- [Create form fields](../overview-create-forms)
- [Group form fields](../group-form-fields)
- [Form validation](../form-validation)
- [Add custom data to form fields](../custom-data)
- [Import form fields](./import-form-fields)
- [Export form fields](./export-form-fields)
- [Form validation](../form-validation)
- [Form fields API](../form-fields-api)
- [Form fields API](../form-fields-api)