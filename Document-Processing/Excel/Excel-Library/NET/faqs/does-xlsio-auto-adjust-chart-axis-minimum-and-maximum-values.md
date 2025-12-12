---
title: Chart axis auto-adjust in XlsIO | Syncfusion
description: This page explains whether Syncfusion XlsIO supports auto adjustment of chart axis values using Syncfusion .NET Excel library (XlsIO).
platform: document-processing 
control: XlsIO 
documentation: UG
---

# Does XlsIO auto-adjust chart axis minimum and maximum values?

No. In Microsoft Excel, if the axis maximum value is lower than the minimum value, Excel automatically adjusts the minimum value (for example, a minimum of 1.25 and maximum of 0 may yield a minimum like -10).  XlsIO does not support this auto adjustment of chart axis values. When configuring chart axes, ensure that the maximum value is greater than the minimum value.   
 
For details on setting chart axis minimum and maximum values in XlsIO, see the <a href="https://help.syncfusion.com/document-processing/excel/excel-library/net/charts/chart-axis#axis-settings">Chart Axis Settings</a>.