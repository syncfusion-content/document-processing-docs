---
title: Merged Cells and Row Insertion in .NET Excel Library | Syncfusion
description: Format as Before or After behavior describes why cells are not merged when inserting rows or columns in Excel.
platform: document-processing
control: XlsIO
documentation: UG
---

# Cell Merging During Row and Column Insertions in .NET Excel Library

In Microsoft Excel, when inserting rows or columns using formatting options such as "Format as Before" or "Format as After" only the formatting (such as font, color, and borders) is applied from the adjacent rows or columns. However, merged cell structures are not duplicated. Even if the neighboring row or column contains merged cells, the newly inserted row or column will contain unmerged, individual cells. 

The Syncfusion Excel library follows the same behavior. So, when inserting a row with the "Format as Before" or "Format as After" option, cells in the inserted row or column are not merged.
