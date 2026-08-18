---
title: How to Show Blank Pivot Values in .NET Excel Library | Syncfusion
description: Handle blank cells in pivot table describes how to show the blank cells in the pivot table using the word "blank"
platform: document-processing
control: XlsIO
documentation: UG
---

# How to display "(Blank)" in pivot tables in .NET Excel Library

Yes. XlsIO follows the same behavior as Microsoft Excel when displaying empty or null values in PivotTable cells. Both Microsoft Excel and XlsIO display the text "(blank)" for empty string or null values in the data source when viewing the PivotTable.

This is expected behavior and aligns with how Excel natively handles PivotTables. The “(blank)” entry appears when the underlying data includes:

- Empty strings ("")
- Null or missing values
