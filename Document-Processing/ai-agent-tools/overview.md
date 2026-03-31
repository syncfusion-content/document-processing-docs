---
layout: post
title: Overview | AI Agent Tools | Syncfusion
description: Learn about the Syncfusion Document SDK AI Agent Tools — an AI-ready toolkit for working with Word, Excel, PDF, and PowerPoint documents.
platform: document-processing
control: AI Agent Tools
documentation: ug
---

# Syncfusion<sup>&reg;</sup> Document SDK Agent tool Overview

## What is Syncfusion Document SDK Agent Tool?

**Syncfusion Document SDK Agent Tool** is a comprehensive AI toolkit that enables AI models and assistants to autonomously create, manipulate, convert, and extract data from documents using [Syncfusion Document SDK](https://www.syncfusion.com/document-sdk) libraries.

It exposes a rich set of well-defined tools and functions that an AI agent can invoke to perform document operations across Word, Excel, PDF, and PowerPoint formats — without requiring the host application to implement document-processing logic directly.

---

## Key Capabilities

| Capability | Description |
|---|---|
| **Document Creation** | Create new Word, Excel, PDF, and PowerPoint documents programmatically. |
| **Document Manipulation** | Edit, merge, split, compare, and secure documents across all supported formats. |
| **Content Extraction** | Extract text, tables, images, form fields, and bookmarks from documents. |
| **Mail Merge** | Execute mail merge operations on Word documents using structured JSON data. |
| **Find and Replace** | Locate and replace text or regex patterns in Word and PowerPoint documents. |
| **Revision Tracking** | Accept or reject tracked changes in Word documents. |
| **Security** | Encrypt, decrypt, protect, and manage permissions on all document types. |
| **Office to PDF Conversion** | Convert Word, Excel, and PowerPoint documents to PDF. |
| **Data Extraction** | Extract structured data (text, tables, forms, checkboxes) from PDFs and images as JSON. |

---

## Supported Document Formats

| Format | Supported File Types |
|---|---|
| **Word** | `.docx`, `.doc`, `.rtf`, `.html`, `.txt` |
| **Excel** | `.xlsx`, `.xls`, `.xlsm`, `.csv` |
| **PDF** | `.pdf` (including password-protected files) |
| **PowerPoint** | `.pptx` (including password-protected files) |
| **Image (extraction input)** | `.png`, `.jpg`, `.jpeg` |

---

## NuGet Package Dependencies

### Agent Library

| Package | Purpose |
|---|---|
| `Syncfusion.DocIO.Net.Core` | Word document processing |
| `Syncfusion.Pdf.Net.Core` | PDF document processing |
| `Syncfusion.XlsIO.Net.Core` | Excel workbook processing |
| `Syncfusion.Presentation.Net.Core` | PowerPoint presentation processing |
| `Syncfusion.DocIORenderer.Net.Core` | Word to PDF and Image conversions |
| `Syncfusion.PresentationRenderer.Net.Core` | PowerPoint to PDF and Image conversions |
| `Syncfusion.XlsIORenderer.Net.Core` | Excel to PDF and Image conversions |
| `Syncfusion.SmartDataExtractor.Net.Core` | Structured data extraction from PDF/images |
| `Syncfusion.SmartTableExtractor.Net.Core` | Table extraction from PDF |
| `Syncfusion.SmartFormRecognizer.Net.Core` | Form field recognition |

### Example Application

| Package | Purpose |
|---|---|
| `Microsoft.Agents.AI.OpenAI` (v1.0.0-rc4) | Microsoft Agent Framework with OpenAI integration |

---

## Supported .NET Versions

- .NET 8.0
- .NET 10.0

---

## Related Resources

- [Tools Reference](./tools.md)
- [Getting Started](./getting-started.md)
- [Customization](./customization.md)
- [Syncfusion PDF Library](https://help.syncfusion.com/document-processing/pdf/pdf-library/overview)
- [Syncfusion Word Library](https://help.syncfusion.com/document-processing/word/word-library/overview)
- [Syncfusion Excel Library](https://help.syncfusion.com/document-processing/excel/excel-library/overview)
- [Syncfusion PowerPoint Library](https://help.syncfusion.com/document-processing/powerpoint/powerpoint-library/overview)
- [Data Extraction](https://help.syncfusion.com/document-processing/data-extraction/overview)
