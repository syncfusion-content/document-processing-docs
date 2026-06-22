---
title: Does Autofit work on merged cells when WrapText is applied? | Syncfusion
description: This page explains why autofit row or column does not work on merged cells when WrapText is applied in XlsIO, following Microsoft Excel's behavior.
platform: document-processing
control: XlsIO
documentation: UG
---

# Does Autofit work on merged cells when WrapText is applied?

No, autofitting rows or columns is not supported when a cell has both merged cells and WrapText enabled. This is expected behavior in Microsoft Excel, and Syncfusion XlsIO follows the same limitation.

When WrapText is applied, Excel automatically adjusts the row height based on the column width to display all lines of wrapped text. However, when the cell is also merged, Excel cannot accurately determine the required dimensions for autofitting.

As a result, autofit will not work in this scenario. To achieve the desired layout, you must manually set the row height or column width.