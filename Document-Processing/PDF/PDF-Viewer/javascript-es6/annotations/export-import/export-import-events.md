---
layout: post
<<<<<<<< HEAD:Document-Processing/PDF/PDF-Viewer/javascript-es5/form-designer/import-export-formfields/import-export-events.md
title: Import/Export events in the JavaScript PDF Viewer | Syncfusion
description: Learn how to handle Import/Export events for PDF form fields in the Syncfusion JavaScript PDF Viewer component.
========
title: Import/Export events for annotations in TypeScript PDF Viewer | Syncfusion
description: Learn how to handle Import/Export events for annotations in the Syncfusion TypeScript PDF Viewer component.
>>>>>>>> remotes/origin/hotfix/hotfix-v32.1.19:Document-Processing/PDF/PDF-Viewer/javascript-es6/annotations/export-import/export-import-events.md
platform: document-processing
control: PDF Viewer
documentation: ug
---

<<<<<<<< HEAD:Document-Processing/PDF/PDF-Viewer/javascript-es5/form-designer/import-export-formfields/import-export-events.md
# Import/Export events in Javascript
========
# Import/Export events for annotations
>>>>>>>> remotes/origin/hotfix/hotfix-v32.1.19:Document-Processing/PDF/PDF-Viewer/javascript-es6/annotations/export-import/export-import-events.md

Import/Export events let you track and customize the full lifecycle of annotation data flowing into and out of the PDF Viewer.

Use them to validate inputs, show progress UI, log audit trails, or block operations based on your business rules. Each event exposes typed event-args (ImportStartEventArgs, ImportSuccessEventArgs, ImportFailureEventArgs, ExportStartEventArgs, ExportSuccessEventArgs, ExportFailureEventArgs) describing the operation context.

## Import events
- [importStart](https://ej2.syncfusion.com/documentation/api/pdfviewer/index-default#importstart): Triggers when an import operation starts.
- [importSuccess](https://ej2.syncfusion.com/documentation/api/pdfviewer/index-default#importsuccess): Triggers when annotations are successfully imported.
- [importFailed](https://ej2.syncfusion.com/documentation/api/pdfviewer/index-default#importfailed): Triggers when importing annotations fails.

## Handle import events
```js
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
- [exportSuccess](https://ej2.syncfusion.com/documentation/api/pdfviewer/index-default#exportsuccess): Triggers when annotations are successfully exported.
- [exportFailed](https://ej2.syncfusion.com/documentation/api/pdfviewer/index-default#exportfailed): Triggers when exporting annotations fails.

## Handle export events
```js
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
- importStart/importSuccess/importFailed cover the lifecycle of annotation imports.
- exportStart/exportSuccess/exportFailed cover the lifecycle of annotation exports.

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