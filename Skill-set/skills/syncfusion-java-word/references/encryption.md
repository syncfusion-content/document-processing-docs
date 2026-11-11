# Encryption & Document Protection

> Encrypt with password, open encrypted documents, remove encryption, restrict editing, and manage editable ranges.

---

## Required common usings

```java
import com.syncfusion.docio.*;
import java.io.FileInputStream;
import java.io.FileOutputStream;
```

## Encrypt Document

```java
FileInputStream stream = new FileInputStream("input.docx");
WordDocument doc = new WordDocument(stream, FormatType.Automatic);
doc.encryptDocument("password");
String outputPath = "output.docx";
doc.save(outputPath, FormatType.Docx);
stream.close();
doc.close();
```

### Placeholders
- `"password"` → Replace with `"{encryption-password}"`

---

## Open Encrypted Document

```java
WordDocument doc = new WordDocument("encrypted.docx", "password");
String outputPath = "output.docx";
doc.save(outputPath, FormatType.Docx);
doc.close();
```

### Placeholders
- `"password"` → Replace with `"{decryption-password}"`

---

## Remove Encryption

```java
WordDocument doc = new WordDocument("encrypted.docx", "Password");
doc.removeEncryption();
String outputPath = "output.docx";
doc.save(outputPath, FormatType.Docx);
doc.close();
```

### Placeholders
- `"password"` → Replace with `"{existing-password}"`

---

## Protect Document from Editing

Restricts editing to a specific type. Pass `""` as password for no-password protection.

```java
FileInputStream stream = new FileInputStream("input.docx");
WordDocument doc = new WordDocument(stream, FormatType.Docx);

// ProtectionType options:
//   AllowOnlyComments   – only comments can be added/modified
//   AllowOnlyFormFields – only form field values can be changed
//   AllowOnlyRevisions  – only tracked changes allowed
//   AllowOnlyReading    – read-only; no edits
//   NoProtection        – removes all protection
doc.protect(ProtectionType.AllowOnlyFormFields, "password");
// Optional: Gets the current protection type applied to the document
ProtectionType protectionType = doc.getProtectionType();
String outputPath = "output.docx";
doc.save(outputPath, FormatType.Docx);

stream.close();
doc.close();
```

### Placeholders
- `ProtectionType.AllowOnlyFormFields` → Replace with desired `ProtectionType`
- `"password"` → Replace with `"{protection-password}"` or `""` for no password

---

## Add Editable Range (within protected document)

Allows a specific portion to remain editable when the rest is read-only.

### Minimal Code

```java
WordDocument doc = new WordDocument();
doc.ensureMinimal();
WParagraph para = (WParagraph) doc.getLastParagraph();
para.appendText("Protected text. ");
EditableRangeStart rangeStart = para.appendEditableRangeStart();
// Optional: restrict to a group or single user
// rangeStart.setEditorGroup(EditorType.Everyone);
// rangeStart.setSingleUser("user@domain.com");
para.appendText("Editable text.");
EditableRangeEnd rangeEnd = para.appendEditableRangeEnd(rangeStart);
doc.protect(ProtectionType.AllowOnlyReading, "password");
String outputPath = "output.docx";
doc.save(outputPath, FormatType.Docx);
doc.close();
```

### Add Editable Range inside Table

```java
WordDocument doc = new WordDocument();
doc.ensureMinimal();
WTable table = doc.getLastSection().addTable();
table.resetCells(2, 3);
// Add text and start the editable range at column 1
WParagraph p1 = table.get(0, 1).addParagraph();
p1.appendText("Editable content");
EditableRangeStart rangeStart = p1.appendEditableRangeStart();
rangeStart.setFirstColumn(1);
// Add content inside the editable range
WParagraph p2 = table.get(1, 2).addParagraph();
p2.appendText("Editable Content");
// End the editable range at column 2
EditableRangeEnd rangeEnd = p2.appendEditableRangeEnd();
rangeStart.setLastColumn(2);
doc.protect(ProtectionType.AllowOnlyReading, "password");
String outputPath = "output.docx";
doc.save(outputPath, FormatType.Docx);
doc.close();
```

### Editable Range Start and End Options

```java
rangeStart.setEditorGroup(EditorType.Everyone); // group permission
rangeStart.setSingleUser("user@domain.com");   // single-user permission (mutually exclusive with EditorGroup)
String rangeStartId = rangeStart.getId(); // ID of the editable range start
String rangeEndId = rangeEnd.getId(); // ID of the editable range end

// Restrict the editable range to specific table columns (zero-based)
// Applicable only when the editable range is defined within a table
rangeStart.setFirstColumn(1);
rangeStart.setLastColumn(2);

```

### Editable Range Properties (EditableRange)

```java
EditableRange editableRange = doc.getEditableRanges().get(0);
editableRange.setEditorGroup(EditorType.Everyone); // group permission
editableRange.setSingleUser("user@domain.com"); // single-user permission (mutually exclusive with EditorGroup)
String editableRangeId = editableRange.getId(); // ID of the editable range
EditableRangeStart rangeStart = editableRange.getEditableRangeStart(); // Get  editable range start marker
EditableRangeEnd rangeEnd = editableRange.getEditableRangeEnd(); // Get  editable range end marker
editableRange.setFirstColumn(1); // First editable column
editableRange.setLastColumn(2); // Last editable column
```

---

## Find & Remove Editable Range

```java
// Find by Id
EditableRange range = doc.getEditableRanges().findById("0");

// Remove by instance
doc.getEditableRanges().remove(range);

// Remove by index
doc.getEditableRanges().removeAt(0);
```
