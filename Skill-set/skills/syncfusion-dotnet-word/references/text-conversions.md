# Text Conversions

> Bidirectional Text-DOCX conversion — converting Text files to Word documents and Word documents to Text format, with support for plain text extraction and cross-platform and Windows-specific approaches.

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

## Convert Word to Text

### Minimal Code

#### Cross-Platform
```csharp
FileStream fileStream = new FileStream("Template.docx", FileMode.Open, FileAccess.Read, FileShare.ReadWrite);
using (WordDocument document = new WordDocument(fileStream, FormatType.Docx))
{
    MemoryStream stream = new MemoryStream();
    document.Save(stream, FormatType.Txt);
    document.Close();
}
fileStream.Close();
```

#### Windows-Specific
```csharp
WordDocument document = new WordDocument("Template.docx", FormatType.Docx);
MemoryStream stream = new MemoryStream();
document.Save(stream, FormatType.Txt);
document.Close();
```

### Save to File

#### Cross-Platform
```csharp
FileStream fileStream = new FileStream("Template.docx", FileMode.Open, FileAccess.Read, FileShare.ReadWrite);
using (WordDocument document = new WordDocument(fileStream, FormatType.Docx))
{
    var outputPath = Path.Combine(Directory.GetCurrentDirectory(), "output", "Output.txt");
    using (FileStream outStream = new FileStream(outputPath, FileMode.Create, FileAccess.ReadWrite))
    {
        document.Save(outStream, FormatType.Txt);
    }
}
fileStream.Close();
```

#### Windows-Specific
```csharp
WordDocument document = new WordDocument("Template.docx", FormatType.Docx);
document.Save("Output.txt", FormatType.Txt);
document.Close();
```

---

## Convert Text to Word

### Minimal Code

#### Cross-Platform
```csharp
FileStream fileStream = new FileStream("Template.txt", FileMode.Open, FileAccess.Read, FileShare.ReadWrite);
using (WordDocument document = new WordDocument(fileStream, FormatType.Txt))
{
    MemoryStream stream = new MemoryStream();
    document.Save(stream, FormatType.Docx);
    document.Close();
}
fileStream.Close();
```

#### Windows-Specific
```csharp
WordDocument document = new WordDocument("Template.txt", FormatType.Txt);
MemoryStream stream = new MemoryStream();
document.Save(stream, FormatType.Docx);
document.Close();
```

### Save to File

#### Cross-Platform
```csharp
FileStream fileStream = new FileStream("Template.txt", FileMode.Open, FileAccess.Read, FileShare.ReadWrite);
using (WordDocument document = new WordDocument(fileStream, FormatType.Txt))
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
WordDocument document = new WordDocument("Template.txt", FormatType.Txt);
document.Save("Output.docx", FormatType.Docx);
document.Close();
```

---

## Extract Document as Plain Text

### Retrieve Document Text

#### Cross-Platform
```csharp
FileStream fileStream = new FileStream("Template.docx", FileMode.Open, FileAccess.Read, FileShare.ReadWrite);
using (WordDocument document = new WordDocument(fileStream, FormatType.Docx))
{
    string text = document.GetText();
    WordDocument newDocument = new WordDocument();
    IWSection section = newDocument.AddSection();
    IWParagraph paragraph = section.AddParagraph();
    paragraph.AppendText(text);

    var outputPath = Path.Combine(Directory.GetCurrentDirectory(), "output", "PlainText.docx");
    using (FileStream outStream = new FileStream(outputPath, FileMode.Create, FileAccess.ReadWrite))
    {
        newDocument.Save(outStream, FormatType.Docx);
    }
    document.Close();
    newDocument.Close();
}
fileStream.Close();
```

#### Windows-Specific
```csharp
WordDocument document = new WordDocument("Template.docx", FormatType.Docx);
string text = document.GetText();

WordDocument newDocument = new WordDocument();
IWSection section = newDocument.AddSection();
IWParagraph paragraph = section.AddParagraph();
paragraph.AppendText(text);

newDocument.Save("PlainText.docx", FormatType.Docx);
document.Close();
newDocument.Close();
```

---

## Key Properties and Methods

| Item | Type | Description |
|------|------|-------------|
| `FormatType.Txt` | Enum | Specifies Text format for conversion |
| `FormatType.Docx` | Enum | Specifies DOCX format for conversion |
| `Save(stream, FormatType)` | Method | Save document to stream with specified format |
| `Save(path, FormatType)` | Method | Save document to file with specified format (Windows-specific) |
| `WordDocument(stream, FormatType)` | Constructor | Load document from stream with specified format |
| `WordDocument(path, FormatType)` | Constructor | Load document from file path with specified format (Windows-specific) |
| `GetText()` | Method | Extract all text content from document as plain string |
| `AddSection()` | Method | Add a new section to document |
| `AddParagraph()` | Method | Add a new paragraph to section |
| `AppendText(text)` | Method | Append text content to paragraph |

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

