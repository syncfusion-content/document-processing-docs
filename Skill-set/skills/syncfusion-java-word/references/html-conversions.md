# HTML Conversions

> Bidirectional HTML-DOCX conversion — converting HTML files to Word documents and Word documents to HTML, XHTML validation, customizing conversion settings, image handling, and supported CSS selectors.

---

## Required common usings

```java
import com.syncfusion.docio.*;
```

## Convert HTML to Word

### Minimal Code

```java
WordDocument document = new WordDocument("Template.html", FormatType.Html);
document.save("Output.docx", FormatType.Docx);
document.close();
```

### Using MemoryStream

```java
WordDocument document = new WordDocument("Input.html", FormatType.Html);
ByteArrayOutputStream stream = new ByteArrayOutputStream();
document.save(stream, FormatType.Docx);
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

```java
String htmlString = "<p><b>Valid HTML content</b></p>";
boolean isValid = document.getLastSection().getBody().isValidXHTML(htmlString, XHTMLValidationType.Transitional);
if (isValid) {
    // Process HTML
}
```

---

## Insert HTML into Word Document

### Insert at Paragraph Position
```java
WordDocument document = new WordDocument("Template.docx", FormatType.Docx);
String htmlString = "<p><b>Inserted HTML content</b></p>";

if (document.getLastSection().getBody().isValidXHTML(htmlString, XHTMLValidationType.Transitional)) {
    document.getSections().get(0).getBody().insertXHTML(htmlString, 2, 0);
}
document.save("Output.docx", FormatType.Docx);
document.close();
```

### Append to Paragraph
```java
String htmlString = "<p>Appended <b>HTML</b> content</p>";
if (document.getLastSection().getBody().isValidXHTML(htmlString, XHTMLValidationType.Transitional)) {
    document.getSections().get(0).getBody().getParagraphs().get(0).appendHTML(htmlString);
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

```java
String html = "
<style>
    p { color: blue; font-size: 14px; }
    .highlight { background-color: yellow; }
</style>
<p>Normal paragraph</p>
<p class='highlight'>Highlighted paragraph</p>";

 WordDocument document = new WordDocument();
document.ensureMinimal();
WParagraph para = document.getLastParagraph();
para.appendHTML(html);
document.save("Output.docx", FormatType.Docx);
document.close();
```

---

## Convert Word to HTML

### Minimal Code

```java
WordDocument document = new WordDocument("Template.docx", FormatType.Docx);
document.save("Output.html", FormatType.Html);
document.close();
```

---

## Customize Word to HTML Conversion

### Export with Headers/Footers and Settings

```java
FileInputStream fileStream = new FileInputStream("Input.docx");
WordDocument document = new WordDocument(fileStream, FormatType.Docx);

document.getSaveOptions().setHtmlExportHeadersFooters(true);
document.getSaveOptions().setHtmlExportTextInputFormFieldAsText(false);
document.getSaveOptions().setHtmlExportCssStyleSheetType(CssStyleSheetType.Inline);
document.getSaveOptions().setHtmlExportOmitXmlDeclaration(false);

FileOutputStream outputStream = new FileOutputStream("Output.html");
document.save(outputStream, FormatType.Html);

outputStream.close();
document.close();
fileStream.close();
```

### Export Body Content Alone

```java
FileInputStream fileStream = new FileInputStream("Input.docx");
WordDocument document = new WordDocument(fileStream, FormatType.Docx);
FileOutputStream outputStream = new FileOutputStream("Output.html");
document.getSaveOptions().setHtmlExportBodyContentAlone(true);
document.save(outputStream, FormatType.Html);
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
| `saveOptions.ImageNodeVisited` | Event | Customize image path during HTML export |
| `isValidXHTML()` | Method | Validate HTML against XHTML schema |
| `insertXHTML()` | Method | Insert HTML at specific paragraph/item |
| `appendHTML()` | Method | Append HTML to paragraph |
| `FormatType.Html` | Enum | Specify HTML format for conversion |

---

## Placeholders

- `"Input.html"` → Replace with `"{html-file-path}"`
- `"Template.docx"` → Replace with `"{docx-file-path}"`
- `"Output.docx"` → Replace with `"{output-docx-path}"`
- `"Output.html"` → Replace with `"{output-html-path}"`
- `2` (in InsertXHTML) → Replace with `{paragraph-index}`
- `0` (in InsertXHTML) → Replace with `{item-index}` in paragraph
