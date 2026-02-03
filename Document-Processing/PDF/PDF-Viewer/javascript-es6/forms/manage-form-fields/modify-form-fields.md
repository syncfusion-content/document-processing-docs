---
layout: post
title: Modify form fields in the TypeScript PDF Viewer | Syncfusion
description: Learn how to modify PDF form fields using the UI and programmatically with APIs in the Syncfusion TypeScript PDF Viewer.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Modify PDF Form Field Properties
You can modify form fields using the **UI** or **API**.

## Modify PDF Form Field Properties using the UI
- Right click a field → **Properties** to update settings.
![Textbox properties panel](../../images/ui-textbox-edit.png)
- Drag to move; use handles to resize.
- Use the toolbar to toggle field mode or add new fields.

## Modify PDF Form Field Properties programmatically
Use [updateFormField()](https://ej2.syncfusion.com/documentation/api/pdfviewer/index-default#updateformfields) to change behavior/data (including position and size):

```html
<button id="modifyTextbox">Apply Textbox Changes</button>
```
```ts
(document.getElementById('modifyTextbox') as HTMLButtonElement)?.addEventListener('click', () => {
  // Retrieve form fields collection
  const fields = pdfviewer.retrieveFormFields();
  // Find the textbox field by name (Here field name is First Name)
  const field = fields.find((f: any) => f.name === 'First Name') || fields[0]; //Update Name accordingly
  if (field) {
    // Update textbox field styling and value
    pdfviewer.formDesignerModule.updateFormField(field, {
      value: 'John',
      fontFamily: 'Courier',
      fontSize: 12,
      fontStyle: FontStyle.None,
      color: 'black',
      backgroundColor: 'white',
      borderColor: 'black',
      thickness: 2,
      alignment: 'Left',
      maxLength: 50
    } as TextFieldSettings);
  }
});
```

## Modify PDF Form Field Properties by Field type

### Textbox
- UI: Update value, font, size, colors, border thickness, alignment, max length, multiline.
![Textbox properties panel](../../images/ui-textbox-edit.png)
- API: [updateFormField()](https://ej2.syncfusion.com/documentation/api/pdfviewer/index-default#updateformfields) for value, typography, alignment, colors, borders.

```html
<button id="modifyTextbox">Apply Textbox Changes</button>
```
```ts
(document.getElementById('modifyTextbox') as HTMLButtonElement)?.addEventListener('click', () => {
  // Retrieve form fields collection
  const fields = pdfviewer.retrieveFormFields();
  // Find the textbox field by name (Here field name is First Name)
  const field = fields.find((f: any) => f.name === 'First Name') || fields[0]; //Update Name accordingly
  if (field) {
    // Update textbox field styling and value
    pdfviewer.formDesignerModule.updateFormField(field, {
      value: 'John',
      fontFamily: 'Courier',
      fontSize: 12,
      fontStyle: FontStyle.None,
      color: 'black',
      backgroundColor: 'white',
      borderColor: 'black',
      thickness: 2,
      alignment: 'Left',
      maxLength: 50
    } as TextFieldSettings);
  }
});
```

### Password

- UI: Tooltip, required, max length, font, appearance.
![Password edited from UI](../../images/ui-password-edit.png)
- API: [updateFormField()](https://ej2.syncfusion.com/documentation/api/pdfviewer/index-default#updateformfields) for tooltip, validation flags, typography, colors, alignment, borders.
```html
 <button id="modifyPasswordBox">Edit PasswordBox</button>
```
```ts
(document.getElementById('modifyPasswordBox') as HTMLButtonElement)?.addEventListener('click', () => {
  // Retrieve form fields collection
  const fields = pdfviewer.retrieveFormFields();
  // Find the password field by name (Here field name is Password)
  const field = fields.find((f: any) => f.name === 'Password');
  if (field) {
    // Update password field properties
    pdfviewer.formDesignerModule.updateFormField(field, {
      tooltip: 'Enter your password',
      isReadOnly: false,
      isRequired: true,
      isPrint: true,
      fontFamily: 'Courier',
      fontSize: 10,
      color: 'black',
      borderColor: 'black',
      backgroundColor: 'white',
      alignment: 'Left',
      maxLength: 20,
      thickness: 1
    } as PasswordFieldSettings);
  }
});
```

### CheckBox
- UI: Toggle checked state.
![CheckBox edited from UI](../../images/ui-checkbox-edit.png)
- API: [updateFormField()](https://ej2.syncfusion.com/documentation/api/pdfviewer/index-default#updateformfields) for isChecked, tooltip, colors, borders.
```html
<button id="modifyCheckbox">Modify CheckBox</button>
```
```ts
(document.getElementById('modifyCheckbox') as HTMLButtonElement)?.addEventListener('click', () => {
  // Retrieve form fields collection
  const fields = pdfviewer.retrieveFormFields();
  // Find the checkbox field by name (Here field name is Subscribe)
  const cb = fields.find((f: any) => f.name === 'Subscribe');
  if (cb) {
    // Update checkbox field properties and state
    pdfviewer.formDesignerModule.updateFormField(cb, {
      isChecked: true,
      backgroundColor: 'white',
      borderColor: 'black',
      thickness: 2,
      tooltip: 'Subscribe to newsletter'
    } as CheckBoxFieldSettings);
  }
});
```

### RadioButton
•	UI: Set selected item in a group (same Name).
![RadioButton edited from UI](../../images/ui-radiobutton-edit.png)
•	API: [updateFormField()](https://ej2.syncfusion.com/documentation/api/pdfviewer/index-default#updateformfields) to set selected value and border appearance.
```html
<button id="editRadio">Modify RadioButton</button>
```
```ts
(document.getElementById('editRadio') as HTMLButtonElement)?.addEventListener('click', () => {
  // Retrieve form fields collection
  const fields = pdfviewer.retrieveFormFields();
  // Filter the radio button group by name (Here group name is Gender)
  const genderRadios = fields.filter((f: any) => f.name === 'Gender');
  if (genderRadios[1]) {
    // Update radio button selection and appearance
    pdfviewer.formDesignerModule.updateFormField(genderRadios[0], { isSelected: false } as RadioButtonFieldSettings);
    pdfviewer.formDesignerModule.updateFormField(genderRadios[1], { isSelected: true, thickness: 2, borderColor: 'black' } as RadioButtonFieldSettings);
  }
});
```

### ListBox
•	UI: Add/remove items, set selection, adjust fonts/colors.
![ListBox edited from UI](../../images/ui-listbox-edit.png)
•	API: [updateFormField()](https://ej2.syncfusion.com/documentation/api/pdfviewer/index-default#updateformfields) for items, selection, borders.
```html
<button id="editListBox">Edit ListBox</button>
```
```ts
(document.getElementById('editListBox') as HTMLButtonElement)?.addEventListener(
  'click',
  () => {
    // Retrieve form fields collection
    const fields = pdfviewer.retrieveFormFields();
    // Find the listbox field by name (Here field name is States)
    const lb = fields.find((f: any) => f.name === 'States');
    if (lb) {
      // Update listbox options, selection, and appearance
      let option = [
        { itemName: 'Alabama', itemValue: 'AL' },
        { itemName: 'Alaska', itemValue: 'AK' },
        { itemName: 'Arizona', itemValue: 'AZ' },
      ];
      pdfviewer.formDesignerModule.updateFormField(lb, {
        fontFamily: 'Courier',
        fontSize: 5,
        color: 'black',
        backgroundColor: 'white',
        tooltip: 'listbox',
        options: option,
      } as ListBoxFieldSettings);
    }
  });

```

### DropDown
•	UI: Add/remove items, default value, appearance.
![DropDown edited from UI](../../images/ui-dropdown-edit.png)
•	API: [updateFormField()](https://ej2.syncfusion.com/documentation/api/pdfviewer/index-default#updateformfields) for items, value, borders.
```html
<button id="editDropDown">Edit DropDown</button>
```
```ts
(document.getElementById('editDropDown') as HTMLButtonElement)?.addEventListener('click', () => {
  // Retrieve form fields collection
  const fields = pdfviewer.retrieveFormFields();
  // Find the dropdown field by name (Here field name is Country)
  const dd = fields.find((f: any) => f.name === 'Country');
  if (dd) {
    // Update dropdown items, value, and appearance
    pdfviewer.formDesignerModule.updateFormField(dd, {
      options: [
        { itemName: 'USA', itemValue: 'US' },
        { itemName: 'Canada', itemValue: 'CA' },
        { itemName: 'Mexico', itemValue: 'MX' }
      ],
      value: 'US',
      fontFamily: 'Courier',
      fontSize: 10,
      color: 'black',
      borderColor: 'black',
      backgroundColor: 'white'
    } as DropdownFieldSettings);
  }
});
```

### Signature Field
•	UI: Tooltip, thickness, indicator text, required/visibility.
![Signature field edited from UI](../../images/ui-signature-edit.png)
•	API: [updateFormField()](https://ej2.syncfusion.com/documentation/api/pdfviewer/index-default#updateformfields) for tooltip, required, colors, borders.
```html
<button id="editSignature">Edit Signature</button>
```
```ts
(document.getElementById('editSignature') as HTMLButtonElement)?.addEventListener('click', () => {
  // Retrieve form fields collection
  const fields = pdfviewer.retrieveFormFields();
  // Find the signature field by name (Here field name is Sign)
  const sig = fields.find((f: any) => f.name === 'Sign');
  if (sig) {
    // Update signature field properties
    pdfviewer.formDesignerModule.updateFormField(sig, {
      tooltip: 'Please sign here',
      thickness: 3,
      isRequired: true,
      isPrint: true,
      backgroundColor: 'white',
      borderColor: 'black'
    } as SignatureFieldSettings);
  }
});
```

### Initial Field
•	UI: Tooltip, indicator text, thickness, required/visibility.
![Initial field edited from UI](../../images/ui-initial-edit.png)
•	API: [updateFormField()](https://ej2.syncfusion.com/documentation/api/pdfviewer/index-default#updateformfields) for tooltip, required, colors, borders.
```html
<button id="editInitial">Edit Initial</button>
```
```ts
(document.getElementById('editInitial') as HTMLButtonElement)?.addEventListener('click', () => {
  // Retrieve form fields collection
  const fields = pdfviewer.retrieveFormFields();
  // Find the initial field by name (Here field name is Initial)
  const init = fields.find((f: any) => f.name === 'Initial');
  if (init) {
    // Update initial field properties
    pdfviewer.formDesignerModule.updateFormField(init, {
      tooltip: 'Add your initials',
      thickness: 2,
      isRequired: true,
      isPrint: true,
      backgroundColor: 'white',
      borderColor: 'black'
    } as InitialFieldSettings);
  }
});
```

[View Sample on GitHub](https://github.com/SyncfusionExamples/typescript-pdf-viewer-examples)

## See also

- [Form Designer overview](../overview)
- [Form Designer Toolbar](../../toolbar-customization/form-designer-toolbar)
- [Create form fields](./create-form-fields)
- [Remove form Fields](./remove-form-fields)
- [Style form fields](./customize-form-fields)
- [Group form fields](../group-form-fields)
- [Form validation](../form-validation)
- [Form fields API](../form-fields-api)