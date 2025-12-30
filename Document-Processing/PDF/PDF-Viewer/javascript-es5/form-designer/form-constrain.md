---
layout: post
title: Form constraints in the JavaScript PDF Viewer component | Syncfusion
description: Learn how to configure form field constraints such as isReadOnly, isRequired, and isPrint in the Syncfusion JavaScript PDF Viewer.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Form constraints in JavaScript PDF Viewer

The PDF Viewer components provides support to control user interaction and output behavior of form fields using the following constraints:

- isReadOnly: Prevents users from editing a field.
- isRequired: Marks a field as mandatory and participates in validation.
- isPrint: Includes the field appearance when printing or exporting with print.

You can set these properties when you create fields, update them later programmatically, or configure default settings so fields created from the Form Designer toolbar inherit the values.

## isReadOnly

Use `isReadOnly` to make a field non-editable in the UI while keeping it modifiable via code.

- Creation
```js
pdfviewer.formDesignerModule.addFormField('Textbox', {
  name: 'EmployeeId',
  bounds: { X: 146, Y: 229, Width: 150, Height: 24 },
  isReadOnly: true,
  value: 'EMP-0001'
});
```

- Update existing field
```js
var field = pdfviewer.formFieldCollections.find(function(f) { return f.name === 'EmployeeId'; });
if (field) {
  pdfviewer.formDesignerModule.updateFormField(field, { isReadOnly: false });
}
```

- Default for new Textbox fields
```js
pdfviewer.textFieldSettings = { isReadOnly: true };
```

## isRequired

Use `isRequired` to mark fields as mandatory so they participate in validation during print/download. Turn on validation with enableFormFieldsValidation and handle validateFormFields to block actions if required fields are empty.

- Creation
```js
pdfviewer.formDesignerModule.addFormField('Textbox', {
  name: 'Email',
  bounds: { X: 146, Y: 260, Width: 220, Height: 24 },
  isRequired: true,
  tooltip: 'Email is required'
});
```

- Validation wiring
```js
pdfviewer.enableFormFieldsValidation = true;
pdfviewer.validateFormFields = function(args) {
    //validateFormFields event triggers when fields are empty.
  alert("Please fill all required fields. Missing: " + args.formField[0].name);
};
```

- Default for new Textbox fields
```js
pdfviewer.textFieldSettings = { isRequired: true };
```

## isPrint

Use `isPrint` to control whether a field’s appearance is included when printing the PDF from the viewer.

- Creation (do not print a signature field)
```js
pdfviewer.formDesignerModule.addFormField('SignatureField', {
  name: 'ApplicantSign',
  bounds: { X: 57, Y: 923, Width: 200, Height: 43 },
  isPrint: false
});
```

- Update existing field
```js
var sign = pdfviewer.formFieldCollections.find(function(f) { return f.name === 'ApplicantSign'; });
if (sign) {
  pdfviewer.formDesignerModule.updateFormField(sign, { isPrint: true });
}
```

- Default for new signature fields
```js
pdfviewer.signatureFieldSettings = { isPrint: false };
```

N> Printing can be invoked programmatically using pdfviewer.print.print(); fields with isPrint: false will not appear in the print output.

## Set constraints when creating a field

Use `addFormField` to create fields and pass the constraint properties in the settings object. The example below adds a Textbox and a Signature field with different constraint combinations.

```js
// CDN scripts should expose `ej.pdfviewer` namespace in ES5 usage.
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

var pdfviewer = new ej.pdfviewer.PdfViewer({
  documentPath: 'https://cdn.syncfusion.com/content/pdf/form-designer.pdf',
  resourceUrl: 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib'
});
pdfviewer.appendTo('#PdfViewer');

pdfviewer.documentLoad = function() {
  // Read-only Textbox that is printed but not required
  pdfviewer.formDesignerModule.addFormField('Textbox', {
    name: 'EmployeeId',
    bounds: { X: 146, Y: 229, Width: 150, Height: 24 },
    isReadOnly: true,
    isRequired: false,
    isPrint: true,
    value: 'EMP-0001'
  });

  // Required Signature field that is not included in print
  pdfviewer.formDesignerModule.addFormField('SignatureField', {
    name: 'ApplicantSign',
    bounds: { X: 57, Y: 923, Width: 200, Height: 43 },
    isReadOnly: false,
    isRequired: true,
    isPrint: false,
    tooltip: 'Sign to accept the terms'
  });
};
```

N> To configure the server-backed PDF Viewer, add the following serviceUrl in index.js:
`pdfviewer.serviceUrl = 'https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer/';`

## Update constraints programmatically

Use `updateFormField` to change constraint flags of an existing field. The snippet below toggles isReadOnly, sets a field as required, and controls whether the field should appear when printing.

```js
// ES5 style with ej.pdfviewer namespace
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

var pdfviewer = new ej.pdfviewer.PdfViewer({
  documentPath: 'https://cdn.syncfusion.com/content/pdf/form-designer.pdf',
  resourceUrl: 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib'
});
pdfviewer.appendTo('#PdfViewer');

pdfviewer.documentLoad = function() {
  // Add a sample textbox
  pdfviewer.formDesignerModule.addFormField('Textbox', {
    name: 'Email',
    bounds: { X: 146, Y: 260, Width: 220, Height: 24 }
  });

  // Retrieve it and update constraint flags
  var field = pdfviewer.formFieldCollections.find(function(f) { return f.name === 'Email'; });
  if (field) {
    pdfviewer.formDesignerModule.updateFormField(field, {
      isReadOnly: false,
      isRequired: true,
      isPrint: true,
      tooltip: 'Enter a valid email'
    });
  }
};
```

## Configure default constraints for newly added fields

Set default settings so all fields created from the Form Designer toolbar inherit the constraint flags.

The example below configures defaults for Textbox and Signature fields.

```js
// ES5 style with ej.pdfviewer namespace
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

var pdfviewer = new ej.pdfviewer.PdfViewer({ documentPath: 'https://cdn.syncfusion.com/content/pdf/form-designer.pdf' });
pdfviewer.appendTo('#PdfViewer');

// Textbox fields will be editable, required, and included in print by default
pdfviewer.textFieldSettings = {
  isReadOnly: false,
  isRequired: true,
  isPrint: true,
  tooltip: 'Required field'
};

// Signature fields will be optional and hidden when printing
pdfviewer.signatureFieldSettings = {
  isReadOnly: false,
  isRequired: false,
  isPrint: false,
  tooltip: 'Sign if applicable'
};
```

## Behavior notes

- isReadOnly only blocks user edits in the UI. You can still update the field programmatically.
- isRequired participates in the built-in validation flow. Enable validation to enforce before print/download. See Validate form fields for details.
- isPrint controls field appearance in the print output. It does not affect download/export unless printing is triggered.

[View Sample on GitHub](https://github.com/SyncfusionExamples/javascript-pdf-viewer-examples)

## See also

- [Form Designer overview](./overview)
- [Form Designer Toolbar](../toolbar-customization/form-designer-toolbar)
- [Create form fields](./Create-edit-Style-del-formFields/create-formfields)
- [Edit form fields](./Create-edit-Style-del-formFields/edit-formfields)
- [Group form fields](./group-formfields)
- [Add custom data to form fields](./custom-data)
- [Form validation](./form-validation)
- [Form fields API](./formfields-api)
