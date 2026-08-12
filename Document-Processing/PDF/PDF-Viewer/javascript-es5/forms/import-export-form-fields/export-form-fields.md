---
layout: post
title: Export form data in the JavaScript PDF Viewer component | Syncfusion
description: Learn how to export PDF form field data (FDF, XFDF, JSON, and as an object) using the Syncfusion JavaScript PDF Viewer component.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Export PDF Form Data from JavaScript PDF Viewer

The PDF Viewer allows you to export form field data in multiple formats for easy storage or integration. Supported formats:

- [FDF](#export-as-fdf)
- [XFDF](#export-as-xfdf)
- [JSON](#export-as-json)
- [JavaScript Object](#export-as-object) (for custom persistence)

## Available methods

- [`exportFormFields(destination?, format)`](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/index-default#exportformfields) — Exports form field data to a file in the specified format; when `destination` is omitted the browser prompts for download.
- [`exportFormFieldsAsObject(format)`](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/index-default#exportformfieldsasobject) — Returns a Promise that resolves to a JavaScript object containing the exported form data for custom handling.
- [`importFormFields(sourceOrObject, format)`](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/index-default#importformfields) — Imports form data back into the PDF Viewer.

## How to export

Use [`exportFormFields()`](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/index-default#exportformfields) with an optional `destination` path and the format type. If `destination` is omitted the browser prompts the user to download the exported file; when providing a server path, ensure the server is configured to accept and store uploaded files.

### Export as FDF, XFDF, and JSON

The following example demonstrates exporting form field data in different formats and importing data back:

```html
<!-- Action Buttons for Import and Export -->
<div style="margin-bottom: 12px; display: flex; gap: 8px;">
  <button id="importFdf">Import FDF</button>
  <button id="importXfdf">Import XFDF</button>
  <button id="importJson">Import JSON</button>
  <button id="exportFdf">Export FDF</button>
  <button id="exportXfdf">Export XFDF</button>
  <button id="exportJson">Export JSON</button>
</div>

<!-- PDF Viewer Container -->
<div id="PdfViewer" style="height: 640px; width: 100%"></div>
```

```js
// Inject required modules
ej.pdfviewer.PdfViewer.Inject(
    ej.pdfviewer.Toolbar,
    ej.pdfviewer.Magnification,
    ej.pdfviewer.Navigation,
    ej.pdfviewer.Annotation,
    ej.pdfviewer.LinkAnnotation,
    ej.pdfviewer.ThumbnailView,
    ej.pdfviewer.BookmarkView,
    ej.pdfviewer.TextSelection,
    ej.pdfviewer.TextSearch,
    ej.pdfviewer.FormFields,
    ej.pdfviewer.FormDesigner,
    ej.pdfviewer.PageOrganizer
);

// Initialize the viewer
var viewer = new ej.pdfviewer.PdfViewer();
viewer.documentPath = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
viewer.resourceUrl  = 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib';
viewer.appendTo('#PdfViewer');

// Helper: open a native file picker, read the chosen file as text,
// then call viewer.importFormFields(stringData, format).
function importFile(format) {
    var input = document.createElement('input');
    input.type   = 'file';
    input.accept = '.' + format.toLowerCase(); // .fdf | .xfdf | .json
    input.onchange = function (e) {
        var file = e.target.files && e.target.files[0];
        if (!file) return;

        var reader = new FileReader();
        reader.onload = function (ev) {
            // ev.target.result is a STRING — what importFormFields actually wants
            viewer.importFormFields(ev.target.result, format);
        };
        reader.readAsText(file);
    };
    input.click();
}

// --- Import Form Fields ---
document.getElementById('importFdf').addEventListener('click', function () {
    importFile('Fdf');
});

document.getElementById('importXfdf').addEventListener('click', function () {
    importFile('Xfdf');
});

document.getElementById('importJson').addEventListener('click', function () {
    importFile('Json');
});

// --- Export Form Fields ---
document.getElementById('exportFdf').addEventListener('click', function () {
    viewer.exportFormFields('FormData', 'Fdf');   // downloads FormData.fdf
});

document.getElementById('exportXfdf').addEventListener('click', function () {
    viewer.exportFormFields('FormData', 'Xfdf');  // downloads FormData.xfdf
});

document.getElementById('exportJson').addEventListener('click', function () {
    viewer.exportFormFields('FormData', 'Json');  // downloads FormData.json
});
```

### Export as Object

Use [exportFormFieldsAsObject()](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/index-default#exportformfieldsasobject) to obtain form data as a JavaScript object for database or API integration.

```html
<button id="exportObj">Export Object</button>
<button id="importObj">Import Object</button>

```

```js
// ...same imports and viewer initialization as above...

var exportedData;
document.getElementById('exportObj').addEventListener('click', function () {
  viewer.exportFormFieldsAsObject('Fdf').then(function (data) {
    exportedData = data; // Persist or send to server
    console.log('Exported object:', exportedData);
  });

  // Alternatives:
  // viewer.exportFormFieldsAsObject('Xfdf').then(...)
  // viewer.exportFormFieldsAsObject('Json').then(...)
});

// Import from previously exported object
document.getElementById('importObj').addEventListener('click', function () {
 viewer.importFormFields(exportedData, ej.pdfviewer.FormFieldDataFormat.Fdf);
});
```

## Common Use Cases

- Save user-entered data to your server without altering the original PDF.
- Export as JSON for REST API integration.
- Export as FDF/XFDF for compatibility with other PDF tools.
- Export as Object to merge with app state or store securely.
- Automate exports after [validation](../form-validation) using [validateFormFields()](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/index-default#validateformfields)

[View Sample on GitHub](https://github.com/SyncfusionExamples/javascript-pdf-viewer-examples)

## See also

- [Form Designer overview](../overview)
- [Form Designer Toolbar](../../toolbar-customization/form-designer-toolbar)
- [Import form fields](./import-form-fields)
- [Import Export Events](./import-export-events)
- [Create form fields](../overview-create-forms)
- [Group form fields](../group-form-fields)
- [Form validation](../form-validation)
- [Add custom data to form fields](../custom-data)
- [Form fields API](../form-fields-api)