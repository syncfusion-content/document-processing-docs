# Markdown Conversions

> Bidirectional Markdown-DOCX conversion — converting Markdown files to Word documents and Word documents to Markdown format, supporting CommonMark and GitHub-flavored syntax with cross-platform and Windows-specific approaches.

---

## Required common usings

```csharp
using Syncfusion.DocIO;
using Syncfusion.DocIO.DLS;
```
## Required using for Cross-Platform

```csharp
using Syncfusion.DocIORenderer;
```

## Required usings for Windows-Specific

```csharp
using System;
using System.IO;
using Syncfusion.OfficeChartToImageConverter;
```

## Convert Markdown to Word

### Minimal Code

#### Cross-Platform
```csharp
using (FileStream docStream = new FileStream("Input.md", FileMode.Open, FileAccess.Read))
{
    using (WordDocument document = new WordDocument(docStream, FormatType.Markdown))
    {
        MemoryStream outputStream = new MemoryStream();
        document.Save(outputStream, FormatType.Docx);
    }
}
```

#### Windows-Specific
```csharp
WordDocument document = new WordDocument("Input.md", FormatType.Markdown);
MemoryStream outputStream = new MemoryStream();
document.Save(outputStream, FormatType.Docx);
document.Close();
```

### Save to File

#### Cross-Platform
```csharp
using (FileStream docStream = new FileStream("Input.md", FileMode.Open, FileAccess.Read))
{
    using (WordDocument document = new WordDocument(docStream, FormatType.Markdown))
    {
        var outputPath = Path.Combine(Directory.GetCurrentDirectory(), "output", "Output.docx");
        using (FileStream outStream = new FileStream(outputPath, FileMode.Create, FileAccess.ReadWrite))
        {
            document.Save(outStream, FormatType.Docx);
        }
    }
}
```

#### Windows-Specific
```csharp
WordDocument document = new WordDocument("Input.md", FormatType.Markdown);
document.Save("Output.docx", FormatType.Docx);
document.Close();
```

### Import Markdown Instance to Word

#### Common for Cross-Platform and Windows-Specific
```csharp
    MarkdownDocument markdownDocument = new MarkdownDocument("Input.md");
    // Create a WordDocument instance
    WordDocument document = new WordDocument();
    // Open the Markdown document as Word document
    document.Open(markdownDocument);
    // Create file stream to save
    FileStream fileStream = new FileStream("Output.docx", FileMode.Create);
    // Save the Word document
    document.Save(fileStream, Syncfusion.DocIO.FormatType.Docx);
    // Dispose the objects
    markdownDocument.Dispose();
    document.Dispose();
```


### Customize Image During Import

#### Cross-Platform
```csharp
using (FileStream docStream = new FileStream("Input.md", FileMode.Open, FileAccess.Read))
{
    using (WordDocument document = new WordDocument())
    {
        document.MdImportSettings.ImageNodeVisited += (sender, args) =>
        {
            if (args.Uri == "Image_1.png")
                args.ImageStream = new FileStream("Image_1.png", FileMode.Open);
        };
        document.Open(docStream, FormatType.Markdown);
        MemoryStream outputStream = new MemoryStream();
        document.Save(outputStream, FormatType.Docx);
    }
}
```

#### Windows-Specific
```csharp
WordDocument document = new WordDocument();
document.MdImportSettings.ImageNodeVisited += (sender, args) =>
{
    if (args.Uri == "Image_1.png")
        args.ImageStream = new FileStream("Image_1.png", FileMode.Open);
};
document.Open("Input.md");

MemoryStream outputStream = new MemoryStream();
document.Save(outputStream, FormatType.Docx);
document.Close();
```

---

## Convert Word to Markdown

### Minimal Code

#### Cross-Platform
```csharp
using (FileStream docStream = new FileStream("Input.docx", FileMode.Open, FileAccess.Read))
{
    using (WordDocument document = new WordDocument(docStream, FormatType.Docx))
    {
        // Initialize DocIORenderer to preserve Word elements (including charts) as images
        using (DocIORenderer renderer = new DocIORenderer())
        {
            MemoryStream outputStream = new MemoryStream();
            document.Save(outputStream, FormatType.Markdown);
            // Renderer is properly disposed here
        }
    }
}
```

#### Windows-Specific
```csharp
WordDocument document = new WordDocument("Input.docx", FormatType.Docx);
document.ChartToImageConverter = new ChartToImageConverter();
MemoryStream outputStream = new MemoryStream();
document.Save(outputStream, FormatType.Markdown);
document.Close();
```

### Save to File

#### Cross-Platform
```csharp
using (FileStream docStream = new FileStream("Input.docx", FileMode.Open, FileAccess.Read))
{
    using (WordDocument document = new WordDocument(docStream, FormatType.Docx))
    {
        // Initialize DocIORenderer to preserve Word elements (including charts) as images
        using (DocIORenderer renderer = new DocIORenderer())
        {
            var outputPath = Path.Combine(Directory.GetCurrentDirectory(), "output", "Output.md");
            using (FileStream outStream = new FileStream(outputPath, FileMode.Create, FileAccess.ReadWrite))
            {
                document.Save(outStream, FormatType.Markdown);
            }
            // Renderer is properly disposed here
        }
    }
}
```

#### Windows-Specific
```csharp
WordDocument document = new WordDocument("Input.docx", FormatType.Docx);
document.ChartToImageConverter = new ChartToImageConverter();
document.Save("Output.md", FormatType.Markdown);
document.Close();
```

### Export Markdown Instance from Word

#### Cross-Platform
```csharp
    // Open a Word document from file stream
    using (FileStream fileStream = new FileStream("Input.docx", FileMode.Open))
    {
        // Open a WordDocument instance 
        using (WordDocument wordDoc = new WordDocument(fileStream, Syncfusion.DocIO.FormatType.Docx))
        {
            // Initialize DocIORenderer to preserve Word elements (including charts) as fallback images
            using (DocIORenderer renderer = new DocIORenderer())
            {
                // Convert the Word document to Markdown
                using (MarkdownDocument markdownDocument = wordDoc.GetMarkdownDocument())
                {
                    // Save or process the Markdown document as needed
                    markdownDocument.Save("Output.md");
                    // All resources are properly disposed here
                }
            }
        }
    }
```

#### Windows-Specific
```csharp
    // Open a Word document from file stream
    FileStream fileStream = new FileStream("Input.docx", FileMode.Open);
    // Open a WordDocument instance 
    WordDocument wordDoc = new WordDocument(fileStream, Syncfusion.DocIO.FormatType.Docx);
    // Initialize ChartToImageConverter to preserve charts as fallback images
    wordDoc.ChartToImageConverter = new ChartToImageConverter();
    // Convert the Word document to Markdown
    MarkdownDocument markdownDocument = wordDoc.GetMarkdownDocument();
    // Save or process the Markdown document as needed
    markdownDocument.Save("Output.md");
    // Dispose the object
    markdownDocument.Dispose();
```



### Export Images to Folder

#### Cross-Platform
```csharp
using (FileStream docStream = new FileStream("Input.docx", FileMode.Open, FileAccess.Read))
{
    using (WordDocument document = new WordDocument(docStream, FormatType.Docx))
    {
        // Initialize DocIORenderer to preserve Word elements (including charts) as images
        using (DocIORenderer renderer = new DocIORenderer())
        {
            document.SaveOptions.MarkdownExportImagesFolder = "D:\\WordToMdImages";
            MemoryStream outputStream = new MemoryStream();
            document.Save(outputStream, FormatType.Markdown);
            // Renderer is properly disposed here
        }
    }
}
```

#### Windows-Specific
```csharp
WordDocument document = new WordDocument("Input.docx", FormatType.Docx);
document.ChartToImageConverter = new ChartToImageConverter();
document.SaveOptions.MarkdownExportImagesFolder = "D:\\WordToMdImages";
document.Save("Output.md", FormatType.Markdown);
document.Close();
```

### Customize Image Path During Export

#### Cross-Platform
```csharp
using (FileStream docStream = new FileStream("Input.docx", FileMode.Open, FileAccess.Read))
{
    using (WordDocument document = new WordDocument(docStream, FormatType.Docx))
    {
        // Initialize DocIORenderer to preserve Word elements (including charts) as images
        using (DocIORenderer renderer = new DocIORenderer())
        {
            document.SaveOptions.ImageNodeVisited += (sender, args) =>
            {
                string imagePath = @"D:\Output\" + Path.GetFileName(args.Uri);
                using (FileStream fs = File.Create(imagePath))
                    args.ImageStream.CopyTo(fs);
                args.Uri = imagePath;
            };
            
            MemoryStream outputStream = new MemoryStream();
            document.Save(outputStream, FormatType.Markdown);
            // Renderer is properly disposed here
        }
    }
}
```

#### Windows-Specific
```csharp
WordDocument document = new WordDocument("Input.docx", FormatType.Docx);
document.ChartToImageConverter = new ChartToImageConverter();
document.SaveOptions.ImageNodeVisited += (sender, args) =>
{
    string imagePath = @"D:\Output\" + Path.GetFileName(args.Uri);
    using (FileStream fs = File.Create(imagePath))
        args.ImageStream.CopyTo(fs);
    args.Uri = imagePath;
};

document.Save("Output.md", FormatType.Markdown);
document.Close();
```

---

## Supported Markdown Syntax

| Element | Syntax | Description |
|---------|--------|-------------|
| **Bold** | `**text**` | Bold formatting |
| **Italic** | `*text*` | Italic formatting |
| **Bold & Italic** | `***text***` | Both bold and italic |
| **Strikethrough** | `~~text~~` | Strikethrough text |
| **Subscript** | `<sub>text</sub>` | Subscript formatting |
| **Superscript** | `<sup>text</sup>` | Superscript formatting |
| **Headings** | `# H1, ## H2, ... ###### H6` | 6 levels of headings |
| **Block Quote** | `> text` | Block quote |
| **Code Span** | `` `code` `` | Inline code |
| **Indented Code** | 4 spaces + code | Code block |
| **Fenced Code** |  ``` code ```  | Fenced code block |
| **Ordered List** | `1. Item` | Numbered list |
| **Unordered List** | `- Item` | Bulleted list |
| **Links** | `[text](url)` | Hyperlink |
| **Images** | `![alt](url)` | Image reference |
| **Horizontal Line** | `---` | Thematic break |
| **Task Item** | `- [ ] Task` | Checkbox task (with content control) |
| **Table** | Pipe/underscore syntax | Tables (GitHub-flavored) |

---

## Supported Word Elements in Markdown Conversion

| Element | Support | Notes |
|---------|---------|-------|
| **Paragraphs** | ✓ | Preserved as single line |
| **Tables** | ✓ | GitHub-flavored syntax; nested tables merged to parent |
| **Images** | ✓ | Base64 in stream; folder export for file save |
| **Hyperlinks** | ✓ | Preserved in Markdown syntax |
| **Lists** | ✓ | Numbered and bulleted; restart requires empty paragraph |
| **Headings** | ✓ | 6 levels (Word styles: Heading 1-6) |
| **Bold/Italic** | ✓ | Text formatting preserved |
| **Fields** | ✓ | Field result preserved |
| **Form Fields** | ✓ | Text and dropdown results preserved |
| **Content Controls** | ✓ | Contents preserved; checkbox = task item |
| **Block Quotes** | ✓ | Quote style applied; nested via `>` prefix |

---

## Word Styles for Markdown Export

| Word Style | Markdown Result |
|-----------|-----------------|
| Heading 1-6 | `# Heading 1` through `###### Heading 6` |
| Quote | `> Block quote` |
| FencedCode | ``` Fenced code block ``` |
| IndentedCode | Indented code block (4 spaces) |
| InlineCode (character style) | `` `inline code` `` |

---

## Key Properties and Methods

| Item | Type | Description |
|------|------|-------------|
| `FormatType.Markdown` | Enum | Specifies Markdown format for conversion |
| `FormatType.Docx` | Enum | Specifies DOCX format for conversion |
| `Save(stream, FormatType)` | Method | Save document to stream with specified format |
| `Save(path, FormatType)` | Method | Save document to file with specified format |
| `WordDocument(stream, FormatType)` | Constructor | Load document from stream with specified format |
| `MdImportSettings.ImageNodeVisited` | Event | Customize image data during Markdown import |
| `SaveOptions.ImageNodeVisited` | Event | Customize image path during Word to Markdown export |
| `SaveOptions.MarkdownExportImagesFolder` | Property | Set folder for image export during conversion |

---

## Common Properties

| Property | Type | Description |
|----------|------|-------------|
| `FormatType` | Enum | Document format (Markdown, Docx, etc.) |
| `FileMode.Open` | Enum | Open existing file stream |
| `FileMode.Create` | Enum | Create new file stream |
| `FileAccess.Read` | Enum | Read-only access |
| `FileAccess.ReadWrite` | Enum | Read and write access |
| `FileShare.ReadWrite` | Enum | Allow concurrent read and write |

---

## Placeholders

- `"Input.md"` → Replace with `"{markdown-file-path}"`
- `"Input.docx"` → Replace with `"{docx-file-path}"`
- `"Output.md"` → Replace with `"{output-markdown-path}"`
- `"Output.docx"` → Replace with `"{output-docx-path}"`
- `"Image_1.png"` → Replace with `"{image-file-path}"`
- `"D:\\WordToMdImages"` → Replace with `"{images-folder-path}"`
- `"D:\\Output\\"` → Replace with `"{output-folder-path}"`

---

