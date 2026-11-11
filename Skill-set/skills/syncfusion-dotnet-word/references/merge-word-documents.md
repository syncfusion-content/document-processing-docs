# Merge Word Documents

> Import content from source documents into destination documents — merge in new page, same page, maintain list styles.

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

## Merge Document in New Page

Import contents from source document into destination document where imported contents start from a new page.

### Minimal Code

#### Common for Cross-Platform and Windows-Specific
```csharp
var sourceStream = new FileStream("source.docx", FileMode.Open, FileAccess.Read);
var sourceDoc = new WordDocument(sourceStream, FormatType.Automatic);
var destStream = new FileStream("destination.docx", FileMode.Open, FileAccess.Read);
var destDoc = new WordDocument(destStream, FormatType.Docx);

destDoc.ImportContent(sourceDoc, ImportOptions.UseDestinationStyles);

var outputStream = new FileStream("merged.docx", FileMode.Create, FileAccess.Write);
destDoc.Save(outputStream, FormatType.Docx);
outputStream.Close();
destStream.Close();
sourceStream.Close();
destDoc.Close();
sourceDoc.Close();
```

### Placeholders
- `"source.docx"` → Replace with `"{source-file-path}"`
- `"destination.docx"` → Replace with `"{destination-file-path}"`
- `"merged.docx"` → Replace with `"{output-file-path}"`

---

## Merge Document in Same Page

Import contents from source document into destination document on the same page by setting the section break code to `NoBreak`.

### Minimal Code

#### Common for Cross-Platform and Windows-Specific
```csharp
var sourceStream = new FileStream("source.docx", FileMode.Open, FileAccess.Read);
var sourceDoc = new WordDocument(sourceStream, FormatType.Automatic);
var destStream = new FileStream("destination.docx", FileMode.Open, FileAccess.Read);
var destDoc = new WordDocument(destStream, FormatType.Docx);

sourceDoc.Sections[0].BreakCode = SectionBreakCode.NoBreak;

destDoc.ImportContent(sourceDoc, ImportOptions.UseDestinationStyles);

var outputStream = new FileStream("merged.docx", FileMode.Create, FileAccess.Write);
destDoc.Save(outputStream, FormatType.Docx);
outputStream.Close();
destStream.Close();
sourceStream.Close();
destDoc.Close();
sourceDoc.Close();
```

### Placeholders
- `"source.docx"` → Replace with `"{source-file-path}"`
- `"destination.docx"` → Replace with `"{destination-file-path}"`
- `"merged.docx"` → Replace with `"{output-file-path}"`
- `SectionBreakCode.NoBreak` → Use this to merge on same page; omit to merge on new page

---

## Merge First Source Section into Last Section

Import contents from source document into destination document where the first source section is merged into the last section of the destination document, by passing `true` for the `mergeFirstSection` parameter.

### Minimal Code

#### Common for Cross-Platform and Windows-Specific
```csharp
var sourceStream = new FileStream("source.docx", FileMode.Open, FileAccess.Read);
var sourceDoc = new WordDocument(sourceStream, FormatType.Automatic);
var destStream = new FileStream("destination.docx", FileMode.Open, FileAccess.Read);
var destDoc = new WordDocument(destStream, FormatType.Docx);

destDoc.ImportContent(sourceDoc, ImportOptions.UseDestinationStyles, true);

var outputStream = new FileStream("merged.docx", FileMode.Create, FileAccess.Write);
destDoc.Save(outputStream, FormatType.Docx);
outputStream.Close();
destStream.Close();
sourceStream.Close();
destDoc.Close();
sourceDoc.Close();
```

### Placeholders
- `"source.docx"` → Replace with `"{source-file-path}"`
- `"destination.docx"` → Replace with `"{destination-file-path}"`
- `"merged.docx"` → Replace with `"{output-file-path}"`

### Options
```csharp
destDoc.ImportContent(sourceDoc, ImportOptions.UseDestinationStyles, true);   // Merge first source section into last destination section
destDoc.ImportContent(sourceDoc, ImportOptions.UseDestinationStyles, false); // Import as separate sections (default behavior)
```

---

## Maintain Imported List Style Information

Preserve list style cache when merging documents with list styles. Useful for cloning and merging with list formatting.

### Minimal Code

#### Common for Cross-Platform and Windows-Specific
```csharp
var sourceStream = new FileStream("source.docx", FileMode.Open);
var sourceDoc = new WordDocument(sourceStream, FormatType.Docx);
var destStream = new FileStream("destination.docx", FileMode.Open);
var destDoc = new WordDocument(destStream, FormatType.Docx);

destDoc.Settings.MaintainImportedListCache = true;

foreach (WSection section in sourceDoc.Sections)
{
    foreach (TextBodyItem bodyItem in section.Body.ChildEntities)
    {
        destDoc.LastSection.Body.ChildEntities.Add(bodyItem.Clone());
    }
}
sourceStream.Close();
sourceDoc.Close();

destDoc.Settings.MaintainImportedListCache = false;

var outputStream = new FileStream("merged.docx", FileMode.Create, FileAccess.Write);
destDoc.Save(outputStream, FormatType.Docx);
outputStream.Close();
destStream.Close();
destDoc.Close();
```

### Placeholders
- `"source.docx"` → Replace with `"{source-file-path}"`
- `"destination.docx"` → Replace with `"{destination-file-path}"`
- `"merged.docx"` → Replace with `"{output-file-path}"`

### Options
```csharp
destDoc.Settings.MaintainImportedListCache = true;   // Enable before merge to preserve list styles
destDoc.Settings.MaintainImportedListCache = false;  // Disable after merge
```

---

## Import Options

Control how content is imported:

#### Common for Cross-Platform and Windows-Specific
```csharp
destDoc.ImportContent(sourceDoc, ImportOptions.UseDestinationStyles);

destDoc.ImportContent(sourceDoc, ImportOptions.KeepSourceFormatting);

destDoc.ImportContent(sourceDoc, ImportOptions.KeepTextOnly);

destDoc.ImportContent(sourceDoc, ImportOptions.ListContinueNumbering);

destDoc.ImportContent(sourceDoc, ImportOptions.ListRestartNumbering);

destDoc.ImportContent(sourceDoc, ImportOptions.MergeFormatting);

```

### Placeholders
- `ImportOptions.UseDestinationStyles` → Use when you want merged content to match destination formatting
- `ImportOptions.KeepSourceFormatting` → Use when you want to preserve source document formatting
- `ImportOptions.KeepTextOnly` → Use when you want to import only plain text and remove all formatting, styles, lists, images, and fields
- `ImportOptions.ListContinueNumbering` → Use when you want imported lists to continue numbering from the destination document
- `ImportOptions.ListRestartNumbering` → Use when you want imported list numbering to restart from the beginning
- `ImportOptions.MergeFormatting` → Use when you want to merge source document formatting with destination styles

---

## Merge Multiple Documents

Merge multiple source documents into a single destination document.

#### Common for Cross-Platform and Windows-Specific
```csharp
var destStream = new FileStream("destination.docx", FileMode.Open, FileAccess.Read);
var destDoc = new WordDocument(destStream, FormatType.Docx);

string[] sourceFiles = new[] { "source1.docx", "source2.docx", "source3.docx" };

foreach (string sourceFile in sourceFiles)
{
    var sourceStream = new FileStream(sourceFile, FileMode.Open, FileAccess.Read);
    var sourceDoc = new WordDocument(sourceStream, FormatType.Docx);
    
    sourceDoc.Sections[0].BreakCode = SectionBreakCode.NoBreak;
    
    destDoc.ImportContent(sourceDoc, ImportOptions.UseDestinationStyles);
    sourceStream.Close();
    sourceDoc.Close();
}

var outputStream = new FileStream("merged.docx", FileMode.Create, FileAccess.Write);
destDoc.Save(outputStream, FormatType.Docx);
outputStream.Close();
destStream.Close();
destDoc.Close();
```

### Placeholders
- `"destination.docx"` → Replace with `"{destination-file-path}"`
- `sourceFiles` → Replace with array of `"{source-file-paths}"`
- `"merged.docx"` → Replace with `"{output-file-path}"`
