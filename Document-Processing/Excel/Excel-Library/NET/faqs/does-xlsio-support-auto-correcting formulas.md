---
title: Support for auto-correcting formulas | Syncfusion
description: This page explains whether Syncfusion XlsIO supports auto-correcting formulas using Syncfusion .NET Excel library (XlsIO).
platform: document-processing
control: XlsIO
documentation: UG
---

# Does XlsIO support auto-correcting formulas?

No, Syncfusion XlsIO does not support auto-correcting or recalculating formulas automatically when loading Excel files. To resolve this, open and resave the Excel file using Microsoft Excel. This triggers formula evaluation and updates the cached results. Once resaved, XlsIO can process the file and return the correct values.

Alternatively, invoke the <a href="https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IWorksheet.html#Syncfusion_XlsIO_IWorksheet_Calculate">Calculate</a> method of <a href="https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IWorksheet.html">IWorksheet</a> to evaluate and update all formulas in the worksheet.

Use the <a href="https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IWorksheet.html#Syncfusion_XlsIO_IWorksheet_EnableSheetCalculations">EnableSheetCalculations</a> method of <a href="https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IWorksheet.html">IWorksheet</a> to initialize <a href="https://help.syncfusion.com/document-processing/excel/excel-library/net/working-with-formulas#calculation-engine">CalcEngine</a> objects and retrieve calculated values of formulas in a worksheet. On completion of worksheet calculation, invoke the <a href="https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IWorksheet.html#Syncfusion_XlsIO_IWorksheet_DisableSheetCalculations">DisableSheetCalculations</a> method of <a href="https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IWorksheet.html">IWorksheet</a> to dispose all  <a href="https://help.syncfusion.com/document-processing/excel/excel-library/net/working-with-formulas#calculation-engine">CalcEngine</a> objects.

For more details, please refer to <a href="https://help.syncfusion.com/document-processing/excel/excel-library/net/working-with-formulas">Working with Formulas | Syncfusion</a>.