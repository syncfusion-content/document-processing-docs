# Supported Formats and Routing

Format detection uses the **file extension** of the path (path API) or **`sourceName`** (stream API). Content sniffing is not used for routing.

## Supported extensions

| Format | Extensions |
|--------|------------|
| Word | `.doc`, `.docx` |
| Markdown | `.md`, `.markdown` |
| PDF | `.pdf` |
| Excel | `.xlsx`, `.xls`, `.xlsm`, `.xlsb` |
| PowerPoint | `.ppt`, `.pptx`, `.pptm`, `.potx` |

Comparisons are case-insensitive.

## Path API routing

```csharp
IChunkingResult result = service.Chunk(@"C:\docs\manual.docx", options);
```

- Extension is taken from `filePath`.
- Unsupported extension → **`NotSupportedException`** with message describing the unsupported extension.

## Stream API routing

```csharp
IChunkingResult result = service.Chunk(stream, sourceName: "manual.docx", options);
```

- Extension is taken from `sourceName` (for example `"manual.docx"` or `"invoice.pdf"`).
- **`sourceName` must not be null or whitespace** (`ArgumentNullException` / `ArgumentException`).
- Unsupported extension → **`NotSupportedException`** (`The document extension '{extension}' is not supported.`).
- Seekable streams are reset to position **0** before format handlers read them.

### Critical gotcha — sourceName without extension

```csharp
// BAD — cannot route format
service.Chunk(stream, "report");

// GOOD
service.Chunk(stream, "report.pdf");
```

Metadata `FileName` uses `sourceName`; `FileType` is the extension without the leading dot (lowercased). If the extension is empty, metadata construction may fall back to `"txt"`.

## Unsupported types

Examples of unsupported extensions: `.txt`, `.csv`, `.rtf`, `.html`, `.xyz`, and any other type not listed above.

Do not pass plain-text streams unless wrapped as Markdown (`.md`) when that is appropriate for the content.

## Choosing package and dependencies

Document processing packages (`DocIO`, `Pdf`, `XlsIO`, `Presentation`, `Markdown`) are pulled in as dependencies of `Syncfusion.DocumentChunking.Net.Core` / `.NET`. Ensure license coverage for those products as required by the Syncfusion agreement.
