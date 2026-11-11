# XML Conversions

> Bidirectional XML-DOCX conversion — converting Word Processing XML files to Word documents and Word documents to XML format (WordML), supporting Word 2007+ XML markup with cross-platform and Windows-specific approaches.

---

## Required common usings

```java
import com.syncfusion.docio.*;
```

## Convert Word to XML (WordML)

### Minimal Code

```java
WordDocument document = new WordDocument("Template.docx", FormatType.Docx);
document.save("Output.xml", FormatType.WordML);
document.close();
```

### Save to File

```java
WordDocument document = new WordDocument("Template.docx", FormatType.Docx);
document.save("Output.xml", FormatType.WordML);
document.close();
```

---

## Convert XML (WordML) to Word

### Minimal Code

```java
WordDocument document = new WordDocument("Template.xml", FormatType.WordML);
document.save("Output.docx", FormatType.Docx);
document.close();
```

### Save to File

```java
WordDocument document = new WordDocument("Template.xml", FormatType.WordML);
document.save("Output.docx", FormatType.Docx);
document.close();
```

---

## Key Properties and Methods

| Item | Type | Description |
|------|------|-------------|
| `FormatType.WordML` | Enum | Specifies Word Processing XML format for conversion |
| `FormatType.Docx` | Enum | Specifies DOCX format for conversion |
| `save(stream, FormatType)` | Method | Save document to stream with specified format |
| `save(path, FormatType)` | Method | Save document to file with specified format (Windows-specific) |
| `WordDocument(stream, FormatType)` | Constructor | Load document from stream with specified format |
| `WordDocument(path, FormatType)` | Constructor | Load document from file path with specified format (Windows-specific) |

---

## Common Properties

| Property | Type | Description |
|----------|------|-------------|
| `FormatType` | Enum | Specifies document format (WordML, Docx, etc.) |
| `FileMode.Open` | Enum | Open existing file stream |
| `FileMode.Create` | Enum | Create new file stream |
| `FileAccess.Read` | Enum | Read-only file access |
| `FileAccess.ReadWrite` | Enum | Read and write file access |
| `FileShare.ReadWrite` | Enum | Allow concurrent read and write access |

---

## Placeholders

- `"Template.docx"` → Replace with `"{docx-file-path}"`
- `"Template.xml"` → Replace with `"{xml-file-path}"`
- `"Output.xml"` → Replace with `"{output-xml-path}"`
- `"Output.docx"` → Replace with `"{output-docx-path}"`

---