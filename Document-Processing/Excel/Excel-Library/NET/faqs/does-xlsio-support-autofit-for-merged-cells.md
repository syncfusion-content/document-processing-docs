---
title: Merged Cell Autofit in .NET Excel Library | Syncfusion
description: Autofit for merged cells explains whether Syncfusion XlsIO can adjust row height and column width in merged Excel cells.
platform: document-processing
control: XlsIO
documentation: UG
---

# Merged Cell Autofit in .NET Excel Library

No, XlsIO does not support autofit for merged cells. As per Microsoft Excel behavior, the autofit is not applied to the rows/columns containing merged cells. To adjust row height or column width for merged cells, set it manually using the <a href="https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IRange.html#Syncfusion_XlsIO_IRange_RowHeight">RowHeight</a> and <a href="https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IRange.html#Syncfusion_XlsIO_IRange_ColumnWidth">ColumnWidth</a>  properties.
