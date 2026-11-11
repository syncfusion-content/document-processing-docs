# Text Conversions

> Bidirectional Text-DOCX conversion — converting Text files to Word documents and Word documents to Text format, with support for plain text extraction and cross-platform and Windows-specific approaches.

---
## Required common usings

```java
import com.syncfusion.docio.*;
```

## Convert Word to Text

### Minimal Code

```java
WordDocument document = new WordDocument("Template.docx", FormatType.Docx);
document.save("Output.txt", FormatType.Txt);
document.close();
```

### Save to File

```java
WordDocument document = new WordDocument("Template.docx", FormatType.Docx);
document.save("Output.txt", FormatType.Txt);
document.close();
```

---

## Convert Text to Word

### Minimal Code

```java
WordDocument document = new WordDocument("Template.txt", FormatType.Txt);
document.save("Output.docx", FormatType.Docx);
document.close();
```

### Save to File

```java
WordDocument document = new WordDocument("Template.txt", FormatType.Txt);
document.save("Output.docx", FormatType.Docx);
document.close();
```

---

## Extract Document as Plain Text

### Retrieve Document Text

```java
WordDocument document = new WordDocument("Template.docx", FormatType.Docx);
String text = document.getText();

WordDocument newDocument = new WordDocument();
IWSection section = newDocument.addSection();
IWParagraph paragraph = section.addParagraph();
paragraph.appendText(text);

newDocument.save("PlainText.docx", FormatType.Docx);
document.close();
newDocument.close();
```

---

## Key Properties and Methods

| Item | Type | Description |
|------|------|-------------|
| `FormatType.Txt` | Enum | Specifies Text format for conversion |
| `FormatType.Docx` | Enum | Specifies DOCX format for conversion |
| `save(stream, FormatType)` | Method | Save document to stream with specified format |
| `save(path, FormatType)` | Method | Save document to file with specified format (Windows-specific) |
| `WordDocument(stream, FormatType)` | Constructor | Load document from stream with specified format |
| `WordDocument(path, FormatType)` | Constructor | Load document from file path with specified format (Windows-specific) |
| `getText()` | Method | Extract all text content from document as plain string |
| `addSection()` | Method | Add a new section to document |
| `addParagraph()` | Method | Add a new paragraph to section |
| `appendText(text)` | Method | Append text content to paragraph |

---

## Common Properties

| Property | Type | Description |
|----------|------|-------------|
| `FormatType` | Enum | Specifies document format (Txt, Docx, etc.) |
| `FileMode.Open` | Enum | Open existing file stream |
| `FileMode.Create` | Enum | Create new file stream |
| `FileAccess.Read` | Enum | Read-only file access |
| `FileAccess.ReadWrite` | Enum | Read and write file access |
| `FileShare.ReadWrite` | Enum | Allow concurrent read and write access |

---

## Placeholders

- `"Template.docx"` → Replace with `"{docx-file-path}"`
- `"Template.txt"` → Replace with `"{text-file-path}"`
- `"Output.txt"` → Replace with `"{output-text-path}"`
- `"Output.docx"` → Replace with `"{output-docx-path}"`
- `"PlainText.docx"` → Replace with `"{plain-text-docx-path}"`

---

