# RTF Conversions

> Bidirectional RTF-DOCX conversion — converting RTF files to Word documents and Word documents to RTF format, preserving formatting and content with cross-platform and Windows-specific approaches.

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

## Convert RTF to Word

### Minimal Code

#### Cross-Platform
```csharp
FileStream fileStream = new FileStream("Input.rtf", FileMode.Open, FileAccess.Read, FileShare.ReadWrite);
using (WordDocument document = new WordDocument(fileStream, FormatType.Rtf))
{
    MemoryStream stream = new MemoryStream();
    document.Save(stream, FormatType.Docx);
    document.Close();
}
fileStream.Close();
```

#### Windows-Specific
```csharp
WordDocument document = new WordDocument("Input.rtf", FormatType.Rtf);
MemoryStream stream = new MemoryStream();
document.Save(stream, FormatType.Docx);
document.Close();
```

### Save to File

#### Cross-Platform
```csharp
FileStream fileStream = new FileStream("Input.rtf", FileMode.Open, FileAccess.Read, FileShare.ReadWrite);
using (WordDocument document = new WordDocument(fileStream, FormatType.Rtf))
{
    var outputPath = Path.Combine(Directory.GetCurrentDirectory(), "output", "Output.docx");
    using (FileStream outStream = new FileStream(outputPath, FileMode.Create, FileAccess.ReadWrite))
    {
        document.Save(outStream, FormatType.Docx);
    }
}
fileStream.Close();
```

#### Windows-Specific
```csharp
WordDocument document = new WordDocument("Input.rtf", FormatType.Rtf);
document.Save("Output.docx", FormatType.Docx);
document.Close();
```

---

## Convert Word to RTF

### Minimal Code

#### Cross-Platform
```csharp
FileStream fileStream = new FileStream("Template.docx", FileMode.Open, FileAccess.Read, FileShare.ReadWrite);
using (WordDocument document = new WordDocument(fileStream, FormatType.Docx))
{
    MemoryStream stream = new MemoryStream();
    document.Save(stream, FormatType.Rtf);
    document.Close();
}
fileStream.Close();
```

#### Windows-Specific
```csharp
WordDocument document = new WordDocument("Template.docx", FormatType.Docx);
MemoryStream stream = new MemoryStream();
document.Save(stream, FormatType.Rtf);
document.Close();
```

### Save to File

#### Cross-Platform
```csharp
FileStream fileStream = new FileStream("Template.docx", FileMode.Open, FileAccess.Read, FileShare.ReadWrite);
using (WordDocument document = new WordDocument(fileStream, FormatType.Docx))
{
    var outputPath = Path.Combine(Directory.GetCurrentDirectory(), "output", "Output.rtf");
    using (FileStream outStream = new FileStream(outputPath, FileMode.Create, FileAccess.ReadWrite))
    {
        document.Save(outStream, FormatType.Rtf);
    }
}
fileStream.Close();
```

#### Windows-Specific
```csharp
WordDocument document = new WordDocument("Template.docx", FormatType.Docx);
document.Save("Output.rtf", FormatType.Rtf);
document.Close();
```

---

## Key Properties and Methods

| Item | Type | Description |
|------|------|-------------|
| `FormatType.Rtf` | Enum | Specifies RTF format for conversion |
| `FormatType.Docx` | Enum | Specifies DOCX format for conversion |
| `Save(stream, FormatType)` | Method | Save document to stream with specified format |
| `Save(path, FormatType)` | Method | Save document to file with specified format (Windows-specific) |
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
