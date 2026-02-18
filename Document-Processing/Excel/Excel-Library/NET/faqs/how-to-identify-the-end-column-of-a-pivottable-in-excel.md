---
title: Identify the end column of a PivotTable in Excel | Syncfusion
description: Code example to identify the end column of a PivotTable in an Excel workbook using the Syncfusion .NET Excel library (XlsIO).
platform: document-processing
control: XlsIO
documentation: UG
---

# How to identify the end column of a PivotTable in Excel?

The following code examples demonstrate how to identify the end column of a PivotTable in an Excel workbook using C# (Cross-platform and Windows-specific) and VB.NET.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/FAQ/Pivot%20Tables%20End%20Column/.NET/End%20Column/End%20Column/Program.cs,180" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;

    // Open workbook (update path as needed)
    IWorkbook workbook = application.Workbooks.Open("PivotTable.xlsx");

    // Get the first pivot table
    IPivotTable pivotTable = workbook.Worksheets[0].PivotTables[0];

    // Ensure layout is calculated
    pivotTable.Layout();

    // Read EndLocation from the implementation type
    IRange endRange = (pivotTable as Syncfusion.XlsIO.Implementation.PivotTables.PivotTableImpl).EndLocation;
    int lastColumn = endRange.LastColumn;

    // Use lastColumn as needed (e.g., log)
    Console.WriteLine("PivotTable last column: " + lastColumn);
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %} 
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;

    // Open workbook (update path as needed)
    IWorkbook workbook = application.Workbooks.Open("PivotTable.xlsx");

    // Get the first pivot table
    IPivotTable pivotTable = workbook.Worksheets[0].PivotTables[0];

    // Ensure layout is calculated
    pivotTable.Layout();

    // Read EndLocation from the implementation type
    IRange endRange = (pivotTable as Syncfusion.XlsIO.Implementation.PivotTables.PivotTableImpl).EndLocation;
    int lastColumn = endRange.LastColumn;

    // Use lastColumn as needed (e.g., log)
    Console.WriteLine("PivotTable last column: " + lastColumn);
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As New ExcelEngine()
    Dim application As IApplication = excelEngine.Excel
    application.DefaultVersion = ExcelVersion.Xlsx

    ' Open workbook (update path as needed)
    Dim workbook As IWorkbook = application.Workbooks.Open("PivotTable.xlsx")

    Dim pivotTable As IPivotTable = workbook.Worksheets(0).PivotTables(0)

    ' Calculate layout
    pivotTable.Layout()

    ' Read EndLocation from implementation and get last column
    Dim endRange As IRange = DirectCast(pivotTable, Syncfusion.XlsIO.Implementation.PivotTables.PivotTableImpl).EndLocation
    Dim lastColumn As Integer = endRange.LastColumn

    Console.WriteLine("PivotTable last column: " & lastColumn)
End Using
{% endhighlight %}
{% endtabs %}       

A complete working example to identify the end column of a pivot table in C# is present on [this GitHub page](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/FAQ/Pivot%20Tables%20End%20Column/.NET/End%20Column).