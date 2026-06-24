---
layout: post
title: Form validation in the JavaScript PDF Viewer component | Syncfusion
description: Learn how to enable built-in form field validation and validate missing required fields in the Syncfusion JavaScript PDF Viewer.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Validate PDF form fields in JavaScript PDF Viewer

The Syncfusion **JavaScript PDF Viewer** provides built-in support for **validating form fields** before users perform actions such as **printing**, **downloading**, or **submitting** a PDF document. Validation ensures that required form fields are completed before allowing these actions to proceed and improves the reliability of collected data.

## How PDF Form Validation Works

Form field validation follows this flow:
- Enable validation using the [enableFormFieldsValidation](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/index-default#enableformfieldsvalidation) property.
- Handle the [validateFormFields](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/index-default#validateformfields) event to determine which required fields are not filled.

When validation is enabled and a user attempts to print, download, or submit the document:
- The [validateFormFields](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/index-default#validateformfields) event is triggered.
- Unfilled required fields are listed in `args.formField` (or `args.nonFillableFields` in some viewer versions).
- Cancel the action, show an error message, or move focus to an invalid field.

## Enable PDF Form Field Validation

To enable validation, set the [enableFormFieldsValidation](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/index-default#validateformfields) property to true and wire the validateFormFields event.

```js
// 1) Default for new Textbox fields
pdfviewer.textFieldSettings = { isRequired: true };

// 2) Validation wiring
pdfviewer.enableFormFieldsValidation = true;
pdfviewer.validateFormFields = function (args) {
  // Triggers when required fields are empty on submit/validate
  if (args && args.formField && args.formField.length > 0) {
    alert('Please fill all required fields. Missing: ' + args.formField[0].name);
  }
};

// 3) Creation (add a Textbox form field once the document is loaded)
pdfviewer.documentLoad = function () {
  pdfviewer.formDesignerModule.addFormField('Textbox', {
    name: 'Email',
    bounds: { X: 146, Y: 260, Width: 220, Height: 24 },
    isRequired: true,
    tooltip: 'Email is required'
  });
};

// Mount the viewer
pdfviewer.appendTo('#pdfViewer'); // Ensure an element with id="pdfViewer" exists in your HTML
```

## Mark Fields as Required

Only fields marked as **required** participate in validation. Use the **isRequired** property when creating or updating a form field.

```js
// Creation of a required textbox (inside documentLoad) that blocks printing until it is filled.
pdfviewer.formDesignerModule.addFormField('Textbox', {
  name: 'Email',
  bounds: { X: 146, Y: 260, Width: 220, Height: 24 },
  isRequired: true,
  tooltip: 'Email is required'
});
```

## Handle PDF Form Validation Results

In the [validateFormFields](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/index-default#validateformfields) event, you can control the behavior when fields are missing. Typical actions include:
- Cancel the print or download operation
- Display an error message to the user
- Set focus to the first unfilled required field

```js
pdfviewer.enableFormFieldsValidation = true;
pdfviewer.validateFormFields = function (args) {
  if (args && args.formField && args.formField.length > 0) {
    // Example: prevent the pending action and notify the user
    args.cancel = true;
    alert('Please fill all required fields. Missing: ' + args.formField[0].name);
    // Optionally focus or scroll to the field
  }
};
```

## Tips

- Use `isRequired` to mark mandatory fields.
- Validation is triggered only during [print](../print), [download](../download), or **submit** actions.
- For custom validation logic (such as validating an email format):
  - Retrieve all form fields using [retrieveFormFields()](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/index-default#retrieveformfields).
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