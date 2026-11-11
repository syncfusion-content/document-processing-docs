# ChunkingOptions

## Properties

```csharp
public class ChunkingOptions
{
    public int MaxTokens { get; set; } = 512;
    public int OverlapTokens { get; set; } = 50;
    public bool IncludeMetadata { get; set; } = true;
    public bool IncludeCitation { get; set; } = true;
    public ITokenCounter TokenCounter { get; set; }
    public SourceChunkingOptions SourceOptions { get; set; }
}
```

| Property | Default | Description |
|----------|---------|-------------|
| `MaxTokens` | `512` | Maximum tokens allowed per generated chunk. Must be **> 0**. Must be **> OverlapTokens**. |
| `OverlapTokens` | `50` | Tokens shared between adjacent chunks from the same recursive split. Must be **≥ 0** and **< MaxTokens**. |
| `IncludeMetadata` | `true` | When true, each chunk gets `IChunkMetadata`. |
| `IncludeCitation` | `true` | When true, each chunk gets `IChunkCitation`. **Requires** `IncludeMetadata == true`. |
| `TokenCounter` | `null` | Custom counter; `null` uses the service default (`DefaultTokenCounter`). |
| `SourceOptions` | `null` | Format-specific options (`MarkdownChunkingOptions`, `WordChunkingOptions`, etc.). `null` uses format defaults (typically mode `Auto`). |

## Validation rules

Validation runs on a **clone** of the supplied options (or a new instance if `null`) before processing.

| Condition | Exception |
|-----------|-----------|
| `MaxTokens <= 0` | `ArgumentOutOfRangeException` (`MaxTokens must be greater than zero.`) |
| `OverlapTokens < 0` | `ArgumentOutOfRangeException` (`OverlapTokens cannot be negative.`) |
| `OverlapTokens >= MaxTokens` | `ArgumentException` (`OverlapTokens (n) must be less than MaxTokens (m).`) |
| `IncludeCitation && !IncludeMetadata` | `ArgumentException` (`IncludeCitation requires IncludeMetadata to be true, because citation output requires source document context.`) |

### Allowed edge cases

- `OverlapTokens == MaxTokens - 1` is valid (for example MaxTokens `100`, OverlapTokens `99`)
- `IncludeMetadata = false` and `IncludeCitation = false` is valid
- `IncludeMetadata = true` and `IncludeCitation = false` is valid
- `IncludeMetadata = true` and `IncludeCitation = true` is valid (default)

## Clone behavior

The service clones options so callers can reuse the same instance safely across calls. `SourceOptions` and `TokenCounter` references are copied onto the clone (same instance references).

## Format-specific options

Assign a concrete `SourceChunkingOptions` subclass matching the document type:

```csharp
SourceOptions = new WordChunkingOptions
{
    ChunkingMode = WordChunkingMode.Paragraph
};
```

Using options for the wrong format type is ignored or falls back depending on the format path; always match `SourceOptions` type to the file being chunked.

Base type:

```csharp
public class SourceChunkingOptions { }
```

Concrete types: `MarkdownChunkingOptions`, `WordChunkingOptions`, `PdfChunkingOptions`, `ExcelChunkingOptions`, `PowerPointChunkingOptions` — each with a `ChunkingMode` enum defaulting to `Auto`.

## Practical guidance

- **Embedding models with small context:** lower `MaxTokens` (for example 200–400) and keep modest overlap (10–50).
- **RAG continuity:** keep some `OverlapTokens` so adjacent chunks share context after recursive splits.
- **Indexing cost:** set `IncludeCitation = false` only if source locations are not needed; if metadata is disabled, citation must also be disabled.
- **Token accuracy:** plug a model-specific `ITokenCounter` when chunk boundaries must match a particular tokenizer.
