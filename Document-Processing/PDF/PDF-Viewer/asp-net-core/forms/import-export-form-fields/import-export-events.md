---
layout: post
title: Import/Export events in the ASP.NET Core PDF Viewer | Syncfusion
description: Learn how to handle Import/Export events for PDF form fields in the Syncfusion ASP.NET Core PDF Viewer component.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# PDF Form Import and Export Events in ASP.NET Core

Import/Export events let you **track and customize the entire life cycle** of form data being imported into or exported from the PDF Viewer.
Use these events to:
- Validate inputs before processing.
- Show progress indicators.
- Log audit trails.
- Block operations based on business rules.

Each event provides detailed context through typed event arguments such as [ImportStartEventArgs](https://ej2.syncfusion.com/documentation/api/pdfviewer/importstarteventargs), [ImportSuccessEventArgs](https://ej2.syncfusion.com/documentation/api/pdfviewer/importsuccesseventargs), [ImportFailureEventArgs](https://ej2.syncfusion.com/documentation/api/pdfviewer/importfailureeventargs), [ExportStartEventArgs](https://ej2.syncfusion.com/documentation/api/pdfviewer/exportstarteventargs), [ExportSuccessEventArgs](https://ej2.syncfusion.com/documentation/api/pdfviewer/exportsuccesseventargs), and [ExportFailureEventArgs](https://ej2.syncfusion.com/documentation/api/pdfviewer/exportfailureeventargs).

## Import Events
- [importStart](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_ImportStart) — Fires when an import begins.
- [importSuccess](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_ImportSuccess) — Fires when form fields are successfully imported.
- [importFailed](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_ImportFailed) — Fires if the import fails.

**Example: Handle Import Events**

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<div class="text-center">
    <ejs-pdfviewer id="pdfviewer" style="height:600px" resourceUrl="https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib" documentPath="https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf">
    </ejs-pdfviewer>
</div>

<script type="text/javascript">
document.addEventListener('DOMContentLoaded', function () {
  var pdfviewer = document.getElementById('pdfviewer').ej2_instances[0];
  if (!pdfviewer) { console.warn('PDF Viewer not ready'); return; }
  pdfviewer.importStart = function (args) {
    console.log('Import started', args);
    // e.g. show spinner, validate inputs
  };
  pdfviewer.importSuccess = function (args) {
    console.log('Import success', args);
    // e.g. hide spinner, show toast
  };
  pdfviewer.importFailed = function (args) {
    console.error('Import failed', args);
    // e.g. show error dialog
  };
});
</script>
{% endhighlight %}
{% endtabs %}

## Export Events
- [exportStart](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_ExportStart) — Fires when an export begins.
- [exportSuccess](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_ExportSuccess) — Fires when form fields are successfully exported.
- [exportFailed](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_ExportFailed) — Fires if the export fails.

**Example: Handle Export Events**

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<div class="text-center">
    <ejs-pdfviewer id="pdfviewer" style="height:600px" resourceUrl="https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib" documentPath="https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf">
    </ejs-pdfviewer>
</div>

<script type="text/javascript">
document.addEventListener('DOMContentLoaded', function () {
  var pdfviewer = document.getElementById('pdfviewer').ej2_instances[0];
  if (!pdfviewer) { console.warn('PDF Viewer not ready'); return; }
  pdfviewer.exportStart = function (args) {
    console.log('Export started', args);
    // e.g. disable export UI
  };
  pdfviewer.exportSuccess = function (args) {
    console.log('Export success', args);
    // e.g. enable UI, provide download link
  };
  pdfviewer.exportFailed = function (args) {
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