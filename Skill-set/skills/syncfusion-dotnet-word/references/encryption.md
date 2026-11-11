# Encryption & Document Protection

> Encrypt with password, open encrypted documents, remove encryption, restrict editing, and manage editable ranges.

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

## Encrypt Document

### Common for Cross-Platform and Windows-Specific
```csharp
var stream = new FileStream("input.docx", FileMode.Open, FileAccess.Read);
var doc = new WordDocument(stream, FormatType.Automatic);
doc.EncryptDocument("password");
doc.Save(outputPath);
stream.Close();
doc.Close();
```

### Placeholders
- `"password"` → Replace with `"{encryption-password}"`

---

## Open Encrypted Document

### Common for Cross-Platform and Windows-Specific
```csharp
var stream = new FileStream("encrypted.docx", FileMode.Open, FileAccess.Read);
var doc = new WordDocument(stream, "password");
doc.Save(outputPath);
stream.Close();
doc.Close();
```

### Placeholders
- `"password"` → Replace with `"{decryption-password}"`

---

## Remove Encryption

### Common for Cross-Platform and Windows-Specific
```csharp
var stream = new FileStream("encrypted.docx", FileMode.Open, FileAccess.Read);
var doc = new WordDocument(stream, FormatType.Docx, "password");
doc.RemoveEncryption();
doc.Save(outputPath);
stream.Close();
doc.Close();
```

### Placeholders
- `"password"` → Replace with `"{existing-password}"`

---

## Protect Document from Editing

Restricts editing to a specific type. Pass `""` as password for no-password protection.
### Common for Cross-Platform and Windows-Specific
```csharp
var stream = new FileStream("input.docx", FileMode.Open, FileAccess.Read);
var doc = new WordDocument(stream, FormatType.Docx);
// ProtectionType options:
//   AllowOnlyComments   – only comments can be added/modified
//   AllowOnlyFormFields – only form field values can be changed
//   AllowOnlyRevisions  – only tracked changes allowed
//   AllowOnlyReading    – read-only; no edits
//   NoProtection        – removes all protection
doc.Protect(ProtectionType.AllowOnlyFormFields, "password");
// Optional: Gets the current protection type applied to the document
ProtectionType protectionType = doc.ProtectionType;
doc.Save(outputPath);
stream.Close();
doc.Close();
```

### Placeholders
- `ProtectionType.AllowOnlyFormFields` → Replace with desired `ProtectionType`
- `"password"` → Replace with `"{protection-password}"` or `""` for no password

---

## Add Editable Range (within protected document)

Allows a specific portion to remain editable when the rest is read-only.

### Minimal Code

#### Common for Cross-Platform and Windows-Specific
```csharp
var doc = new WordDocument();
doc.EnsureMinimal();
var para = doc.LastParagraph as WParagraph;
para.AppendText("Protected text. ");
var rangeStart = para.AppendEditableRangeStart();
// Optional: restrict to a group or single user
// rangeStart.EditorGroup = EditorType.Everyone;
// rangeStart.SingleUser  = "user@domain.com";
para.AppendText("Editable text.");
var rangeEnd = para.AppendEditableRangeEnd(rangeStart);
doc.Protect(ProtectionType.AllowOnlyReading, "password");
doc.Save(outputPath);
doc.Close();
```

### Add Editable Range inside Table

#### Common for Cross-Platform and Windows-Specific
```csharp
var doc = new WordDocument();
doc.EnsureMinimal();
WTable table = doc.LastSection.AddTable() as WTable;
table.ResetCells(2, 3);
// Add text and start the editable range at column 1
table[0, 1].AddParagraph().AppendText("Editable content");
EditableRangeStart rangeStart = table[0, 1].Paragraphs[0].AppendEditableRangeStart();
rangeStart.FirstColumn = 1;
// Add content inside the editable range
table[1, 2].AddParagraph().AppendText("Editable Content");
// End the editable range at column 2
EditableRangeEnd rangeEnd = table[1, 2].Paragraphs[0].AppendEditableRangeEnd();
rangeStart.LastColumn = 2;
doc.Protect(ProtectionType.AllowOnlyReading, "password");
doc.Save(outputPath);
doc.Close();
```

### Editable Range Start and End Options

#### Common for Cross-Platform and Windows-Specific
```csharp
rangeStart.EditorGroup = EditorType.Everyone;   // group permission
rangeStart.SingleUser  = "user@domain.com";     // single-user permission (mutually exclusive with EditorGroup)
string rangeStartId = rangeStart.Id;   // ID of the editable range start
string rangeEndId = rangeEnd.Id;   // ID of the editable range end

// Restrict the editable range to specific table columns (zero-based)
// Applicable only when the editable range is defined within a table
rangeStart.FirstColumn = 1;
rangeStart.LastColumn  = 2;

```

### Editable Range Properties (EditableRange)

#### Common for Cross-Platform and Windows-Specific
```csharp
doc.EditableRanges[0].EditorGroup = EditorType.Everyone;   // group permission
doc.EditableRanges[0].SingleUser = "user@domain.com";   // single-user permission (mutually exclusive with EditorGroup)
string editableRangeId = doc.EditableRanges[0].Id;   // ID of the editable range
EditableRangeStart rangeStart = doc.EditableRanges[0].EditableRangeStart;   // Get  editable range start marker
EditableRangeEnd rangeEnd = doc.EditableRanges[0].EditableRangeEnd;   // Get  editable range end marker
document.EditableRanges[0].FirstColumn = 1; // First editable column
document.EditableRanges[0].LastColumn = 2; // Last editable column
```

---

## Find & Remove Editable Range

### Common for Cross-Platform and Windows-Specific
```csharp
// Find by Id
var range = doc.EditableRanges.FindById("0");

// Remove by instance
doc.EditableRanges.Remove(range);

// Remove by index
doc.EditableRanges.RemoveAt(0);
```
