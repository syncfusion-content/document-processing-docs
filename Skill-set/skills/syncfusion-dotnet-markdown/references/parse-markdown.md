# Parsing Markdown Documents

## Overview
This guide covers how to parse existing markdown files and streams into a MarkdownDocument object that can be manipulated and processed programmatically.

## Basic Parsing

### Parse from File Stream
```csharp
using Syncfusion.Office.Markdown;
using System.IO;

// Open file stream
using (FileStream stream = new FileStream("document.md", FileMode.Open))
{
    // Create import settings
    MdImportSettings settings = new MdImportSettings();
    
    // Parse markdown
    MarkdownDocument markdown = new MarkdownDocument(stream, settings);
    
    // Process document
    foreach (IMdBlock block in markdown.Blocks)
    {
        // Handle each block
    }
    
    // Cleanup
    markdown.Dispose();
}
```

### Parse from Memory Stream
```csharp
string mdContent = "# Hello\nThis is **bold** text.";
byte[] bytes = System.Text.Encoding.UTF8.GetBytes(mdContent);

using (MemoryStream stream = new MemoryStream(bytes))
{
    MarkdownDocument markdown = new MarkdownDocument(stream, new MdImportSettings());
    
    // Process document
    
    markdown.Dispose();
}
```

### Parse Using Open Method
```csharp
MarkdownDocument markdown = new MarkdownDocument();

using (FileStream stream = new FileStream("input.md", FileMode.Open))
{
    MdImportSettings settings = new MdImportSettings();
    markdown.Open(stream, settings);
}

// Process document
foreach (IMdBlock block in markdown.Blocks)
{
    // Handle blocks
}

markdown.Dispose();
```

## Import Settings

### MdImportSettings Class
```csharp
MdImportSettings settings = new MdImportSettings();

// Subscribe to image loading event
settings.ImageNodeVisited += OnImageNodeVisited;

// Parse with settings
using (FileStream stream = new FileStream("document.md", FileMode.Open))
{
    MarkdownDocument markdown = new MarkdownDocument(stream, settings);
    // Process...
    markdown.Dispose();
}

// Event handler for custom image loading
void OnImageNodeVisited(object sender, MdImageNodeVisitedEventArgs args)
{
    // TODO:
    // Implement secure image handling logic if required by the application.
}
```

## Processing Parsed Content

### Iterate Through Blocks
```csharp
MarkdownDocument markdown = new MarkdownDocument(stream, settings);

foreach (IMdBlock block in markdown.Blocks)
{
    if (block is MdParagraph paragraph)
    {
        Console.WriteLine("Found paragraph");
    }
    else if (block is MdTable table)
    {
        Console.WriteLine("Found table");
    }
    else if (block is MdCodeBlock code)
    {
        Console.WriteLine("Found code block");
    }
    else if (block is MdThematicBreak)
    {
        Console.WriteLine("Found thematic break");
    }
}

markdown.Dispose();
```

### Process Paragraphs
```csharp
foreach (IMdBlock block in markdown.Blocks)
{
    if (block is MdParagraph para)
    {
        // Check style
        switch (para.StyleName)
        {
            case MdParagraphStyle.Heading1:
                Console.WriteLine("Heading 1");
                break;
            case MdParagraphStyle.Heading2:
                Console.WriteLine("Heading 2");
                break;
            case MdParagraphStyle.BlockQuote:
                Console.WriteLine("Blockquote");
                break;
            case MdParagraphStyle.None:
                Console.WriteLine("Normal paragraph");
                break;
        }
        
        // Check if it's a list
        if (para.ListFormat != null)
        {
            Console.WriteLine($"List item - Level: {para.ListFormat.ListLevel}, " +
                            $"Numbered: {para.ListFormat.IsNumbered}");
        }
        
        // Check if it's a task
        if (para.TaskItemProperties != null)
        {
            Console.WriteLine($"Task - Checked: {para.TaskItemProperties.IsChecked}");
        }
        
        // Check blockquote
        if (para.HasBlockquote)
        {
            Console.WriteLine($"Blockquote Level: {para.BlockQuoteLevel}");
        }
    }
}
```

### Extract Text Content
```csharp
StringBuilder textContent = new StringBuilder();

foreach (IMdBlock block in markdown.Blocks)
{
    if (block is MdParagraph para)
    {
        foreach (IMdInline inline in para.Inlines)
        {
            if (inline is MdTextRange textRange)
            {
                textContent.AppendLine(textRange.Text);
            }
            else if (inline is MdHyperlink link)
            {
                textContent.AppendLine($"{link.DisplayText} ({link.Url})");
            }
        }
    }
}

string allText = textContent.ToString();
```

### Process Inline Elements
```csharp
foreach (IMdBlock block in markdown.Blocks)
{
    if (block is MdParagraph para)
    {
        foreach (IMdInline inline in para.Inlines)
        {
            if (inline is MdTextRange textRange)
            {
                Console.WriteLine($"Text: {textRange.Text}");
                
                // Check formatting
                if (textRange.TextFormat.Bold)
                    Console.WriteLine("  - Bold");
                if (textRange.TextFormat.Italic)
                    Console.WriteLine("  - Italic");
                if (textRange.TextFormat.StrikeThrough)
                    Console.WriteLine("  - Strikethrough");
                if (textRange.TextFormat.CodeSpan)
                    Console.WriteLine("  - Code");
                    
                // Check sub/superscript
                switch (textRange.TextFormat.SubSuperScriptType)
                {
                    case MdSubSuperScript.SuperScript:
                        Console.WriteLine("  - Superscript");
                        break;
                    case MdSubSuperScript.SubScript:
                        Console.WriteLine("  - Subscript");
                        break;
                }
            }
            else if (inline is MdHyperlink hyperlink)
            {
                Console.WriteLine($"Link: {hyperlink.DisplayText}");
                Console.WriteLine($"  URL: {hyperlink.Url}");
                if (!string.IsNullOrEmpty(hyperlink.ScreenTip))
                    Console.WriteLine($"  Tip: {hyperlink.ScreenTip}");
            }
            else if (inline is MdPicture picture)
            {
                Console.WriteLine($"Image: {picture.AltText}");
                if (!string.IsNullOrEmpty(picture.Url))
                    Console.WriteLine($"  URL: {picture.Url}");
                if (picture.ImageBytes != null)
                    Console.WriteLine($"  Size: {picture.ImageBytes.Length} bytes");
            }
        }
    }
}
```

### Process Tables
```csharp
foreach (IMdBlock block in markdown.Blocks)
{
    if (block is MdTable table)
    {
        Console.WriteLine($"Table with {table.Rows.Count} rows");
        Console.WriteLine($"Column alignments: {table.ColumnAlignments.Count}");
        
        // Process each row
        for (int i = 0; i < table.Rows.Count; i++)
        {
            MdTableRow row = table.Rows[i];
            Console.WriteLine($"\nRow {i + 1}:");
            
            // Process each cell
            for (int j = 0; j < row.Cells.Count; j++)
            {
                MdTableCell cell = row.Cells[j];
                Console.Write($"  Cell {j + 1}: ");
                
                // Get cell content
                foreach (IMdInline item in cell.Items)
                {
                    if (item is MdTextRange textRange)
                    {
                        Console.Write(textRange.Text);
                    }
                }
                Console.WriteLine();
            }
        }
        
        // Check alignments
        for (int i = 0; i < table.ColumnAlignments.Count; i++)
        {
            Console.WriteLine($"Column {i + 1} alignment: {table.ColumnAlignments[i]}");
        }
    }
}
```

### Process Code Blocks
```csharp
foreach (IMdBlock block in markdown.Blocks)
{
    if (block is MdCodeBlock code)
    {
        Console.WriteLine($"Code Block - Fenced: {code.IsFencedCode}");
        
        if (!string.IsNullOrEmpty(code.Language))
        {
            Console.WriteLine($"Language: {code.Language}");
        }
        
        Console.WriteLine("Code lines:");
        foreach (string line in code.Lines)
        {
            Console.WriteLine($"  {line}");
        }
    }
}
```

## Modifying Parsed Content

### Add Content to Parsed Document
```csharp
using (FileStream stream = new FileStream("input.md", FileMode.Open))
{
    MarkdownDocument markdown = new MarkdownDocument(stream, new MdImportSettings());
    
    // Add new paragraph
    MdParagraph newPara = markdown.AddParagraph();
    newPara.AddTextRange().Text = "This content was added programmatically.";
    
    // Save modified document
    string modifiedMd = markdown.GetMarkdownText();
    File.WriteAllText("output.md", modifiedMd);
    
    markdown.Dispose();
}
```

### Modify Existing Content
```csharp
foreach (IMdBlock block in markdown.Blocks)
{
    if (block is MdParagraph para)
    {
        // Modify paragraph style
        if (para.StyleName == MdParagraphStyle.Heading2)
        {
            para.ApplyParagraphStyle("Heading 1");
        }
        
        // Modify text content
        foreach (IMdInline inline in para.Inlines)
        {
            if (inline is MdTextRange textRange)
            {
                // Make all text bold
                textRange.TextFormat.Bold = true;
                
                // Replace text
                if (textRange.Text.Contains("old"))
                {
                    textRange.Text = textRange.Text.Replace("old", "new");
                }
            }
        }
    }
}
```

### Filter and Extract Specific Content
```csharp
// Extract all headings
List<string> headings = new List<string>();

foreach (IMdBlock block in markdown.Blocks)
{
    if (block is MdParagraph para)
    {
        if (para.StyleName >= MdParagraphStyle.Heading1 && 
            para.StyleName <= MdParagraphStyle.Heading6)
        {
            StringBuilder headingText = new StringBuilder();
            foreach (IMdInline inline in para.Inlines)
            {
                if (inline is MdTextRange textRange)
                {
                    headingText.Append(textRange.Text);
                }
            }
            headings.Add(headingText.ToString());
        }
    }
}

// Display extracted headings
foreach (string heading in headings)
{
    Console.WriteLine(heading);
}
```

## Advanced Parsing Scenarios

### Parse Multiple Files
```csharp
string[] markdownFiles = Directory.GetFiles("markdown", "*.md");

foreach (string file in markdownFiles)
{
    using (FileStream stream = new FileStream(file, FileMode.Open))
    {
        MarkdownDocument markdown = new MarkdownDocument(stream, new MdImportSettings());
        
        // Process each document
        Console.WriteLine($"Processing: {Path.GetFileName(file)}");
        Console.WriteLine($"Blocks: {markdown.Blocks.Count}");
        
        markdown.Dispose();
    }
}
```

### Extract and Analyze Structure
```csharp
class MarkdownAnalyzer
{
    public void Analyze(string filePath)
    {
        using (FileStream stream = new FileStream(filePath, FileMode.Open))
        {
            MarkdownDocument markdown = new MarkdownDocument(stream, new MdImportSettings());
            
            var stats = new
            {
                TotalBlocks = markdown.Blocks.Count,
                Paragraphs = markdown.Blocks.OfType<MdParagraph>().Count(),
                Tables = markdown.Blocks.OfType<MdTable>().Count(),
                CodeBlocks = markdown.Blocks.OfType<MdCodeBlock>().Count(),
                ThematicBreaks = markdown.Blocks.OfType<MdThematicBreak>().Count(),
                Headings = markdown.Blocks.OfType<MdParagraph>()
                    .Count(p => p.StyleName != MdParagraphStyle.None),
                Lists = markdown.Blocks.OfType<MdParagraph>()
                    .Count(p => p.ListFormat != null)
            };
            
            Console.WriteLine($"Document Analysis for: {Path.GetFileName(filePath)}");
            Console.WriteLine($"Total Blocks: {stats.TotalBlocks}");
            Console.WriteLine($"Paragraphs: {stats.Paragraphs}");
            Console.WriteLine($"Tables: {stats.Tables}");
            Console.WriteLine($"Code Blocks: {stats.CodeBlocks}");
            Console.WriteLine($"Thematic Breaks: {stats.ThematicBreaks}");
            Console.WriteLine($"Headings: {stats.Headings}");
            Console.WriteLine($"List Items: {stats.Lists}");
            
            markdown.Dispose();
        }
    }
}
```

### Custom Image Handling
```csharp
class CustomImageHandler
{
    private Dictionary<string, byte[]> imageCache = new Dictionary<string, byte[]>();
    
    public void ParseWithCustomImages(string mdFile)
    {
        MdImportSettings settings = new MdImportSettings();
        settings.ImageNodeVisited += OnImageNodeVisited;
        
        using (FileStream stream = new FileStream(mdFile, FileMode.Open))
        {
            MarkdownDocument markdown = new MarkdownDocument(stream, settings);
            
            // Process document with loaded images
            foreach (IMdBlock block in markdown.Blocks)
            {
                if (block is MdParagraph para)
                {
                    foreach (IMdInline inline in para.Inlines)
                    {
                        if (inline is MdPicture picture)
                        {
                            Console.WriteLine($"Image loaded: {picture.AltText}");
                            if (picture.ImageBytes != null)
                            {
                                Console.WriteLine($"  Size: {picture.ImageBytes.Length} bytes");
                            }
                        }
                    }
                }
            }
            
            markdown.Dispose();
        }
        
        settings.ImageNodeVisited -= OnImageNodeVisited;
    }
    
    private void OnImageNodeVisited(object sender, MdImageNodeVisitedEventArgs args)
    {
        // TODO:
        // Implement secure image handling logic if required by the application.
    }
}
```

## Complete Examples

### Parse and Generate Report
```csharp
using System;
using System.IO;
using System.Linq;
using Syncfusion.Office.Markdown;

class MarkdownReporter
{
    static void Main()
    {
        string inputFile = "document.md";
        
        using (FileStream stream = new FileStream(inputFile, FileMode.Open))
        {
            MarkdownDocument markdown = new MarkdownDocument(stream, new MdImportSettings());
            
            Console.WriteLine("=== Markdown Document Report ===\n");
            
            // Count different types
            int paragraphCount = 0;
            int headingCount = 0;
            int listCount = 0;
            int tableCount = 0;
            int codeBlockCount = 0;
            int imageCount = 0;
            int linkCount = 0;
            
            foreach (IMdBlock block in markdown.Blocks)
            {
                if (block is MdParagraph para)
                {
                    paragraphCount++;
                    
                    if (para.StyleName != MdParagraphStyle.None)
                        headingCount++;
                    
                    if (para.ListFormat != null)
                        listCount++;
                    
                    foreach (IMdInline inline in para.Inlines)
                    {
                        if (inline is MdHyperlink)
                            linkCount++;
                        else if (inline is MdPicture)
                            imageCount++;
                    }
                }
                else if (block is MdTable)
                {
                    tableCount++;
                }
                else if (block is MdCodeBlock)
                {
                    codeBlockCount++;
                }
            }
            
            Console.WriteLine($"Paragraphs: {paragraphCount}");
            Console.WriteLine($"Headings: {headingCount}");
            Console.WriteLine($"List Items: {listCount}");
            Console.WriteLine($"Tables: {tableCount}");
            Console.WriteLine($"Code Blocks: {codeBlockCount}");
            Console.WriteLine($"Images: {imageCount}");
            Console.WriteLine($"Links: {linkCount}");
            
            markdown.Dispose();
        }
    }
}
```

## Best Practices

1. **Always Dispose**: Use `using` statements or call `Dispose()` explicitly
2. **Type Checking**: Use `is` operator to check block and inline types
3. **Null Checks**: Verify properties like `ListFormat` and `TaskItemProperties` are not null
4. **Event Cleanup**: Unsubscribe from events after use
5. **Error Handling**: Wrap parsing in try-catch for invalid markdown
6. **Stream Management**: Ensure streams are properly closed
7. **Memory**: Dispose documents when processing large files
8. **Image Loading**: Implement custom image loading for flexibility

## Troubleshooting

- **Parsing Fails**: Check file encoding (UTF-8 expected)
- **Images Not Loading**: Implement ImageNodeVisited event
- **Missing Content**: Verify markdown syntax is valid
- **Memory Issues**: Dispose documents after processing
- **Stream Errors**: Ensure stream is readable and not disposed
- **Encoding Problems**: Use UTF-8 encoding for streams
