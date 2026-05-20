---
layout: post
title: Overview | AI Agent Tools | Syncfusion
description: Learn about the Syncfusion Document SDK AI Agent Tools - an AI-ready toolkit for working with Word, Excel, PDF, and PowerPoint documents.
platform: document-processing
control: AI Agent Tools
documentation: ug
---

# Syncfusion Document SDK AI Agent Tools Overview

[Syncfusion Document SDK AI Agent Tool](https://www.nuget.org/packages/Syncfusion.DocumentSDK.AI.AgentTools) is a .NET library that enables AI agents to autonomously create, manipulate, convert, and extract data from Word, Excel, PDF, PowerPoint, and other document formats. It exposes pre-built, AI-callable tools built on [Syncfusion Document SDK](https://www.syncfusion.com/document-sdk) — no document-processing logic required in your host application. Available on [NuGet](https://www.nuget.org/packages/Syncfusion.DocumentSDK.AI.AgentTools) and fully customizable via [GitHub](https://github.com/syncfusion/document-sdk-ai-agent-tools/tree/master/Syncfusion.DocumentSDK.AI.AgentTools). 

>**Note:** Supports .NET 8.0, 9.0, and 10.0.

![How AI Agent Tool Execution Works](how-it-works.png)

## Key Capabilities

| Format | Key Operations | Supported File Types |
|---|---|---|
| **PDF** | Digital signing, redaction, watermarking, OCR, encryption, merge/split, compression, page reordering, text/image extraction, annotation and form field import/export, PDF/A conversion, image to PDF | `.pdf`, `.png`, `.jpg`, `.jpeg` |
| **Word** | Mail merge, bookmarks, form fields, find & replace, merge/split, compare, track changes, HTML/Markdown import/export, conversion to PDF/image/RTF, field management, table of contents, security, clone | `.docx`, `.doc`, `.rtf`, `.html`, `.txt`, `.md` |
| **Excel** | Charts, conditional formatting, data validation, pivot tables, encryption & protection, worksheet management, conversion to image/CSV/HTML/JSON, workbook format conversion | `.xlsx`, `.xls`, `.xlsm`, `.csv` |
| **PowerPoint** | Text extraction, find & replace, merge/split, encryption, write protection, export as image | `.pptx` |
| **Office to PDF** | Convert Word, Excel, or PowerPoint to PDF in a single tool call | `.docx`, `.xlsx`, `.pptx` → `.pdf` |
| **Data Extraction** | Structured data, table, and form extraction from PDFs/images; PDF and table to Markdown conversion | `.pdf`, `.png`, `.jpg`, `.jpeg` |

## Related Resources

- [Tools](./tools)
- [Getting Started](./getting-started)
- [Customization](./customization)
- [Example Prompts](./example-prompts)
- [Example Use Cases](./example-use-cases)
