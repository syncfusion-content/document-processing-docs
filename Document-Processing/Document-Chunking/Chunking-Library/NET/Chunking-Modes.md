---
title: Chunking Modes in .NET Document Chunking Library | Syncfusion
description: Learn about the chunking modes supported for Excel, Word, PDF, PowerPoint, and Markdown documents using the Syncfusion® .NET Document Chunking Library.
platform: document-processing
control: Chunking
documentation: UG
---

# Chunking Modes in .NET Document Chunking Library

The Syncfusion<sup>®</sup> .NET Document Chunking Library provides different modes for chunking Excel, Word, PDF, PowerPoint, and Markdown documents. The supported modes vary depending on the source document format.

Set the `ChunkingMode` property of the corresponding format-specific chunking options class to select the required mode.

## Excel Chunking Modes

The following table lists the chunking modes supported for Excel documents.

<table>
  <tr>
    <th>Mode</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>Auto</td>
    <td>Automatically selects a suitable chunking approach based on the content and structure of the Excel document.</td>
  </tr>
  <tr>
    <td>Table</td>
    <td>Creates chunks from tables in the Excel document.</td>
  </tr>
  <tr>
    <td>Worksheet</td>
    <td>Creates chunks based on individual worksheets in the Excel document.</td>
  </tr>
</table>

### Mode Configuration

The following code snippet illustrates how to chunk an Excel document using Auto mode.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}

IChunkingResult result = chunkingService.Chunk( fileStream, "ExcelSample.xlsx",
        new ChunkingOptions
        {
            MaxTokens = 50,
            OverlapTokens = 0,
            IncludeMetadata = true,
            IncludeCitation = true,
            SourceOptions =
                new ExcelChunkingOptions
                {
                    ChunkingMode =
                        ExcelChunkingMode.Auto
                }
        });

{% endhighlight %}
{% endtabs %}

N> To use another Excel chunking mode, replace `ExcelChunkingMode.Auto` with `ExcelChunkingMode.Table` or `ExcelChunkingMode.Worksheet`.

## Word Chunking Modes

The following table lists the chunking modes supported for Word documents.

<table>
  <tr>
    <th>Mode</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>Auto</td>
    <td>Automatically selects a suitable chunking approach based on the content and structure of the Word document.</td>
  </tr>
  <tr>
    <td>Table</td>
    <td>Creates chunks from tables in the Word document.</td>
  </tr>
  <tr>
    <td>Paragraph</td>
    <td>Creates chunks based on paragraphs in the Word document.</td>
  </tr>
  <tr>
    <td>Section</td>
    <td>Creates chunks based on sections in the Word document.</td>
  </tr>
</table>

### Mode Configuration

The following code snippet illustrates how to chunk a Word document using Section mode.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}

IChunkingResult result = chunkingService.Chunk("Data/WordSample.docx",
        new ChunkingOptions
        {
            MaxTokens = 500,
            OverlapTokens = 0,
            IncludeMetadata = true,
            IncludeCitation = true,
            SourceOptions =
                new WordChunkingOptions
                {
                    ChunkingMode =
                        WordChunkingMode.Section
                }
        });

{% endhighlight %}
{% endtabs %}

N> To use another Word chunking mode, replace `WordChunkingMode.Section` with `WordChunkingMode.Auto`, `WordChunkingMode.Table`, or `WordChunkingMode.Paragraph`.

## PDF Chunking Modes

The following table lists the chunking modes supported for PDF documents.

<table>
  <tr>
    <th>Mode</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>Auto</td>
    <td>Automatically selects a suitable chunking approach based on the content and structure of the PDF document.</td>
  </tr>
  <tr>
    <td>Table</td>
    <td>Creates chunks from tables detected in the PDF document.</td>
  </tr>
  <tr>
    <td>Paragraph</td>
    <td>Creates chunks based on paragraphs in the PDF document.</td>
  </tr>
  <tr>
    <td>Page</td>
    <td>Creates chunks based on individual pages in the PDF document.</td>
  </tr>
</table>

### Mode Configuration

The following code snippet illustrates how to chunk a PDF document using Table mode.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}

IChunkingResult result = chunkingService.Chunk("Data/PdfSample.pdf",
        new ChunkingOptions
        {
            MaxTokens = 500,
            OverlapTokens = 0,
            IncludeMetadata = true,
            IncludeCitation = true,
            SourceOptions =
                new PdfChunkingOptions
                {
                    ChunkingMode =
                        PdfChunkingMode.Table
                }
        });

{% endhighlight %}
{% endtabs %}

N> To use another PDF chunking mode, replace `PdfChunkingMode.Table` with `PdfChunkingMode.Auto`, `PdfChunkingMode.Paragraph`, or `PdfChunkingMode.Page`.

## PowerPoint Chunking Modes

The following table lists the chunking modes supported for PowerPoint presentations.

<table>
  <tr>
    <th>Mode</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>Auto</td>
    <td>Automatically selects a suitable chunking approach based on the content and structure of the PowerPoint presentation.</td>
  </tr>
  <tr>
    <td>Table</td>
    <td>Creates chunks from tables in the PowerPoint presentation.</td>
  </tr>
  <tr>
    <td>Notes</td>
    <td>Creates chunks from speaker notes in the PowerPoint presentation.</td>
  </tr>
  <tr>
    <td>Slide</td>
    <td>Creates chunks based on individual slides in the PowerPoint presentation.</td>
  </tr>
</table>

### Mode Configuration

The following code snippet illustrates how to chunk a PowerPoint presentation using Auto mode.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}

IChunkingResult result = chunkingService.Chunk("Data/PowerPointSample.pptx",
        new ChunkingOptions
        {
            MaxTokens = 500,
            OverlapTokens = 0,
            IncludeMetadata = true,
            IncludeCitation = true,
            SourceOptions =
                new PowerPointChunkingOptions
                {
                    ChunkingMode =
                        PowerPointChunkingMode.Auto
                }
        });

{% endhighlight %}
{% endtabs %}

N> To use another PowerPoint chunking mode, replace `PowerPointChunkingMode.Auto` with `PowerPointChunkingMode.Table`, `PowerPointChunkingMode.Notes`, or `PowerPointChunkingMode.Slide`.

## Markdown Chunking Modes

The following table lists the chunking modes supported for Markdown documents.

<table>
  <tr>
    <th>Mode</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>Auto</td>
    <td>Automatically selects a suitable chunking approach based on the content and structure of the Markdown document.</td>
  </tr>
  <tr>
    <td>Table</td>
    <td>Creates chunks from tables in the Markdown document.</td>
  </tr>
  <tr>
    <td>Heading</td>
    <td>Creates chunks based on the heading hierarchy in the Markdown document.</td>
  </tr>
  <tr>
    <td>Paragraph</td>
    <td>Creates chunks based on paragraphs in the Markdown document.</td>
  </tr>
</table>

### Mode Configuration

The following code snippet illustrates how to chunk a Markdown document using Table mode.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}

IChunkingResult result = chunkingService.Chunk("Data/MarkdownSample.md",
        new ChunkingOptions
        {
            MaxTokens = 500,
            OverlapTokens = 0,
            IncludeMetadata = true,
            IncludeCitation = true,
            SourceOptions =
                new MarkdownChunkingOptions
                {
                    ChunkingMode =
                        MarkdownChunkingMode.Table
                }
        });

{% endhighlight %}
{% endtabs %}

N> To use another Markdown chunking mode, replace `MarkdownChunkingMode.Table` with `MarkdownChunkingMode.Auto`, `MarkdownChunkingMode.Heading`, or `MarkdownChunkingMode.Paragraph`.

## Expected Output

The chunking result contains the total number of generated chunks and information about each chunk. When metadata and citations are enabled, the output also contains information about the source document and the original location of the chunk content.

The following output shows a shortened example of an Excel document processed using Auto mode:

```text
Chunk Count: 23
ChunkId: chunk_febb0882c5609fba
ChunkIndex: 0
Content:
Enterprise Sales Summary
Citation: ExcelSample.xlsx - Summary
Citation Location Details
Location Key: blockType, Location Value: Cell
Location Key: blockId, Location Value: worksheet:1:cell:A1
Location Key: worksheetNumber, Location Value: 1
Location Key: worksheetName, Location Value: Summary
Location Key: cellAddress, Location Value: A1
Location Key: rowIndex, Location Value: 1
Location Key: columnIndex, Location Value: 1
Location Key: cellIndex, Location Value: 1
Location Key: displayText, Location Value: Enterprise Sales Summary
Location Key: rawValue, Location Value: Enterprise Sales Summary
Location Key: calculatedValue, Location Value: Enterprise Sales Summary
Location Key: numberFormat, Location Value: General
Location Key: isFormula, Location Value: False
Location Key: isMerged, Location Value: True
Location Key: mergeRange, Location Value: 'Summary'!A1:D1
Location Key: isHidden, Location Value: False
Location Key: sourceFile, Location Value: ExcelSample.xlsx
Metadata: Syncfusion.DocumentChunking.Models.ChunkMetadata
Metadata SourceDocumentId: doc_6da758f792fc72a4
Metadata File Name: ExcelSample.xlsx
Metadata File Type: xlsx
Metadata Token Count: 4
Metadata Character Count: 24
Metadata Attributes
Attribute Key: SourceFileName, Attribute Value: ExcelSample.xlsx
Attribute Key: FileExtension, Attribute Value: .xlsx
Attribute Key: WorksheetCount, Attribute Value: 5
Attribute Key: LastModified, Attribute Value: 8/27/2026 4:05:36 PM
Attribute Key: Created, Attribute Value: 8/16/2026 9:52:12 PM
Attribute Key: Author, Attribute Value: Vinothkumar Sampath
```

Each generated chunk contains a unique identifier, index, and extracted content. When citations are enabled, the output identifies the original location of the chunk content. When metadata is enabled, the output provides information about the source document and generated chunk.

N> The chunk count, extracted content, metadata, and citation details vary depending on the source document, selected chunking mode, and configured chunking options.