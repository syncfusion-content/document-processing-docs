# Word to ODT Conversions

> Word-to-ODT conversion — converting Word documents (DOCX, DOC) to OpenDocument Text (ODT) format, preserving formatting, styles, and content with cross-platform and Windows-specific approaches.

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

## Convert Word to ODT

### Minimal Code

#### Cross-Platform
```csharp
using (FileStream docStream = new FileStream("Input.docx", FileMode.Open, FileAccess.Read, FileShare.ReadWrite))
{
    using (WordDocument document = new WordDocument(docStream, FormatType.Docx))
    {
        MemoryStream outputStream = new MemoryStream();
        document.Save(outputStream, FormatType.Odt);
    }
}
```

#### Windows-Specific
```csharp
WordDocument document = new WordDocument("Input.docx", FormatType.Docx);
MemoryStream outputStream = new MemoryStream();
document.Save(outputStream, FormatType.Odt);
document.Close();
```

### Save to File

#### Cross-Platform
```csharp
using (FileStream docStream = new FileStream("Input.docx", FileMode.Open, FileAccess.Read, FileShare.ReadWrite))
{
    using (WordDocument document = new WordDocument(docStream, FormatType.Docx))
    {
        var outputPath = Path.Combine(Directory.GetCurrentDirectory(), "output", "Output.odt");
        using (FileStream outStream = new FileStream(outputPath, FileMode.Create, FileAccess.ReadWrite))
        {
            document.Save(outStream, FormatType.Odt);
        }
    }
}
```

#### Windows-Specific
```csharp
WordDocument document = new WordDocument("Input.docx", FormatType.Docx);
document.Save("Output.odt", FormatType.Odt);
document.Close();
```

---

## ODT Format Overview

| Aspect | Details |
|--------|---------|
| **Format Name** | OpenDocument Text (ODT) |
| **Standard** | OASIS and ISO standard |
| **Original Developer** | Sun Microsystems for OpenOffice Suite |
| **Human Readable** | XML-based (compressed archive) |
| **Use Case** | Cross-platform document interchange, OpenOffice/LibreOffice compatibility |
| **Content Retention** | Preserves formatting, styles, tables, images, and most document properties |
| **Bidirectional** | Conversion from Word to ODT supported; ODT to Word via Word library |

---

## Supported Document Elements

### Text Formatting

| Element | Support | Notes |
|---------|---------|-------|
| **Bold** | ✓ | Fully supported |
| **Italic** | ✓ | Fully supported |
| **Underline** | ✓ | Fully supported |
| **Strike out** | ✓ | Fully supported |
| **All caps** | ✓ | Fully supported |
| **Small caps** | ✓ | Fully supported |
| **Subscript / Superscript** | ✓ | Fully supported |
| **Font** | ✓ | Fully supported |
| **Color** | ✓ | Fully supported |
| **Character spacing** | ✓ | Fully supported |
| **Highlighting** | ✓ | Fully supported |
| **Line breaks** | ✓ | Fully supported |
| **Page breaks** | ✓ | Fully supported |
| **Outline** | ✓ | Rendered as bold |
| **Emboss** | ✓ | Rendered as bold |
| **Engrave** | ✗ | Not supported |
| **Hidden** | ✗ | Not supported |
| **Shading** | ✗ | Not supported |
| **Special symbols** | ✓ | Fully supported |

### Paragraph Properties

| Element | Support | Notes |
|---------|---------|-------|
| **Alignment** | ✓ | Fully supported |
| **Indents** | ✓ | Fully supported |
| **Line spacing** | ✓ | Fully supported |
| **Spacing before and after** | ✓ | Fully supported |
| **Borders** | ✓ | See Border Details |
| **Keep lines together** | ✓ | Fully supported |
| **Keep paragraphs together** | ✓ | Fully supported |
| **Page break before** | ✗ | Not supported |
| **Shading** | ✗ | Not supported |

### Border Properties

| Property | Support | Notes |
|----------|---------|-------|
| **Color** | ✓ | Fully supported |
| **Line style** | ✓ | Fully supported |
| **Line width** | ✓ | Fully supported |
| **Distance from text** | ✗ | Not supported |

### List Elements

| Element | Support | Notes |
|---------|---------|-------|
| **Standard bullets** | ✓ | Fully supported |
| **Numbered lists** | ✓ | Fully supported |
| **Multi-level lists** | ✓ | Fully supported |
| **Custom bullets** | ✗ | Not supported |
| **Restart numbering** | ✗ | Not supported |

### Table Elements

| Element | Support | Notes |
|---------|---------|-------|
| **Alignment** | ✓ | Fully supported |
| **Column widths** | ✓ | Fully supported |
| **Row height** | ✓ | Fully supported |
| **Cell margins** | ✓ | Fully supported |
| **Row padding** | ✓ | Fully supported |
| **Spacing between cells** | ✓ | Fully supported |
| **Borders** | ✓ | See Border Details |
| **Cell vertical alignment** | ✓ | Fully supported |
| **Nested tables** | ✓ | Fully supported |
| **Horizontal merge** | ✗ | Not supported |
| **Vertical merge** | ✗ | Not supported |
| **Cell shading** | ✗ | Not supported |
| **Table shading** | ✗ | Not supported |
| **Indent from left** | ✗ | Not supported |
| **Preferred width** | ✗ | Not supported |

### Other Elements

| Element | Support | Notes |
|---------|---------|-------|
| **Paragraph styles** | ✓ | Fully supported |
| **Character styles** | ✓ | Fully supported |
| **List styles** | ✓ | Fully supported |
| **Bookmarks** | ✓ | ID preserved |
| **Hyperlinks** | ✓ | External URL and local links supported |
| **Images** | ✓ | Inline images and scale preserved |
| **Symbols** | ✓ | Fully supported |
| **Header / Footer** | ✓ | Different per section supported |
| **Fields** | ✓ | Partial (field results preserved as text) |
| **Document Properties** | ✗ | Not supported |
| **Footnotes and Endnotes** | ✗ | Not supported |
| **Form Fields** | ✗ | Not supported |
| **Comments** | ✗ | Not supported |

---

## Key Properties and Methods

| Item | Type | Description |
|------|------|-------------|
| `FormatType.Odt` | Enum | Specifies ODT format for conversion |
| `FormatType.Docx` | Enum | Specifies DOCX format for conversion |
| `Save(stream, FormatType)` | Method | Save document to stream with specified format |
| `Save(path, FormatType)` | Method | Save document to file with specified format (Windows-specific) |
| `WordDocument(stream, FormatType)` | Constructor | Load document from stream with specified format |
| `WordDocument(path, FormatType)` | Constructor | Load document from file path with specified format (Windows-specific) |

---

## Common Properties

| Property | Type | Description |
|----------|------|-------------|
| `FormatType` | Enum | Document format (Odt, Docx, etc.) |
| `FileMode.Open` | Enum | Open existing file stream |
| `FileMode.Create` | Enum | Create new file stream |
| `FileAccess.Read` | Enum | Read-only access |
| `FileAccess.ReadWrite` | Enum | Read and write access |
| `FileShare.ReadWrite` | Enum | Allow concurrent read and write access |

---

## Placeholders

- `"Input.docx"` → Replace with `"{docx-file-path}"`
- `"Output.odt"` → Replace with `"{output-odt-path}"`

---

