---
layout: post
title: Tools | AI Agent Tools | Syncfusion
description: Complete reference for all Syncfusion Document SDK Agent Tool classes - Managers, PDF, Word, Excel, PowerPoint, Conversion, and Data Extraction tools.
platform: document-processing
control: AI Agent Tools
documentation: ug
---

# Syncfusion Document SDK AI Agent Tools

[Agent Tools](https://learn.microsoft.com/en-us/agent-framework/get-started/add-tools?pivots=programming-language-csharp) are the callable functions exposed to the AI agent. Each tool class is initialized with the appropriate manager. You can find the available tools in the section [below](#available-tools).

The operational mode is determined by the manager used when initializing the tool.

- [Document Managers](#document-managers) (In‑Memory Mode)
- [Document Storage Manager](#document-storage-manager) (Storage Mode)


## Document Managers

Document Managers are in-memory containers that manage document life cycles during AI agent operations. They provide common functionality including document creation, import/export, active document tracking, and automatic expiration-based cleanup.

**Available Document Managers**

| Document Manager | Description |
|---|---|
| WordDocumentManager | Manages Word documents in memory. Supports **.docx**, **.doc**, **.rtf**, **.html**,  and **.txt** formats with auto-detection on import. |
| ExcelWorkbookManager | Manages Excel workbooks in memory. Owns an `ExcelEngine` instance and implements `IDisposable` for proper resource cleanup. Supports **.xlsx**, **.xls**, **.xlsm**, and **.csv** on export. |
| PdfDocumentManager | Manages PDF documents in memory. Supports both new `PdfDocument` instances and loaded `PdfLoadedDocument` instances, including password-protected files. |
| PresentationManager | Manages PowerPoint presentations in memory. Supports creating new empty presentations and loading existing **.pptx** files, including password-protected ones. |

**DocumentManagerCollection**

`DocumentManagerCollection` is a centralized registry that holds one document manager for each `DocumentType`. It is designed for tool classes that need to work across multiple document types within a single operation - specifically when the source and output documents belong to different document managers.

**Why it is needed:** Consider a Word-to-PDF conversion. The source Word document lives in `WordDocumentManager`, but the resulting PDF must be stored in `PdfDocumentManager`. Rather than hard coding both document managers into the tool class, `OfficeToPdfAgentTools` accepts a `DocumentManagerCollection` and detects the correct manager dynamically at runtime based on the `sourceType` argument.

N> Tools that operate on a single document type (e.g., `WordDocumentAgentTools`, `PdfAnnotationAgentTools`) are initialized directly with their own manager. Only cross-format tools such as `OfficeToPdfAgentTools` require a `DocumentManagerCollection`.

## Document Storage Manager

Document Storage Manager reads documents from and writes them back to storage (such as Azure Blob Storage, S3, or local disk) on each tool invocation; no in‑memory objects are maintained, so every tool call opens and saves document instances, making this mode well suited for web APIs and applications that require horizontal scaling, support large documents, or need state persistence across sessions.

## Available Tools

![Syncfusion AI Agent Tools Categories](tools-categories.png)

Tools are organized into the following categories:

<table>
<thead>
<tr>
<th>Category</th>
<th>Tool Class</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td rowspan="7"><strong>PDF</strong></td>
<td>PdfDocumentAgentTools</td>
<td>Core life cycle operations for PDF documents - creating, loading, exporting, and managing PDF documents in memory.</td>
</tr>
<tr>
<td>PdfOperationsAgentTools</td>
<td>Merge, split, reorder, and compress PDF documents.</td>
</tr>
<tr>
<td>PdfSecurityAgentTools</td>
<td>Encryption, decryption, permissions management, digital signing, and redaction for PDF documents.</td>
</tr>
<tr>
<td>PdfContentExtractionAgentTools</td>
<td>Extract text and images, search for text, and retrieve page information from PDF documents.</td>
</tr>
<tr>
<td>PdfAnnotationAgentTools</td>
<td>Watermarking, managing annotations, and importing/exporting form field data in PDF documents.</td>
</tr>
<tr>
<td>PdfConverterAgentTools</td>
<td>Convert PDF documents to PDF/A format and image files to PDF.</td>
</tr>
<tr>
<td>PdfOcrAgentTools</td>
<td>Perform Optical Character Recognition (OCR) on scanned or image-based PDF documents.</td>
</tr>
<tr>
<td rowspan="9"><strong>Word</strong></td>
<td>WordDocumentAgentTools</td>
<td>Core life cycle operations for Word documents - creating, loading, exporting, and managing Word documents in memory.</td>
</tr>
<tr>
<td>WordOperationsAgentTools</td>
<td>Merge, split, compare, clone, manage fields, and update table of contents in Word documents.</td>
</tr>
<tr>
<td>WordSecurityAgentTools</td>
<td>Password protection, encryption, and decryption for Word documents.</td>
</tr>
<tr>
<td>WordMailMergeAgentTools</td>
<td>Mail merge operations for populating Word document templates with structured data.</td>
</tr>
<tr>
<td>WordFindAndReplaceAgentTools</td>
<td>Text search and replacement operations within Word documents.</td>
</tr>
<tr>
<td>WordRevisionAgentTools</td>
<td>Inspect and manage tracked changes (revisions) in Word documents.</td>
</tr>
<tr>
<td>WordImportExportAgentTools</td>
<td>Import from and export Word documents to HTML, Markdown, and image formats.</td>
</tr>
<tr>
<td>WordFormFieldAgentTools</td>
<td>Read and write form field values in Word documents.</td>
</tr>
<tr>
<td>WordBookmarkAgentTools</td>
<td>Manage bookmarks and bookmark content within Word documents.</td>
</tr>
<tr>
<td rowspan="8"><strong>Excel</strong></td>
<td>ExcelWorkbookAgentTools</td>
<td>Core life cycle operations for Excel workbooks - creating, loading, exporting, and managing workbooks in memory.</td>
</tr>
<tr>
<td>ExcelWorksheetAgentTools</td>
<td>Create, manage, and populate worksheets within Excel workbooks.</td>
</tr>
<tr>
<td>ExcelSecurityAgentTools</td>
<td>Encryption, decryption, and protection management for Excel workbooks and worksheets.</td>
</tr>
<tr>
<td>ExcelChartAgentTools</td>
<td>Create, modify, and remove charts in Excel workbooks.</td>
</tr>
<tr>
<td>ExcelConditionalFormattingAgentTools</td>
<td>Add or remove conditional formatting rules in Excel workbooks.</td>
</tr>
<tr>
<td>ExcelConversionAgentTools</td>
<td>Convert worksheets and charts to image, HTML, JSON, and other file formats.</td>
</tr>
<tr>
<td>ExcelDataValidationAgentTools</td>
<td>Add dropdown, number, date, time, text length, and custom validation rules to Excel workbooks.</td>
</tr>
<tr>
<td>ExcelPivotTableAgentTools</td>
<td>Create and edit pivot tables in Excel workbooks.</td>
</tr>
<tr>
<td rowspan="5"><strong>PowerPoint</strong></td>
<td>PresentationDocumentAgentTools</td>
<td>Core life cycle operations for PowerPoint presentations - creating, loading, exporting, and managing presentations in memory.</td>
</tr>
<tr>
<td>PresentationOperationsAgentTools</td>
<td>Merge, split, and export slides as images from PowerPoint presentations.</td>
</tr>
<tr>
<td>PresentationSecurityAgentTools</td>
<td>Password protection and encryption management for PowerPoint presentations.</td>
</tr>
<tr>
<td>PresentationContentAgentTools</td>
<td>Read text content and metadata from PowerPoint presentations.</td>
</tr>
<tr>
<td>PresentationFindAndReplaceAgentTools</td>
<td>Text search and replacement across all slides in a PowerPoint presentation.</td>
</tr>
<tr>
<td><strong>Conversion</strong></td>
<td>OfficeToPdfAgentTools</td>
<td>Convert Word, Excel, and PowerPoint documents to PDF format.</td>
</tr>
<tr>
<td><strong>Data Extraction</strong></td>
<td>DataExtractionAgentTools</td>
<td>AI-powered structured data extraction from PDF documents and images, returning results as JSON.</td>
</tr>
</tbody>
</table>


I> 1. The following tool classes are not supported in Storage mode:
I>    * WordDocumentAgentTools
I>    * ExcelWorkbookAgentTools
I>    * PdfDocumentAgentTools
I>    * PresentationDocumentAgentTools   
I> 2. All other tool classes work identically in both modes.

## See Also

- [Overview](./overview)
- [Getting Started](./getting-started)
- [Customization](./customization)
- [Example Prompts](./example-prompts)
- [Example Use Cases](example-use-cases)
