# Form Fields

> All form field operations — creating checkboxes, dropdowns, text input fields, modifying properties, and managing form fields in Word documents.

---

## Required common usings

```java
import com.syncfusion.docio.*;
```

## Checkbox

### Minimal Code

```java
WParagraph para = (WParagraph) section.addParagraph();
para.appendText("Gender\t");
WCheckBox checkbox = para.appendCheckBox();
checkbox.setChecked(false);
checkbox.setCheckBoxSize(10f);
```

### With Properties

```java
WParagraph para = section.addParagraph();
para.appendText("Agree to terms\t");
WCheckBox checkbox = para.appendCheckBox();
checkbox.setChecked(false);
checkbox.setCheckBoxSize(12f);
checkbox.setCalculateOnExit(true);
checkbox.setHelp("Check if you agree");
para.appendText("I agree");
```

### Modify Checkbox

```java
WParagraph para = document.getLastParagraph();
for (Object obj : para.getChildEntities()) {
    ParagraphItem item = (ParagraphItem) obj;
    if (item instanceof WCheckBox) {
        WCheckBox checkbox = (WCheckBox) item;
        checkbox.setChecked(true);
        checkbox.setSizeType(CheckBoxSizeType.Exactly);
    }
}
```

### Placeholders
- `checkbox.setCheckBoxSize()` → Replace with `{size-in-points}` (e.g., 8, 10, 12)
- `checkbox.setHelp()` → Replace with `"{help-text}"`

---

## Dropdown

### Minimal Code

```java
WParagraph para = (WParagraph) section.addParagraph();
para.appendText("Select option\t");
WDropDownFormField dropdown = para.appendDropDownFormField();
dropdown.getDropDownItems().add("Option 1");
dropdown.getDropDownItems().add("Option 2");
dropdown.setDropDownSelectedIndex(0);
```

### With Properties

```java
WParagraph para = section.addParagraph();
para.appendText("Education\t");
WDropDownFormField dropdown = para.appendDropDownFormField();
dropdown.getDropDownItems().add("High School");
dropdown.getDropDownItems().add("Bachelor");
dropdown.getDropDownItems().add("Master");
dropdown.setEnabled(true);
dropdown.setDropDownSelectedIndex(1);
dropdown.setCalculateOnExit(true);
```

### Modify Dropdown

```java
WParagraph lastPara = document.getLastParagraph();
for (Object obj : lastPara.getChildEntities()) {
    ParagraphItem item = (ParagraphItem) obj;
    if (item instanceof WDropDownFormField) {
        WDropDownFormField dropdown = (WDropDownFormField) item;
        // remove item at index 1 (second item)
        dropdown.getDropDownItems().remove(1);
        // select first item
        dropdown.setDropDownSelectedIndex(0);
        // set font
        dropdown.getCharacterFormat().setFontName("Arial");
    }
}
```

### Placeholders
- `dropdown.getDropDownItems().Add()` → Replace with `"{item-text}"`
- `dropdown.setDropDownSelectedIndex()` → Replace with `{index}` (0-based)

---

## Text Form Field

### Minimal Code

```java
WParagraph para = section.addParagraph();
para.appendText("Full Name\t");
WTextFormField textField = para.appendTextFormField(null);
textField.setType(TextFormFieldType.RegularText);
```

### With Default Text

```java
WParagraph para = (WParagraph) section.addParagraph();
WTextRange text = (WTextRange) para.appendText("Name\t");
text.getCharacterFormat().setBold(true);
// Append a named text form field with default text
WTextFormField textField = para.appendTextFormField("Name", "Enter full name");
textField.setType(TextFormFieldType.RegularText);
textField.getCharacterFormat().setFontName("Calibri");
textField.setCalculateOnExit(true);
```

### Date Text Field

```java
WParagraph para = (WParagraph) section.addParagraph();
para.appendText("Date of Birth\t");
// default value (current date) formatted as MM/dd/yy
String defaultDate = LocalDate.now().format(DateTimeFormatter.ofPattern("MM/dd/yy"));
WTextFormField dateField = para.appendTextFormField("DOB", defaultDate);
dateField.setType(TextFormFieldType.DateText);
dateField.setStringFormat("MM/dd/yy");
dateField.setCalculateOnExit(true);
```

### Number Text Field

```java
WParagraph para = section.addParagraph();
para.appendText("Age\t");
WTextFormField numberField = para.appendTextFormField("Age", "");
numberField.setType(TextFormFieldType.NumberText);
numberField.getCharacterFormat().setFontName("Calibri");
```

### Modify Text Field

```java
for (Object obj : document.getSections()) {
    WSection section = (WSection) obj;
    FormFieldCollection formFields = section.getBody().getFormFields();
    for (int i = 0; i < formFields.getCount(); i++) {
        WFormField formField = (WFormField) formFields.get(i);
        if (formField.getFormFieldType() == FormFieldType.TextInput &&    formField.getName().equals("Text1")) {
            WTextFormField textField = (WTextFormField) formField;
            if (textField.getType() == TextFormFieldType.DateText) {
                textField.setType(TextFormFieldType.RegularText);
                textField.setStringFormat("");
                textField.setDefaultText("Enter text");
                textField.setCalculateOnExit(false);
				textField.setText("Updated text value");
            }
        }
    }
}
```

### Placeholders
- `textField.getType` → Replace with `TextFormFieldType.RegularText`, `TextFormFieldType.DateText`, or `TextFormFieldType.Number`
- `textField.setStringFormat` → Replace with `"{format}"` (e.g., "MM/DD/YY", "0.00")
- `textField.setDefaultText` → Replace with `"{default-text}"`
- `"Text1"` → Replace with `"{form-field-bookmark-name}"`
- `textField.setText` → Use to get or set the current value of the text form field

---

## Complete Example

### Full Workflow

```java
WordDocument document = new WordDocument();
WSection section = document.addSection();

// Title
WParagraph title = section.addParagraph();
title.appendText("Employee Application Form");
title.applyStyle(BuiltinStyle.Heading1);
section.addParagraph();

// Full Name
WParagraph para = section.addParagraph();
WTextRange text = para.appendText("Full Name\t");
text.getCharacterFormat().setBold(true);
WTextFormField nameField = para.appendTextFormField(null);
nameField.setType(TextFormFieldType.RegularText);

// Email
para = section.addParagraph();
text = para.appendText("Email\t");
text.getCharacterFormat().setBold(true);
WTextFormField emailField = para.appendTextFormField(null);
emailField.setType(TextFormFieldType.RegularText);

section.addParagraph();

// Department (dropdown)
para = section.addParagraph();
text = para.appendText("Department\t");
text.getCharacterFormat().setBold(true);
WDropDownFormField deptField = para.appendDropDownFormField();
deptField.getDropDownItems().add("Engineering");
deptField.getDropDownItems().add("Sales");
deptField.getDropDownItems().add("HR");
deptField.setDropDownSelectedIndex(0);

section.addParagraph();

// Checkbox (agreement)
para = section.addParagraph();
WCheckBox checkbox = para.appendCheckBox();
checkbox.setCheckBoxSize(10f);
checkbox.setDefaultCheckBoxValue(true);
para.appendText("I agree to the terms and conditions");

// Save document
Path outDir = Paths.get(System.getProperty("user.dir"), "output");
Files.createDirectories(outDir);
Path outPath = outDir.resolve("FormDocument.docx");
try (FileOutputStream stream = new FileOutputStream(outPath.toFile())) {
    document.save(stream, FormatType.Docx);
}

document.close();
```

---

## Form Field Types

| Type | Class | Purpose |
|------|-------|---------|
| Checkbox | `WCheckBox` | Binary selection (checked/unchecked) |
| Dropdown | `WDropDownFormField` | Select from predefined list |
| Text Input | `WTextFormField` | Enter regular, date, or number text |

---

## Common Properties

| Property | Type | Description |
|----------|------|-------------|
| `Checked` (Checkbox) | bool | Checkbox checked state |
| `CheckBoxSize` | int | Size in points |
| `SizeType` | CheckBoxSizeType | Fixed size or auto |
| `DefaultCheckBoxValue` (Checkbox) | bool | Specifies whether the checkbox is checked by default |
| `Help` | string | Help text on focus |
| `CalculateOnExit` | bool | Trigger calculation when field exits |
| `DropDownItems` | StringCollection | List of dropdown options |
| `DropDownSelectedIndex` | int | Default selected item index (0-based) |
| `Enabled` | bool | Enable/disable field interaction |
| `Type` (TextFormField) | TextFormFieldType | Regular, Date, or Number |
| `StringFormat` | string | Format for date/number fields |
| `DefaultText` | string | Initial text value |
| `CharacterFormat` | ICharacterFormat | Font and text properties |
| `Name` | string | Bookmark name of the form field |
| `Text` (TextFormField) | string | Current value of the text form field |

