---
title: How to preserve line breaks when saving Excel as CSV | Syncfusion
description: Explanation of why line breaks in cell text are not preserved when saving an Excel file to CSV and the recommended alternative to retain the visual format.
platform: document-processing
control: XlsIO
documentation: UG
---

# How to preserve line breaks when saving Excel as CSV?

As per Microsoft Excel behavior, text that contains line breaks inside a cell is not preserved in the same visual format when the file is saved as CSV. CSV is a plain-text format intended to represent tabular data, it cannot reliably retain Excel-specific formatting or certain in-cell features the way the native Excel formats do.

In practice, when you save an Excel workbook as CSV the cell content will be written into the text file, but line breaks may be interpreted or rendered differently by CSV consumers (including Excel on re-open), resulting in the loss of the original visual layout.

The only way to preserve the exact appearance and in-cell formatting (including line breaks shown inside cells) is to save the document in an Excel file format such as XLSX or XLS. These formats preserve cell formatting, rich text, and embedded line breaks.

## See Also

* [Working with Excel Worksheet](https://help.syncfusion.com/document-processing/excel/excel-library/net/working-with-excel-worksheet)

N> Important: CSV is a plain-text representation and is not designed to retain Excel-specific cell formatting; prefer XLSX/XLS to retain line breaks and other formatting.
