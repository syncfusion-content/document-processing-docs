---
title: Why does Excel remove number formatting in CSV files? | Syncfusion
description: This page explains why Microsoft Excel removes number formatting in CSV files created using Syncfusion XlsIO
platform: document-processing
control: XlsIO
documentation: UG
---

# Why does Excel remove number formatting in CSV files?

When a CSV file is opened in Microsoft Excel, the application automatically interprets the data based on its type. If a value appears to be a number, Excel will treat it as a numeric value and apply its default formatting. As a result, any trailing zeros (such as in “100.00”) are removed, and the value is displayed simply as “100”. This behavior occurs because CSV files do not store formatting information—only raw data.

Syncfusion’s XlsIO library follows the same approach as Microsoft Excel when exporting to CSV. If a number is formatted (e.g., “0.00”), the formatted value (e.g., “100.00”) is correctly written to the CSV file. This can be verified by opening the file in a text editor like Notepad. However, when the CSV file is opened in Excel, the displayed value may change due to Excel’s automatic formatting, as described above.