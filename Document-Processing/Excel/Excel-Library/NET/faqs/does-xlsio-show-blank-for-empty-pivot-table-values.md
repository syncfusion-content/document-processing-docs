---
title: How to Show Blank Pivot Values in .NET Excel Library | Syncfusion
description: Handle empty or null PivotTable cells in Syncfusion XlsIO by displaying “(blank)” values like Microsoft Excel behavior.
platform: document-processing
control: XlsIO
documentation: UG
---

# How to display "(Blank)" in pivot tables in .NET Excel Library

Yes. XlsIO follows the same behavior as Microsoft Excel when displaying empty or null values in PivotTable cells. Both Microsoft Excel and XlsIO display the text "(blank)" for empty string or null values in the data source when viewing the PivotTable.

This is expected behavior and aligns with how Excel natively handles PivotTables. The “(blank)” entry appears when the underlying data includes:

- Empty strings ("")
- Null or missing values
