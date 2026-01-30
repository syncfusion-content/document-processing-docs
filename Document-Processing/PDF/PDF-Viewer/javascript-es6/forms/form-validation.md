---
layout: post
title: Form validation in the TypeScript PDF Viewer component | Syncfusion
description: Learn how to enable built-in form field validation and validate missing required fields in the Syncfusion TypeScript PDF Viewer.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Validate PDF Form Fields in TypeScript PDF Viewer

The Syncfusion **TypeScript PDF Viewer** provides built in support for **validating form fields** before users perform actions such as **printing**, **downloading**, or **submitting** a PDF document. Validation ensures that all required form fields are filled before allowing these actions to complete.  
This feature helps enforce data completeness and improves the reliability of collected form data.

## How PDF Form Validation Works

Form field validation follows this flow:
- Enable validation using the [enableFormFieldsValidation](https://ej2.syncfusion.com/documentation/api/pdfviewer/index-default#enableformfieldsvalidation) property.
- Handle the [validateFormFields](https://ej2.syncfusion.com/documentation/api/pdfviewer/index-default#validateformfields) event to determine which required fields are not filled.
- When validation is enabled and a user attempts to print, download, or submit the document:
  - The [validateFormFields](https://ej2.syncfusion.com/documentation/api/pdfviewer/index-default#validateformfields) event is triggered.
  - Unfilled required fields are listed in args.nonFillableFields.
  - You can cancel the action, show an error message, or move focus to an invalid field.

## Enable PDF Form Field Validation

To enable validation, set the [enableFormFieldsValidation](https://ej2.syncfusion.com/documentation/api/pdfviewer/index-default#validateformfields) property to true and wire the validateFormFields event.

```ts
import {
  PdfViewer, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView,
  TextSelection, TextSearch, Print, Annotation, FormDesigner, FormFields,
  TextFieldSettings
} from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject(
  Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView,
  TextSelection, TextSearch, Print, Annotation, FormDesigner, FormFields
);

// Create and configure the viewer
let pdfviewer: PdfViewer = new PdfViewer({
    documentPath: 'https://cdn.syncfusion.com/content/pdf/form-designer.pdf',
    resourceUrl: 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib'
});
// 1) Default for new Textbox fields
pdfviewer.textFieldSettings = { isRequired: true };

// 2) Validation wiring
pdfviewer.enableFormFieldsValidation = true;
pdfviewer.validateFormFields = (args: any) => {
  // Triggers when required fields are empty on submit/validate
  if (args && args.formField && args.formField.length > 0) {
    alert('Please fill all required fields. Missing: ' + args.formField[0].name);
  }
};

// 3) Creation (add a Textbox form field once the document is loaded)
pdfviewer.documentLoad = () => {
  pdfviewer.formDesignerModule.addFormField('Textbox', {
    name: 'Email',
    bounds: { X: 146, Y: 260, Width: 220, Height: 24 },
    isRequired: true,
    tooltip: 'Email is required'
  } as TextFieldSettings);
};

// Mount the viewer
pdfviewer.appendTo('#pdfViewer'); // Ensure an element with id="pdfViewer" exists in your HTML
```

## Mark Fields as Required

Only fields marked as **required** participate in validation. Use the **isRequired** property when creating or updating a form field.

```ts
// Creation of a required textbox (inside documentLoad) that blocks printing until it is filled.
pdfviewer.formDesignerModule.addFormField('Textbox', {
  name: 'Email',
  bounds: { X: 146, Y: 260, Width: 220, Height: 24 },
  isRequired: true,
  tooltip: 'Email is required'
} as TextFieldSettings);
```

## Handle PDF Form Validation Results

In the [validateFormFields](https://ej2.syncfusion.com/documentation/api/pdfviewer/index-default#validateformfields) event, you can control the behavior when fields are missing. Typical actions include:
- Cancel the print or download operation
- Display an error message to the user
- Set focus to the first unfilled required field

```ts
pdfviewer.enableFormFieldsValidation = true;
pdfviewer.validateFormFields = (args: any) => {
  if (args && args.formField && args.formField.length > 0) {
    // Example: prevent the pending action and notify the user
    args.cancel = true;
    alert('Please fill all required fields. Missing: ' + args.formField[0].name);
    // Optionally focus or scroll to the field
  }
};
```

## Tips

- Use isRequired to clearly mark mandatory fields.
- Validation is triggered only during [print](../print), [download](../download), or **submit** actions.
- For custom validation logic (such as validating an email format):
  - Retrieve all form fields using [retrieveFormFields()](https://ej2.syncfusion.com/documentation/api/pdfviewer/index-default#retrieveformfields).
  - Apply custom checks before allowing the action to proceed.

## See Also

- [Form Designer overview](./overview)
- [Form Designer Toolbar](../toolbar-customization/form-designer-toolbar)
- [Create form fields](./manage-form-fields/create-form-fields)
- [Modify form fields](./manage-form-fields/modify-form-fields)
- [Group form fields](./group-form-fields)
- [Add custom data to PDF form fields](./custom-data)
- [Form flags](./form-constrain)
- [Form fields API](./form-fields-api)