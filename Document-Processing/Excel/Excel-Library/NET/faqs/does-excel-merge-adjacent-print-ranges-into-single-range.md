---
title: Does Excel merge adjacent print ranges into one? | Syncfusion
description: This page Explains how Microsoft Excel and Syncfusion XlsIO automatically merge adjacent print ranges into a single contiguous range.
platform: document-processing
control: XlsIO
documentation: UG
---

# Does Excel merge adjacent print ranges into single range?

Yes. When two adjacent ranges such as $A$1:$T$53 and $A$54:$T$101 are defined as print areas, Microsoft Excel automatically combines them into a single range ($A$1:$T$101). This occurs because the ranges are directly contiguous.

Excel treats multiple print areas as separate only when they are non-adjacent. Syncfusion XlsIO follows the same behavior and does not provide a way to prevent this merging for adjacent ranges.