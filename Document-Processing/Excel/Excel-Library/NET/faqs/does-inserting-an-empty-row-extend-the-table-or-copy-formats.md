---
title: Row Insertion Formatting in .NET Excel Library | Syncfusion
description: Empty row insertion describes whether inserting a blank row extends an Excel table or copies formatting from the previous row.
platform: document-processing
control: XlsIO
documentation: UG
---

# Table Row Insertion in .NET Excel Library

When you insert an empty row after a table in Microsoft Excel, the table does not extend automatically to include the new row. However, if there are any cell style formats (such as borders, fill colors, or font styles) in the row above the insertion point, those formats will be copied to the inserted empty cells.

Syncfusion XlsIO follows the same behavior as Microsoft Excel when using the `ExcelInsertOptions.FormatAsBefore` option. This means that inserting a row will copy the formatting from the preceding row, but it will not extend the table range.
