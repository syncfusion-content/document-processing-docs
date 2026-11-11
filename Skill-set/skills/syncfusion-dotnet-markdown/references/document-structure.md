# Markdown Document Structure

## Overview
The Syncfusion Markdown library uses a Document Object Model (DOM) structure to represent markdown content. Understanding this structure is essential for working with the library effectively.

## Hierarchy

```
MarkdownDocument (Root)
├── Blocks (List<IMdBlock>)
│   ├── MdParagraph
│   │   ├── StyleName (MdParagraphStyle)
│   │   ├── ListFormat (MdListFormat)
│   │   ├── TaskItemProperties (MdTaskProperties)
│   │   └── Inlines (List<IMdInline>)
│   │       ├── MdTextRange
│   │       │   ├── Text
│   │       │   └── TextFormat (MdTextFormat)
│   │       ├── MdHyperlink
│   │       │   ├── DisplayText
│   │       │   ├── Url
│   │       │   └── ScreenTip
│   │       └── MdPicture
│   │           ├── AltText
│   │           ├── Url
│   │           ├── ImageBytes
│   │           └── ImageFormat
│   ├── MdTable
│   │   ├── ColumnAlignments (List<MdColumnAlignment>)
│   │   └── Rows (List<MdTableRow>)
│   │       └── Cells (List<MdTableCell>)
│   │           └── Items (List<IMdInline>)
│   ├── MdCodeBlock
│   │   ├── Lines (List<string>)
│   │   └── IsFencedCode
│   └── MdThematicBreak
```

## Block-Level Elements

### MarkdownDocument
The root container for all markdown content.

**Properties:**
- `Blocks` - Collection of block-level elements

**Methods:**
- `AddParagraph()` - Adds and returns a new paragraph
- `AddTable()` - Adds and returns a new table
- `AddCodeBlock()` - Adds and returns a new code block
- `AddThematicBreak()` - Adds and returns a thematic break
- `GetMarkdownText()` - Serializes the document to markdown text
- `Open(Stream, MdImportSettings)` - Parses markdown from stream
- `Dispose()` - Releases resources

**Example:**
```csharp
using Syncfusion.Office.Markdown;

MarkdownDocument document = new MarkdownDocument();

// Add blocks
MdParagraph para = document.AddParagraph();
MdTable table = document.AddTable();
MdCodeBlock code = document.AddCodeBlock();

// Get text
string markdown = document.GetMarkdownText();

// Clean up
document.Dispose();
```

### MdParagraph
Represents a paragraph with optional styling, list formatting, and inline elements.

**Properties:**
- `StyleName` - Paragraph style (None, Heading1-6, BlockQuote)
- `ListFormat` - List formatting (null if not a list item)
- `TaskItemProperties` - Task list properties (null if not a task item)
- `Inlines` - Collection of inline elements (text, links, images)
- `HasBlockquote` - Indicates if paragraph is a blockquote
- `BlockQuoteLevel` - Nesting level for blockquotes
- `BlockQuoteHasLeadingSpace` - Whether blockquote uses a leading space after the `>` marker
- `LeftIndent` - Left indentation value
- `FirstLineIndent` - First line indentation value

**Methods:**
- `AddTextRange()` - Adds and returns a new text range
- `AddHyperlink()` - Adds and returns a new hyperlink
- `ApplyParagraphStyle(string)` - Applies a paragraph style by name
- `Close()` - Releases resources

**Example:**
```csharp
// Regular paragraph
MdParagraph para = document.AddParagraph();
para.AddTextRange().Text = "Normal paragraph";

// Heading
MdParagraph heading = document.AddParagraph();
heading.ApplyParagraphStyle("Heading 1");
heading.AddTextRange().Text = "Title";

// List item
MdParagraph listItem = document.AddParagraph();
listItem.ListFormat = new MdListFormat 
{ 
    ListLevel = 0, 
    IsNumbered = true 
};
listItem.AddTextRange().Text = "First item";

// Blockquote
MdParagraph quote = document.AddParagraph();
quote.HasBlockquote = true;
quote.BlockQuoteLevel = 1;
quote.AddTextRange().Text = "Quoted text";
```

### MdTable
Represents a table with rows, cells, and column alignments.

**Properties:**
- `ColumnAlignments` - List of column alignment values
- `Rows` - Collection of table rows

**Methods:**
- `AddTableRow()` - Adds and returns a new row
- `Close()` - Releases resources

**Example:**
```csharp
MdTable table = document.AddTable();

// Define column alignments
table.ColumnAlignments.Add(MdColumnAlignment.Left);
table.ColumnAlignments.Add(MdColumnAlignment.Center);
table.ColumnAlignments.Add(MdColumnAlignment.Right);

// Add header row
MdTableRow header = table.AddTableRow();
header.AddTableCell().Items.Add(new MdTextRange { Text = "Left" });
header.AddTableCell().Items.Add(new MdTextRange { Text = "Center" });
header.AddTableCell().Items.Add(new MdTextRange { Text = "Right" });

// Add data row
MdTableRow data = table.AddTableRow();
data.AddTableCell().Items.Add(new MdTextRange { Text = "A" });
data.AddTableCell().Items.Add(new MdTextRange { Text = "B" });
data.AddTableCell().Items.Add(new MdTextRange { Text = "C" });
```

### MdCodeBlock
Represents a code block (fenced or indented).

**Properties:**
- `Lines` - Collection of code lines
- `IsFencedCode` - True for fenced, false for indented
- `Language` - Programming language identifier (for fenced blocks) - internal property

**Methods:**
- `Close()` - Releases resources

**Example:**
```csharp
// Fenced code block
MdCodeBlock code = document.AddCodeBlock();
code.IsFencedCode = true;
code.Lines.Add("function hello() {");
code.Lines.Add("  return 'Hello, World!';");
code.Lines.Add("}");

// Indented code block
MdCodeBlock indented = document.AddCodeBlock();
indented.IsFencedCode = false;
indented.Lines.Add("This is indented code");
indented.Lines.Add("Another line");
```

### MdThematicBreak
Represents a horizontal rule (---).

**Properties:**
- `HorizontalRuleChar` - The character sequence used (internal)

**Methods:**
- `Close()` - Releases resources

**Example:**
```csharp
MdThematicBreak hr = document.AddThematicBreak();
// Renders as: ---
```

## Inline Elements

### MdTextRange
Represents formatted text within a paragraph.

**Properties:**
- `Text` - The text content
- `TextFormat` - Formatting options (MdTextFormat)
- `IsLineBreak` - Indicates a line break

**Example:**
```csharp
MdParagraph para = document.AddParagraph();

// Normal text
MdTextRange normal = para.AddTextRange();
normal.Text = "Normal ";

// Bold text
MdTextRange bold = para.AddTextRange();
bold.Text = "bold";
bold.TextFormat.Bold = true;

// Italic text
MdTextRange italic = para.AddTextRange();
italic.Text = " italic";
italic.TextFormat.Italic = true;
```

### MdHyperlink
Represents a hyperlink.

**Properties:**
- `DisplayText` - Text shown for the link
- `Url` - Link destination
- `ScreenTip` - Tooltip text (optional)
- `TextFormat` - Formatting for the link text (internal)

**Methods:**
- `Close()` - Releases resources

**Example:**
```csharp
MdParagraph para = document.AddParagraph();
MdHyperlink link = para.AddHyperlink();
link.DisplayText = "Click here";
link.Url = "https://example.com";
link.ScreenTip = "Visit example website";
```

### MdPicture
Represents an embedded image.

**Properties:**
- `AltText` - Alternative text for the image
- `Url` - Image source URL or path
- `ImageBytes` - Raw image data (byte array)
- `ImageFormat` - Image format (e.g., "png", "jpg")

**Methods:**
- `Close()` - Releases resources

**Example:**
```csharp
MdParagraph para = document.AddParagraph();

// Image from URL
MdPicture pic1 = new MdPicture();
para.Inlines.Add(pic1);
pic1.AltText = "Logo";
pic1.Url = "https://example.com/logo.png";

// Image from bytes
MdPicture pic2 = new MdPicture();
para.Inlines.Add(pic2);
pic2.AltText = "Chart";
pic2.ImageBytes = imageData;
pic2.ImageFormat = "png";
```

## Supporting Classes

### MdTextFormat
Formatting options for text.

**Properties:**
- `Bold` - Bold formatting
- `Italic` - Italic formatting
- `StrikeThrough` - Strikethrough formatting
- `CodeSpan` - Inline code formatting
- `IsHidden` - Hidden text (HTML comments)
- `SubSuperScriptType` - Sub/superscript (MdSubSuperScript enum)

**Example:**
```csharp
MdTextRange text = para.AddTextRange();
text.Text = "Formatted text";
text.TextFormat.Bold = true;
text.TextFormat.Italic = true;
text.TextFormat.StrikeThrough = true;
text.TextFormat.CodeSpan = true;
text.TextFormat.SubSuperScriptType = MdSubSuperScript.SuperScript;
```

### MdListFormat
List formatting options.

**Properties:**
- `IsNumbered` - True for numbered list, false for bulleted
- `ListLevel` - Nesting level (0-8)
- `NumberedListMarker` - Custom number marker (e.g., "1.")
- `BulletedListMarker` - Bullet character (default: "-")
- `ListValue` - Full list value including spacing

**Example:**
```csharp
MdParagraph item = document.AddParagraph();
item.ListFormat = new MdListFormat
{
    IsNumbered = true,
    ListLevel = 0,
    NumberedListMarker = "1."
};
item.AddTextRange().Text = "First item";
```

### MdTaskProperties
Task list item properties.

**Properties:**
- `IsChecked` - Whether the task is checked
- `CheckedMarker` - Marker for checked task ("- [x] ") - internal property
- `Uncheckedmarker` - Marker for unchecked task ("- [ ] ") - internal property

**Example:**
```csharp
MdParagraph task = document.AddParagraph();
task.ListFormat = new MdListFormat { IsNumbered = false, ListLevel = 0 };
task.TaskItemProperties = new MdTaskProperties { IsChecked = true };
task.AddTextRange().Text = "Complete documentation";
```

### MdTableRow
Represents a row in a table.

**Properties:**
- `Cells` - Collection of table cells

**Methods:**
- `AddTableCell()` - Adds and returns a new cell

**Example:**
```csharp
MdTable table = document.AddTable();

// Add a header row
MdTableRow header = table.AddTableRow();
header.AddTableCell().Items.Add(new MdTextRange { Text = "Column A" });
header.AddTableCell().Items.Add(new MdTextRange { Text = "Column B" });

// Add a data row
MdTableRow data = table.AddTableRow();
MdTableCell c1 = data.AddTableCell();
c1.Items.Add(new MdTextRange { Text = "A1" });
MdTableCell c2 = data.AddTableCell();
c2.Items.Add(new MdTextRange { Text = "B1" });
```

### MdTableCell
Represents a cell in a table row.

**Properties:**
- `Items` - Collection of inline elements (text, links, images)

**Example:**
```csharp
MdTable table = document.AddTable();
MdTableRow row = table.AddTableRow();

// Create a cell with text and an inline image
MdTableCell cell = row.AddTableCell();
cell.Items.Add(new MdTextRange { Text = "Status" });
MdPicture icon = new MdPicture();
icon.AltText = "OK";
icon.Url = "https://example.com/ok.png";
cell.Items.Add(icon);
```

## Enumerations

### MdParagraphStyle
```csharp
public enum MdParagraphStyle
{
    None = 0,       // Normal paragraph
    Heading1 = 1,   // # Heading 1
    Heading2 = 2,   // ## Heading 2
    Heading3 = 3,   // ### Heading 3
    Heading4 = 4,   // #### Heading 4
    Heading5 = 5,   // ##### Heading 5
    Heading6 = 6,   // ###### Heading 6
    BlockQuote = 7  // > Quote
}
```

### MdColumnAlignment
```csharp
public enum MdColumnAlignment
{
    Left = 0,    // |:---|
    Right = 1,   // |---:|
    Center = 2   // |:---:|
}
```

### MdSubSuperScript
```csharp
public enum MdSubSuperScript
{
    None = 0,        // Normal text
    SuperScript = 1, // <sup>text</sup>
    SubScript = 2    // <sub>text</sub>
}
```

## Interfaces

### IMdBlock
Base interface for block-level elements.

**Implementing Classes:**
- MdParagraph
- MdTable
- MdCodeBlock
- MdThematicBreak

**Methods:**
- `Close()` - Releases resources

### IMdInline
Base interface for inline elements.

**Implementing Classes:**
- MdTextRange
- MdHyperlink
- MdPicture

**Methods:**
- `Close()` - Releases resources

## Best Practices

1. **Resource Management**: Always call `Dispose()` on MarkdownDocument when done
2. **Block Order**: Add blocks in the order they should appear
3. **Column Alignments**: Set table column alignments before adding rows
4. **List Levels**: Use appropriate list levels (0-8) for proper nesting
5. **Text Formatting**: Set TextFormat properties before or after setting Text
6. **Image Sources**: Prefer URLs for web images, bytes for embedded images
7. **Code Blocks**: Use fenced blocks for syntax highlighting support

## Complete Example

```csharp
using System;
using System.IO;
using Syncfusion.Office.Markdown;

class Program
{
    static void Main()
    {
        MarkdownDocument doc = new MarkdownDocument();
        
        // Title
        MdParagraph title = doc.AddParagraph();
        title.ApplyParagraphStyle("Heading 1");
        title.AddTextRange().Text = "Document Structure Example";
        
        // Introduction
        MdParagraph intro = doc.AddParagraph();
        intro.AddTextRange().Text = "This document demonstrates the ";
        MdTextRange bold = intro.AddTextRange();
        bold.Text = "structure";
        bold.TextFormat.Bold = true;
        intro.AddTextRange().Text = " of markdown documents.";
        
        // List
        MdParagraph item1 = doc.AddParagraph();
        item1.ListFormat = new MdListFormat { IsNumbered = true, ListLevel = 0 };
        item1.AddTextRange().Text = "First item";
        
        MdParagraph item2 = doc.AddParagraph();
        item2.ListFormat = new MdListFormat { IsNumbered = true, ListLevel = 0 };
        item2.AddTextRange().Text = "Second item";
        
        // Table
        MdTable table = doc.AddTable();
        table.ColumnAlignments.Add(MdColumnAlignment.Left);
        table.ColumnAlignments.Add(MdColumnAlignment.Right);
        
        MdTableRow header = table.AddTableRow();
        header.AddTableCell().Items.Add(new MdTextRange { Text = "Element" });
        header.AddTableCell().Items.Add(new MdTextRange { Text = "Type" });
        
        MdTableRow data = table.AddTableRow();
        data.AddTableCell().Items.Add(new MdTextRange { Text = "Paragraph" });
        data.AddTableCell().Items.Add(new MdTextRange { Text = "Block" });
        
        // Code
        MdCodeBlock code = doc.AddCodeBlock();
        code.Lines.Add("var example = 'Hello';");
        code.Lines.Add("console.log(example);");
        
        // Horizontal rule
        doc.AddThematicBreak();
        
        // Footer
        MdParagraph footer = doc.AddParagraph();
        MdHyperlink link = footer.AddHyperlink();
        link.DisplayText = "More Information";
        link.Url = "https://example.com";
        
        // Save
        string markdown = doc.GetMarkdownText();
        File.WriteAllText("structure-example.md", markdown);
        
        // Clean up
        doc.Dispose();
        
        Console.WriteLine("Document created successfully!");
    }
}
```
