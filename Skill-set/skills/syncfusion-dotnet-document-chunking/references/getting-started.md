# Getting Started

## Install

### .NET Core / modern .NET

NuGet Package Manager:

```powershell
Install-Package Syncfusion.DocumentChunking.Net.Core
```

.NET CLI:

```bash
dotnet add package Syncfusion.DocumentChunking.Net.Core
```

### .NET Document Processing package

```powershell
Install-Package Syncfusion.DocumentChunking.NET
```

```bash
dotnet add package Syncfusion.DocumentChunking.NET
```

Register a Syncfusion license key in the host application according to Syncfusion licensing guidance for the product line before shipping.

Target frameworks for `Syncfusion.DocumentChunking.Net.Core`: `net10.0`, `net9.0`, `net8.0`, `.NETStandard2.0`.

## Minimal example — file path

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

foreach (IChunk chunk in result.Chunks)
{
    Console.WriteLine($"[{chunk.ChunkIndex}] {chunk.ChunkId}");
    Console.WriteLine(chunk.Content);
    if (chunk.Citation != null)
        Console.WriteLine(chunk.Citation.DisplayText);
}
```

## Stream input

Format is detected from the **source name extension**, not from stream bytes. Always pass a name that includes a supported extension (for example `"report.docx"`).

```csharp
using var stream = File.OpenRead(path);
IChunkingResult result = chunkingService.Chunk(
    stream,
    sourceName: Path.GetFileName(path),
    options: null); // null → default ChunkingOptions
```

Seekable streams are reset to position `0` before reading when the service can seek.

## Async

```csharp
IChunkingResult result = await chunkingService.ChunkAsync(
    filePath,
    options,
    cancellationToken);
```

```csharp
IChunkingResult result = await chunkingService.ChunkAsync(
    stream,
    sourceName,
    options,
    cancellationToken);
```

## Defaults when options are null

If `options` is `null`, the service clones a new `ChunkingOptions` with:

| Property | Default |
|----------|---------|
| `MaxTokens` | `512` |
| `OverlapTokens` | `50` |
| `IncludeMetadata` | `true` |
| `IncludeCitation` | `true` |
| `TokenCounter` | service default (`DefaultTokenCounter`) |
| `SourceOptions` | format defaults (mode `Auto`) |

Options are always validated before chunking.

## Namespace and entry point

```csharp
using Syncfusion.DocumentChunking;

ChunkingService service = new ChunkingService();
IChunkingResult result = service.Chunk("path/to/document.md");
```

- **Namespace:** `Syncfusion.DocumentChunking`
- **Service:** `ChunkingService` : `IChunkingService`
- **Options:** `ChunkingOptions` with optional format-specific `SourceOptions`
