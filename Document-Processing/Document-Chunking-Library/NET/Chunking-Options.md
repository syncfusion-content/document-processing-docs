---
title: Chunking Options in .NET Document Chunking Library | Syncfusion
description: Learn how to configure maximum tokens, overlapping tokens, metadata, and citations using the Syncfusion® .NET Document Chunking Library.
platform: document-processing
control: Chunking
documentation: UG
---

# Chunking Options in .NET Document Chunking Library

The Syncfusion<sup>®</sup> .NET Document Chunking Library provides options to control the size and overlap of generated chunks. It also allows you to include metadata and citation details in the chunking results.

Use the `ChunkingOptions` class to configure these options when processing a document with the `ChunkingService` class.

## Configure Max Tokens and Overlap

The `MaxTokens` property specifies the maximum token count allowed in each generated chunk.

The `OverlapTokens` property specifies the number of tokens shared between consecutive chunks. Token overlap helps retain contextual continuity across chunk boundaries.

The value of `OverlapTokens` must be less than the value of `MaxTokens`.

## Include Metadata in Chunks

Set the `IncludeMetadata` property to `true` to include metadata in each generated chunk.

The metadata includes information about the source document and generated chunk, such as:

- Source document ID
- File name
- File type
- Token count
- Character count
- Format-specific attributes

The available attributes can vary depending on the source document format and selected chunking mode.

## Include Citations in Chunks

Set the `IncludeCitation` property to `true` to include citation information in each generated chunk.

A citation shows where the chunk content is located in the original document. For example, it can identify a page in a PDF document, a worksheet or cell range in an Excel document, a slide in a PowerPoint presentation, a section in a Word document, or a heading in a Markdown document.

Each citation contains display text and location details. The display text provides a readable source reference, while the location details provide additional information about the exact location of the content in the source document.

N> The citation details vary depending on the source document format, selected chunking mode, and content type.