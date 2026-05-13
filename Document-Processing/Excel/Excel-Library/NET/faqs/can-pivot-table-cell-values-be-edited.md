---
title: Can pivot table cell values be edited? | Syncfusion
description: This page explains whether the cell values of pivot table can be edited using XlsIO
platform: document-processing
control: XlsIO
documentation: UG
---

# Can pivot table cell values be edited?

Pivot table cells in Microsoft Excel are inherently read-only. Any changes to the values displayed in a pivot table must be made by updating its underlying source data, such as the original range or data table, followed by refreshing the pivot table to reflect the modifications.

XlsIO adheres to the same behavior as Microsoft Excel and does not allow direct editing of pivot table cell values. To update the displayed data, the source data must be modified and the pivot table refreshed accordingly.