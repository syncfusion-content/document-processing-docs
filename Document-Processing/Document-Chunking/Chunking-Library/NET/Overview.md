---
title: About Syncfusion .NET Document Chunking Library | Syncfusion
description: Learn about the Syncfusion® .NET Document Chunking Library for preparing enterprise documents for Retrieval-Augmented Generation (RAG) workflows using structural block parsing.
platform: document-processing
control: Chunking
documentation: UG
---

# About Syncfusion .NET Document Chunking Library

The Syncfusion<sup>®</sup> .NET Document Chunking Library divides Excel, Word, PDF, PowerPoint, and Markdown documents into meaningful chunks for Retrieval-Augmented Generation (RAG) workflows. The generated chunks are suitable for embedding generation, semantic search, vector indexing, hybrid search, document Q&A, grounded AI responses, citation-based retrieval, and enterprise RAG ingestion pipelines.

The library processes documents based on their native structure to retain relevant elements such as worksheets, paragraphs, tables, pages, slides, sections, and headings. Using the unified `ChunkingService` API, you can select an appropriate chunking mode, configure the chunk size and overlap, and optionally include metadata and citation details in the generated chunks.

## Key Features

- Supports structural chunking of Excel, Word, PDF, PowerPoint, and Markdown documents.
- Provides Auto, Table, Paragraph, Worksheet, Section, Page, Slide, Notes, and Heading modes based on the selected document format.
- Supports configuring chunk size and overlap using `MaxTokens` and `OverlapTokens`.
- Supports including metadata and source citations in the generated chunks.
- Preserves relevant document structures and location details during chunking.

## Supported File Formats

<table>
  <tr>
    <th>Format</th>
    <th>Extensions</th>
  </tr>
  <tr>
    <td>Excel</td>
    <td><code>.xlsx</code>, <code>.xls</code>, <code>.xlsm</code>, <code>.xltx</code>, <code>.xltm</code>, <code>.csv</code>, <code>.tsv</code></td>
  </tr>
  <tr>
    <td>Word</td>
    <td><code>.docx</code>, <code>.doc</code>, <code>.dotx</code>, <code>.dotm</code>, <code>.rtf</code></td>
  </tr>
  <tr>
    <td>PDF</td>
    <td><code>.pdf</code></td>
  </tr>
  <tr>
    <td>PowerPoint</td>
    <td><code>.pptx</code></td>
  </tr>
  <tr>
    <td>Markdown</td>
    <td><code>.md</code></td>
  </tr>
</table>