---
title: PivotTable column width changes on refresh | Syncfusion
description: This page explains whether Syncfusion XlsIO automatically changes the column widths in PivotTables when the data source is refreshed using Syncfusion .NET Excel library (XlsIO).
platform: document-processing
control: XlsIO
documentation: UG
---

# Does XlsIO change PivotTable column widths on data refresh?

Yes. As per Microsoft Excel behavior, the column widths in PivotTables are automatically modified when the data source is refreshed.

Whenever a PivotTable’s data source is edited, Microsoft Excel automatically refreshes the PivotTable. During this refresh operation, Excel recalculates and adjusts the column widths based on the updated content in the data source.

Syncfusion XlsIO follows the same behavior as Microsoft Excel.