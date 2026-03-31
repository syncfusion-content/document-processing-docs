---
title: Restore Excel formulas stored as text | Syncfusion
description: Code example to restore Excel formulas stored as text using Syncfusion .NET Excel library (XlsIO).
platform: document-processing
control: XlsIO
documentation: UG
---

# How to restore formulas stored as text in Excel documents?

The following code examples demonstrate how to handle Excel formulas stored as strings using cell type validation using C# (Cross-platform and Windows-specific) and VB.NET.

{% tabs %}   
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/FAQ/Formula%20stored%20as%20text%20handling/.NET/FormulaStoredAsTextHandling/FormulaStoredAsTextHandling/Program.cs,180" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;

    //Create a new workbook with one worksheet
    IWorkbook workbook = application.Workbooks.Create(1);
    IWorksheet worksheet = workbook.Worksheets[0];

    //Assign a formula as text to the cell
    worksheet["A1"].Text = "=SUM(2+2)";

    //Get the cell type of the cell
    Syncfusion.XlsIO.Implementation.WorksheetImpl.TRangeValueType cellType =
        (worksheet as WorksheetImpl).GetCellType(1, 1, false);

    //Check if the cell type is string
    if (cellType == TRangeValueType.String)
    {
        //Retrieve the formula text
        string formulaText = worksheet["A1"].Text;

        //Clear the cell value
        worksheet["A1"].Value = string.Empty;

        //Reassign the formula to the cell
        worksheet["A1"].Formula = formulaText;
    }

    //Save the workbook
    workbook.SaveAs(Path.GetFullPath(@"Output/Output.xlsx"));
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %} 
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;

    //Create a new workbook with one worksheet
    IWorkbook workbook = application.Workbooks.Create(1);
    IWorksheet worksheet = workbook.Worksheets[0];

    //Assign a formula as text to the cell
    worksheet["A1"].Text = "=SUM(2+2)";

    //Get the cell type of the cell
    Syncfusion.XlsIO.Implementation.WorksheetImpl.TRangeValueType cellType =
        (worksheet as WorksheetImpl).GetCellType(1, 1, false);

    //Check if the cell type is string
    if (cellType == TRangeValueType.String)
    {
        //Retrieve the formula text
        string formulaText = worksheet["A1"].Text;

        //Clear the cell value
        worksheet["A1"].Value = string.Empty;

        //Reassign the formula to the cell
        worksheet["A1"].Formula = formulaText;
    }

    //Save the workbook
    workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As New ExcelEngine()
    Dim application As IApplication = excelEngine.Excel
    application.DefaultVersion = ExcelVersion.Xlsx

    'Create a new workbook with one worksheet
    Dim workbook As IWorkbook = application.Workbooks.Create(1)
    Dim worksheet As IWorksheet = workbook.Worksheets(0)

    'Assign a formula as text to the cell
    worksheet("A1").Text = "=SUM(2+2)"

    'Get the cell type
    Dim cellType As Syncfusion.XlsIO.Implementation.WorksheetImpl.TRangeValueType =
        CType(worksheet, WorksheetImpl).GetCellType(1, 1, False)

    'Check if the cell type is string
    If cellType = TRangeValueType.String Then
        'Retrieve the formula text
        Dim formulaText As String = worksheet("A1").Text

        'Clear the cell value
        worksheet("A1").Value = String.Empty

        'Reassign the formula to the cell
        worksheet("A1").Formula = formulaText
    End If

    'Save the workbook
    workbook.SaveAs(IO.Path.GetFullPath("Output/Output.xlsx"))
End Using
{% endhighlight %}
{% endtabs %}       

A complete working example in C# is present on <a href="https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/FAQ/Formula%20stored%20as%20text%20handling/.NET/FormulaStoredAsTextHandling">this GitHub page</a>.