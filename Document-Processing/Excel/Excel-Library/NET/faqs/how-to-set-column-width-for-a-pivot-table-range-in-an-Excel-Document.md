---
title: How to set column width for a pivot table range in Excel | Syncfusion
description: Code example to set column width for a pivot table range in an Excel Document using .NET Excel Library.
platform: document-processing
control: XlsIO
documentation: UG
---

# How to set column width for a pivot table range in an Excel Document?

In a Pivot Table, there is an option called **Autofit column widths on update**. If this option is enabled, Excel automatically applies autofit to the Pivot Table columns every time it is refreshed. This is the default behavior in Microsoft Excel.

In Syncfusion&reg; XlsIO, the default value for both **Autofit column widths on update** and **Refresh on load** is **true**. Therefore, if you manually set the column width, it may not be reflected in the output Excel file.

The following code examples demonstrate how to do this in C# (Cross-platform and Windows-specific) and VB.NET.

## Prerequisites

Before running the code example, make sure the following prerequisites are met:

- Install the **Syncfusion.XlsIO.WinForms** NuGet package (for Windows) or the **Syncfusion.XlsIO.Net.Core** package (for .NET Core / .NET 6+ cross-platform targets).
- Add the required `using` directives: `using Syncfusion.XlsIO;` and (for the cross-platform sample) `using System.IO;` (or `Imports Syncfusion.XlsIO` in VB.NET).
- The cross-platform C# sample expects the input file at `Data/InputTemplate.xlsx` relative to the working directory and writes the output to `Output/Output.xlsx`.
- The Windows-specific C# and VB.NET samples read `InputTemplate.xlsx` from and write `Output.xlsx` to the current working directory.
- The input workbook must contain a data range in `Worksheets[0]` (used as the pivot cache) and a blank second worksheet for the pivot to be created on. The pivot source data must contain a column named `Total` (referenced as `pivotTable.Fields["Total"]` in the example).

## Code example

{% tabs %}   
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/FAQ/Column%20width%20for%20pivot%20table%20range/.NET/Column%20width%20for%20pivot%20table%20range/Column%20width%20for%20pivot%20table%20range/Program.cs,180" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    IWorkbook workbook = application.Workbooks.Open(Path.GetFullPath(@"Data/InputTemplate.xlsx"));
    IWorksheet worksheet = workbook.Worksheets[0];
    IWorksheet worksheet1 = workbook.Worksheets[1];

    //Create pivot cache with the given data range
    IPivotCache cache = workbook.PivotCaches.Add(worksheet["A1:H5"]);

    //Create pivot table with the cache at the specified range
    IPivotTable pivotTable = worksheet1.PivotTables.Add("PivotTable1", worksheet1["A1"], cache);

    PivotTableImpl pivotTableImpl = pivotTable as PivotTableImpl;

    //Add Pivot table fields 
    pivotTable.Fields[0].Axis = PivotAxisTypes.Row;
    pivotTable.Fields[1].Axis = PivotAxisTypes.Row;
    pivotTable.DataFields.Add(pivotTable.Fields["Total"], "Sum", PivotSubtotalTypes.Sum);

    //Set column width
    worksheet1.Range["A10"].ColumnWidth = 50;

    //Disable pivot table autoformat    
    (pivotTable.Options as PivotTableOptions).IsAutoFormat = false;

    #region Save
    //Saving the workbook
    workbook.SaveAs(Path.GetFullPath("Output/Output.xlsx"));
    #endregion
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %} 
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;
    IWorkbook workbook = application.Workbooks.Open("InputTemplate.xlsx");
    IWorksheet worksheet = workbook.Worksheets[0];
    IWorksheet worksheet1 = workbook.Worksheets[1];

    //Create pivot cache with the given data range
    IPivotCache cache = workbook.PivotCaches.Add(worksheet["A1:H5"]);

    //Create pivot table with the cache at the specified range
    IPivotTable pivotTable = worksheet1.PivotTables.Add("PivotTable1", worksheet1["A1"], cache);

    PivotTableImpl pivotTableImpl = pivotTable as PivotTableImpl;

    //Add Pivot table fields 
    pivotTable.Fields[0].Axis = PivotAxisTypes.Row;
    pivotTable.Fields[1].Axis = PivotAxisTypes.Row;
    pivotTable.DataFields.Add(pivotTable.Fields["Total"], "Sum", PivotSubtotalTypes.Sum);

    //Set column width
    worksheet1.Range["A10"].ColumnWidth = 50;

    //Disable pivot table autoformat 
    (pivotTable.Options as PivotTableOptions).IsAutoFormat = false;

    workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As ExcelEngine = New ExcelEngine()
    Dim application As IApplication = excelEngine.Excel
    application.DefaultVersion = ExcelVersion.Xlsx
    Dim workbook As IWorkbook = application.Workbooks.Open("InputTemplate.xlsx")
    Dim worksheet As IWorksheet = workbook.Worksheets(0)
    Dim worksheet1 As IWorksheet = workbook.Worksheets(1)

    'Create pivot cache with the given data range
    Dim cache As IPivotCache = workbook.PivotCaches.Add(worksheet("A1:H5"))

    'Create pivot table with the cache at the specified range
    Dim pivotTable As IPivotTable = worksheet1.PivotTables.Add("PivotTable1", worksheet1("A1"), cache)

    Dim pivotTableImpl As PivotTableImpl = TryCast(pivotTable, PivotTableImpl)

    'Add pivot table fields
    pivotTable.Fields(0).Axis = PivotAxisTypes.Row
    pivotTable.Fields(1).Axis = PivotAxisTypes.Row
    pivotTable.DataFields.Add(pivotTable.Fields("Total"), "Sum", PivotSubtotalTypes.Sum)

    'Set column width
    worksheet1.Range("A10").ColumnWidth = 50

    'Disable pivot table autoformat 
    DirectCast(pivotTable.Options, PivotTableOptions).IsAutoFormat = False

    workbook.SaveAs("Output.xlsx")
End Using
{% endhighlight %}
{% endtabs %}

A complete working example to set column width for a pivot table range is available on [GitHub](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/FAQ/Column%20width%20for%20pivot%20table%20range/.NET/Column%20width%20for%20pivot%20table%20range).

## See also

- [How to enable pivottable show details in XlsIO](how-to-enable-pivottable-show-details-in-xlsio.md)
- [How to apply formatting to pivottable in Excel protected view](how-to-apply-formatting-to-pivottable-in-Excel-protected-view.md)
- [How to freeze pivot table header in excel workbook](how-to-freeze-pivot-table-header-in-excel-workbook.md)
