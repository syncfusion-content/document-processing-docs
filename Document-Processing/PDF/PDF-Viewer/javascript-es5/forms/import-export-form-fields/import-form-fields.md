---
layout: post
title: Import form data in the JavaScript PDF Viewer component | Syncfusion
description: Learn how to import PDF form field data (FDF, XFDF, JSON, and from an object) using the Syncfusion JavaScript PDF Viewer component.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Import PDF Form Data into JavaScript PDF Viewer

The **PDF Viewer** lets you import values into interactive form fields in the currently loaded PDF. You can import data from these formats:

- [FDF](#import-as-fdf)
- [XFDF](#import-xfdf)
- [JSON](#import-json)

## API to use
- [`importFormFields(sourceOrObject, format)`](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/index-default#importformfields) — Imports form data into the currently loaded PDF. The `sourceOrObject` parameter accepts a file path or URL, a file stream, or a JavaScript object; the `format` parameter accepts `FDF`, `XFDF`, or `JSON`.

N> For server-backed viewers, set `serviceUrl` before importing. The method triggers import events (`importStart`, `importSuccess`, `importFailed`); see the import/export events page for recommended handling.

### Import FDF

```html
<button id="importFdf">Import FDF</button>
<div id="pdfViewer" style="height: 640px; width: 100%"></div>
```

```js
document.getElementById('importFdf').addEventListener('click', function () {
  // The file for importing should be accessible at the given path or as a file stream depending on your integration
  viewer.importFormFields('File', 'Fdf');
});
```

### Import XFDF

```html
<button id="importXfdf">Import XFDF</button>
<div id="pdfViewer" style="height: 640px; width: 100%"></div>
```
```js
document.getElementById('importXfdf').addEventListener('click', function () {
  // The file for importing should be accessible at the given path or as a file stream depending on your integration
  viewer.importFormFields('File', 'Xfdf');
});
```

### Import JSON

```html
<button id="importJson">Import JSON</button>
```
```js
document.getElementById('importJson').addEventListener('click', function () {
  // The file for importing should be accessible at the given path or as a file stream depending on your integration
  viewer.importFormFields('File', 'Json');
});
```

## Common Use Cases

- Pre-fill application forms from a database using JSON.
- Migrate data from other PDF tools using FDF/XFDF.
- Restore user progress saved locally or on the server.
- Combine with validation to block print/download until required fields are completed.

[View Sample on GitHub](https://github.com/SyncfusionExamples/javascript-pdf-viewer-examples)

## See also

- [Form Designer overview](../overview)
- [Form Designer Toolbar](../../toolbar-customization/form-designer-toolbar)
- [Export form fields](./export-form-fields)
- [Import Export Events](./import-export-events)
- [Create form fields](../overview-create-forms)
- [Group form fields](../group-form-fields)
- [Form validation](../form-validation)
- [Add custom data to form fields](../custom-data)
- [Form fields API](../form-fields-api)