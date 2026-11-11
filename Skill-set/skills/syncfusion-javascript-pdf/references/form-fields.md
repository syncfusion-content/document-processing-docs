# Form Fields in PDF Documents

## Table of Contents

1. [Overview](#overview)
2. [Field Types](#field-types)
3. [Creating Form Fields](#creating-form-fields)
4. [Filling Forms](#filling-forms)
5. [Modifying Fields](#modifying-fields)
6. [Form Operations](#form-operations)
7. [Best Practices](#best-practices)

## Overview

PDF forms enable data collection through interactive fields. The Syncfusion JavaScript PDF library provides comprehensive support for creating, filling, and managing form fields including text boxes, checkboxes, radio buttons, dropdowns, signatures, and buttons.

## Field Types

### Text Box Field

Single or multi-line text input:

```typescript
import {PdfDocument, PdfField, PdfPage, PdfTextBoxField, PdfInteractiveBorder, PdfBorderStyle, PdfFontFamily, PdfFontStyle} from '@syncfusion/ej2-pdf';

let document: PdfDocument = new PdfDocument();
let page: PdfPage = document.addPage();
let field: PdfField = new PdfTextBoxField(
  page,
  'FirstName',
  { x: 50, y: 600, width: 200, height: 22 },
  {
    toolTip: 'Enter your first name',
    color: { r: 0, g: 0, b: 0 },
    backColor: { r: 255, g: 255, b: 255 },
    borderColor: { r: 0, g: 122, b: 204 },
    border: new PdfInteractiveBorder({ width: 1, style: PdfBorderStyle.solid }),
    text: 'John',
    font: document.embedFont(PdfFontFamily.helvetica, 10, PdfFontStyle.regular)
  }
);
document.form.add(field);
document.save('output.pdf');
document.destroy();
```

### Combo Box Field

Dropdown selection:

```typescript
import {PdfDocument, PdfPage, PdfField, PdfComboBoxField, PdfInteractiveBorder, PdfBorderStyle, PdfFontFamily, PdfFontStyle} from '@syncfusion/ej2-pdf';

let document: PdfDocument = new PdfDocument();
let page: PdfPage = document.addPage();
let field: PdfField = new PdfComboBoxField(
  page,
  'Country',
  { x: 50, y: 400, width: 180, height: 22 },
  {
    items: [
      { text: 'United States', value: 'US' },
      { text: 'Canada', value: 'CA' },
      { text: 'Germany', value: 'DE' }
    ],
    toolTip: 'Choose a country',
    selectedIndex: 0,
    font: document.embedFont(PdfFontFamily.helvetica, 10, PdfFontStyle.regular)
  }
);
document.form.add(field);
document.save('output.pdf');
document.destroy();
```

### Radio Button Field

Mutually exclusive options:

```typescript
import {PdfDocument, PdfPage, PdfField, PdfRadioButtonListField} from '@syncfusion/ej2-pdf';

let document: PdfDocument = new PdfDocument();
let page: PdfPage = document.addPage();
let field: PdfField = new PdfRadioButtonListField(
  page,
  'AgeGroup',
  {
    items: [
      { name: '18-25', bounds: { x: 50, y: 480, width: 14, height: 14 } },
      { name: '26-35', bounds: { x: 50, y: 460, width: 14, height: 14 } },
      { name: '36-45', bounds: { x: 50, y: 440, width: 14, height: 14 } }
    ],
    toolTip: 'Select an age range',
    selectedIndex: 1
  }
);
document.form.add(field);
document.save('output.pdf');
document.destroy();
```

### List Box Field

Multi-select list:

```typescript
import {PdfDocument, PdfPage, PdfField, PdfListBoxField, PdfInteractiveBorder, PdfBorderStyle, PdfFontFamily, PdfFontStyle} from '@syncfusion/ej2-pdf';

let document: PdfDocument = new PdfDocument();
let page: PdfPage = document.addPage();
let field: PdfField = new PdfListBoxField(
  page,
  'Languages',
  { x: 50, y: 340, width: 180, height: 60 },
  {
    items: [
      { text: 'English', value: 'en' },
      { text: 'French', value: 'fr' },
      { text: 'German', value: 'de' }
    ],
    selectedIndex: [0, 2],
    multiSelect: true,
    font: document.embedFont(PdfFontFamily.helvetica, 10, PdfFontStyle.regular)
  }
);
document.form.add(field);
document.save('output.pdf');
document.destroy();
```

### Check Box Field

Boolean selection:

```typescript
import {PdfDocument, PdfPage, PdfField, PdfCheckBoxField, PdfInteractiveBorder, PdfBorderStyle} from '@syncfusion/ej2-pdf';

let document: PdfDocument = new PdfDocument();
let page: PdfPage = document.addPage();
let field: PdfField = new PdfCheckBoxField(
  'AcceptTerms',
  { x: 50, y: 520, width: 14, height: 14 },
  page,
  {
    toolTip: 'Accept the terms and conditions',
    checked: true
  }
);
document.form.add(field);
document.save('Output.pdf');
document.destroy();
```

### Signature Field

Digital signature placeholder:

```typescript
import {PdfDocument, PdfPage, PdfField, PdfSignatureField} from '@syncfusion/ej2-pdf';

let document: PdfDocument = new PdfDocument();
let page: PdfPage = document.addPage();
let field: PdfField = new PdfSignatureField(
  page,
  'ApprovalSignature',
  { x: 50, y: 260, width: 200, height: 40 }
);
document.form.add(field);
document.save('Output.pdf');
document.destroy();
```

### Button Field

Action button:

```typescript
import {PdfDocument, PdfPage, PdfField, PdfButtonField, PdfHighlightMode} from '@syncfusion/ej2-pdf';

let document: PdfDocument = new PdfDocument();
let page: PdfPage = document.addPage();
let field: PdfField = new PdfButtonField(
  page,
  'Submit',
  { x: 50, y: 560, width: 120, height: 28 },
  {
    text: 'Submit',
    highlightMode: PdfHighlightMode.push
  }
);
document.form.add(field);
document.save('Output.pdf');
document.destroy();
```

### Date Field

*Source: UG "Adding the date field".* A date field is a `PdfTextBoxField` with Acrobat JavaScript actions (`AFDate_*` run in the PDF reader, not in the library). Action keys: `format`, `keyPressed`, `validate`.

```typescript
import {PdfDocument, PdfPage, PdfTextBoxField, PdfJavaScriptAction} from '@syncfusion/ej2-pdf';

let document: PdfDocument = new PdfDocument();
let page: PdfPage = document.addPage();
let field: PdfTextBoxField = new PdfTextBoxField(page, 'DateField', { x: 50, y: 200, width: 150, height: 20 });
const format: string = 'yyyy-mm-dd';
field.actions.format = new PdfJavaScriptAction(`AFDate_FormatEx("${format}");`);
field.actions.keyPressed = new PdfJavaScriptAction(`AFDate_KeystrokeEx("${format}");`);
field.actions.validate = new PdfJavaScriptAction(`AFDate_Validate("${format}");`);
document.form.add(field);
document.save('output.pdf');
document.destroy();
```

### Barcode Field

*Source: UG "Adding the barcode field".* `PdfBarcodeField` builds a PDF417 (default), QR or Data Matrix barcode from the values of other form fields (`fields`), updated in viewers that support form calculations.

```typescript
import {PdfDocument, PdfPage, PdfTextBoxField, PdfBarcodeField, PdfBarcodeSymbology, PdfBarcodeValueFormat, PdfQRErrorCorrectionLevel} from '@syncfusion/ej2-pdf';

let document: PdfDocument = new PdfDocument();
let page: PdfPage = document.addPage();
let textBox: PdfTextBoxField = new PdfTextBoxField(page, 'EmployeeId', { x: 50, y: 600, width: 200, height: 22 });
textBox.text = 'EMP-1001';
document.form.add(textBox);
let barcode: PdfBarcodeField = new PdfBarcodeField(page, 'EmployeeBarcode', { x: 50, y: 400, width: 150, height: 150 }, {
  fields: ['EmployeeId'],
  valueFormat: PdfBarcodeValueFormat.TabDelimited,
  caption: 'Employee',
  barcodeOptions: { symbology: PdfBarcodeSymbology.QR, xDimention: 4, errorCorrectionLevel: PdfQRErrorCorrectionLevel.Medium }
});
document.form.add(barcode);
document.save('output.pdf');
document.destroy();
```

- `valueFormat`: `TabDelimited`, `XML`, or `CustomScript` (with `customCalculationScript`). Also `includeFieldNames`, `caption`; read the payload with `field.text` and referenced names with `field.fields`.
- Referenced values: text box `text`; combo/list box `selectedValue`; radio button selected item value; check box `exportValue` when checked, else `Off`; button `text`. Unknown names or other field types contribute an empty value.
- Note the option name is spelled `xDimention` in this API.

## Filling Forms

### Text Box

```typescript
let document: PdfDocument = new PdfDocument(data);
let field: PdfTextBoxField = document.form.fieldAt(0) as PdfTextBoxField;
field.text = 'Syncfusion';
field.textAlignment = PdfTextAlignment.center;
document.save('Output.pdf');
document.destroy();
```

### Combo Box

```typescript
let field: PdfComboBoxField = document.form.fieldAt(0) as PdfComboBoxField;
field.selectedIndex = 2;
```

### Radio Button

```typescript
let field: PdfRadioButtonListField = document.form.fieldAt(0) as PdfRadioButtonListField;
field.selectedIndex = 2;
```

### Check Box

```typescript
let field: PdfCheckBoxField = document.form.fieldAt(0) as PdfCheckBoxField;
field.checked = true;
```

## Modifying Fields

### Updating Properties

```typescript
let document: PdfDocument = new PdfDocument(data);
let field: PdfTextBoxField = document.form.fieldAt(0) as PdfTextBoxField;
field.text = 'Updated Value';
field.readOnly = true;
document.save('Output.pdf');
document.destroy();
```

## Form Operations

### Field Auto Naming

```typescript
let document: PdfDocument = new PdfDocument();
document.form.fieldAutoNaming = true;
// Fields with same name get unique internal names
```

### Ordering Fields

```typescript
import {PdfDocument, PdfFormFieldsTabOrder} from '@syncfusion/ej2-pdf';

let document: PdfDocument = new PdfDocument(data);
document.form.orderFormFields(PdfFormFieldsTabOrder.row);
document.save('output.pdf');
document.destroy();
```

### Removing Fields

```typescript
let document: PdfDocument = new PdfDocument(data);
let field: PdfField = document.form.fieldAt(0);
document.form.removeField(field);
document.save('Output.pdf');
document.destroy();
```

### Read-Only Fields

Set `field.readOnly = true` on a field from `document.form.fieldAt(index)` before `document.save()` to persist it.

### Flattening Forms

```typescript
let document: PdfDocument = new PdfDocument(data);
let field: PdfField = document.form.fieldAt(0);
field.flatten = true;
document.save('Output.pdf');
document.destroy();
```

### Import/Export Data

```typescript
import {PdfDocument, DataFormat} from '@syncfusion/ej2-pdf';

// Import
let document: PdfDocument = new PdfDocument(data);
document.importFormData(fdfData, DataFormat.fdf);

// Export
let settings = new PdfFormFieldExportSettings();
settings.dataFormat = DataFormat.json;
document.exportFormData('formData.json', settings);
document.destroy();
```

## Best Practices

1. **Field Naming**: Use descriptive, unique names
2. **Validation**: Implement client-side validation with JavaScript actions
3. **Tab Order**: Set logical tab order for better UX
4. **Default Values**: Provide sensible defaults where appropriate
5. **Required Fields**: Clearly mark required fields
6. **Auto-Naming**: Enable for dynamic field generation

## Common Gotchas

1. **Name Uniqueness**: Duplicate names create field groups
2. **Coordinate System**: Remember bottom-left origin
3. **Font Embedding**: Embed fonts for consistent rendering
4. **Read-Only vs Flattened**: Read-only preserves structure, flattened converts to content
5. **Field Bounds**: Ensure adequate space for content
6. **Type Casting**: Cast to specific field type when accessing

## Related References

- [Digital Signatures](./digital-signatures.md) - Signing documents
- [Annotations](./annotations.md) - Form annotations
- [Text Rendering](./text-rendering.md) - Text formatting
