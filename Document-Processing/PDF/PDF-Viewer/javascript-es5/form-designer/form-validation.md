---
layout: post
title: Form validation in the JavaScript PDF Viewer component | Syncfusion
description: Learn how to enable built-in form field validation and validate missing required fields in the Syncfusion JavaScript PDF Viewer.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Validate form fields in JavaScript PDF Viewer

The PDF Viewer Component can validate form fields during print, download or submit form. Use the [enableFormFieldsValidation](https://ej2.syncfusion.com/documentation/api/pdfviewer/index-default#enableformfieldsvalidation) property to turn on validation and handle the [validateFormFields](https://ej2.syncfusion.com/documentation/api/pdfviewer/validateformfieldsargs) event to review which required fields are not filled.

When validation is enabled and the user attempts to print, download or submit form, the event fires with a list of non-filled fields in args.nonFillableFields. You can cancel the operation, show a message, or focus the first invalid field.

## Enable validation

Set `enableFormFieldsValidation` to true and wire the validateFormFields event.

```js
// Inject required modules
ej.pdfviewer.PdfViewer.Inject(
  ej.pdfviewer.Toolbar,
  ej.pdfviewer.Magnification,
  ej.pdfviewer.Navigation,
  ej.pdfviewer.LinkAnnotation,
  ej.pdfviewer.ThumbnailView,
  ej.pdfviewer.BookmarkView,
  ej.pdfviewer.TextSelection,
  ej.pdfviewer.Annotation,
  ej.pdfviewer.FormDesigner,
  ej.pdfviewer.FormFields
);

// Create the viewer instance
var pdfviewer = new ej.pdfviewer.PdfViewer({
  documentPath: 'https://cdn.syncfusion.com/content/pdf/form-designer.pdf',
  resourceUrl: 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib'
});

pdfviewer.appendTo('#PdfViewer');

// Enable built-in form fields validation
pdfviewer.enableFormFieldsValidation = true;

// Handle validation event
pdfviewer.validateFormFields = function(args) {
  alert('Please fill all required fields. Missing: ' + args.formField[0].name);
  console.log(args.nonFillableFields);
};
```

## Mark a field as required and validate

The snippet below creates a required Textbox and demonstrates validation blocking print until the field is filled.

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
  ej.pdfviewer.FormDesigner,
  ej.pdfviewer.FormFields
);

// Create the viewer instance
var pdfviewer = new ej.pdfviewer.PdfViewer({
  documentPath: 'https://cdn.syncfusion.com/content/pdf/form-designer.pdf',
  resourceUrl: 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib'
});

pdfviewer.appendTo('#PdfViewer');

pdfviewer.documentLoad = function() {
  // Add a required Textbox
  pdfviewer.formDesignerModule.addFormField('Textbox', {
    name: 'Email',
    bounds: { X: 146, Y: 260, Width: 220, Height: 24 },
    isRequired: true,
    tooltip: 'Email is required'
  });
};

// Enable built-in form fields validation
pdfviewer.enableFormFieldsValidation = true;

// Handle validation event
pdfviewer.validateFormFields = function(args) {
  alert('Please fill all required fields. Missing: ' + args.formField[0].name);
  console.log(args.nonFillableFields);
};
```

## Tips

- Use isRequired on individual fields to include them in the validation check.
- The event only fires when a print or download action is invoked.
- To perform custom checks (e.g., regex for email), iterate over pdfviewer.retrieveFormFields() and apply your own logic before triggering print or download.

[View Sample on GitHub](https://github.com/SyncfusionExamples/javascript-pdf-viewer-examples)

## See also

- [Form Designer overview](./overview)
- [Form Designer Toolbar](../toolbar-customization/form-designer-toolbar)
- [Create form fields](./Create-edit-Style-del-formFields/create-formfields)
- [Edit form fields](./Create-edit-Style-del-formFields/edit-formfields)
- [Group form fields](./group-formfields)
- [Add custom data to form fields](./custom-data)
- [Form Constrain](./form-constrain)
- [Form fields API](./formfields-api)