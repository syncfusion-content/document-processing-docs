---
title: Why aren’t cells merged when inserting rows or columns? | Syncfusion
description: This FAQ explains why cells aren’t merged when inserting rows or columns using Format as Before/After, consistent with Microsoft Excel behavior.
platform: document-processing
control: XlsIO
documentation: UG
---

# Why are cells not merged when inserting a row or column?

In Microsoft Excel, when inserting rows or columns using formatting options such as "Format as Before" or "Format as After," only the formatting (such as font, color, and borders) is applied from the adjacent rows or columns. However, merged cell structures are not duplicated. Even if the neighboring row or column contains merged cells, the newly inserted row or column will contain unmerged, individual cells. 

The Syncfusion Excel library follows the same behavior. So, when inserting a row with the "Format as Before" or "Format as After" option, cells in the inserted row or column are not merged.