# Extract Data — DataExtractor

Quick, copy-pasteable examples showing the primary `DataExtractor` usage patterns.

---
### Example namespace and usings

```csharp
using System.IO;
using System.Text;
using Syncfusion.DocIO;
using Syncfusion.SmartDataExtractor;
using Syncfusion.SmartTableExtractor;
using Syncfusion.SmartFormRecognizer;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Parsing;
```

### Package guidance
For package selection, see `nuget-packages.md` and review the **ExtractData** section for the recommended packages and versions.

## 1. Configure `DataExtractor`

```csharp
// Create and configure the extractor
var extractor = new DataExtractor();
extractor.EnableFormDetection = true; // detect forms
extractor.EnableTableDetection = true; // detect tables
extractor.ConfidenceThreshold = 0.6; // drop low-confidence results
// Optional: restrict pages (1-based ranges)
// extractor.PageRange = new int[,] { { 1, 3 } };
```

## 2. Quick extract — sync (one-line)

```csharp
// After configuring `extractor` (above), perform a single-file extraction:
using var fs = new FileStream("Data/Input.pdf", FileMode.Open, FileAccess.Read);
string json = extractor.ExtractDataAsJson(fs);
File.WriteAllText("output.json", json, Encoding.UTF8);
```

## 3. Configure `TableExtractionOptions`

```csharp
var tableOptions = new TableExtractionOptions();
// Detect tables even when borders are absent
tableOptions.DetectBorderlessTables = true;
// Optional: multiple page ranges
tableOptions.PageRange = new int[,] { { 1, 1 }, { 3, 7 } };
tableOptions.ConfidenceThreshold = 0.6;
extractor.TableExtractionOptions = tableOptions;
```

## 4. Configure `FormRecognizeOptions`

```csharp
var formOptions = new FormRecognizeOptions();
formOptions.ConfidenceThreshold = 0.6;
formOptions.DetectSignatures = true;
formOptions.DetectTextboxes = true;
formOptions.DetectCheckboxes = true;
formOptions.DetectRadioButtons = true;
extractor.FormRecognizeOptions = formOptions;
```

## 5. Process multiple files — synchronous JSON output

```csharp
var inputFolderPath = @"D:\Data\Files";
var imageFiles = Directory.GetFiles(inputFolderPath).ToList();

foreach (var filename in imageFiles)
{
	Console.WriteLine("Processing file: " + filename);
	using var stream = new FileStream(filename, FileMode.Open, FileAccess.Read);
	string data = extractor.ExtractDataAsJson(stream);
	var outputName = Path.GetFileNameWithoutExtension(filename);
	string outputPath = Path.Combine("OutputJson", outputName + ".json");
	File.WriteAllText(outputPath, data, Encoding.UTF8);
}
```
## 6. Process multiple files — synchronous Markdown output

```csharp
var inputFolderPath = @"D:\Data\Files";
var imageFiles = Directory.GetFiles(inputFolderPath).ToList();

foreach (var filename in imageFiles)
{
	Console.WriteLine("Processing file: " + filename);
	using var stream = new FileStream(filename, FileMode.Open, FileAccess.Read);
	string data = extractor.ExtractDataAsMarkdown(stream);
	var outputName = Path.GetFileNameWithoutExtension(filename);
	string outputPath = Path.Combine("Output_", outputName + ".md");
	File.WriteAllText(outputPath, data, Encoding.UTF8);
}
```

## 7. Async JSON extraction (with timeout)

```csharp
var cts = new CancellationTokenSource(TimeSpan.FromSeconds(20));
using var stream = new FileStream("Data/Input.pdf", FileMode.Open, FileAccess.Read);
string asyncJson = await extractor.ExtractDataAsJsonAsync(stream, cts.Token);
File.WriteAllText("output_async.json", asyncJson, Encoding.UTF8);
```

## 8. Async Markdown extraction (with timeout)

```csharp
var cts = new CancellationTokenSource(TimeSpan.FromSeconds(20));
using var stream = new FileStream("Data/Input.pdf", FileMode.Open, FileAccess.Read);
string asyncMarkdown = await extractor.ExtractDataAsMarkdownAsync(stream, cts.Token);
File.WriteAllText("output_async.md", asyncMarkdown, Encoding.UTF8);
```

## 9. Extract `MarkdownDocument` (sync)

```csharp
// sync
using var docStream = new FileStream("Data/Input.pdf", FileMode.Open, FileAccess.Read);
MarkdownDocument markdown = dataExtractor.ExtractDataAsMarkdownDocument(docStream);
markdown.Save("output.md");
```

## 10. Extract annotated PDF stream (sync & async)

```csharp
// sync
using var inFs = new FileStream("Data/Input.pdf", FileMode.Open, FileAccess.Read);
using Stream annotated = extractor.ExtractDataAsPdfStream(inFs);
using var outFs = new FileStream("annotated.pdf", FileMode.Create, FileAccess.Write);
annotated.CopyTo(outFs);

// async
using var inFs2 = new FileStream("Data/Input.pdf", FileMode.Open, FileAccess.Read);
using var cts2 = new CancellationTokenSource(TimeSpan.FromSeconds(20));
using Stream annotatedAsync = await extractor.ExtractDataAsPdfStreamAsync(inFs2, cts2.Token);
using var outFs2 = new FileStream("annotated_async.pdf", FileMode.Create, FileAccess.Write);
annotatedAsync.CopyTo(outFs2);
```

## 11. Extract `PdfLoadedDocument` (sync & async)

```csharp
// sync
using var docStream = new FileStream("Data/Input.pdf", FileMode.Open, FileAccess.Read);
PdfLoadedDocument pdfDoc = extractor.ExtractDataAsPdfDocument(docStream);
pdfDoc.Save("annotated_doc.pdf");
pdfDoc.Close(true);

// async
using var docStream2 = new FileStream("Data/Input.pdf", FileMode.Open, FileAccess.Read);
using var cts3 = new CancellationTokenSource(TimeSpan.FromSeconds(20));
PdfLoadedDocument pdfDocAsync = await extractor.ExtractDataAsPdfDocumentAsync(docStream2, cts3.Token);
pdfDocAsync.Save("annotated_doc_async.pdf");
pdfDocAsync.Close(true);
```

## 12. Convert PDF to Word Document

```csharp
// sync - Extract as Word Document with table and form detection
using var docStream = new FileStream("Data/Input.pdf", FileMode.Open, FileAccess.Read);
WordDocument document = extractor.ExtractDataAsWordDocument(docStream);
using MemoryStream stream = new MemoryStream();
document.Save(stream, FormatType.Docx);
document.Close();
```

## 13. Convert PDF to HTML

```csharp
// sync - Extract document content as formatted HTML string
using var docStream = new FileStream("Data/Input.pdf", FileMode.Open, FileAccess.Read);
string htmlContent = extractor.ExtractDataAsHtml(docStream);
File.WriteAllText("output.html", htmlContent, Encoding.UTF8);
```
## Public API reference

- Properties (on `DataExtractor`):
	- `bool EnableTableDetection` — enable/disable table detection (default: true)
	- `bool EnableFormDetection` — enable/disable form recognition (default: true)
	- `double ConfidenceThreshold` — global confidence filter (0.0–1.0, default: 0.6)
	- `int[,] PageRange` — optional 1-based page ranges to restrict processing
	- `TableExtractionOptions TableExtractionOptions` — table-specific options
	- `FormRecognizeOptions FormRecognizeOptions` — form recognition options
	- `OCRProcessor OCRProcessor` — Configurable OCR settings
	- `SaveOptions SaveOptions` — Customize Image saving

- Synchronous methods:
	- `string ExtractDataAsJson(Stream input)` — extract structured JSON
	- `string ExtractDataAsMarkdown(Stream input)` — extract structured Markdown;
	- `Stream ExtractDataAsPdfStream(Stream input)` — annotated PDF bytes (caller disposes)
	- `PdfLoadedDocument ExtractDataAsPdfDocument(Stream input)` — annotated PDF document
	- `MarkdownDocument ExtractDataAsMarkdownDocument(Stream input)` — extract structured Markdown document
	- `WordDocument ExtractDataAsWordDocument(Stream input)` — convert extracted document content to a Word document
	- `string ExtractDataAsHtml(Stream input)` — convert extracted document content to HTML string

- Asynchronous methods:
	- `Task<string> ExtractDataAsJsonAsync(Stream input, CancellationToken cancellationToken = default)`
	- `Task<string> ExtractDataAsMarkdownAsync(Stream input, CancellationToken cancellationToken = default)`
	- `Task<Stream> ExtractDataAsPdfStreamAsync(Stream input, CancellationToken cancellationToken = default)`
	- `Task<PdfLoadedDocument> ExtractDataAsPdfDocumentAsync(Stream input, CancellationToken cancellationToken = default)`

## Extraction result model

- `ExtractionResult` — root result object containing `IReadOnlyList<ExtractedField> Fields` and `IReadOnlyList<ExtractedTable> Tables`.
- `ExtractedField` — `{ string Name; string Value; double Confidence; int Page; Rectangle BoundingBox; }`
- `ExtractedTable` — includes `Rows`, `Columns`, `HeaderRowCount`, `BoundingBox`, and per-cell `Confidence` metadata.