# HTML Conversions

> Bidirectional HTML-DOCX conversion — converting HTML files to Word documents and Word documents to HTML, XHTML validation, customizing conversion settings, image handling, and supported CSS selectors.

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

## Convert HTML to Word

### Minimal Code

#### Common for Cross-Platform and Windows-Specific
```csharp
FileStream fileStream = new FileStream("Input.html", FileMode.Open, FileAccess.Read, FileShare.ReadWrite);
var document = new WordDocument(fileStream, FormatType.Html);
var outputPath = Path.Combine(Directory.GetCurrentDirectory(), "output", "Output.docx");
var outStream = new FileStream(outputPath, FileMode.Create, FileAccess.ReadWrite);
document.Save(outStream, FormatType.Docx);
outStream.Close();
fileStream.Close();
document.Close();
```

### Using MemoryStream

#### Common for Cross-Platform and Windows-Specific
```csharp
var document = new WordDocument("Input.html", FormatType.Html);
var stream = new MemoryStream();
document.Save(stream, FormatType.Docx);
stream.Close();
document.Close();
```

---

## XHTML Validation

### Validation Types

| Type | Behavior |
|------|----------|
| `XHTMLValidationType.None` | No schema validation (default, supports improper closing tags from v27+) |
| `XHTMLValidationType.Transitional` | Allows several attributes within tags |
| `XHTMLValidationType.Strict` | Does not allow attributes inside tags |

### Validate HTML String

#### Windows-Specific
```csharp
string htmlString = "<p><b>Valid HTML content</b></p>";
bool isValid = document.LastSection.Body.IsValidXHTML(htmlString, XHTMLValidationType.Transitional);
if (isValid)
{
    // Process HTML
}
```

---

## Insert HTML into Word Document

### Insert at Paragraph Position

#### Common for Cross-Platform and Windows-Specific
```csharp
WordDocument document = new WordDocument("Template.docx");
string htmlString = "<p><b>Inserted HTML content</b></p>";

if (document.LastSection.Body.IsValidXHTML(htmlString, XHTMLValidationType.Transitional))
{
    document.Sections[0].Body.InsertXHTML(htmlString, 2, 0);
}

document.Save("Output.docx");
document.Close();
```

### Append to Paragraph

#### Common for Cross-Platform and Windows-Specific
```csharp
string htmlString = "<p>Appended <b>HTML</b> content</p>";

if (document.LastSection.Body.IsValidXHTML(htmlString, XHTMLValidationType.Transitional))
{
    document.Sections[0].Body.Paragraphs[0].AppendHTML(htmlString);
}
```

---

## Supported CSS Selectors

DocIO supports internally defined CSS selectors (inline styles only):

| Selector | CSS Code | HTML |
|----------|----------|------|
| Element | `p { color: yellow; font-size: 36px; }` | `<p>Paragraph</p>` |
| Class | `.highlight { color: red; }` | `<p class="highlight">Text</p>` |
| ID | `#demo { color: blue; }` | `<p id="demo">Text</p>` |
| Group | `h2, .title { color: green; }` | `<h2>Heading</h2><p class="title">Title</p>` |
| Compound | `p.bold { font-weight: bold; }` | `<p class="bold">Bold</p>` |
| Descendant | `div p { color: red; }` | `<div><p>Nested</p></div>` |

### CSS Example

#### Common for Cross-Platform and Windows-Specific
```csharp
string html = @"
<style>
    p { color: blue; font-size: 14px; }
    .highlight { background-color: yellow; }
</style>
<p>Normal paragraph</p>
<p class='highlight'>Highlighted paragraph</p>";

var document = new WordDocument(html, FormatType.Html);
document.Save("Output.docx");
document.Close();
```

---

## Convert Word to HTML

### Minimal Code

#### Common for Cross-Platform and Windows-Specific
```csharp
FileStream fileStream = new FileStream("Template.docx", FileMode.Open, FileAccess.Read, FileShare.ReadWrite);
var document = new WordDocument(fileStream, FormatType.Docx);
var outputPath = Path.Combine(Directory.GetCurrentDirectory(), "output", "Output.html");
var outStream = new FileStream(outputPath, FileMode.Create, FileAccess.ReadWrite);
document.Save(outStream, FormatType.Html);
outStream.Close();
fileStream.Close();
document.Close();
```

### Using MemoryStream

#### Common for Cross-Platform and Windows-Specific
```csharp
var document = new WordDocument("Template.docx", FormatType.Docx);
var stream = new MemoryStream();
document.Save(stream, FormatType.Html);
stream.Close();
document.Close();
```

---

## Customize Word to HTML Conversion

### Export with Headers/Footers and Settings

#### Common for Cross-Platform and Windows-Specific
```csharp
using (FileStream fileStream = new FileStream("Input.docx", FileMode.Open, FileAccess.Read, FileShare.ReadWrite))
{
    using (WordDocument document = new WordDocument(fileStream, FormatType.Docx))
    {
        document.SaveOptions.HtmlExportHeadersFooters = true;
        document.SaveOptions.HtmlExportTextInputFormFieldAsText = false;
        document.SaveOptions.HtmlExportCssStyleSheetType = CssStyleSheetType.Inline;
        document.SaveOptions.HtmlExportOmitXmlDeclaration = false;

        using (FileStream outputStream = new FileStream("Output.html", FileMode.Create, FileAccess.ReadWrite))
        {
            document.Save(outputStream, FormatType.Html);
        }
    }
}
```

### HTML Export Settings

#### Windows-Specific
```csharp
using (FileStream fileStream = new FileStream("Input.docx", FileMode.Open, FileAccess.Read, FileShare.ReadWrite))
{
    using (WordDocument document = new WordDocument(fileStream, FormatType.Docx))
    {
        // Export CSS as an external file
        document.SaveOptions.HtmlExportCssStyleSheetType = CssStyleSheetType.External;
        document.SaveOptions.HtmlExportCssStyleSheetFileName = "UserDefinedFileName.css";
        // Export images as Base64 inside HTML
        document.SaveOptions.HTMLExportImageAsBase64 = true;
        // Specify folder for exported images
        document.SaveOptions.HtmlExportImagesFolder = @"Output\Images\";

        using (FileStream outputStream = new FileStream("Output.html", FileMode.Create, FileAccess.ReadWrite))
        {
            document.Save(outputStream, FormatType.Html);
        }
    }
}
```

### Export Body Content Alone

#### Common for Cross-Platform and Windows-Specific
```csharp
using (FileStream fileStream = new FileStream("Input.docx", FileMode.Open, FileAccess.Read, FileShare.ReadWrite))
{
    using (WordDocument document = new WordDocument(fileStream, FormatType.Docx))
    {
        document.SaveOptions.HtmlExportBodyContentAlone = true;

        using (FileStream outputStream = new FileStream("Output.html", FileMode.Create, FileAccess.ReadWrite))
        {
            document.Save(outputStream, FormatType.Html);
        }
    }
}
```

---

## Customize Image Path (Word to HTML)

### Save Images Externally

#### Common for Cross-Platform and Windows-Specific
```csharp
using (FileStream docStream = new FileStream("Input.docx", FileMode.Open, FileAccess.Read))
{
    using (WordDocument document = new WordDocument(docStream, FormatType.Docx))
    {
        document.SaveOptions.ImageNodeVisited += (s, e) =>
        {
            string imagePath = @"Output\Images\Image.png";
            using (FileStream fileStream = File.Create(imagePath))
                e.ImageStream.CopyTo(fileStream);
            e.Uri = imagePath;
        };

        using (FileStream outputStream = new FileStream("Output.html", FileMode.Create, FileAccess.ReadWrite))
        {
            document.Save(outputStream, FormatType.Html);
        }
    }
}
```

---

## Export Options Reference

| Option | Type | Description |
|--------|------|-------------|
| `HtmlExportHeadersFooters` | bool | Include headers and footers in HTML export |
| `HtmlExportTextInputFormFieldAsText` | bool | Treat text form fields as editable (false) or plain text (true) |
| `HtmlExportCssStyleSheetType` | Enum | CSS style sheet type: `Inline`, `External`, or `None` |
| `HtmlExportOmitXmlDeclaration` | bool | Omit XML declaration from output HTML |
| `HtmlExportBodyContentAlone` | bool | Export only body content, excluding HTML/HEAD tags |
| `ImageNodeVisited` | Event | Customize image path and save location during export |

---

## Common Properties

| Property | Type | Description |
|----------|------|-------------|
| `HTMLImportSettings.ImageNodeVisited` | Event | Customize image data during HTML import |
| `SaveOptions.ImageNodeVisited` | Event | Customize image path during HTML export |
| `IsValidXHTML()` | Method | Validate HTML against XHTML schema |
| `InsertXHTML()` | Method | Insert HTML at specific paragraph/item |
| `AppendHTML()` | Method | Append HTML to paragraph |
| `FormatType.Html` | Enum | Specify HTML format for conversion |

---

## Placeholders

- `"Input.html"` → Replace with `"{html-file-path}"`
- `"Template.docx"` → Replace with `"{docx-file-path}"`
- `"Output.docx"` → Replace with `"{output-docx-path}"`
- `"Output.html"` → Replace with `"{output-html-path}"`
- `2` (in InsertXHTML) → Replace with `{paragraph-index}`
- `0` (in InsertXHTML) → Replace with `{item-index}` in paragraph
