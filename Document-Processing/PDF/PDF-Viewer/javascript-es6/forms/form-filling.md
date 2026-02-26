---
layout: post
title: Form filling in TypeScript PDF Viewer Control | Syncfusion
description: Learn to view, fill, export, and import PDF form fields in Syncfusion TS PDF Viewer, including disabling interaction and handling signatures.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Filling PDF forms in TypeScript PDF Viewer

The Syncfusion PDF Viewer supports filling form fields programmatically, via the user interface, or by importing form data from external sources.

1. [Filling form fields programmatically](#fill-pdf-forms-programmatically)

  Use the [updateFormFieldsValue](https://ej2.syncfusion.com/documentation/api/pdfviewer/index-default#updateformfieldsvalue) API to set or update field values dynamically based on application logic.

2. [Form Filling Through User Interface](#fill-pdf-forms-through-the-user-interface)

  Users can enter or select values directly in the PDF Viewer using supported form elements.

3. [Importing Form Field Data](#fill-pdf-forms-through-import-data)

  Import form data to prefill fields from a JSON/FDF/XFDF source so forms are ready for review or signing.

## Fill PDF forms programmatically 

You can update the values of PDF form fields programmatically using the [updateFormFieldsValue](https://ej2.syncfusion.com/documentation/api/pdfviewer/index-default#updateformfieldsvalue) API. This method allows you to set or modify form field values dynamically based on application logic, without user interaction.

The following example demonstrates how to update PDF form field values programmatically:
 
```html
<button id="updateBtn">Fill Form Fields</button>
```
```ts
// Wire up the button click
document.getElementById('updateBtn')!.onclick = () => {
  //Retriveformfields
  const fields =
    pdfviewer.retrieveFormFields?.() || pdfviewer.formFieldCollection || [];
  //Get form fields by name
  const field = fields.find((f) => f?.name === 'name') || fields[0];

 //Update the Values
  if (field) {
    field.value = 'John Doe';
    field.tooltip = 'First';
    pdfviewer.updateFormFieldsValue(field);
  } else {
    console.warn('No form fields available to update.');
  }
};
```

## Fill PDF forms through the user interface

The Syncfusion PDF Viewer lets users fill form fields directly in the viewer. Clicking a field allows users to enter text, select options, or sign where supported.

![Fill text and signature fields in PDF Viewer](../images/FormFields.gif)

The PDF Viewer supports text boxes, check boxes, radio buttons, drop-down lists, list boxes, and signature fields. Filled values remain editable during the viewing session.

{% previewsample "/document-processing/code-snippet/pdfviewer/javascript-es6/prefilledforms-cs1" %}

## Fill PDF forms through Import Data 

The Syncfusion PDF Viewer allows you to import form field data into an existing PDF document using the [importFormFields](https://ej2.syncfusion.com/documentation/api/pdfviewer/index-default#importformfields) API. This feature enables you to pre-fill form fields using data from an external source without requiring manual user input.

Imported form field data is automatically mapped to the corresponding form fields in the PDF document based on the field names. Once the data is imported, the populated values are displayed in the PDF Viewer and can be edited through the user interface if required.

```html
<button id="importJson">Import JSON</button>
```
```ts
document.getElementById('importJson')!.addEventListener('click', () => {
  // The file for importing should be accessible at the given path or as a file stream depending on your integration
  viewer.importFormFields('File', FormFieldDataFormat.Json);
});
```

For more details, see [Import Form Data](./import-export-form-fields/import-form-fields).

## How to get the filled data and store it to a backing system

You can export the filled form field data from the PDF Viewer and store it in a backing system such as a database or file storage. The exported data can later be imported to restore the form state.

For more details, see [Export Form Data](./import-export-form-fields/export-form-fields).

## How to Validate Form Fields using `validateFormFields` Event

The [validateFormFields](https://ej2.syncfusion.com/documentation/api/pdfviewer/index-default#validateformfields) event in the Syncfusion PDF Viewer is triggered when a user tries to download or submit a form while validation is enabled. You can use the [retrieveFormFields()](https://ej2.syncfusion.com/documentation/api/pdfviewer/index-default#retrieveformfields) API to get all the form fields and check them one by one to see if any form fields values are empty.

This validation applies to all form field types in the PDF Viewer. A textbox is empty if no text is entered, a list box or dropdown is empty if no item is selected, a signature or initial field is empty if the user has not signed, and radio buttons or checkboxes are empty if none are chosen. 
By enabling [enableFormFieldsValidation](https://ej2.syncfusion.com/documentation/api/pdfviewer/index-default#enableformfieldsvalidation) and wiring the event, you can go through each field and stop the action if required fields are not filled.

```ts
pdfviewer.enableFormFieldsValidation = true;
 
pdfviewer.documentLoad = () => {
  // Add a required Email field
  pdfviewer.formDesignerModule.addFormField('Textbox', {
    name: 'Email',
    bounds: { X: 146, Y: 260, Width: 220, Height: 24 },
    isRequired: true,
    tooltip: 'Email is required',
  } as TextFieldSettings);
 
  // Add a required Phone field
  pdfviewer.formDesignerModule.addFormField('Textbox', {
    name: 'Phone',
    bounds: { X: 146, Y: 300, Width: 220, Height: 24 },
    isRequired: true,
    tooltip: 'Phone number is required',
  } as TextFieldSettings);
};
 
// Validate only the added fields
pdfviewer.validateFormFields = (args: any) => {
  const fields = pdfviewer.retrieveFormFields();
 
  fields.forEach((field) => {
    if ((field.name === 'Email' || field.name === 'Phone') && !field.value) {
      alert(field.name + ' field cannot be empty.');
      args.isFormSubmitCancelled = true;
    }
  });
};
```

## See also

- [Form Designer overview](./overview)
- [Form Designer Toolbar](../toolbar-customization/form-designer-toolbar)
- [Create](./manage-form-fields/create-form-fields), [edit](./manage-form-fields/modify-form-fields), [style](./manage-form-fields/customize-form-fields) and [remove](./manage-form-fields/remove-form-fields) form fields
- [Edit form fields](./manage-form-fields/edit-form-fields)
- [Group form fields](./group-form-fields)
- [Add custom data to form fields](./custom-data)
- [Form Constrain](./form-constrain)
- [Form validation](./form-validation)
- [Form fields API](./form-fields-api)
