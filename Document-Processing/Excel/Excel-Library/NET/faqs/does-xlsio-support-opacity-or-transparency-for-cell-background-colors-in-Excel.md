---
title: Opacity or transparency support for cell background colors | Syncfusion
description: Learn whether Syncfusion XlsIO supports setting Opacity or transparency for cell background colors in Excel.
platform: document-processing
control: XlsIO
documentation: UG
---

# Does XlsIO support opacity or transparency for cell background colors in Excel?

No, opacity or transparency for cell background colors is not supported in XlsIO.

Syncfusion XlsIO's API technically allows setting ARGB values (including alpha transparency) for cell backgrounds via calls like Color.FromArgb(alpha, r, g, b). However, Microsoft Excel does not support transparent cell backgrounds and silently discards the alpha component during rendering or file saving. As a result, any transparency value set in XlsIO will be ignored, and Excel will apply only the RGB portion of the color. 

**For example:**

Color.FromArgb(128, 255, 0, 0) (50% transparent red)
Color.FromArgb(255, 255, 0, 0) (solid red)

Both render identically in Excel as solid red.

While XlsIO accepts ARGB inputs, the alpha component has no effect due to Excel's inherent limitations. Only the RGB portion of the color is applied.
