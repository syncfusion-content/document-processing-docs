# Metadata and Citations

## Contents

- [Enabling flags](#enabling-flags)
- [IChunkMetadata](#ichunkmetadata)
- [IChunkCitation](#ichunkcitation)
- [Canonical location keys](#canonical-location-keys)
- [DisplayText patterns](#displaytext-patterns)
- [Deterministic IDs](#deterministic-ids)
- [RAG usage tips](#rag-usage-tips)

## Enabling flags

| IncludeMetadata | IncludeCitation | Result |
|-----------------|-----------------|--------|
| `true` | `true` | Chunks include `Metadata` and `Citation` (default) |
| `true` | `false` | Metadata only |
| `false` | `false` | Neither |
| `false` | `true` | **Invalid** — `ArgumentException` |

Citation requires metadata because citation output needs source document context.

## IChunkMetadata

| Member | Description |
|--------|-------------|
| `FileName` | File name from path or `sourceName` |
| `FileType` | Extension without dot, lowercased (empty → fallback `"txt"` in builder) |
| `SourceDocumentId` | Deterministic id for the source document |
| `TokenCount` | Tokens for this chunk (via configured counter) |
| `CharacterCount` | Character length of content |
| `Attributes` | Additional key/value attributes when present |

Document-level properties (when available from the format) may include file size, last-modified, author, and format-specific properties as described in the package feature list.

## IChunkCitation

| Member | Description |
|--------|-------------|
| `DisplayText` | Human-readable citation string |
| `LocationDetails` | Structured location bag (`IReadOnlyDictionary<string, object>`) |

## Canonical location keys

Location details are **key-driven** (not extension-driven). Common keys:

| Key | Meaning |
|-----|---------|
| `sourceFile` | Source file name |
| `sourcePath` | Source path when available |
| `locationType` | Structural type label |
| `locationValue` | Locator value for that type |
| `blockReference` | Structural block reference |
| `pageNumber` | PDF (or page-based) page number |
| `pageRange` | Page range string |
| `headingPath` | Heading hierarchy path |
| `worksheetName` | Excel sheet name |
| `cellRange` | Excel cell/range address |
| `slideNumber` | PowerPoint slide number |
| `lineRange` | Line range (for example Markdown) |

Not every key is present on every chunk. Prefer reading keys that exist rather than assuming a fixed schema.

## DisplayText patterns

`DisplayText` is built from location keys. Parts are joined with an em dash (`—`, U+2014). Empty location bag yields `"Unknown source"`.

Examples of patterns:

| Condition | Display pattern (conceptual) |
|-----------|------------------------------|
| `pageNumber` (+ optional `pageRange`, `headingPath`) | `file — Page N` or `file — Pages range` (+ heading) |
| `pageRange` only | `file — Pages range` (+ heading) |
| `slideNumber` | `file — Slide N` |
| `worksheetName` / `cellRange` | `file — Sheet!Range` or sheet or range alone |
| `lineRange` (+ optional heading) | `file — heading — Lines range` |
| heading / structural labels | `file — heading — Table 2` style labels when present |
| fallback | source file name, typed locator, or `"Unknown source"` |

Structural labels may appear as `"Table N"`, `"Paragraph N"`, `"List N"` when those details are present in the location bag.

## Deterministic IDs

- `ChunkId` and `SourceDocumentId` are stable for the same content and configuration, supporting vector database upsert and re-indexing.
- Changing options that affect content boundaries (tokens, mode, overlap) can change chunk identity and indexing.

## RAG usage tips

- Store `ChunkId` as the vector primary key.
- Persist `Citation.DisplayText` and/or `LocationDetails` for answer grounding UI.
- Index `Metadata.SourceDocumentId` to delete/reindex all chunks for a document.
