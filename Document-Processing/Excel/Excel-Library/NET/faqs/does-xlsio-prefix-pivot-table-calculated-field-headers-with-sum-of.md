---
title: PivotTable calculated field header prefix in XlsIO | Syncfusion 
description: This page explains whether Syncfusion XlsIO prefixes PivotTable calculated field headers with "Sum of" when adding a calculated field.
platform: document-processing 
control: XlsIO 
documentation: UG
---

# Does XlsIO prefix PivotTable calculated field headers with "Sum of"?

Yes. When a calculated field is added to a PivotTable, Microsoft Excel automatically prefixes the column header with **Sum of** before the original name. For example, a field named **Profit** becomes **Sum of Profit**. XlsIO follows the same behavior to remain consistent with Excel.