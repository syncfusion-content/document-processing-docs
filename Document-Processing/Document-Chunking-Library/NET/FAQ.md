---
title: .NET Document Chunking Library FAQ | Syncfusion
description: Find answers to common questions about formats, chunking modes, tokens, metadata, citations, and output in the Syncfusion® .NET Document Chunking Library.
platform: document-processing
control: Chunking
documentation: UG
---
# .NET Document Chunking Library FAQ

## Which document formats are supported?
The Syncfusion<sup>®</sup> .NET Document Chunking Library supports Excel, Word, PDF, PowerPoint, and Markdown documents.

## What chunking modes are available for each document format?
The supported chunking modes vary based on the source document format:

- **Excel:** Auto, Table, and Worksheet
- **Word:** Auto, Table, Paragraph, and Section
- **PDF:** Auto, Table, Paragraph, and Page
- **PowerPoint:** Auto, Table, Notes, and Slide
- **Markdown:** Auto, Table, Heading, and Paragraph

Use the `ChunkingMode` property of the corresponding format-specific chunking options class to select the required mode.

## When should Auto mode be used?
Use Auto mode when the library should process the document based on its content and native structure.

For more control over how content is divided, select a structure-specific mode, such as Worksheet, Section, Page, Slide, Heading, Paragraph, Table, or Notes mode.

## What is the difference between MaxTokens and OverlapTokens?
The `MaxTokens` property specifies the maximum token count allowed in each generated chunk.

The `OverlapTokens` property specifies the number of tokens shared between consecutive chunks. Overlapping tokens help retain context when content is divided across multiple chunks.

The value of `OverlapTokens` must be less than the value of `MaxTokens`.

## What information is available in the chunking result?
The `ChunkingService` returns an `IChunkingResult` containing the generated chunks.

Each chunk can include:
- A unique chunk identifier
- The position of the chunk in the result
- Content extracted from the source document
- Metadata about the source document and chunk
- Citation text and source-location details

Metadata and citation information are included only when the corresponding options are enabled.

## Why should metadata and citations be included in chunks?
Metadata provides information about the source document and generated chunk, such as the file name, file type, token count, character count, and format-specific attributes.

Citations identify the original location of the chunk content. Depending on the document format, citation details can include a worksheet name, cell range, page number, slide number, section, paragraph, heading, or table.

Metadata and citations are useful for source verification, citation-based retrieval, grounded AI responses, and document Q&A workflows.

## Where can the generated chunks be used?
Generated chunks can be used in embedding generation, semantic search, vector indexing, hybrid search, document Q&A, grounded AI responses, citation-based retrieval, and Retrieval-Augmented Generation (RAG) workflows.

The chunk content can be indexed or sent to downstream AI systems, while metadata and citations can be retained for filtering, source tracing, and displaying references.