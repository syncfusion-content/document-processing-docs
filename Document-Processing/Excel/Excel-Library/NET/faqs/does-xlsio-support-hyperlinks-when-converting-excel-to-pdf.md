---
title: Does XlsIO support hyperlinks converting Excel to PDF? | Syncfusion
description: This FAQ explains why hyperlinks in Excel become inactive when converted to PDF using XlsIO, as workbook-level hyperlinks cannot be exported during conversion.
platform: document-processing
control: XlsIO
documentation: UG
---

# Does XlsIO support hyperlinks when converting Excel to PDF?

In Microsoft Excel, hyperlinks serve as bookmarks for navigating within a workbook. When exporting an Excel file to PDF format, the file links become disabled. This is a known behavior that occurs because XlsIO cannot export workbook-level hyperlinks during the conversion process.

This behavior is by design in Syncfusion XlsIO, as the PDF export functionality does not preserve hyperlinks that link to external files or bookmarks within the workbook.
