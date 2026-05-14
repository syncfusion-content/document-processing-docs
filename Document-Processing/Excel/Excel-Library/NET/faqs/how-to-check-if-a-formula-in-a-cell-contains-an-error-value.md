---
title: How to check if a formula in a cell contains an error value? | Syncfusion
description: This page describes how to check if a formula returns an error and how to access the corresponding error value using XlsIO.
platform: document-processing
control: XlsIO
documentation: UG
---

# How to check if a formula in a cell contains an error value?

Formulas are calculated during execution. Once calculated, you can check if the result has an error and retrieve the corresponding error value, such as #DIV/0! or #N/A, using built-in error-checking support.

The example below shows how to iterate the used range of a worksheet, check each cell for `HasFormulaErrorValue`, and print the `FormulaErrorValue` and the cell address.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;
    IWorkbook workbook = application.Workbooks.Open(Path.GetFullPath(@"Input/InputTemplate.xlsx"));
    IWorksheet worksheet = workbook.Worksheets[0];

    IRange usedRange = worksheet.UsedRange;
    int firstrow = usedRange.Row;
    int lastrow = usedRange.LastRow;
    int firstcol = usedRange.Column;
    int lastcol = usedRange.LastColumn;

    for (int row = firstrow; row <= lastrow; row++)
    {
        for (int col = firstcol; col <= lastcol; col++)
        {
            if (worksheet[row, col] != null && worksheet[row, col].HasFormulaErrorValue)
            {
                Console.WriteLine($"Formula error value: {worksheet[row,col].FormulaErrorValue} in Address: {worksheet[row,col].AddressLocal}");
            }
        }
    }

    workbook.SaveAs(Path.GetFullPath(@"Output/Output.xlsx"));
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;
    IWorkbook workbook = application.Workbooks.Open("InputTemplate.xlsx");
    IWorksheet worksheet = workbook.Worksheets[0];

    IRange usedRange = worksheet.UsedRange;
    int firstrow = usedRange.Row;
    int lastrow = usedRange.LastRow;
    int firstcol = usedRange.Column;
    int lastcol = usedRange.LastColumn;

    for (int row = firstrow; row <= lastrow; row++)
    {
        for (int col = firstcol; col <= lastcol; col++)
        {
            if (worksheet[row, col] != null && worksheet[row, col].HasFormulaErrorValue)
            {
                Console.WriteLine($"Formula error value: {worksheet[row,col].FormulaErrorValue} in Address: {worksheet[row,col].AddressLocal}");
            }
        }
    }

    workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As New ExcelEngine()
    Dim application As IApplication = excelEngine.Excel
    application.DefaultVersion = ExcelVersion.Xlsx
    Dim workbook As IWorkbook = application.Workbooks.Open("InputTemplate.xlsx")
    Dim worksheet As IWorksheet = workbook.Worksheets(0)

    Dim usedRange As IRange = worksheet.UsedRange
    Dim firstrow As Integer = usedRange.Row
    Dim lastrow As Integer = usedRange.LastRow
    Dim firstcol As Integer = usedRange.Column
    Dim lastcol As Integer = usedRange.LastColumn

    For row As Integer = firstrow To lastrow
        For col As Integer = firstcol To lastcol
            If worksheet(row, col) IsNot Nothing AndAlso worksheet(row, col).HasFormulaErrorValue Then
                Console.WriteLine("Formula error value: " & worksheet(row, col).FormulaErrorValue & " in Address: " & worksheet(row, col).AddressLocal)
            End If
        Next
    Next

    workbook.SaveAs("Output.xlsx")
End Using
{% endhighlight %}
{% endtabs %}

A complete working example in C# is present on <a href="https://github.com/SyncfusionExamples/XlsIO-Examples/tree/1014444-FormulaError/FAQ/FormulaError%20Value/.NET/FormulaError%20Value">this GitHub page</a>.