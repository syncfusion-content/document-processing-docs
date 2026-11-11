# Advanced Features

## Overview
Advanced capabilities including custom parsing with MdImportSettings, image event handling, and document traversal techniques.

## MdImportSettings

### Overview
Control markdown parsing behavior with MdImportSettings class.

```csharp
public class MdImportSettings
{
    public event EventHandler<MdImageNodeVisitedEventArgs> ImageNodeVisited;
}
```

### MdImageNodeVisitedEventArgs
```csharp
public class MdImageNodeVisitedEventArgs : EventArgs
{
    public string Uri { get; set; }              // Image URI from markdown
    public string AlternateText { get; set; }    // Image alt text
    public System.IO.Stream ImageStream { get; set; } // Image stream (can be set)
}
```

## Custom Image Handling

### Load Images During Parsing
```csharp
using Syncfusion.Office.Markdown;
using System.IO;

MdImportSettings settings = new MdImportSettings();

settings.ImageNodeVisited += (sender, args) =>
{
    // TODO:
    // Implement secure image handling logic if required by the application.
};

using FileStream stream = File.OpenRead("document.md");
MarkdownDocument doc = new MarkdownDocument(stream, settings);

string markdown = doc.GetMarkdownText();
doc.Dispose();
```

### Resolve Relative Image Paths
```csharp
string basePath = "C:\\Documents\\Images";

MdImportSettings settings = new MdImportSettings();

settings.ImageNodeVisited += (sender, args) =>
{
    // TODO:
    // Implement secure image handling logic if required by the application.
};

MarkdownDocument doc = new MarkdownDocument(markdownStream, settings);
```

### Cache Image Data
```csharp
Dictionary<string, byte[]> imageCache = new Dictionary<string, byte[]>();

MdImportSettings settings = new MdImportSettings();

settings.ImageNodeVisited += (sender, args) =>
{
    // TODO:
    // Implement secure image handling logic if required by the application.
};

MarkdownDocument doc = new MarkdownDocument(markdownStream, settings);
```

### Validate Image URLs
```csharp
List<string> brokenImages = new List<string>();

MdImportSettings settings = new MdImportSettings();

settings.ImageNodeVisited += (sender, args) =>
{
    // TODO:
    // Implement secure image handling logic if required by the application.
};

MarkdownDocument doc = new MarkdownDocument(markdownStream, settings);

if (brokenImages.Count > 0)
{
    Console.WriteLine($"\nFound {brokenImages.Count} broken image links:");
    foreach (string url in brokenImages)
    {
        Console.WriteLine($"  - {url}");
    }
}
```

## Document Traversal

### Visit All Blocks
```csharp
MarkdownDocument doc = new MarkdownDocument(markdownStream, settings);

foreach (IMdBlock block in doc.Blocks)
{
    if (block is MdParagraph para)
    {
        Console.WriteLine($"Paragraph: {para.StyleName}");
    }
    else if (block is MdTable table)
    {
        Console.WriteLine($"Table: {table.Rows.Count} rows");
    }
    else if (block is MdCodeBlock code)
    {
        Console.WriteLine($"Code: {code.Language}");
    }
}
```

### Deep Traversal with Recursion
```csharp
void TraverseDocument(MarkdownDocument doc)
{
    foreach (IMdBlock block in doc.Blocks)
    {
        ProcessBlock(block, 0);
    }
}

void ProcessBlock(IMdBlock block, int depth)
{
    string indent = new string(' ', depth * 2);
    
    if (block is MdParagraph para)
    {
        Console.WriteLine($"{indent}Paragraph ({para.StyleName}):");
        ProcessInlines(para.Inlines, depth + 1);
    }
    else if (block is MdTable table)
    {
        Console.WriteLine($"{indent}Table:");
        foreach (MdTableRow row in table.Rows)
        {
            Console.WriteLine($"{indent}  Row:");
            foreach (MdTableCell cell in row.Cells)
            {
                Console.WriteLine($"{indent}    Cell:");
                ProcessInlines(cell.Inlines, depth + 2);
            }
        }
    }
    else if (block is MdCodeBlock code)
    {
        Console.WriteLine($"{indent}CodeBlock ({code.Language}): {code.Lines.Count} lines");
    }
}

void ProcessInlines(MdInlineCollection inlines, int depth)
{
    string indent = new string(' ', depth * 2);
    
    foreach (IMdInline inline in inlines)
    {
        if (inline is MdTextRange text)
        {
            Console.WriteLine($"{indent}Text: \"{text.Text}\"");
        }
        else if (inline is MdHyperlink link)
        {
            Console.WriteLine($"{indent}Link: {link.DisplayText} -> {link.Url}");
            ProcessInlines(link.Inlines, depth + 1);
        }
        else if (inline is MdPicture picture)
        {
            Console.WriteLine($"{indent}Image: {picture.AltText} ({picture.Url})");
        }
    }
}
```

### Extract Document Statistics
```csharp
class DocumentStats
{
    public int Paragraphs { get; set; }
    public int Headings { get; set; }
    public int Tables { get; set; }
    public int CodeBlocks { get; set; }
    public int Links { get; set; }
    public int Images { get; set; }
    public int Words { get; set; }
}

DocumentStats GetDocumentStats(MarkdownDocument doc)
{
    var stats = new DocumentStats();
    
    foreach (IMdBlock block in doc.Blocks)
    {
        if (block is MdParagraph para)
        {
            stats.Paragraphs++;
            if (para.StyleName != MdParagraphStyle.None)
                stats.Headings++;
            
            stats.Words += CountWords(para.Inlines);
            stats.Links += CountLinks(para.Inlines);
            stats.Images += CountImages(para.Inlines);
        }
        else if (block is MdTable table)
        {
            stats.Tables++;
            foreach (MdTableRow row in table.Rows)
            {
                foreach (MdTableCell cell in row.Cells)
                {
                    stats.Words += CountWords(cell.Inlines);
                    stats.Links += CountLinks(cell.Inlines);
                    stats.Images += CountImages(cell.Inlines);
                }
            }
        }
        else if (block is MdCodeBlock code)
        {
            stats.CodeBlocks++;
        }
    }
    
    return stats;
}

int CountWords(MdInlineCollection inlines)
{
    int count = 0;
    foreach (IMdInline inline in inlines)
    {
        if (inline is MdTextRange text)
        {
            count += text.Text.Split(new[] { ' ', '\t', '\n', '\r' }, 
                StringSplitOptions.RemoveEmptyEntries).Length;
        }
    }
    return count;
}

int CountLinks(MdInlineCollection inlines)
{
    int count = 0;
    foreach (IMdInline inline in inlines)
    {
        if (inline is MdHyperlink)
            count++;
    }
    return count;
}

int CountImages(MdInlineCollection inlines)
{
    int count = 0;
    foreach (IMdInline inline in inlines)
    {
        if (inline is MdPicture)
            count++;
    }
    return count;
}

// Usage:
MarkdownDocument doc = new MarkdownDocument(markdownStream, settings);
DocumentStats stats = GetDocumentStats(doc);

Console.WriteLine("Document Statistics:");
Console.WriteLine($"  Paragraphs: {stats.Paragraphs}");
Console.WriteLine($"  Headings: {stats.Headings}");
Console.WriteLine($"  Tables: {stats.Tables}");
Console.WriteLine($"  Code Blocks: {stats.CodeBlocks}");
Console.WriteLine($"  Links: {stats.Links}");
Console.WriteLine($"  Images: {stats.Images}");
Console.WriteLine($"  Words: {stats.Words}");
```

## Document Manipulation

### Clone Document
```csharp
MarkdownDocument CloneDocument(MarkdownDocument source)
{
    string markdown = source.GetMarkdownText();
    using MemoryStream stream = new MemoryStream(Encoding.UTF8.GetBytes(markdown));
    return new MarkdownDocument(stream, new MdImportSettings());
}

// Usage:
MarkdownDocument original = new MarkdownDocument(originalStream, settings);
MarkdownDocument clone = CloneDocument(original);
```

### Merge Documents
```csharp
MarkdownDocument MergeDocuments(params MarkdownDocument[] documents)
{
    MarkdownDocument merged = new MarkdownDocument();
    
    foreach (MarkdownDocument doc in documents)
    {
        foreach (IMdBlock block in doc.Blocks)
        {
            // Note: This is a conceptual example
            // Actual implementation would need deep cloning
            merged.Blocks.Add(block);
        }
    }
    
    return merged;
}

// Better approach: Merge markdown text
string MergeMarkdownText(params MarkdownDocument[] documents)
{
    StringBuilder merged = new StringBuilder();
    
    foreach (MarkdownDocument doc in documents)
    {
        merged.AppendLine(doc.GetMarkdownText());
        merged.AppendLine(); // Separator
    }
    
    return merged.ToString();
}
```

### Split Document by Headings
```csharp
List<MarkdownDocument> SplitByHeadings(MarkdownDocument doc)
{
    List<MarkdownDocument> sections = new List<MarkdownDocument>();
    MarkdownDocument currentSection = null;
    
    foreach (IMdBlock block in doc.Blocks)
    {
        if (block is MdParagraph para && 
            (para.StyleName == MdParagraphStyle.Heading1 || 
             para.StyleName == MdParagraphStyle.Heading2))
        {
            // Start new section
            if (currentSection != null)
            {
                sections.Add(currentSection);
            }
            currentSection = new MarkdownDocument();
        }
        
        // Add block to current section
        if (currentSection != null)
        {
            // Note: This is conceptual - would need proper cloning
            currentSection.Blocks.Add(block);
        }
    }
    
    if (currentSection != null)
    {
        sections.Add(currentSection);
    }
    
    return sections;
}
```

### Filter Content
```csharp
MarkdownDocument FilterByHeadingLevel(MarkdownDocument doc, MdParagraphStyle level)
{
    MarkdownDocument filtered = new MarkdownDocument();
    bool includeSection = false;
    
    foreach (IMdBlock block in doc.Blocks)
    {
        if (block is MdParagraph para && para.StyleName == level)
        {
            includeSection = true;
        }
        else if (block is MdParagraph para2 && 
                 para2.StyleName != MdParagraphStyle.None && 
                 para2.StyleName < level)
        {
            includeSection = false;
        }
        
        if (includeSection)
        {
            // Add block (conceptual - needs proper cloning)
            filtered.Blocks.Add(block);
        }
    }
    
    return filtered;
}
```

## Search and Replace

### Find and Replace Text
```csharp
void ReplaceText(MarkdownDocument doc, string find, string replace)
{
    foreach (IMdBlock block in doc.Blocks)
    {
        if (block is MdParagraph para)
        {
            ReplaceInInlines(para.Inlines, find, replace);
        }
        else if (block is MdTable table)
        {
            foreach (MdTableRow row in table.Rows)
            {
                foreach (MdTableCell cell in row.Cells)
                {
                    ReplaceInInlines(cell.Inlines, find, replace);
                }
            }
        }
        else if (block is MdCodeBlock code)
        {
            for (int i = 0; i < code.Lines.Count; i++)
            {
                code.Lines[i] = code.Lines[i].Replace(find, replace);
            }
        }
    }
}

void ReplaceInInlines(MdInlineCollection inlines, string find, string replace)
{
    foreach (IMdInline inline in inlines)
    {
        if (inline is MdTextRange text)
        {
            text.Text = text.Text.Replace(find, replace);
        }
        else if (inline is MdHyperlink link)
        {
            link.DisplayText = link.DisplayText?.Replace(find, replace);
            link.Url = link.Url?.Replace(find, replace);
            ReplaceInInlines(link.Inlines, find, replace);
        }
    }
}

// Usage:
MarkdownDocument doc = new MarkdownDocument(markdownStream, settings);
ReplaceText(doc, "old-term", "new-term");
string updated = doc.GetMarkdownText();
```

### Find All Occurrences
```csharp
List<string> FindText(MarkdownDocument doc, string searchTerm)
{
    List<string> occurrences = new List<string>();
    
    foreach (IMdBlock block in doc.Blocks)
    {
        if (block is MdParagraph para)
        {
            FindInInlines(para.Inlines, searchTerm, occurrences);
        }
        else if (block is MdTable table)
        {
            foreach (MdTableRow row in table.Rows)
            {
                foreach (MdTableCell cell in row.Cells)
                {
                    FindInInlines(cell.Inlines, searchTerm, occurrences);
                }
            }
        }
    }
    
    return occurrences;
}

void FindInInlines(MdInlineCollection inlines, string searchTerm, List<string> results)
{
    foreach (IMdInline inline in inlines)
    {
        if (inline is MdTextRange text && text.Text.Contains(searchTerm))
        {
            results.Add(text.Text);
        }
        else if (inline is MdHyperlink link)
        {
            FindInInlines(link.Inlines, searchTerm, results);
        }
    }
}
```

## Validation

### Validate Document Structure
```csharp
class ValidationResult
{
    public bool IsValid { get; set; }
    public List<string> Errors { get; set; } = new List<string>();
    public List<string> Warnings { get; set; } = new List<string>();
}

ValidationResult ValidateDocument(MarkdownDocument doc)
{
    var result = new ValidationResult { IsValid = true };
    
    int h1Count = 0;
    bool hasContent = false;
    
    foreach (IMdBlock block in doc.Blocks)
    {
        if (block is MdParagraph para)
        {
            hasContent = true;
            
            // Check for multiple H1
            if (para.StyleName == MdParagraphStyle.Heading1)
            {
                h1Count++;
                if (h1Count > 1)
                {
                    result.Warnings.Add("Multiple H1 headings found");
                }
            }
            
            // Check for empty paragraphs
            if (para.Inlines.Count == 0)
            {
                result.Warnings.Add("Empty paragraph found");
            }
            
            // Check links
            foreach (IMdInline inline in para.Inlines)
            {
                if (inline is MdHyperlink link && string.IsNullOrEmpty(link.Url))
                {
                    result.Errors.Add("Link with empty URL found");
                    result.IsValid = false;
                }
            }
        }
        else if (block is MdTable table)
        {
            hasContent = true;
            
            // Check table structure
            if (table.Rows.Count == 0)
            {
                result.Warnings.Add("Empty table found");
            }
            else
            {
                int columnCount = table.Rows[0].Cells.Count;
                for (int i = 1; i < table.Rows.Count; i++)
                {
                    if (table.Rows[i].Cells.Count != columnCount)
                    {
                        result.Errors.Add($"Table row {i} has inconsistent column count");
                        result.IsValid = false;
                    }
                }
            }
        }
    }
    
    if (!hasContent)
    {
        result.Warnings.Add("Document has no content");
    }
    
    if (h1Count == 0)
    {
        result.Warnings.Add("Document has no H1 heading");
    }
    
    return result;
}

// Usage:
MarkdownDocument doc = new MarkdownDocument(markdownStream, settings);
ValidationResult validation = ValidateDocument(doc);

if (!validation.IsValid)
{
    Console.WriteLine("Validation Errors:");
    foreach (string error in validation.Errors)
    {
        Console.WriteLine($"  - {error}");
    }
}

if (validation.Warnings.Count > 0)
{
    Console.WriteLine("Warnings:");
    foreach (string warning in validation.Warnings)
    {
        Console.WriteLine($"  - {warning}");
    }
}
```

## Performance Optimization

### Efficient Parsing
```csharp
// Use using statement for proper disposal
using FileStream stream = File.OpenRead("large-document.md");
using MarkdownDocument doc = new MarkdownDocument(stream, settings);

// Process document

// Document is automatically disposed
```

### Batch Processing
```csharp
string[] files = Directory.GetFiles("./docs", "*.md");

foreach (string file in files)
{
    using FileStream stream = File.OpenRead(file);
    using MarkdownDocument doc = new MarkdownDocument(stream, settings);
    
    // Process each document
    
    // Document is disposed before processing next file
}
```

### Memory Management
```csharp
// Process large documents in chunks
void ProcessLargeDocument(string filePath)
{
    // Read in chunks to avoid loading entire file
    using FileStream stream = new FileStream(filePath, FileMode.Open, FileAccess.Read);
    using MarkdownDocument doc = new MarkdownDocument(stream, settings);
    
    // Process blocks individually
    foreach (IMdBlock block in doc.Blocks)
    {
        ProcessBlock(block);
        // Block processing complete, memory can be reclaimed
    }
    
    // Explicitly dispose
    doc.Dispose();
}
```

## Error Handling

### Robust Parsing
```csharp
MarkdownDocument ParseWithErrorHandling(string filePath)
{
    try
    {
        using FileStream stream = File.OpenRead(filePath);
        return new MarkdownDocument(stream, settings);
    }
    catch (FileNotFoundException)
    {
        Console.WriteLine($"File not found: {filePath}");
        return null;
    }
    catch (IOException ex)
    {
        Console.WriteLine($"IO error reading {filePath}: {ex.Message}");
        return null;
    }
    catch (Exception ex)
    {
        Console.WriteLine($"Error parsing {filePath}: {ex.Message}");
        return null;
    }
}
```

### Graceful Degradation
```csharp
string ConvertWithFallback(string markdownPath)
{
    try
    {
        using FileStream stream = File.OpenRead(markdownPath);
        using MarkdownDocument doc = new MarkdownDocument(stream, settings);
        return doc.GetMarkdownText();
    }
    catch (Exception ex)
    {
        Console.WriteLine($"Conversion failed: {ex.Message}");
        // Return original markdown wrapped in <pre>
        string content = File.ReadAllText(markdownPath);
        return $"<pre>{System.Web.HttpUtility.HtmlEncode(content)}</pre>";
    }
}
```

## Best Practices

1. **Dispose Resources**: Always dispose MarkdownDocument and streams
2. **Event Handlers**: Unsubscribe from events to prevent memory leaks
3. **Error Handling**: Wrap file operations in try-catch blocks
4. **Validation**: Validate document structure before processing
5. **Performance**: Use streaming for large documents
6. **Memory**: Process blocks individually when possible
7. **Testing**: Test with various markdown formats and edge cases

## Complete Advanced Example

### Document Processing Pipeline
```csharp
class MarkdownProcessor
{
    private readonly string _basePath;
    private readonly Dictionary<string, byte[]> _imageCache;
    
    public MarkdownProcessor(string basePath)
    {
        _basePath = basePath;
        _imageCache = new Dictionary<string, byte[]>();
    }
    
    public MarkdownDocument ProcessMarkdown(string filePath)
    {
        // Setup import settings
        MdImportSettings settings = new MdImportSettings();
        settings.ImageNodeVisited += OnImageNodeVisited;
        
        try
        {
            // Parse with custom settings
            using FileStream stream = File.OpenRead(filePath);
            MarkdownDocument doc = new MarkdownDocument(stream, settings);
            
            // Validate
            ValidationResult validation = ValidateDocument(doc);
            if (!validation.IsValid)
            {
                Console.WriteLine($"Validation failed for {filePath}");
                foreach (string error in validation.Errors)
                {
                    Console.WriteLine($"  Error: {error}");
                }
            }
            
            // Get statistics
            DocumentStats stats = GetDocumentStats(doc);
            Console.WriteLine($"Processed {filePath}:");
            Console.WriteLine($"  Words: {stats.Words}");
            Console.WriteLine($"  Images: {stats.Images}");
            Console.WriteLine($"  Links: {stats.Links}");
            
            return doc;
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Error processing {filePath}: {ex.Message}");
            return null;
        }
    }
    
    private void OnImageNodeVisited(object sender, MdImageNodeVisitedEventArgs args)
    {
        // TODO:
        // Implement secure image handling logic if required by the application.
    }
}

// Usage:
var processor = new MarkdownProcessor("C:\\Documents");
using MarkdownDocument doc = processor.ProcessMarkdown("readme.md");

if (doc != null)
{
    File.WriteAllText("readme.md", doc.GetMarkdownText());
}
```

## Troubleshooting

- **Memory issues**: Dispose documents and streams properly
- **Image loading fails**: Check paths and permissions
- **Event not firing**: Verify event subscription before parsing
- **Performance slow**: Process large documents in chunks
- **Validation errors**: Check document structure and content

## Common Patterns

- **Pipeline processing**: Chain operations (parse → validate → transform → export)
- **Caching**: Cache frequently accessed resources (images, parsed documents)
- **Error recovery**: Provide fallback mechanisms for failed operations
- **Logging**: Track document processing steps for debugging
- **Batch operations**: Process multiple documents efficiently
