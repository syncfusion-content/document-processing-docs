---
title: Why cropping occurs with differing font sizes? | Syncfusion 
description: This page explains why picture cropping occurs when workbook and cell font sizes differ, and how to resolve it using AutofitRows or consistent font settings.
platform: document-processing
control: XlsIO
documentation: UG
---

# Why does cropping occur when workbook and cell font sizes differ?

Cropping occurs because the picture height is calculated based on the stored height of the first row. When the workbook's standard font size is set to 9, Excel typically uses a row height of 14 pixels. However, if the cell text is formatted with a larger font size (for example, `worksheet.Range[row, column].CellStyle.Font.Size = 11`), the actual text requires more vertical space (approximately 17 pixels).

This mismatch causes the picture height to be smaller than the text block, resulting in clipping. As content spans across pages, this misalignment accumulates, making the cropping more noticeable on subsequent pages.

In contrast, when the workbook standard font size is set to 11, the default row height increases to 20 pixels. This aligns better with the text height, ensuring the calculated picture height (for example, 60 pixels) matches the content, thereby preventing cropping.

When both the workbook standard font size and the cell font size are set to same, the row height and text height remain consistent. As a result, the picture height calculation aligns correctly, and no cropping occurs even without using Autofit.

## Resolution

To avoid cropping, ensure that the row height and text height are synchronized before sizing images. This can be achieved by:

* Calling `AutofitRows()` after inserting text so that row heights are recalculated automatically, or
* Using consistent font sizes for both the workbook standard font and the cell text

By maintaining this alignment, the picture height calculation matches the text height, and the cropping issue is resolved consistently across all pages.
