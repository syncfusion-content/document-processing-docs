---
title: Excel Hyperlinks to PDF in .NET Excel Library | Syncfusion
description: Hyperlinks in Excel to PDF conversion explains why some workbook-level hyperlinks become inactive when Excel files are converted to PDF.
platform: document-processing
control: XlsIO
documentation: UG
---

# Hyperlinks in Excel to PDF in .NET Excel Library

In Microsoft Excel, hyperlinks serve as bookmarks for navigating within a workbook. When exporting an Excel file to PDF format, the file links become disabled. This is a known behavior that occurs because XlsIO cannot export workbook-level hyperlinks during the conversion process.

This behavior is by design in Syncfusion XlsIO, as the PDF export functionality does not preserve hyperlinks that link to external files or bookmarks within the workbook.
