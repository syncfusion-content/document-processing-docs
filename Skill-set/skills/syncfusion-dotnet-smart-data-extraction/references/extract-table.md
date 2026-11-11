# Extract Table — TableExtractor

Examples for extracting table data using `TableExtractor` and `TableExtractionOptions`.
### Example namespace and usings

```csharp
using System.IO;
using System.Text;
using Syncfusion.SmartTableExtractor;
```
---
### Package guidance
For package selection, see `nuget-packages.md` and review the **ExtractTable** section for the recommended packages and versions.

## 1. Configure `TableExtractionOptions`

```csharp
// Set the options for table extraction
var extractionOptions = new TableExtractionOptions();
extractionOptions.DetectBorderlessTables = true;
// Single page range example (1-based)
extractionOptions.PageRange = new int[,] { { 1, 1 } };
extractionOptions.ConfidenceThreshold = 0.6;
```

## 2. Create and configure `TableExtractor`

```csharp
// Create an instance of the TableExtractor class
var tableExtractor = new TableExtractor();
tableExtractor.TableExtractionOptions = extractionOptions;
```

## 3. Quick extract — synchronous JSON

```csharp
string inputPath = Path.GetFullPath(Path.Combine(AppDomain.CurrentDomain.BaseDirectory, @"..\..\..\Data\SampleInput.pdf"));
using (FileStream stream = new FileStream(inputPath, FileMode.Open, FileAccess.Read))
{
    // extract table as json
    string data = tableExtractor.ExtractTableAsJson(stream);
    var outputName = Path.GetFileNameWithoutExtension(inputPath);
    string outputPath = Path.GetFullPath(Path.Combine(AppDomain.CurrentDomain.BaseDirectory, @"..\..\..\OutputJson", $"{outputName}.json"));
    File.WriteAllText(outputPath, data, Encoding.UTF8);
}
```

## 4. Quick extract — synchronous MarkDown

```csharp
string inputPath = Path.GetFullPath(Path.Combine(AppDomain.CurrentDomain.BaseDirectory, @"..\..\..\Data\SampleInput.pdf"));
using (FileStream stream = new FileStream(inputPath, FileMode.Open, FileAccess.Read))
{
    // extract table as Markdown
    string data = tableExtractor.ExtractTableAsMarkdown(stream);
    var outputName = Path.GetFileNameWithoutExtension(inputPath);
    string outputPath = Path.GetFullPath(Path.Combine(AppDomain.CurrentDomain.BaseDirectory, @"..\..\..\Output_", $"{outputName}.md"));
    File.WriteAllText(outputPath, data, Encoding.UTF8);
}
```

## 5. Async extract JSON (with timeout)

```csharp
using (FileStream stream = new FileStream(inputPath, FileMode.Open, FileAccess.Read))
{
    var cts = new CancellationTokenSource(TimeSpan.FromSeconds(2));
    // extract table as json (async)
    string data = await tableExtractor.ExtractTableAsJsonAsync(stream, cts.Token);
    var outputName = Path.GetFileNameWithoutExtension(inputPath);
    string outputPath = Path.GetFullPath(Path.Combine(AppDomain.CurrentDomain.BaseDirectory, @"..\..\..\OutputJson", $"{outputName}.json"));
    File.WriteAllText(outputPath, data, Encoding.UTF8);
}
```

## 6. Async extract Markdown (with timeout)

```csharp
using (FileStream stream = new FileStream(inputPath, FileMode.Open, FileAccess.Read))
{
    var cts = new CancellationTokenSource(TimeSpan.FromSeconds(2));
    // extract table as Markdown (async)
    string data = await tableExtractor.ExtractTableAsMarkdownAsync(stream, cts.Token);
    var outputName = Path.GetFileNameWithoutExtension(inputPath);
    string outputPath = Path.GetFullPath(Path.Combine(AppDomain.CurrentDomain.BaseDirectory, @"..\..\..\Output_", $"{outputName}.md"));
    File.WriteAllText(outputPath, data, Encoding.UTF8);
}
```

## Public API reference

- Property:
    - `TableExtractionOptions TableExtractionOptions` — get/set table extraction options (page ranges, confidence, borderless detection)

- Methods (public):
    - `string ExtractTableAsJson(Stream input)` — synchronous extraction to JSON
    - `string ExtractTableAsMarkdown(Stream input)` — synchronous extraction to Markdown
    - `Task<string> ExtractTableAsJsonAsync(Stream input, CancellationToken cancellationToken = default)` — JSON async variant
    - `Task<string> ExtractTableAsMarkdownAsync(Stream input, CancellationToken cancellationToken = default)` — Markdown async variant

## Common table options

- `HeaderRowCount` — number of header rows to detect and expose in the result.
- `MinRows` / `MinColumns` — minimum table dimensions to accept a detection.
- `MergeAdjacentCells` — merge small adjacent cells to form logical cells when visual lines are absent.
- `CellPadding` — tolerance when determining cell boundaries (points/px).
- `DetectTableBorders` — prefer border-based detection instead of whitespace heuristics.
