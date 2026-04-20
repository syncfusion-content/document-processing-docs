---
layout: post
title: Tools | AI Agent Tools | Syncfusion
description: Complete reference for all Syncfusion Document SDK Agent Tool classes — Managers, PDF, Word, Excel, PowerPoint, Conversion, and Data Extraction tools.
platform: document-processing
control: AI Agent Tools
documentation: ug
---

# Syncfusion Document SDK Agent Tools

Agent Tools are the callable functions exposed to the AI agent. Each tool class is initialized with the appropriate manager.

Agent tools support two operational modes that determine how documents are handled during AI agent execution. In‑Memory mode enables live, in‑memory document processing, while Document Storage mode supports persistent, storage‑backed document handling.
The operational mode is determined by the manager used when initializing the tool.

- [Document Managers](https://helpstaging.syncfusion.com/document-processing/ai-agent-tools/tools#document-managers) (In‑Memory Mode)
- [Document Storage Managers](https://helpstaging.syncfusion.com/document-processing/ai-agent-tools/tools#document-storage-managers) (Storage Mode)

Tools are organized into the following categories:

| Category | Tool Classes | Description |
|---|---|---|
| **PDF** | PdfDocumentAgentTools,<br/>PdfOperationsAgentTools,<br/>PdfSecurityAgentTools,<br/>PdfContentExtractionAgentTools,<br/>PdfAnnotationAgentTools,<br/>PdfConverterAgentTools,<br/>PdfOcrAgentTools | Create, manipulate, secure, extract content from, annotate, convert, and perform OCR on PDF documents. |
| **Word** | WordDocumentAgentTools,<br/>WordOperationsAgentTools,<br/>WordSecurityAgentTools,<br/>WordMailMergeAgentTools,<br/>WordFindAndReplaceAgentTools,<br/>WordRevisionAgentTools,<br/>WordImportExportAgentTools,<br/>WordFormFieldAgentTools,<br/>WordBookmarkAgentTools | Create, edit, protect, mail-merge, find/replace, track changes, import/export, and manage form fields and bookmarks in Word documents. |
| **Excel** | ExcelWorkbookAgentTools,<br/>ExcelWorksheetAgentTools,<br/>ExcelSecurityAgentTools,<br/>ExcelFormulaAgentTools,<br/>ExcelChartAgentTools,<br/>ExcelConditionalFormattingAgentTools,<br/>ExcelConversionAgentTools,<br/>ExcelDataValidationAgentTools,<br/>ExcelPivotTableAgentTools | Create and manage workbooks and worksheets, set cell values, formulas, and number formats, apply security, create and configure charts and sparklines, add conditional formatting, convert to image/HTML/ODS/JSON, manage data validation, and create and manipulate pivot tables. |
| **PowerPoint** | PresentationDocumentAgentTools,<br/>PresentationOperationsAgentTools,<br/>PresentationSecurityAgentTools,<br/>PresentationContentAgentTools,<br/>PresentationFindAndReplaceAgentTools | Load, merge, split, secure, and extract content from PowerPoint presentations. |
| **Conversion** | OfficeToPdfAgentTools | Convert Word, Excel, and PowerPoint documents to PDF. |
| **Data Extraction** | DataExtractionAgentTools | Extract structured data (text, tables, forms) from PDF and image files as JSON. |


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

`DocumentManagerCollection` is a centralized registry that holds one document manager for each `DocumentType`. It is designed for tool classes that need to work across multiple document types within a single operation — specifically when the source and output documents belong to different document managers.

**Why it is needed:** Consider a Word-to-PDF conversion. The source Word document lives in `WordDocumentManager`, but the resulting PDF must be stored in `PdfDocumentManager`. Rather than hard coding both document managers into the tool class, `OfficeToPdfAgentTools` accepts a `DocumentManagerCollection` and detects the correct manager dynamically at runtime based on the `sourceType` argument.

> **Note:** Tools that operate on a single document type (e.g., `WordDocumentAgentTools`, `PdfAnnotationAgentTools`) are initialized directly with their own manager. Only cross-format tools such as `OfficeToPdfAgentTools` require a `DocumentManagerCollection`.

## Document Storage Manager

Document Storage Managers reads documents from and writes them back to storage (such as Azure Blob Storage, S3, or local disk) on each tool invocation; no in‑memory objects are maintained, so every tool call opens and saves document instances, making this mode well suited for web APIs and applications that require horizontal scaling, support large documents, or need state persistence across sessions.

## PDF Tools

**PdfDocumentAgentTools**

Provides core life cycle operations for PDF documents — creating, loading, exporting, and managing PDF documents in memory.

| Tool | Syntax | Description |
|---|---|---|
| CreatePdfDocument | CreatePdfDocument(<br/>string? filePath = null,<br/>string? password = null) | Creates a new PDF document in memory or loads an existing one from a file path. Returns the documentId. |
| GetAllPDFDocuments | GetAllPDFDocuments() | Returns all PDF document IDs currently available in memory. |
| ExportPDFDocument | ExportPDFDocument(<br/>string documentId,<br/>string filePath) | Exports a PDF document from memory to the specified file path on the file system. |
| RemovePdfDocument | RemovePdfDocument(<br/>string documentId) | Removes a specific PDF document from memory by its ID. |
| SetActivePdfDocument | SetActivePdfDocument(<br/>string documentId) | Changes the active PDF document context to the specified document ID. |

**PdfOperationsAgentTools**

Provides merge, split, and compression operations for PDF documents.

| Tool | Syntax | Description |
|---|---|---|
| MergePdfs | MergePdfs(<br/>`List<PdfFileInput>` pdfFiles,<br/>bool mergeAccessibilityTags = false,<br/>string? outputFilePath = null) | Merges multiple PDF files into a single PDF document. |
| SplitPdf | SplitPdf(<br/>string documentIdOrFilePath,<br/>int[][]? pageRanges = null,<br/>string outputFilePattern = "Output{0}.pdf",<br/>string? outputFolderPath = null) | Splits a PDF document into individual pages or by specified page ranges. |
| CompressPdf | CompressPdf(<br/>string documentIdOrFilePath,<br/>bool compressImages = true,<br/>int imageQuality = 50,<br/>bool optimizeFont = true,<br/>bool optimizePageContents = true,<br/>bool removeMetadata = true,<br/>string? outputFilePath = null) | Compresses a PDF by optimizing images, fonts, page contents, and optionally removing metadata. |
| ReorderPdfPages | ReorderPdfPages(<br/> string documentIdOrFilePath,<br/>int[] orderIndexes,<br/>string? outputFilePath = null) | Rearranges PDF pages using a zero-based page index sequence. Get the PDF page count first and ensure the index array length matches it. |


**PdfSecurityAgentTools**

Provides encryption, decryption, permissions management, digital signing, and redaction capabilities for PDF documents.

| Tool | Syntax | Description |
|---|---|---|
| EncryptPdf | EncryptPdf(<br/>string documentIdOrFilePath,<br/>string password,<br/>string encryptionAlgorithm = "AES",<br/>string keySize = "256",<br/>string? outputFilePath = null) | Protects a PDF document with a user password and applies the specified encryption algorithm and key size. |
| DecryptPdf | DecryptPdf(<br/>string documentIdOrFilePath,<br/>string password,<br/>string? outputFilePath = null) | Removes encryption from a password-protected PDF document by clearing its security passwords and permissions. `password` is required for protected files. |
| SetPermissions | SetPermissions(<br/>string documentIdOrFilePath,<br/>string permissions,<br/>string? password = null,<br/>string? outputFilePath = null) | Sets document permissions on a PDF such as print, copy, edit content, and more. Permissions are specified as a comma-separated string of flag names. |
| RemovePermissions | RemovePermissions(<br/>string documentIdOrFilePath,<br/>string? password = null,<br/>string? outputFilePath = null) | Removes all document permissions from a PDF by resetting them to the default (unrestricted) state. |
| SignPdf | SignPdf(<br/>string documentIdOrFilePath,<br/>string certificateFilePath,<br/>string certificatePassword,<br/>RectangleF bounds,<br/>string? appearanceImagePath = null,<br/>string? outputFilePath = null) | Digitally signs a PDF document using a PFX certificate and places the signature within the specified bounds. An optional appearance image can be provided for the visible signature. |
| RedactPdf | RedactPdf(<br/>string documentIdOrFilePath,<br/>RedactionRequest redaction,<br/>string? outputFilePath = null) | Redacts rectangular regions from an existing PDF document by permanently removing sensitive content and filling the areas with the specified color. `redaction` contains redaction items (page index, bounds, optional color). |


**PdfContentExtractionAgentTools**

Provides tools for extracting text, images, and searching for text content in PDF documents.

| Tool | Syntax | Description |
|---|---|---|
| ExtractText | ExtractText(<br/>string documentIdOrFilePath,<br/>int startPageIndex = -1,<br/>int endPageIndex = -1) | Extracts text content from a PDF document across a specified page range, or from all pages if no range is given. |
| ExtractImages | ExtractImages(<br/>string documentIdOrFilePath,<br/>int startPageIndex = -1,<br/>int endPageIndex = -1,<br/>string? outputPath = null) | Extracts  images from a PDF document across a specified page range or the entire document and saves them to the specified output folder. |
| FindTextInPdf | FindTextInPdf(<br/>string documentIdOrFilePath,<br/>string[] text) | Searches a PDF document for matching array of text and returns all occurrences grouped by page with their bounding rectangle positions. |
| GetPdfDocumentPageCount | GetPdfDocumentPageCount(<br/>string documentIdOrFilePath) | Returns the number of pages in the specified PDF document. |


**PdfAnnotationAgentTools**

Provides tools for watermarking, managing annotations, and importing/exporting form field data in PDF documents.

| Tool | Syntax | Description |
|---|---|---|
| WatermarkPdf | WatermarkPdf(<br/>string documentIdOrFilePath,<br/>string watermarkText,<br/>int? rotation = null,<br/>float locationX = -1,<br/>float locationY = -1,<br/>byte[]? watermarkColor = null,<br/>float opacity = 50f,<br/>string? outputFilePath = null) | Applies a configurable text watermark to all pages of a PDF document. Supports opacity, rotation, color, and custom positioning. |
| ExportAnnotations | ExportAnnotations(<br/>string documentIdOrFilePath,<br/>AnnotationDataFormat format,<br/>string? exportFilePath = null) | Exports annotations from a PDF document into XFDF, FDF, or JSON format. Returns annotation data or export file path. |
| ImportAnnotations | ImportAnnotations(<br/>string documentIdOrFilePath,<br/>AnnotationDataFormat format,<br/>string importFilePath,<br/>string? outputFilePath = null) | Imports annotations into a PDF document from XFDF, FDF, or JSON format. |
| ExportFormFields | ExportFormFields(<br/>string documentIdOrFilePath,<br/>DataFormat format,<br/>string? exportPath = null) | Exports form field data from a PDF document into FDF, XFDF, or XML format. Returns form field data or export file path. |
| ImportFormFields | ImportFormFields(<br/>string documentIdOrFilePath,<br/>DataFormat format,<br/>string? sourcePdfPath = null,<br/>string? outputFilePath = null) | Imports form field data into a PDF document from FDF, XFDF, or XML format. |

**PdfConverterAgentTools**

Provides tools to convert PDF, HTML, and image files to PDF.

| Tool | Syntax | Description |
|---|---|---|
| ConvertPdfToPdfA | ConvertPdfToPdfA(<br/>string documentIdOrFilePath,<br/>PdfConformanceLevel conformanceLevel,<br/>string? outputFilePath = null) | Converts an existing PDF document to a PDF/A-compliant format. Supported conformance levels: `PdfA1B`, `PdfA2B`, `PdfA3B`, `Pdf_A4`, `Pdf_A4F`, `Pdf_A4E`. |
| ConvertHtmlToPdf | ConvertHtmlToPdf(<br/>string urlOrFilePath,<br/>int pageWidth,<br/>int pageHeight,<br/>string? outputFilePath = null) | Converts a webpage URL or a local HTML file to a PDF document using explicit page width and height (in pixels). |
| ImageToPdf | ImageToPdf(<br/>string[] imageFiles,<br/>PdfImagePosition imagePosition = PdfImagePosition.FitToPage,<br/>int pageWidth = 612,<br/>int pageHeight = 792,<br/>string? outputFilePath = null) | Creates a PDF document from one or more image files with control over image placement and page size. `imagePosition` values: `Stretch`, `Center`, `FitToPage`. |

**PdfOcrAgentTools**

Provides tools to perform Optical Character Recognition (OCR) on PDF documents.

| Tool | Syntax | Description |
|---|---|---|
| OcrPdf | OcrPdf(<br/>string documentIdOrFilePath,<br/>string? dataPath = null,<br/>string language = "eng",<br/>string? outputFilePath = null) | Performs Optical Character Recognition (OCR) on a PDF document to make scanned or image-based text selectable and searchable. `dataPath` is required when using non-English languages (path to Tesseract tessdata folder). Supported language codes: `eng` (English), etc. |


## Word Tools

**WordDocumentAgentTools**

Provides core life cycle operations for Word documents — creating, loading, exporting, and managing Word documents in memory.

| Tool | Syntax | Description |
|---|---|---|
| CreateDocument | CreateDocument(<br/>string? filePath = null,<br/>string? password = null) | Creates a new Word document in memory or loads an existing one from a file path. Returns the `documentId`. |
| GetAllDocuments | GetAllDocuments() | Returns all Word document IDs currently available in memory. |
| ExportDocument | ExportDocument(<br/>string documentId,<br/>string filePath,<br/>string? formatType = "Docx") | Exports a Word document to the file system. Supported formats: `Docx`, `Doc`, `Rtf`, `Html`, `Txt`. |
| RemoveDocument | RemoveDocument(<br/>string documentId) | Removes a specific Word document from memory by its ID. |
| SetActiveDocument | SetActiveDocument(<br/>string documentId) | Changes the active Word document context to the specified document ID. |



**WordOperationsAgentTools**

Provides merge, split, compare, clone, field management, and table of contents operations for Word documents.

| Tool | Syntax | Description |
|---|---|---|
| MergeDocuments | MergeDocuments(<br/>string destinationDocumentIdOrFilePath,<br/>string[] documentIdsOrFilePaths,<br/>string pasteOption = "UseDestinationStyles",<br/>string? outputFilePath = null) | Merges multiple Word documents into a single destination document. |
| SplitDocument | SplitDocument(<br/>string documentIdOrFilePath,<br/>string splitRules = "SplitBySection",<br/>string placeholderText = "<<(.*)>>",<br/>string? outputFilePath = null) | Splits a single Word document into multiple documents based on the specified splitRules. |
| CompareDocuments | CompareDocuments(<br/>string originalDocumentIdOrFilePath,<br/>string revisedDocumentIdOrFilePath,<br/>string author = "Author",<br/>DateTime dateTime = default,<br/>string? outputFilePath = null) | Compares the original document with the revised document and marks differences as tracked changes in the original document. |
| CloneDocument | CloneDocument(<br/>string documentIdOrFilePath,<br/>string? outputFilePath = null) | Creates a deep copy of a Word document and stores it in memory. Useful for duplicating templates before making changes. |
| UpdateDocumentFields | UpdateDocumentFields(<br/>string documentIdOrFilePath,<br/>bool updatePageFields = false,<br/>string? outputFilePath = null) | Updates all fields (DATE, TIME, DOCVARIABLE, IF, SEQ, etc.) present in a Word document. |
| UnlinkDocumentFields | UnlinkDocumentFields(<br/>string documentIdOrFilePath,<br/>string? outputFilePath = null) | Unlinks all fields in a Word document by replacing each field with its current result as static text. |
| UpdateTableOfContents | UpdateTableOfContents(<br/>string documentIdOrFilePath,<br/>string? outputFilePath = null) | Updates (rebuilds) the Table of Contents in a Word document based on current heading styles and page layout. |



**WordSecurityAgentTools**

Provides password protection, encryption, and decryption for Word documents.

| Tool | Syntax | Description |
|---|---|---|
| ProtectDocument | ProtectDocument(<br/>string documentIdOrFilePath,<br/>string password,<br/>string protectionType,<br/>string? outputFilePath = null) | Protects a Word document with a password and protection type (e.g.,`AllowOnlyReading`). |
| EncryptDocument | EncryptDocument(<br/>string documentIdOrFilePath,<br/>string password,<br/>string? outputFilePath = null) | Encrypts a Word document with a password. |
| UnprotectDocument | UnprotectDocument(<br/>string documentIdOrFilePath,<br/>string password,<br/>string? outputFilePath = null) | Removes protection from a Word document using the provided password. |
| DecryptDocument | DecryptDocument(<br/>string documentIdOrFilePath,<br/>string? password,<br/>string? outputFilePath = null) | Removes encryption from a Word document. The document must be loaded with the correct password first. |



**WordMailMergeAgentTools**

Provides mail merge operations for populating Word document templates with structured data.

| Tool | Syntax | Description |
|---|---|---|
| ExecuteMailMerge | ExecuteMailMerge(<br/>string documentIdOrFilePath,<br/>string dataSourceJson,<br/>bool removeEmptyParagraphs = true,<br/>bool clearFields = true,<br/>string? outputFilePath = null) | Executes mail merge using JSON data. |
| ExecuteGroupMailMerge | ExecuteGroupMailMerge(<br/>string documentIdOrFilePath,<br/>string dataTableJson,<br/>string groupName = "",<br/>bool removeEmptyFields = true,<br/>bool removeEmptyGroup = true,<br/>bool clearFields = true,<br/>bool removeEmptyParagraphs = true,<br/>bool startAtNewPage = false,<br/>string? outputFilePath = null) | Executes group mail merge using JSON data. Requires groupName for array JSON. |
| ExecuteNestedGroupMailMerge | ExecuteNestedGroupMailMerge(<br/>string documentIdOrFilePath,<br/>string dataTableJson,<br/>string groupName = "",<br/>bool removeEmptyFields = true,<br/>bool removeEmptyGroup = true,<br/>bool clearFields = true,<br/>bool removeEmptyParagraphs = true,<br/>bool startAtNewPage = false,<br/>string? outputFilePath = null) | Executes a nested group mail merge operation in the Word document using a DataTable. |



**WordFindAndReplaceAgentTools**

Provides text search and replacement operations within Word documents.

| Tool | Syntax | Description |
|---|---|---|
| FindAndReplace | FindAndReplace(<br/>string documentIdOrFilePath,<br/>string[] findTexts,<br/>string[] replaceTexts,<br/>bool matchCase = false,<br/>bool wholeWord = false,<br/>bool replaceFirst = false,<br/>string? outputFilePath = null) | Finds all occurrences of one or more texts and replaces them in a single pass. Supports arrays to replace multiple placeholders at once. |
| FindAndReplaceWithRegex | FindAndReplaceWithRegex(<br/>string documentIdOrFilePath,<br/>string findWhat,<br/>string replaceText,<br/>bool replaceFirst = false,<br/>string? outputFilePath = null) | Finds and replaces first occurrence of the specified pattern in the Word document. Returns a count of replaced text. |


**WordRevisionAgentTools**

Provides tools to inspect and manage tracked changes (revisions) in Word documents.

| Tool | Syntax | Description |
|---|---|---|
| AcceptRevisionsByAuthor | AcceptRevisionsByAuthor(<br/>string documentIdOrFilePath,<br/>string author,<br/>string? outputFilePath = null) | Accepts all revisions made by a specific author. |
| RejectRevision | RejectRevision(<br/>string documentIdOrFilePath,<br/>string author,<br/>string? outputFilePath = null) | Rejects all revisions made by a specific author. |
| AcceptAllRevisions | AcceptAllRevisions(<br/>string documentIdOrFilePath,<br/>string? outputFilePath = null) | Accepts all revisions in the document and returns count. |
| RejectAllRevisions | RejectAllRevisions(<br/>string documentIdOrFilePath,<br/>string? outputFilePath = null) | Rejects all revisions in the document and returns count. |


**WordImportExportAgentTools**

Provides tools to import from and export Word documents to HTML and Markdown and Image formats.

| Tool | Syntax | Description |
|---|---|---|
| ImportHtml | ImportHtml(<br/>string htmlContentOrFilePath,<br/>string? documentIdOrFilePath = null,<br/>string? outputFilePath = null) | Imports HTML content into a Word document. |
| ImportMarkdown | ImportMarkdown(<br/>string markdownContentOrFilePath,<br/>string? documentIdOrFilePath = null,<br/>string? outputFilePath = null) | Imports Markdown content into a Word document. |
| GetHtml | GetHtml(<br/>string documentIdOrFilePath) | Returns the document content as HTML. |
| GetMarkdown | GetMarkdown(<br/>string documentIdOrFilePath) | Returns the document content as Markdown. |
| GetText | GetText(<br/>string documentIdOrFilePath) | Returns the document content as plain text. |
| ConvertDocument | ConvertDocument(<br/>string documentIdOrFilePath,<br/>string filePath,<br/>string? formatType = "Docx") | Converts the document to the specified format and saves to the given file path. Supported formats: `Docx`, `Doc`, `Rtf`, `Html`, `Txt`. |
| ExportAsImage | ExportAsImage(<br/>string documentIdOrFilePath,<br/>string? imageFormat = "Png",<br/>int? startPageIndex = null,<br/>int? endPageIndex = null,<br/>string outputDirectory = ".") | Exports document pages as images (PNG or JPEG) to the output directory. |



**WordFormFieldAgentTools**

Provides tools to read and write form field values in Word documents.

| Tool | Syntax | Description |
|---|---|---|
| GetFormData | GetFormData(<br/>string documentIdOrFilePath) | Retrieves all form field data as a dictionary. |
| SetFormFields | SetFormFields(<br/>string documentIdOrFilePath,<br/>string dataJson,<br/>string? outputFilePath = null) | Sets form field values from a single JSON object; call once with all fields. |
| GetFormField | GetFormField(<br/>string documentIdOrFilePath,<br/>string fieldName) | Gets a specific form field value by name. |



**WordBookmarkAgentTools**

Provides tools to manage bookmarks and bookmark content within Word documents.

| Tool | Syntax | Description |
|---|---|---|
| GetBookmarks | GetBookmarks(<br/>string documentIdOrFilePath) | Gets all bookmark names from the document. |
| GetContent | GetContent(<br/>string documentIdOrFilePath,<br/>string bookmarkName) | Gets content from the bookmark and creates a new document. |
| ReplaceContent | ReplaceContent(<br/>string documentIdOrFilePath,<br/>string bookmarkName,<br/>string replaceDocumentIdOrFilePath,<br/>string? outputFilePath = null) | Replaces the existing bookmark content with content from another document. |
| RemoveContent | RemoveContent(<br/>string documentIdOrFilePath,<br/>string bookmarkName,<br/>string? outputFilePath = null) | Removes the content of the specified bookmark. |
| RemoveBookmark | RemoveBookmark(<br/>string documentIdOrFilePath,<br/>string bookmarkName,<br/>string? outputFilePath = null) | Removes the specified bookmark from the document. |


## Excel Tools

**ExcelWorkbookAgentTools**

Provides core life cycle operations for Excel workbooks — creating, loading, exporting, and managing workbooks in memory.

| Tool | Syntax | Description |
|---|---|---|
| CreateWorkbook | CreateWorkbook(<br/>string? filePath = null,<br/>string? password = null) | Creates a new Excel workbook in memory or loads an existing one from a file path. Returns the `workbookId`. |
| GetAllWorkbooks | GetAllWorkbooks() | Returns all Excel workbook IDs currently available in memory. |
| ExportWorkbook | ExportWorkbook(<br/>string workbookId,<br/>string filePath,<br/>string version = "XLSX") | Exports an Excel workbook to the file system. Supported formats: `XLS`, `XLSX`, `XLSM`, `CSV`. |
| RemoveWorkbook | RemoveWorkbook(<br/>string workbookId) | Removes a specific workbook from memory by its ID. |
| SetActiveWorkbook | SetActiveWorkbook(<br/>string workbookId) | Changes the active workbook context to the specified workbook ID. |


**ExcelWorksheetAgentTools**

Provides tools to create, manage, and populate worksheets within Excel workbooks.

| Tool | Syntax | Description |
|---|---|---|
| CreateWorksheet | CreateWorksheet(<br/>string workbookIdOrFilePath,<br/>string? sheetName = null,<br/>string? outputFilePath = null) | Creates a new worksheet inside the specified workbook. |
| DeleteWorksheet | DeleteWorksheet(<br/>string workbookIdOrFilePath,<br/>string worksheetName,<br/>string? outputFilePath = null) | Deletes a worksheet from the workbook. |


**ExcelSecurityAgentTools**

Provides encryption, decryption, and protection management for Excel workbooks and worksheets.

| Tool | Syntax | Description |
|---|---|---|
| EncryptWorkbook | EncryptWorkbook(<br/>string workbookIdOrFilePath,<br/>string password,<br/>string? outputFilePath = null) | Encrypts an Excel workbook with a password. |
| DecryptWorkbook | DecryptWorkbook(<br/>string workbookIdOrFilePath,<br/>string password,<br/>string? outputFilePath = null) | Removes encryption from an Excel workbook using the provided password. |
| ProtectWorkbook | ProtectWorkbook(<br/>string workbookIdOrFilePath,<br/>string password,<br/>string? outputFilePath = null) | Protects the workbook structure (sheets) with a password. |
| UnprotectWorkbook | UnprotectWorkbook(<br/>string workbookIdOrFilePath,<br/>string password,<br/>string? outputFilePath = null) | Removes workbook structure protection. |
| ProtectWorksheet | ProtectWorksheet(<br/>string workbookIdOrFilePath,<br/>string worksheetName,<br/>string password,<br/>string? outputFilePath = null) | Protects a specific worksheet from editing using a password. |
| UnprotectWorksheet | UnprotectWorksheet(<br/>string workbookIdOrFilePath,<br/>string worksheetName,<br/>string password,<br/>string? outputFilePath = null) | Removes protection from a specific worksheet. |



**ExcelChartAgentTools**

Provides tools to create modify and remove charts in excel workbooks

| Tool | Syntax | Description |
|---|---|---|
| CreateChart | CreateChart(<br/>string workbookIdOrFilePath,<br/>string worksheetName,<br/>string chartType,<br/>string dataRange,<br/>bool isSeriesInRows = false,<br/>int topRow = 8,<br/>int leftColumn = 1,<br/>int bottomRow = 23,<br/>int rightColumn = 8,<br/>string? outputFilePath = null) | Creates a chart from a data range in the worksheet. Supports many chart types (e.g., `Column_Clustered`, `Line`, `Pie`, `Bar_Clustered`). Returns the chart index. |
| CreateChartWithSeries | CreateChartWithSeries(<br/>string workbookIdOrFilePath,<br/>string worksheetName,<br/>string chartType,<br/>string seriesName,<br/>string valuesRange,<br/>string categoryLabelsRange,<br/>int topRow = 8,<br/>int leftColumn = 1,<br/>int bottomRow = 23,<br/>int rightColumn = 8,<br/>string? outputFilePath = null) | Creates a chart and adds a named series with values and category labels. Returns the chart index. |
| AddSeriesToChart | AddSeriesToChart(<br/>string workbookIdOrFilePath,<br/>string worksheetName,<br/>int chartIndex,<br/>string seriesName,<br/>string valuesRange,<br/>string categoryLabelsRange,<br/>string? outputFilePath = null) | Adds a new series to an existing chart. |
| SetChartElement | SetChartElement(<br/>string workbookIdOrFilePath,<br/>string worksheetName,<br/>int chartIndex,<br/>int seriesIndex,<br/>string title,<br/>bool hasLegend,<br/>string position = "Bottom",<br/>bool showValue = true,<br/>bool showCategoryName = false,<br/>bool showSeriesName = false,<br/>string dataLabelPosition = "Outside",<br/>string? categoryAxisTitle = null,<br/>string? valueAxisTitle = null,<br/>string? outputFilePath = null) | Sets chart elements including title, legend, data labels, and axis titles. `position` (legend): `Bottom`, `Top`, `Left`, `Right`, `Corner`. `dataLabelPosition`: `Outside`, `Inside`, `Center`, etc. |


**ExcelConditionalFormattingAgentTools**

Provides tools to add or remove conditional formatting in workbook

| Tool | Syntax | Description |
|---|---|---|
| AddConditionalFormat | AddConditionalFormat(<br/>string workbookIdOrFilePath,<br/>string worksheetName,<br/>string rangeAddress,<br/>string formatType,<br/>string? operatorType = null,<br/>string? firstFormula = null,<br/>string? secondFormula = null,<br/>string? backColor = null,<br/>bool? isBold = null,<br/>bool? isItalic = null,<br/>string? outputFilePath = null) | Adds conditional formatting to a cell or range. `formatType` values: `CellValue`, `Formula`, `DataBar`, `ColorScale`, `IconSet`. |


**ExcelConversionAgentTools**

Provides tools to convert worksheet to image, HTML, ODS, JSON file formats

| Tool | Syntax | Description |
|---|---|---|
| ConvertWorksheetToImage | ConvertWorksheetToImage(<br/>string workbookIdOrFilePath,<br/>string worksheetName,<br/>string rangeAddress,<br/>string outputPath,<br/>string imageFormat = "PNG",<br/>string scalingMode = "Best") | Converts an entire worksheet to an image file. Supports PNG, JPEG, BMP, GIF, and TIFF formats. |
| ConvertChartToImage | ConvertChartToImage(<br/>string workbookIdOrFilePath,<br/>string worksheetName,<br/>int chartIndex,<br/>string outputPath,<br/>string imageFormat = "PNG",<br/>string scalingMode = "Best") | Converts an Excel chart to an image file. Supports PNG and JPEG formats. |
| ConvertWorkbook | ConvertWorkbook(<br/>string workbookIdOrFilePath,<br/>string outputPath,<br/>string? formatType = "xlsx") | Converts the workbook to the file system in the specified format. Works only in DocumentStorage mode. workbookIdOrFilePath: The input file path from storage. Supported formats: xls, xlsx, xlsm |
| ConvertWorkbookToHtml | ConvertWorkbookToHtml(<br/>string workbookIdOrFilePath,<br/>string outputPath,<br/>string textMode = "DisplayText") | Converts an entire Excel workbook to an HTML file with styles, hyperlinks, images, and charts preserved. |
| ConvertWorksheetToHtml | ConvertWorksheetToHtml(<br/>string workbookIdOrFilePath,<br/>string worksheetName,<br/>string outputPath,<br/>string textMode = "DisplayText") | Converts a specific Excel worksheet to an HTML file with styles, hyperlinks, images, and charts preserved. |
| ConvertWorkbookToJson | ConvertWorkbookToJson(<br/>string workbookIdOrFilePath,<br/>string outputPath,<br/>bool includeSchema = true) | Converts an entire workbook to JSON format with optional schema. |
| ConvertWorksheetToJson | ConvertWorksheetToJson(<br/>string workbookIdOrFilePath,<br/>string worksheetName,<br/>string outputPath,<br/>bool includeSchema = true) | Converts a specific worksheet to JSON format with optional schema. |
| ConvertRangeToJson | ConvertRangeToJson(<br/>string workbookIdOrFilePath,<br/>string worksheetName,<br/>string rangeAddress,<br/>string outputPath,<br/>bool includeSchema = true) | Converts a specific cell range to JSON format. |


**ExcelDataValidationAgentTools**

Provides tools to add data validation to workbook

| Tool | Syntax | Description |
|---|---|---|
| AddDropdownValidation | AddDropdownValidation(<br/>string workbookIdOrFilePath,<br/>string worksheetName,<br/>string rangeAddress,<br/>string sourceRange,<br/>string listValues,<br/>bool showErrorBox = true,<br/>string? errorTitle = null,<br/>string? errorMessage = null,<br/>bool showPromptBox = false,<br/>string? promptMessage = null,<br/>string? outputFilePath = null) | Adds a dropdown list data validation to a cell or range. List values are limited to 255 characters including separators. |
| AddNumberValidation | AddNumberValidation(<br/>string workbookIdOrFilePath,<br/>string worksheetName,<br/>string rangeAddress,<br/>string numberType,<br/>string comparisonOperator,<br/>string firstValue,<br/>string? secondValue = null,<br/>bool showErrorBox = true,<br/>string? errorTitle = null, <br/>string? errorMessage = null, <br/>bool showPromptBox = false,<br/>string? promptMessage = null,<br/>string? outputFilePath = null) | Adds number validation to a cell or range with specified comparison operator and values. |
| AddDateValidation | AddDateValidation(<br/>string workbookIdOrFilePath,<br/>string worksheetName,<br/>string rangeAddress,<br/>string comparisonOperator,<br/>string firstDate,<br/>string? secondDate = null,<br/>bool showErrorBox = true,<br/>string? errorTitle = null, <br/>string? errorMessage = null, <br/>bool showPromptBox = false,<br/>string? promptMessage = null,<br/>string? outputFilePath = null) | Adds date validation to a cell or range with specified comparison operator and dates. |
| AddTimeValidation | AddTimeValidation(<br/>string workbookIdOrFilePath,<br/>string worksheetName,<br/>string rangeAddress,<br/>string comparisonOperator,<br/>string firstTime,<br/>string? secondTime = null,<br/>bool showErrorBox = true,<br/>string? errorTitle = null, <br/>string? errorMessage = null, <br/>bool showPromptBox = false,<br/>string? promptMessage = null,<br/>string? outputFilePath = null) | Adds time validation to a cell or range with specified comparison operator and time values. Use 24-hour format like 10:00 or 18:30. |
| AddTextLengthValidation | AddTextLengthValidation(<br/>string workbookIdOrFilePath,<br/>string worksheetName,<br/>string rangeAddress,<br/>string comparisonOperator,<br/>string firstLength,<br/>string? secondLength = null,<br/>bool showErrorBox = true,<br/>string? errorTitle = null, <br/>string? errorMessage = null, <br/>bool showPromptBox = false,<br/>string? promptMessage = null,<br/>string? outputFilePath = null) | Adds text length validation to a cell or range with specified comparison operator and length values. |
| AddCustomValidation | AddCustomValidation(<br/>string workbookIdOrFilePath,<br/>string worksheetName,<br/>string rangeAddress,<br/>string formula,<br/>bool showErrorBox = true,<br/>string? errorTitle = null, <br/>string? errorMessage = null, <br/>bool showPromptBox = false,<br/>string? outputFilePath = null) | Adds custom formula-based validation to a cell or range. |


**ExcelPivotTableAgentTools**

Provides tools to create, edit pivot table in workbook

| Tool | Syntax | Description |
|---|---|---|
| CreatePivotTable | CreatePivotTable(<br/>string workbookIdOrFilePath,<br/>string dataWorksheetName,<br/>string dataRange,<br/>string pivotWorksheetName,<br/>string pivotTableName,<br/>string pivotLocation,<br/>string rowFieldIndices,<br/>string columnFieldIndices,<br/>int dataFieldIndex,<br/>string dataFieldCaption,<br/>string builtInStyle = "None",<br/>string subtotalType = "Sum",<br/>string? outputFilePath = null) | Creates a pivot table in the specified worksheet using a data range from a source worksheet. Supports row, column, and data (values) fields with a chosen aggregation function. `builtInStyle` options: `PivotStyleLight1-28`, `PivotStyleMedium1-28`, `PivotStyleDark1-28`, or `None`. `subtotalType` options: `Sum`, `Count`, `Average`, `Max`, `Min`, `Product`, `CountNumbs`, `StdDev`, `StdDevP`, `Var`, `VarP`. Only supported in XLSX format. |


## PowerPoint Tools

**PresentationDocumentAgentTools**

Provides core life cycle operations for PowerPoint presentations — creating, loading, exporting, and managing presentations in memory.

| Tool | Syntax | Description |
|---|---|---|
| LoadPresentation | LoadPresentation(<br/>string? filePath = null,<br/>string? password = null) | Creates an empty presentation in memory or loads an existing one from a file path. Returns the `documentId`. |
| GetAllPresentations | GetAllPresentations() | Returns all presentation IDs currently available in memory. |
| ExportPresentation | ExportPresentation(<br/>string documentId,<br/>string filePath,<br/>string format = "PPTX") | Exports a PowerPoint presentation to the file system. |
| RemovePresentation | RemovePresentation(<br/>string documentId) | Removes a specific presentation from memory by its ID. |
| SetActivePresentation | SetActivePresentation(<br/>string documentId) | Changes the active presentation context to the specified document ID. |



**PresentationOperationsAgentTools**

Provides merge and split and export as image operations for PowerPoint presentations.

| Tool | Syntax | Description |
|---|---|---|
| MergePresentations | MergePresentations(<br/>string documentIdOrFilePath ,<br/>string sourceDocumentIds,<br/>string pasteOption = "SourceFormatting",<br/>string? outputFilePath = null) | Merges multiple presentations into a destination presentation. |
| SplitPresentation | SplitPresentation(<br/>string documentIdOrFilePath,<br/>string splitRules,<br/>string pasteOption = "SourceFormatting",<br/>string? outputFilePath = null) | Splits a presentation by sections, layout type, or slide numbers (e.g., `"1,3,5"`). |
| ExportAsImage | ExportAsImage(<br/>string documentIdOrFilePath,<br/>string outputDirectory,<br/>string? imageFormat = "Png",<br/>int? startSlideIndex = null,<br/>int? endSlideIndex = null) | Exports presentation slides as PNG or JPEG images to the output directory. |


**PresentationSecurityAgentTools**

Provides password protection and encryption management for PowerPoint presentations.

| Tool | Syntax | Description |
|---|---|---|
| ProtectPresentation | ProtectPresentation(<br/>string documentIdOrFilePath,<br/>string password,<br/>string? outputFilePath = null) | Write-protects a PowerPoint presentation with a password. |
| EncryptPresentation | EncryptPresentation(<br/>string documentIdOrFilePath,<br/>string password,<br/>string? outputFilePath = null) | Encrypts a PowerPoint presentation with a password. |
| UnprotectPresentation | UnprotectPresentation(<br/>string documentIdOrFilePath,<br/>string? outputFilePath = null) | Removes write protection from a presentation. |
| DecryptPresentation | DecryptPresentation(<br/>string documentIdOrFilePath,<br/>string password,<br/>string? outputFilePath = null) | Removes encryption from a presentation. |


**PresentationContentAgentTools**

Provides tools for reading content and metadata from PowerPoint presentations.

| Tool | Syntax | Description |
|---|---|---|
| GetText | GetText(<br/>string? documentIdOrFilePath) | Extracts all text content from a presentation. |
| GetSlideCount | GetSlideCount(<br/>string documentIdOrFilePath) | Returns the number of slides in the presentation. |


**PresentationFindAndReplaceAgentTools**

Provides text search and replacement across all slides in a PowerPoint presentation.

| Tool | Syntax | Description |
|---|---|---|
| FindAndReplace | FindAndReplace(<br/>string documentIdOrFilePath,<br/>string[] findTexts,<br/>string[] replaceTexts,<br/>bool matchCase = false,<br/>bool wholeWord = false,<br/>string? outputFilePath = null) | Finds and replaces all occurrences of the specified text across all slides in the presentation. |
| FindAndReplaceByPattern | FindAndReplaceByPattern(<br/>string documentIdOrFilePath,<br/>string regexPattern,<br/>string replaceText,<br/>string? outputFilePath = null) | Finds and replaces text that matches a regex pattern across all slides (e.g., `{[A-Za-z]+}`). |


## PDF Conversion Tools

**OfficeToPdfAgentTools**

Provides conversion of Word, Excel, and PowerPoint documents to PDF format.

| Tool | Syntax | Description |
|---|---|---|
| ConvertToPDF | ConvertToPDF(<br/>string sourceDocumentIdOrFilePath,<br/>string sourceType,<br/>string? outputFilePath = null) | Converts a Word, Excel, or PowerPoint document to PDF. `sourceType` must be `Word`, `Excel`, or `PowerPoint`. |


## Data Extraction Tools

**DataExtractionAgentTools**

Provides AI-powered structured data extraction from PDF documents and images, returning results as JSON.

| Tool | Syntax | Description |
|---|---|---|
| ExtractDataAsJSON | ExtractDataAsJSON(<br/>string inputFilePath,<br/>bool enableFormDetection = true,<br/>bool enableTableDetection = true,<br/>double confidenceThreshold = 0.6,<br/>int startPage = -1,<br/>int endPage = -1,<br/>bool detectSignatures = true,<br/>bool detectTextboxes = true,<br/>bool detectCheckboxes = true,<br/>bool detectRadioButtons = true,<br/>bool detect_Border_less_Tables = true,<br/>string? outputFilePath = null) | Extracts structured data (text, forms, tables, checkboxes, signatures) from a PDF or image file and returns the result as JSON. |
| ExtractTableAsJSON | ExtractTableAsJSON(<br/>string inputFilePath,<br/>bool detect_Border_less_Tables = true,<br/>double confidenceThreshold = 0.6,<br/>int startPage = -1,<br/>int endPage = -1,<br/>string? outputFilePath = null) | Extracts only table data from a PDF document and returns the result as JSON. Optimized for table-focused extraction. |
| RecognizeFormAsJson | RecognizeFormAsJson(<br/>string inputFilePath,<br/>bool detectSignatures = true,<br/>bool detectTextboxes = true,<br/>bool detectCheckboxes = true,<br/>bool detectRadioButtons = true,<br/>double confidenceThreshold = 0.6,<br/>int startPage = -1,<br/>int endPage = -1,<br/>string? outputFilePath = null) | Extracts only form field data from a PDF document and returns as JSON. Optimized for form-focused recognition. |



## See Also

- [Overview](https://helpstaging.syncfusion.com/document-processing/ai-agent-tools/overview)
- [Getting Started](https://helpstaging.syncfusion.com/document-processing/ai-agent-tools/getting-started)
- [Customization](https://helpstaging.syncfusion.com/document-processing/ai-agent-tools/customization)
- [Example Prompts](https://helpstaging.syncfusion.com/document-processing/ai-agent-tools/example-prompts)
