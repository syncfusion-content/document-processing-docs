# API Reference

## Contents

- [IChunkingService](#ichunkingservice)
- [ChunkingService](#chunkingservice)
- [IChunkingResult](#ichunkingresult)
- [IChunk](#ichunk)
- [IChunkMetadata](#ichunkmetadata)
- [IChunkCitation](#ichunkcitation)
- [ITokenCounter](#itokencounter)
- [DefaultTokenCounter](#defaulttokencounter)

Namespace: `Syncfusion.DocumentChunking` (models may also use `Syncfusion.DocumentChunking.Models` as needed by public types).

## IChunkingService

Primary contract implemented by `ChunkingService`.

### Chunk (file path)

```csharp
IChunkingResult Chunk(
    string filePath,
    ChunkingOptions options = null);
```

- `filePath`: absolute or relative path of the document
- `options`: chunking options, or `null` for defaults

**Throws**

- `ArgumentNullException` / `ArgumentException` — null or whitespace path
- `FileNotFoundException` — file does not exist (when applicable)
- `ArgumentOutOfRangeException` / `ArgumentException` — invalid options (via validation)
- `NotSupportedException` — unsupported file extension (implementation)
- `InvalidOperationException` — format/processing failures as documented on interface
- `OperationCanceledException` — when cancellation is requested (async paths)

### Chunk (stream)

```csharp
IChunkingResult Chunk(
    Stream stream,
    string sourceName,
    ChunkingOptions options = null);
```

- `stream`: document bytes (must not be null)
- `sourceName`: **must include file extension** used for format detection and metadata (`FileName`)
- `options`: optional

**Throws**

- `ArgumentNullException` — null `stream` or `sourceName`
- `ArgumentException` — empty/whitespace `sourceName`, or invalid options
- Unsupported extension: implementation throws `NotSupportedException` with message like `The document extension '{extension}' is not supported.`

### ChunkAsync

```csharp
Task<IChunkingResult> ChunkAsync(
    string filePath,
    ChunkingOptions options = null,
    CancellationToken cancellationToken = default);

Task<IChunkingResult> ChunkAsync(
    Stream stream,
    string sourceName,
    ChunkingOptions options = null,
    CancellationToken cancellationToken = default);
```

Async overloads honor `cancellationToken` (`ThrowIfCancellationRequested` / `OperationCanceledException`).

## ChunkingService

```csharp
public class ChunkingService : IChunkingService
{
    public ChunkingService();
    // implements Chunk / ChunkAsync as above
}
```

Construct with the parameterless constructor. Optional custom token counting is supplied per call via `ChunkingOptions.TokenCounter`.

## IChunkingResult

```csharp
public interface IChunkingResult
{
    IReadOnlyList<IChunk> Chunks { get; }
}
```

## IChunk

```csharp
public interface IChunk
{
    string ChunkId { get; }      // deterministic id for same content + config
    int ChunkIndex { get; }      // zero-based position in result
    string Content { get; }      // textual content
    IChunkMetadata Metadata { get; }   // null if IncludeMetadata is false
    IChunkCitation Citation { get; }   // null if IncludeCitation is false
}
```

## IChunkMetadata

```csharp
public interface IChunkMetadata
{
    string FileName { get; }
    string FileType { get; }           // extension without dot, lowercased
    string SourceDocumentId { get; }   // deterministic document id
    int TokenCount { get; }
    int CharacterCount { get; }
    IReadOnlyDictionary<string, object> Attributes { get; }
}
```

`FileType` is derived from the extension of the path or `sourceName` (empty extension falls back to `"txt"` in metadata construction).

## IChunkCitation

```csharp
public interface IChunkCitation
{
    string DisplayText { get; }
    IReadOnlyDictionary<string, object> LocationDetails { get; }
}
```

Location keys and display patterns are covered in the metadata-and-citations reference.

## ITokenCounter

```csharp
public interface ITokenCounter
{
    int CountTokens(string text);
}
```

- Must return a non-negative count
- `null` text may throw `ArgumentNullException` depending on implementation

## DefaultTokenCounter

```csharp
public class DefaultTokenCounter : ITokenCounter
```

Heuristic estimator (regex split + adjustments). Not a model-specific tokenizer. For embedding/LLM-accurate budgets, implement `ITokenCounter` with the target model tokenizer and set `ChunkingOptions.TokenCounter`.

Returns `0` for null/empty/whitespace input.

## ChunkingOptions and SourceOptions

`ChunkingOptions` holds token limits, metadata/citation flags, optional `TokenCounter`, and format-specific `SourceOptions`. See the chunking-options and format-modes references for property defaults, validation, and mode enums.
