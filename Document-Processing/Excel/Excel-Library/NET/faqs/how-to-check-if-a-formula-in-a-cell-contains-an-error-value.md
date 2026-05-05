---
title: How to Check Formula Error Values in a Cell | Syncfusion
description: Explains how to detect whether a formula returns an error using HasFormulaErrorValue and read the FormulaErrorValue via IRange in XlsIO.
platform: document-processing
control: XlsIO
documentation: UG
---

# How to check if a formula in a cell contains an error value?

In XlsIO there is no direct property that predicts whether a formula will evaluate to an error at design time, but the `IRange` interface exposes two useful members:

- `HasFormulaErrorValue` (Read-Only): returns true when the formula in the cell evaluates to an error value.
- `FormulaErrorValue` (Read-Only): returns the error value as a string (for example `#DIV/0!`, `#N/A`, etc.).

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
