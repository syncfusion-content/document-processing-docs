---
layout: post
title: Tools | AI Agent Tools | Syncfusion
description: Complete reference for all Syncfusion Document SDK Agent Tool classes - Managers, PDF, Word, Excel, PowerPoint, Conversion, and Data Extraction tools.
platform: document-processing
control: AI Agent Tools
documentation: ug
---

# Syncfusion Document SDK AI Agent Tools

[Agent Tools](https://learn.microsoft.com/en-us/agent-framework/get-started/add-tools?pivots=programming-language-csharp) are the callable functions exposed to the AI agent. Each tool class is initialized with the appropriate manager. 

The operational mode is determined by the manager used when initializing the tool.

- [Document Managers](#document-managers) (In‑Memory Mode)
- [Document Storage Manager](#document-storage-manager) (Storage Mode)

![Syncfusion AI Agent Tools Categories](tools-categories.png)


## Document Managers

Document Managers are in-memory containers that manage document life cycles during AI agent operations. They provide common functionality including document creation, import/export, active document tracking, and automatic expiration-based cleanup.

**Available Document Managers**

| Document Manager | Description |
|---|---|
| WordDocumentManager | Manages Word documents in memory. Supports `.docx`, `.doc`, `.rtf`, `.html`,  and `.txt` formats with auto-detection on import. |
| ExcelWorkbookManager | Manages Excel workbooks in memory. Owns an `ExcelEngine` instance and implements `IDisposable` for proper resource cleanup. Supports `.xlsx`, `.xls`, `.xlsm`, and `.csv` on export. |
| PdfDocumentManager | Manages PDF documents in memory. Supports both new `PdfDocument` instances and loaded `PdfLoadedDocument` instances, including password-protected files. |
| PresentationManager | Manages PowerPoint presentations in memory. Supports creating new empty presentations and loading existing `.pptx` files, including password-protected ones. |

**DocumentManagerCollection**

`DocumentManagerCollection` is a centralized registry that holds one document manager for each `DocumentType`. It is designed for tool classes that need to work across multiple document types within a single operation - specifically when the source and output documents belong to different document managers.

**Why it is needed:** Consider a Word-to-PDF conversion. The source Word document lives in `WordDocumentManager`, but the resulting PDF must be stored in `PdfDocumentManager`. Rather than hard coding both document managers into the tool class, `OfficeToPdfAgentTools` accepts a `DocumentManagerCollection` and detects the correct manager dynamically at runtime based on the `sourceType` argument.

> **Note:** Tools that operate on a single document type (e.g., `WordDocumentAgentTools`, `PdfAnnotationAgentTools`) are initialized directly with their own manager. Only cross-format tools such as `OfficeToPdfAgentTools` require a `DocumentManagerCollection`.

## Document Storage Manager

Document Storage Manager reads documents from and writes them back to storage (such as Azure Blob Storage, S3, or local disk) on each tool invocation; no in‑memory objects are maintained, so every tool call opens and saves document instances, making this mode well suited for web APIs and applications that require horizontal scaling, support large documents, or need state persistence across sessions.

## Available Tools

| Category | Tool Class | Description |
|---|---|---|
| **PDF** | PdfDocumentAgentTools | Core life cycle operations for PDF documents — creating, loading, exporting, and managing PDF documents in memory. |
| | PdfOperationsAgentTools | Merge, split, reorder, and compress PDF documents. |
| | PdfSecurityAgentTools | Encryption, decryption, permissions management, digital signing, and redaction for PDF documents. |
| | PdfContentExtractionAgentTools | Extract text and images, search for text, and retrieve page information from PDF documents. |
| | PdfAnnotationAgentTools | Watermarking, managing annotations, and importing/exporting form field data in PDF documents. |
| | PdfConverterAgentTools | Convert PDF documents to PDF/A format and image files to PDF. |
| | PdfOcrAgentTools | Perform Optical Character Recognition (OCR) on scanned or image-based PDF documents. |
| **Word** | WordDocumentAgentTools | Core life cycle operations for Word documents — creating, loading, exporting, and managing Word documents in memory. |
| | WordOperationsAgentTools | Merge, split, compare, clone, manage fields, and update table of contents in Word documents. |
| | WordSecurityAgentTools | Password protection, encryption, and decryption for Word documents. |
| | WordMailMergeAgentTools | Mail merge operations for populating Word document templates with structured data. |
| | WordFindAndReplaceAgentTools | Text search and replacement operations within Word documents. |
| | WordRevisionAgentTools | Inspect and manage tracked changes (revisions) in Word documents. |
| | WordImportExportAgentTools | Import from and export Word documents to HTML, Markdown, and image formats. |
| | WordFormFieldAgentTools | Read and write form field values in Word documents. |
| | WordBookmarkAgentTools | Manage bookmarks and bookmark content within Word documents. |
| **Excel** | ExcelWorkbookAgentTools | Core life cycle operations for Excel workbooks — creating, loading, exporting, and managing workbooks in memory. |
| | ExcelWorksheetAgentTools | Create, manage, and populate worksheets within Excel workbooks. |
| | ExcelSecurityAgentTools | Encryption, decryption, and protection management for Excel workbooks and worksheets. |
| | ExcelFormulaAgentTools | Apply and manage formulas within Excel workbooks. |
| | ExcelChartAgentTools | Create, modify, and remove charts in Excel workbooks. |
| | ExcelConditionalFormattingAgentTools | Add or remove conditional formatting rules in Excel workbooks. |
| | ExcelConversionAgentTools | Convert worksheets and charts to image, HTML, JSON, and other file formats. |
| | ExcelDataValidationAgentTools | Add dropdown, number, date, time, text length, and custom validation rules to Excel workbooks. |
| | ExcelPivotTableAgentTools | Create and edit pivot tables in Excel workbooks. |
| **PowerPoint** | PresentationDocumentAgentTools | Core life cycle operations for PowerPoint presentations — creating, loading, exporting, and managing presentations in memory. |
| | PresentationOperationsAgentTools | Merge, split, and export slides as images from PowerPoint presentations. |
| | PresentationSecurityAgentTools | Password protection and encryption management for PowerPoint presentations. |
| | PresentationContentAgentTools | Read text content and metadata from PowerPoint presentations. |
| | PresentationFindAndReplaceAgentTools | Text search and replacement across all slides in a PowerPoint presentation. |
| **Conversion** | OfficeToPdfAgentTools | Convert Word, Excel, and PowerPoint documents to PDF format. |
| **Data Extraction** | DataExtractionAgentTools | AI-powered structured data extraction from PDF documents and images, returning results as JSON. |


## See Also

- [Overview](./overview)
- [Getting Started](./getting-started)
- [Customization](./customization)
- [Example Prompts](./example-prompts)
- [Example Use Cases](example-use-cases)
