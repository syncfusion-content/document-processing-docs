# Content Controls

> Content controls — block and inline content controls, types (rich text, plain text, checkbox, date picker, dropdown, picture), properties, protection, form filling, XML mapping.

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

## Block Content Control

### Add Block Content Control
```csharp
WordDocument document = new WordDocument();
IWSection section = document.AddSection();
WTextBody textBody = section.Body;

// Add block content control
BlockContentControl blockControl = textBody.AddBlockContentControl(ContentControlType.RichText) as BlockContentControl;

//Sets title of the block content control.
blockControl.ContentControlProperties.Title = "Rich text content control";

// Add paragraph
WParagraph para = blockControl.TextBody.AddParagraph() as WParagraph;
para.AppendText("Block content control content");

// Add table
WTable table = blockControl.TextBody.AddTable() as WTable;
table.ResetCells(2, 3);

// Add image
// Cross-Platform
FileStream imageStream = new FileStream("image.png", FileMode.Open, FileAccess.Read);
// Common for Cross-Platform and Windows-Specific
WParagraph imagePara = blockControl.TextBody.AddParagraph() as WParagraph;
// Cross-Platform
imagePara.AppendPicture(imageStream);
// Windows-Specific
imagePara.AppendPicture(Image.FromFile("Image.png"));
```

### Find and Replace Content inside Block Content Control

#### Find first occurrence using string
```csharp
// Add block content control
BlockContentControl blockControl = textBody.AddBlockContentControl(ContentControlType.RichText) as BlockContentControl;
// Add paragraph
WParagraph para = blockControl.TextBody.AddParagraph() as WParagraph;
para.AppendText("{Block-content-control-content}");
TextSelection sel = blockControl.Find("{find-text}", caseSensitive: false, wholeWord: true);
if (sel != null)
{
    WTextRange r = sel.GetAsOneRange();
    r.Text = "{new-text}"; // optional inline replace
}
```

#### Find first occurrence using Regex
```csharp
var sel = blockControl.Find(new System.Text.RegularExpressions.Regex(@"{pattern}"));
```

#### Replace all occurrences (string → string)
```csharp
blockControl.Replace("{find-text}", "{replace-text}", caseSensitive: false, wholeWord: false);
```

#### Replace all occurrences (Regex → string)
```csharp
blockControl.Replace(new System.Text.RegularExpressions.Regex(@"{pattern}"), "{replace-text}");
```

#### Replace using selected content (keeps formatting)
```csharp
TextSelection replacement = blockControl.Find(new System.Text.RegularExpressions.Regex(@"{replacement-pattern}"));
if (replacement != null)
    blockControl.Replace("{find-text}", replacement, caseSensitive: false, wholeWord: false, saveFormatting: true);
```

---

## Inline Content Control

### Add Inline Content Control
```csharp
WordDocument document = new WordDocument();
document.EnsureMinimal();

WParagraph paragraph = document.LastParagraph;
paragraph.AppendText("Text before control ");

// Add inline content control
InlineContentControl inlineControl = paragraph.AppendInlineContentControl(ContentControlType.RichText) as InlineContentControl;
WTextRange textRange = new WTextRange(document);
textRange.Text = "Inline content control text";
inlineControl.ParagraphItems.Add(textRange);
```

---

## Content Control Types

### Rich Text
```csharp
InlineContentControl richText = para.AppendInlineContentControl(ContentControlType.RichText) as InlineContentControl;
WTextRange text = new WTextRange(document);
text.Text = "Rich text content";
richText.ParagraphItems.Add(text);

// Can contain text, images, tables
WPicture picture = new WPicture(document);
// Cross-Platform
picture.LoadImage(new FileStream("image.png", FileMode.Open));
// Windows-Specific
picture.LoadImage(Image.FromFile("Image.png"));
richText.ParagraphItems.Add(picture);
```

### Plain Text
```csharp
InlineContentControl plainText = para.AppendInlineContentControl(ContentControlType.Text) as InlineContentControl;
WTextRange text = new WTextRange(document);
text.Text = "Plain text only";
plainText.ParagraphItems.Add(text);
//Enables multiline for plain text control.
plainText.ContentControlProperties.Multiline = true;
```

### Check Box
```csharp
InlineContentControl checkbox = para.AppendInlineContentControl(ContentControlType.CheckBox) as InlineContentControl;
checkbox.ContentControlProperties.IsChecked = true;
```

#### Apply checkbox state properties
```csharp
InlineContentControl checkbox = para.AppendInlineContentControl(ContentControlType.CheckBox) as InlineContentControl;
//Get checked state of checkbox
CheckBoxState checkBoxCheckedState = checkBox.ContentControlProperties.CheckedState;
//Set font for checked state value
checkBoxCheckedState.Font = "Calibri";
//Set symbol for checked state value
checkBoxCheckedState.Value = "C";
//Get unchecked state of checkbox
CheckBoxState checkBoxUncheckedState = checkBox.ContentControlProperties.UncheckedState;
//Set font for unchecked state value
checkBoxUncheckedState.Font = "Calibri";
//Set symbol for unchecked state value
checkBoxUncheckedState.Value = "U";
//Set the state for checkbox
checkBox.ContentControlProperties.IsChecked = true;
```

#### Placeholders
- `"Calibri"` → Replace with `{font-name}`
- `C` and `U` → Replace with `{checked-state-value}` and `{unchecked-state-value}`

### Date Picker
```csharp
InlineContentControl datePicker = para.AppendInlineContentControl(ContentControlType.Date) as InlineContentControl;
WTextRange text = new WTextRange(document);
text.Text = DateTime.Now.ToString();
datePicker.ParagraphItems.Add(text);
datePicker.ContentControlProperties.DateCalendarType = CalendarType.Gregorian;
datePicker.ContentControlProperties.DateDisplayFormat = "M/d/yyyy";
datePicker.ContentControlProperties.DateDisplayLocale = LocaleIDs.en_US;
//Sets the storage format used in document XML.
datePicker.ContentControlProperties.DateStorageFormat = ContentControlDateStorageFormat.DateStorageDate;
```

#### DateStorageFormat Options
- **DateStorageDate** — Stores only the date value in the document XML
- **DateStorageDateTime** — Stores both the date and time value in the document XML
- **DateStorageText** — Stores the value as plain text in the document XML

### Dropdown List
```csharp
InlineContentControl dropdown = para.AppendInlineContentControl(ContentControlType.DropDownList) as InlineContentControl;
WTextRange text = new WTextRange(document);
text.Text = "Choose an item";
dropdown.ParagraphItems.Add(text);

ContentControlListItem item = new ContentControlListItem();
item.DisplayText = "Option 1";
item.Value = "1";
dropdown.ContentControlProperties.ContentControlListItems.Add(item);

item = new ContentControlListItem();
item.DisplayText = "Option 2";
item.Value = "2";
dropdown.ContentControlProperties.ContentControlListItems.Add(item);
```

### Combo Box
```csharp
InlineContentControl comboBox = para.AppendInlineContentControl(ContentControlType.ComboBox) as InlineContentControl;
// Similar to dropdown but allows custom values
ContentControlListItem item = new ContentControlListItem();
item.DisplayText = "Predefined 1";
item.Value = "1";
comboBox.ContentControlProperties.ContentControlListItems.Add(item);
```

### Picture
```csharp
InlineContentControl pictureControl = para.AppendInlineContentControl(ContentControlType.Picture) as InlineContentControl;
WPicture picture = new WPicture(document);
// Cross-Platform
picture.LoadImage(new FileStream("image.png", FileMode.Open));
// Windows-Specific
picture.LoadImage(Image.FromFile("Image.png"));
pictureControl.ParagraphItems.Add(picture);
```

---

## Content Control Properties

### Set Common Properties
```csharp
InlineContentControl control = para.AppendInlineContentControl(ContentControlType.RichText) as InlineContentControl;

// Set appearance
control.ContentControlProperties.Appearance = ContentControlAppearance.BoundingBox;

// Set title and tag
control.ContentControlProperties.Title = "MyControl";
control.ContentControlProperties.Tag = "ControlTag";

// Set color
// Cross-Platform
control.ContentControlProperties.Color = Syncfusion.Drawing.Color.Blue;
// Cross-Platform
control.ContentControlProperties.Color = System.Drawing.Color.Blue;

// Lock/protect
control.ContentControlProperties.LockContentControl = true;  // Prevent deletion
control.ContentControlProperties.LockContents = true;         // Prevent editing
control.ContentControlProperties.IsTemporary = false;            // Remove on edit

// Get control type
ContentControlType type = control.ContentControlProperties.Type;

// Check whether the placeholder text for the content control is displayed or not
bool hasPlaceholder = control.ContentControlProperties.HasPlaceHolderText;
```

### Appearance Options
- **BoundingBox** — Display within a box
- **Tags** — Display within tags
- **Hidden** — Display without box or tags

---

## Protect Content Control

### Lock Content for Protection

#### Common for Cross-Platform and Windows-Specific
```csharp
InlineContentControl control = para.AppendInlineContentControl(ContentControlType.RichText) as InlineContentControl;
WTextRange text = new WTextRange(document);
text.Text = "Protected content";
control.ParagraphItems.Add(text);

// Prevent editing
control.ContentControlProperties.LockContents = true;

// Prevent deletion
control.ContentControlProperties.LockContentControl = true;

control.ContentControlProperties.Title = "Protected";
control.ContentControlProperties.Tag = "ReadOnly";
```

---

## XML Mapping (Data Binding)

### Map Content Control to XML
```csharp
WordDocument document = new WordDocument();
IWSection section = document.AddSection();
IWParagraph para = section.AddParagraph();

// Add custom XML part
CustomXMLPart xmlPart = new CustomXMLPart(document);
xmlPart.LoadXML(@"<data><name>John Doe</name><email>john@example.com</email></data>");

// Add content control with XML mapping
para.AppendText("Name: ");
InlineContentControl control = para.AppendInlineContentControl(ContentControlType.Text) as InlineContentControl;
control.ContentControlProperties.XmlMapping.SetMapping("/data/name", "", xmlPart);

// Map by node
para = section.AddParagraph();
para.AppendText("Email: ");
control = para.AppendInlineContentControl(ContentControlType.Text) as InlineContentControl;
CustomXMLNode node = xmlPart.SelectSingleNode("/data/email");
control.ContentControlProperties.XmlMapping.SetMappingByNode(node);
```

---

## Edit Content Control

### Modify Inline Content Control Text
```csharp
// Iterate paragraphs to find and edit content control
foreach (WSection section in document.Sections)
{
    IterateTextBody(section.Body);
}

private static void IterateTextBody(WTextBody textBody)
{
    for (int i = 0; i < textBody.ChildEntities.Count; i++)
    {
        IEntity entity = textBody.ChildEntities[i];
        
        if (entity.EntityType == EntityType.Paragraph)
        {
            WParagraph para = entity as WParagraph;
            IterateParagraph(para.Items);
        }
        else if (entity.EntityType == EntityType.Table)
            IterateTable(entity as WTable);
        else if (entity.EntityType == EntityType.BlockContentControl)
            IterateTextBody((entity as BlockContentControl).TextBody);
    }
}

private static void IterateParagraph(ParagraphItemCollection items)
{
    for (int i = 0; i < items.Count; i++)
    {
        Entity item = items[i];
        
        if (item.EntityType == EntityType.InlineContentControl)
        {
            InlineContentControl control = item as InlineContentControl;
            if (control.ContentControlProperties.Title == "TargetControl")
                EditContentControl(control, "New Text");
        }
    }
}

private static void EditContentControl(InlineContentControl control, string newText)
{
    WCharacterFormat charFormat = null;
    foreach (ParagraphItem item in control.ParagraphItems)
    {
        if (item is WTextRange)
        {
            charFormat = (item as WTextRange).CharacterFormat;
            break;
        }
    }
    
    control.ParagraphItems.Clear();
    WTextRange textRange = new WTextRange(control.Document);
    textRange.Text = newText;
    if (charFormat != null)
        textRange.ApplyCharacterFormat(charFormat);
    control.ParagraphItems.Add(textRange);
}

private static void IterateTable(WTable table)
{
    foreach (WTableRow row in table.Rows)
        foreach (WTableCell cell in row.Cells)
            IterateTextBody(cell);
}
```

---

## Placeholders
- `"input.docx"` → Replace with actual document path
- `"output.docx"` → Replace with desired output file name
- `"image.png"` → Replace with actual image file path
- `"/data/name"` → Replace with actual XPath for XML mapping
- `"TargetControl"` → Replace with actual content control title to find/edit
- Content control properties depend on control type (some only available for specific types)

---

## Important Notes
- Content controls only work in Open XML format (DOCX, not DOC)
- Block content controls exist at body level; inline at paragraph level
- Protect document properties before saving to enforce lock
- XML mapping enables two-way data binding
- RowContentControl and CellContentControl not currently supported
