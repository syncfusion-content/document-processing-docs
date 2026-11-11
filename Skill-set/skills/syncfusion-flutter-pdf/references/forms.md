# Forms (AcroForm)

> Create and manage interactive AcroForm fields in PDF documents: text boxes, combo boxes, radio buttons, list boxes, check boxes, signature fields, and buttons. Supports fill, modify, flatten, import/export (FDF/XFDF/JSON/XML).

---

## Add a Text Box Field

```dart
//Create a new PDF document
final PdfDocument document = PdfDocument();

//Add a text box form field
document.form.fields.add(PdfTextBoxField(
    document.pages.add(), 'TextBox', Rect.fromLTWH(100, 20, 200, 20),
    text: 'Type here',
    font: PdfStandardFont(PdfFontFamily.courier, 12),
    isPassword: false,
    spellCheck: true,
    backColor: PdfColor(0, 255, 0),
    borderColor: PdfColor(255, 0, 0),
    foreColor: PdfColor(0, 0, 255)));

File('output.pdf').writeAsBytesSync(await document.save());
document.dispose();
```

---

## Add a Combo Box Field

```dart
document.form.fields.add(PdfComboBoxField(
    document.pages.add(), 'comboBox', Rect.fromLTWH(100, 100, 200, 20),
    font: PdfStandardFont(PdfFontFamily.helvetica, 12),
    alignment: PdfTextAlignment.right,
    editable: true,
    selectedValue: 'Language 2',
    items: [
        PdfListFieldItem('Tamil', 'Language 1'),
        PdfListFieldItem('English', 'Language 2'),
        PdfListFieldItem('French', 'Language 3')
    ]));
```

---

## Add a Radio Button Field

```dart
document.form.fields.add(PdfRadioButtonListField(
    document.pages.add(),
    'Gender',
    items: <PdfRadioButtonListItem>[
      PdfRadioButtonListItem('Male', Rect.fromLTWH(100, 150, 35, 35),
          style: PdfCheckBoxStyle.diamond,
          highlightMode: PdfHighlightMode.push,
          foreColor: PdfColor(0, 255, 0),
          borderWidth: 3),
      PdfRadioButtonListItem('Female', Rect.fromLTWH(100, 200, 35, 35),
          highlightMode: PdfHighlightMode.outline,
          backColor: PdfColor(153, 12, 102),
          foreColor: PdfColor(0, 255, 0),
          borderWidth: 2),
      PdfRadioButtonListItem('Others', Rect.fromLTWH(100, 250, 35, 35),
          highlightMode: PdfHighlightMode.outline,
          borderStyle: PdfBorderStyle.dot,
          borderColor: PdfColor(230, 0, 172),
          foreColor: PdfColor(0, 255, 0),
          borderWidth: 1)
    ],
    selectedIndex: 0));
```

---

## Add a List Box Field

```dart
document.form.fields.add(PdfListBoxField(
    document.pages.add(), 'listBox', Rect.fromLTWH(100, 100, 100, 50),
    alignment: PdfTextAlignment.center,
    items: [
      PdfListFieldItem('Tamil', 'Language 1'),
      PdfListFieldItem('English', 'Language 2'),
      PdfListFieldItem('French', 'Language 3')
    ],
    selectedValues: ['Tamil']));

document.form.setDefaultAppearance(true);
```

---

## Add a Check Box Field

```dart
document.form.fields.add(PdfCheckBoxField(
    document.pages.add(), 'CheckBox', Rect.fromLTWH(100, 200, 70, 45),
    highlightMode: PdfHighlightMode.push,
    borderStyle: PdfBorderStyle.dot,
    borderColor: PdfColor(230, 0, 172),
    backColor: PdfColor(153, 255, 102),
    foreColor: PdfColor(255, 153, 0),
    borderWidth: 1,
    style: PdfCheckBoxStyle.diamond,
    isChecked: true));
```

---

## Add a Signature Field

```dart
document.form.fields.add(PdfSignatureField(
    document.pages.add(), 'Sign',
    bounds: Rect.fromLTWH(100, 100, 100, 50)));
```

---

## Add a Button Field with Action

```dart
document.form.fields.add(PdfButtonField(
    document.pages.add(), 'Button', Rect.fromLTWH(10, 10, 130, 40),
    text: 'Submit',
    font: PdfStandardFont(PdfFontFamily.timesRoman, 14),
    backColor: PdfColor(0, 255, 120),
    borderColor: PdfColor(255, 131, 0),
    foreColor: PdfColor(201, 130, 255),
    highlightMode: PdfHighlightMode.push,
    borderWidth: 5,
    borderStyle: PdfBorderStyle.dashed)
  ..addPrintAction());
```

---

## Fill Form Fields in an Existing PDF

```dart
final PdfDocument document =
    PdfDocument(inputBytes: File('input.pdf').readAsBytesSync());

//Fill text box
(document.form.fields[0] as PdfTextBoxField).text = 'Updated Text';

//Check a check box
(document.form.fields[1] as PdfCheckBoxField).isChecked = true;

//Select radio button
final PdfField radio = document.form.fields[2];
if (radio is PdfRadioButtonListField) {
  radio.selectedValue = radio.items[1].value;
}

//Select combo box
final PdfField combo = document.form.fields[3];
if (combo is PdfComboBoxField && combo.selectedIndex != 1) {
  combo.selectedValue = combo.items[1].value;
}

//Select list box items
(document.form.fields[4] as PdfListBoxField).selectedIndexes = [1, 3];

File('output.pdf').writeAsBytesSync(await document.save());
document.dispose();
```

---

## Enumerate All Form Fields

```dart
for (int i = 0; i < document.form.fields.count; i++) {
  PdfField field = document.form.fields[i];
  if (field is PdfTextBoxField) {
    field.text = 'Auto-filled';
  }
}
```

---

## Modify an Existing Form Field

```dart
final PdfField field = document.form.fields[0];
if (field is PdfTextBoxField) {
  field.multiline = false;
  field.isPassword = false;
  field.text = 'New Text';
  field.maxLength = 0;
  field.spellCheck = false;
  field.defaultValue = 'Default';
  field.scrollable = false;
  field.canExport = true;
  field.tabIndex = 1;
}
```

---

## Flatten All Form Fields

```dart
final PdfDocument document =
    PdfDocument(inputBytes: File('input.pdf').readAsBytesSync());

(document.form.fields[0] as PdfTextBoxField).text = 'Final value';
document.form.flattenAllFields();
```

---

## Set Form as Read-Only

```dart
final PdfDocument document =
    PdfDocument(inputBytes: File('input.pdf').readAsBytesSync())
      ..form.readOnly = true;
```

---

## Remove Form Fields

```dart
final PdfDocument document =
    PdfDocument(inputBytes: File('input.pdf').readAsBytesSync());

PdfFormFieldCollection collection = document.form.fields;

//Remove by index
collection.removeAt(1);

//Remove by reference
collection.remove(collection[0]);
```

---

## Set Default Appearance

```dart
final PdfDocument document =
    PdfDocument(inputBytes: File('input.pdf').readAsBytesSync());

document.form.setDefaultAppearance(true);
(document.form.fields[0] as PdfTextBoxField).text = 'Visible text';

File('output.pdf').writeAsBytesSync(await document.save());
document.dispose();
```

---

## Auto Naming of Form Fields

```dart
final PdfDocument document = PdfDocument();

document.form.fieldAutoNaming = true;

document.form.fields.add(PdfTextBoxField(
    document.pages.add(), 'TextBox', Rect.fromLTWH(100, 20, 200, 20),
    text: 'First name'));
document.form.fields.add(PdfTextBoxField(
    document.pages[0], 'TextBox', Rect.fromLTWH(100, 50, 200, 20),
    text: 'Last name'));

File('output.pdf').writeAsBytesSync(await document.save());
document.dispose();
```

---

## Import Form Data (FDF / XFDF / JSON / XML)

```dart
final PdfDocument document =
    PdfDocument(inputBytes: File('input.pdf').readAsBytesSync());

//Import FDF
document.form.importData(
    File('Import.fdf').readAsBytesSync(), DataFormat.fdf);

//Import XFDF
document.form.importData(
    File('Import.xfdf').readAsBytesSync(), DataFormat.xfdf);

//Import JSON
document.form.importData(
    File('Import.json').readAsBytesSync(), DataFormat.json);
document.form.setDefaultAppearance(true);

//Import XML
document.form.importData(
    File('Import.xml').readAsBytesSync(), DataFormat.xml);

File('output.pdf').writeAsBytesSync(await document.save());
document.dispose();
```

---

## Export Form Data (FDF / XFDF / JSON / XML)

```dart
PdfDocument document =
    PdfDocument(inputBytes: File('input.pdf').readAsBytesSync());

//Export to FDF
File('Export.fdf').writeAsBytesSync(document.form.exportData(DataFormat.fdf));

//Export to XFDF
File('Export.xfdf').writeAsBytesSync(document.form.exportData(DataFormat.xfdf));

//Export to JSON
File('Export.json').writeAsBytesSync(document.form.exportData(DataFormat.json));

//Export to XML
File('Export.xml').writeAsBytesSync(document.form.exportData(DataFormat.xml));

document.dispose();
```

---

## Form Field Classes Reference

| Class | Field Type |
|---|---|
| `PdfTextBoxField` | Single-line or multi-line text input |
| `PdfComboBoxField` | Drop-down selection (optionally editable) |
| `PdfRadioButtonListField` | Group of radio buttons |
| `PdfListBoxField` | Scrollable list with single/multi-select |
| `PdfCheckBoxField` | Check box (checked / unchecked) |
| `PdfSignatureField` | Digital signature placement area |
| `PdfButtonField` | Push button with actions (submit, print, etc.) |

---

## Notes

- Use `document.form.setDefaultAppearance(true)` to ensure field values appear in all viewers.
- `flattenAllFields()` makes the form non-editable by converting fields to static graphics.
- `form.readOnly = true` prevents editing without altering the visual appearance.
- Import/export supports FDF, XFDF, JSON, and XML data formats.
- Units are in **points** (1 inch = 72 points).