# Document Structure

> Document lifecycle & page layout — creating, loading, saving, closing documents and configuring sections.

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

## Create Document

### Minimal Code

#### Common for Cross-Platform and Windows-Specific
```csharp
var outputPath = Path.Combine(Directory.GetCurrentDirectory(), "output", "document.docx");
var doc = new WordDocument();
var section = doc.AddSection();
section.PageSetup.Margins.All = 72f; // 1 inch margins

// Add content here

doc.Save(outputPath);
doc.Close();
Console.WriteLine($"SUCCESS: {outputPath}");
```

### Placeholders
- `"document.docx"` → Replace with `"{filename}.docx"`
- Add content operations between section creation and save

---

## Add Section

### Minimal Code

#### Common for Cross-Platform and Windows-Specific
```csharp
var section = doc.AddSection();
section.PageSetup.Margins.All = 72f; // 1 inch margins
```

### Options

#### Common for Cross-Platform and Windows-Specific
```csharp
// Custom margins
section.PageSetup.Margins.Top = 72f;
section.PageSetup.Margins.Bottom = 72f;
section.PageSetup.Margins.Left = 72f;
section.PageSetup.Margins.Right = 72f;

// Page orientation
section.PageSetup.Orientation = PageOrientation.Portrait; // or Landscape
```

---

## Load Document

### From File Path

#### Common for Cross-Platform and Windows-Specific (Using Constructor)
```csharp
var filePath = Path.Combine(Directory.GetCurrentDirectory(), "input", "template.docx");
var doc = new WordDocument(filePath);
```

#### Common for Cross-Platform and Windows-Specific (Using Open Method)
```csharp
var filePath = Path.Combine(Directory.GetCurrentDirectory(), "input", "template.docx");
var doc = new WordDocument();
doc.Open(filePath);
```

### From Stream

#### Common for Cross-Platform and Windows-Specific (Using Constructor)
```csharp
var fileStream = new FileStream("template.docx", FileMode.Open, FileAccess.Read);
var doc = new WordDocument(fileStream, FormatType.Automatic);
```

#### Common for Cross-Platform and Windows-Specific (Using Open Method)
```csharp
var fileStream = new FileStream("template.docx", FileMode.Open, FileAccess.Read);
var doc = new WordDocument();
doc.Open(fileStream, FormatType.Automatic);
```

### Encrypted Document

#### Common for Cross-Platform and Windows-Specific (From File Path)
```csharp
var filePath = Path.Combine(Directory.GetCurrentDirectory(), "input", "encrypted.docx");
var doc = new WordDocument(filePath, FormatType.Automatic, "password");
```

#### Common for Cross-Platform and Windows-Specific (From Stream)
```csharp
var fileStream = new FileStream("encrypted.docx", FileMode.Open, FileAccess.Read);
var doc = new WordDocument(fileStream, FormatType.Automatic, "password");
```

### Read-Only Document

#### Common for Cross-Platform and Windows-Specific (From File Path)
```csharp
var doc = new WordDocument();
doc.OpenReadOnly("template.docx", FormatType.Docx);
```

#### Common for Cross-Platform and Windows-Specific (Encrypted Read-Only Document)
```csharp
var doc = new WordDocument();
doc.OpenReadOnly("template.docx", FormatType.Docx, "password");
```

### Placeholders
- `"template.docx"` → Replace with `"{filename}.docx"`
- `"password"` → Replace with actual password
- `FormatType.Automatic` → Auto-detects format; or use `FormatType.Docx`, `FormatType.Doc`, `FormatType.Rtf`, etc.

---

## Save Document

### To File Path

#### Common for Cross-Platform and Windows-Specific
```csharp
var outputPath = Path.Combine(Directory.GetCurrentDirectory(), "output", "document.docx");
doc.Save(outputPath, FormatType.Docx);
doc.Close();
```

### To Stream

#### Common for Cross-Platform and Windows-Specific
```csharp
var stream = new MemoryStream();
doc.Save(stream, FormatType.Docx);
stream.Position = 0;
```

### Embed Fonts in Word Document

Embed the fonts used in a Word document directly into the saved DOCX file so the document keeps the same appearance on another machine.

#### Cross-Platform
```csharp
using Syncfusion.DocIORenderer;

using (WordDocument document = new WordDocument("Input.docx", FormatType.Docx))
{
    using DocIORenderer renderer = new DocIORenderer();
    document.SaveOptions.EmbedFonts = true;
    document.Save("Output.docx", FormatType.Docx);
    document.Close();
}
```

#### Windows-Specific
```csharp
using (WordDocument document = new WordDocument("Input.docx", FormatType.Docx))
{
    document.SaveOptions.EmbedFonts = true;
    document.Save("Output.docx", FormatType.Docx);
    document.Close();
}
```

> This feature is supported for DOCX documents. For cross-platform applications, initialize `DocIORenderer` before saving with embedded fonts.

### Supported Formats

#### Common for Cross-Platform and Windows-Specific
```csharp
FormatType.Docx      // Word 2007+ (.docx) - recommended
FormatType.Doc       // Word 97-2003 (.doc)
FormatType.Rtf       // Rich Text Format (.rtf)
FormatType.Html      // HTML format
FormatType.Markdown  // Markdown format
FormatType.Txt       // Plain text
```

### Placeholders
- `"document.docx"` → Replace with `"{output-filename}"`
- `FormatType.Docx` → Replace with desired format type

