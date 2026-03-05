---
layout: post
title: Read and Extract PDF Form Field Values in React PDF Viewer | Syncfusion
description: Learn how to read and extract values from PDF form fields in the EJ2 React PDF Viewer, including text, checkboxes, radio buttons, dropdowns, and signatures.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Read and Extract PDF Form Field Values in React PDF Viewer

The React PDF Viewer allows you to read the values of interactive PDF form fields including textboxes, checkboxes, radio buttons, dropdowns, signatures, and more. Use the APIs below to retrieve form data programmatically for validation, submission, or syncing with your app state.

This guide shows common patterns with concise code snippets you can copy into your React components.

## Access the Form Field Collection

Get all available form field ata by reading  viewer's `formFieldCollections`. For more information, see [`formFieldCollections`](./form-fields-api#formfieldcollections).

```ts
const formFields = viewer.formFieldCollections;
```

## Read Text Field Values

Find the text field by name and read its value property. For more information, see [`formFieldCollections`](./form-fields-api#formfieldcollections).

```ts
const formFields = viewer.formFieldCollections;
const name = (formFields.find(field => field.type === 'Textbox' && field.name === 'name')).value;
```

## Read Checkbox / Radio Button Values

Check whether a checkbox or radio button is selected by reading its `isChecked` value. For more information, see [`formFieldCollections`](./form-fields-api#formfieldcollections).

```ts
const formFields = viewer.formFieldCollections;
const radioButtons = formFields.filter(field => a.type === 'RadioButton' && a.name === 'gender');
const checkedField = (radioButtons.find(field => field.isChecked)).name;
```

## Read Dropdown values

Read the dropdown’s selected option by accessing `value` property. For more information, see [`formFieldCollections`](./form-fields-api#formfieldcollections).

```ts
const formFields = viewer.formFieldCollections;
const state = (formFields.find(field => field.type === 'DropdownList' && field.name === 'state')).value;
```

## Read Signature Field Data

This reads the signature path data stored in a signature field so it can be later converted to an image. For more information, see [`formFieldCollections`](./form-fields-api#formfieldcollections).

```ts
const formFields = viewer.formFieldCollections;
const signData = (formFields.find(field => field.type === 'SignatureField' && field.name === 'signature')).value;
```

## Extract All Form Field Values

This iterates every field in the collection and logs each field's name and value, useful for exporting or validating all form data. For more information, see [`formFieldCollections`](./form-fields-api#formfieldcollections).

```ts
const formFields = viewer.formFieldCollections;
formFields.forEach(field => {
    if (field.type === 'RadioButton' || field.type === 'Checkbox') {
        console.log(`${field.name}: ${field.isChecked}`);
    }
    else {
        console.log(`${field.name}: ${field.value}`);
    }
});
```

## Extract Form Data After Document Loaded

Place your form-reading logic inside `documentLoad` event handler, so values are read after the PDF is loaded in the viewer. For more information, see [`formFieldCollections`](./form-fields-api#formfieldcollections) and [`documentLoad`](../events#documentload).

```ts
// If you need to access form data right after the PDF loads
viewer.documentLoaded = () => {
    const formFields = viewer.formFieldCollections;
    const email = formFields.find(field => field.name === 'email').value;
    console.log("Email: ", email);
};
```

## Use Cases

- Validate and pre-fill form fields in your application before user submission.
- Submit filled form data from the viewer to a backend service for processing or storage.
- Synchronize form field values with external UI components to keep application state in sync.
- Export form data for reporting, archival, or integration with other systems.

## Troubleshooting

- Use the exact field names defined in the PDF when searching through the `formFieldCollections`.
- If a field might be missing in some documents, add null checks.

## See also

- [`formFieldCollections`](./form-fields-api#formfieldcollections)
- [`documentLoad`](../events#documentload)