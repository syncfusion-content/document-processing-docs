---
title: Does XlsIO support pasting a worksheet from the clipboard?
description: Explains whether Syncfusion XlsIO provides support for pasting an entire worksheet directly from the system clipboard into a workbook.
platform: document-processing
control: XlsIO
documentation: UG
---

# Does XlsIO support pasting a worksheet from the clipboard?

No, Syncfusion XlsIO does not support pasting an entire worksheet from the clipboard, and there are no current plans to implement this feature.

If you need to move or duplicate worksheet content programmatically, consider the following alternatives:

- Use the `IWorksheet.Copy()` or `IWorksheet.Move()` methods to duplicate or relocate sheets within a workbook.
- Read clipboard data in your application (outside XlsIO), then write the values or ranges into the target worksheet using XlsIO APIs.
