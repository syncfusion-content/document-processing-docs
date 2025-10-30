---
title: Autofit support for merged cells | Syncfusion
description: Learn whether Syncfusion XlsIO supports autofit for merged cells in Excel using Syncfusion .NET Excel library (XlsIO).
platform: document-processing
control: XlsIO
documentation: UG
---

# Does XlsIO support autofit for merged cells? 

No, XlsIO does not support autofit for merged cells. As per Microsoft Excel behavior, the autofit is not applied to the rows/columns containing merged cells. To adjust row height or column width for merged cells, set it manually using the <a href="https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IRange.html#Syncfusion_XlsIO_IRange_RowHeight">RowHeight</a> and <a href="https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IRange.html#Syncfusion_XlsIO_IRange_ColumnWidth">ColumnWidth</a>  properties.
