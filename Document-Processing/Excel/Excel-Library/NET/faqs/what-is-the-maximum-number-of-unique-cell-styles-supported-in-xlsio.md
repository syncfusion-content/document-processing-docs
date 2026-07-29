---
title: Maximum Unique Cell Styles Supported in XLSIO | Syncfusion
description: This page explains what is the maximum number of unique cell styles supported in syncfusion Excel library.
platform: document-processing
control: XlsIO
documentation: UG
---

# What is the maximum number of unique cell styles supported in XlsIO?

Microsoft Excel creates a unique cell style for every distinct combination of formatting properties, such as font, color, border, and number format. Each variation results in a separate style entry within the workbook. Excel supports a maximum of 64,000 unique cell styles, and exceeding this limit can lead to issues with the file.

XlsIO follows the same approach as Microsoft Excel by creating a new cell style for each unique formatting combination applied to cells. If the number of unique styles exceeds Excel's supported limit of 64,000, XlsIO throws an exception to prevent generating an invalid Excel file.