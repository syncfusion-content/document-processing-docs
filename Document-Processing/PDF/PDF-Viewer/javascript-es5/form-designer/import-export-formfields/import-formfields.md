---
layout: post
title: Import form data in the JavaScript PDF Viewer component | Syncfusion
description: Learn how to import PDF form field data (FDF, XFDF, JSON, and from an object) using the Syncfusion JavaScript PDF Viewer component.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Import form data into PDF

The PDF Viewer provides APIs to import interactive form field values into the currently loaded PDF. You can import from the following formats:

- FDF
- XFDF
- JSON

Supported API:
- importFormFields(sourceOrObject, format)

Note: When using the server-backed viewer, set serviceUrl before importing.

## Import as FDF

```html
<button id="importFdf">Import FDF</button>
<div id="pdfViewer" style="height: 640px; width: 100%"></div>
```
```js
// Include the required EJ2 PDF Viewer scripts/styles on the page.
// Then use the global ej.pdfviewer namespace in ES5.
ej.pdfviewer.PdfViewer.Inject(
  ej.pdfviewer.Toolbar,
  ej.pdfviewer.Magnification,
  ej.pdfviewer.Navigation,
  ej.pdfviewer.Annotation,
  ej.pdfviewer.LinkAnnotation,
  ej.pdfviewer.ThumbnailView,
  ej.pdfviewer.BookmarkView,
  ej.pdfviewer.TextSelection,
  ej.pdfviewer.FormFields,
  ej.pdfviewer.FormDesigner
);

var viewer = new ej.pdfviewer.PdfViewer({
  documentPath: 'https://cdn.syncfusion.com/content/pdf/form-designer.pdf',
  // serviceUrl: 'https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer/' // Server-backed
  resourceUrl: 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib'
});
viewer.appendTo('#pdfViewer');

document.getElementById('importFdf').addEventListener('click', function () {
  // The file for importing should be accessible at the given path or as a file stream depending on your integration
  viewer.importFormFields('File', ej.pdfviewer.FormFieldDataFormat.Fdf);
});
```

## Import as XFDF

```html
<button id="importXfdf">Import XFDF</button>
<div id="pdfViewer" style="height: 640px; width: 100%"></div>
```
```js
// Include the required EJ2 PDF Viewer scripts/styles on the page.
// Then use the global ej.pdfviewer namespace in ES5.
ej.pdfviewer.PdfViewer.Inject(
  ej.pdfviewer.Toolbar,
  ej.pdfviewer.Magnification,
  ej.pdfviewer.Navigation,
  ej.pdfviewer.Annotation,
  ej.pdfviewer.LinkAnnotation,
  ej.pdfviewer.ThumbnailView,
  ej.pdfviewer.BookmarkView,
  ej.pdfviewer.TextSelection,
  ej.pdfviewer.FormFields,
  ej.pdfviewer.FormDesigner
);

var viewer = new ej.pdfviewer.PdfViewer({
  documentPath: 'https://cdn.syncfusion.com/content/pdf/form-designer.pdf',
  // serviceUrl: 'https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer/' // Server-backed
  resourceUrl: 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib'
});
viewer.appendTo('#pdfViewer');

document.getElementById('importXfdf').addEventListener('click', function () {
  // The file for importing should be accessible at the given path or as a file stream depending on your integration
  viewer.importFormFields('File', ej.pdfviewer.FormFieldDataFormat.Xfdf);
});
```

## Import as JSON

```html
<button id="importJson">Import JSON</button>
<div id="pdfViewer" style="height: 640px; width: 100%"></div>
```
```js
// Include the required EJ2 PDF Viewer scripts/styles on the page.
// Then use the global ej.pdfviewer namespace in ES5.
ej.pdfviewer.PdfViewer.Inject(
  ej.pdfviewer.Toolbar,
  ej.pdfviewer.Magnification,
  ej.pdfviewer.Navigation,
  ej.pdfviewer.Annotation,
  ej.pdfviewer.LinkAnnotation,
  ej.pdfviewer.ThumbnailView,
  ej.pdfviewer.BookmarkView,
  ej.pdfviewer.TextSelection,
  ej.pdfviewer.FormFields,
  ej.pdfviewer.FormDesigner
);

var viewer = new ej.pdfviewer.PdfViewer({
  documentPath: 'https://cdn.syncfusion.com/content/pdf/form-designer.pdf',
  // serviceUrl: 'https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer/' // Server-backed
  resourceUrl: 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib'
});
viewer.appendTo('#pdfViewer');

document.getElementById('importJson').addEventListener('click', function () {
  // The file for importing should be accessible at the given path or as a file stream depending on your integration
  viewer.importFormFields('File', ej.pdfviewer.FormFieldDataFormat.Json);
});
```

## Import as Object

Import data previously exported with exportFormFieldsAsObject. Useful for client-side roundtrips without writing a file.

```html
<button id="exportDataAsObject">Export Object</button>
<button id="importData">Import Data</button>
<div id="pdfViewer" style="height: 640px; width: 100%"></div>
```
```js
// Include the required EJ2 PDF Viewer scripts/styles on the page.
// Then use the global ej.pdfviewer namespace in ES5.
ej.pdfviewer.PdfViewer.Inject(
  ej.pdfviewer.Toolbar,
  ej.pdfviewer.Magnification,
  ej.pdfviewer.Navigation,
  ej.pdfviewer.Annotation,
  ej.pdfviewer.LinkAnnotation,
  ej.pdfviewer.ThumbnailView,
  ej.pdfviewer.BookmarkView,
  ej.pdfviewer.TextSelection,
  ej.pdfviewer.FormFields,
  ej.pdfviewer.FormDesigner
);

var viewer = new ej.pdfviewer.PdfViewer({
  documentPath: 'https://cdn.syncfusion.com/content/pdf/form-designer.pdf',
  // serviceUrl: 'https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer/' // Server-backed
  resourceUrl: 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib'
});
viewer.appendTo('#pdfViewer');

var exportedData;

document.getElementById('exportDataAsObject').addEventListener('click', function () {
  viewer.exportFormFieldsAsObject(ej.pdfviewer.FormFieldDataFormat.Fdf).then(function (value) {
    exportedData = value;
  });
});

document.getElementById('importData').addEventListener('click', function () {
  if (exportedData) {
    // Import the previously exported object data
    viewer.importFormFields(exportedData, ej.pdfviewer.FormFieldDataFormat.Fdf);
  }
  // Alternatives:
  // viewer.importFormFields(exportedData, ej.pdfviewer.FormFieldDataFormat.Xfdf);
  // viewer.importFormFields(exportedData, ej.pdfviewer.FormFieldDataFormat.Json);
});
```

## Common use cases

- Pre-fill application forms from your database using JSON.
- Migrate data from other PDF tools using FDF/XFDF.
- Restore user progress stored locally or on the server using object import.
- Combine with validation to block print/download until required fields are filled.

[View Sample on GitHub](https://github.com/SyncfusionExamples/javascript-pdf-viewer-examples)

## See also

- [Form Designer overview](../overview)
- [Form Designer Toolbar](../../toolbar-customization/form-designer-toolbar)
- [Export form fields](./export-formfields)
- [Import Export Events](./import-export-events)
- [Create form fields](../Create-edit-Style-del-formFields/create-formfields)
- [Edit form fields](../Create-edit-Style-del-formFields//edit-formfields)
- [Remove form fields](../Create-edit-Style-del-formFields//remove-formfields)
- [Group form fields](../group-formfields)
- [Form validation](../form-validation)
- [Add custom data to form fields](../custom-data)
- [Form fields API](../formfields-api)