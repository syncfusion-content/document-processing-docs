# Split Word Documents

> Document splitting operations — split Word documents by sections, headings, bookmarks, and placeholder text.

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

## Split by Section

### Minimal Code

#### Common for Cross-Platform and Windows-Specific
```csharp
var inputPath = Path.Combine(Directory.GetCurrentDirectory(), "input", "Template.docx");
var fs = new FileStream(inputPath, FileMode.Open, FileAccess.Read, FileShare.ReadWrite);
var document = new WordDocument(fs, FormatType.Docx);

for (int i = 0; i < document.Sections.Count; i++)
{
    WordDocument newDocument = new WordDocument();
    newDocument.Sections.Add(document.Sections[i].Clone());
    
    var outputPath = Path.Combine(Directory.GetCurrentDirectory(), "output", $"Section{i}.docx");
    var outputStream = new FileStream(outputPath, FileMode.Create, FileAccess.ReadWrite);
    newDocument.Save(outputStream, FormatType.Docx);
    outputStream.Close();
    newDocument.Close();
}
fs.Close();
document.Close();
```

### Placeholders
- `"Template.docx"` → Replace with `"{input-filename}"`
- `"Section{i}.docx"` → Replace with `"{output-prefix}{i}.docx"`

---

## Split by Heading

### Minimal Code

#### Common for Cross-Platform and Windows-Specific
```csharp
var inputPath = Path.Combine(Directory.GetCurrentDirectory(), "input", "Template.docx");
var inputStream = new FileStream(inputPath, FileMode.Open, FileAccess.Read);
var document = new WordDocument(inputStream, FormatType.Docx);

WordDocument newDocument = null;
WSection newSection = null;
int headingIndex = 0;

foreach (WSection section in document.Sections)
{
    if (newDocument != null)
        newSection = AddSection(newDocument, section);
        
    foreach (TextBodyItem item in section.Body.ChildEntities)
    {
        if (item is WParagraph)
        {
            WParagraph paragraph = item as WParagraph;
            if (paragraph.StyleName == "Heading 1")
            {
                if (newDocument != null)
                {
                    string fileName = $"Document{headingIndex + 1}.docx";
                    SaveWordDocument(newDocument, fileName);
                    headingIndex++;
                }
                newDocument = new WordDocument();
                newSection = AddSection(newDocument, section);
                AddEntity(newSection, paragraph);
            }
            else if (newDocument != null)
                AddEntity(newSection, paragraph);
        }
        else
            AddEntity(newSection, item);
    }
}

if (newDocument != null)
{
    string fileName = $"Document{headingIndex + 1}.docx";
    SaveWordDocument(newDocument, fileName);
}
inputStream.Close();
document.Close();
newDocument.Close();
```

### Helper Methods

#### Common for Cross-Platform and Windows-Specific
```csharp
WSection AddSection(WordDocument newDocument, WSection section)
{
    WSection newSection = section.Clone();
    newSection.Body.ChildEntities.Clear();
    newSection.HeadersFooters.FirstPageHeader.ChildEntities.Clear();
    newSection.HeadersFooters.FirstPageFooter.ChildEntities.Clear();
    newSection.HeadersFooters.OddFooter.ChildEntities.Clear();
    newSection.HeadersFooters.OddHeader.ChildEntities.Clear();
    newSection.HeadersFooters.EvenHeader.ChildEntities.Clear();
    newSection.HeadersFooters.EvenFooter.ChildEntities.Clear();
    newDocument.Sections.Add(newSection);
    return newSection;
}

void AddEntity(WSection newSection, Entity entity)
{
    newSection.Body.ChildEntities.Add(entity.Clone());
}

void SaveWordDocument(WordDocument newDocument, string fileName)
{
    var outputPath = Path.Combine(Directory.GetCurrentDirectory(), "output", fileName);
    var outputStream = new FileStream(outputPath, FileMode.Create, FileAccess.ReadWrite);
    newDocument.Save(outputStream, FormatType.Docx);
    outputStream.Close();
    newDocument.Close();
}
```

### Placeholders
- `"Heading 1"` → Replace with `"{heading-style}"` (can be "Heading 1", "Heading 2", etc.)
- `"Document{i}.docx"` → Replace with `"{output-prefix}{i}.docx"`

---

## Split by Bookmark

### Minimal Code

#### Common for Cross-Platform and Windows-Specific
```csharp
var inputPath = Path.Combine(Directory.GetCurrentDirectory(), "input", "Template.docx");
var fs = new FileStream(inputPath, FileMode.Open, FileAccess.Read, FileShare.ReadWrite);
var document = new WordDocument(fs, FormatType.Docx);

BookmarksNavigator bookmarksNavigator = new BookmarksNavigator(document);
BookmarkCollection bookmarkCollection = document.Bookmarks;

foreach (Bookmark bookmark in bookmarkCollection)
{
    bookmarksNavigator.MoveToBookmark(bookmark.Name);
    WordDocumentPart documentPart = bookmarksNavigator.GetContent();
    
    var newDocument = documentPart.GetAsWordDocument();
    var outputPath = Path.Combine(Directory.GetCurrentDirectory(), "output", $"{bookmark.Name}.docx");
    var outputStream = new FileStream(outputPath, FileMode.Create, FileAccess.ReadWrite);
    newDocument.Save(outputStream, FormatType.Docx);
    outputStream.Close();
    newDocument.Close();
}
fs.Close();
document.Close();
```

### Split Specific Bookmark

#### Common for Cross-Platform and Windows-Specific
```csharp
var inputPath = Path.Combine(Directory.GetCurrentDirectory(), "input", "Template.docx");
var fs = new FileStream(inputPath, FileMode.Open, FileAccess.Read, FileShare.ReadWrite);
var document = new WordDocument(fs, FormatType.Docx);

BookmarksNavigator bookmarksNavigator = new BookmarksNavigator(document);
bookmarksNavigator.MoveToBookmark("ChapterOne");

WordDocumentPart documentPart = bookmarksNavigator.GetContent();

var newDocument = documentPart.GetAsWordDocument();
var outputPath = Path.Combine(Directory.GetCurrentDirectory(), "output", "ChapterOne.docx");
var outputStream = new FileStream(outputPath, FileMode.Create, FileAccess.ReadWrite);
newDocument.Save(outputStream, FormatType.Docx);
outputStream.Close();
newDocument.Close();
fs.Close();
document.Close();
```

### Placeholders
- `"Template.docx"` → Replace with `"{input-filename}"`
- `"ChapterOne"` → Replace with `"{bookmark-name}"`

---

## Split by Placeholder Text

### Minimal Code

#### Common for Cross-Platform and Windows-Specific
```csharp
var inputPath = Path.Combine(Directory.GetCurrentDirectory(), "input", "Template.docx");
var fs = new FileStream(inputPath, FileMode.Open, FileAccess.Read, FileShare.ReadWrite);
var document = new WordDocument(fs, FormatType.Docx);

TextSelection[] textSelections = document.FindAll(new Regex("<<(.*)>>"));

if (textSelections != null)
{
    int bkmkId = 1;
    List<string> bookmarks = new List<string>();
    
    for (int i = 0; i < textSelections.Length; i++)
    {
        WTextRange textRange = textSelections[i].GetAsOneRange();
        WParagraph startParagraph = textRange.OwnerParagraph;
        int index = startParagraph.ChildEntities.IndexOf(textRange);
        
        string bookmarkName = $"Bookmark_{bkmkId}";
        bookmarks.Add(bookmarkName);
        
        BookmarkStart bkmkStart = new BookmarkStart(document, bookmarkName);
        startParagraph.ChildEntities.Insert(index, bkmkStart);
        textRange.Text = string.Empty;
        
        i++;
        
        textRange = textSelections[i].GetAsOneRange();
        WParagraph endParagraph = textRange.OwnerParagraph;
        index = endParagraph.ChildEntities.IndexOf(textRange);
        
        BookmarkEnd bkmkEnd = new BookmarkEnd(document, bookmarkName);
        endParagraph.ChildEntities.Insert(index + 1, bkmkEnd);
        bkmkId++;
        textRange.Text = string.Empty;
    }
    
    BookmarksNavigator bookmarksNavigator = new BookmarksNavigator(document);
    int fileIndex = 1;
    
    foreach (string bookmark in bookmarks)
    {
        bookmarksNavigator.MoveToBookmark(bookmark);
        WordDocumentPart wordDocumentPart = bookmarksNavigator.GetContent();
        
        var newDocument = wordDocumentPart.GetAsWordDocument();
        var outputPath = Path.Combine(Directory.GetCurrentDirectory(), "output", $"Placeholder_{fileIndex}.docx");
        var outputStream = new FileStream(outputPath, FileMode.Create, FileAccess.ReadWrite);
        newDocument.Save(outputStream, FormatType.Docx);
        outputStream.Close();
        newDocument.Close();
        fileIndex++;
    }
}
fs.Close();
document.Close();
```

### Custom Placeholder Pattern

#### Common for Cross-Platform and Windows-Specific
```csharp
TextSelection[] textSelections = document.FindAll(new Regex(@"\[\[START\]\].*?\[\[END\]\]"));
```

### Placeholders
- `"<<(.*)>>"` → Replace with `"{placeholder-pattern}"` (regex pattern)
- `"Placeholder_{i}.docx"` → Replace with `"{output-prefix}{i}.docx"`

---

## Complete Example: Split Document Multiple Ways

### Full Example

#### Common for Cross-Platform and Windows-Specific
```csharp
var inputPath = Path.Combine(Directory.GetCurrentDirectory(), "input", "LargeDocument.docx");
var outputDir = Path.Combine(Directory.GetCurrentDirectory(), "output");
Directory.CreateDirectory(outputDir);

var fs = new FileStream(inputPath, FileMode.Open, FileAccess.Read, FileShare.ReadWrite);
var document = new WordDocument(fs, FormatType.Docx);

// Option 1: Split by sections
Console.WriteLine("Splitting by sections...");
for (int i = 0; i < document.Sections.Count; i++)
{
    WordDocument sectionDoc = new WordDocument();
    sectionDoc.Sections.Add(document.Sections[i].Clone());
    var outputPath = Path.Combine(outputDir, $"Section_{i + 1}.docx");
    var stream = new FileStream(outputPath, FileMode.Create, FileAccess.ReadWrite);
    sectionDoc.Save(stream, FormatType.Docx);
    stream.Close();
    sectionDoc.Close();
    Console.WriteLine($"Created: Section_{i + 1}.docx");
}

// Option 2: Split by bookmarks
Console.WriteLine("\nSplitting by bookmarks...");
BookmarksNavigator navigator = new BookmarksNavigator(document);
foreach (Bookmark bookmark in document.Bookmarks)
{
    navigator.MoveToBookmark(bookmark.Name);
    WordDocumentPart part = navigator.GetContent();
    var bookmarkDoc = part.GetAsWordDocument();
    var outputPath = Path.Combine(outputDir, $"Bookmark_{bookmark.Name}.docx");
    var stream = new FileStream(outputPath, FileMode.Create, FileAccess.ReadWrite);
    bookmarkDoc.Save(stream, FormatType.Docx);
    stream.Close();
    bookmarkDoc.Close();
    Console.WriteLine($"Created: Bookmark_{bookmark.Name}.docx");
}
fs.Close();
document.Close();
Console.WriteLine("\nSplit operation completed!");
```

### Placeholders
- `"LargeDocument.docx"` → Replace with `"{input-filename}"`
- `"output"` → Replace with `"{output-directory}"`
