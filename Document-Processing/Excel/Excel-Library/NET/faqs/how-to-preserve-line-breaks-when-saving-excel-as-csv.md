---
title: How to preserve line breaks when saving Excel as CSV | Syncfusion
description: Explanation of why line breaks in cell text are not preserved when saving an Excel file to CSV and the recommended alternative to retain the visual format.
platform: document-processing
control: XlsIO
documentation: UG
---

# How to preserve line breaks when saving Excel as CSV?

When an Excel worksheet is saved as a CSV file, any text containing line breaks within a cell is not preserved in the same visual form. This is because CSV is a plain-text format designed to store tabular data, and it does not support Excel-specific formatting or display features such as in-cell line wrapping.

Although the underlying text data is written to the CSV file, the way line breaks are interpreted can vary across different applications, including Excel itself when reopening the file. As a result, the original visual layout—especially multiline content within a single cell—may not be maintained.

To reliably preserve the exact appearance, including in-cell line breaks and formatting, the file must be saved in a native Excel format such as XLSX or XLS, which fully supports cell formatting, rich text, and embedded line breaks.

## See Also

* [Working with Excel Worksheet](https://help.syncfusion.com/document-processing/excel/excel-library/net/working-with-excel-worksheet)
