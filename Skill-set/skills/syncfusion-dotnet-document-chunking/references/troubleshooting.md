# Errors and Troubleshooting

## Exception catalog

| Exception | Typical cause |
|-----------|----------------|
| `ArgumentNullException` | Null `filePath`, `stream`, or `sourceName` |
| `ArgumentException` | Whitespace path/`sourceName`; `OverlapTokens >= MaxTokens`; `IncludeCitation` without `IncludeMetadata` |
| `ArgumentOutOfRangeException` | `MaxTokens <= 0`; `OverlapTokens < 0` |
| `FileNotFoundException` | Path API when file does not exist |
| `NotSupportedException` | Extension not in the supported list (path or stream routing) |
| `InvalidOperationException` | Format/processing failures as raised by handlers |
| `OperationCanceledException` | Async cancellation via `CancellationToken` |

Unsupported extension message shape:

```text
The document extension '{extension}' is not supported.
```

## Common mistakes

### 1. Stream without extension in sourceName

**Symptom:** `NotSupportedException` or failed routing.

**Fix:** Pass a name with extension (`"file.docx"`), usually `Path.GetFileName(path)`.

### 2. Citation without metadata

**Symptom:** `ArgumentException` during options validation.

**Fix:** Set `IncludeMetadata = true` whenever `IncludeCitation = true`, or disable both.

### 3. Overlap equal to MaxTokens

**Symptom:** `ArgumentException`.

**Fix:** Use `OverlapTokens < MaxTokens` (maximum allowed is `MaxTokens - 1`).

### 4. Wrong SourceOptions type

**Symptom:** Mode ignored; Auto default used.

**Fix:** Match options type to format (`PdfChunkingOptions` for `.pdf`, etc.).

### 5. Expecting .txt / .html support

**Symptom:** `NotSupportedException`.

**Fix:** Convert to a supported format, or save as Markdown (`.md`) when content is plain structured text suitable for Markdown modes.

### 6. Non-seekable stream left mid-position

Seekable streams are reset to 0. Non-seekable streams must already be positioned at the start of the document content.

### 7. Token counts disagree with the LLM

**Symptom:** Chunks too large/small for the model.

**Fix:** Supply a custom `ITokenCounter` matching the embedding or chat tokenizer. `DefaultTokenCounter` is a heuristic only.

### 8. Chunk IDs change after re-run

**Cause:** Content or effective options (max tokens, overlap, mode, counter) changed.

**Fix:** Keep chunking configuration stable for re-index; use `SourceDocumentId` to replace all chunks for a document when configuration must change.

## RAG checklist

1. Install `Syncfusion.DocumentChunking.Net.Core` (or `.NET`) and apply license.
2. Chunk with stable `ChunkingOptions` per corpus.
3. Upsert by `ChunkId`; group deletes by `SourceDocumentId`.
4. Store `Citation.DisplayText` / `LocationDetails` for grounded answers.
5. Prefer format mode that matches retrieval grain (page vs paragraph vs slide).
6. Keep modest overlap for recursive splits without exploding chunk count.

## Quick validation table

| Check | Expected |
|-------|----------|
| `.docx` path | Word chunks, no throw |
| Stream `"a.pdf"` | PDF route |
| Stream `"a.txt"` | `NotSupportedException` |
| `IncludeCitation=true`, `IncludeMetadata=false` | `ArgumentException` |
| `MaxTokens=0` | `ArgumentOutOfRangeException` |
| Cancel async mid-run | `OperationCanceledException` |
