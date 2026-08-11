---
title: Fix “Can't open PivotTable source file” error in XlsIO | Syncfusion
description: This page explains how to resolve the "Can't open Pivottable source file" error using .NET Excel Library.
platform: document-processing
control: XlsIO
documentation: UG
---

# How to resolve the “Can't open Pivot table source file” error?

Deleting the source worksheet and refreshing the PivotTable may work in the current session, but reopening the saved workbook and refreshing can trigger this error. If “Refresh data when opening the file” is enabled, Excel will not disable it automatically. This is Microsoft Excel behavior, and XlsIO follows the same behavior.

**Recommendations:**

* If you need to remove the worksheet that contains the PivotTable’s source data, hide the worksheet instead of deleting it.
* If the source worksheet no longer exists, disable IsRefreshOnLoad before saving the workbook.

The following code illustrate how to disable the IsRefreshOnLoad property.

## Prerequisites

Before running the code example, make sure the following prerequisites are met:

- Install the **Syncfusion.XlsIO.WinForms** NuGet package (for Windows) or the **Syncfusion.XlsIO.Net.Core** package (for .NET Core / .NET 6+ cross-platform targets).
- Add the required `using` directives at the top of the file:
  - `using System;` - for `Console` and exception handling.
  - `using System.IO;` - for `FileStream` / `FileMode` if you replace the `Workbooks.Open` overload with a stream-based one. Not required for the path-based overload used in the samples.
  - `using Syncfusion.XlsIO;` - for the XlsIO types and `PivotTableImpl` (C# and VB.NET).
- The VB.NET equivalents: `Imports System`, `Imports Syncfusion.XlsIO`.
- The example expects an input file at `Data/Sample.xlsx` (cross-platform and Windows-specific C# tabs) or `../../Data/Sample.xlsx` (VB.NET tab). The input workbook must contain a PivotTable anchored to a worksheet whose data is in a different worksheet.
- The output folder (`Output`) must exist or be created by the application before calling `SaveAs`. `SaveAs` does not create missing parent directories on its own.

{% tabs %}  
{% highlight c# tabtitle="C# [Cross-platform]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;
    IWorkbook workbook = application.Workbooks.Open("Data/Sample.xlsx");
    IWorksheet pivotSheet = workbook.Worksheets[0];
   
    IPivotTable pivotTable = workbook.Worksheets[1].PivotTables[0];
    PivotTableImpl pivotTableImpl = pivotTable as PivotTableImpl;

    //Disable the refreshing option
    pivotTableImpl.Cache.IsRefreshOnLoad = false;

    #region Save
    //Saving the workbook
    workbook.SaveAs("Output/PivotTable.xlsx");
    #endregion
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;
    IWorkbook workbook = application.Workbooks.Open("Data/Sample.xlsx");
    IWorksheet pivotSheet = workbook.Worksheets[0];
   
    IPivotTable pivotTable = workbook.Worksheets[1].PivotTables[0];
    PivotTableImpl pivotTableImpl = pivotTable as PivotTableImpl;

    //Disable the refreshing option
    pivotTableImpl.Cache.IsRefreshOnLoad = false;

    #region Save
    //Saving the workbook
    workbook.SaveAs("Output/PivotTable.xlsx");
    #endregion
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As New ExcelEngine()
    Dim application As IApplication = excelEngine.Excel
    application.DefaultVersion = ExcelVersion.Xlsx

    Dim workbook As IWorkbook = application.Workbooks.Open("../../Data/Sample.xlsx")
    Dim pivotSheet As IWorksheet = workbook.Worksheets(0)
    Dim pivotTable As IPivotTable = workbook.Worksheets(1).PivotTables(0)
    Dim pivotTableImpl As PivotTableImpl = TryCast(pivotTable, PivotTableImpl)

    ' Disable the refreshing option
    pivotTableImpl.Cache.IsRefreshOnLoad = False

    ' Save the workbook
    workbook.SaveAs("../../Output/PivotTable.xlsx")
End Using
{% endhighlight %}
{% endtabs %}  


The following code shows how to hide Excel worksheet.

{% tabs %}  
{% highlight c# tabtitle="C# [Cross-platform]" %}
//Hide the worksheet
worksheet.Visibility = WorksheetVisibility.Hidden;
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Hide the worksheet
worksheet.Visibility = WorksheetVisibility.Hidden;
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Hide the worksheet
worksheet.Visibility = WorksheetVisibility.Hidden
{% endhighlight %}
{% endtabs %}  

## See also

* [Hide Excel Worksheets](https://help.syncfusion.com/document-processing/excel/excel-library/net/migrate-from-office-automation-to-syncfusion-xlsio/hide-excel-worksheets)
* [Working with Pivot Tables](https://help.syncfusion.com/document-processing/excel/excel-library/net/working-with-pivot-tables)
* [Pivot Table in Excel](https://help.syncfusion.com/document-processing/excel/excel-library/net/working-with-pivot-tables#pivot-table)

