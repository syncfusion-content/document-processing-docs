---
layout: post
title: Form Fields API in JavaScript PDF Viewer | Syncfusion
description:  Learn How to use Form Fields API to enable, update, retrieve and clear in the Syncfusion JavaScript PDF Viewer.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Form Fields API in JavaScript PDF Viewer

The PDF Viewer provides comprehensive APIs to create, edit, validate, navigate, and manage form fields programmatically. The following APIs are available:

| API | Description |
|---|---|
| [updateFormFieldsValue](https://ej2.syncfusion.com/documentation/api/pdfviewer/index-default#updateformfieldsvalue) | Updates the value for one or more form fields.|
| [updateFormFields](https://ej2.syncfusion.com/documentation/api/pdfviewer/index-default#updateformfields) | Updates the properties of one or more form fields.|
| [retrieveFormFields](https://ej2.syncfusion.com/documentation/api/pdfviewer/index-default#retrieveformfields) | Retrieves all form fields or by specific criteria.|
| [resetFormFields](https://ej2.syncfusion.com/documentation/api/pdfviewer/index-default#resetformfields) | Resets the specified or all form fields to their default values.|
| [importFormFields](https://ej2.syncfusion.com/documentation/api/pdfviewer/index-default#importformfields) | Imports values and states for form fields from a JSON object or file stream.|
| [focusFormField](https://ej2.syncfusion.com/documentation/api/pdfviewer/index-default#focusformfield) | Sets focus to a form field by name or ID.|
| [exportFormFieldsAsObject](https://ej2.syncfusion.com/documentation/api/pdfviewer/index-default#exportformfieldsasobject) | Exports form fields as a JSON object.|
| [exportFormFields](https://ej2.syncfusion.com/documentation/api/pdfviewer/index-default#exportformfields) | Exports form fields as a downloadable file.|
| [clearFormFields](https://ej2.syncfusion.com/documentation/api/pdfviewer/index-default#clearformfields) | Clears values of specified or all form fields without removing them.|
| [isFormFieldDocument](https://ej2.syncfusion.com/documentation/api/pdfviewer/index-default#isformfielddocument) | Indicates whether the loaded document contains form fields.|
| [isFormDesignerToolbarVisible](https://ej2.syncfusion.com/documentation/api/pdfviewer/index-default#isformdesignertoolbarvisible) | Gets whether the Form Designer toolbar is currently visible.|
| [formFieldCollections](https://ej2.syncfusion.com/documentation/api/pdfviewer/index-default#formfieldcollections) | Gets the collection of current form fields with their properties.|
| [enableFormFieldsValidation](https://ej2.syncfusion.com/documentation/api/pdfviewer/index-default#enableformfieldsvalidation) | Enables or disables form field validation.|
| [enableFormFields](https://ej2.syncfusion.com/documentation/api/pdfviewer/index-default#enableformfields) | Enables or disables interaction with form fields.|
| [enableFormDesignerToolbar](https://ej2.syncfusion.com/documentation/api/pdfviewer/index-default#enableformdesignertoolbar) | Shows or hides the Form Designer toolbar.|

## updateFormFieldsValue

Updates the value of one or more form fields programmatically.

```html
<button id="updateFormFieldsValue">updateFormFieldsValue</button>
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
  ej.pdfviewer.FormDesigner
);

var pdfviewer = new ej.pdfviewer.PdfViewer({
  documentPath: 'https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf',
  // Important for loading internal assets like pdf.worker
  resourceUrl: 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib'
});

pdfviewer.appendTo('#PdfViewer');

var btn = document.getElementById('updateFormFieldsValue');
if (btn) {
  btn.onclick = function () {
    var fields = pdfviewer.retrieveFormFields();
    if (!fields || !fields.length) return;

    // Find field named "First Name" (fallback to first field)
    var field = fields.find(function (f) { return f.name === 'First Name'; }) || fields[0];
    if (field) {
      field.value = 'John Doe';
      field.tooltip = 'First';
      pdfviewer.updateFormFieldsValue(field);
    }
  };
}
```

## updateFormFields

Updates form field properties such as bounds, color, font, isReadOnly, required, and more.

```html
<button id="updateFormFields">updateFormFields</button>
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
  ej.pdfviewer.FormDesigner
);

var pdfviewer = new ej.pdfviewer.PdfViewer({
  documentPath: 'https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf',
  resourceUrl: 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib'
});

pdfviewer.appendTo('#PdfViewer');

var btn = document.getElementById('updateFormFields');
if (btn) {
  btn.onclick = function () {
    // Retrieve form fields collection
    var fields = pdfviewer.retrieveFormFields();
    // Find the textbox field by name (Here field name is First Name)
    var field = fields.find(function (f) { return f.name === 'First Name'; }) || fields[0]; // Update name accordingly
    if (field) {
      // Update textbox field styling and value
      pdfviewer.formDesignerModule.updateFormField(field, {
        value: 'John',
        fontFamily: 'Courier',
        fontSize: 12,
        color: 'black',
        backgroundColor: 'white',
        borderColor: 'black',
        thickness: 2,
        alignment: 'Left',
        maxLength: 50
      });
    }
  };
}
```

## retrieveFormFields

Retrieves all form fields and their properties or filters by type/name.

```html
<button id="retrieveFormFields">retrieveFormFields</button>
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
  ej.pdfviewer.FormDesigner
);

var pdfviewer = new ej.pdfviewer.PdfViewer({
  documentPath: 'https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf',
  resourceUrl: 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib'
});

pdfviewer.appendTo('#PdfViewer');

var btn = document.getElementById('retrieveFormFields');
if (btn) {
  btn.onclick = function () {
    var fields = pdfviewer.retrieveFormFields();
    console.log(fields);
  };
}
```

## resetFormFields

Resets specified form fields or all fields to their default values.

```html
<button id="resetFormFields">resetFormFields</button>
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
  ej.pdfviewer.FormDesigner
);

var pdfviewer = new ej.pdfviewer.PdfViewer({
  documentPath: 'https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf',
  resourceUrl: 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib'
});

pdfviewer.appendTo('#PdfViewer');

var btn = document.getElementById('resetFormFields');
if (btn) {
  btn.onclick = function () {
    pdfviewer.resetFormFields();
  };
}
```

## importFormFields

Imports form field data from an object or file into the current document.

```html
<button id="importFormFields">importFormFields</button>
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
  ej.pdfviewer.FormDesigner
);

var pdfviewer = new ej.pdfviewer.PdfViewer({
  documentPath: 'https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf',
  resourceUrl: 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib'
});

pdfviewer.appendTo('#PdfViewer');

var btn = document.getElementById('importFormFields');
if (btn) {
  btn.onclick = function () {
    // The file for importing should be accessible at the given path or as a file stream depending on your integration
    pdfviewer.importFormFields('File', ej.pdfviewer.FormFieldDataFormat.Json);
  };
}
```

## focusFormField

Moves focus to a form field by name or ID.

```html
<button id="focusFormField">focusFormField</button>
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
  ej.pdfviewer.FormDesigner
);

var pdfviewer = new ej.pdfviewer.PdfViewer({
  documentPath: 'https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf',
  resourceUrl: 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib'
});

pdfviewer.appendTo('#PdfViewer');

var btn = document.getElementById('focusFormField');
if (btn) {
  btn.onclick = function () {
    pdfviewer.focusFormField('FirstName');
  };
}
```

## exportFormFieldsAsObject

Exports current form field values and states as a JSON object.

```html
<button id="exportFormFieldsAsObject">exportFormFieldsAsObject</button>
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
  ej.pdfviewer.FormDesigner
);

var pdfviewer = new ej.pdfviewer.PdfViewer({
  documentPath: 'https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf',
  resourceUrl: 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib'
});

pdfviewer.appendTo('#PdfViewer');

var btn = document.getElementById('exportFormFieldsAsObject');
if (btn) {
  var exportedData;
  btn.onclick = function () {
    pdfviewer.exportFormFieldsAsObject(ej.pdfviewer.FormFieldDataFormat.Fdf).then(function (data) {
      exportedData = data; // Save or send to server
      console.log('Exported object:', exportedData);
    });
  };
}
```

## exportFormFields

Exports form field data to a file for download.

```html
<button id="exportFormFields">exportFormFields</button>
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
  ej.pdfviewer.FormDesigner
);

var pdfviewer = new ej.pdfviewer.PdfViewer({
  documentPath: 'https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf',
  resourceUrl: 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib'
});

pdfviewer.appendTo('#PdfViewer');

var btn = document.getElementById('exportFormFields');
if (btn) {
  btn.onclick = function () {
    pdfviewer.exportFormFields('FormData', ej.pdfviewer.FormFieldDataFormat.Json);
  };
}
```

## clearFormFields

Clears values of specified or all fields without removing the fields themselves.

```html
<button id="clearformfield">clearformfield</button>
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
  ej.pdfviewer.FormDesigner
);

var pdfviewer = new ej.pdfviewer.PdfViewer({
  documentPath: 'https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf',
  resourceUrl: 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib'
});

pdfviewer.appendTo('#PdfViewer');

var btn = document.getElementById('clearformfield');
if (btn) {
  btn.onclick = function () {
    var fields = pdfviewer.retrieveFormFields();
    pdfviewer.clearFormFields(fields[0]);
  };
}
```

## isFormFieldDocument

Returns true if the loaded document contains one or more form fields.

```html
<button id="checkFormFieldDocument">checkFormFieldDocument</button>
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
  ej.pdfviewer.FormDesigner
);

var pdfviewer = new ej.pdfviewer.PdfViewer({
  documentPath: 'https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf',
  resourceUrl: 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib'
});

pdfviewer.appendTo('#PdfViewer');

var element = document.getElementById('checkFormFieldDocument');
if (element) {
  element.onclick = function () {
    console.log(pdfviewer.isFormFieldDocument);
  };
}
```

## isFormDesignerToolbarVisible

Opens the form designer toolbar when the PDF document is loaded in the PDF Viewer control initially
and get the form designer Toolbar Visible status.

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
  ej.pdfviewer.FormDesigner
);

var pdfviewer = new ej.pdfviewer.PdfViewer({
  documentPath: 'https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf',
  resourceUrl: 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib'
});

pdfviewer.appendTo('#PdfViewer');

// Open the Form Designer toolbar and read its visibility state
pdfviewer.enableFormDesignerToolbar(true);
console.log(pdfviewer.isFormDesignerToolbarVisible);
```

## formFieldCollections

Gets the current collection of form fields with their properties from the viewer instance.

```html
<button id="formfieldcollection">formfieldcollection</button>
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
  ej.pdfviewer.FormDesigner
);

var pdfviewer = new ej.pdfviewer.PdfViewer({
  documentPath: 'https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf',
  resourceUrl: 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib'
});

pdfviewer.appendTo('#PdfViewer');

var element = document.getElementById('formfieldcollection');
if (element) {
  element.onclick = function () {
    console.log(pdfviewer.formFieldCollections);
  };
}
```

## enableFormFieldsValidation

Enables or disables built-in validation for required and constrained fields.

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
  ej.pdfviewer.FormDesigner
);

var pdfviewer = new ej.pdfviewer.PdfViewer({
  documentPath: 'https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf',
  resourceUrl: 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib'
});

pdfviewer.enableFormFieldsValidation = true; // enable form fields validation
pdfviewer.appendTo('#PdfViewer');
```

## enableFormFields

Enables or disables user interaction with form fields globally.

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
  ej.pdfviewer.FormDesigner
);

var pdfviewer = new ej.pdfviewer.PdfViewer({
  documentPath: 'https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf',
  resourceUrl: 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib'
});

pdfviewer.enableFormFields = false; // Disable interaction with all fields
pdfviewer.appendTo('#PdfViewer');
```

## enableFormDesignerToolbar

Shows or hides the Form Designer toolbar at runtime.

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
  ej.pdfviewer.FormDesigner
);

var pdfviewer = new ej.pdfviewer.PdfViewer({
  documentPath: 'https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf',
  resourceUrl: 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib'
});

pdfviewer.appendTo('#PdfViewer');

// Show or hide the Form Designer toolbar at runtime
pdfviewer.enableFormDesignerToolbar(true); // show
// pdfviewer.enableFormDesignerToolbar(false); // hide
```

## See also

- [Form Designer overview](./overview)
- [Form Designer Toolbar](../toolbar-customization/form-designer-toolbar)
- [Create form fields](./Create-edit-Style-del-formFields/create-formfields)
- [Edit form fields](./Create-edit-Style-del-formFields/edit-formfields)
- [Group form fields](./group-formfields)
- [Add custom data to form fields](./custom-data)
- [Form Constrain](./form-constrain)
- [Form fields Validation](./form-validation)