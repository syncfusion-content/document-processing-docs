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
<table>
<tr>
<th>Category</th>
<th>Tool Classes</th>
<th>Description</th>
</tr>
<tr>
<td><strong>PDF</strong></td>
<td>PdfDocumentAgentTools,<br/>PdfOperationsAgentTools,<br/>PdfSecurityAgentTools,<br/>PdfContentExtractionAgentTools,<br/>PdfAnnotationAgentTools,<br/>PdfConverterAgentTools,<br/>PdfOcrAgentTools</td>
<td>Create, manipulate, secure, extract content from, annotate, convert, and perform OCR on PDF documents.</td>
</tr>
<tr>
<td><strong>Word</strong></td>
<td>WordDocumentAgentTools,<br/>WordOperationsAgentTools,<br/>WordSecurityAgentTools,<br/>WordMailMergeAgentTools,<br/>WordFindAndReplaceAgentTools,<br/>WordRevisionAgentTools,<br/>WordImportExportAgentTools,<br/>WordFormFieldAgentTools,<br/>WordBookmarkAgentTools</td>
<td>Create, edit, protect, mail-merge, find/replace, track changes, import/export, and manage form fields and bookmarks in Word documents.</td>
</tr>
<tr>
<td><strong>Excel</strong></td>
<td>ExcelWorkbookAgentTools,<br/>ExcelWorksheetAgentTools,<br/>ExcelSecurityAgentTools,<br/>ExcelFormulaAgentTools,<br/>ExcelChartAgentTools,<br/>ExcelConditionalFormattingAgentTools,<br/>ExcelConversionAgentTools,<br/>ExcelDataValidationAgentTools,<br/>ExcelPivotTableAgentTools</td>
<td>Create and manage workbooks and worksheets, set cell values, formulas, and number formats, apply security, create and configure charts and sparklines, add conditional formatting, convert to image/HTML/JSON, manage data validation, and create and manipulate pivot tables.</td>
</tr>
<tr>
<td><strong>PowerPoint</strong></td>
<td>PresentationDocumentAgentTools,<br/>PresentationOperationsAgentTools,<br/>PresentationSecurityAgentTools,<br/>PresentationContentAgentTools,<br/>PresentationFindAndReplaceAgentTools</td>
<td>Load, merge, split, secure, and extract content from PowerPoint presentations.</td>
</tr>
<tr>
<td><strong>Conversion</strong></td>
<td>OfficeToPdfAgentTools</td>
<td>Convert Word, Excel, and PowerPoint documents to PDF.</td>
</tr>
<tr>
<td><strong>Data Extraction</strong></td>
<td>DataExtractionAgentTools</td>
<td>Extract structured data (text, tables, forms) from PDF and image files as JSON.</td>
</tr>
</table>


## Document Managers

Document Managers are in-memory containers that manage document life cycles during AI agent operations. They provide common functionality including document creation, import/export, active document tracking, and automatic expiration-based cleanup.

**Available Document Managers**

<table>
<tr>
<th>Document Manager</th>
<th>Description</th>
</tr>
<tr>
<td>WordDocumentManager</td>
<td>Manages Word documents in memory. Supports <code>.docx</code>, <code>.doc</code>, <code>.rtf</code>, <code>.html</code>,  and <code>.txt</code> formats with auto-detection on import.</td>
</tr>
<tr>
<td>ExcelWorkbookManager</td>
<td>Manages Excel workbooks in memory. Owns an <code>ExcelEngine</code> instance and implements <code>IDisposable</code> for proper resource cleanup. Supports <code>.xlsx</code>, <code>.xls</code>, <code>.xlsm</code>, and <code>.csv</code> on export.</td>
</tr>
<tr>
<td>PdfDocumentManager</td>
<td>Manages PDF documents in memory. Supports both new <code>PdfDocument</code> instances and loaded <code>PdfLoadedDocument</code> instances, including password-protected files.</td>
</tr>
<tr>
<td>PresentationManager</td>
<td>Manages PowerPoint presentations in memory. Supports creating new empty presentations and loading existing <code>.pptx</code> files, including password-protected ones.</td>
</tr>
</table>

**DocumentManagerCollection**

`DocumentManagerCollection` is a centralized registry that holds one document manager for each `DocumentType`. It is designed for tool classes that need to work across multiple document types within a single operation — specifically when the source and output documents belong to different document managers.

**Why it is needed:** Consider a Word-to-PDF conversion. The source Word document lives in `WordDocumentManager`, but the resulting PDF must be stored in `PdfDocumentManager`. Rather than hard coding both document managers into the tool class, `OfficeToPdfAgentTools` accepts a `DocumentManagerCollection` and detects the correct manager dynamically at runtime based on the `sourceType` argument.

> **Note:** Tools that operate on a single document type (e.g., `WordDocumentAgentTools`, `PdfAnnotationAgentTools`) are initialized directly with their own manager. Only cross-format tools such as `OfficeToPdfAgentTools` require a `DocumentManagerCollection`.

## PDF Tools

**PdfDocumentAgentTools**

Provides core life cycle operations for PDF documents — creating, loading, exporting, and managing PDF documents in memory.

<table>
<tr>
<th>Tool</th>
<th>Syntax</th>
<th>Description</th>
</tr>
<tr>
<td>CreatePdfDocument</td>
<td>CreatePdfDocument(<br/>string? filePath = null,<br/>string? password = null)</td>
<td>Creates a new PDF document in memory or loads an existing one from a file path. Returns the documentId.</td>
</tr>
<tr>
<td>GetAllPDFDocuments</td>
<td>GetAllPDFDocuments()</td>
<td>Returns all PDF document IDs currently available in memory.</td>
</tr>
<tr>
<td>ExportPDFDocument</td>
<td>ExportPDFDocument(<br/>string documentId,<br/>string filePath)</td>
<td>Exports a PDF document from memory to the specified file path on the file system.</td>
</tr>
<tr>
<td>RemovePdfDocument</td>
<td>RemovePdfDocument(<br/>string documentId)</td>
<td>Removes a specific PDF document from memory by its ID.</td>
</tr>
<tr>
<td>SetActivePdfDocument</td>
<td>SetActivePdfDocument(<br/>string documentId)</td>
<td>Changes the active PDF document context to the specified document ID.</td>
</tr>
</table>

**PdfOperationsAgentTools**

Provides merge, split, and compression operations for PDF documents.

<table>
<tr>
<th>Tool</th>
<th>Syntax</th>
<th>Description</th>
</tr>
<tr>
<td>MergePdfs</td>
<td>MergePdfs(<br/>string[] filePaths,<br/>string[]? passwords = null,<br/>bool mergeAccessibilityTags = false)</td>
<td>Concatenates multiple PDF files into a single PDF document. Returns the merged documentId.</td>
</tr>
<tr>
<td>SplitPdfs</td>
<td>SplitPdfs(<br/>string filePath,<br/>int[,]? pageRanges = null,<br/>bool splitTags = false)</td>
<td>Splits a single PDF into multiple PDFs by page ranges. Returns the output folder path.</td>
</tr>
<tr>
<td>CompressPdf</td>
<td>CompressPdf(<br/>string documentId,<br/>bool compressImage = true,<br/>bool optimizePageContent = true,<br/>bool optimizeFont = true,<br/>bool removeMetadata = true,<br/>int imageQuality = 50)</td>
<td>Optimizes a PDF by compressing images, reducing content stream size, and optionally removing metadata.</td>
</tr>
</table>


**PdfSecurityAgentTools**

Provides encryption, decryption, and permissions management for PDF documents.

<table>
<tr>
<th>Tool</th>
<th>Syntax</th>
<th>Description</th>
</tr>
<tr>
<td>EncryptPdf</td>
<td>EncryptPdf(<br/>string documentId,<br/>string password,<br/>string encryptionAlgorithm = "AES",<br/>string keySize = "256")</td>
<td>Protects a PDF document with a password using the specified encryption algorithm and key size.</td>
</tr>
<tr>
<td>DecryptPdf</td>
<td>DecryptPdf(<br/>string documentId)</td>
<td>Removes encryption from a protected PDF document.</td>
</tr>
<tr>
<td>SetPermissions</td>
<td>SetPermissions(<br/>string documentId,<br/>string permissions)</td>
<td>Sets document permissions (e.g., Print, CopyContent, EditContent).</td>
</tr>
<tr>
<td>RemovePermissions</td>
<td>RemovePermissions(<br/>string documentId)</td>
<td>Removes all document-level permissions from a PDF.</td>
</tr>
</table>


**PdfContentExtractionAgentTools**

Provides tools for extracting text, images, and tables from PDF documents.

<table>
<tr>
<th>Tool</th>
<th>Syntax</th>
<th>Description</th>
</tr>
<tr>
<td>ExtractText</td>
<td>ExtractText(<br/>string documentId,<br/>int startPageIndex = -1,<br/>int endPageIndex = -1)</td>
<td>Extracts text content from a PDF document across a specified page range, or from all pages if no range is given.</td>
</tr>
<tr>
<td>ExtractImages</td>
<td>ExtractImages(<br/>string documentId,<br/>int startPageIndex = -1,<br/>int endPageIndex = -1)</td>
<td>Extracts embedded images from a PDF document across a specified page range.</td>
</tr>
<tr>
<td>ExtractTables</td>
<td>ExtractTables(<br/>string documentId,<br/>int startPageIndex = -1,<br/>int endPageIndex = -1)</td>
<td>Extracts tables from a PDF document across a specified page range and returns the result as JSON.</td>
</tr>
</table>


**PdfAnnotationAgentTools**

Provides tools for watermarking, digitally signing, and adding or removing annotations in PDF documents.

<table>
<tr>
<th>Tool</th>
<th>Syntax</th>
<th>Description</th>
</tr>
<tr>
<td>WatermarkPdf</td>
<td>WatermarkPdf(<br/>string documentId,<br/>string watermarkText,<br/>int rotation = 45,<br/>float locationX = -1,<br/>float locationY = -1)</td>
<td>Applies a text watermark to all pages of a PDF document.</td>
</tr>
<tr>
<td>SignPdf</td>
<td>SignPdf(<br/>string documentId,<br/>string certificateFilePath,<br/>string certificatePassword,<br/>float boundsX,<br/>float boundsY,<br/>float boundsWidth,<br/>float boundsHeight,<br/>string? appearanceImagePath = null)</td>
<td>Digitally signs a PDF document using a PFX/certificate file.</td>
</tr>
<tr>
<td>AddAnnotation</td>
<td>AddAnnotation(<br/>string documentId,<br/>int pageIndex,<br/>string annotationType,<br/>float boundsX,<br/>float boundsY,<br/>float boundsWidth,<br/>float boundsHeight,<br/>string text)</td>
<td>Adds a <code>Text</code>, <code>Rectangle</code>, or <code>Circle</code> annotation to a PDF page at the specified position.</td>
</tr>
<tr>
<td>RemoveAnnotation</td>
<td>RemoveAnnotation(<br/>string documentId,<br/>int pageIndex,<br/>int annotationIndex)</td>
<td>Removes an annotation from a PDF page by its 0-based index.</td>
</tr>
</table>

**PdfConverterAgentTools**

Provides tools to convert image, HTML to Pdf

<table>
<tr>
<th>Tool</th>
<th>Syntax</th>
<th>Description</th>
</tr>
<tr>
<td>ConvertPdfToPdfA</td>
<td>ConvertPdfToPdfA(<br/>string documentId,<br/>PdfConformanceLevel conformanceLevel)</td>
<td>Converts a loaded PDF document to a PDF/A-compliant format. Supported conformance levels: <code>PdfA1B</code>, <code>PdfA2B</code>, <code>PdfA3B</code>, <code>Pdf_A4</code>, <code>Pdf_A4F</code>, <code>Pdf_A4E</code>.</td>
</tr>
<tr>
<td>ConvertHtmlToPdf</td>
<td>ConvertHtmlToPdf(<br/>string urlOrFilePath,<br/>int pageWidth = 825,<br/>int pageHeight = 1100)</td>
<td>Converts a webpage URL or a local HTML file to a PDF document with the specified page dimensions. Returns the new document ID.</td>
</tr>
<tr>
<td>ImageToPdf</td>
<td>ImageToPdf(<br/>string[] imageFiles,<br/>string imagePosition = "FitToPage",<br/>int pageWidth = 612,<br/>int pageHeight = 792)</td>
<td>Creates a PDF document from one or more image files. <code>imagePosition</code> values: <code>Stretch</code>, <code>Center</code>, <code>FitToPage</code>. Returns the new documentId.</td>
</tr>
</table>

**PdfOcrAgentTools**

Provides tools to perform OCR on PDF

<table>
<tr>
<th>Tool</th>
<th>Syntax</th>
<th>Description</th>
</tr>
<tr>
<td>OcrPdf</td>
<td>OcrPdf(<br/>string documentId,<br/>string language = "eng")</td>
<td>Performs Optical Character Recognition (OCR) on a scanned or image-based PDF document to make its content text-searchable. Supported language codes: <code>eng</code> (English), etc.</td>
</tr>
</table>


## Word Tools

**WordDocumentAgentTools**

Provides core life cycle operations for Word documents — creating, loading, exporting, and managing Word documents in memory.

<table>
<tr>
<th>Tool</th>
<th>Syntax</th>
<th>Description</th>
</tr>
<tr>
<td>CreateDocument</td>
<td>CreateDocument(<br/>string? filePath = null,<br/>string? password = null)</td>
<td>Creates a new Word document in memory or loads an existing one from a file path. Returns the <code>documentId</code>.</td>
</tr>
<tr>
<td>GetAllDocuments</td>
<td>GetAllDocuments()</td>
<td>Returns all Word document IDs currently available in memory.</td>
</tr>
<tr>
<td>ExportDocument</td>
<td>ExportDocument(<br/>string documentId,<br/>string filePath,<br/>string? formatType = "Docx")</td>
<td>Exports a Word document to the file system. Supported formats: <code>Docx</code>, <code>Doc</code>, <code>Rtf</code>, <code>Html</code>, <code>Txt</code>.</td>
</tr>
<tr>
<td>RemoveDocument</td>
<td>RemoveDocument(<br/>string documentId)</td>
<td>Removes a specific Word document from memory by its ID.</td>
</tr>
<tr>
<td>SetActiveDocument</td>
<td>SetActiveDocument(<br/>string documentId)</td>
<td>Changes the active Word document context to the specified document ID.</td>
</tr>
<tr>
<td>ExportAsImage</td>
<td>ExportAsImage(<br/>string documentId,<br/>string? imageFormat = "Png",<br/>int? startPageIndex = null,<br/>int? endPageIndex = null)</td>
<td>Exports Word document pages as PNG or JPEG images to the output directory.</td>
</tr>
</table>



**WordOperationsAgentTools**

Provides merge, split, and compare operations for Word documents.

<table>
<tr>
<th>Tool</th>
<th>Syntax</th>
<th>Description</th>
</tr>
<tr>
<td>MergeDocuments</td>
<td>MergeDocuments(<br/>string destinationDocumentId,<br/>string[] documentIdsOrFilePaths)</td>
<td>Merges multiple Word documents into a single destination document.</td>
</tr>
<tr>
<td>SplitDocument</td>
<td>SplitDocument(<br/>string documentId,<br/>string splitRules)</td>
<td>Splits a Word document into multiple documents based on split rules (e.g., sections, headings, bookmarks).</td>
</tr>
<tr>
<td>CompareDocuments</td>
<td>CompareDocuments(<br/>string originalDocumentId,<br/>string revisedDocumentId,<br/>string author,<br/>DateTime dateTime)</td>
<td>Compares two Word documents and marks differences as tracked changes in the original document.</td>
</tr>
</table>



**WordSecurityAgentTools**

Provides password protection, encryption, and decryption for Word documents.

<table>
<tr>
<th>Tool</th>
<th>Syntax</th>
<th>Description</th>
</tr>
<tr>
<td>ProtectDocument</td>
<td>ProtectDocument(<br/>string documentId,<br/>string password,<br/>string protectionType)</td>
<td>Protects a Word document with a password and protection type (e.g., <code>AllowOnlyReading</code>).</td>
</tr>
<tr>
<td>EncryptDocument</td>
<td>EncryptDocument(<br/>string documentId,<br/>string password)</td>
<td>Encrypts a Word document with a password.</td>
</tr>
<tr>
<td>UnprotectDocument</td>
<td>UnprotectDocument(<br/>string documentId,<br/>string password)</td>
<td>Removes protection from a Word document using the provided password.</td>
</tr>
<tr>
<td>DecryptDocument</td>
<td>DecryptDocument(<br/>string documentId)</td>
<td>Removes encryption from a Word document.</td>
</tr>
</table>



**WordMailMergeAgentTools**

Provides mail merge operations for populating Word document templates with structured data.

<table>
<tr>
<th>Tool</th>
<th>Syntax</th>
<th>Description</th>
</tr>
<tr>
<td>MailMerge</td>
<td>MailMerge(<br/>string documentId,<br/>string dataTableJson,<br/>bool removeEmptyFields = true,<br/>bool removeEmptyGroup = true)</td>
<td>Executes a mail merge on a Word document using a JSON-represented DataTable.</td>
</tr>
<tr>
<td>ExecuteMailMerge</td>
<td>ExecuteMailMerge(<br/>string documentId,<br/>string dataSourceJson,<br/>bool generateSeparateDocuments = false,<br/>bool removeEmptyFields = true)</td>
<td>Extended mail merge with an option to generate one output document per data record. Returns document IDs.</td>
</tr>
</table>



**WordFindAndReplaceAgentTools**

Provides text search and replacement operations within Word documents.

<table>
<tr>
<th>Tool</th>
<th>Syntax</th>
<th>Description</th>
</tr>
<tr>
<td>Find</td>
<td>Find(<br/>string documentId,<br/>string findWhat,<br/>bool matchCase = false,<br/>bool wholeWord = false)</td>
<td>Finds the first occurrence of the specified text in a Word document.</td>
</tr>
<tr>
<td>FindAll</td>
<td>FindAll(<br/>string documentId,<br/>string findWhat,<br/>bool matchCase = false,<br/>bool wholeWord = false)</td>
<td>Finds all occurrences of the specified text in a Word document.</td>
</tr>
<tr>
<td>Replace</td>
<td>Replace(<br/>string documentId,<br/>string findWhat,<br/>string replaceText,<br/>bool matchCase = false,<br/>bool wholeWord = false)</td>
<td>Replaces the first occurrence of the specified text in a Word document.</td>
</tr>
<tr>
<td>ReplaceAll</td>
<td>ReplaceAll(<br/>string documentId,<br/>string findWhat,<br/>string replaceText,<br/>bool matchCase = false,<br/>bool wholeWord = false)</td>
<td>Replaces all occurrences of the specified text in a Word document. Returns the count of replacements made.</td>
</tr>
</table>


**WordRevisionAgentTools**

Provides tools to inspect and manage tracked changes (revisions) in Word documents.

<table>
<tr>
<th>Tool</th>
<th>Syntax</th>
<th>Description</th>
</tr>
<tr>
<td>GetRevisions</td>
<td>GetRevisions(<br/>string documentId)</td>
<td>Gets all tracked change revisions from a Word document.</td>
</tr>
<tr>
<td>AcceptRevision</td>
<td>AcceptRevision(<br/>string documentId,<br/>int revisionIndex)</td>
<td>Accepts a specific tracked change by its 0-based index.</td>
</tr>
<tr>
<td>RejectRevision</td>
<td>RejectRevision(<br/>string documentId,<br/>int revisionIndex)</td>
<td>Rejects a specific tracked change by its 0-based index.</td>
</tr>
<tr>
<td>AcceptAllRevisions</td>
<td>AcceptAllRevisions(<br/>string documentId)</td>
<td>Accepts all tracked changes in the document and returns the count accepted.</td>
</tr>
<tr>
<td>RejectAllRevisions</td>
<td>RejectAllRevisions(<br/>string documentId)</td>
<td>Rejects all tracked changes in the document and returns the count rejected.</td>
</tr>
</table>



**WordImportExportAgentTools**

Provides tools to import from and export Word documents to HTML and Markdown formats.

<table>
<tr>
<th>Tool</th>
<th>Syntax</th>
<th>Description</th>
</tr>
<tr>
<td>ImportHtml</td>
<td>ImportHtml(<br/>string htmlContentOrFilePath,<br/>string? documentId = null)</td>
<td>Imports HTML content or an HTML file into a (new or existing) Word document.</td>
</tr>
<tr>
<td>ImportMarkdown</td>
<td>ImportMarkdown(<br/>string markdownContentOrFilePath,<br/>string? documentId = null)</td>
<td>Imports Markdown content or a Markdown file into a (new or existing) Word document.</td>
</tr>
<tr>
<td>GetHtml</td>
<td>GetHtml(<br/>string documentIdOrFilePath)</td>
<td>Returns the Word document content as an HTML string.</td>
</tr>
<tr>
<td>GetMarkdown</td>
<td>GetMarkdown(<br/>string documentIdOrFilePath)</td>
<td>Returns the Word document content as a Markdown string.</td>
</tr>
<tr>
<td>GetText</td>
<td>GetText(<br/>string documentIdOrFilePath)</td>
<td>Returns the Word document content as plain text.</td>
</tr>
</table>



**WordFormFieldAgentTools**

Provides tools to read and write form field values in Word documents.

<table>
<tr>
<th>Tool</th>
<th>Syntax</th>
<th>Description</th>
</tr>
<tr>
<td>GetFormData</td>
<td>GetFormData(<br/>string documentId)</td>
<td>Retrieves all form field data from a Word document as a key-value dictionary.</td>
</tr>
<tr>
<td>SetFormData</td>
<td>SetFormData(<br/>string documentId,<br/>Dictionary&lt;string, object&gt; data)</td>
<td>Sets multiple form field values in a Word document from a dictionary.</td>
</tr>
<tr>
<td>GetFormField</td>
<td>GetFormField(<br/>string documentId,<br/>string fieldName)</td>
<td>Gets the value of a specific form field by name.</td>
</tr>
<tr>
<td>SetFormField</td>
<td>SetFormField(<br/>string documentId,<br/>string fieldName,<br/>object fieldValue)</td>
<td>Sets the value of a specific form field by name.</td>
</tr>
</table>



**WordBookmarkAgentTools**

Provides tools to manage bookmarks and bookmark content within Word documents.

<table>
<tr>
<th>Tool</th>
<th>Syntax</th>
<th>Description</th>
</tr>
<tr>
<td>GetBookmarks</td>
<td>GetBookmarks(<br/>string documentId)</td>
<td>Gets all bookmark names from a Word document.</td>
</tr>
<tr>
<td>GetContent</td>
<td>GetContent(<br/>string documentId,<br/>string bookmarkName)</td>
<td>Extracts the content inside a bookmark into a new document. Returns the new document ID.</td>
</tr>
<tr>
<td>ReplaceContent</td>
<td>ReplaceContent(<br/>string documentId,<br/>string bookmarkName,<br/>string replaceDocumentId)</td>
<td>Replaces bookmark content with content sourced from another document.</td>
</tr>
<tr>
<td>RemoveContent</td>
<td>RemoveContent(<br/>string documentId,<br/>string bookmarkName)</td>
<td>Removes the content inside a specific bookmark, leaving the bookmark itself intact.</td>
</tr>
<tr>
<td>RemoveBookmark</td>
<td>RemoveBookmark(<br/>string documentId,<br/>string bookmarkName)</td>
<td>Removes a named bookmark from a Word document.</td>
</tr>
</table>


## Excel Tools

**ExcelWorkbookAgentTools**

Provides core life cycle operations for Excel workbooks — creating, loading, exporting, and managing workbooks in memory.

<table>
<tr>
<th>Tool</th>
<th>Syntax</th>
<th>Description</th>
</tr>
<tr>
<td>CreateWorkbook</td>
<td>CreateWorkbook(<br/>string? filePath = null,<br/>string? password = null)</td>
<td>Creates a new Excel workbook in memory or loads an existing one from a file path. Returns the <code>workbookId</code>.</td>
</tr>
<tr>
<td>ExportWorkbook</td>
<td>ExportWorkbook(<br/>string workbookId,<br/>string filePath,<br/>string version = "XLSX")</td>
<td>Exports an Excel workbook to the file system. Supported formats: <code>XLS</code>, <code>XLSX</code>, <code>XLSM</code>, <code>CSV</code>.</td>
</tr>
</table>


**ExcelWorksheetAgentTools**

Provides tools to create, manage, and populate worksheets within Excel workbooks.

<table>
<tr>
<th>Tool</th>
<th>Syntax</th>
<th>Description</th>
</tr>
<tr>
<td>CreateWorksheet</td>
<td>CreateWorksheet(<br/>string workbookId,<br/>string? sheetName = null)</td>
<td>Creates a new worksheet inside the specified workbook.</td>
</tr>
<tr>
<td>RenameWorksheet</td>
<td>RenameWorksheet(<br/>string workbookId,<br/>string oldName,<br/>string newName)</td>
<td>Renames a worksheet in the workbook.</td>
</tr>
<tr>
<td>DeleteWorksheet</td>
<td>DeleteWorksheet(<br/>string workbookId,<br/>string worksheetName)</td>
<td>Deletes a worksheet from the workbook.</td>
</tr>
<tr>
<td>SetValue</td>
<td>SetValue(<br/>string workbookId,<br/>string worksheetName,<br/>string cellAddress,<br/>string data)</td>
<td>Assigns a data value to a cell (supports text, numbers, dates, and booleans).</td>
</tr>
<tr>
<td>SetNumberFormat</td>
<td>SetNumberFormat(<br/>string workbookId,<br/>string worksheetName,<br/>string cellAddress,<br/>string numberFormat)</td>
<td>Assigns a number format to a cell in a worksheet (e.g., <code>mm/dd/yyyy</code>).</td>
</tr>
</table>



**ExcelSecurityAgentTools**

Provides encryption, decryption, and protection management for Excel workbooks and worksheets.

<table>
<tr>
<th>Tool</th>
<th>Syntax</th>
<th>Description</th>
</tr>
<tr>
<td>EncryptWorkbook</td>
<td>EncryptWorkbook(<br/>string workbookId,<br/>string password)</td>
<td>Encrypts an Excel workbook with a password.</td>
</tr>
<tr>
<td>DecryptWorkbook</td>
<td>DecryptWorkbook(<br/>string workbookId,<br/>string password)</td>
<td>Removes encryption from an Excel workbook using the provided password.</td>
</tr>
<tr>
<td>ProtectWorkbook</td>
<td>ProtectWorkbook(<br/>string workbookId,<br/>string password)</td>
<td>Protects the workbook structure (sheets) with a password.</td>
</tr>
<tr>
<td>UnprotectWorkbook</td>
<td>UnprotectWorkbook(<br/>string workbookId,<br/>string password)</td>
<td>Removes workbook structure protection.</td>
</tr>
<tr>
<td>ProtectWorksheet</td>
<td>ProtectWorksheet(<br/>string workbookId,<br/>string worksheetName,<br/>string password)</td>
<td>Protects a specific worksheet from editing using a password.</td>
</tr>
<tr>
<td>UnprotectWorksheet</td>
<td>UnprotectWorksheet(<br/>string workbookId,<br/>string worksheetName,<br/>string password)</td>
<td>Removes protection from a specific worksheet.</td>
</tr>
</table>



**ExcelFormulaAgentTools**

Provides tools to set, retrieve, calculate and validate cell formulas in Excel workbooks.

<table>
<tr>
<th>Tool</th>
<th>Syntax</th>
<th>Description</th>
</tr>
<tr>
<td>SetFormula</td>
<td>SetFormula(<br/>string workbookId,<br/>string worksheetName,<br/>string cellAddress,<br/>string formula)</td>
<td>Assigns a formula to a cell in the worksheet (e.g., <code>=SUM(A1:A10)</code>).</td>
</tr>
<tr>
<td>GetFormula</td>
<td>GetFormula(<br/>string workbookId,<br/>int worksheetIndex,<br/>string cellAddress)</td>
<td>Retrieves the formula string from a specific cell.</td>
</tr>
<tr>
<td>CalculateFormulas</td>
<td>CalculateFormulas(<br/>string workbookId)</td>
<td>Forces recalculation of all formulas in the workbook.</td>
</tr>
</table>



**ExcelChartAgentTools**

Provides tools to create modify and remove charts in excel workbooks

<table>
<tr>
<th>Tool</th>
<th>Syntax</th>
<th>Description</th>
</tr>
<tr>
<td>CreateChart</td>
<td>CreateChart(<br/>string workbookId,<br/>string worksheetName,<br/>string chartType,<br/>string dataRange,<br/>bool isSeriesInRows = false,<br/>int topRow = 8,<br/>int leftColumn = 1,<br/>int bottomRow = 23,<br/>int rightColumn = 8)</td>
<td>Creates a chart from a data range in the worksheet. Supports many chart types (e.g., <code>Column_Clustered</code>, <code>Line</code>, <code>Pie</code>, <code>Bar_Clustered</code>). Returns the chart index.</td>
</tr>
<tr>
<td>CreateChartWithSeries</td>
<td>CreateChartWithSeries(<br/>string workbookId,<br/>string worksheetName,<br/>string chartType,<br/>string seriesName,<br/>string valuesRange,<br/>string categoryLabelsRange,<br/>int topRow = 8,<br/>int leftColumn = 1,<br/>int bottomRow = 23,<br/>int rightColumn = 8)</td>
<td>Creates a chart and adds a named series with values and category labels. Returns the chart index.</td>
</tr>
<tr>
<td>AddSeriesToChart</td>
<td>AddSeriesToChart(<br/>string workbookId,<br/>string worksheetName,<br/>int chartIndex,<br/>string seriesName,<br/>string valuesRange,<br/>string categoryLabelsRange)</td>
<td>Adds a new series to an existing chart.</td>
</tr>
<tr>
<td>SetChartElement</td>
<td>SetChartElement(<br/>string workbookId,<br/>string worksheetName,<br/>int chartIndex,<br/>int seriesIndex,<br/>string title,<br/>bool hasLegend,<br/>string position = "Bottom",<br/>bool showValue = true,<br/>bool showCategoryName = false,<br/>bool showSeriesName = false,<br/>string dataLabelPosition = "Outside",<br/>string? categoryAxisTitle = null,<br/>string? valueAxisTitle = null)</td>
<td>Sets chart elements including title, legend, data labels, and axis titles. <code>position</code> (legend): <code>Bottom</code>, <code>Top</code>, <code>Left</code>, <code>Right</code>, <code>Corner</code>. <code>dataLabelPosition</code>: <code>Outside</code>, <code>Inside</code>, <code>Center</code>, etc.</td>
</tr>
<tr>
<td>SetChartPosition</td>
<td>SetChartPosition(<br/>string workbookId,<br/>string worksheetName,<br/>int chartIndex,<br/>int topRow,<br/>int leftColumn,<br/>int bottomRow,<br/>int rightColumn)</td>
<td>Sets the position and size of a chart in the worksheet.</td>
</tr>
<tr>
<td>CreateSparkline</td>
<td>CreateSparkline(<br/>string workbookId,<br/>string worksheetName,<br/>string sparklineType,<br/>string dataRange,<br/>string referenceRange)</td>
<td>Creates sparkline charts. Sparklines are small charts in worksheet cells that provide visual representation of data. Types: <code>Line</code>, <code>Column</code>, <code>WinLoss</code>.</td>
</tr>
</table>


**ExcelConditionalFormattingAgentTools**

Provides tools to add or remove conditional formatting in workbook

<table>
<tr>
<th>Tool</th>
<th>Syntax</th>
<th>Description</th>
</tr>
<tr>
<td>AddConditionalFormat</td>
<td>AddConditionalFormat(<br/>string workbookId,<br/>string worksheetName,<br/>string rangeAddress,<br/>string formatType,<br/>string? operatorType = null,<br/>string? firstFormula = null,<br/>string? secondFormula = null,<br/>string? backColor = null,<br/>bool? isBold = null,<br/>bool? isItalic = null)</td>
<td>Adds conditional formatting to a cell or range. <code>formatType values: <code>CellValue</code>, <code>Formula</code>, <code>DataBar</code>, <code>ColorScale</code>, <code>IconSet</code>.</td>
</tr>
</table>


**ExcelConversionAgentTools**

Provides tools to convert worksheet to image, HTML, ODS, JSON file formats

<table>
<tr>
<th>Tool</th>
<th>Syntax</th>
<th>Description</th>
</tr>
<tr>
<td>ConvertWorksheetToImage</td>
<td>ConvertWorksheetToImage(<br/>string workbookId,<br/>string worksheetName,<br/>string rangeAddress,<br/>string outputPath,<br/>string imageFormat = "PNG",<br/>string scalingMode = "Best")</td>
<td>Converts an entire worksheet to an image file. Supports PNG, JPEG, BMP, GIF, and TIFF formats.</td>
</tr>
<tr>
<td>ConvertChartToImage</td>
<td>ConvertChartToImage(<br/>string workbookId,<br/>string worksheetName,<br/>int chartIndex,<br/>string outputPath,<br/>string imageFormat = "PNG",<br/>string scalingMode = "Best")</td>
<td>Converts an Excel chart to an image file. Supports PNG and JPEG formats.</td>
</tr>
<tr>
<td>ConvertWorkbookToHtml</td>
<td>ConvertWorkbookToHtml(<br/>string workbookId,<br/>string outputPath,<br/>string textMode = "DisplayText")</td>
<td>Converts an entire Excel workbook to an HTML file with styles, hyperlinks, images, and charts preserved.</td>
</tr>
<tr>
<td>ConvertWorksheetToHtml</td>
<td>ConvertWorksheetToHtml(<br/>string workbookId,<br/>string worksheetName,<br/>string outputPath,<br/>string textMode = "DisplayText")</td>
<td>Converts a specific Excel worksheet to an HTML file with styles, hyperlinks, images, and charts preserved.</td>
</tr>
<tr>
<td>ConvertWorkbookToJson</td>
<td>ConvertWorkbookToJson(<br/>string workbookId,<br/>string outputPath,<br/>bool includeSchema = true)</td>
<td>Converts an entire workbook to JSON format with optional schema.</td>
</tr>
<tr>
<td>ConvertWorksheetToJson</td>
<td>ConvertWorksheetToJson(<br/>string workbookId,<br/>string worksheetName,<br/>string outputPath,<br/>bool includeSchema = true)</td>
<td>Converts a specific worksheet to JSON format with optional schema.</td>
</tr>
</table>


**ExcelDataValidationAgentTools**

Provides tools to add data validation to workbook

<table>
<tr>
<th>Tool</th>
<th>Syntax</th>
<th>Description</th>
</tr>
<tr>
<td>AddDropdownValidation</td>
<td>AddDropdownValidation(<br/>string workbookId,<br/>string worksheetName,<br/>string rangeAddress,<br/>string listValues,<br/>bool showErrorBox = true,<br/>string? errorTitle = null,<br/>string? errorMessage = null,<br/>bool showPromptBox = false,<br/>string? promptMessage = null)</td>
<td>Adds a dropdown list data validation to a cell or range. List values are limited to 255 characters including separators.</td>
</tr>
<tr>
<td>AddNumberValidation</td>
<td>AddNumberValidation(<br/>string workbookId,<br/>string worksheetName,<br/>string rangeAddress,<br/>string numberType,<br/>string comparisonOperator,<br/>string firstValue,<br/>string? secondValue = null,<br/>...)</td>
<td>Adds number validation to a cell or range with specified comparison operator and values.</td>
</tr>
<tr>
<td>AddDateValidation</td>
<td>AddDateValidation(<br/>string workbookId,<br/>string worksheetName,<br/>string rangeAddress,<br/>string comparisonOperator,<br/>string firstDate,<br/>string? secondDate = null,<br/>...)</td>
<td>Adds date validation to a cell or range with specified comparison operator and dates.</td>
</tr>
<tr>
<td>AddTimeValidation</td>
<td>AddTimeValidation(<br/>string workbookId,<br/>string worksheetName,<br/>string rangeAddress,<br/>string comparisonOperator,<br/>string firstTime,<br/>string? secondTime = null,<br/>...)</td>
<td>Adds time validation to a cell or range with specified comparison operator and time values. Use 24-hour format like 10:00 or 18:30.</td>
</tr>
<tr>
<td>AddTextLengthValidation</td>
<td>AddTextLengthValidation(<br/>string workbookId,<br/>string worksheetName,<br/>string rangeAddress,<br/>string comparisonOperator,<br/>string firstLength,<br/>string? secondLength = null,<br/>...)</td>
<td>Adds text length validation to a cell or range with specified comparison operator and length values.</td>
</tr>
<tr>
<td>AddCustomValidation</td>
<td>AddCustomValidation(<br/>string workbookId,<br/>string worksheetName,<br/>string rangeAddress,<br/>string formula,<br/>...)</td>
<td>Adds custom formula-based validation to a cell or range.</td>
</tr>
</table>


**ExcelPivotTableAgentTools**

Provides tools to create, edit pivot table in workbook

<table>
<tr>
<th>Tool</th>
<th>Syntax</th>
<th>Description</th>
</tr>
<tr>
<td>CreatePivotTable</td>
<td>CreatePivotTable(<br/>string workbookId,<br/>string dataWorksheetName,<br/>string dataRange,<br/>string pivotWorksheetName,<br/>string pivotTableName,<br/>string pivotLocation,<br/>string rowFieldIndices,<br/>string columnFieldIndices,<br/>int dataFieldIndex,<br/>string dataFieldCaption,<br/>string builtInStyle = "None",<br/>string subtotalType = "Sum")</td>
<td>Creates a pivot table in the specified worksheet using a data range from a source worksheet. Supports row, column, and data (values) fields with a chosen aggregation function. <code>builtInStyle</code> options: <code>PivotStyleLight1-28</code>, <code>PivotStyleMedium1-28</code>, <code>PivotStyleDark1-28</code>, or <code>None</code>. <code>subtotalType</code> options: <code>Sum</code>, <code>Count</code>, <code>Average</code>, <code>Max</code>, <code>Min</code>, <code>Product</code>, <code>CountNums</code>, <code>StdDev</code>, <code>StdDevP</code>, <code>Var</code>, <code>VarP</code>. Only supported in XLSX format.</td>
</tr>
</table>


## PowerPoint Tools

**PresentationDocumentAgentTools**

Provides core life cycle operations for PowerPoint presentations — creating, loading, exporting, and managing presentations in memory.

<table>
<tr>
<th>Tool</th>
<th>Syntax</th>
<th>Description</th>
</tr>
<tr>
<td>LoadPresentation</td>
<td>LoadPresentation(<br/>string? filePath = null,<br/>string? password = null)</td>
<td>Creates an empty presentation in memory or loads an existing one from a file path. Returns the <code>documentId</code>.</td>
</tr>
<tr>
<td>GetAllPresentations</td>
<td>GetAllPresentations()</td>
<td>Returns all presentation IDs currently available in memory.</td>
</tr>
<tr>
<td>ExportPresentation</td>
<td>ExportPresentation(<br/>string documentId,<br/>string filePath,<br/>string format = "PPTX")</td>
<td>Exports a PowerPoint presentation to the file system.</td>
</tr>
<tr>
<td>ExportAsImage</td>
<td>ExportAsImage(<br/>string documentId,<br/>string? imageFormat = "Png",<br/>int? startSlideIndex = null,<br/>int? endSlideIndex = null)</td>
<td>Exports presentation slides as PNG or JPEG images to the output directory.</td>
</tr>
<tr>
<td>RemovePresentation</td>
<td>RemovePresentation(<br/>string documentId)</td>
<td>Removes a specific presentation from memory by its ID.</td>
</tr>
<tr>
<td>SetActivePresentation</td>
<td>SetActivePresentation(<br/>string documentId)</td>
<td>Changes the active presentation context to the specified document ID.</td>
</tr>
</table>



**PresentationOperationsAgentTools**

Provides merge and split operations for PowerPoint presentations.

<table>
<tr>
<th>Tool</th>
<th>Syntax</th>
<th>Description</th>
</tr>
<tr>
<td>MergePresentations</td>
<td>MergePresentations(<br/>string destinationDocumentId,<br/>string sourceDocumentIds,<br/>string pasteOption = "SourceFormatting")</td>
<td>Merges multiple presentations into a destination presentation. Accepts comma-separated source document IDs or file paths.</td>
</tr>
<tr>
<td>SplitPresentation</td>
<td>SplitPresentation(<br/>string documentId,<br/>string splitRules,<br/>string pasteOption = "SourceFormatting")</td>
<td>Splits a presentation by sections, layout type, or slide numbers (e.g., <code>"1,3,5"</code>). Returns the resulting document IDs.</td>
</tr>
</table>


**PresentationSecurityAgentTools**

Provides password protection and encryption management for PowerPoint presentations.

<table>
<tr>
<th>Tool</th>
<th>Syntax</th>
<th>Description</th>
</tr>
<tr>
<td>ProtectPresentation</td>
<td>ProtectPresentation(<br/>string documentId,<br/>string password)</td>
<td>Write-protects a PowerPoint presentation with a password.</td>
</tr>
<tr>
<td>EncryptPresentation</td>
<td>EncryptPresentation(<br/>string documentId,<br/>string password)</td>
<td>Encrypts a PowerPoint presentation with a password.</td>
</tr>
<tr>
<td>UnprotectPresentation</td>
<td>UnprotectPresentation(<br/>string documentId)</td>
<td>Removes write protection from a presentation.</td>
</tr>
<tr>
<td>DecryptPresentation</td>
<td>DecryptPresentation(<br/>string documentId)</td>
<td>Removes encryption from a presentation.</td>
</tr>
</table>


**PresentationContentAgentTools**

Provides tools for reading content and metadata from PowerPoint presentations.

<table>
<tr>
<th>Tool</th>
<th>Syntax</th>
<th>Description</th>
</tr>
<tr>
<td>GetText</td>
<td>GetText(<br/>string? documentId = null,<br/>string? filePath = null)</td>
<td>Extracts all text content from a presentation by document ID or file path.</td>
</tr>
<tr>
<td>GetSlideCount</td>
<td>GetSlideCount(<br/>string documentId)</td>
<td>Returns the number of slides in the presentation.</td>
</tr>
</table>


**PresentationFindAndReplaceAgentTools**

Provides text search and replacement across all slides in a PowerPoint presentation.

<table>
<tr>
<th>Tool</th>
<th>Syntax</th>
<th>Description</th>
</tr>
<tr>
<td>FindAndReplace</td>
<td>FindAndReplace(<br/>string documentId,<br/>string findWhat,<br/>string replaceText,<br/>bool matchCase = false,<br/>bool wholeWord = false)</td>
<td>Finds and replaces all occurrences of the specified text across all slides in the presentation.</td>
</tr>
<tr>
<td>FindAndReplaceByPattern</td>
<td>FindAndReplaceByPattern(<br/>string documentId,<br/>string regexPattern,<br/>string replaceText)</td>
<td>Finds and replaces text that matches a regex pattern across all slides (e.g., <code>{[A-Za-z]+}</code>).</td>
</tr>
</table>


## PDF Conversion Tools

**OfficeToPdfAgentTools**

Provides conversion of Word, Excel, and PowerPoint documents to PDF format.

<table>
<tr>
<th>Tool</th>
<th>Syntax</th>
<th>Description</th>
</tr>
<tr>
<td>ConvertToPDF</td>
<td>ConvertToPDF(<br/>string sourceDocumentId,<br/>string sourceType)</td>
<td>Converts a Word, Excel, or PowerPoint document to PDF. <code>sourceType</code> must be <code>Word</code>, <code>Excel</code>, or <code>PowerPoint</code>. Returns the PDF document ID.</td>
</tr>
</table>


## Data Extraction Tools

**DataExtractionAgentTools**

Provides AI-powered structured data extraction from PDF documents and images, returning results as JSON.

<table>
<tr>
<th>Tool</th>
<th>Syntax</th>
<th>Description</th>
</tr>
<tr>
<td>ExtractDataAsJSON</td>
<td>ExtractDataAsJSON(<br/>string inputFilePath,<br/>bool enableFormDetection = true,<br/>bool enableTableDetection = true,<br/>double confidenceThreshold = 0.6,<br/>int startPage = -1,<br/>int endPage = -1,<br/>bool detectSignatures = true,<br/>bool detectTextboxes = true,<br/>bool detectCheckboxes = true,<br/>bool detectRadioButtons = true,<br/>bool detect_Border_less_Tables = true,<br/>string? outputFilePath = null)</td>
<td>Extracts structured data (text, forms, tables, checkboxes, signatures) from a PDF or image file and returns the result as JSON.</td>
</tr>
<tr>
<td>ExtractTableAsJSON</td>
<td>ExtractTableAsJSON(<br/>string inputFilePath,<br/>bool detect_Border_less_Tables = true,<br/>double confidenceThreshold = 0.6,<br/>int startPage = -1,<br/>int endPage = -1,<br/>string? outputFilePath = null)</td>
<td>Extracts only table data from a PDF document and returns the result as JSON. Optimized for table-focused extraction.</td>
</tr>
<tr>
<td>RecognizeFormAsJson</td>
<td>RecognizeFormAsJson(<br/>string inputFilePath,<br/>bool detectSignatures = true,<br/>bool detectTextboxes = true,<br/>bool detectCheckboxes = true,<br/>bool detectRadioButtons = true,<br/>double confidenceThreshold = 0.6,<br/>int startPage = -1,<br/>int endPage = -1,<br/>string? outputFilePath = null)</td>
<td>Extracts only form field data from a PDF document and returns as JSON. Optimized for form-focused recognition.</td>
</tr>
</table>



## See Also

- [Overview](https://helpstaging.syncfusion.com/document-processing/ai-agent-tools/overview)
- [Getting Started](https://helpstaging.syncfusion.com/document-processing/ai-agent-tools/getting-started)
- [Customization](https://helpstaging.syncfusion.com/document-processing/ai-agent-tools/customization)
- [Example Prompts](https://helpstaging.syncfusion.com/document-processing/ai-agent-tools/example-prompts)