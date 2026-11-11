# Word to PDF Conversion

> Format conversions — converting Word documents to PDF format.

---

## Required common usings

```csharp
using Syncfusion.DocIO;
using Syncfusion.DocIO.DLS;
using Syncfusion.Pdf;
```

## Required usings for Cross-Platform

```csharp
using Syncfusion.DocIORenderer;
```

## Required usings for Windows-Specific

```csharp
using Syncfusion.OfficeChart;
using Syncfusion.OfficeChartToImageConverter;
using Syncfusion.DocToPDFConverter;
using System;
```

## Convert Word to PDF

### Minimal Code

#### Cross-Platform
```csharp
var inputPath = Path.Combine(Directory.GetCurrentDirectory(), "output/document.docx");
var outputPath = Path.Combine(Directory.GetCurrentDirectory(), "output/document.pdf");

if (!File.Exists(inputPath))
{
    throw new FileNotFoundException($"Input file not found: {inputPath}");
}

using var fs = new FileStream(inputPath, FileMode.Open, FileAccess.Read, FileShare.ReadWrite);
using var wordDoc = new WordDocument(fs, FormatType.Automatic);

using var renderer = new DocIORenderer();
using var pdfDoc = renderer.ConvertToPDF(wordDoc);

using var ofs = new FileStream(outputPath, FileMode.Create, FileAccess.Write);
pdfDoc.Save(ofs);
pdfDoc.Close();
wordDoc.Close();

Console.WriteLine($"SUCCESS: {outputPath}");
```

#### Windows-Specific
```csharp
WordDocument wordDocument = new WordDocument("Template.docx", FormatType.Docx);
wordDocument.ChartToImageConverter = new ChartToImageConverter();
DocToPDFConverter converter = new DocToPDFConverter();
PdfDocument pdfDocument = converter.ConvertToPDF(wordDocument);
pdfDocument.Save("WordtoPDF.pdf");
pdfDocument.Close(true);
wordDocument.Close();

Console.WriteLine("SUCCESS: WordtoPDF.pdf");
```

### Placeholders
- `"output/document.docx"` → Replace with `"{input-path}"`
- `"output/document.pdf"` → Replace with `"{output-path}"`
- `"Template.docx"` Replace with `"{input-path}"` or `"{template-path}"`
- `"WordtoPDF.pdf"` Replace with `"{output-path}"`

---

## Word to PDF Settings

Customize PDF conversion behavior using renderer settings.

### Embed Fonts

#### Embed Subset Fonts (used glyphs only)

#### Cross-Platform
```csharp
var renderer = new DocIORenderer();
renderer.Settings.EmbedFonts = true;
```

#### Windows-Specific
```csharp
var converter = new DocToPDFConverter();
converter.Settings.EmbedFonts = true;
```

#### Embed Complete Fonts

#### Cross-Platform
```csharp
var renderer = new DocIORenderer();
renderer.Settings.EmbedCompleteFonts = true;
```

#### Windows-Specific
```csharp
var converter = new DocToPDFConverter();
converter.Settings.EmbedCompleteFonts = true;
```

### Accessible PDF (508 Compliance)

#### Cross-Platform
```csharp
var renderer = new DocIORenderer();
renderer.Settings.AutoTag = true;
```

#### Windows-Specific
```csharp
var converter = new DocToPDFConverter();
converter.Settings.AutoTag = true;
```

### Export Bookmarks from Headings

#### Cross-Platform
```csharp
var renderer = new DocIORenderer();
renderer.Settings.ExportBookmarks = ExportBookmarkType.Headings;
```

#### Windows-Specific
```csharp
var converter = new DocToPDFConverter();
converter.Settings.ExportBookmarks = ExportBookmarkType.Headings;
```

### Preserve Form Fields

#### Cross-Platform
```csharp
var renderer = new DocIORenderer();
renderer.Settings.PreserveFormFields = true;
```

#### Windows-Specific
```csharp
var converter = new DocToPDFConverter();
converter.Settings.PreserveFormFields = true;
```

### Complex Script Text

#### Cross-Platform
```csharp
var renderer = new DocIORenderer();
renderer.Settings.AutoDetectComplexScript = true;
```

#### Windows-Specific
```csharp
var converter = new DocToPDFConverter();
converter.Settings.AutoDetectComplexScript = true;
```

### PDF/A Conformance

#### Cross-Platform
```csharp
var renderer = new DocIORenderer();
renderer.Settings.PdfConformanceLevel = PdfConformanceLevel.Pdf_A1B;
```

#### Windows-Specific
```csharp
var converter = new DocToPDFConverter();
converter.Settings.PdfConformanceLevel = PdfConformanceLevel.Pdf_A1B;
```

### Image quality and Resolution 

#### Windows-Specific
```csharp
var converter = new DocToPDFConverter();
//Sets the image quality to reduce the Pdf file size
converter.Settings.ImageQuality = 100;
//Sets the image resolution
converter.Settings.ImageResolution = 640;
```

### Recreate Nested Metafile

#### Windows-Specific
```csharp
var converter = new DocToPDFConverter();
converter.Settings.RecreateNestedMetafile = true;
```

### Optimize Memory for Identical Images

#### Cross-Platform
```csharp
var renderer = new DocIORenderer();
renderer.Settings.OptimizeIdenticalImages = true;
```

#### Windows-Specific
```csharp
var converter = new DocToPDFConverter();
converter.Settings.OptimizeIdenticalImages = true;
```

### Exclude Alternate Chunks

#### Cross-Platform
```csharp
var renderer = new DocIORenderer();
renderer.Settings.EnableAlternateChunks = false;
```

#### Windows-Specific
```csharp
var converter = new DocToPDFConverter();
converter.Settings.EnableAlternateChunks = false;
```

### Hyphenation

#### Cross-Platform
```csharp
var renderer = new DocIORenderer();
//Reads the language dictionary for hyphenation
FileStream dictionaryStream = new FileStream("hyphen_en_US.dic", FileMode.Open, FileAccess.Read);
//Adds the hyphenation dictionary of the specified language
Hyphenator.Dictionaries.Add("en-US", dictionaryStream);
//Converts Word document into PDF document
PdfDocument pdfDocument = renderer.ConvertToPDF(wordDocument);
```

#### Windows-Specific
```csharp
var converter = new DocToPDFConverter();
//Reads the language dictionary for hyphenation
FileStream dictionaryStream = new FileStream("hyphen_en_US.dic", FileMode.Open, FileAccess.Read);
//Adds the hyphenation dictionary of the specified language
Hyphenator.Dictionaries.Add("en-US", dictionaryStream);
//Converts Word document into PDF document
PdfDocument pdfDocument = converter.ConvertToPDF(wordDocument);
```

### Track changes and Comments

#### Cross-Platform
```csharp
using var fs = new FileStream("document.docx", FileMode.Open, FileAccess.Read);
using var wordDoc = new WordDocument(fs, Syncfusion.DocIO.FormatType.Docx);
```

#### Windows-Specific
```csharp
WordDocument wordDoc = new WordDocument("document.docx", Syncfusion.DocIO.FormatType.Docx);
```

#### Common code for Cross-Platform and Windows-Specific
```csharp
//Sets revision types to preserve track changes in  Word when converting to PDF.
wordDocument.RevisionOptions.ShowMarkup = RevisionType.Deletions | RevisionType.Formatting | RevisionType.Insertions;

//Optional: Change the Track Changes Color.
//Sets the color to be used for revision bars that identify document lines containing revised information
wordDocument.RevisionOptions.RevisionBarsColor = RevisionColor.Blue;
//Sets the color to be used for inserted content Insertion
wordDocument.RevisionOptions.InsertedTextColor = RevisionColor.ClassicBlue;
//Sets the color to be used for deleted content Deletion
wordDocument.RevisionOptions.DeletedTextColor = RevisionColor.ClassicRed;
//Sets the color to be used for content with changes of formatting properties
wordDocument.RevisionOptions.RevisedPropertiesColor = RevisionColor.DarkYellow;

//Optional: Show or Hide Revisions in Balloons.
//Hides showing revisions in balloons when converting Word documents to PDF
wordDocument.RevisionOptions.ShowInBalloons = RevisionType.None;

//Sets ShowInBalloons to render a document comments in converted PDF document.
wordDoc.RevisionOptions.CommentDisplayMode = CommentDisplayMode.ShowInBalloons;

//Optional: Change the Comment Color.
//Sets the color to be used for Comment Balloon.
wordDoc.RevisionOptions.CommentColor = RevisionColor.Blue;
```

#### Cross-Platform
```csharp
var renderer = new DocIORenderer();
var pdfDoc = renderer.ConvertToPDF(wordDoc);
```

#### Windows-Specific
```csharp
var converter = new DocToPDFConverter();
var pdfDocument = converter.ConvertToPDF(wordDoc);
```

### Preserve Ole Equation as bitmap image

#### Windows-Specific
```csharp
var converter = new DocToPDFConverter();
converter.Settings.PreserveOleEquationAsBitmap = true;
```

### Apply Matte color to Transparent Images

#### Cross-Platform
```csharp
var renderer = new DocIORenderer();
renderer.Settings.ApplyMatteToTransparentImages = true;
```

#### Windows-Specific
```csharp
var converter = new DocToPDFConverter();
converter.Settings.ApplyMatteToTransparentImages = true;
```

### Placeholders
- `PdfConformanceLevel.Pdf_A1B` → Replace with desired PDF/A level or omit for standard PDF
- `ExportBookmarkType.Headings` → Replace with `ExportBookmarkType.Bookmarks` or both using `|` operator
- `EnableAlternateChunks` → true to enable alternate content chunk processing (default), false to disable it
- `document.docx` → Replace with `{input-path}`
- `RevisionType.Deletions` or `RevisionType.Insertions` or `RevisionType.Formatting` → Includes deleted content or inserted content, or formatting changes in track changes (combine multiple values using the | operator)
- `RevisionColor.Blue` → Replace with desired revision color
- `RevisionType.None` → Hides revisions in balloons
(Replace with desired `RevisionType` to show revisions in balloons)
- CommentDisplayMode.ShowInBalloons → Displays comments in PDF as balloons
(Replace with desired comment display mode)
- `RevisionColor.Blue` (CommentColor) → Replace with desired comment balloon color
- `100` → Replace with `{image-quality-value}` (for example: 50, 75, 100)
- `640` → Replace with `{image-resolution-value}` (for example: 150, 300, 600, 640)
- `hyphen_en_US.dic` → Replace with `{hyphenation-dictionary-path}`
- `en-US` → Replace with `{language-culture-code}`
- ApplyMatteToTransparentImages → Set to false if matte background is not required

---

## Font Substitution

Replace missing fonts with installed alternate fonts during conversion.

### Use Alternate Installed Font

#### Cross-Platform
```csharp
using var fs = new FileStream("document.docx", FileMode.Open, FileAccess.Read);
using var wordDoc = new WordDocument(fs, FormatType.Automatic);
wordDoc.FontSettings.SubstituteFont += FontSettings_SubstituteFont;
using var renderer = new DocIORenderer();
using var pdfDoc = renderer.ConvertToPDF(wordDoc);
wordDoc.FontSettings.SubstituteFont -= FontSettings_SubstituteFont;
using var ofs = new FileStream("output.pdf", FileMode.Create, FileAccess.Write);
pdfDoc.Save(ofs);
```

#### Windows-Specific
```csharp
WordDocument wordDocument = new WordDocument("document.docx", FormatType.Docx);
wordDocument.ChartToImageConverter = new ChartToImageConverter();
wordDocument.FontSettings.SubstituteFont += FontSettings_SubstituteFont;
DocToPDFConverter converter = new DocToPDFConverter();
PdfDocument pdfDocument = converter.ConvertToPDF(wordDocument);
wordDocument.FontSettings.SubstituteFont -= FontSettings_SubstituteFont;
wordDocument.Close();
converter.Dispose();
pdfDocument.Save("output.pdf");
pdfDocument.Close();
```

#### Common code for Cross-Platform and Windows-Specific
```csharp
private void FontSettings_SubstituteFont(object sender, SubstituteFontEventArgs args)
{
    if (args.OriginalFontName == "Arial Unicode MS")
        args.AlternateFontName = "Arial";
    else
        args.AlternateFontName = "Times New Roman";
}
```

### Placeholders
- `"document.docx"` → Replace with `"{input-path}"`
- `"output.pdf"` → Replace with `"{output-path}"`
- `"Arial Unicode MS"` → Replace with `"{missing-font-name}"`
- `"Arial"`, `"Times New Roman"` → Replace with `"{alternate-font-name}"`

### Use Font File Instead of Installed Font

#### Common code for Cross-Platform and Windows-Specific
```csharp
private void FontSettings_SubstituteFont(object sender, SubstituteFontEventArgs args)
{
    if (args.OrignalFontName == "Arial Unicode MS")
    {
        switch (args.FontStyle)
        {
            case FontStyle.Italic:
                args.AlternateFontStream = new FileStream("Arial_italic.TTF", FileMode.Open, FileAccess.Read, FileShare.ReadWrite);
                break;
            case FontStyle.Bold:
                args.AlternateFontStream = new FileStream("Arial_bold.TTF", FileMode.Open, FileAccess.Read, FileShare.ReadWrite);
                break;
            default:
                args.AlternateFontStream = new FileStream("Arial.TTF", FileMode.Open, FileAccess.Read, FileShare.ReadWrite);
                break;
        }
    }
}
```

### Placeholders
- `"document.docx"` → Replace with `"{input-path}"`
- `"output.pdf"` → Replace with `"{output-path}"`
- `"Arial Unicode MS"` → Replace with `"{missing-font-name}"`
- `"Arial.TTF"` → Replace with `"{font-file-path}"`

---

## Custom Font Registration

Register custom fonts for Word-to-PDF conversion when they are not installed on the system.

### Required common usings

```csharp
using Syncfusion.Drawing.Fonts;
```

### Supported Font Formats

- TrueType Fonts (.ttf)
- OpenType Fonts (.otf)

### Register Fonts from a Folder

```csharp
//Specify the path to the folder containing font files.
FontManager.RegisterFonts(@"C:\CustomFonts");
```

> Supported in .NET 8.0 and later. The folder must be accessible; otherwise this method throws `DirectoryNotFoundException`.

### Full Example

#### Cross-Platform

```csharp
//Register custom fonts before conversion
FontManager.RegisterFonts(@"C:\CustomFonts");

using var fs = new FileStream("document.docx", FileMode.Open, FileAccess.Read);
using var wordDoc = new WordDocument(fs, FormatType.Automatic);

using var renderer = new DocIORenderer();
using var pdfDoc = renderer.ConvertToPDF(wordDoc);

using var outputStream = new FileStream("output.pdf", FileMode.Create, FileAccess.Write);
pdfDoc.Save(outputStream);

//Clear all registered fonts after conversion
FontManager.ClearRegisteredFonts(true);
```

#### Windows-Specific

```csharp
//Register custom fonts before conversion
FontManager.RegisterFonts(@"C:\CustomFonts");

WordDocument wordDocument = new WordDocument("Template.docx", FormatType.Docx);
DocToPDFConverter converter = new DocToPDFConverter();
PdfDocument pdfDocument = converter.ConvertToPDF(wordDocument);
pdfDocument.Save("WordtoPDF.pdf");
pdfDocument.Close(true);
wordDocument.Close();

//Clear all registered fonts after conversion
FontManager.ClearRegisteredFonts(true);
```

### Register Custom Fonts from Streams

```csharp
List<Stream> fontStreams = new List<Stream>();
fontStreams.Add(File.OpenRead("Arial.ttf"));
fontStreams.Add(File.OpenRead("Calibri.ttf"));

FontManager.RegisterFonts(fontStreams);
```

### Get Registered Font Names

```csharp
List<string> registeredFontNames = FontManager.RegisteredFontNames;
foreach (string registeredFontName in registeredFontNames)
{
    Console.WriteLine(registeredFontName);
}
```

### Clear Registered Fonts

```csharp
// Clear all registered fonts and dispose the associated font streams.
FontManager.ClearRegisteredFonts(true);
```

### Placeholders
- `@"C:\CustomFonts"` → Replace with `"{font-folder-path}"`
- `"Arial.ttf"`, `"Calibri.ttf"` → Replace with `"{font-file-path}"`
- `"Fonts"` → Replace with `"{font-folder-path}"`

---

## Fallback Fonts

Use fallback fonts for missing glyphs in specific script types or Unicode ranges.

### Initialize Default Fallback Fonts

Automatically sets fallback fonts for Arabic, Hebrew, Chinese, Japanese, Thai, Korean, and more:

#### Cross-Platform
```csharp
using var fs = new FileStream("document.docx", FileMode.Open, FileAccess.Read);
using var wordDoc = new WordDocument(fs, FormatType.Automatic);
wordDoc.FontSettings.FallbackFonts.InitializeDefault();

using var renderer = new DocIORenderer();
using var pdfDoc = renderer.ConvertToPDF(wordDoc);
using var ofs = new FileStream("output.pdf", FileMode.Create, FileAccess.Write);
pdfDoc.Save(ofs);
```

#### Windows-Specific
```csharp
using (WordDocument wordDocument = new WordDocument("document.docx", Syncfusion.DocIO.FormatType.Docx))
{
   wordDocument.FontSettings.FallbackFonts.InitializeDefault();
   using (DocToPDFConverter converter = new DocToPDFConverter())
   {
      using (PdfDocument pdfDocument = converter.ConvertToPDF(wordDocument))
      {
         pdfDocument.Save("output.pdf");
      }
   }
}
```

### Placeholders
- `"document.docx"` → Replace with `"{input-path}"`
- `"output.pdf"` → Replace with `"{output-path}"`

### Fallback Fonts by Script Type

Add custom fallback fonts for specific script types:

#### Cross-Platform
```csharp
using var fs = new FileStream("document.docx", FileMode.Open, FileAccess.Read);
using var wordDoc = new WordDocument(fs, FormatType.Automatic);
```

#### Windows-Specific
```csharp
WordDocument wordDoc = new WordDocument("document.docx", Syncfusion.DocIO.FormatType.Docx);
```

#### Common code for Cross-Platform and Windows-Specific
```csharp
wordDoc.FontSettings.FallbackFonts.Add(ScriptType.Arabic, "Arial, Times New Roman");
wordDoc.FontSettings.FallbackFonts.Add(ScriptType.Hebrew, "Arial, Courier New");
wordDoc.FontSettings.FallbackFonts.Add(ScriptType.Chinese, "DengXian, MingLiU");
wordDoc.FontSettings.FallbackFonts.Add(ScriptType.Japanese, "Yu Mincho, MS Mincho");
wordDoc.FontSettings.FallbackFonts.Add(ScriptType.Thai, "Tahoma, Microsoft Sans Serif");
wordDoc.FontSettings.FallbackFonts.Add(ScriptType.Korean, "Malgun Gothic, Batang");
```

#### Cross-Platform
```csharp
using var renderer = new DocIORenderer();
using var pdfDoc = renderer.ConvertToPDF(wordDoc);
using var ofs = new FileStream("output.pdf", FileMode.Create, FileAccess.Write);
pdfDoc.Save(ofs);
```

#### Windows-Specific
```csharp
using (DocToPDFConverter converter = new DocToPDFConverter())
{
   using (PdfDocument pdfDocument = converter.ConvertToPDF(wordDoc))
   {
      pdfDocument.Save("output.pdf");
   }
}
wordDoc.Close();
```

### Placeholders
- `"document.docx"` → Replace with `"{input-path}"`
- `"output.pdf"` → Replace with `"{output-path}"`
- `ScriptType.Arabic`, `ScriptType.Hebrew`, etc. → Replace with desired `ScriptType`
- Font names after script type → Replace with `"{font-names}"` (comma-separated)

### Fallback Fonts for Symbols and Emojis

#### Cross-Platform
```csharp
using var fs = new FileStream("document.docx", FileMode.Open, FileAccess.Read);
using var wordDoc = new WordDocument(fs, FormatType.Automatic);
```

#### Windows-Specific
```csharp
WordDocument wordDoc = new WordDocument("document.docx", Syncfusion.DocIO.FormatType.Docx);
```

#### Common code for Cross-Platform and Windows-Specific
```csharp
wordDoc.FontSettings.FallbackFonts.Add(ScriptType.Symbols, "Segoe UI Symbol, Arial Unicode MS, Wingdings");
wordDoc.FontSettings.FallbackFonts.Add(ScriptType.Mathematics, "Cambria Math, Noto Sans Math, Segoe UI Symbol");
wordDoc.FontSettings.FallbackFonts.Add(ScriptType.Emoji, "Segoe UI Emoji, Noto Color Emoji");
```

#### Cross-Platform
```csharp
using var renderer = new DocIORenderer();
using var pdfDoc = renderer.ConvertToPDF(wordDoc);
using var ofs = new FileStream("output.pdf", FileMode.Create, FileAccess.Write);
pdfDoc.Save(ofs);
```

#### Windows-Specific
```csharp
using (DocToPDFConverter converter = new DocToPDFConverter())
{
   using (PdfDocument pdfDocument = converter.ConvertToPDF(wordDoc))
   {
      pdfDocument.Save("output.pdf");
   }
}
wordDoc.Close();
```

### Placeholders
- `"document.docx"` → Replace with `"{input-path}"`
- `"output.pdf"` → Replace with `"{output-path}"`
- `ScriptType.Symbols`, `ScriptType.Mathematics`, etc. → Replace with desired `ScriptType`
- Font names → Replace with `"{font-names}"` (comma-separated)

### Fallback Fonts by Unicode Range

Define fallback fonts for specific Unicode character ranges:

#### Cross-Platform
```csharp
using var fs = new FileStream("document.docx", FileMode.Open, FileAccess.Read);
using var wordDoc = new WordDocument(fs, FormatType.Automatic);
```

#### Windows-Specific
```csharp
WordDocument wordDoc = new WordDocument("document.docx", Syncfusion.DocIO.FormatType.Docx);
```

#### Common code for Cross-Platform and Windows-Specific
```csharp
wordDoc.FontSettings.FallbackFonts.Add(new FallbackFont(0x0600, 0x06FF, "Arial"));
wordDoc.FontSettings.FallbackFonts.Add(new FallbackFont(0x0590, 0x05FF, "Times New Roman"));
wordDoc.FontSettings.FallbackFonts.Add(new FallbackFont(0x4E00, 0x9FFF, "DengXian"));
wordDoc.FontSettings.FallbackFonts.Add(new FallbackFont(0x3040, 0x309F, "MS Gothic"));
```

#### Cross-Platform
```csharp
using var renderer = new DocIORenderer();
using var pdfDoc = renderer.ConvertToPDF(wordDoc);
using var ofs = new FileStream("output.pdf", FileMode.Create, FileAccess.Write);
pdfDoc.Save(ofs);
```

#### Windows-Specific
```csharp
using (DocToPDFConverter converter = new DocToPDFConverter())
{
   using (PdfDocument pdfDocument = converter.ConvertToPDF(wordDoc))
   {
      pdfDocument.Save("output.pdf");
   }
}
wordDoc.Close();
```

### Placeholders
- `"document.docx"` → Replace with `"{input-path}"`
- `"output.pdf"` → Replace with `"{output-path}"`
- `0x0600`, `0x06FF` → Replace with `"{start-unicode}"`, `"{end-unicode}"`
- Font names → Replace with `"{font-name}"`

### Modify Existing Fallback Fonts

Customize default fallback fonts after initialization:

#### Cross-Platform
```csharp
using var fs = new FileStream("document.docx", FileMode.Open, FileAccess.Read);
using var wordDoc = new WordDocument(fs, FormatType.Automatic);
```

#### Windows-Specific
```csharp
WordDocument wordDoc = new WordDocument("document.docx", Syncfusion.DocIO.FormatType.Docx);
```

#### Common code for Cross-Platform and Windows-Specific
```csharp
wordDoc.FontSettings.FallbackFonts.InitializeDefault();

foreach (var fallbackFont in wordDoc.FontSettings.FallbackFonts)
{
    if (fallbackFont.ScriptType == ScriptType.Hebrew)
        fallbackFont.FontNames = "David";
    else if (fallbackFont.ScriptType == ScriptType.Thai)
        fallbackFont.FontNames = "Microsoft Sans Serif";
}
```

#### Cross-Platform
```csharp
using var renderer = new DocIORenderer();
using var pdfDoc = renderer.ConvertToPDF(wordDoc);
using var ofs = new FileStream("output.pdf", FileMode.Create, FileAccess.Write);
pdfDoc.Save(ofs);
```

#### Windows-Specific
```csharp
using (DocToPDFConverter converter = new DocToPDFConverter())
{
   using (PdfDocument pdfDocument = converter.ConvertToPDF(wordDoc))
   {
      pdfDocument.Save("output.pdf");
   }
}
wordDoc.Close();
```

### Placeholders
- `"document.docx"` → Replace with `"{input-path}"`
- `"output.pdf"` → Replace with `"{output-path}"`
- `ScriptType.Hebrew`, `ScriptType.Thai` → Replace with desired `ScriptType`
- Font names (`"David"`, `"Microsoft Sans Serif"`) → Replace with `"{font-name}"`

---
