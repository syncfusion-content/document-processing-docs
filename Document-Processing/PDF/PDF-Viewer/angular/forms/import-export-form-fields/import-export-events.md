---
layout: post
title: Import/Export events in the Angular PDF Viewer | Syncfusion
description: Learn how to handle Import/Export events for PDF form fields in the Syncfusion Angular PDF Viewer component.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# PDF Form Import and Export Events in Angular

Import and export events enable tracking and customization of the full life cycle of form data imported into or exported from the PDF Viewer.

Use events to:
- Validate inputs before processing.
- Show progress indicators.
- Log audit trails.
- Block operations based on business rules.

Each event provides detailed context through typed event arguments such as [ImportStartEventArgs](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/importstarteventargs), [ImportSuccessEventArgs](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/importsuccesseventargs), [ImportFailureEventArgs](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/importfailureeventargs), [ExportStartEventArgs](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/exportstarteventargs), [ExportSuccessEventArgs](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/exportsuccesseventargs), and [ExportFailureEventArgs](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/exportfailureeventargs).

## Import Events
- [importStart](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/index-default#importstart) — Fires when an import begins.
- [importSuccess](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/index-default#importsuccess) — Fires when form fields are successfully imported.
- [importFailed](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/index-default#importfailed) — Fires if the import fails.

**Example: Handle Import Events**

{% highlight ts %}
onImportStart(args: any): void {
  console.log('Import started', args);
  // e.g. show spinner, validate inputs
}

onImportSuccess(args: any): void {
  console.log('Import success', args);
  // e.g. hide spinner, show toast
}

onImportFailed(args: any): void {
  console.error('Import failed', args);
  // e.g. show error dialog
}
{% endhighlight %}

## Export Events
- [exportStart](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/index-default#exportstart) — Fires when an export begins.
- [exportSuccess](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/index-default#exportsuccess) — Fires when form fields are successfully exported.
- [exportFailed](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/index-default#exportfailed) — Fires if the export fails.

**Example: Handle Export Events**

{% highlight ts %}
onExportStart(args: any): void {
  console.log('Export started', args);
  // e.g. disable export UI
}

onExportSuccess(args: any): void {
  console.log('Export success', args);
  // e.g. enable UI, provide download link
}

onExportFailed(args: any): void {
  console.error('Export failed', args);
  // e.g. re-enable UI, notify user
}
{% endhighlight %}

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