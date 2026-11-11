# Format-Specific Chunking Modes

Each format exposes a `*ChunkingOptions` type with a `ChunkingMode` enum. Default mode for every format is **`Auto`**.

Assign the matching options object on `ChunkingOptions.SourceOptions`.

## Markdown

```csharp
public class MarkdownChunkingOptions : SourceChunkingOptions
{
    public MarkdownChunkingMode ChunkingMode { get; set; } = MarkdownChunkingMode.Auto;
}

public enum MarkdownChunkingMode
{
    Auto,       // Selects mode from document structure
    Heading,    // Chunk at heading boundaries
    Paragraph,  // Chunk at paragraph boundaries
    Table       // Chunk at table boundaries
}
```

Example:

```csharp
SourceOptions = new MarkdownChunkingOptions
{
    ChunkingMode = MarkdownChunkingMode.Heading
};
```

## Word

```csharp
public class WordChunkingOptions : SourceChunkingOptions
{
    public WordChunkingMode ChunkingMode { get; set; } = WordChunkingMode.Auto;
}

public enum WordChunkingMode
{
    Auto,       // Most appropriate Word structure
    Paragraph,  // Paragraph boundaries
    Table,      // Table boundaries
    Section     // Section boundaries
}
```

## PDF

```csharp
public class PdfChunkingOptions : SourceChunkingOptions
{
    public PdfChunkingMode ChunkingMode { get; set; } = PdfChunkingMode.Auto;
}

public enum PdfChunkingMode
{
    Auto,       // Structure-based selection
    Page,       // Page boundaries
    Paragraph,  // Paragraph boundaries
    Table       // Table boundaries
}
```

## Excel

```csharp
public class ExcelChunkingOptions : SourceChunkingOptions
{
    public ExcelChunkingMode ChunkingMode { get; set; } = ExcelChunkingMode.Auto;
}

public enum ExcelChunkingMode
{
    Auto,        // Structure-based selection
    Worksheet,   // Worksheet boundaries
    Table        // Excel table boundaries
}
```

## PowerPoint

```csharp
public class PowerPointChunkingOptions : SourceChunkingOptions
{
    public PowerPointChunkingMode ChunkingMode { get; set; } = PowerPointChunkingMode.Auto;
}

public enum PowerPointChunkingMode
{
    Auto,    // Structure-based selection
    Slide,   // Slide boundaries
    Notes,   // Speaker-note boundaries
    Table    // Table boundaries
}
```

## Behavior notes

- **Auto** chooses boundaries from document structure; prefer Auto unless a fixed grain is required.
- Preferred-mode chunking still **recursively splits** units that exceed `MaxTokens`.
- Meaningful structure (headings, tables, slides, sheets) is preserved when the chosen mode applies.
- If `SourceOptions` is `null`, format handlers use default options (`ChunkingMode = Auto`).

## Choosing a mode

| Goal | Suggested mode |
|------|----------------|
| General RAG indexing | `Auto` |
| PDF page-level retrieval | `PdfChunkingMode.Page` |
| Word paragraph citations | `WordChunkingMode.Paragraph` |
| Excel sheet separation | `ExcelChunkingMode.Worksheet` |
| Deck slide grounding | `PowerPointChunkingMode.Slide` |
| Speaker-note corpora | `PowerPointChunkingMode.Notes` |
| Markdown outline chunks | `MarkdownChunkingMode.Heading` |
