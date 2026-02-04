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

- [exportFormFields](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/index-default#exportformfields)(destination?, format) — Exports data to a file in the specified format.
- [exportFormFieldsAsObject](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/index-default#exportformfieldsasobject)(format) — Exports data as a JavaScript object for custom handling.
- [importFormFields](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/index-default#importformfields)(sourceOrObject, format) — Import data back into the PDF.

## How to export

Use [exportFormFields()](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/index-default#exportformfields) with an optional destination path and the format type.

### Export as FDF
The following example exports form field data as FDF.

```html
<button id="exportFdf">Export FDF</button>
<div id="pdfViewer" style="height: 640px; width: 100%"></div>
```

```js
document.getElementById('exportFdf').addEventListener('click', function () {
  // Destination is optional; if omitted the browser will prompt.
  viewer.exportFormFields('FormData','Fdf');
});
```

### Export as XFDF
The following example exports form field data as XFDF.

```html
<button id="exportXfdf">Export XFDF</button>
```

```js
// ...same imports and viewer initialization as above...
document.getElementById('exportXfdf').addEventListener('click', function () {
  viewer.exportFormFields('FormData', 'Xfdf');
});
```

### Export as JSON
The following example exports form field data as JSON.

```html
<button id="exportJson">Export JSON</button>
```

```js
// ...same imports and viewer initialization as above...
document.getElementById('exportJson').addEventListener('click', function () {
  viewer.exportFormFields('FormData', 'Json');
});
```

### Export as Object

Use [exportFormFieldsAsObject()](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/index-default#exportformfieldsasobject) to obtain form data as a JavaScript object for database or API integration.

```html
<button id="exportObj">Export Object</button>
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