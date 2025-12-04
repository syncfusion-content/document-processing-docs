---
layout: post
title: Import/Export events in the TypeScript PDF Viewer component | Syncfusion
description: Learn how to handle Import/Export events for PDF form fields in the Syncfusion TypeScript PDF Viewer component.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Import/Export events

Import/Export events let you track and customize the full lifecycle of form field data flowing into and out of the PDF Viewer. 

Use them to validate inputs, show progress UI, log audit trails, or block operations based on your business rules. Each event exposes typed event-args (ImportStartEventArgs, ImportSuccessEventArgs, ImportFailureEventArgs, ExportStartEventArgs, ExportSuccessEventArgs, ExportFailureEventArgs) describing the operation context.

Use these events to monitor and customize form field import/export operations.

## Import events
- [importStart](https://ej2.syncfusion.com/documentation/api/pdfviewer/index-default#importstart): Triggers when an import operation starts.
- [importSuccess](https://ej2.syncfusion.com/documentation/api/pdfviewer/index-default#importsuccess): Triggers when form fields are successfully imported.
- [importFailed](https://ej2.syncfusion.com/documentation/api/pdfviewer/index-default#importfailed): Triggers when importing form fields fails.

## Handle import events
```ts
viewer.importStart = (args: any) => {
  console.log('Import started', args);
};
viewer.importSuccess = (args: any) => {
  console.log('Import success', args);
};
viewer.importFailed = (args: any) => {
  console.error('Import failed', args);
};
```

## Export events
- [exportStart](https://ej2.syncfusion.com/documentation/api/pdfviewer/index-default#exportstart): Triggers when an export operation starts.
- [exportSuccess](https://ej2.syncfusion.com/documentation/api/pdfviewer/index-default#exportsuccess): Triggers when form fields are successfully exported.
- [exportFailed](https://ej2.syncfusion.com/documentation/api/pdfviewer/index-default#exportfailed): Triggers when exporting form fields fails.

## Handle export events
```ts
viewer.exportStart = (args: any) => {
  console.log('Export started', args);
};
viewer.exportSuccess = (args: any) => {
  console.log('Export success', args);
};
viewer.exportFailed = (args: any) => {
  console.error('Export failed', args);
};
```

Notes:
- importStart/importSuccess/importFailed cover the lifecycle of form field imports.
- exportStart/exportSuccess/exportFailed cover the lifecycle of form field exports.
