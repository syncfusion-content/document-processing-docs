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

### Import FDF, XFDF, and JSON

The following example demonstrates importing form field data in different formats:

```html
<!-- Action Buttons for Import -->
<div style="margin-bottom: 12px; display: flex; gap: 8px;">
  <button id="importFdf">Import FDF</button>
  <button id="importXfdf">Import XFDF</button>
  <button id="importJson">Import JSON</button>
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