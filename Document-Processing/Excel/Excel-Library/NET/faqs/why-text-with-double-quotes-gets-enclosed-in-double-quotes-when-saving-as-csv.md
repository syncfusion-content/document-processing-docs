---
title: CSV Double Quotes in .NET Excel Library | Syncfusion
description: CSV export behavior explains why Excel wraps fields with double quotes and escapes quotes by doubling them.
platform: document-processing
control: XlsIO
documentation: UG
---

# CSV Text Qualifiers in .NET Excel Library

When saving data as a CSV file, Excel automatically adds double quotes around text that contains special characters such as commas, line breaks, or quotation marks. This is done to ensure the content is correctly understood as a single field when the CSV file is read by other applications. 

For example, without quotes, a comma inside the text could be mistaken for a column separator, or a line break could be seen as a new row. Therefore, the quotes help preserve the structure and accuracy of the data in the CSV format.
