---
title: Does XlsIO Show "(Blank)" for Empty Pivot Table Values? | Syncfusion
description: This Faq explains how XlsIO handles empty or null values in PivotTable cells, showing "(blank)" similar to Microsoft Excel behavior.
platform: document-processing
control: XlsIO
documentation: UG
---

# Does XlsIO Show "(Blank)" for Empty Pivot Table Values?

Yes. XlsIO follows the same behavior as Microsoft Excel when displaying empty or null values in PivotTable cells. Both Microsoft Excel and XlsIO display the text "(blank)" for empty string or null values in the data source when viewing the PivotTable.

This is expected behavior and aligns with how Excel natively handles PivotTables. The “(blank)” entry appears when the underlying data includes:

- Empty strings ("")
- Null or missing values