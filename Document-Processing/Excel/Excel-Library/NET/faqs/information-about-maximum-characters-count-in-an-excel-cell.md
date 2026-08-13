---
title: Maximum Cell Characters in .NET Excel Library | Syncfusion
description: Excel cell character limit describes the maximum number of characters supported in a cell using the .NET Excel Library.
platform: document-processing
control: XlsIO
documentation: UG
---

# Maximum Cell Characters in .NET Excel Library

An Excel cell accepts only maximum 32767 characters. ArgumentOutOfRangeException is thrown when you try to set the text with length greater that 32767 characters, into an Excel cell. This is the behavior of Microsoft Excel and Syncfusion&reg; XlsIO also does the same. Please go through [Excel Specifications and Limits](https://support.microsoft.com/en-us/office/excel-specifications-and-limits-1672b34d-7043-467e-8e27-269d656771c3).
