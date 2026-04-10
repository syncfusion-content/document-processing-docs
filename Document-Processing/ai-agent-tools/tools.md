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
| MergePdfs | MergePdfs(<br/>string[] filePaths,<br/>string[]? passwords = null,<br/>bool mergeAccessibilityTags = false) | Concatenates multiple PDF files into a single PDF document. Returns the merged document ID. |
| SplitPdfs | SplitPdfs(<br/>string filePath,<br/>int[,]? pageRanges = null,<br/>bool splitTags = false) | Splits a single PDF into multiple PDFs by page ranges. Returns the output folder path. |
| CompressPdf | CompressPdf(<br/>string documentId,<br/>bool compressImage = true,<br/>bool optimizePageContent = true,<br/>bool optimizeFont = true,<br/>bool removeMetadata = true,<br/>int imageQuality = 50) | Optimizes a PDF by compressing images, reducing content stream size, and optionally removing metadata. |


**PdfSecurityAgentTools**

Provides encryption, decryption, and permissions management for PDF documents.

| Tool | Syntax | Description |
|---|---|---|
| EncryptPdf | EncryptPdf(<br/>string documentId,<br/>string password,<br/>string encryptionAlgorithm = "AES",<br/>string keySize = "256") | Protects a PDF document with a password using the specified encryption algorithm and key size. |
| DecryptPdf | DecryptPdf(<br/>string documentId) | Removes encryption from a protected PDF document. |
| SetPermissions | SetPermissions(<br/>string documentId,<br/>string permissions) | Sets document permissions (e.g., Print, CopyContent, EditContent). |
| RemovePermissions | RemovePermissions(<br/>string documentId) | Removes all document-level permissions from a PDF. |


**PdfContentExtractionAgentTools**

Provides tools for extracting text, images, and tables from PDF documents.

| Tool | Syntax | Description |
|---|---|---|
| ExtractText | ExtractText(<br/>string documentId,<br/>int startPageIndex = -1,<br/>int endPageIndex = -1) | Extracts text content from a PDF document across a specified page range, or from all pages if no range is given. |
| ExtractImages | ExtractImages(<br/>string documentId,<br/>int startPageIndex = -1,<br/>int endPageIndex = -1) | Extracts embedded images from a PDF document across a specified page range. |
| ExtractTables | ExtractTables(<br/>string documentId,<br/>int startPageIndex = -1,<br/>int endPageIndex = -1) | Extracts tables from a PDF document across a specified page range and returns the result as JSON. |


**PdfAnnotationAgentTools**

Provides tools for watermarking, digitally signing, and adding or removing annotations in PDF documents.

| Tool | Syntax | Description |
|---|---|---|
| WatermarkPdf | WatermarkPdf(<br/>string documentId,<br/>string watermarkText,<br/>int rotation = 45,<br/>float locationX = -1,<br/>float locationY = -1) | Applies a text watermark to all pages of a PDF document. |
| SignPdf | SignPdf(<br/>string documentId,<br/>string certificateFilePath,<br/>string certificatePassword,<br/>float boundsX,<br/>float boundsY,<br/>float boundsWidth,<br/>float boundsHeight,<br/>string? appearanceImagePath = null) | Digitally signs a PDF document using a PFX/certificate file. |
| AddAnnotation | AddAnnotation(<br/>string documentId,<br/>int pageIndex,<br/>string annotationType,<br/>float boundsX,<br/>float boundsY,<br/>float boundsWidth,<br/>float boundsHeight,<br/>string text) | Adds a `Text`, `Rectangle`, or `Circle` annotation to a PDF page at the specified position. |
| RemoveAnnotation | RemoveAnnotation(<br/>string documentId,<br/>int pageIndex,<br/>int annotationIndex) | Removes an annotation from a PDF page by its 0-based index. |

**PdfConverterAgentTools**

Provides tools to convert image, HTML to Pdf

| Tool | Syntax | Description |
|---|---|---|
| ConvertPdfToPdfA | ConvertPdfToPdfA(<br/>string documentId,<br/>PdfConformanceLevel conformanceLevel) | Converts a loaded PDF document to a PDF/A-compliant format. Supported conformance levels: `PdfA1B`, `PdfA2B`, `PdfA3B`, `Pdf_A4`, `Pdf_A4F`, `Pdf_A4E`. |
| ConvertHtmlToPdf | ConvertHtmlToPdf(<br/>string urlOrFilePath,<br/>int pageWidth = 825,<br/>int pageHeight = 1100) | Converts a webpage URL or a local HTML file to a PDF document with the specified page dimensions. Returns the new document ID. |
| ImageToPdf | ImageToPdf(<br/>string[] imageFiles,<br/>string imagePosition = "FitToPage",<br/>int pageWidth = 612,<br/>int pageHeight = 792) | Creates a PDF document from one or more image files. `imagePosition` values: `Stretch`, `Center`, `FitToPage`. Returns the new document ID. |

**PdfOcrAgentTools**

Provides tools to perform OCR on PDF

| Tool | Syntax | Description |
|---|---|---|
| OcrPdf | OcrPdf(<br/>string documentId,<br/>string language = "eng") | Performs Optical Character Recognition (OCR) on a scanned or image-based PDF document to make its content text-searchable. Supported language codes: `eng` (English), etc.|


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
| ExportAsImage | ExportAsImage(<br/>string documentId,<br/>string? imageFormat = "Png",<br/>int? startPageIndex = null,<br/>int? endPageIndex = null) | Exports Word document pages as PNG or JPEG images to the output directory. |



**WordOperationsAgentTools**

Provides merge, split, and compare operations for Word documents.

| Tool | Syntax | Description |
|---|---|---|
| MergeDocuments | MergeDocuments(<br/>string destinationDocumentId,<br/>string[] documentIdsOrFilePaths) | Merges multiple Word documents into a single destination document. |
| SplitDocument | SplitDocument(<br/>string documentId,<br/>string splitRules) | Splits a Word document into multiple documents based on split rules (e.g., sections, headings, bookmarks). |
| CompareDocuments | CompareDocuments(<br/>string originalDocumentId,<br/>string revisedDocumentId,<br/>string author,<br/>DateTime dateTime) | Compares two Word documents and marks differences as tracked changes in the original document. |



**WordSecurityAgentTools**

Provides password protection, encryption, and decryption for Word documents.

| Tool | Syntax | Description |
|---|---|---|
| ProtectDocument | ProtectDocument(<br/>string documentId,<br/>string password,<br/>string protectionType) | Protects a Word document with a password and protection type (e.g., `AllowOnlyReading`). |
| EncryptDocument | EncryptDocument(<br/>string documentId,<br/>string password) | Encrypts a Word document with a password. |
| UnprotectDocument | UnprotectDocument(<br/>string documentId,<br/>string password) | Removes protection from a Word document using the provided password. |
| DecryptDocument | DecryptDocument(<br/>string documentId) | Removes encryption from a Word document. |



**WordMailMergeAgentTools**

Provides mail merge operations for populating Word document templates with structured data.

| Tool | Syntax | Description |
|---|---|---|
| MailMerge | MailMerge(<br/>string documentId,<br/>string dataTableJson,<br/>bool removeEmptyFields = true,<br/>bool removeEmptyGroup = true) | Executes a mail merge on a Word document using a JSON-represented DataTable. |
| ExecuteMailMerge | ExecuteMailMerge(<br/>string documentId,<br/>string dataSourceJson,<br/>bool generateSeparateDocuments = false,<br/>bool removeEmptyFields = true) | Extended mail merge with an option to generate one output document per data record. Returns document IDs. |



**WordFindAndReplaceAgentTools**

Provides text search and replacement operations within Word documents.

| Tool | Syntax | Description |
|---|---|---|
| Find | Find(<br/>string documentId,<br/>string findWhat,<br/>bool matchCase = false,<br/>bool wholeWord = false) | Finds the first occurrence of the specified text in a Word document. |
| FindAll | FindAll(<br/>string documentId,<br/>string findWhat,<br/>bool matchCase = false,<br/>bool wholeWord = false) | Finds all occurrences of the specified text in a Word document. |
| Replace | Replace(<br/>string documentId,<br/>string findWhat,<br/>string replaceText,<br/>bool matchCase = false,<br/>bool wholeWord = false) | Replaces the first occurrence of the specified text in a Word document. |
| ReplaceAll | ReplaceAll(<br/>string documentId,<br/>string findWhat,<br/>string replaceText,<br/>bool matchCase = false,<br/>bool wholeWord = false) | Replaces all occurrences of the specified text in a Word document. Returns the count of replacements made. |


**WordRevisionAgentTools**

Provides tools to inspect and manage tracked changes (revisions) in Word documents.

| Tool | Syntax | Description |
|---|---|---|
| GetRevisions | GetRevisions(<br/>string documentId) | Gets all tracked change revisions from a Word document. |
| AcceptRevision | AcceptRevision(<br/>string documentId,<br/>int revisionIndex) | Accepts a specific tracked change by its 0-based index. |
| RejectRevision | RejectRevision(<br/>string documentId,<br/>int revisionIndex) | Rejects a specific tracked change by its 0-based index. |
| AcceptAllRevisions | AcceptAllRevisions(<br/>string documentId) | Accepts all tracked changes in the document and returns the count accepted. |
| RejectAllRevisions | RejectAllRevisions(<br/>string documentId) | Rejects all tracked changes in the document and returns the count rejected. |



**WordImportExportAgentTools**

Provides tools to import from and export Word documents to HTML and Markdown formats.

| Tool | Syntax | Description |
|---|---|---|
| ImportHtml | ImportHtml(<br/>string htmlContentOrFilePath,<br/>string? documentId = null) | Imports HTML content or an HTML file into a (new or existing) Word document. |
| ImportMarkdown | ImportMarkdown(<br/>string markdownContentOrFilePath,<br/>string? documentId = null) | Imports Markdown content or a Markdown file into a (new or existing) Word document. |
| GetHtml | GetHtml(<br/>string documentIdOrFilePath) | Returns the Word document content as an HTML string. |
| GetMarkdown | GetMarkdown(<br/>string documentIdOrFilePath) | Returns the Word document content as a Markdown string. |
| GetText | GetText(<br/>string documentIdOrFilePath) | Returns the Word document content as plain text. |



**WordFormFieldAgentTools**

Provides tools to read and write form field values in Word documents.

| Tool | Syntax | Description |
|---|---|---|
| GetFormData | GetFormData(<br/>string documentId) | Retrieves all form field data from a Word document as a key-value dictionary. |
| SetFormData | SetFormData(<br/>string documentId,<br/>Dictionary<string, object> data) | Sets multiple form field values in a Word document from a dictionary. |
| GetFormField | GetFormField(<br/>string documentId,<br/>string fieldName) | Gets the value of a specific form field by name. |
| SetFormField | SetFormField(<br/>string documentId,<br/>string fieldName,<br/>object fieldValue) | Sets the value of a specific form field by name. |



**WordBookmarkAgentTools**

Provides tools to manage bookmarks and bookmark content within Word documents.

| Tool | Syntax | Description |
|---|---|---|
| GetBookmarks | GetBookmarks(<br/>string documentId) | Gets all bookmark names from a Word document. |
| GetContent | GetContent(<br/>string documentId,<br/>string bookmarkName) | Extracts the content inside a bookmark into a new document. Returns the new document ID. |
| ReplaceContent | ReplaceContent(<br/>string documentId,<br/>string bookmarkName,<br/>string replaceDocumentId) | Replaces bookmark content with content sourced from another document. |
| RemoveContent | RemoveContent(<br/>string documentId,<br/>string bookmarkName) | Removes the content inside a specific bookmark, leaving the bookmark itself intact. |
| RemoveBookmark | RemoveBookmark(<br/>string documentId,<br/>string bookmarkName) | Removes a named bookmark from a Word document. |


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
| CreateWorksheet | CreateWorksheet(<br/>string workbookId,<br/>string? sheetName = null) | Creates a new worksheet inside the specified workbook. |
| DeleteWorksheet | DeleteWorksheet(<br/>string workbookId,<br/>string worksheetName) | Deletes a worksheet from the workbook. |



**ExcelSecurityAgentTools**

Provides encryption, decryption, and protection management for Excel workbooks and worksheets.

| Tool | Syntax | Description |
|---|---|---|
| EncryptWorkbook | EncryptWorkbook(<br/>string workbookId,<br/>string password) | Encrypts an Excel workbook with a password. |
| DecryptWorkbook | DecryptWorkbook(<br/>string workbookId,<br/>string password) | Removes encryption from an Excel workbook using the provided password. |
| ProtectWorkbook | ProtectWorkbook(<br/>string workbookId,<br/>string password) | Protects the workbook structure (sheets) with a password. |
| UnprotectWorkbook | UnprotectWorkbook(<br/>string workbookId,<br/>string password) | Removes workbook structure protection. |
| ProtectWorksheet | ProtectWorksheet(<br/>string workbookId,<br/>string worksheetName,<br/>string password) | Protects a specific worksheet from editing using a password. |
| UnprotectWorksheet | UnprotectWorksheet(<br/>string workbookId,<br/>string worksheetName,<br/>string password) | Removes protection from a specific worksheet. |



**ExcelChartAgentTools**

Provides tools to create modify and remove charts in excel workbooks

| Tool | Syntax | Description |
|---|---|---|
| CreateChart | CreateChart(<br/>string workbookId,<br/>string worksheetName,<br/>string chartType,<br/>string dataRange,<br/>bool isSeriesInRows = false,<br/>int topRow = 8,<br/>int leftColumn = 1,<br/>int bottomRow = 23,<br/>int rightColumn = 8) | Creates a chart from a data range in the worksheet. Supports many chart types (e.g., `Column_Clustered`, `Line`, `Pie`, `Bar_Clustered`). Returns the chart index. |
| CreateChartWithSeries | CreateChartWithSeries(<br/>string workbookId,<br/>string worksheetName,<br/>string chartType,<br/>string seriesName,<br/>string valuesRange,<br/>string categoryLabelsRange,<br/>int topRow = 8,<br/>int leftColumn = 1,<br/>int bottomRow = 23,<br/>int rightColumn = 8) | Creates a chart and adds a named series with values and category labels. Returns the chart index. |
| AddSeriesToChart | AddSeriesToChart(<br/>string workbookId,<br/>string worksheetName,<br/>int chartIndex,<br/>string seriesName,<br/>string valuesRange,<br/>string categoryLabelsRange) | Adds a new series to an existing chart. |
| SetChartElement | SetChartElement(<br/>string workbookId,<br/>string worksheetName,<br/>int chartIndex,<br/>int seriesIndex,<br/>string title,<br/>bool hasLegend,<br/>string position = "Bottom",<br/>bool showValue = true,<br/>bool showCategoryName = false,<br/>bool showSeriesName = false,<br/>string dataLabelPosition = "Outside",<br/>string? categoryAxisTitle = null,<br/>string? valueAxisTitle = null) | Sets chart elements including title, legend, data labels, and axis titles. `position` (legend): `Bottom`, `Top`, `Left`, `Right`, `Corner`. `dataLabelPosition`: `Outside`, `Inside`, `Center`, etc. |


**ExcelConditionalFormattingAgentTools**

Provides tools to add or remove conditional formatting in workbook

| Tool | Syntax | Description |
|---|---|---|
| AddConditionalFormat | AddConditionalFormat(<br/>string workbookId,<br/>string worksheetName,<br/>string rangeAddress,<br/>string formatType,<br/>string? operatorType = null,<br/>string? firstFormula = null,<br/>string? secondFormula = null,<br/>string? backColor = null,<br/>bool? isBold = null,<br/>bool? isItalic = null) | Adds conditional formatting to a cell or range. `formatType` values: `CellValue`, `Formula`, `DataBar`, `ColorScale`, `IconSet`. |


**ExcelConversionAgentTools**

Provides tools to convert worksheet to image, HTML, ODS, JSON file formats

| Tool | Syntax | Description |
|---|---|---|
| ConvertWorksheetToImage | ConvertWorksheetToImage(<br/>string workbookId,<br/>string worksheetName,<br/>string rangeAddress,<br/>string outputPath,<br/>string imageFormat = "PNG",<br/>string scalingMode = "Best") | Converts an entire worksheet to an image file. Supports PNG, JPEG, BMP, GIF, and TIFF formats. |
| ConvertChartToImage | ConvertChartToImage(<br/>string workbookId,<br/>string worksheetName,<br/>int chartIndex,<br/>string outputPath,<br/>string imageFormat = "PNG",<br/>string scalingMode = "Best") | Converts an Excel chart to an image file. Supports PNG and JPEG formats. |
| ConvertWorkbookToHtml | ConvertWorkbookToHtml(<br/>string workbookId,<br/>string outputPath,<br/>string textMode = "DisplayText") | Converts an entire Excel workbook to an HTML file with styles, hyperlinks, images, and charts preserved. |
| ConvertWorksheetToHtml | ConvertWorksheetToHtml(<br/>string workbookId,<br/>string worksheetName,<br/>string outputPath,<br/>string textMode = "DisplayText") | Converts a specific Excel worksheet to an HTML file with styles, hyperlinks, images, and charts preserved. |
| ConvertWorkbookToJson | ConvertWorkbookToJson(<br/>string workbookId,<br/>string outputPath,<br/>bool includeSchema = true) | Converts an entire workbook to JSON format with optional schema. |
| ConvertWorksheetToJson | ConvertWorksheetToJson(<br/>string workbookId,<br/>string worksheetName,<br/>string outputPath,<br/>bool includeSchema = true) | Converts a specific worksheet to JSON format with optional schema. |
| ConvertRangeToJson | ConvertRangeToJson(<br/>string workbookId,<br/>string worksheetName,<br/>string rangeAddress,<br/>string outputPath,<br/>bool includeSchema = true) | Converts a specific cell range to JSON format. |


**ExcelDataValidationAgentTools**

Provides tools to add data validation to workbook

| Tool | Syntax | Description |
|---|---|---|
| AddDropdownValidation | AddDropdownValidation(<br/>string workbookId,<br/>string worksheetName,<br/>string rangeAddress,<br/>string sourceRange,<br/>string listValues,<br/>bool showErrorBox = true,<br/>string? errorTitle = null,<br/>string? errorMessage = null,<br/>bool showPromptBox = false,<br/>string? promptMessage = null) | Adds a dropdown list data validation to a cell or range. List values are limited to 255 characters including separators. |
| AddNumberValidation | AddNumberValidation(<br/>string workbookId,<br/>string worksheetName,<br/>string rangeAddress,<br/>string numberType,<br/>string comparisonOperator,<br/>string firstValue,<br/>string? secondValue = null,<br/>bool showErrorBox = true,<br/>string? errorTitle = null, <br/>string? errorMessage = null, <br/>bool showPromptBox = false) | Adds number validation to a cell or range with specified comparison operator and values. |
| AddDateValidation | AddDateValidation(<br/>string workbookId,<br/>string worksheetName,<br/>string rangeAddress,<br/>string comparisonOperator,<br/>string firstDate,<br/>string? secondDate = null,<br/>bool showErrorBox = true,<br/>string? errorTitle = null, <br/>string? errorMessage = null, <br/>bool showPromptBox = false) | Adds date validation to a cell or range with specified comparison operator and dates. |
| AddTimeValidation | AddTimeValidation(<br/>string workbookId,<br/>string worksheetName,<br/>string rangeAddress,<br/>string comparisonOperator,<br/>string firstTime,<br/>string? secondTime = null,<br/>bool showErrorBox = true,<br/>string? errorTitle = null, <br/>string? errorMessage = null, <br/>bool showPromptBox = false) | Adds time validation to a cell or range with specified comparison operator and time values. Use 24-hour format like 10:00 or 18:30. |
| AddTextLengthValidation | AddTextLengthValidation(<br/>string workbookId,<br/>string worksheetName,<br/>string rangeAddress,<br/>string comparisonOperator,<br/>string firstLength,<br/>string? secondLength = null,<br/>bool showErrorBox = true,<br/>string? errorTitle = null, <br/>string? errorMessage = null, <br/>bool showPromptBox = false) | Adds text length validation to a cell or range with specified comparison operator and length values. |
| AddCustomValidation | AddCustomValidation(<br/>string workbookId,<br/>string worksheetName,<br/>string rangeAddress,<br/>string formula,<br/>bool showErrorBox = true,<br/>string? errorTitle = null, <br/>string? errorMessage = null, <br/>bool showPromptBox = false) | Adds custom formula-based validation to a cell or range. |


**ExcelPivotTableAgentTools**

Provides tools to create, edit pivot table in workbook

| Tool | Syntax | Description |
|---|---|---|
| CreatePivotTable | CreatePivotTable(<br/>string workbookId,<br/>string dataWorksheetName,<br/>string dataRange,<br/>string pivotWorksheetName,<br/>string pivotTableName,<br/>string pivotLocation,<br/>string rowFieldIndices,<br/>string columnFieldIndices,<br/>int dataFieldIndex,<br/>string dataFieldCaption,<br/>string builtInStyle = "None",<br/>string subtotalType = "Sum") | Creates a pivot table in the specified worksheet using a data range from a source worksheet. Supports row, column, and data (values) fields with a chosen aggregation function. `builtInStyle` options: `PivotStyleLight1-28`, `PivotStyleMedium1-28`, `PivotStyleDark1-28`, or `None`. `subtotalType` options: `Sum`, `Count`, `Average`, `Max`, `Min`, `Product`, `CountNumbs`, `StdDev`, `StdDevP`, `Var`, `VarP`. Only supported in XLSX format. |


## PowerPoint Tools

**PresentationDocumentAgentTools**

Provides core life cycle operations for PowerPoint presentations — creating, loading, exporting, and managing presentations in memory.

| Tool | Syntax | Description |
|---|---|---|
| LoadPresentation | LoadPresentation(<br/>string? filePath = null,<br/>string? password = null) | Creates an empty presentation in memory or loads an existing one from a file path. Returns the `documentId`. |
| GetAllPresentations | GetAllPresentations() | Returns all presentation IDs currently available in memory. |
| ExportPresentation | ExportPresentation(<br/>string documentId,<br/>string filePath,<br/>string format = "PPTX") | Exports a PowerPoint presentation to the file system. |
| ExportAsImage | ExportAsImage(<br/>string documentId,<br/>string? imageFormat = "Png",<br/>int? startSlideIndex = null,<br/>int? endSlideIndex = null) | Exports presentation slides as PNG or JPEG images to the output directory. |
| RemovePresentation | RemovePresentation(<br/>string documentId) | Removes a specific presentation from memory by its ID. |
| SetActivePresentation | SetActivePresentation(<br/>string documentId) | Changes the active presentation context to the specified document ID. |



**PresentationOperationsAgentTools**

Provides merge and split operations for PowerPoint presentations.

| Tool | Syntax | Description |
|---|---|---|
| MergePresentations | MergePresentations(<br/>string destinationDocumentId,<br/>string sourceDocumentIds,<br/>string pasteOption = "SourceFormatting") | Merges multiple presentations into a destination presentation. Accepts comma-separated source document IDs or file paths. |
| SplitPresentation | SplitPresentation(<br/>string documentId,<br/>string splitRules,<br/>string pasteOption = "SourceFormatting") | Splits a presentation by sections, layout type, or slide numbers (e.g., `"1,3,5"`). Returns the resulting document IDs. |


**PresentationSecurityAgentTools**

Provides password protection and encryption management for PowerPoint presentations.

| Tool | Syntax | Description |
|---|---|---|
| ProtectPresentation | ProtectPresentation(<br/>string documentId,<br/>string password) | Write-protects a PowerPoint presentation with a password. |
| EncryptPresentation | EncryptPresentation(<br/>string documentId,<br/>string password) | Encrypts a PowerPoint presentation with a password. |
| UnprotectPresentation | UnprotectPresentation(<br/>string documentId) | Removes write protection from a presentation. |
| DecryptPresentation | DecryptPresentation(<br/>string documentId) | Removes encryption from a presentation. |


**PresentationContentAgentTools**

Provides tools for reading content and metadata from PowerPoint presentations.

| Tool | Syntax | Description |
|---|---|---|
| GetText | GetText(<br/>string? documentId = null,<br/>string? filePath = null) | Extracts all text content from a presentation by document ID or file path. |
| GetSlideCount | GetSlideCount(<br/>string documentId) | Returns the number of slides in the presentation. |


**PresentationFindAndReplaceAgentTools**

Provides text search and replacement across all slides in a PowerPoint presentation.

| Tool | Syntax | Description |
|---|---|---|
| FindAndReplace | FindAndReplace(<br/>string documentId,<br/>string findWhat,<br/>string replaceText,<br/>bool matchCase = false,<br/>bool wholeWord = false) | Finds and replaces all occurrences of the specified text across all slides in the presentation. |
| FindAndReplaceByPattern | FindAndReplaceByPattern(<br/>string documentId,<br/>string regexPattern,<br/>string replaceText) | Finds and replaces text that matches a regex pattern across all slides (e.g., `{[A-Za-z]+}`). |


## PDF Conversion Tools

**OfficeToPdfAgentTools**

Provides conversion of Word, Excel, and PowerPoint documents to PDF format.

| Tool | Syntax | Description |
|---|---|---|
| ConvertToPDF | ConvertToPDF(<br/>string sourceDocumentId,<br/>string sourceType) | Converts a Word, Excel, or PowerPoint document to PDF. `sourceType` must be `Word`, `Excel`, or `PowerPoint`. Returns the PDF document ID. |


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
