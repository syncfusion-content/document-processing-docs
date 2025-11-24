---
title: Calculated field naming across PivotTables | Syncfusion
description: This page explains whether multiple PivotTables can use calculated fields with the same name using Syncfusion .NET Excel library (XlsIO).
platform: document-processing
control: XlsIO
documentation: UG
---

# Can PivotTables share calculated field names?

According to Microsoft Excel, it is not possible to define a calculated field with the same name when multiple PivotTables refer to the same base pivot cache, and Syncfusion XlsIO follows the same behavior. 

You can either assign different names to the calculated fields when using the same pivot cache, or create each PivotTable from a unique pivot cache, which allows calculated fields with identical names.