---
layout: post
title: Import/Export events for annotations in JavaScript PDF Viewer | Syncfusion
description: Learn how to handle Import/Export events for annotations in the Syncfusion JavaScript PDF Viewer component.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Import/Export events for annotations

Import/export events let developers monitor and control annotation data as it flows into and out of the PDF Viewer. These events enable validation, progress reporting, audit logging, and conditional blocking of import/export operations.

Common use cases:
- Progress UI and user feedback
- Validation and sanitization of imported annotation data
- Audit logging and telemetry
- Blocking or altering operations based on business rules

Each event exposes typed event-args: `ImportStartEventArgs`, `ImportSuccessEventArgs`, `ImportFailureEventArgs`, `ExportStartEventArgs`, `ExportSuccessEventArgs`, and `ExportFailureEventArgs` that describe the operation context.

## Import events
- [`importStart`](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/index-default#importstart): Triggers when an import operation starts.
- [`importSuccess`](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/index-default#importsuccess): Triggers when annotations are successfully imported.
- [`importFailed`](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/index-default#importfailed): Triggers when importing annotations fails.

## Handle import events
Example: handle import events by assigning callback handlers.

```js
viewer.importStart = function(args) {
  console.log('Import started', args);
};
viewer.importSuccess = function(args) {
  console.log('Import success', args);
};
viewer.importFailed = function(args) {
  console.error('Import failed', args);
};
```

## Export events
- [`exportStart`](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/index-default#exportstart): Triggers when an export operation starts.
- [`exportSuccess`](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/index-default#exportsuccess): Triggers when annotations are successfully exported.
- [`exportFailed`](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/index-default#exportfailed): Triggers when exporting annotations fails.

## Handle export events
Example: handle export events by assigning callback handlers.

```js
viewer.exportStart = function(args) {
  console.log('Export started', args);
};
viewer.exportSuccess = function(args) {
  console.log('Export success', args);
};
viewer.exportFailed = function(args) {
  console.error('Export failed', args);
};
```

N> `importStart`, `importSuccess`, and `importFailed` cover the lifecycle of annotation imports; `exportStart`, `exportSuccess`, and `exportFailed` cover the lifecycle of annotation exports.

## See also

- [Annotation Overview](../../overview)
- [Annotation Types](../../annotations/annotation-types/area-annotation)
- [Annotation Toolbar](../../toolbar-customization/annotation-toolbar)
- [Create and Modify Annotation](../../annotations/create-modify-annotation)
- [Customize Annotation](../../annotations/customize-annotation)
- [Remove Annotation](../../annotations/delete-annotation)
- [Handwritten Signature](../../annotations/signature-annotation)
- [Export Annotation](../export-import/export-annotation)
- [Import Annotation](../export-import/import-annotation)
- [Annotation Permission](../../annotations/annotation-permission)
- [Annotation in Mobile View](../../annotations/annotations-in-mobile-view)
- [Annotation Events](../../annotations/annotation-event)
- [Annotation API](../../annotations/annotations-api)