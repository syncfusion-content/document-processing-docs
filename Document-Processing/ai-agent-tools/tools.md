---
layout: post
title: Tools | AI Agent Tools | Syncfusion
description: Complete reference for all Syncfusion Document SDK Agent Tool classes — Repositories, PDF, Word, Excel, PowerPoint, Conversion, and Data Extraction tools.
platform: document-processing
control: AI Agent Tools
documentation: ug
---

# Syncfusion Document SDK Agent Tools

Agent Tools are the callable functions exposed to the AI agent. Each tool class is initialized with the appropriate repository.

Tools are organized into the following categories:

| Category | Tool Classes | Description |
|---|---|---|
| **PDF** | `PdfDocumentAgentTools`, `PdfOperationsAgentTools`, `PdfSecurityAgentTools`, `PdfContentExtractionAgentTools`, `PdfAnnotationAgentTools`,`PdfConverterAgentTools`,`PdfOcrAgentTools` | Create, manipulate, secure, extract content from, annotate, convert, and perform OCR on PDF documents. |
| **Word** | `WordDocumentAgentTools`, `WordOperationsAgentTools`, `WordSecurityAgentTools`, `WordMailMergeAgentTools`, `WordFindAndReplaceAgentTools`, `WordRevisionAgentTools`, `WordImportExportAgentTools`, `WordFormFieldAgentTools`, `WordBookmarkAgentTools` | Create, edit, protect, mail-merge, find/replace, track changes, import/export, and manage form fields and bookmarks in Word documents. |
| **Excel** | `ExcelWorkbookAgentTools`, `ExcelWorksheetAgentTools`, `ExcelSecurityAgentTools`, `ExcelFormulaAgentTools`, `ExcelChartAgentTools`, `ExcelConditionalFormattingAgentTools`, `ExcelConversionAgentTools`, `ExcelDataValidationAgentTools`, `ExcelPivotTableAgentTools` | Create and manage workbooks and worksheets, set cell values, formulas, and number formats, apply security, create and configure charts and sparklines, add conditional formatting, convert to image/HTML/ODS/JSON, manage data validation, and create and manipulate pivot tables. |
| **PowerPoint** | `PresentationDocumentAgentTools`, `PresentationOperationsAgentTools`, `PresentationSecurityAgentTools`, `PresentationContentAgentTools`, `PresentationFindAndReplaceAgentTools` | Load, merge, split, secure, and extract content from PowerPoint presentations. |
| **Conversion** | `OfficeToPdfAgentTools` | Convert Word, Excel, and PowerPoint documents to PDF. |
| **Data Extraction** | `DataExtractionAgentTools` | Extract structured data (text, tables, forms) from PDF and image files as JSON. |

---

## Repositories

Repositories are in-memory containers that manage document life cycles during AI agent operations. Each repository extends `DocumentRepositoryBase<TDocument>`, which provides common functionality including document creation, import/export, active document tracking, and automatic expiration-based cleanup.

**Available Repositories**

| Repository | Description |
|---|---|
| `WordDocumentRepository` | Manages Word documents in memory. Supports `.docx`, `.doc`, `.rtf`, `.html`, and `.txt` formats with auto-detection on import. |
| `ExcelWorkbookRepository` | Manages Excel workbooks in memory. Owns an `ExcelEngine` instance and implements `IDisposable` for proper resource cleanup. Supports `.xlsx`, `.xls`, `.xlsm`, and `.csv` on export. |
| `PdfDocumentRepository` | Manages PDF documents in memory. Supports both new `PdfDocument` instances and loaded `PdfLoadedDocument` instances, including password-protected files. |
| `PresentationRepository` | Manages PowerPoint presentations in memory. Supports creating new empty presentations and loading existing `.pptx` files, including password-protected ones. |

**DocumentRepositoryCollection**

`DocumentRepositoryCollection` is a centralized registry that holds one repository for each `DocumentType`. It is designed for tool classes that need to work across multiple document types within a single operation — specifically when the source and output documents belong to different repositories.

**Why it is needed:** Consider a Word-to-PDF conversion. The source Word document lives in `WordDocumentRepository`, but the resulting PDF must be stored in `PdfDocumentRepository`. Rather than hardcoding both repositories into the tool class, `OfficeToPdfAgentTools` accepts a `DocumentRepositoryCollection` and resolves the correct repository dynamically at runtime based on the `sourceType` argument.

> N> Tools that operate on a single document type (e.g., `WordDocumentAgentTools`, `PdfAnnotationAgentTools`) are initialized directly with their own repository. Only cross-format tools such as `OfficeToPdfAgentTools` require a `DocumentRepositoryCollection`.

## PDF Tools

**PdfDocumentAgentTools**

Provides core lifecycle operations for PDF documents — creating, loading, exporting, and managing PDF documents in memory.

| Tool | Syntax | Description |
|---|---|---|
| `CreatePdfDocument` | `CreatePdfDocument(string? filePath = null, string? password = null)` | Creates a new PDF document in memory or loads an existing one from a file path. Returns the `documentId`. |
| `GetAllPDFDocuments` | `GetAllPDFDocuments()` | Returns all PDF document IDs currently available in memory. |
| `ExportPDFDocument` | `ExportPDFDocument(string documentId, string filePath)` | Exports a PDF document from memory to the specified file path on the file system. |
| `RemovePdfDocument` | `RemovePdfDocument(string documentId)` | Removes a specific PDF document from memory by its ID. |
| `SetActivePdfDocument` | `SetActivePdfDocument(string documentId)` | Changes the active PDF document context to the specified document ID. |

**PdfOperationsAgentTools**

Provides merge, split, and compression operations for PDF documents.

| Tool | Syntax | Description |
|---|---|---|
| `MergePdfs` | `MergePdfs(string[] filePaths, string[]? passwords = null, bool mergeAccessibilityTags = false)` | Concatenates multiple PDF files into a single PDF document. Returns the merged document ID. |
| `SplitPdfs` | `SplitPdfs(string filePath, int[,]? pageRanges = null, bool splitTags = false)` | Splits a single PDF into multiple PDFs by page ranges. Returns the output folder path. |
| `CompressPdf` | `CompressPdf(string documentId, bool compressImage = true, bool optimizePageContent = true, bool optimizeFont = true, bool removeMetadata = true, int imageQuality = 50)` | Optimizes a PDF by compressing images, reducing content stream size, and optionally removing metadata. |


**PdfSecurityAgentTools**

Provides encryption, decryption, and permissions management for PDF documents.

| Tool | Syntax | Description |
|---|---|---|
| `EncryptPdf` | `EncryptPdf(string documentId, string password, string encryptionAlgorithm = "AES", string keySize = "256")` | Protects a PDF document with a password using the specified encryption algorithm and key size. |
| `DecryptPdf` | `DecryptPdf(string documentId)` | Removes encryption from a protected PDF document. |
| `SetPermissions` | `SetPermissions(string documentId, string permissions)` | Sets document permissions (e.g., `Print`, `CopyContent`, `EditContent`). |
| `RemovePermissions` | `RemovePermissions(string documentId)` | Removes all document-level permissions from a PDF. |


**PdfContentExtractionAgentTools**

Provides tools for extracting text, images, and tables from PDF documents.

| Tool | Syntax | Description |
|---|---|---|
| `ExtractText` | `ExtractText(string documentId, int startPageIndex = -1, int endPageIndex = -1)` | Extracts text content from a PDF document across a specified page range, or from all pages if no range is given. |
| `ExtractImages` | `ExtractImages(string documentId, int startPageIndex = -1, int endPageIndex = -1)` | Extracts embedded images from a PDF document across a specified page range. |
| `ExtractTables` | `ExtractTables(string documentId, int startPageIndex = -1, int endPageIndex = -1)` | Extracts tables from a PDF document across a specified page range and returns the result as JSON. |


**PdfAnnotationAgentTools**

Provides tools for watermarking, digitally signing, and adding or removing annotations in PDF documents.

| Tool | Syntax | Description |
|---|---|---|
| `WatermarkPdf` | `WatermarkPdf(string documentId, string watermarkText, int rotation = 45, float locationX = -1, float locationY = -1)` | Applies a text watermark to all pages of a PDF document. |
| `SignPdf` | `SignPdf(string documentId, string certificateFilePath, string certificatePassword, float boundsX, float boundsY, float boundsWidth, float boundsHeight, string? appearanceImagePath = null)` | Digitally signs a PDF document using a PFX/certificate file. |
| `AddAnnotation` | `AddAnnotation(string documentId, int pageIndex, string annotationType, float boundsX, float boundsY, float boundsWidth, float boundsHeight, string text)` | Adds a `Text`, `Rectangle`, or `Circle` annotation to a PDF page at the specified position. |
| `RemoveAnnotation` | `RemoveAnnotation(string documentId, int pageIndex, int annotationIndex)` | Removes an annotation from a PDF page by its 0-based index. |

**PdfConverterAgentTools**

| Tool | Syntax | Description |
|---|---|---|
| ConvertPdfToPdfA | `ConvertPdfToPdfA(string documentId, PdfConformanceLevel conformanceLevel)` | Converts a loaded PDF document to a PDF/A-compliant format. Supported conformance levels: `PdfA1B`, `PdfA2B`, `PdfA3B`, `Pdf_A4`, `Pdf_A4F`, `Pdf_A4E`. |
| ConvertHtmlToPdf | `ConvertHtmlToPdf(string urlOrFilePath, int pageWidth = 825, int pageHeight = 1100)` | Converts a webpage URL or a local HTML file to a PDF document with the specified page dimensions. Returns the new document ID. |
| ImageToPdf | `ImageToPdf(string[] imageFiles, string imagePosition = "FitToPage", int pageWidth = 612, int pageHeight = 792)` | Creates a PDF document from one or more image files. `imagePosition` values: `Stretch`, `Center`, `FitToPage`. Returns the new document ID. |

**PdfOcrAgentTools**

| Tool | Syntax | Description |
|---|---|---|
| OcrPdf | `OcrPdf(string documentId, string language = "eng")` | Performs Optical Character Recognition (OCR) on a scanned or image-based PDF document to make its content text-searchable. Supported language codes: `eng` (English), etc.|

---

## Word Tools

**WordDocumentAgentTools**

Provides core lifecycle operations for Word documents — creating, loading, exporting, and managing Word documents in memory.

| Tool | Syntax | Description |
|---|---|---|
| `CreateDocument` | `CreateDocument(string? filePath = null, string? password = null)` | Creates a new Word document in memory or loads an existing one from a file path. Returns the `documentId`. |
| `GetAllDocuments` | `GetAllDocuments()` | Returns all Word document IDs currently available in memory. |
| `ExportDocument` | `ExportDocument(string documentId, string filePath, string? formatType = "Docx")` | Exports a Word document to the file system. Supported formats: `Docx`, `Doc`, `Rtf`, `Html`, `Txt`. |
| `RemoveDocument` | `RemoveDocument(string documentId)` | Removes a specific Word document from memory by its ID. |
| `SetActiveDocument` | `SetActiveDocument(string documentId)` | Changes the active Word document context to the specified document ID. |
| `ExportAsImage` | `ExportAsImage(string documentId, string? imageFormat = "Png", int? startPageIndex = null, int? endPageIndex = null)` | Exports Word document pages as PNG or JPEG images to the output directory. |



**WordOperationsAgentTools**

Provides merge, split, and compare operations for Word documents.

| Tool | Syntax | Description |
|---|---|---|
| `MergeDocuments` | `MergeDocuments(string destinationDocumentId, string[] documentIdsOrFilePaths)` | Merges multiple Word documents into a single destination document. |
| `SplitDocument` | `SplitDocument(string documentId, string splitRules)` | Splits a Word document into multiple documents based on split rules (e.g., sections, headings, bookmarks). |
| `CompareDocuments` | `CompareDocuments(string originalDocumentId, string revisedDocumentId, string author, DateTime dateTime)` | Compares two Word documents and marks differences as tracked changes in the original document. |



**WordSecurityAgentTools**

Provides password protection, encryption, and decryption for Word documents.

| Tool | Syntax | Description |
|---|---|---|
| `ProtectDocument` | `ProtectDocument(string documentId, string password, string protectionType)` | Protects a Word document with a password and protection type (e.g., `AllowOnlyReading`). |
| `EncryptDocument` | `EncryptDocument(string documentId, string password)` | Encrypts a Word document with a password. |
| `UnprotectDocument` | `UnprotectDocument(string documentId, string password)` | Removes protection from a Word document using the provided password. |
| `DecryptDocument` | `DecryptDocument(string documentId)` | Removes encryption from a Word document. |



**WordMailMergeAgentTools**

Provides mail merge operations for populating Word document templates with structured data.

| Tool | Syntax | Description |
|---|---|---|
| `MailMerge` | `MailMerge(string documentId, string dataTableJson, bool removeEmptyFields = true, bool removeEmptyGroup = true)` | Executes a mail merge on a Word document using a JSON-represented DataTable. |
| `ExecuteMailMerge` | `ExecuteMailMerge(string documentId, string dataSourceJson, bool generateSeparateDocuments = false, bool removeEmptyFields = true)` | Extended mail merge with an option to generate one output document per data record. Returns document IDs. |



**WordFindAndReplaceAgentTools**

Provides text search and replacement operations within Word documents.

| Tool | Syntax | Description |
|---|---|---|
| `Find` | `Find(string documentId, string findWhat, bool matchCase = false, bool wholeWord = false)` | Finds the first occurrence of the specified text in a Word document. |
| `FindAll` | `FindAll(string documentId, string findWhat, bool matchCase = false, bool wholeWord = false)` | Finds all occurrences of the specified text in a Word document. |
| `Replace` | `Replace(string documentId, string findWhat, string replaceText, bool matchCase = false, bool wholeWord = false)` | Replaces the first occurrence of the specified text in a Word document. |
| `ReplaceAll` | `ReplaceAll(string documentId, string findWhat, string replaceText, bool matchCase = false, bool wholeWord = false)` | Replaces all occurrences of the specified text in a Word document. Returns the count of replacements made. |


**WordRevisionAgentTools**

Provides tools to inspect and manage tracked changes (revisions) in Word documents.

| Tool | Syntax | Description |
|---|---|---|
| `GetRevisions` | `GetRevisions(string documentId)` | Gets all tracked change revisions from a Word document. |
| `AcceptRevision` | `AcceptRevision(string documentId, int revisionIndex)` | Accepts a specific tracked change by its 0-based index. |
| `RejectRevision` | `RejectRevision(string documentId, int revisionIndex)` | Rejects a specific tracked change by its 0-based index. |
| `AcceptAllRevisions` | `AcceptAllRevisions(string documentId)` | Accepts all tracked changes in the document and returns the count accepted. |
| `RejectAllRevisions` | `RejectAllRevisions(string documentId)` | Rejects all tracked changes in the document and returns the count rejected. |



**WordImportExportAgentTools**

Provides tools to import from and export Word documents to HTML and Markdown formats.

| Tool | Syntax | Description |
|---|---|---|
| `ImportHtml` | `ImportHtml(string htmlContentOrFilePath, string? documentId = null)` | Imports HTML content or an HTML file into a (new or existing) Word document. |
| `ImportMarkdown` | `ImportMarkdown(string markdownContentOrFilePath, string? documentId = null)` | Imports Markdown content or a Markdown file into a (new or existing) Word document. |
| `GetHtml` | `GetHtml(string documentIdOrFilePath)` | Returns the Word document content as an HTML string. |
| `GetMarkdown` | `GetMarkdown(string documentIdOrFilePath)` | Returns the Word document content as a Markdown string. |
| `GetText` | `GetText(string documentIdOrFilePath)` | Returns the Word document content as plain text. |



**WordFormFieldAgentTools**

Provides tools to read and write form field values in Word documents.

| Tool | Syntax | Description |
|---|---|---|
| `GetFormData` | `GetFormData(string documentId)` | Retrieves all form field data from a Word document as a key-value dictionary. |
| `SetFormData` | `SetFormData(string documentId, Dictionary<string, object> data)` | Sets multiple form field values in a Word document from a dictionary. |
| `GetFormField` | `GetFormField(string documentId, string fieldName)` | Gets the value of a specific form field by name. |
| `SetFormField` | `SetFormField(string documentId, string fieldName, object fieldValue)` | Sets the value of a specific form field by name. |



**WordBookmarkAgentTools**

Provides tools to manage bookmarks and bookmark content within Word documents.

| Tool | Syntax | Description |
|---|---|---|
| `GetBookmarks` | `GetBookmarks(string documentId)` | Gets all bookmark names from a Word document. |
| `GetContent` | `GetContent(string documentId, string bookmarkName)` | Extracts the content inside a bookmark into a new document. Returns the new document ID. |
| `ReplaceContent` | `ReplaceContent(string documentId, string bookmarkName, string replaceDocumentId)` | Replaces bookmark content with content sourced from another document. |
| `RemoveContent` | `RemoveContent(string documentId, string bookmarkName)` | Removes the content inside a specific bookmark, leaving the bookmark itself intact. |
| `RemoveBookmark` | `RemoveBookmark(string documentId, string bookmarkName)` | Removes a named bookmark from a Word document. |

---

## Excel Tools

**ExcelWorkbookAgentTools**

Provides core lifecycle operations for Excel workbooks — creating, loading, exporting, and managing workbooks in memory.

| Tool | Syntax | Description |
|---|---|---|
| `CreateWorkbook` | `CreateWorkbook(string? filePath = null, string? password = null)` | Creates a new Excel workbook in memory or loads an existing one from a file path. Returns the `workbookId`. |
| `GetAllWorkbooks` | `GetAllWorkbooks()` | Returns all Excel workbook IDs currently available in memory. |
| `ExportWorkbook` | `ExportWorkbook(string workbookId, string filePath, string version = "XLSX")` | Exports an Excel workbook to the file system. Supported formats: `XLS`, `XLSX`, `XLSM`, `CSV`. |
| `RemoveWorkbook` | `RemoveWorkbook(string workbookId)` | Removes a specific workbook from memory by its ID. |
| `SetActiveWorkbook` | `SetActiveWorkbook(string workbookId)` | Changes the active workbook context to the specified workbook ID. |


**ExcelWorksheetAgentTools**

Provides tools to create, manage, and populate worksheets within Excel workbooks.

| Tool | Syntax | Description |
|---|---|---|
| `CreateWorksheet` | `CreateWorksheet(string workbookId, string? sheetName = null)` | Creates a new worksheet inside the specified workbook. |
| `GetWorksheets` | `GetWorksheets(string workbookId)` | Returns all worksheet names in a workbook. |
| `RenameWorksheet` | `RenameWorksheet(string workbookId, string oldName, string newName)` | Renames a worksheet in the workbook. |
| `DeleteWorksheet` | `DeleteWorksheet(string workbookId, string worksheetName)` | Deletes a worksheet from the workbook. |
| `SetValue` | `SetValue(string workbookId, string worksheetName, string cellAddress, string data)` | Assigns a data value to a cell (supports text, numbers, dates, and booleans). |



**ExcelSecurityAgentTools**

Provides encryption, decryption, and protection management for Excel workbooks and worksheets.

| Tool | Syntax | Description |
|---|---|---|
| `EncryptWorkbook` | `EncryptWorkbook(string workbookId, string password)` | Encrypts an Excel workbook with a password. |
| `DecryptWorkbook` | `DecryptWorkbook(string workbookId, string password)` | Removes encryption from an Excel workbook using the provided password. |
| `ProtectWorkbook` | `ProtectWorkbook(string workbookId, string password)` | Protects the workbook structure (sheets) with a password. |
| `UnprotectWorkbook` | `UnprotectWorkbook(string workbookId, string password)` | Removes workbook structure protection. |
| `ProtectWorksheet` | `ProtectWorksheet(string workbookId, string worksheetName, string password)` | Protects a specific worksheet from editing using a password. |
| `UnprotectWorksheet` | `UnprotectWorksheet(string workbookId, string worksheetName, string password)` | Removes protection from a specific worksheet. |



**ExcelFormulaAgentTools**

Provides tools to set, retrieve, calculate and validate cell formulas in Excel workbooks.

| Tool | Syntax | Description |
|---|---|---|
| `SetFormula` | `SetFormula(string workbookId, string worksheetName, string cellAddress, string formula)` | Assigns a formula to a cell in the worksheet (e.g., `=SUM(A1:A10)`). |
| `GetFormula` | `GetFormula(string workbookId, int worksheetIndex, string cellAddress)` | Retrieves the formula string from a specific cell. |
| `CalculateFormulas` | `CalculateFormulas(string workbookId)` | Forces recalculation of all formulas in the workbook. |
| `ValidateFormulas` | `ValidateFormulas(string workbookId)` | Validates all formulas in the workbook and returns any errors as JSON. |



**ExcelChartAgentTools**

Provides tools to create modify and remove charts in excel workbooks

| Tool | Syntax | Description |
|---|---|---|
| CreateChart | `CreateChart(string workbookId, string worksheetName, string chartType, string dataRange, bool isSeriesInRows = false, int topRow = 8, int leftColumn = 1, int bottomRow = 23, int rightColumn = 8)` | Creates a chart from a data range in the worksheet. Supports many chart types (e.g., `Column_Clustered`, `Line`, `Pie`, `Bar_Clustered`). Returns the chart index. |
| CreateChartWithSeries | `CreateChartWithSeries(string workbookId, string worksheetName, string chartType, string seriesName, string valuesRange, string categoryLabelsRange, int topRow = 8, int leftColumn = 1, int bottomRow = 23, int rightColumn = 8)` | Creates a chart and adds a named series with values and category labels. Returns the chart index. |
| AddSeriesToChart | `AddSeriesToChart(string workbookId, string worksheetName, int chartIndex, string seriesName, string valuesRange, string categoryLabelsRange)` | Adds a new series to an existing chart. |
| SetChartTitle | `SetChartTitle(string workbookId, string worksheetName, int chartIndex, string title)` | Sets the title text of a chart. |
| SetChartLegend | `SetChartLegend(string workbookId, string worksheetName, int chartIndex, bool hasLegend, string position = "Bottom")` | Configures the chart legend visibility and position (`Bottom`, `Top`, `Left`, `Right`, `Corner`). |
| SetDataLabels | `SetDataLabels(string workbookId, string worksheetName, int chartIndex, int seriesIndex, bool showValue = true, bool showCategoryName = false, bool showSeriesName = false, string position = "Outside")` | Configures data labels for a chart series. |
| SetChartPosition | `SetChartPosition(string workbookId, string worksheetName, int chartIndex, int topRow, int leftColumn, int bottomRow, int rightColumn)` | Sets the position and size of a chart in the worksheet. |
| SetAxisTitles | `SetAxisTitles(string workbookId, string worksheetName, int chartIndex, string? categoryAxisTitle = null, string? valueAxisTitle = null)` | Sets titles for the category (horizontal) and value (vertical) axes. |
| RemoveChart | `RemoveChart(string workbookId, string worksheetName, int chartIndex)` | Removes a chart from the worksheet by its 0-based index. |
| GetChartCount | `GetChartCount(string workbookId, string worksheetName)` | Returns the number of charts in a worksheet. |
| CreateSparkline | `CreateSparkline(string workbookId, string worksheetName, string sparklineType, string dataRange, string referenceRange)` | Creates sparkline charts in worksheet cells. Types: `Line`, `Column`, `WinLoss`. |


**ExcelConditionalFormattingAgentTools**

Provides tools to add or remove conditional formatting in workbook

| Tool | Syntax | Description |
|---|---|---|
| AddConditionalFormat | `AddConditionalFormat(string workbookId, string worksheetName, string rangeAddress, string formatType, string? operatorType = null, string? firstFormula = null, string? secondFormula = null, string? backColor = null, bool? isBold = null, bool? isItalic = null)` | Adds conditional formatting to a cell or range. `formatType` values: `CellValue`, `Formula`, `DataBar`, `ColorScale`, `IconSet`. |
| RemoveConditionalFormat | `RemoveConditionalFormat(string workbookId, string worksheetName, string rangeAddress)` | Removes all conditional formatting from a specified cell or range. |
| RemoveConditionalFormatAtIndex | `RemoveConditionalFormatAtIndex(string workbookId, string worksheetName, string rangeAddress, int index)` | Removes the conditional format at a specific 0-based index from a range. |


**ExcelConversionAgentTools**

Provides tools to convert worksheet to image, HTML, ODS, JSON file formats

| Tool | Syntax | Description |
|---|---|---|
| ConvertWorksheetToImage | `ConvertWorksheetToImage(string workbookId, string worksheetName, string outputPath, string imageFormat = "PNG", string scalingMode = "Best")` | Converts an entire worksheet to an image file (PNG, JPEG, BMP, GIF, TIFF). |
| ConvertRangeToImage | `ConvertRangeToImage(string workbookId, string worksheetName, string rangeAddress, string outputPath, string imageFormat = "PNG", string scalingMode = "Best")` | Converts a specific cell range to an image file. |
| ConvertRowColumnRangeToImage | `ConvertRowColumnRangeToImage(string workbookId, string worksheetName, int startRow, int startColumn, int endRow, int endColumn, string outputPath, string imageFormat = "PNG", string scalingMode = "Best")` | Converts a row/column range to an image using 1-based row and column numbers. |
| ConvertChartToImage | `ConvertChartToImage(string workbookId, string worksheetName, int chartIndex, string outputPath, string imageFormat = "PNG", string scalingMode = "Best")` | Converts a chart to an image file (PNG or JPEG). |
| ConvertAllChartsToImages | `ConvertAllChartsToImages(string workbookId, string worksheetName, string outputDirectory, string imageFormat = "PNG", string scalingMode = "Best", string fileNamePrefix = "Chart")` | Converts all charts in a worksheet to separate image files. |
| ConvertWorkbookToHtml | `ConvertWorkbookToHtml(string workbookId, string outputPath, string textMode = "DisplayText")` | Converts an entire workbook to an HTML file preserving styles, hyperlinks, images, and charts. |
| ConvertWorksheetToHtml | `ConvertWorksheetToHtml(string workbookId, string worksheetName, string outputPath, string textMode = "DisplayText")` | Converts a specific worksheet to an HTML file. |
| ConvertUsedRangeToHtml | `ConvertUsedRangeToHtml(string workbookId, string worksheetName, string outputPath, string textMode = "DisplayText", bool autofitColumns = true)` | Converts the used range of a worksheet to an HTML file with optional column auto-fitting. |
| ConvertAllWorksheetsToHtml | `ConvertAllWorksheetsToHtml(string workbookId, string outputDirectory, string textMode = "DisplayText", string fileNamePrefix = "Sheet")` | Converts all worksheets in a workbook to separate HTML files. |
| ConvertWorkbookToJson | `ConvertWorkbookToJson(string workbookId, string outputPath, bool includeSchema = true)` | Converts an entire workbook to JSON format with optional schema. |
| ConvertWorkbookToJsonStream | `ConvertWorkbookToJsonStream(string workbookId, string outputPath, bool includeSchema = true)` | Converts an entire workbook to JSON format using stream-based output. |
| ConvertWorksheetToJson | `ConvertWorksheetToJson(string workbookId, string worksheetName, string outputPath, bool includeSchema = true)` | Converts a specific worksheet to JSON format. |
| ConvertWorksheetToJsonStream | `ConvertWorksheetToJsonStream(string workbookId, string worksheetName, string outputPath, bool includeSchema = true)` | Converts a specific worksheet to JSON format using stream-based output. |
| ConvertRangeToJson | `ConvertRangeToJson(string workbookId, string worksheetName, string rangeAddress, string outputPath, bool includeSchema = true)` | Converts a specific cell range to JSON format. |
| ConvertRangeToJsonStream | `ConvertRangeToJsonStream(string workbookId, string worksheetName, string rangeAddress, string outputPath, bool includeSchema = true)` | Converts a specific cell range to JSON format using stream-based output. |


**ExcelDataValidationAgentTools**

Provides tools to add data validation to workbook

| Tool | Syntax | Description |
|---|---|---|
| AddDropdownListValidation | `AddDropdownListValidation(string workbookId, string worksheetName, string rangeAddress, string listValues, bool showErrorBox = true, string? errorTitle = null, string? errorMessage = null, bool showPromptBox = false, string? promptMessage = null)` | Adds a dropdown list data validation to a cell or range. `listValues` is comma-separated (max 255 chars). |
| AddDropdownFromRange | `AddDropdownFromRange(string workbookId, string worksheetName, string rangeAddress, string sourceRange, bool showErrorBox = true, string? errorTitle = null, string? errorMessage = null, bool showPromptBox = false, string? promptMessage = null)` | Adds a dropdown list validation using a reference range as the data source (e.g., `=Sheet1!$A$1:$A$10`). |
| AddNumberValidation | `AddNumberValidation(string workbookId, string worksheetName, string rangeAddress, string numberType, string comparisonOperator, string firstValue, string? secondValue = null, ...)` | Adds number validation (`Integer` or `Decimal`) with a comparison operator and value(s). |
| AddDateValidation | `AddDateValidation(string workbookId, string worksheetName, string rangeAddress, string comparisonOperator, string firstDate, string? secondDate = null, ...)` | Adds date validation using dates in `yyyy-MM-dd` format. |
| AddTimeValidation | `AddTimeValidation(string workbookId, string worksheetName, string rangeAddress, string comparisonOperator, string firstTime, string? secondTime = null, ...)` | Adds time validation using 24-hour `HH:mm` format. |
| AddTextLengthValidation | `AddTextLengthValidation(string workbookId, string worksheetName, string rangeAddress, string comparisonOperator, string firstLength, string? secondLength = null, ...)` | Adds text length validation with a comparison operator and length value(s). |
| AddCustomValidation | `AddCustomValidation(string workbookId, string worksheetName, string rangeAddress, string formula, ...)` | Adds custom formula-based validation (e.g., `=A1>10`). |
| RemoveValidation | `RemoveValidation(string workbookId, string worksheetName, string rangeAddress)` | Removes data validation from a cell or range. |
| RemoveAllValidations | `RemoveAllValidations(string workbookId, string worksheetName)` | Removes all data validations from a worksheet. |


**ExcelPivotTableAgentTools**

Provides tools to create, edit pivot table in workbook

| Tool | Syntax | Description |
|---|---|---|
| CreatePivotTable | `CreatePivotTable(string workbookId, string dataWorksheetName, string dataRange, string pivotWorksheetName, string pivotTableName, string pivotLocation, string rowFieldIndices, string columnFieldIndices, int dataFieldIndex, string dataFieldCaption, string subtotalType = "Sum")` | Creates a pivot table from a data range. Row/column field indices are comma-separated 0-based values. `subtotalType`: `Sum`, `Count`, `Average`, `Max`, `Min`, etc. XLSX only. |
| EditPivotTableCell | `EditPivotTableCell(string workbookId, string worksheetName, int pivotTableIndex, string cellAddress, string newValue)` | Lays out a pivot table and edits a specific cell value within the pivot area. |
| RemovePivotTable | `RemovePivotTable(string workbookId, string worksheetName, string pivotTableName)` | Removes a pivot table from a worksheet by name. |
| RemovePivotTableByIndex | `RemovePivotTableByIndex(string workbookId, string worksheetName, int pivotTableIndex)` | Removes a pivot table from a worksheet by its 0-based index. |
| GetPivotTables | `GetPivotTables(string workbookId, string worksheetName)` | Returns all pivot table names and their indices in the specified worksheet. |
| LayoutPivotTable | `LayoutPivotTable(string workbookId, string worksheetName, int pivotTableIndex, bool setRefreshOnLoad = true)` | Materializes pivot table values into worksheet cells, enabling reading and editing of pivot data. |
| RefreshPivotTable | `RefreshPivotTable(string workbookId, string worksheetName, int pivotTableIndex)` | Marks the pivot table cache to refresh when the file is opened in Excel. |
| ApplyPivotTableStyle | `ApplyPivotTableStyle(string workbookId, string worksheetName, int pivotTableIndex, string builtInStyle)` | Applies a built-in Excel style to a pivot table (e.g., `PivotStyleLight1`, `PivotStyleMedium2`, `PivotStyleDark12`, `None`). |
| FormatPivotTableCells | `FormatPivotTableCells(string workbookId, string worksheetName, int pivotTableIndex, string rangeAddress, string backColor)` | Applies a background color to a cell range within a pivot table area. |
| SortPivotTableTopToBottom | `SortPivotTableTopToBottom(string workbookId, string worksheetName, int pivotTableIndex, int rowFieldIndex, string sortType, int dataFieldIndex = 1)` | Sorts a pivot table row field top-to-bottom (`Ascending` or `Descending`) by data field values. |
| SortPivotTableLeftToRight | `SortPivotTableLeftToRight(string workbookId, string worksheetName, int pivotTableIndex, int columnFieldIndex, string sortType, int dataFieldIndex = 1)` | Sorts a pivot table column field left-to-right (`Ascending` or `Descending`) by data field values. |
| ApplyPivotPageFilter | `ApplyPivotPageFilter(string workbookId, string worksheetName, int pivotTableIndex, int pageFieldIndex, string hiddenItemIndices)` | Sets a pivot field as a page/report filter and hides specified items (comma-separated 0-based indices). |
| ApplyPivotLabelFilter | `ApplyPivotLabelFilter(string workbookId, string worksheetName, int pivotTableIndex, int fieldIndex, string filterType, string filterValue)` | Applies a caption/label filter to a pivot field (e.g., `CaptionEqual`, `CaptionBeginsWith`, `CaptionContains`). |
| ApplyPivotValueFilter | `ApplyPivotValueFilter(string workbookId, string worksheetName, int pivotTableIndex, int fieldIndex, string filterType, string filterValue)` | Applies a value-based filter to a pivot field (e.g., `ValueGreaterThan`, `ValueLessThan`, `ValueBetween`). |
| HidePivotFieldItems | `HidePivotFieldItems(string workbookId, string worksheetName, int pivotTableIndex, int fieldIndex, string hiddenItemIndices)` | Hides specified items within a pivot table row or column field by comma-separated 0-based indices. |


## PowerPoint Tools

**PresentationDocumentAgentTools**

Provides core life cycle operations for PowerPoint presentations — creating, loading, exporting, and managing presentations in memory.

| Tool | Syntax | Description |
|---|---|---|
| `LoadPresentation` | `LoadPresentation(string? filePath = null, string? password = null)` | Creates an empty presentation in memory or loads an existing one from a file path. Returns the `documentId`. |
| `GetAllPresentations` | `GetAllPresentations()` | Returns all presentation IDs currently available in memory. |
| `ExportPresentation` | `ExportPresentation(string documentId, string filePath, string format = "PPTX")` | Exports a PowerPoint presentation to the file system. |
| `ExportAsImage` | `ExportAsImage(string documentId, string? imageFormat = "Png", int? startSlideIndex = null, int? endSlideIndex = null)` | Exports presentation slides as PNG or JPEG images to the output directory. |
| `RemovePresentation` | `RemovePresentation(string documentId)` | Removes a specific presentation from memory by its ID. |
| `SetActivePresentation` | `SetActivePresentation(string documentId)` | Changes the active presentation context to the specified document ID. |



**PresentationOperationsAgentTools**

Provides merge and split operations for PowerPoint presentations.

| Tool | Syntax | Description |
|---|---|---|
| `MergePresentations` | `MergePresentations(string destinationDocumentId, string sourceDocumentIds, string pasteOption = "SourceFormatting")` | Merges multiple presentations into a destination presentation. Accepts comma-separated source document IDs or file paths. |
| `SplitPresentation` | `SplitPresentation(string documentId, string splitRules, string pasteOption = "SourceFormatting")` | Splits a presentation by sections, layout type, or slide numbers (e.g., `"1,3,5"`). Returns the resulting document IDs. |


**PresentationSecurityAgentTools**

Provides password protection and encryption management for PowerPoint presentations.

| Tool | Syntax | Description |
|---|---|---|
| `ProtectPresentation` | `ProtectPresentation(string documentId, string password)` | Write-protects a PowerPoint presentation with a password. |
| `EncryptPresentation` | `EncryptPresentation(string documentId, string password)` | Encrypts a PowerPoint presentation with a password. |
| `UnprotectPresentation` | `UnprotectPresentation(string documentId)` | Removes write protection from a presentation. |
| `DecryptPresentation` | `DecryptPresentation(string documentId)` | Removes encryption from a presentation. |


**PresentationContentAgentTools**

Provides tools for reading content and metadata from PowerPoint presentations.

| Tool | Syntax | Description |
|---|---|---|
| `GetText` | `GetText(string? documentId = null, string? filePath = null)` | Extracts all text content from a presentation by document ID or file path. |
| `GetSlideCount` | `GetSlideCount(string documentId)` | Returns the number of slides in the presentation. |


**PresentationFindAndReplaceAgentTools**

Provides text search and replacement across all slides in a PowerPoint presentation.

| Tool | Syntax | Description |
|---|---|---|
| `FindAndReplace` | `FindAndReplace(string documentId, string findWhat, string replaceText, bool matchCase = false, bool wholeWord = false)` | Finds and replaces all occurrences of the specified text across all slides in the presentation. |
| `FindAndReplaceByPattern` | `FindAndReplaceByPattern(string documentId, string regexPattern, string replaceText)` | Finds and replaces text that matches a regex pattern across all slides (e.g., `{[A-Za-z]+}`). |


## PDF Conversion Tools

**OfficeToPdfAgentTools**

Provides conversion of Word, Excel, and PowerPoint documents to PDF format.

| Tool | Syntax | Description |
|---|---|---|
| `ConvertToPDF` | `ConvertToPDF(string sourceDocumentId, string sourceType)` | Converts a Word, Excel, or PowerPoint document to PDF. `sourceType` must be `Word`, `Excel`, or `PowerPoint`. Returns the PDF document ID. |

**Example usage prompts:**
- *"Convert Simple.docx to PDF"*
- *"Load report.docx, convert it to PDF, and add a watermark"*
- *"Convert my Excel workbook to PDF format"*
- *"Convert this PowerPoint presentation to PDF and merge with existing PDFs"*

---

## Data Extraction Tools

**DataExtractionAgentTools**

Provides AI-powered structured data extraction from PDF documents and images, returning results as JSON.

| Tool | Syntax | Description |
|---|---|---|
| `ExtractDataAsJSON` | `ExtractDataAsJSON(string inputFilePath, bool enableFormDetection = true, bool enableTableDetection = true, double confidenceThreshold = 0.6, int startPage = -1, int endPage = -1, bool detectSignatures = true, bool detectTextboxes = true, bool detectCheckboxes = true, bool detectRadioButtons = true, bool detect_Border_less_Tables = true, string? outputFilePath = null)` | Extracts structured data (text, forms, tables, checkboxes, signatures) from a PDF or image file and returns the result as JSON. |
| `ExtractTableAsJSON` | `ExtractTableAsJSON(string inputFilePath, bool detect_Border_less_Tables = true, double confidenceThreshold = 0.6, int startPage = -1, int endPage = -1, string? outputFilePath = null)` | Extracts only table data from a PDF document and returns the result as JSON. Optimized for table-focused extraction. |

**ExtractDataAsJSON** — Parameter Details

| Parameter | Type | Default | Description |
|---|---|---|---|
| `inputFilePath` | `string` | *(required)* | Path to the input PDF or image file. |
| `enableFormDetection` | `bool` | `true` | Enables detection of form fields (text boxes, checkboxes, radio buttons). |
| `enableTableDetection` | `bool` | `true` | Enables detection and extraction of tables. |
| `confidenceThreshold` | `double` | `0.6` | Minimum confidence score (0.0–1.0) for including detected elements. |
| `startPage` | `int` | `-1` | Start page index (0-based). Use `-1` for the first page. |
| `endPage` | `int` | `-1` | End page index (0-based). Use `-1` for the last page. |
| `detectSignatures` | `bool` | `true` | Enables detection of signature fields. |
| `detectTextboxes` | `bool` | `true` | Enables detection of text box fields. |
| `detectCheckboxes` | `bool` | `true` | Enables detection of checkbox fields. |
| `detectRadioButtons` | `bool` | `true` | Enables detection of radio button fields. |
| `detect_Border_less_Tables` | `bool` | `true` | Enables detection of tables without visible borders. |
| `outputFilePath` | `string?` | `null` | Optional file path to save the JSON output. |

**Example usage prompts:**
- *"Extract all data from invoice.pdf as JSON"*
- *"Extract table data from financial_report.pdf"*
- *"Extract form fields from application.pdf including checkboxes and signatures"*
- *"Extract data from scanned_document.png"*
- *"Extract tables from pages 5–10 of report.pdf"*

---

## See Also

- [Overview](./overview.md)
- [Getting Started](./getting-started.md)
- [Customization](./customization.md)
