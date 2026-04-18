---
layout: post
title: Overview | AI Agent Tools | Syncfusion
description: Learn about the Syncfusion Document SDK AI Agent Tools — an AI-ready toolkit for working with Word, Excel, PDF, and PowerPoint documents.
platform: document-processing
control: AI Agent Tools
documentation: ug
---

# Syncfusion Document SDK Agent Tools Overview

**Syncfusion Document SDK Agent Tool** is a comprehensive AI toolkit that enables AI models and assistants to autonomously create, manipulate, convert, and extract data from documents using Syncfusion Document SDK libraries.

It exposes a rich set of well-defined tools and functions that an [AI agent](https://learn.microsoft.com/en-us/agent-framework/get-started/your-first-agent?pivots=programming-language-csharp) can invoke to perform document operations across Word, Excel, PDF, PowerPoint, HTML and Markdown formats — without requiring the host application to implement document-processing logic directly.


## Key Capabilities

| Product | Supported Functionalities |
|---|---|
| **PDF** | PDF processing with support for signing PDFs, finding text, applying redactions, and splitting documents as needed. |
| **Word** | Word document operations with support for bookmarks, form fields, mail merge, find and replace, document merging and splitting, document comparison, import and export operations, security features such as encryption and protection, track changes, and document conversion to formats like PDF, image, RTF, and HTML. |
| **Excel** | Excel document operations with support for charts, conditional formatting, data validation, pivot tables, document deletion, security features such as encryption and protection, and conversions to image, HTML, and JSON formats. |
| **PowerPoint**| PowerPoint presentation operations with support for extracting text, retrieving slide counts, find and replace operations, merging and splitting presentations, and applying security features such as encryption, decryption, and protection. |
| **Office To PDF** | Convert Office documents seamlessly by transforming Excel, Word, and PowerPoint files into PDF format. |
| **Smart Data Extraction** | Extract structured information efficiently by retrieving data as JSON, extracting tables as JSON, and recognizing forms with output in JSON format. |


## Supported Document Formats

| Format | Supported File Types |
|---|---|
| **Word** | `.docx`, `.doc`, `.rtf`, `.html`, `.txt`, `.md` |
| **Excel** | `.xlsx`, `.xls`, `.xlsm`, `.csv` |
| **PDF** | `.pdf` |
| **PowerPoint** | `.pptx` |
| **Image (extraction input)** | `.png`, `.jpg`, `.jpeg` |


## Dependent NuGet Packages

The following NuGet packages are required dependencies for the agent tool library.

| Package | Purpose |
|---|---|
| [Syncfusion.DocIO.Net.Core](https://www.nuget.org/packages/Syncfusion.DocIO.Net.Core) | Word document processing |
| [Syncfusion.Pdf.Net.Core](https://www.nuget.org/packages/Syncfusion.Pdf.Net.Core)| PDF document processing |
| [Syncfusion.XlsIO.Net.Core](https://www.nuget.org/packages/Syncfusion.XlsIO.Net.Core) | Excel workbook processing |
| [Syncfusion.Presentation.Net.Core](https://www.nuget.org/packages/Syncfusion.Presentation.Net.Core) | PowerPoint presentation processing |
| [Syncfusion.DocIORenderer.Net.Core](https://www.nuget.org/packages/Syncfusion.DocIORenderer.Net.Core) | Word to PDF and Image conversions |
| [Syncfusion.PresentationRenderer.Net.Core](https://www.nuget.org/packages/Syncfusion.PresentationRenderer.Net.Core) | PowerPoint to PDF and Image conversions |
| [Syncfusion.XlsIORenderer.Net.Core](https://www.nuget.org/packages/Syncfusion.XlsIORenderer.Net.Core) | Excel to PDF and Image conversions |
| [Syncfusion.SmartDataExtractor.Net.Core](https://www.nuget.org/packages/Syncfusion.SmartDataExtractor.Net.Core) | Structured data extraction from PDF/images |
| [Syncfusion.SmartTableExtractor.Net.Core](https://www.nuget.org/packages/Syncfusion.SmartTableExtractor.Net.Core) | Table extraction from PDF |
| [Syncfusion.SmartFormRecognizer.Net.Core](https://www.nuget.org/packages/Syncfusion.SmartFormRecognizer.Net.Core) | Form field recognition |
|[Syncfusion.PDF.OCR.Net.Core](https://www.nuget.org/packages/Syncfusion.PDF.OCR.Net.Core)|OCR Processor|
|[Syncfusion.HtmlToPdfConverter.Net.Windows](https://www.nuget.org/packages/Syncfusion.HtmlToPdfConverter.Net.Windows)| HTML to PDF conversion|

The following functionalities required additional NuGet packages in non-Windows platforms. 
 
- [Office to PDF Conversion](https://help.syncfusion.com/document-processing/word/word-library/net/nuget-packages-required#additional-nuget-packages-required-for-linux) in Linux platform

- [HTML to PDF Conversion](https://help.syncfusion.com/document-processing/pdf/conversions/html-to-pdf/net/nuget-packages-required) in Cross-Platform

The following NuGet packages are used in the application.

| Package | Purpose |
|---|---|
| [Microsoft.Agents.AI.OpenAI](https://www.nuget.org/packages/Microsoft.Agents.AI.OpenAI) | Microsoft Agent Framework with OpenAI integration |


## Supported .NET Versions

- .NET 8.0
- .NET 10.0


## Related Resources

- [Tools](https://helpstaging.syncfusion.com/document-processing/ai-agent-tools/tools)
- [Getting Started](https://helpstaging.syncfusion.com/document-processing/ai-agent-tools/getting-started)
- [Customization](https://helpstaging.syncfusion.com/document-processing/ai-agent-tools/customization)
- [Syncfusion PDF Library](https://help.syncfusion.com/document-processing/pdf/pdf-library/overview)
- [Syncfusion Word Library](https://help.syncfusion.com/document-processing/word/word-library/overview)
- [Syncfusion Excel Library](https://help.syncfusion.com/document-processing/excel/excel-library/overview)
- [Syncfusion PowerPoint Library](https://help.syncfusion.com/document-processing/powerpoint/powerpoint-library/overview)
- [Data Extraction](https://help.syncfusion.com/document-processing/data-extraction/overview)
- [Example Prompts](https://helpstaging.syncfusion.com/document-processing/ai-agent-tools/example-prompts)
