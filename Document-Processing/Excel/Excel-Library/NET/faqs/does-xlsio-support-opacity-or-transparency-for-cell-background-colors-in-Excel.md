---
title: Transparency support for cell background color | Syncfusion
description: Learn whether Syncfusion XlsIO supports setting Opacity or transparency for cell background colors in Excel.
platform: document-processing
control: XlsIO
documentation: UG
---

# XlsIO support for cell background color transparency in Excel    

XlsIO does not support opacity or transparency for cell background colors in Excel.

While the XlsIO API allows setting alpha (transparency) values for cell background colors, Microsoft Excel does not support rendering transparent cell fills. Excel silently discards the alpha component during rendering and file saving. As a result, any transparency value set in XlsIO will be ignored, and Excel will apply only the RGB portion of the color. 

**For example:**
~~~
worksheet.Range["A1"].CellStyle.Color = Color.FromArgb(128, 255, 0, 0) //(50% transparent red)
worksheet.Range["A2"].CellStyle.Color = Color.FromArgb(255, 255, 0, 0) //(solid red)
~~~

Both render identically in Excel as solid red. While XlsIO accepts ARGB inputs, the alpha component has no effect due to Excel's inherent limitations. Only the RGB portion of the color is applied.
