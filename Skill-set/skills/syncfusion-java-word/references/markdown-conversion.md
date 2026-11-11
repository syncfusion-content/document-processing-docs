# Markdown Conversions

> Bidirectional Markdown-DOCX conversion — converting Markdown files to Word documents and Word documents to Markdown format, supporting CommonMark and GitHub-flavored syntax with cross-platform and Windows-specific approaches.

---

## Required common usings

```java
import com.syncfusion.docio.*;
```

## Convert Markdown to Word

### Minimal Code

```java
WordDocument document = new WordDocument("Input.md", FormatType.Markdown);
document.save("Output.docx", FormatType.Docx);
document.close();
```

### Save to File

```java
WordDocument document = new WordDocument("Input.md", FormatType.Markdown);
document.save("Output.docx", FormatType.Docx);
document.close();
```

### Customize Image Data

```java
//Create a Word document instance.
WordDocument document = new WordDocument();
//Customize the image while importing Markdown using event.
document.getMdImportSettings().ImageNodeVisited.add("mdImportSettings_ImageNodeVisited", new MdImageNodeVisitedEventHandler() 
{ListSupport<MdImageNodeVisitedEventHandler> delegateList = new ListSupport<MdImageNodeVisitedEventHandler>(MdImageNodeVisitedEventHandler.class);
// Represents event handling for MdImageNodeVisitedEventHandlerCollection.
public void invoke(Object sender, MdImageNodeVisitedEventArgs args) throws Exception
{
    mdImportSettings_ImageNodeVisited(sender, args);
}
// Represents the method that handles ImageNodeVisited event.
public void dynamicInvoke(Object... args) throws Exception
{
    mdImportSettings_ImageNodeVisited((Object) args[0], (MdImageNodeVisitedEventArgs) args[1]);
}
// Represents the method that handles ImageNodeVisited event to add collection item.
public void add(MdImageNodeVisitedEventHandler delegate) throws Exception
{
    if (delegate != null)
        delegateList.add(delegate);
}
// Represents the method that handles ImageNodeVisited event to remove collection item.
public void remove(MdImageNodeVisitedEventHandler delegate) throws Exception
{
    if (delegate != null)
        delegateList.remove(delegate);
}
});
//Open the Markdown file.
document.open("Input.md");
//Save as a Word document.
document.save("Sample.docx");
```

```java
private static void mdImportSettings_ImageNodeVisited(Object sender,MdImageNodeVisitedEventArgs args)throws Exception
{
    //Set the image stream based on the image name from the input Markdown.
    if(args.getUri().equals("Image_1.png"))
        args.setImageStream(new FileStreamSupport("Image_1.png",FileMode.Open));
    else
        if(args.getUri().equals("Image_2.png"))
            args.setImageStream(new FileStreamSupport("Image_2.png",FileMode.Open));
}
```

## Convert Word to Markdown

### Minimal Code

```java
WordDocument document = new WordDocument("Input.docx", FormatType.Docx);
document.save("Output.md", FormatType.Markdown);
document.close();
```

### Save to File

```java
WordDocument document = new WordDocument("Input.docx", FormatType.Docx);
document.save("Output.md", FormatType.Markdown);
document.close();
```

### Export Images to Folder

```java
Path imagesFolder = Paths.get("D:\\WordToMdImages");
Files.createDirectories(imagesFolder);

try (FileInputStream docStream = new FileInputStream("Input.docx");
        WordDocument document = new WordDocument(docStream, FormatType.Docx)) {

    // Adjust API name if your SDK differs
    document.getSaveOptions().setMarkdownExportImagesFolder(imagesFolder.toString());

    try (ByteArrayOutputStream outputStream = new ByteArrayOutputStream()) {
        document.save(outputStream, FormatType.Markdown);

        // write markdown to file
        try (FileOutputStream fos = new FileOutputStream("Output.md")) {
            fos.write(outputStream.toByteArray());
        }
    }
}
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
| `save(stream, FormatType)` | Method | Save document to stream with specified format |
| `save(path, FormatType)` | Method | Save document to file with specified format |
| `WordDocument(stream, FormatType)` | Constructor | Load document from stream with specified format |
| `MdImportSettings.ImageNodeVisited` | Event | Customize image data during Markdown import |
| `saveOptions.ImageNodeVisited` | Event | Customize image path during Word to Markdown export |
| `saveOptions.MarkdownExportImagesFolder` | Property | Set folder for image export during conversion |

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

