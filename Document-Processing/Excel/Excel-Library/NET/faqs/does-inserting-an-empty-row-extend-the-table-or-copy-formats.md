---
title: Does inserting an empty row extend or copy formats? | Syncfusion
description: This page explains whether inserting an empty row extends the table or only copies the formats from the row above.
platform: document-processing
control: XlsIO
documentation: UG
---

# Does inserting an empty row extend the table or copy formats?

When you insert an empty row after a table in Microsoft Excel, the table does not extend automatically to include the new row. However, if there are any cell style formats (such as borders, fill colors, or font styles) in the row above the insertion point, those formats will be copied to the inserted empty cells.

Syncfusion XlsIO follows the same behavior as Microsoft Excel when using the `ExcelInsertOptions.FormatAsBefore` option. This means that inserting a row will copy the formatting from the preceding row, but it will not extend the table range.