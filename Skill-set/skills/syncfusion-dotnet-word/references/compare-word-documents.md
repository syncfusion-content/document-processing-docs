# Compare Word Documents

> Word document comparison — comparing two Word documents, tracking insertions and deletions, setting author and date information, and customizing comparison options to ignore format changes.

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

## Compare Two Word Documents

### Minimal Code
#### Cross-Platform
```csharp
// Load the original document
using (FileStream originalStream = new FileStream("OriginalDocument.docx", FileMode.Open, FileAccess.Read))
{
    using (WordDocument originalDocument = new WordDocument(originalStream, FormatType.Docx))
    {
        // Load the revised document
        using (FileStream revisedStream = new FileStream("RevisedDocument.docx", FileMode.Open, FileAccess.Read))
        {
            using (WordDocument revisedDocument = new WordDocument(revisedStream, FormatType.Docx))
            {
                // Compare the original and revised documents
                originalDocument.Compare(revisedDocument);
                
                // Save the result
                var outputPath = Path.Combine(Directory.GetCurrentDirectory(), "output", "Comparison.docx");
                using (FileStream outStream = new FileStream(outputPath, FileMode.Create, FileAccess.ReadWrite))
                {
                    originalDocument.Save(outStream, FormatType.Docx);
                }
            }
        }
    }
}
```
#### Windows-Specific
```csharp
//Load the original document.
using (WordDocument originalDocument = new WordDocument("Data/OriginalDocument.docx", FormatType.Docx))
{
    //Load the revised document.
    using (WordDocument revisedDocument = new WordDocument("Data/RevisedDocument.docx", FormatType.Docx))
   {
        // Compare the original and revised Word documents.
        originalDocument.Compare(revisedDocument);
        //Save the Word document.
        originalDocument.Save("Comparison.docx");          
    }
}
```

### Changes Tracked
- **Insertions**: Content added in the revised document
- **Deletions**: Content removed from the original document
- **Formatting**: Style and formatting modifications

### Notes
- DocIO performs **word-level comparison**—if a single character in a word is changed, the entire word is highlighted as changed
- Comparison is **supported in DOCX format only**
- Default author: `"Author"`
- Default date: Current system time

### Placeholders
- `"OriginalDocument.docx"` → Replace with `"{original-file-path}"`
- `"RevisedDocument.docx"` → Replace with `"{revised-file-path}"`
- `"Comparison.docx"` → Replace with `"{output-file-path}"`

---

## Set Author and Date

### Minimal 

#### Common for Cross-Platform and Windows-Specific
```csharp
// Load the original document
using (FileStream originalStream = new FileStream("OriginalDocument.docx", FileMode.Open, FileAccess.Read))
{
    using (WordDocument originalDocument = new WordDocument(originalStream, FormatType.Docx))
    {
        // Load the revised document
        using (FileStream revisedStream = new FileStream("RevisedDocument.docx", FileMode.Open, FileAccess.Read))
        {
            using (WordDocument revisedDocument = new WordDocument(revisedStream, FormatType.Docx))
            {
                // Compare with custom author and date
                originalDocument.Compare(revisedDocument, "Nancy Davolio", DateTime.Now.AddDays(-1));
                
                // Save the result
                var outputPath = Path.Combine(Directory.GetCurrentDirectory(), "output", "Comparison.docx");
                using (FileStream outStream = new FileStream(outputPath, FileMode.Create, FileAccess.ReadWrite))
                {
                    originalDocument.Save(outStream, FormatType.Docx);
                }
            }
        }
    }
}
```

### Method Signature

#### Common for Cross-Platform and Windows-Specific
```csharp
public void Compare(WordDocument revisedDocument, string author, DateTime dateTime)
```

### Parameters
- `revisedDocument`: The document to compare against the original
- `author`: Name of the person making the revision (default: `"Author"`)
- `dateTime`: Timestamp of the revision (default: current time)

### Placeholders
- `"Nancy Davolio"` → Replace with `"{author-name}"`
- `DateTime.Now.AddDays(-1)` → Replace with `"{revision-date}"`

---

## Comparison Options

### Overview
Customize word comparison behavior using the `ComparisonOptions` class to control how DocIO identifies and tracks changes between documents.

### Available Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `DetectFormatChanges` | bool | `true` | Track formatting changes (font, color, size, style, etc.) |

---

## Ignore Format Changes

### Minimal Code

#### Common for Cross-Platform and Windows-Specific
```csharp
// Load the original document
using (FileStream originalStream = new FileStream("OriginalDocument.docx", FileMode.Open, FileAccess.Read))
{
    using (WordDocument originalDocument = new WordDocument(originalStream, FormatType.Docx))
    {
        // Load the revised document
        using (FileStream revisedStream = new FileStream("RevisedDocument.docx", FileMode.Open, FileAccess.Read))
        {
            using (WordDocument revisedDocument = new WordDocument(revisedStream, FormatType.Docx))
            {
                // Create comparison options to ignore formatting changes
                ComparisonOptions compareOptions = new ComparisonOptions();
                compareOptions.DetectFormatChanges = false;
                
                // Compare with options
                originalDocument.Compare(revisedDocument, "Syncfusion", DateTime.Now, compareOptions);
                
                // Save the result
                var outputPath = Path.Combine(Directory.GetCurrentDirectory(), "output", "Comparison.docx");
                using (FileStream outStream = new FileStream(outputPath, FileMode.Create, FileAccess.ReadWrite))
                {
                    originalDocument.Save(outStream, FormatType.Docx);
                }
            }
        }
    }
}
```

### When to Use
- Compare documents where **only content changes matter**
- Ignore style, color, font, and formatting modifications
- Focus on **substantive content edits** (insertions, deletions)

### Behavior
- With `DetectFormatChanges = true` (default): All formatting differences are tracked
- With `DetectFormatChanges = false`: Only content changes are tracked

### Placeholders
- `compareOptions.DetectFormatChanges = false` → Set to `true` to track format changes

---

## Complete Example

### Full Workflow

#### Common for Cross-Platform and Windows-Specific
```csharp
// Load original document
using (FileStream originalStream = new FileStream("OriginalDocument.docx", FileMode.Open, FileAccess.Read))
{
    using (WordDocument originalDocument = new WordDocument(originalStream, FormatType.Docx))
    {
        // Load revised document
        using (FileStream revisedStream = new FileStream("RevisedDocument.docx", FileMode.Open, FileAccess.Read))
        {
            using (WordDocument revisedDocument = new WordDocument(revisedStream, FormatType.Docx))
            {
                // Set comparison options
                ComparisonOptions compareOptions = new ComparisonOptions();
                compareOptions.DetectFormatChanges = true;  // Track all changes
                
                // Compare with author, date, and options
                originalDocument.Compare(
                    revisedDocument, 
                    "John Smith", 
                    DateTime.Now, 
                    compareOptions
                );
                
                // Save comparison result
                var outputPath = Path.Combine(Directory.GetCurrentDirectory(), "output", "ComparisonResult.docx");
                using (FileStream outStream = new FileStream(outputPath, FileMode.Create, FileAccess.ReadWrite))
                {
                    originalDocument.Save(outStream, FormatType.Docx);
                }
                
                Console.WriteLine($"Comparison complete. Result saved to {outputPath}");
            }
        }
    }
}
```

---

## Common Properties

| Property | Type | Description |
|----------|------|-------------|
| `Compare()` | Method | Compares two Word documents and tracks changes |
| `ComparisonOptions` | Class | Encapsulates customization options for document comparison |
| `DetectFormatChanges` | bool | Controls whether formatting changes are detected and tracked |

---
