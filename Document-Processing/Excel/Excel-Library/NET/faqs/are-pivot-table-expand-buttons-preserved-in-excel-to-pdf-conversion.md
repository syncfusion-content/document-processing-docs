---
title: Pivot Table Expand Buttons in .NET Excel Library | Syncfusion
description: PivotTable expand buttons describe whether expand controls are preserved when Excel documents are converted to PDF.
platform: document-processing
control: XlsIO
documentation: UG
---

# Pivot Table Expand Buttons in .NET Excel Library

Microsoft Excel does not preserve pivot table expand/collapse buttons when exporting to PDF. The PDF output represents a static view of the worksheet, and interactive elements such as expand/collapse controls are not included. This is the default and expected behavior of Excel.

Syncfusion XlsIO follows the same behavior as Microsoft Excel. During Excel to PDF conversion, pivot table expand/collapse buttons are not retained in the generated PDF. This is consistent with Excel’s functionality and is not a limitation of the Syncfusion library.
