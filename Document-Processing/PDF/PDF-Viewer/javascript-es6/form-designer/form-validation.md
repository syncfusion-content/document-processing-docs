---
layout: post
title: Form validation in the TypeScript PDF Viewer component | Syncfusion
description: Learn how to enable built-in form field validation and validate missing required fields in the Syncfusion TypeScript PDF Viewer.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Validate form fields in TypeScript PDF Viewer

The PDF Viewer Component can validate form fields during print, download or submit form. Use the [enableFormFieldsValidation](https://ej2.syncfusion.com/documentation/api/pdfviewer/index-default#enableformfieldsvalidation) property to turn on validation and handle the [validateFormFields](https://ej2.syncfusion.com/documentation/api/pdfviewer/validateformfieldsargs) event to review which required fields are not filled.

When validation is enabled and the user attempts to print, download or submit form, the event fires with a list of non-filled fields in args.nonFillableFields. You can cancel the operation, show a message, or focus the first invalid field.

## Enable validation

Set `enableFormFieldsValidation` to true and wire the validateFormFields event.

```ts
import { PdfViewer, Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView,
         TextSelection, Annotation, FormDesigner, FormFields } from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject(Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView,
                 TextSelection, Annotation, FormDesigner, FormFields);

let pdfviewer: PdfViewer = new PdfViewer({
  documentPath: 'https://cdn.syncfusion.com/content/pdf/form-designer.pdf',
  resourceUrl: 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib'
});

pdfviewer.appendTo('#PdfViewer');
pdfviewer.enableFormFieldsValidation = true;

pdfviewer.validateFormFields = (args: any) => {
    alert("Please fill all required fields. Missing: "+args.formField[0].name);
    console.log(args.nonFillableFields)
};
```

## Mark a field as required and validate

The snippet below creates a required Textbox and demonstrates validation blocking print until the field is filled.

```ts
import { PdfViewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView,
         BookmarkView, TextSelection, FormDesigner, FormFields, TextFieldSettings } from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject(Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView,
                 BookmarkView, TextSelection, FormDesigner, FormFields);

let pdfviewer: PdfViewer = new PdfViewer({
  documentPath: 'https://cdn.syncfusion.com/content/pdf/form-designer.pdf',
  resourceUrl: 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib'
});
pdfviewer.appendTo('#PdfViewer');

pdfviewer.documentLoad = () => {
  // Add a required Textbox
  pdfviewer.formDesignerModule.addFormField('Textbox', {
    name: 'Email',
    bounds: { X: 146, Y: 260, Width: 220, Height: 24 },
    isRequired: true,
    tooltip: 'Email is required'
  } as TextFieldSettings);
};

pdfviewer.enableFormFieldsValidation = true;
pdfviewer.validateFormFields = (args: any) => {
    alert("Please fill all required fields. Missing: "+args.formField[0].name);
    console.log(args.nonFillableFields)
};
```

## Tips

- Use isRequired on individual fields to include them in the validation check.
- The event only fires when a print or download action is invoked.
- To perform custom checks (e.g., regex for email), iterate over pdfviewer.retrieveFormFields() and apply your own logic before triggering print or download.

