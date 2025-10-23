---
title: XlsIO Behavior | Syncfusion
description: In this section, you can learn about the various behaviors of Syncfusion Essential XlsIO.
platform: document-processing
control: XlsIO
documentation: UG
---

# XlsIO Behavior

This section, provides the details about various behavior of Syncfusion Essential XlsIO.

## Formula in Named Range

As per Microsoft Excel behavior, when the formula is used in the named ranges, the calculation of these formulas will be done only when the named range is used in the cells. When you check the Value in the named range manager, it does not show you the calculated value. Similarly, XlsIO does not calculate formulas in the named ranges. So, the ReferToRange property is not set. However, if the named range is defined with a cell reference, Excel sets the ReferToRange accordingly. Syncfusion XlsIO follows the same behavior. You can set the named range formula to any of the Excel cell and get the calculated value.
