---
layout: post
title: Style form fields in the TypeScript PDF Viewer | Syncfusion
description: Learn how to configure typography, colors, borders, alignment, and other style settings for PDF form fields using the UI and programmatically.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Style form fields in TypeScript PDF Viewer

The PDF Viewer component allows users to style and customize the appearance of PDF form fields using the Form Designer UI and programmatically. User can also set the default settings applied when fields are added from the Form Designer toolbar.

Supported field types:

- Textbox
- Password
- CheckBox
- RadioButton
- ListBox
- DropDown
- Signature field
- Initial field

## Textbox

### Style Textbox

Use the Properties panel to adjust the value, font family/size/style, text color, border and background colors, border thickness, text alignment, and maximum length.

![Textbox style from UI](../../images/ui-textbox-style.png)

### Style Textbox programmatically

Use `updateFormField` to modify a textbox’s appearance and behavior on a button click. The example below finds the field by name (or falls back to the first field) and updates value, typography, colors, alignment, and border thickness.

- value: Sets the displayed text.
- fontFamily, fontSize, fontStyle: Controls text typography.
- color: Text color.
- borderColor, backgroundColor: Field border and fill colors.
- alignment: Horizontal text alignment (Left, Center, Right).
- thickness: Border thickness (set 0 to hide).

```html
<button id="updateTextboxStyle">Update Textbox Style</button>
```

```ts
import { PdfViewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, FontStyle, TextFieldSettings } from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject(Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner);

const pdfviewer: PdfViewer = new PdfViewer();
pdfviewer.documentPath = 'https://cdn.syncfusion.com/content/pdf/form-designer.pdf';
pdfviewer.resourceUrl = 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib';
pdfviewer.appendTo('#PdfViewer');

// Update textbox styling on button click
(document.getElementById('updateTextboxStyle') as HTMLButtonElement)?.addEventListener('click', () => {
  // Retrieve form fields collection
  const fields = pdfviewer.retrieveFormFields();
  // Find the textbox field by name
  const tb = fields.find((f: any) => f.name === 'First Name') || fields[0];
  if (tb) {
    // Update textbox field styling
    pdfviewer.formDesignerModule.updateFormField(tb, {
      value: 'John',
      fontFamily: 'Courier',
      fontSize: 12,
      fontStyle: FontStyle.None,
      color: 'black',
      borderColor: 'black',
      backgroundColor: 'white',
      alignment: 'Left',
      thickness: 2
    } as TextFieldSettings);
  }
});
```

### Default Textbox settings (toolbar additions)

```ts
// Apply as defaults for Textbox added from toolbar
pdfviewer.textFieldSettings = {
  name: 'Textbox',
  isReadOnly: false,
  visibility: 'visible',
  isRequired: false,
  isPrint: true,
  tooltip: 'Textbox',
  thickness: 4,
  value: 'Textbox',
  fontFamily: 'Courier',
  fontSize: 10,
  fontStyle: 'None',
  color: 'black',
  borderColor: 'black',
  backgroundColor: 'White',
  alignment: 'Left',
  maxLength: 0,
  isMultiline: false
};
```

## Password

### Style Password

Use the Properties panel to configure the tooltip, font family and size, masked text color, border and background colors, text alignment, maximum length, and border thickness.

![Password style from UI](../../images/ui-password-style.png)

### Style Password programmatically

```ts
const pw = pdfviewer.formFieldCollections.find(f => f.name === 'Password');
if (pw) {
  pdfviewer.formDesignerModule.updateFormField(pw, {
    tooltip: 'Enter password',
    fontFamily: 'Courier',
    fontSize: 10,
    color: 'black',
    borderColor: 'black',
    backgroundColor: 'white',
    alignment: 'Left',
    maxLength: 20,
    thickness: 1
  });
}
```

### Default Password settings (toolbar additions)

```ts
pdfviewer.passwordFieldSettings = {
  name: 'Password',
  isReadOnly: false,
  visibility: 'visible',
  isRequired: false,
  isPrint: true,
  tooltip: 'Password',
  thickness: 4,
  value: 'Password',
  fontFamily: 'Courier',
  fontSize: 10,
  fontStyle: 'None',
  color: 'black',
  borderColor: 'black',
  backgroundColor: 'white',
  alignment: 'Left',
  maxLength: 0
};
```

## CheckBox

### Style CheckBox

Use the Properties panel to toggle the checked state and customize border and background colors, and border thickness.

![CheckBox style from UI](../../images/ui-checkbox-style.png)

### Style CheckBox programmatically

```ts
const cb = pdfviewer.formFieldCollections.find(f => f.name === 'Subscribe');
if (cb) {
  pdfviewer.formDesignerModule.updateFormField(cb, {
    isChecked: true,
    backgroundColor: 'white',
    borderColor: 'black',
    thickness: 2,
    tooltip: 'Subscribe'
  });
}
```

### Default CheckBox settings (toolbar additions)

```ts
pdfviewer.checkBoxFieldSettings = {
  name: 'CheckBox',
  isReadOnly: false,
  visibility: 'visible',
  isRequired: false,
  isPrint: true,
  tooltip: 'CheckBox',
  thickness: 4,
  isChecked: true,
  backgroundColor: 'white',
  borderColor: 'black'
};
```

## RadioButton

### Style RadioButton

Use the Properties panel to set the selected state, border and background colors, and border thickness. Radio buttons with the same name are grouped automatically.

![RadioButton style from UI](../../images/ui-radiobutton-style.png)

### Style RadioButton programmatically

```ts
const radios = pdfviewer.formFieldCollections.filter(f => f.name === 'Gender');
if (radios.length > 1) {
  pdfviewer.formDesignerModule.updateFormField(radios[0], { isSelected: false });
  pdfviewer.formDesignerModule.updateFormField(radios[1], { isSelected: true, thickness: 2, borderColor: 'black' });
}
```

### Default RadioButton settings (toolbar additions)

```ts
pdfviewer.radioButtonFieldSettings = {
  name: 'RadioButton',
  isReadOnly: false,
  visibility: 'visible',
  isRequired: false,
  isPrint: true,
  tooltip: 'RadioButton',
  thickness: 4,
  isSelected: true,
  backgroundColor: 'white',
  borderColor: 'black',
  value: 'RadioButton'
};
```

## ListBox

### Style ListBox

Use the Properties panel to add or remove items, set the selected value, and adjust typography and colors.

![ListBox style from UI](../../images/ui-listbox-style.png)

### Style ListBox programmatically

```ts
const lb = pdfviewer.formFieldCollections.find(f => f.name === 'States');
if (lb) {
  pdfviewer.formDesignerModule.updateFormField(lb, {
    options: [
      { itemName: 'Item 1', itemValue: 'item1' },
      { itemName: 'Item 2', itemValue: 'item2' },
      { itemName: 'Item 3', itemValue: 'item3' }
    ],
    value: 'item2',
    fontFamily: 'Courier',
    fontSize: 10,
    color: 'black',
    borderColor: 'black',
    backgroundColor: 'white'
  } as any);
}
```

### Default ListBox settings (toolbar additions)

```ts
const customOptions = [
  { itemName: 'item1', itemValue: 'item1' },
  { itemName: 'item2', itemValue: 'item2' },
  { itemName: 'item3', itemValue: 'item3' }
];

pdfviewer.listBoxFieldSettings = {
  name: 'ListBox',
  isReadOnly: false,
  visibility: 'visible',
  isRequired: false,
  isPrint: true,
  tooltip: 'ListBox',
  thickness: 4,
  value: 'ListBox',
  fontFamily: 'Courier',
  fontSize: 10,
  fontStyle: 'None',
  color: 'black',
  borderColor: 'black',
  backgroundColor: 'White',
  alignment: 'Left',
  options: customOptions
};
```

## DropDown

### Style DropDown

Use the Properties panel to add or remove items, set the default value, and adjust typography and colors.

![DropDown style from UI](../../images/ui-dropdown-style.png)

### Style DropDown programmatically

```ts
const dd = pdfviewer.formFieldCollections.find(f => f.name === 'Country');
if (dd) {
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
  } as any);
}
```

### Default DropDown settings (toolbar additions)

```ts
const ddOptions = [
  { itemName: 'item1', itemValue: 'item1' },
  { itemName: 'item2', itemValue: 'item2' },
  { itemName: 'item3', itemValue: 'item3' }
];

// DropDown uses listBoxFieldSettings for defaults
pdfviewer.listBoxFieldSettings = {
  name: 'DropDown',
  isReadOnly: false,
  visibility: 'visible',
  isRequired: false,
  isPrint: true,
  tooltip: 'DropDown',
  thickness: 4,
  value: 'DropDown',
  fontFamily: 'Courier',
  fontSize: 10,
  fontStyle: 'None',
  color: 'black',
  borderColor: 'black',
  backgroundColor: 'White',
  alignment: 'Left',
  options: ddOptions
};
```

## Signature field

### Style Signature field

Use the Properties panel to configure the tooltip, indicator text, dialog display modes, border thickness, required setting, and colors.

![Signature style from UI](../../images/ui-signature-style.png)

### Style Signature field programmatically

```ts
const sig = pdfviewer.formFieldCollections.find(f => f.name === 'Sign');
if (sig) {
  pdfviewer.formDesignerModule.updateFormField(sig, {
    tooltip: 'Please sign here',
    thickness: 3,
    isRequired: true,
    isPrint: true,
    backgroundColor: 'white',
    borderColor: 'black'
  });
}
```

### Default Signature field settings (toolbar additions)

```ts
pdfviewer.signatureFieldSettings = {
  name: 'Signature',
  isReadOnly: false,
  visibility: 'visible',
  isRequired: false,
  isPrint: true,
  tooltip: 'Signature',
  thickness: 4,
  signatureDialogSettings: {
    displayMode: DisplayMode.Draw | DisplayMode.Upload | DisplayMode.Text,
    hideSaveSignature: false
  },
  signatureIndicatorSettings: {
    opacity: 1,
    backgroundColor: '#237ba2',
    height: 50,
    fontSize: 15,
    text: 'Signature Field',
    color: 'white'
  }
};
```

## Initial field

### Style Initial field

Use the Properties panel to configure the tooltip, indicator text, dialog display modes, border thickness, and colors.

![Initial style from UI](../../images/ui-initial-style.png)

### Style Initial field programmatically

```ts
const init = pdfviewer.formFieldCollections.find(f => f.name === 'Initial');
if (init) {
  pdfviewer.formDesignerModule.updateFormField(init, {
    tooltip: 'Add your initials',
    thickness: 2,
    isRequired: true,
    isPrint: true,
    backgroundColor: 'white',
    borderColor: 'black'
  });
}
```

### Default Initial field settings (toolbar additions)

```ts
pdfviewer.initialFieldSettings = {
  name: 'Initial',
  isReadOnly: false,
  visibility: 'visible',
  isRequired: false,
  isPrint: true,
  tooltip: 'Initial',
  thickness: 4,
  initialIndicatorSettings: {
    opacity: 1,
    backgroundColor: '#237ba2',
    height: 50,
    fontSize: 15,
    text: 'Initial Field',
    color: 'white'
  },
  initialDialogSettings: {
    displayMode: DisplayMode.Draw | DisplayMode.Upload | DisplayMode.Text,
    hideSaveSignature: false
  }
};
```

