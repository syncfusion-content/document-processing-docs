---
layout: post
title: Form constraints in the TypeScript PDF Viewer component | Syncfusion
description: Learn how to configure form field constraints such as isReadOnly, isRequired, and isPrint in the Syncfusion TypeScript PDF Viewer.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Form constraints in TypeScript PDF Viewer

The PDF Viewer components provides support to control user interaction and output behavior of form fields using the following constraints:

- isReadOnly: Prevents users from editing a field.
- isRequired: Marks a field as mandatory and participates in validation.
- isPrint: Includes the field appearance when printing or exporting with print.

You can set these properties when you create fields, update them later programmatically, or configure default settings so fields created from the Form Designer toolbar inherit the values.

## isReadOnly

Use `isReadOnly` to make a field non-editable in the UI while keeping it modifiable via code.

- Creation
```ts
pdfviewer.formDesignerModule.addFormField('Textbox', {
  name: 'EmployeeId',
  bounds: { X: 146, Y: 229, Width: 150, Height: 24 },
  isReadOnly: true,
  value: 'EMP-0001'
} as TextFieldSettings);
```

- Update existing field
```ts
const field = pdfviewer.formFieldCollections.find(f => f.name === 'EmployeeId');
if (field) {
  pdfviewer.formDesignerModule.updateFormField(field, { isReadOnly: false } as TextFieldSettings);
}
```

- Default for new Textbox fields
```ts
pdfviewer.textFieldSettings = { isReadOnly: true };
```

## isRequired

Use `isRequired` to mark fields as mandatory so they participate in validation during print/download. Turn on validation with enableFormFieldsValidation and handle validateFormFields to block actions if required fields are empty.

- Creation
```ts
pdfviewer.formDesignerModule.addFormField('Textbox', {
  name: 'Email',
  bounds: { X: 146, Y: 260, Width: 220, Height: 24 },
  isRequired: true,
  tooltip: 'Email is required'
} as TextFieldSettings);
```

- Validation wiring
```ts
pdfviewer.enableFormFieldsValidation = true;
pdfviewer.validateFormFields = (args: any) => {
    //validateFormFields event triggers when fields are empty.
  alert("Please fill all required fields. Missing: "+args.formField[0].name);
};
```

- Default for new Textbox fields
```ts
pdfviewer.textFieldSettings = { isRequired: true };
```

## isPrint

Use `isPrint` to control whether a field’s appearance is included when printing the PDF from the viewer.

- Creation (do not print a signature field)
```ts
pdfviewer.formDesignerModule.addFormField('SignatureField', {
  name: 'ApplicantSign',
  bounds: { X: 57, Y: 923, Width: 200, Height: 43 },
  isPrint: false
} as SignatureFieldSettings);
```

- Update existing field
```ts
const sign = pdfviewer.formFieldCollections.find(f => f.name === 'ApplicantSign');
if (sign) {
  pdfviewer.formDesignerModule.updateFormField(sign, { isPrint: true } as SignatureFieldSettings);
}
```

- Default for new signature fields
```ts
pdfviewer.signatureFieldSettings = { isPrint: false };
```

N> Printing can be invoked programmatically using pdfviewer.print.print(); fields with isPrint: false will not appear in the print output.

## Set constraints when creating a field

Use `addFormField` to create fields and pass the constraint properties in the settings object. The example below adds a Textbox and a Signature field with different constraint combinations.

```ts
import { PdfViewer, Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView,
         TextSelection, Annotation, FormDesigner, FormFields, TextFieldSettings, SignatureFieldSettings } from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject(Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView,
                 TextSelection, Annotation, FormDesigner, FormFields);

let pdfviewer: PdfViewer = new PdfViewer({
    documentPath: 'https://cdn.syncfusion.com/content/pdf/form-designer.pdf',
    resourceUrl: 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib'
});
pdfviewer.appendTo('#PdfViewer');

pdfviewer.documentLoad = () => {
    // Read-only Textbox that is printed but not required
    pdfviewer.formDesignerModule.addFormField('Textbox', {
        name: 'EmployeeId',
        bounds: { X: 146, Y: 229, Width: 150, Height: 24 },
        isReadOnly: true,
        isRequired: false,
        isPrint: true,
        value: 'EMP-0001'
    } as TextFieldSettings);

    // Required Signature field that is not included in print
    pdfviewer.formDesignerModule.addFormField('SignatureField', {
        name: 'ApplicantSign',
        bounds: { X: 57, Y: 923, Width: 200, Height: 43 },
        isReadOnly: false,
        isRequired: true,
        isPrint: false,
        tooltip: 'Sign to accept the terms'
    } as SignatureFieldSettings);
};
```

N> To configure the server-backed PDF Viewer, add the following serviceUrl in index.ts:
`pdfviewer.serviceUrl = 'https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer/';`

## Update constraints programmatically

Use `updateFormField` to change constraint flags of an existing field. The snippet below toggles isReadOnly, sets a field as required, and controls whether the field should appear when printing.

```ts
import { PdfViewer, Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView,
         TextSelection, Annotation, FormDesigner, FormFields, TextFieldSettings } from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject(Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView,
                 TextSelection, Annotation, FormDesigner, FormFields);

let pdfviewer: PdfViewer = new PdfViewer({
    documentPath: 'https://cdn.syncfusion.com/content/pdf/form-designer.pdf',
    resourceUrl: 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib'
});
pdfviewer.appendTo('#PdfViewer');

pdfviewer.documentLoad = () => {
    // Add a sample textbox
    pdfviewer.formDesignerModule.addFormField('Textbox', {
        name: 'Email',
        bounds: { X: 146, Y: 260, Width: 220, Height: 24 }
    } as TextFieldSettings);

    // Retrieve it and update constraint flags
    const field = pdfviewer.formFieldCollections.find(f => f.name === 'Email');
    if (field) {
        pdfviewer.formDesignerModule.updateFormField(field, {
            isReadOnly: false,
            isRequired: true,
            isPrint: true,
            tooltip: 'Enter a valid email'
        } as TextFieldSettings);
    }
};
```

## Configure default constraints for newly added fields

Set default settings so all fields created from the Form Designer toolbar inherit the constraint flags.

The example below configures defaults for Textbox and Signature fields.

```ts
import { PdfViewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView,
         BookmarkView, TextSelection, FormDesigner, FormFields } from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject(Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView,
                 BookmarkView, TextSelection, FormDesigner, FormFields);

let pdfviewer: PdfViewer = new PdfViewer({ documentPath: 'https://cdn.syncfusion.com/content/pdf/form-designer.pdf' });
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

[View Sample on GitHub](https://github.com/SyncfusionExamples/typescript-pdf-viewer-examples)

## See also

- [Form Designer overview](./overview)
- [Form Designer Toolbar](../toolbar-customization/form-designer-toolbar)
- [Create form fields](./Create-edit-Style-del-formFields/create-formfields)
- [Edit form fields](./Create-edit-Style-del-formFields/edit-formfields)
- [Group form fields](./group-formfields)
- [Add custom data to form fields](./custom-data)
- [Form validation](./form-validation)
- [Form fields API](./formfields-api)
