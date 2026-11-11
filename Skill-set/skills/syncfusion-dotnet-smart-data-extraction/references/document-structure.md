# Document Structure — Smart Extractor Setup

Overall setup snippet for `DataExtractor` (enable features, page ranges and options).

```csharp
// Create an instance of the DataExtractor class
DataExtractor smartDataExtractor = new DataExtractor();
smartDataExtractor.EnableFormDetection = true;
smartDataExtractor.EnableTableDetection = true;
smartDataExtractor.PageRange = new int[,] { { 1, 3 } };
smartDataExtractor.ConfidenceThreshold = 0.6;

// Set the options for table extraction
// Set `TableExtractionOptions` information here
// smartDataExtractor.TableExtractionOptions = new TableExtractionOptions { /* ... */ };

// Set the options for form recognition
// Set `FormRecognizeOptions` information here
// smartDataExtractor.FormRecognizeOptions = new FormRecognizeOptions { /* ... */ };
```

## Load and reuse existing PDF stream
```csharp
// Create an in-memory copy if you will pass the stream multiple times
using var disk = new FileStream("Data/Input.pdf", FileMode.Open);

# SmartDataExtractor — Quick Reference

Common tasks and concise code examples for using `DataExtractor` to extract document structure, tables, barcodes and forms.

---

## Load input PDF or image stream
```csharp
using var input = new FileStream("Data/Input.pdf", FileMode.Open, FileAccess.Read);
```

## Initialize and configure `DataExtractor`
```csharp
var extractor = new DataExtractor();
// Enable/disable pipeline stages
extractor.EnableTableDetection = true;
extractor.EnableFormDetection = true;
// Global confidence threshold (0.0 - 1.0)
extractor.ConfidenceThreshold = 0.6;
// Optional: restrict pages (1-based ranges)
// extractor.PageRange = new int[,] { { 1, 2 }, { 5, 5 } };

// Table-specific options
// Set `TableExtractionOptions` information here
// extractor.TableExtractionOptions = new TableExtractionOptions { /* ... */ };

// Form recognition options
// Set `FormRecognizeOptions` information here
// extractor.FormRecognizeOptions = new FormRecognizeOptions { /* ... */ };
```

## Extract structure as JSON (synchronous)
```csharp
string json = extractor.ExtractDataAsJson(input);
File.WriteAllText("extracted.json", json, Encoding.UTF8);
```

## Extract structure as Markdown (synchronous)
```csharp
string data = extractor.ExtractDataAsMarkdown(input);
File.WriteAllText("output.md", data, Encoding.UTF8);
```

## Extract annotated PDF stream (synchronous)
```csharp
using var pdfOut = extractor.ExtractDataAsPdfStream(input);
using var outFs = new FileStream("annotated.pdf", FileMode.Create, FileAccess.Write);
pdfOut.CopyTo(outFs);
```

## Extract as a `PdfLoadedDocument`
```csharp
PdfLoadedDocument doc = extractor.ExtractDataAsPdfDocument(input);
doc.Save("annotated_doc.pdf");
doc.Close(true);
```

## Extract as a `MarkdownDocument`

```csharp
using var docStream = new FileStream("Data/Input.pdf", FileMode.Open, FileAccess.Read);
MarkdownDocument markdown = dataExtractor.ExtractDataAsMarkdownDocument(docStream);
markdown.Save("output.md");
```

## Async equivalents
```csharp
string json = await extractor.ExtractDataAsJsonAsync(input, cancellationToken);
using Stream pdf = await extractor.ExtractDataAsPdfStreamAsync(input, cancellationToken);
PdfLoadedDocument doc = await extractor.ExtractDataAsPdfDocumentAsync(input, cancellationToken);
string data = await extractor.ExtractDataAsMarkdownAsync(input, cancellationToken);
```