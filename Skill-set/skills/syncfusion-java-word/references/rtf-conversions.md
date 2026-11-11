# RTF Conversions

> Bidirectional RTF-DOCX conversion — converting RTF files to Word documents and Word documents to RTF format, preserving formatting and content with cross-platform and Windows-specific approaches.

---

## Required common usings

```java
import com.syncfusion.docio.*;
```

## Convert RTF to Word

### Minimal Code

```java
WordDocument document = new WordDocument("Input.rtf", FormatType.Rtf);
document.save("Output.docx", FormatType.Docx);
document.close();
```

### Save to File

```java
WordDocument document = new WordDocument("Input.rtf", FormatType.Rtf);
document.save("Output.docx", FormatType.Docx);
document.close();
```

---

## Convert Word to RTF

### Minimal Code

```java
WordDocument document = new WordDocument("Template.docx", FormatType.Docx);
document.save("Output.rtf", FormatType.Rtf);
document.close();
```

### Save to File

```java
WordDocument document = new WordDocument("Template.docx", FormatType.Docx);
document.save("Output.rtf", FormatType.Rtf);
document.close();
```

---

## Key Properties and Methods

| Item | Type | Description |
|------|------|-------------|
| `FormatType.Rtf` | Enum | Specifies RTF format for conversion |
| `FormatType.Docx` | Enum | Specifies DOCX format for conversion |
| `save(stream, FormatType)` | Method | Save document to stream with specified format |
| `save(path, FormatType)` | Method | Save document to file with specified format (Windows-specific) |
| `WordDocument(stream, FormatType)` | Constructor | Load document from stream with specified format |
| `WordDocument(path, FormatType)` | Constructor | Load document from file path with specified format (Windows-specific) |

---

## Common Properties

| Property | Type | Description |
|----------|------|-------------|
| `FormatType` | Enum | Specifies document format (Rtf, Docx, etc.) |
| `FileMode.Open` | Enum | Open existing file stream |
| `FileMode.Create` | Enum | Create new file stream |
| `FileAccess.Read` | Enum | Read-only file access |
| `FileAccess.ReadWrite` | Enum | Read and write file access |
| `FileShare.ReadWrite` | Enum | Allow concurrent read and write access |

---

## Placeholders

- `"Input.rtf"` → Replace with `"{rtf-file-path}"`
- `"Template.docx"` → Replace with `"{docx-file-path}"`
- `"Output.docx"` → Replace with `"{output-docx-path}"`
- `"Output.rtf"` → Replace with `"{output-rtf-path}"`

---
