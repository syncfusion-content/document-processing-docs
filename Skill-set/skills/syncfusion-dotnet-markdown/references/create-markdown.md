# Creating Markdown Documents

## Overview
This guide covers how to create markdown documents programmatically using the Syncfusion Markdown library.

## Basic Document Creation

### Simple Document
```csharp
using Syncfusion.Office.Markdown;
using System.IO;

// Create new document
MarkdownDocument markdown = new MarkdownDocument();

// Add paragraph
MdParagraph para = markdown.AddParagraph();
para.AddTextRange().Text = "Hello, Markdown!";

// Get markdown text
string mdText = markdown.GetMarkdownText();

// Save to file
File.WriteAllText("output.md", mdText);

// Dispose
markdown.Dispose();
```

### Document with Multiple Elements
```csharp
MarkdownDocument doc = new MarkdownDocument();

// Title
MdParagraph title = doc.AddParagraph();
title.ApplyParagraphStyle("Heading 1");
title.AddTextRange().Text = "My Document";

// Subtitle
MdParagraph subtitle = doc.AddParagraph();
subtitle.ApplyParagraphStyle("Heading 2");
subtitle.AddTextRange().Text = "Introduction";

// Content
MdParagraph content = doc.AddParagraph();
content.AddTextRange().Text = "This is the content of my document.";

// Save
string markdown = doc.GetMarkdownText();
File.WriteAllText("document.md", markdown);
doc.Dispose();
```

## Adding Paragraphs

### Plain Text Paragraph
```csharp
MdParagraph para = markdown.AddParagraph();
para.AddTextRange().Text = "This is a plain text paragraph.";
```

### Paragraph with Multiple Text Ranges
```csharp
MdParagraph para = markdown.AddParagraph();
para.AddTextRange().Text = "This is ";
para.AddTextRange().Text = "multiple ";
para.AddTextRange().Text = "text ranges.";
```

### Empty Paragraph
```csharp
// Creates a blank line in output
MdParagraph empty = markdown.AddParagraph();
```

## Applying Styles

### Headings
```csharp
// Heading 1
MdParagraph h1 = markdown.AddParagraph();
h1.ApplyParagraphStyle("Heading 1");
h1.AddTextRange().Text = "Heading 1";

// Heading 2
MdParagraph h2 = markdown.AddParagraph();
h2.ApplyParagraphStyle("Heading 2");
h2.AddTextRange().Text = "Heading 2";

// Through Heading 6
MdParagraph h6 = markdown.AddParagraph();
h6.ApplyParagraphStyle("Heading 6");
h6.AddTextRange().Text = "Heading 6";
```

### Blockquotes
```csharp
// Single level blockquote
MdParagraph quote = markdown.AddParagraph();
quote.HasBlockquote = true;
quote.BlockQuoteLevel = 1;
quote.AddTextRange().Text = "This is a quote.";

// Nested blockquote
MdParagraph nestedQuote = markdown.AddParagraph();
nestedQuote.HasBlockquote = true;
nestedQuote.BlockQuoteLevel = 2;
nestedQuote.AddTextRange().Text = "Nested quote.";
```

## Text Formatting

### Bold Text
```csharp
MdParagraph para = markdown.AddParagraph();
MdTextRange bold = para.AddTextRange();
bold.Text = "Bold text";
bold.TextFormat.Bold = true;
```

### Italic Text
```csharp
MdTextRange italic = para.AddTextRange();
italic.Text = "Italic text";
italic.TextFormat.Italic = true;
```

### Bold and Italic
```csharp
MdTextRange boldItalic = para.AddTextRange();
boldItalic.Text = "Bold and italic";
boldItalic.TextFormat.Bold = true;
boldItalic.TextFormat.Italic = true;
```

### Strikethrough
```csharp
MdTextRange strike = para.AddTextRange();
strike.Text = "Strikethrough text";
strike.TextFormat.StrikeThrough = true;
```

### Inline Code
```csharp
MdTextRange code = para.AddTextRange();
code.Text = "inline code";
code.TextFormat.CodeSpan = true;
```

### Subscript and Superscript
```csharp
// Subscript: H₂O
MdTextRange sub = para.AddTextRange();
sub.Text = "2";
sub.TextFormat.SubSuperScriptType = MdSubSuperScript.SubScript;

// Superscript: x²
MdTextRange sup = para.AddTextRange();
sup.Text = "2";
sup.TextFormat.SubSuperScriptType = MdSubSuperScript.SuperScript;
```

### Combined Formatting
```csharp
MdParagraph para = markdown.AddParagraph();
para.AddTextRange().Text = "This is ";

MdTextRange formatted = para.AddTextRange();
formatted.Text = "important";
formatted.TextFormat.Bold = true;
formatted.TextFormat.Italic = true;

para.AddTextRange().Text = " text.";
```

## Creating Lists

### Numbered List
```csharp
// First item
MdParagraph item1 = markdown.AddParagraph();
item1.ListFormat = new MdListFormat
{
    IsNumbered = true,
    ListLevel = 0
};
item1.AddTextRange().Text = "First item";

// Second item
MdParagraph item2 = markdown.AddParagraph();
item2.ListFormat = new MdListFormat
{
    IsNumbered = true,
    ListLevel = 0
};
item2.AddTextRange().Text = "Second item";
```

### Bulleted List
```csharp
MdParagraph bullet1 = markdown.AddParagraph();
bullet1.ListFormat = new MdListFormat
{
    IsNumbered = false,
    ListLevel = 0
};
bullet1.AddTextRange().Text = "Bullet item 1";

MdParagraph bullet2 = markdown.AddParagraph();
bullet2.ListFormat = new MdListFormat
{
    IsNumbered = false,
    ListLevel = 0
};
bullet2.AddTextRange().Text = "Bullet item 2";
```

### Nested Lists
```csharp
// Level 0
MdParagraph main1 = markdown.AddParagraph();
main1.ListFormat = new MdListFormat { IsNumbered = true, ListLevel = 0 };
main1.AddTextRange().Text = "Main item 1";

// Level 1 (nested)
MdParagraph nested1 = markdown.AddParagraph();
nested1.ListFormat = new MdListFormat { IsNumbered = true, ListLevel = 1 };
nested1.AddTextRange().Text = "Nested item 1";

// Level 2 (double nested)
MdParagraph doubleNested = markdown.AddParagraph();
doubleNested.ListFormat = new MdListFormat { IsNumbered = true, ListLevel = 2 };
doubleNested.AddTextRange().Text = "Double nested item";

// Back to Level 0
MdParagraph main2 = markdown.AddParagraph();
main2.ListFormat = new MdListFormat { IsNumbered = true, ListLevel = 0 };
main2.AddTextRange().Text = "Main item 2";
```

### Task Lists
```csharp
// Checked task
MdParagraph task1 = markdown.AddParagraph();
task1.ListFormat = new MdListFormat { IsNumbered = false, ListLevel = 0 };
task1.TaskItemProperties = new MdTaskProperties { IsChecked = true };
task1.AddTextRange().Text = "Completed task";

// Unchecked task
MdParagraph task2 = markdown.AddParagraph();
task2.ListFormat = new MdListFormat { IsNumbered = false, ListLevel = 0 };
task2.TaskItemProperties = new MdTaskProperties { IsChecked = false };
task2.AddTextRange().Text = "Pending task";
```

## Creating Tables

### Simple Table
```csharp
MdTable table = markdown.AddTable();

// Column alignments
table.ColumnAlignments.Add(MdColumnAlignment.Left);
table.ColumnAlignments.Add(MdColumnAlignment.Center);
table.ColumnAlignments.Add(MdColumnAlignment.Right);

// Header row
MdTableRow header = table.AddTableRow();
header.AddTableCell().Items.Add(new MdTextRange { Text = "Name" });
header.AddTableCell().Items.Add(new MdTextRange { Text = "Age" });
header.AddTableCell().Items.Add(new MdTextRange { Text = "City" });

// Data row
MdTableRow data = table.AddTableRow();
data.AddTableCell().Items.Add(new MdTextRange { Text = "John" });
data.AddTableCell().Items.Add(new MdTextRange { Text = "30" });
data.AddTableCell().Items.Add(new MdTextRange { Text = "New York" });
```

### Table with Formatted Content
```csharp
MdTable table = markdown.AddTable();
table.ColumnAlignments.Add(MdColumnAlignment.Left);
table.ColumnAlignments.Add(MdColumnAlignment.Left);

MdTableRow header = table.AddTableRow();
header.AddTableCell().Items.Add(new MdTextRange { Text = "Feature" });
header.AddTableCell().Items.Add(new MdTextRange { Text = "Status" });

MdTableRow row = table.AddTableRow();
row.AddTableCell().Items.Add(new MdTextRange { Text = "Parsing" });

// Cell with bold text
MdTableCell statusCell = row.AddTableCell();
MdTextRange boldStatus = new MdTextRange { Text = "Complete" };
boldStatus.TextFormat.Bold = true;
statusCell.Items.Add(boldStatus);
```

## Code Blocks

### Fenced Code Block
```csharp
MdCodeBlock code = markdown.AddCodeBlock();
code.IsFencedCode = true;
code.Lines.Add("function hello() {");
code.Lines.Add("  console.log('Hello, World!');");
code.Lines.Add("}");
```

### Indented Code Block
```csharp
MdCodeBlock code = markdown.AddCodeBlock();
code.IsFencedCode = false;
code.Lines.Add("This is indented code");
code.Lines.Add("Multiple lines of code");
```

## Links and Images

### Hyperlink
```csharp
MdParagraph para = markdown.AddParagraph();
para.AddTextRange().Text = "Visit ";

MdHyperlink link = para.AddHyperlink();
link.DisplayText = "our website";
link.Url = "https://example.com";
link.ScreenTip = "Click to visit";

para.AddTextRange().Text = " for more info.";
```

### Image from URL
```csharp
MdParagraph para = markdown.AddParagraph();
MdPicture img = new MdPicture();
para.Inlines.Add(img);
img.AltText = "Logo";
img.Url = "https://example.com/logo.png";
```

### Image from Bytes
```csharp
byte[] imageData = File.ReadAllBytes("image.png");

MdParagraph para = markdown.AddParagraph();
MdPicture img = new MdPicture();
para.Inlines.Add(img);
img.AltText = "Chart";
img.ImageBytes = imageData;
img.ImageFormat = "png";
```

## Thematic Breaks

### Horizontal Rule
```csharp
// Add horizontal rule (---)
markdown.AddThematicBreak();
```

## Complete Examples

### Blog Post
```csharp
using Syncfusion.Office.Markdown;
using System;
using System.IO;

class BlogPostGenerator
{
    static void Main()
    {
        MarkdownDocument blog = new MarkdownDocument();
        
        // Title
        MdParagraph title = blog.AddParagraph();
        title.ApplyParagraphStyle("Heading 1");
        title.AddTextRange().Text = "Getting Started with Markdown";
        
        // Metadata
        MdParagraph date = blog.AddParagraph();
        MdTextRange dateText = date.AddTextRange();
        dateText.Text = "Published: March 18, 2026";
        dateText.TextFormat.Italic = true;
        
        blog.AddThematicBreak();
        
        // Introduction
        MdParagraph intro = blog.AddParagraph();
        intro.ApplyParagraphStyle("Heading 2");
        intro.AddTextRange().Text = "Introduction";
        
        MdParagraph introPara = blog.AddParagraph();
        introPara.AddTextRange().Text = "Markdown is a ";
        MdTextRange bold = introPara.AddTextRange();
        bold.Text = "lightweight";
        bold.TextFormat.Bold = true;
        introPara.AddTextRange().Text = " markup language.";
        
        // Features list
        MdParagraph featuresHeading = blog.AddParagraph();
        featuresHeading.ApplyParagraphStyle("Heading 2");
        featuresHeading.AddTextRange().Text = "Key Features";
        
        MdParagraph feature1 = blog.AddParagraph();
        feature1.ListFormat = new MdListFormat { IsNumbered = true, ListLevel = 0 };
        feature1.AddTextRange().Text = "Easy to read and write";
        
        MdParagraph feature2 = blog.AddParagraph();
        feature2.ListFormat = new MdListFormat { IsNumbered = true, ListLevel = 0 };
        feature2.AddTextRange().Text = "Portable across platforms";
        
        MdParagraph feature3 = blog.AddParagraph();
        feature3.ListFormat = new MdListFormat { IsNumbered = true, ListLevel = 0 };
        feature3.AddTextRange().Text = "Converts to HTML easily";
        
        // Code example
        MdParagraph codeHeading = blog.AddParagraph();
        codeHeading.ApplyParagraphStyle("Heading 2");
        codeHeading.AddTextRange().Text = "Example Code";
        
        MdCodeBlock code = blog.AddCodeBlock();
        code.Lines.Add("var markdown = new MarkdownDocument();");
        code.Lines.Add("var para = markdown.AddParagraph();");
        code.Lines.Add("para.AddTextRange().Text = 'Hello!';");
        
        // Footer
        blog.AddThematicBreak();
        
        MdParagraph footer = blog.AddParagraph();
        footer.AddTextRange().Text = "Read more at ";
        MdHyperlink link = footer.AddHyperlink();
        link.DisplayText = "our documentation";
        link.Url = "https://example.com/docs";
        
        // Save
        string markdown = blog.GetMarkdownText();
        File.WriteAllText("blog-post.md", markdown);
        blog.Dispose();
        
        Console.WriteLine("Blog post created!");
    }
}
```

### Technical Documentation
```csharp
using Syncfusion.Office.Markdown;
using System.IO;

class TechnicalDocGenerator
{
    static void Main()
    {
        MarkdownDocument doc = new MarkdownDocument();
        
        // API Documentation
        MdParagraph apiTitle = doc.AddParagraph();
        apiTitle.ApplyParagraphStyle("Heading 1");
        apiTitle.AddTextRange().Text = "API Reference";
        
        // Method section
        MdParagraph methodHeading = doc.AddParagraph();
        methodHeading.ApplyParagraphStyle("Heading 2");
        methodHeading.AddTextRange().Text = "Methods";
        
        // Method name
        MdParagraph methodName = doc.AddParagraph();
        methodName.ApplyParagraphStyle("Heading 3");
        MdTextRange methodCode = methodName.AddTextRange();
        methodCode.Text = "AddParagraph()";
        methodCode.TextFormat.CodeSpan = true;
        
        // Description
        MdParagraph desc = doc.AddParagraph();
        desc.AddTextRange().Text = "Adds a new paragraph to the document.";
        
        // Parameters table
        MdParagraph paramsHeading = doc.AddParagraph();
        paramsHeading.ApplyParagraphStyle("Heading 4");
        paramsHeading.AddTextRange().Text = "Parameters";
        
        MdTable paramsTable = doc.AddTable();
        paramsTable.ColumnAlignments.Add(MdColumnAlignment.Left);
        paramsTable.ColumnAlignments.Add(MdColumnAlignment.Left);
        paramsTable.ColumnAlignments.Add(MdColumnAlignment.Left);
        
        MdTableRow headerRow = paramsTable.AddTableRow();
        headerRow.AddTableCell().Items.Add(new MdTextRange { Text = "Name" });
        headerRow.AddTableCell().Items.Add(new MdTextRange { Text = "Type" });
        headerRow.AddTableCell().Items.Add(new MdTextRange { Text = "Description" });
        
        MdTableRow paramRow = paramsTable.AddTableRow();
        paramRow.AddTableCell().Items.Add(new MdTextRange { Text = "None" });
        paramRow.AddTableCell().Items.Add(new MdTextRange { Text = "-" });
        paramRow.AddTableCell().Items.Add(new MdTextRange { Text = "No parameters" });
        
        // Return value
        MdParagraph returnHeading = doc.AddParagraph();
        returnHeading.ApplyParagraphStyle("Heading 4");
        returnHeading.AddTextRange().Text = "Returns";
        
        MdParagraph returnValue = doc.AddParagraph();
        MdTextRange returnType = returnValue.AddTextRange();
        returnType.Text = "MdParagraph";
        returnType.TextFormat.CodeSpan = true;
        returnValue.AddTextRange().Text = " - The newly created paragraph";
        
        // Example
        MdParagraph exampleHeading = doc.AddParagraph();
        exampleHeading.ApplyParagraphStyle("Heading 4");
        exampleHeading.AddTextRange().Text = "Example";
        
        MdCodeBlock exampleCode = doc.AddCodeBlock();
        exampleCode.Lines.Add("var doc = new MarkdownDocument();");
        exampleCode.Lines.Add("var para = doc.AddParagraph();");
        exampleCode.Lines.Add("para.AddTextRange().Text = 'Hello';");
        
        // Save
        File.WriteAllText("api-docs.md", doc.GetMarkdownText());
        doc.Dispose();
    }
}
```

## Best Practices

1. **Create Once, Use Once**: Create elements just before adding them
2. **Sequential Creation**: Add blocks in the order they should appear
3. **Format First**: Set formatting properties before or after setting text
4. **Dispose Always**: Call `Dispose()` to release resources
5. **Check Null**: Verify objects are created before setting properties
6. **Use Constants**: Define reusable formatting in constants
7. **Validate Input**: Check text content before adding
8. **Handle Empty**: Use empty paragraphs for spacing

## Common Patterns

### Reusable Formatting
```csharp
MdTextFormat headerFormat = new MdTextFormat
{
    Bold = true,
    Italic = true
};

MdParagraph para = markdown.AddParagraph();
MdTextRange text = para.AddTextRange();
text.Text = "Important";
text.TextFormat.Bold = headerFormat.Bold;
text.TextFormat.Italic = headerFormat.Italic;
```

### Conditional Formatting
```csharp
bool isImportant = true;

MdParagraph para = markdown.AddParagraph();
MdTextRange text = para.AddTextRange();
text.Text = "Message";

if (isImportant)
{
    text.TextFormat.Bold = true;
}
```

### Building from Data
```csharp
string[] items = { "Apple", "Banana", "Cherry" };

foreach (string item in items)
{
    MdParagraph listItem = markdown.AddParagraph();
    listItem.ListFormat = new MdListFormat 
    { 
        IsNumbered = false, 
        ListLevel = 0 
    };
    listItem.AddTextRange().Text = item;
}
```

## Troubleshooting

- **Empty Output**: Ensure text is set on TextRange
- **No Formatting**: Verify TextFormat properties are set
- **Wrong Order**: Check blocks are added in correct sequence
- **Memory Leak**: Always call Dispose()
- **List Not Nesting**: Verify ListLevel increments properly
- **Table Not Aligning**: Set ColumnAlignments before rows
