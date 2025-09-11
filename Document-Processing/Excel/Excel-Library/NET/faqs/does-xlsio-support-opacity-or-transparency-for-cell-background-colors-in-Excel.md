---
title: Transparency support for cell background color | Syncfusion
description: Learn whether Syncfusion XlsIO supports setting Opacity or transparency for cell background colors in Excel.
platform: document-processing
control: XlsIO
documentation: UG
---

# XlsIO support for cell background color transparency in Excel

XlsIO does not support opacity or transparency for cell background colors in Excel.

Syncfusion XlsIO's API technically allows setting <code>ARGB</code> values (including alpha transparency) for cell backgrounds via calls like <code>Color.FromArgb(alpha, r, g, b)</code>. However, Microsoft Excel does not support transparent cell backgrounds and silently discards the alpha component during rendering or file saving. As a result, any transparency value set in XlsIO will be ignored, and Excel will apply only the RGB portion of the color. 

**For example:**

<code>Color.FromArgb(128, 255, 0, 0)</code> (50% transparent red)
<code>Color.FromArgb(255, 255, 0, 0)</code> (solid red)

Both render identically in Excel as solid red.

While XlsIO accepts ARGB inputs, the alpha component has no effect due to Excel's inherent limitations. Only the RGB portion of the color is applied.