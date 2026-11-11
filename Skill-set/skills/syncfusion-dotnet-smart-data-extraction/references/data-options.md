# DataExtractor Options Reference

Explanation of common `DataExtractor` properties and option classes used to control extraction behavior.

---

## ConfidenceThreshold
- Type: `double` (0.0 — 1.0)
- Default: `0.6` (library default)
- What: A property on `DataExtractor` that filters out detected objects (tables, forms, barcodes, etc.) whose detection score is below the threshold. Higher values favor precision; lower values favor recall.
Usage:
```csharp
var extractor = new DataExtractor();
extractor.ConfidenceThreshold = 0.7; // only include detections >= 0.7
```
---

## PageRange
- Type: `int[,]` (2D array)
- What: Property on `DataExtractor` that restricts processing to specific pages. Each row is a `[start, end]` pair (inclusive). A single-column row is treated as `[page, page]`.
- 1-based pages. `null` means "all pages." Negative/zero values are normalized to 1.
Usage:
```csharp
// Single page
extractor.PageRange = new int[,] { { 3, 3 } };
// Two ranges: pages 1–2 and 5
extractor.PageRange = new int[,] { { 1, 2 }, { 5, 5 } };
```

---

## Feature toggles
- `EnableTableDetection` (bool) — property on `DataExtractor`. When `true` the extractor will run table-detection and include table objects in outputs. Default: `true`.
- `EnableFormDetection` (bool) — property on `DataExtractor`. When `true` the extractor will run form recognition and include form fields in outputs. Default: `true`.

Usage:
```csharp
var extractor = new DataExtractor();
extractor.EnableTableDetection = true; // enable/disable table extraction
extractor.EnableFormDetection = false; // skip form recognition
```

---

## TableExtractionOptions
- Type: `TableExtractionOptions` (class)
- `DetectBorderlessTables` (`bool`) — enable detection of borderless table layouts (default: `false`).
- `PageRange` (`int[,]`) — pages to run table detection on (nullable; when `null` the extractor's `PageRange` or all pages are used).
- `ConfidenceThreshold` (`double`) — per-table threshold that overrides `DataExtractor.ConfidenceThreshold`.

Usage:

```csharp
extractor.TableExtractionOptions = new TableExtractionOptions
{
    DetectBorderlessTables = true,
    PageRange = new int[,] { { 1, 2 } },
    ConfidenceThreshold = 0.7
};
```

---

## FormRecognizeOptions
- Type: `FormRecognizeOptions` (class)
- `DetectCheckboxes` (`bool`) — detect checkbox controls (default: `true`).
- `DetectRadioButtons` (`bool`) — detect radio button controls (default: `true`).
- `DetectTextboxes` (`bool`) — detect text input fields (default: `true`).
- `DetectSignatures` (`bool`) — detect signature fields (default: `false`).
- `PageRange` (`int[,]`) — pages to run form recognition on (nullable).
- `ConfidenceThreshold` (`double`) — per-form threshold overriding `DataExtractor.ConfidenceThreshold`.

Usage:

```csharp
extractor.FormRecognizeOptions = new FormRecognizeOptions
{
    DetectCheckboxes = true,
    DetectRadioButtons = true,
    DetectTextboxes = true,
    DetectSignatures = false,
    PageRange = new int[,] { { 1, 2 } },
    ConfidenceThreshold = 0.6
};
```

## Configurable OCR settings

Usage: 

```csharp
using (FileStream stream = new FileStream(@"Data/input.pdf", FileMode.Open, FileAccess.Read))
{
    //Initialize the Data Extractor.
    DataExtractor extractor = new DataExtractor();
    //Initialize the OCR processor.
    OCRProcessor processor = new OCRProcessor();
    //Set OCR language.
    processor.Settings.Language = Languages.English;
    //Assign the configured OCR processor to the Data Extractor.
    extractor.OCRProcessor = processor;
    //Extract data and return as a loaded PDF document.
    PdfLoadedDocument pdf = extractor.ExtractDataAsPdfDocument(stream);
    
}
```

---
---

