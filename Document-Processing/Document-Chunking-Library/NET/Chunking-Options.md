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

The `MaxTokens` property specifies the maximum token count allowed in each generated chunk. The default value is `512`.

The `OverlapTokens` property specifies the number of tokens shared between consecutive chunks. Token overlap helps retain contextual continuity across chunk boundaries. The default value is `50`.

N> `MaxTokens` must be greater than zero and greater than `OverlapTokens`. `OverlapTokens` must be greater than or equal to zero and less than `MaxTokens`. Invalid values throw `ArgumentOutOfRangeException` or `ArgumentException` during validation.

## Include Metadata in Chunks

Set the `IncludeMetadata` property to `true` to include metadata in each generated chunk. The default value is `true`.

The following table describes the metadata information included in each generated chunk when metadata is enabled.

<table>
<tr>
<th>Member</th>
<th>Description</th>
</tr>
<tr>
<td><code>FileName</code></td>
<td>Name of the source document file.</td>
</tr>
<tr>
<td><code>FileType</code></td>
<td>Source document format.</td>
</tr>
<tr>
<td><code>SourceDocumentId</code></td>
<td>Identifies the source document associated with the generated chunk.</td>
</tr>
<tr>
<td><code>TokenCount</code></td>
<td>Number of tokens in the generated chunk.</td>
</tr>
<tr>
<td><code>CharacterCount</code></td>
<td>Number of characters in the generated chunk.</td>
</tr>
<tr>
<td><code>Attributes</code></td>
<td>Additional document information specific to the source format. Only available values are included.</td>
</tr>
</table>

N> The `Attributes` dictionary contains document-level information. Source-location information, such as worksheet ranges, page numbers, slide numbers, and heading paths, is available in `LocationDetails`.

### Format-Specific Metadata Attributes

The following sections describe the metadata attributes available for each supported document format.

#### Excel

<table>
<tr>
<th>Key</th>
<th>Description</th>
</tr>
<tr>
<td><code>SourceFileName</code></td>
<td>Source workbook file name.</td>
</tr>
<tr>
<td><code>SourcePath</code></td>
<td>Full path of the source workbook.</td>
</tr>
<tr>
<td><code>FileExtension</code></td>
<td>File extension of the source workbook.</td>
</tr>
<tr>
<td><code>WorksheetCount</code></td>
<td>Number of worksheets.</td>
</tr>
<tr>
<td><code>LastModified</code></td>
<td>Date when the workbook was last saved.</td>
</tr>
<tr>
<td><code>Created</code></td>
<td>Date when the workbook was created.</td>
</tr>
<tr>
<td><code>Author</code></td>
<td>Author of the workbook.</td>
</tr>
<tr>
<td><code>Title</code></td>
<td>Title of the workbook.</td>
</tr>
<tr>
<td><code>Subject</code></td>
<td>Subject of the workbook.</td>
</tr>
<tr>
<td><code>Company</code></td>
<td>Company associated with the workbook.</td>
</tr>
</table>

#### Word

<table>
<tr>
<th>Key</th>
<th>Description</th>
</tr>
<tr>
<td><code>fileName</code></td>
<td>Source document file name.</td>
</tr>
<tr>
<td><code>author</code></td>
<td>Author of the Word document.</td>
</tr>
<tr>
<td><code>lastAuthor</code></td>
<td>Person who last modified the Word document.</td>
</tr>
<tr>
<td><code>createdDate</code></td>
<td>Document creation date.</td>
</tr>
<tr>
<td><code>lastModifiedDate</code></td>
<td>Document last-save date.</td>
</tr>
<tr>
<td><code>lastPrintedDate</code></td>
<td>Document last-printed date.</td>
</tr>
</table>

#### PDF

<table>
<tr>
<th>Key</th>
<th>Description</th>
</tr>
<tr>
<td><code>fileName</code></td>
<td>Source PDF file name.</td>
</tr>
<tr>
<td><code>pageCount</code></td>
<td>Number of pages in the source PDF.</td>
</tr>
<tr>
<td><code>format</code></td>
<td>Specifies the format of the source document.</td>
</tr>
<tr>
<td><code>author</code></td>
<td>Author of the PDF document.</td>
</tr>
<tr>
<td><code>lastModified</code></td>
<td>Modification date from PDF document information.</td>
</tr>
</table>

#### PowerPoint

<table>
<tr>
<th>Key</th>
<th>Description</th>
</tr>
<tr>
<td><code>fileName</code></td>
<td>Source presentation file name.</td>
</tr>
<tr>
<td><code>slideCount</code></td>
<td>Number of slides in the presentation.</td>
</tr>
<tr>
<td><code>format</code></td>
<td>Specifies the format of the source document.</td>
</tr>
<tr>
<td><code>author</code></td>
<td>Author of the PowerPoint presentation.</td>
</tr>
<tr>
<td><code>lastModified</code></td>
<td>Last-modified timestamp for the source file.</td>
</tr>
</table>

#### Markdown

<table>
<tr>
<th>Key</th>
<th>Description</th>
</tr>
<tr>
<td><code>fileName</code></td>
<td>Source Markdown file name.</td>
</tr>
<tr>
<td><code>lineCount</code></td>
<td>Number of lines in the source Markdown content.</td>
</tr>
<tr>
<td><code>format</code></td>
<td>Specifies the format of the source document.</td>
</tr>
<tr>
<td><code>lastModified</code></td>
<td>Last-modified timestamp for the source file.</td>
</tr>
</table>

## Include Citations in Chunks

Set the `IncludeCitation` property to `true` to include citation information in each generated chunk. The default value is `true`.

N> `IncludeCitation` requires `IncludeMetadata` to be `true`. Setting `IncludeCitation` to `true` while `IncludeMetadata` is `false` throws `ArgumentException` during validation, because citation output depends on source document context.

The following table describes the citation information included in each generated chunk when citations are enabled.

<table>
<tr>
<th>Member</th>
<th>Description</th>
</tr>
<tr>
<td><code>DisplayText</code></td>
<td>Human-readable citation summary built from available location details.</td>
</tr>
<tr>
<td><code>LocationDetails</code></td>
<td>Source-location details for the chunk. Only available values are included.</td>
</tr>
</table>

### Common Citation Location Keys

The following table describes the citation details common to all supported document formats.

<table>
<tr>
<th>Key</th>
<th>Description</th>
</tr>
<tr>
<td><code>sourceFile</code></td>
<td>Name of the source file.</td>
</tr>
<tr>
<td><code>sourcePath</code></td>
<td>Full path of the source file, when available.</td>
</tr>
</table>

### Excel Citation Location Details

For Excel documents, `blockType` identifies the type of source content, such as a workbook, worksheet, table, range, cell, or worksheet section.

<table>
<tr>
<th>Key</th>
<th>Description</th>
</tr>
<tr>
<td><code>blockType</code></td>
<td>Type of Excel content represented by the chunk.</td>
</tr>
<tr>
<td><code>blockId</code></td>
<td>Identifier of the source content block.</td>
</tr>
<tr>
<td><code>worksheetNumber</code></td>
<td>Position of the worksheet in the workbook, starting from 1.</td>
</tr>
<tr>
<td><code>worksheetName</code></td>
<td>Worksheet name.</td>
</tr>
<tr>
<td><code>cellRange</code></td>
<td>Cell range without the worksheet name, such as `A3:D6`.</td>
</tr>
<tr>
<td><code>cellAddress</code></td>
<td>Cell address without the worksheet name, such as `A1`.</td>
</tr>
<tr>
<td><code>tableName</code></td>
<td>Name used to identify the table in the workbook.</td>
</tr>
<tr>
<td><code>tableDisplayName</code></td>
<td>Display name of the table.</td>
</tr>
<tr>
<td><code>rangeName</code></td>
<td>Name assigned to the cell range.</td>
</tr>
<tr>
<td><code>startRow</code></td>
<td>First row of the source content.</td>
</tr>
<tr>
<td><code>endRow</code></td>
<td>Last row of the source content.</td>
</tr>
<tr>
<td><code>startColumn</code></td>
<td>First column of the source content.</td>
</tr>
<tr>
<td><code>endColumn</code></td>
<td>Last column of the source content.</td>
</tr>
<tr>
<td><code>rowCount</code></td>
<td>Number of rows in the region.</td>
</tr>
<tr>
<td><code>columnCount</code></td>
<td>Number of columns in the region.</td>
</tr>
<tr>
<td><code>rowIndex</code></td>
<td>Row number of the cell.</td>
</tr>
<tr>
<td><code>columnIndex</code></td>
<td>Column number of the cell.</td>
</tr>
<tr>
<td><code>cellIndex</code></td>
<td>Position of the cell in the extracted content.</td>
</tr>
<tr>
<td><code>displayText</code></td>
<td>Displayed cell text.</td>
</tr>
<tr>
<td><code>rawValue</code></td>
<td>Raw cell value.</td>
</tr>
<tr>
<td><code>calculatedValue</code></td>
<td>Calculated cell value.</td>
</tr>
<tr>
<td><code>formula</code></td>
<td>Cell formula text.</td>
</tr>
<tr>
<td><code>numberFormat</code></td>
<td>Number format applied to the cell.</td>
</tr>
<tr>
<td><code>isFormula</code></td>
<td>Indicates whether the cell contains a formula.</td>
</tr>
<tr>
<td><code>isMerged</code></td>
<td>Indicates whether the cell is part of a merged range.</td>
</tr>
<tr>
<td><code>mergeRange</code></td>
<td>Merged range address when the cell is merged.</td>
</tr>
<tr>
<td><code>isHidden</code></td>
<td>Indicates whether the worksheet, row, column, or region is hidden.</td>
</tr>
<tr>
<td><code>hasHeader</code></td>
<td>Indicates whether the table or region includes a header row.</td>
</tr>
<tr>
<td><code>hasTotalsRow</code></td>
<td>Indicates whether the table includes a totals row.</td>
</tr>
<tr>
<td><code>headerRow</code></td>
<td>Row containing the table or section header.</td>
</tr>
<tr>
<td><code>titleRow</code></td>
<td>Row containing the title of the section.</td>
</tr>
<tr>
<td><code>title</code></td>
<td>Title or heading associated with the source content.</td>
</tr>
</table>

#### Excel content types

The `blockType` value identifies the Excel content represented by the chunk. It can include:

- `Workbook` - workbook-level content.
- `Worksheet` - worksheet-level content.
- `Table` - Excel table region.
- `Subtable` - a smaller table section created when a table is divided into multiple chunks.
- `Range` - named or explicit cell range.
- `Cell` - individual cell content.
- `WorksheetSection` - a section of worksheet content included in one chunk.

The values returned depend on the content and structure of the workbook and the selected chunking mode.

### Word Citation Location Details

For Word documents, `contentType` identifies the type of source content, such as a paragraph, table, heading, list, section, or preamble.

<table>
<tr>
<th>Key</th>
<th>Description</th>
</tr>
<tr>
<td><code>contentType</code></td>
<td>Type of Word content represented by the chunk.</td>
</tr>
<tr>
<td><code>headingPath</code></td>
<td>Heading associated with the source content.</td>
</tr>
<tr>
<td><code>headingLevel</code></td>
<td>Level of the heading in the source document.</td>
</tr>
<tr>
<td><code>locationValue</code></td>
<td>Location value identified from the source content.</td>
</tr>
<tr>
<td><code>blockReference</code></td>
<td>Readable reference to the source structure, such as a table, paragraph, or list.</td>
</tr>
</table>

#### Word content types

The `contentType` value identifies the Word content represented by the chunk. It can include:

- `Paragraph` - body paragraph content.
- `Table` - table content.
- `Heading` - heading content.
- `List` - list content.
- `Section` - content grouped under a document section.
- `Preamble` - content that appears before the first heading or section.

The values returned depend on the content and structure of the document and the selected chunking mode.

### PDF Citation Location Details

For PDF documents, `blockType` identifies the type of source content, such as a title, paragraph, table, or page.

<table>
<tr>
<th>Key</th>
<th>Description</th>
</tr>
<tr>
<td><code>blockType</code></td>
<td>Type of PDF content represented by the chunk.</td>
</tr>
<tr>
<td><code>pageNumber</code></td>
<td>Page containing the source content.</td>
</tr>
<tr>
<td><code>startPage</code></td>
<td>First page containing the source content.</td>
</tr>
<tr>
<td><code>endPage</code></td>
<td>Last page containing the source content.</td>
</tr>
<tr>
<td><code>pageRange</code></td>
<td>Page range covered by the chunk, such as `5-10`.</td>
</tr>
<tr>
<td><code>rowCount</code></td>
<td>Number of rows in a table region.</td>
</tr>
<tr>
<td><code>columnCount</code></td>
<td>Number of columns in a table region.</td>
</tr>
<tr>
<td><code>hasHeader</code></td>
<td>Indicates whether the table region includes a header.</td>
</tr>
<tr>
<td><code>title</code></td>
<td>Title associated with the source content.</td>
</tr>
</table>

#### PDF content types

The `blockType` value identifies the PDF content represented by the chunk. It can include:

- `Title` - title text identified during extraction.
- `Paragraph` - paragraph text.
- `Table` - table content.
- `Page` - content grouped by page.

The values returned depend on the content and layout of the PDF document and the selected chunking mode.

### PowerPoint Citation Location Details

For PowerPoint presentations, `blockType` identifies the type of source content, such as a slide, shape, text box, speaker notes, or table.

<table>
<tr>
<th>Key</th>
<th>Description</th>
</tr>
<tr>
<td><code>blockType</code></td>
<td>Type of PowerPoint content represented by the chunk.</td>
</tr>
<tr>
<td><code>blockId</code></td>
<td>Identifier of the source content block.</td>
</tr>
<tr>
<td><code>slideTitle</code></td>
<td>Title of the slide containing the source content.</td>
</tr>
<tr>
<td><code>tableNumber</code></td>
<td>Position of the table on the slide.</td>
</tr>
<tr>
<td><code>slideNumber</code></td>
<td>Position of the slide in the presentation, starting from 1.</td>
</tr>
<tr>
<td><code>slideName</code></td>
<td>Slide name.</td>
</tr>
<tr>
<td><code>shapeName</code></td>
<td>Name of the shape containing the source content.</td>
</tr>
</table>

#### PowerPoint content types

The `blockType` value identifies the PowerPoint content represented by the chunk. It can include:

- `Slide` - slide-level content.
- `Shape` - shape content on a slide.
- `TextBox` - text-box content.
- `SpeakerNotes` - speaker notes content.
- `Table` - table content on a slide.

The values returned depend on the content and structure of the presentation and the selected chunking mode.

### Markdown Citation Location Details

For Markdown documents, `blockType` identifies the type of source content, such as a heading, paragraph, table, code block, list, or heading section.

<table>
<tr>
<th>Key</th>
<th>Description</th>
</tr>
<tr>
<td><code>blockType</code></td>
<td>Type of Markdown content represented by the chunk.</td>
</tr>
<tr>
<td><code>blockId</code></td>
<td>Identifier of the source content block.</td>
</tr>
<tr>
<td><code>headingPath</code></td>
<td>Heading hierarchy associated with the source content.</td>
</tr>
<tr>
<td><code>headingLevel</code></td>
<td>Level of the heading in the source document.</td>
</tr>
<tr>
<td><code>startLine</code></td>
<td>Starting line number of the block in the source Markdown.</td>
</tr>
<tr>
<td><code>endLine</code></td>
<td>Ending line number of the block in the source Markdown.</td>
</tr>
<tr>
<td><code>lineRange</code></td>
<td>Formatted line range. Uses a single line value when start and end are equal; otherwise uses <code>start-end</code>.</td>
</tr>
<tr>
<td><code>isListGroup</code></td>
<td>Indicates whether the chunk contains a group of list items.</td>
</tr>
<tr>
<td><code>isTaskList</code></td>
<td>Indicates whether the list is a task list.</td>
</tr>
<tr>
<td><code>listItemCount</code></td>
<td>Number of list items in the group.</td>
</tr>
<tr>
<td><code>maximumListLevel</code></td>
<td>Deepest nesting level in the list.</td>
</tr>
<tr>
<td><code>containsOrderedItems</code></td>
<td>Indicates whether the list group contains ordered items.</td>
</tr>
<tr>
<td><code>containsUnorderedItems</code></td>
<td>Indicates whether the list group contains unordered items.</td>
</tr>
<tr>
<td><code>containsCheckedItems</code></td>
<td>Indicates whether the task list contains checked items.</td>
</tr>
<tr>
<td><code>containsUncheckedItems</code></td>
<td>Indicates whether the task list contains unchecked items.</td>
</tr>
<tr>
<td><code>isOrdered</code></td>
<td>Indicates whether a list item or list is ordered.</td>
</tr>
<tr>
<td><code>tableRowCount</code></td>
<td>Number of rows in a Markdown table.</td>
</tr>
<tr>
<td><code>tableColumnCount</code></td>
<td>Number of columns in a Markdown table.</td>
</tr>
<tr>
<td><code>hasHeader</code></td>
<td>Indicates whether the Markdown table includes a header row.</td>
</tr>
</table>

#### Markdown content types

The `blockType` value identifies the Markdown content represented by the chunk. It can include:

- `Heading` - heading line or heading block.
- `Paragraph` - paragraph content.
- `Table` - Markdown table.
- `CodeBlock` - fenced or indented code block.
- `ThematicBreak` - horizontal rule or thematic break.
- `List` - list group.
- `ListItem` - individual list item.
- `Preamble` - content that appears before the first heading section.
- `HeadingSection` - a heading and the content under it.

The values returned depend on the content and structure of the Markdown document and the selected chunking mode.

### DisplayText Examples

The `DisplayText` property provides a readable reference to the source location. Its format depends on the available location details.

**Excel**

```text
DocumentChunking-Sample.xlsx - Summary!A3:D6
```

**Word**

```text
DocumentChunking-Sample.docx - Quarterly Results
```

**PDF**

```text
DocumentChunking-Sample.pdf - Page 1
```

**PowerPoint**

```text
DocumentChunking-Sample.pptx - Slide 2
```

**Markdown**

```text
DocumentChunking-Sample.md - Document Chunking Sample > Quarterly Results - Lines 11-14
```

N> Metadata and citation details vary depending on the source document.