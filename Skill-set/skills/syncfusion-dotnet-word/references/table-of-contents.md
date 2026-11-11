# Table of Contents

> All table of contents operations — adding TOC fields, updating, applying switches, creating with custom styles, table of figures, and removing TOC.

---

## Required common usings

```csharp
using Syncfusion.DocIO;
using Syncfusion.DocIO.DLS;
```

## Required usings for Cross-Platform

```csharp
using Syncfusion.DocIORenderer;
```

## Required usings for Windows-Specific

```csharp
using System.IO;
```

## Add Table of Contents

### Minimal Code

#### Common for Cross-Platform and Windows-Specific
```csharp
var section = document.AddSection();
var para = section.AddParagraph();
para.AppendTOC(1, 3);
```

### With Content and Update

#### Common for Cross-Platform and Windows-Specific
```csharp
var document = new WordDocument();
var section = document.AddSection();
var para = section.AddParagraph();
para.AppendTOC(1, 3);

section = document.AddSection();
para = section.AddParagraph();
para.AppendText("First Chapter");
para.ApplyStyle(BuiltinStyle.Heading1);

section = document.AddSection();
para = section.AddParagraph();
para.AppendText("Second Chapter");
para.ApplyStyle(BuiltinStyle.Heading2);

document.UpdateTableOfContents();
var outputPath = Path.Combine(Directory.GetCurrentDirectory(), "output", "Document.docx");
var stream = new FileStream(outputPath, FileMode.Create, FileAccess.ReadWrite);
document.Save(stream, FormatType.Docx);
stream.Close();
document.Close();
```

### Placeholders
- `1, 3` → Replace with `{lower-level}, {upper-level}` (1-9)

---

## Update Table of Contents

### Minimal Code

#### Common for Cross-Platform and Windows-Specific
```csharp
var inputPath = Path.Combine(Directory.GetCurrentDirectory(), "input", "Template.docx");
var fs = new FileStream(inputPath, FileMode.Open, FileAccess.Read, FileShare.ReadWrite);
var document = new WordDocument(fs, FormatType.Docx);

document.UpdateTableOfContents();
var outputPath = Path.Combine(Directory.GetCurrentDirectory(), "output", "Updated.docx");
var stream = new FileStream(outputPath, FileMode.Create, FileAccess.ReadWrite);
document.Save(stream, FormatType.Docx);
fs.Close();
stream.Close();
document.Close();
```

### Notes
- Not supported in Silverlight, WinRT, Universal, Windows Phone
- Uses Word to PDF layout engine; may affect page number accuracy
- For ASP.NET Core, Blazor, Xamarin: reference Word to PDF assemblies/NuGet packages

---

## Apply TOC Switches

### Configure Properties

#### Common for Cross-Platform and Windows-Specific
```csharp
TableOfContent toc = paragraph.AppendTOC(1, 3);
toc.UseHeadingStyles = true;
toc.IncludePageNumbers = true;
toc.RightAlignPageNumbers = true;
toc.UseHyperlinks = true;
toc.IncludeNewLineCharacters = true;
toc.UseOutlineLevels = true;
toc.UseTableEntryFields = true;
toc.LowerHeadingLevel = 2;
toc.UpperHeadingLevel = 5;
```

### Disable Features
```csharp
TableOfContent toc = paragraph.AppendTOC(1, 3);
toc.IncludePageNumbers = false;
toc.UseHyperlinks = false;
toc.RightAlignPageNumbers = false;
```

---

## Create TOC with Custom Styles

### Minimal Code

#### Common for Cross-Platform and Windows-Specific
```csharp
var document = new WordDocument();

// Create custom style
Style style = (WParagraphStyle)document.AddParagraphStyle("CustomStyle");
style.CharacterFormat.Bold = true;
style.CharacterFormat.FontSize = 14;

var section = document.AddSection();
var para = section.AddParagraph();
TableOfContent toc = para.AppendTOC(1, 3);
toc.UseHeadingStyles = false;
toc.SetTOCLevelStyle(2, "CustomStyle");

// Add content with custom style
section = document.AddSection();
para = section.AddParagraph();
para.AppendText("Section One");
para.ApplyStyle("CustomStyle");

document.UpdateTableOfContents();
var outputPath = Path.Combine(Directory.GetCurrentDirectory(), "output", "CustomTOC.docx");
var stream = new FileStream(outputPath, FileMode.Create, FileAccess.ReadWrite);
document.Save(stream, FormatType.Docx);
stream.Close();
document.Close();
```

### Placeholders
- `"CustomStyle"` → Replace with `"{style-name}"`
- `2` → Replace with `{toc-level}` (1-9)

---

## Table of Figures

### Create with Captions

#### Common for Cross-Platform and Windows-Specific
```csharp
var fileStream = new FileStream("Input.docx", FileMode.Open, FileAccess.Read);
var document = new WordDocument(fileStream, FormatType.Docx);

WParagraph heading = new WParagraph(document);
heading.AppendText("List of Figures");
heading.ApplyStyle(BuiltinStyle.Heading1);
document.LastSection.Body.ChildEntities.Insert(0, heading);

WParagraph para = new WParagraph(document);
TableOfContent toc = para.AppendTOC(1, 3);
toc.UseHeadingStyles = false;
toc.TableOfFiguresLabel = "Figure";
document.LastSection.Body.ChildEntities.Insert(1, para);

// Add captions to pictures
List<Entity> pictures = document.FindAllItemsByProperty(EntityType.Picture, null, null);
foreach (WPicture picture in pictures)
{
    WParagraph captionPara = picture.AddCaption("Figure", CaptionNumberingFormat.Number, CaptionPosition.AfterImage) as WParagraph;
    captionPara.ApplyStyle(BuiltinStyle.Caption);
}

document.UpdateDocumentFields();
document.UpdateTableOfContents();
var stream = new FileStream("Output.docx", FileMode.Create, FileAccess.ReadWrite);
document.Save(stream, FormatType.Docx);
fileStream.Close();
stream.Close();
document.Close();
```

### Exclude Caption Labels
```csharp
TableOfContent toc = para.AppendTOC(1, 3);
toc.UseHeadingStyles = false;
toc.TableOfFiguresLabel = "Figure";
toc.IncludeCaptionLabelsAndNumbers = false;
```

### Placeholders
- `"Figure"` → Replace with `"Table"` or `"Chart"`
- `CaptionNumberingFormat.Number` → Replace with:
  - `CaptionNumberingFormat.Number` (1, 2, 3)
  - `CaptionNumberingFormat.Roman` (I, II, III)
  - `CaptionNumberingFormat.LowerRoman` (A, B, C)
  - `CaptionNumberingFormat.Alphabetic` (a, b, c)
- `CaptionPosition.AfterImage` → Replace with `CaptionPosition.AfterImage` (caption below the object) or `CaptionPosition.AboveImage` (caption above the object)

---

## Remove Table of Contents

### Minimal Code

#### Common for Cross-Platform and Windows-Specific
```csharp
var fileStream = new FileStream("Template.docx", FileMode.Open, FileAccess.Read, FileShare.ReadWrite);
var document = new WordDocument(fileStream, FormatType.Docx);

if (document.Sections[0].Body.Paragraphs.Count > 2)
{
    TableOfContent toc = document.Sections[0].Body.Paragraphs[2].Items[0] as TableOfContent;
    if (toc != null)
        RemoveTableOfContents(toc);
}

var stream = new FileStream("Output.docx", FileMode.Create, FileAccess.ReadWrite);
document.Save(stream, FormatType.Docx);
fileStream.Close();
stream.Close();
document.Close();
```

### Helper Methods

#### Common for Cross-Platform and Windows-Specific
```csharp
static void RemoveTableOfContents(TableOfContent toc)
{
    Entity lastItem = FindLastTOCItem(toc);
    if (lastItem == null) return;

    BookmarkStart bkmkStart = new BookmarkStart(toc.Document, "toc");
    toc.OwnerParagraph.Items.Insert(toc.OwnerParagraph.Items.IndexOf(toc), bkmkStart);
    BookmarkEnd bkmkEnd = new BookmarkEnd(toc.Document, "toc");
    WParagraph para = lastItem.Owner as WParagraph;
    para.Items.Insert(para.Items.IndexOf(lastItem) + 1, bkmkEnd);
    DeleteBookmarkContents("toc", toc.Document);
}

static Entity FindLastTOCItem(TableOfContent toc)
{
    int tocIndex = toc.OwnerParagraph.Items.IndexOf(toc);
    Stack<Entity> stack = new Stack<Entity>();
    stack.Push(toc);

    for (int i = tocIndex + 1; i < toc.OwnerParagraph.Items.Count; i++)
    {
        Entity item = toc.OwnerParagraph.Items[i];
        if (item is WField) stack.Push(item);
        else if (item is WFieldMark mark && mark.Type == FieldMarkType.FieldEnd)
        {
            if (stack.Count == 1) { stack.Clear(); return item; }
            else stack.Pop();
        }
    }
    return FindLastItemInTextBody(toc, stack);
}

static Entity FindLastItemInTextBody(TableOfContent toc, Stack<Entity> stack)
{
    WTextBody body = toc.OwnerParagraph.OwnerTextBody;
    for (int i = body.ChildEntities.IndexOf(toc.OwnerParagraph) + 1; i < body.ChildEntities.Count; i++)
    {
        WParagraph para = body.ChildEntities[i] as WParagraph;
        if (para == null) continue;
        foreach (Entity item in para.Items)
        {
            if (item is WField) stack.Push(item);
            else if (item is WFieldMark mark && mark.Type == FieldMarkType.FieldEnd)
            {
                if (stack.Count == 1) { stack.Clear(); return item; }
                else stack.Pop();
            }
        }
    }
    return null;
}

static void DeleteBookmarkContents(string name, WordDocument doc)
{
    BookmarksNavigator nav = new BookmarksNavigator(doc);
    nav.MoveToBookmark(name);
    nav.DeleteBookmarkContent(false);
    Bookmark bkmk = doc.Bookmarks.FindByName(name);
    if (bkmk != null) doc.Bookmarks.Remove(bkmk);
}
```

---

## Complete Example

### Full Workflow

#### Common for Cross-Platform and Windows-Specific
```csharp
var document = new WordDocument();
var section = document.AddSection();
var para = section.AddParagraph();
para.AppendText("Table of Contents");
para.ApplyStyle(BuiltinStyle.Heading1);

para = section.AddParagraph();
TableOfContent toc = para.AppendTOC(1, 3);
toc.UseHeadingStyles = true;
toc.IncludePageNumbers = true;
toc.UseHyperlinks = true;

section = document.AddSection();
para = section.AddParagraph();
para.AppendText("Chapter 1: Introduction");
para.ApplyStyle(BuiltinStyle.Heading1);
section.AddParagraph().AppendText("Introduction content.");

section = document.AddSection();
para = section.AddParagraph();
para.AppendText("Chapter 2: Details");
para.ApplyStyle(BuiltinStyle.Heading1);
para = section.AddParagraph();
para.AppendText("Section 2.1");
para.ApplyStyle(BuiltinStyle.Heading2);
section.AddParagraph().AppendText("Details content.");

document.UpdateTableOfContents();
var outputPath = Path.Combine(Directory.GetCurrentDirectory(), "output", "Document.docx");
var stream = new FileStream(outputPath, FileMode.Create, FileAccess.ReadWrite);
document.Save(stream, FormatType.Docx);
stream.Close();
document.Close();
```
