---
title: How to set column width for a pivot table range in Excel | Syncfusion
description: Code example to set column width for a pivot table range in an Excel Document using Syncfusion .NET Excel library (XlsIO).
platform: document-processing
control: XlsIO
documentation: UG
---

# How to set column width for a pivot table range in an Excel Document?

In a Pivot Table, there is an option called **Autofit column widths on update**. If this option is enabled, Excel automatically applies autofit to the Pivot Table columns every time it is refreshed. This is the default behavior in Microsoft Excel.

In Syncfusion&reg; XlsIO, the default value for both **Autofit column widths on update** and **Refresh on load** is **true**. Therefore, if you manually set the column width, it may not be reflected in the output Excel file.

The following code examples demonstrate how to do this in C# (Cross-platform and Windows-specific) and VB.NET.

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

A complete working example to set column width for a pivot table range in an Excel Document in C# is present on [this GitHub page](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/FAQ/Column%20width%20for%20pivot%20table%20range/.NET/Column%20width%20for%20pivot%20table%20range).