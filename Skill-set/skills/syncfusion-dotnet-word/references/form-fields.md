# Form Fields

> All form field operations — creating checkboxes, dropdowns, text input fields, modifying properties, and managing form fields in Word documents.

---

## Required common usings

```csharp
using Syncfusion.DocIO;
using Syncfusion.DocIO.DLS;
```

## Required usings for Windows-Specific

```csharp
using System;
using System.IO;
```

## Checkbox

### Minimal Code

#### Common for Cross-Platform and Windows-Specific
```csharp
WParagraph para = section.AddParagraph() as WParagraph;
para.AppendText("Gender\t");
WCheckBox checkbox = para.AppendCheckBox();
checkbox.Checked = false;
checkbox.CheckBoxSize = 10;
```

### With Properties

#### Common for Cross-Platform and Windows-Specific
```csharp
WParagraph para = section.AddParagraph() as WParagraph;
para.AppendText("Agree to terms\t");
WCheckBox checkbox = para.AppendCheckBox();
checkbox.Checked = false;
checkbox.CheckBoxSize = 12;
checkbox.CalculateOnExit = true;
checkbox.Help = "Check if you agree";
para.AppendText("I agree");
```

### Modify Checkbox

#### Common for Cross-Platform and Windows-Specific
```csharp
foreach (ParagraphItem item in document.LastParagraph.ChildEntities)
{
    if (item is WCheckBox)
    {
        WCheckBox checkbox = item as WCheckBox;
        checkbox.Checked = true;
        checkbox.SizeType = CheckBoxSizeType.Exactly;
    }
}
```

### Placeholders
- `checkbox.CheckBoxSize` → Replace with `{size-in-points}` (e.g., 8, 10, 12)
- `checkbox.Help` → Replace with `"{help-text}"`

---

## Dropdown

### Minimal Code

#### Common for Cross-Platform and Windows-Specific
```csharp
WParagraph para = section.AddParagraph() as WParagraph;
para.AppendText("Select option\t");
WDropDownFormField dropdown = para.AppendDropDownFormField();
dropdown.DropDownItems.Add("Option 1");
dropdown.DropDownItems.Add("Option 2");
dropdown.DropDownSelectedIndex = 0;
```

### With Properties

#### Common for Cross-Platform and Windows-Specific
```csharp
WParagraph para = section.AddParagraph() as WParagraph;
para.AppendText("Education\t");
WDropDownFormField dropdown = para.AppendDropDownFormField();
dropdown.DropDownItems.Add("High School");
dropdown.DropDownItems.Add("Bachelor");
dropdown.DropDownItems.Add("Master");
dropdown.Enabled = true;
dropdown.DropDownSelectedIndex = 1;
dropdown.CalculateOnExit = true;
```

### Modify Dropdown

#### Common for Cross-Platform and Windows-Specific
```csharp
foreach (ParagraphItem item in document.LastParagraph.ChildEntities)
{
    if (item is WDropDownFormField)
    {
        WDropDownFormField dropdown = item as WDropDownFormField;
        dropdown.DropDownItems.Remove(1);
        dropdown.DropDownSelectedIndex = 0;
        dropdown.CharacterFormat.FontName = "Arial";
    }
}
```

### Placeholders
- `dropdown.DropDownItems.Add()` → Replace with `"{item-text}"`
- `dropdown.DropDownSelectedIndex` → Replace with `{index}` (0-based)

---

## Text Form Field

### Minimal Code

#### Common for Cross-Platform and Windows-Specific
```csharp
WParagraph para = section.AddParagraph() as WParagraph;
para.AppendText("Full Name\t");
WTextFormField textField = para.AppendTextFormField(null);
textField.Type = TextFormFieldType.RegularText;
```

### With Default Text

#### Common for Cross-Platform and Windows-Specific
```csharp
WParagraph para = section.AddParagraph() as WParagraph;
var text = para.AppendText("Name\t");
text.CharacterFormat.Bold = true;
WTextFormField textField = para.AppendTextFormField("Name", "Enter full name");
textField.Type = TextFormFieldType.RegularText;
textField.CharacterFormat.FontName = "Calibri";
textField.CalculateOnExit = true;
```

### Date Text Field

#### Common for Cross-Platform and Windows-Specific
```csharp
WParagraph para = section.AddParagraph() as WParagraph;
para.AppendText("Date of Birth\t");
WTextFormField dateField = para.AppendTextFormField("DOB", DateTime.Now.ToString("MM/DD/YY"));
dateField.Type = TextFormFieldType.DateText;
dateField.StringFormat = "MM/DD/YY";
dateField.CalculateOnExit = true;
```

### Number Text Field

#### Common for Cross-Platform and Windows-Specific
```csharp
WParagraph para = section.AddParagraph() as WParagraph;
para.AppendText("Age\t");
WTextFormField numberField = para.AppendTextFormField("Age", "");
numberField.Type = TextFormFieldType.NumberText;
numberField.CharacterFormat.FontName = "Calibri";
```

### Modify Text Field

#### Common for Cross-Platform and Windows-Specific
```csharp
foreach (WSection section in document.Sections)
{
    foreach (WTextBody textBody in section.ChildEntities)
    {
        foreach (WFormField formField in textBody.FormFields)
        {
            if (formField.FormFieldType == FormFieldType.TextInput &&
                 formField.Name == "Text1")
            {
                WTextFormField textField = formField as WTextFormField;
                if (textField.Type == TextFormFieldType.DateText)
                {
                    textField.Type = TextFormFieldType.RegularText;
                    textField.StringFormat = "";
                    textField.DefaultText = "Enter text";
                    textField.CalculateOnExit = false;
                    textField.Text = "Updated text value";
                }
            }
        }
    }
}
```

### Placeholders
- `textField.Type` → Replace with `TextFormFieldType.RegularText`, `TextFormFieldType.DateText`, or `TextFormFieldType.Number`
- `textField.StringFormat` → Replace with `"{format}"` (e.g., "MM/DD/YY", "0.00")
- `textField.DefaultText` → Replace with `"{default-text}"`
- `"Text1"` → Replace with `"{form-field-bookmark-name}"`
- `textField.Text` → Use to get or set the current value of the text form field

---

## Complete Example

### Full Workflow

#### Common for Cross-Platform and Windows-Specific
```csharp
var document = new WordDocument();
var section = document.AddSection();

var title = section.AddParagraph() as WParagraph;
title.AppendText("Employee Application Form");
title.ApplyStyle(BuiltinStyle.Heading1);
section.AddParagraph();

// Text fields
var para = section.AddParagraph() as WParagraph;
var text = para.AppendText("Full Name\t");
text.CharacterFormat.Bold = true;
WTextFormField nameField = para.AppendTextFormField(null);
nameField.Type = TextFormFieldType.RegularText;

para = section.AddParagraph() as WParagraph;
text = para.AppendText("Email\t");
text.CharacterFormat.Bold = true;
WTextFormField emailField = para.AppendTextFormField(null);
emailField.Type = TextFormFieldType.RegularText;

section.AddParagraph();

// Dropdown
para = section.AddParagraph() as WParagraph;
text = para.AppendText("Department\t");
text.CharacterFormat.Bold = true;
WDropDownFormField deptField = para.AppendDropDownFormField();
deptField.DropDownItems.Add("Engineering");
deptField.DropDownItems.Add("Sales");
deptField.DropDownItems.Add("HR");
deptField.DropDownSelectedIndex = 0;

section.AddParagraph();

// Checkbox
para = section.AddParagraph() as WParagraph;
WCheckBox checkbox = para.AppendCheckBox();
checkbox.CheckBoxSize = 10;
checkbox.DefaultCheckBoxValue = true;
para.AppendText("I agree to the terms and conditions");

var outputPath = Path.Combine(Directory.GetCurrentDirectory(), "output", "FormDocument.docx");
var stream = new FileStream(outputPath, FileMode.Create, FileAccess.ReadWrite);
document.Save(stream, FormatType.Docx);
stream.Close();
document.Close();
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

