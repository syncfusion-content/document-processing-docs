# Code Examples

## Contents

- [Markdown path with Auto mode](#1-markdown-path-with-auto-mode-package-readme-sample)
- [Defaults only](#2-defaults-only)
- [Stream with explicit source name](#3-stream-with-explicit-source-name)
- [Async with cancellation](#4-async-with-cancellation)
- [PDF by page](#5-pdf-by-page)
- [Word paragraphs](#6-word-paragraphs)
- [Excel worksheets](#7-excel-worksheets)
- [PowerPoint slides and notes](#8-powerpoint-slides-and-notes)
- [Metadata without citation](#9-metadata-without-citation)
- [Custom token counter](#10-custom-token-counter)
- [Enumerate chunks for indexing](#11-enumerate-chunks-for-indexing)
- [Invalid options](#12-invalid-options-will-throw)

All samples use namespace `Syncfusion.DocumentChunking`.

## 1. Markdown path with Auto mode (package README sample)

```csharp
using Syncfusion.DocumentChunking;

ChunkingService chunkingService = new ChunkingService();

IChunkingResult result = chunkingService.Chunk(
    "../../../Data/TextMarkdown.md",
    new ChunkingOptions
    {
        MaxTokens = 50,
        OverlapTokens = 0,
        IncludeMetadata = true,
        IncludeCitation = true,
        SourceOptions = new MarkdownChunkingOptions
        {
            ChunkingMode = MarkdownChunkingMode.Auto
        }
    });
```

## 2. Defaults only

```csharp
ChunkingService service = new ChunkingService();
IChunkingResult result = service.Chunk(@"C:\data\policy.docx");
// MaxTokens 512, OverlapTokens 50, metadata + citation on, Auto mode
```

## 3. Stream with explicit source name

```csharp
using FileStream stream = File.OpenRead(path);
IChunkingResult result = service.Chunk(
    stream,
    sourceName: Path.GetFileName(path),
    options: new ChunkingOptions
    {
        MaxTokens = 256,
        OverlapTokens = 32
    });
```

## 4. Async with cancellation

```csharp
using var cts = new CancellationTokenSource(TimeSpan.FromMinutes(2));

IChunkingResult result = await service.ChunkAsync(
    filePath: path,
    options: new ChunkingOptions { MaxTokens = 400 },
    cancellationToken: cts.Token);
```

## 5. PDF by page

```csharp
IChunkingResult result = service.Chunk(
    "report.pdf",
    new ChunkingOptions
    {
        MaxTokens = 512,
        SourceOptions = new PdfChunkingOptions
        {
            ChunkingMode = PdfChunkingMode.Page
        }
    });
```

## 6. Word paragraphs

```csharp
IChunkingResult result = service.Chunk(
    "spec.docx",
    new ChunkingOptions
    {
        SourceOptions = new WordChunkingOptions
        {
            ChunkingMode = WordChunkingMode.Paragraph
        }
    });
```

## 7. Excel worksheets

```csharp
IChunkingResult result = service.Chunk(
    "workbook.xlsx",
    new ChunkingOptions
    {
        SourceOptions = new ExcelChunkingOptions
        {
            ChunkingMode = ExcelChunkingMode.Worksheet
        }
    });
```

## 8. PowerPoint slides and notes

```csharp
// Slides
IChunkingResult slides = service.Chunk(
    "deck.pptx",
    new ChunkingOptions
    {
        SourceOptions = new PowerPointChunkingOptions
        {
            ChunkingMode = PowerPointChunkingMode.Slide
        }
    });

// Speaker notes
IChunkingResult notes = service.Chunk(
    "deck.pptx",
    new ChunkingOptions
    {
        SourceOptions = new PowerPointChunkingOptions
        {
            ChunkingMode = PowerPointChunkingMode.Notes
        }
    });
```

## 9. Metadata without citation

```csharp
var options = new ChunkingOptions
{
    IncludeMetadata = true,
    IncludeCitation = false
};
```

## 10. Custom token counter

```csharp
public sealed class MyTokenizer : ITokenCounter
{
    public int CountTokens(string text)
    {
        if (string.IsNullOrEmpty(text)) return 0;
        // Replace with model-specific tokenization
        return text.Split((char[])null, StringSplitOptions.RemoveEmptyEntries).Length;
    }
}

var options = new ChunkingOptions
{
    MaxTokens = 300,
    OverlapTokens = 30,
    TokenCounter = new MyTokenizer()
};
```

## 11. Enumerate chunks for indexing

```csharp
IChunkingResult result = service.Chunk(path, options);

foreach (IChunk chunk in result.Chunks)
{
    string id = chunk.ChunkId;
    string text = chunk.Content;
    string docId = chunk.Metadata?.SourceDocumentId;
    string cite = chunk.Citation?.DisplayText;

    // Upsert into vector store: id, text, docId, cite, chunk.ChunkIndex
}
```

## 12. Invalid options (will throw)

```csharp
// Throws ArgumentException — citation requires metadata
new ChunkingOptions
{
    IncludeMetadata = false,
    IncludeCitation = true
};

// Throws ArgumentOutOfRangeException when validated inside Chunk
new ChunkingOptions { MaxTokens = 0 };

// Throws ArgumentException — overlap must be < max
new ChunkingOptions { MaxTokens = 100, OverlapTokens = 100 };
```

Pass invalid options into `Chunk` / `ChunkAsync`; the service validates a clone before processing.
