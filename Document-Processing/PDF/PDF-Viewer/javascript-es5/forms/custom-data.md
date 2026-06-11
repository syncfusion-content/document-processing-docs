---
layout: post
title: Add custom data to form fields in JavaScript Pdf Viewer | Syncfusion
description: Learn how to attach, update, and read custom Data on PDF form fields using the Form Designer UI and APIs in the Syncfusion JavaScript PDF Viewer.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Add custom data to PDF form fields in JavaScript PDF Viewer

The Syncfusion JavaScript PDF Viewer allows attaching application-specific data to form fields using the `customData` property. This enables associating business identifiers, tags, validation hints, or workflow metadata with form fields.

Custom data remains linked to the form field throughout the viewer session and can be accessed or updated whenever the field is queried or modified.

This page explains how to:
- [Add custom data when creating form fields](#add-custom-data-while-creating-pdf-form-fields)
- [Define default custom data for fields created using the UI](#set-default-custom-data-for-pdf-form-fields-added-using-ui)
- [Update or replace custom data for existing fields](#update-or-replace-pdf-form-field-custom-data)
- [Read custom data from form fields](#read-custom-data-from-pdf-form-fields)
- [Apply best practices when using custom data](#best-practices)

**Key Points**
- customData is a **free form object**; you control its structure.
- Use only **serializable values** such as objects, arrays, strings, numbers, and booleans.
- Custom data does not affect the field appearance or behavior unless consumed by your application logic.

## Add Custom Data While Creating PDF Form Fields

You can attach custom data at the time of field creation by passing a `customData` object in the settings parameter of `addFormField()`.

```js
viewer.documentLoad = function () {
  var meta = { businessId: 'C-1024', tags: ['profile','kiosk'], requiredRole: 'admin' };
  viewer.formDesignerModule.addFormField('Textbox', {
    name: 'Email',
    bounds: { X: 146, Y: 229, Width: 200, Height: 24 },
    customData: meta
  });
};
```

## Set Default Custom Data for PDF Form Fields Added Using UI

When users add form fields using the [Form Designer toolbar](../toolbar-customization/form-designer-toolbar), define default `customData` so newly created fields automatically inherit it. Default custom data can be configured using per-field settings objects such as:

- [`textFieldSettings`](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/index-default#textfieldsettings)
- [`passwordFieldSettings`](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/index-default#passwordfieldsettings)
- [`checkBoxFieldSettings`](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/index-default#checkboxfieldsettings)
- [`radioButtonFieldSettings`](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/index-default#radiobuttonfieldsettings)
- [`listBoxFieldSettings`](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/index-default#listboxfieldsettings)
- [`dropDownFieldSettings`](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/index-default#dropdownfieldsettings)
- [`signatureFieldSettings`](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/index-default#signaturefieldsettings)
- [`initialFieldSettings`](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/index-default#initialfieldsettings)

```js
// ...viewer initialization as above...
// Example for textbox defaults
viewer.textFieldSettings = {
  name: 'Textbox',
  customData: { group: 'contact', createdBy: 'designer', requiredRole: 'user' }
};

// Example for checkbox defaults
viewer.checkBoxFieldSettings = {
  name: 'Checkbox',
  customData: { consentType: 'marketing', defaultChecked: false }
};
```

## Update or Replace PDF Form Field Custom Data

Modify the `customData` of an existing form field using [`updateFormField()`](https://ej2.syncfusion.com/documentation/api/pdfviewer/index-default#updateformfields). The field can be identified using its object reference or field ID.

```js
// Retrieve existing fields
var fields = viewer.retrieveFormFields();
var target = (fields || []).find(function (f) { return f && f.name === 'Email'; });

if (target) {
  // Merge with existing customData to avoid overwriting
  var merged = Object.assign({}, target.customData || {}, { updatedAt: Date.now(), verified: true });
  viewer.formDesignerModule.updateFormField(target, { customData: merged });
}
```

**Tip:**
Merge new values with the existing `customData` object before calling [`updateFormField()`](https://ej2.syncfusion.com/documentation/api/pdfviewer/index-default#updateformfields) to avoid overwriting previously stored data.

## Read Custom Data from PDF Form Fields

You can access the customData property from any form field at any point in your application flow, such as:
- After the document is loaded
- During save or submit operations
- While performing validation or conditional routing

```js
viewer.documentLoad = function () {
  var fields = viewer.retrieveFormFields();
  fields.forEach(function (f) {
    console.log('Field:', f.name, 'customData:', f.customData);
    // Example: route based on customData
    if (f.customData && f.customData.requiredRole === 'admin') {
      // mark field for special handling
    }
  });
};
```

## Best Practices

- Treat customData as application metadata, not display data.
- Use it to drive business rules, validation logic, and workflow decisions.
- Keep the data minimal and structured for easy processing.
- When cloning or copying form fields, ensure customData is copied or updated as required.

[View Sample on GitHub](https://github.com/SyncfusionExamples/javascript-pdf-viewer-examples)

## See also

- [Form Designer overview](./overview)
- [Form Designer Toolbar](../toolbar-customization/form-designer-toolbar)
- [Create form fields](./overview-create-forms)
- [Group form fields](../group-form-fields)
- [Form flags](./form-constrain)
- [Form validation](./form-validation)
- [Form fields API](./form-fields-api)