---
title: Why aren’t cells merged when inserting rows or columns? | Syncfusion
description: This FAQ explains why cells aren’t merged when inserting rows or columns using Format as Before/After, consistent with Microsoft Excel behavior.
platform: document-processing
control: XlsIO
documentation: UG
---

# Why are cells not merged when inserting a row or column?

This is the intended behavior in Syncfusion XlsIO that aligns with Microsoft Excel. When inserting a row with the "Format as Before" or "Format as After" option, cells in the inserted row or column are not merged, even when a row above or below the inserted row contains merged cells.

In Microsoft Excel, while inserting rows or columns with formatting options, the merged cells from the adjacent rows are not copied to the inserted row. This means the inserted row will have unmerged cells, preserving the original Excel behavior.