---
title: How to freeze pivot table header in Excel workbook? | Syncfusion
description: Code example to freeze the header row/column of a PivotTable using Syncfusion .NET Excel library (XlsIO).
platform: document-processing
control: XlsIO
documentation: UG
---

# How to freeze pivot table header in Excel workbook?

The following code examples demonstrate freezing the header row and column of a PivotTable using C# (Cross-platform and Windows-specific) and VB.NET.

{% tabs %}   
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/FAQ/Freeze%20Pivot%20Table%20Header/.NET/FreezePivotTableHeader/FreezePivotTableHeader/Program.cs,180" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;
    IWorkbook workbook = application.Workbooks.Open(Path.GetFullPath(@"Data/Input.xlsx"));
    
    //Freeze row and column
    IWorksheet freezeSheet = workbook.Worksheets[1];
    IRange range = freezeSheet.PivotTables[0].Location;
    freezeSheet[range.Row + 1, range.Column + 1].FreezePanes();

    //Save the workbook
    workbook.SaveAs(Path.GetFullPath(@"Output/Output.xlsx"));
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %} 
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;
    IWorkbook workbook = application.Workbooks.Open("Input.xlsx");

    //Freeze row and column (use correct worksheet index or name)
    IWorksheet freezeSheet = workbook.Worksheets[1];
    IRange range = freezeSheet.PivotTables[0].Location;
    freezeSheet[range.Row + 1, range.Column + 1].FreezePanes();

    //Save the workbook
    workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As New ExcelEngine()
    Dim application As IApplication = excelEngine.Excel
    application.DefaultVersion = ExcelVersion.Xlsx
    Dim workbook As IWorkbook = application.Workbooks.Open("Input.xlsx")

    'Freeze row and column (use correct worksheet index or name)
    Dim freezeSheet As IWorksheet = workbook.Worksheets(1)
    Dim range As IRange = freezeSheet.PivotTables(0).Location
    freezeSheet(range.Row + 1, range.Column + 1).FreezePanes()

    'Save the workbook
    workbook.SaveAs("Output.xlsx")
End Using
{% endhighlight %}
{% endtabs %}       

A complete working example in C# is present on <a href="https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/FAQ/Freeze%20Pivot%20Table%20Header/.NET/FreezePivotTableHeader">this GitHub page</a>.