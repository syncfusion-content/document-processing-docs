# Content Controls

> Content controls — block and inline content controls, types (rich text, plain text, checkbox, date picker, dropdown, picture), properties, protection, form filling, XML mapping.

---

## Required common usings

```java
import com.syncfusion.docio.*;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.nio.file.Paths;
import com.syncfusion.javahelper.system.drawing.ColorSupport;
```

## Block Content Control

### Add Block Content Control
```java
WordDocument document = new WordDocument();
IWSection section = document.addSection();
WTextBody textBody = section.getBody();

// Add block content control
BlockContentControl blockControl =
    (BlockContentControl) textBody.addBlockContentControl(ContentControlType.RichText);

//Sets title of the block content control.
blockControl.getContentControlProperties().setTitle("Rich text content control");

// Add paragraph
WParagraph para = blockControl.getTextBody().addParagraph();
para.appendText("Block content control content");

// Add table
WTable table = blockControl.getTextBody().addTable();
table.resetCells(2, 3);

// Add image
WParagraph imagePara = (WParagraph)blockControl.getTextBody().addParagraph();
imagePara.appendPicture(new FileInputStream("Image.png"));
```

### Find and Replace Content inside Block Content Control

#### Find first occurrence using string
```java
// Add block content control
BlockContentControl blockControl = (BlockContentControl)textBody.addBlockContentControl(ContentControlType.RichText);
// Add paragraph
WParagraph para = (WParagraph)blockControl.getTextBody().addParagraph();
para.appendText("{Block-content-control-content}");
TextSelection sel = blockControl.find("{find-text}", false, true);
if (sel != null) {
    WTextRange range = sel.getAsOneRange();
    range.setText("{new-text}"); // optional inline replace
}
```

#### Find first occurrence using Regex
```java
import java.util.regex.Pattern;

Pattern pattern = Pattern.compile("{pattern}");
TextSelection sel = blockControl.find(pattern);
```

#### Replace all occurrences (string → string)
```java
blockControl.replace("{find-text}", "{replace-text}", false, false);
```

#### Replace all occurrences (Regex → string)
```java
import java.util.regex.Pattern;

blockControl.replace(Pattern.compile("{pattern}"), "{replace-text}");
```

#### Replace using selected content (keeps formatting)
```java
import java.util.regex.Pattern;

TextSelection replacement =
blockControl.find(Pattern.compile("{replacement-pattern}"));
if (replacement != null) {
    blockControl.replace("{find-text}", replacement, false, false, true);
}
```

---

## Inline Content Control

### Add Inline Content Control
```java
WordDocument document = new WordDocument();
document.ensureMinimal();

WParagraph paragraph = document.getLastParagraph();
paragraph.appendText("Text before control ");

// Add inline content control
InlineContentControl inlineControl = (InlineContentControl) paragraph.appendInlineContentControl(ContentControlType.RichText);
WTextRange textRange = new WTextRange(document);
textRange.setText("Inline content control text");
inlineControl.getParagraphItems().add(textRange);
```

---

## Content Control Types

### Rich Text
```java
InlineContentControl richText = (InlineContentControl) para.appendInlineContentControl(ContentControlType.RichText);

WTextRange text = new WTextRange(document);
text.setText("Rich text content");
richText.getParagraphItems().add(text);

WPicture picture = new WPicture(document);
// Cross-platform: load from stream
try (FileInputStream fis = new FileInputStream("image.png")) {
    picture.loadImage(fis);
}
richText.getParagraphItems().add(picture);
```

### Plain Text
```java
InlineContentControl plainText = (InlineContentControl) para.appendInlineContentControl(ContentControlType.Text);
WTextRange text = new WTextRange(document);
text.setText("Plain text only");
plainText.getParagraphItems().add(text);
// Enables multiline for plain text control
plainText.getContentControlProperties().setMultiline(true);
```

### Check Box
```java
InlineContentControl checkBox = (InlineContentControl)paragraph.appendInlineContentControl(ContentControlType.CheckBox);
checkBox.getContentControlProperties().setIsChecked(true);
```

#### Apply checkbox state properties
```java
InlineContentControl checkbox = (InlineContentControl)para.appendInlineContentControl(ContentControlType.CheckBox);
// Get checked state of checkbox
CheckBoxState checkBoxCheckedState = checkbox.getContentControlProperties().getCheckedState();
// Set font for checked state value
checkBoxCheckedState.setFont("Calibri");
// Set symbol for checked state value
checkBoxCheckedState.setValue("C");
// Get unchecked state of checkbox
CheckBoxState checkBoxUncheckedState = checkbox.getContentControlProperties().getUncheckedState();
// Set font for unchecked state value
checkBoxUncheckedState.setFont("Calibri");
// Set symbol for unchecked state value
checkBoxUncheckedState.setValue("U");
// Set the state for checkbox
checkbox.getContentControlProperties().setChecked(true);
```

#### Placeholders
- `"Calibri"` → Replace with `{font-name}`
- `C` and `U` → Replace with `{checked-state-value}` and `{unchecked-state-value}`


### Date Picker
```java
WParagraph para = document.getLastParagraph();

InlineContentControl datePicker = (InlineContentControl) para.appendInlineContentControl(ContentControlType.Date);
WTextRange text = new WTextRange(document);
text.setText(LocalDateTime.now().toString());
datePicker.getParagraphItems().add(text);

datePicker.getContentControlProperties().setDateCalendarType(CalendarType.Gregorian);
datePicker.getContentControlProperties().setDateDisplayFormat("M/d/yyyy");
datePicker.getContentControlProperties().setDateDisplayLocale(LocaleIDs.en_US);
//Sets the storage format used in document XML.
datePicker.getContentControlProperties().setDateStorageFormat(ContentControlDateStorageFormat.DateStorageDate);
```

#### DateStorageFormat Options
- **DateStorageDate** — Stores only the date value in the document XML
- **DateStorageDateTime** — Stores both the date and time value in the document XML
- **DateStorageText** — Stores the value as plain text in the document XML

### Dropdown List
```java
InlineContentControl dropdown = (InlineContentControl) para.appendInlineContentControl(ContentControlType.DropDownList);

WTextRange text = new WTextRange(document);
text.setText("Choose an item");
dropdown.getParagraphItems().add(text);

ContentControlListItem item = new ContentControlListItem();
item.setDisplayText("Option 1");
item.setValue("1");
dropdown.getContentControlProperties().getContentControlListItems().add(item);

item = new ContentControlListItem();
item.setDisplayText("Option 2");
item.setValue("2");
dropdown.getContentControlProperties().getContentControlListItems().add(item);
```

### Combo Box
```java
InlineContentControl comboBox = (InlineContentControl) para.appendInlineContentControl(ContentControlType.ComboBox);

// Similar to dropdown but allows custom values
ContentControlListItem item = new ContentControlListItem();
item.setDisplayText("Predefined 1");
item.setValue("1");
// Add the list item to the combo box
comboBox.getContentControlProperties().getContentControlListItems().add(item);
```

### Picture
```java
InlineContentControl pictureContentControl = (InlineContentControl)paragraph.appendInlineContentControl(ContentControlType.Picture);
//Creates a new image instance and load image.
WPicture picture = new WPicture(document);
picture.loadImage(new FileInputStream("Image.png"));
//Adds picture to the picture content control.
pictureContentControl.getParagraphItems().add(picture);
```

---

## Content Control Properties

### Set Common Properties
```java
InlineContentControl control = (InlineContentControl) para.appendInlineContentControl(ContentControlType.RichText);
control.getContentControlProperties().setAppearance(ContentControlAppearance.BoundingBox);

// Set title and tag
control.getContentControlProperties().setTitle("MyControl");
control.getContentControlProperties().setTag("ControlTag");

// Set color (choose the appropriate Color class for your environment)
// Syncfusion variant
control.getContentControlProperties().setColor(ColorSupport.fromName("Blue"));
// AWT/Java variant
control.getContentControlProperties().setColor(ColorSupport.fromName("Blue"));

// Lock/protect
control.getContentControlProperties().setLockContentControl(true); // Prevent deletion
control.getContentControlProperties().setLockContents(true);        // Prevent editing
control.getContentControlProperties().setIsTemporary(false);       // Remove on edit

// Get control type
ContentControlType type = control.getContentControlProperties().getType();

// Check whether the placeholder text for the content control is displayed or not
boolean hasPlaceholder = control.getContentControlProperties().hasPlaceHolderText();
```

### Appearance Options
- **BoundingBox** — Display within a box
- **Tags** — Display within tags
- **Hidden** — Display without box or tags

---

## Protect Content Control

### Lock Content for Protection

#### Common for Cross-Platform and Windows-Specific
```java
InlineContentControl control = (InlineContentControl) para.appendInlineContentControl(ContentControlType.RichText);

// Create a text run and set its text
WTextRange text = new WTextRange(document);
text.setText("Protected content");
// Add the text to the content control's paragraph items
control.getParagraphItems().add(text);
// Prevent editing
control.getContentControlProperties().setLockContents(true);
// Prevent deletion
control.getContentControlProperties().setLockContentControl(true);
// Set title and tag
control.getContentControlProperties().setTitle("Protected");
control.getContentControlProperties().setTag("ReadOnly");
```

---

## XML Mapping (Data Binding)

### Map Content Control to XML
```java
WordDocument document = new WordDocument();
IWSection section = document.addSection();
IWParagraph para = section.addParagraph();

CustomXMLPart xmlPart = new CustomXMLPart(document);
xmlPart.loadXML("<data><name>John Doe</name><email>john@example.com</email></data>");

// Add content control with XML mapping
para.appendText("Name: ");
InlineContentControl control = (InlineContentControl) para.appendInlineContentControl(ContentControlType.Text);
control.getContentControlProperties().getXmlMapping().setMapping("/data/name", "", xmlPart);
para = section.addParagraph();
para.appendText("Email: ");
control = (InlineContentControl) para.appendInlineContentControl(ContentControlType.Text);
CustomXMLNode node = xmlPart.selectSingleNode("/data/email");
control.getContentControlProperties().getXmlMapping().setMappingByNode(node);
```

---

## Edit Content Control

### Modify Inline Content Control Text
```java
// Iterate paragraphs to find and edit content control
for (int s = 0; s < document.getSections().getCount(); s++) {
    WSection section = document.getSections().get(s);
    iterateTextBody(section.getBody());
}

private static void iterateTextBody(WTextBody textBody) throws Exception {
    for (int i = 0; i < textBody.getChildEntities().getCount(); i++) {
        Entity entity = textBody.getChildEntities().get(i);

        if (entity.getEntityType() == EntityType.Paragraph) {
            WParagraph para = (WParagraph) entity;
            iterateParagraph(para.getItems());
        } else if (entity.getEntityType() == EntityType.Table) {
            iterateTable((WTable) entity);
        } else if (entity.getEntityType() == EntityType.BlockContentControl) {
            iterateTextBody(((BlockContentControl) entity).getTextBody());
        }
    }
}

private static void iterateParagraph(ParagraphItemCollection items) throws Exception {
    for (int i = 0; i < items.getCount(); i++) {
        Entity item = items.get(i);

        if (item.getEntityType() == EntityType.InlineContentControl) {
            InlineContentControl control = (InlineContentControl) item;
            if ("TargetControl".equals(control.getContentControlProperties().getTitle())) {
                editContentControl(control, "New Text");
            }
        }
    }
}

private static void editContentControl(InlineContentControl control, String newText) throws Exception {
    WCharacterFormat charFormat = null;
    for (int i = 0; i < control.getParagraphItems().getCount(); i++) {
        ParagraphItem item = control.getParagraphItems().get(i);
        if (item instanceof WTextRange) {
            charFormat = ((WTextRange) item).getCharacterFormat();
            break;
        }
    }

    control.getParagraphItems().clear();

    WTextRange textRange = new WTextRange(control.getDocument());
    textRange.setText(newText);
    if (charFormat != null) {
        textRange.applyCharacterFormat(charFormat);
    }
    control.getParagraphItems().add(textRange);
}

private static void iterateTable(WTable table) throws Exception {
    for (int r = 0; r < table.getRows().getCount(); r++) {
        WTableRow row = table.getRows().get(r);
        for (int c = 0; c < row.getCells().getCount(); c++) {
            WTableCell cell = row.getCells().get(c);
            iterateTextBody(cell);
        }
    }
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
