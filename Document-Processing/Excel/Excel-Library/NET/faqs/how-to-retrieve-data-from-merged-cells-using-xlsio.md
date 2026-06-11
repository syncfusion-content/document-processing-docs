---
title: Retrieve data from merged cells using XlsIO? | Syncfusion
description: Explains how to retrieve values from merged cells using Syncfusion XlsIO by checking `IRange.IsMerged` and reading from the `MergeArea` top-left cell.
platform: document-processing
control: XlsIO
documentation: UG
---

# How to retrieve data from merged cells using XlsIO?

When a cell belongs to a merged region the visible value is stored in the top-left cell of the merged area. Use `IRange.IsMerged` to detect merged cells and `IRange.MergeArea` to obtain the full merged region, then read the value from its top-left cell.

The following example demonstrates this pattern.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
// Create an instance of ExcelEngine
using (ExcelEngine excelEngine = new ExcelEngine())
{
    // Set the default Excel version (optional)
    excelEngine.Excel.DefaultVersion = ExcelVersion.Excel2016;

    // Load the workbook
    IWorkbook workbook = excelEngine.Excel.Workbooks.Open(Path.GetFullPath(@"Data/InputTemplate.xlsx"));
    IWorksheet worksheet = workbook.Worksheets[0];

    // Coordinates of the cell to read
    int row = 2, col = 5;

    IRange range = worksheet[row, col];

    string data = range.IsMerged ? worksheet[range.MergeArea.Row, range.MergeArea.Column].Value : range.Value;

    Console.WriteLine(data);

    // Optionally save changes to a new file
    workbook.SaveAs(Path.GetFullPath(@"Output/Output.xlsx"));
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
// Same code applies for Windows-specific scenarios
using (ExcelEngine excelEngine = new ExcelEngine())
{
    excelEngine.Excel.DefaultVersion = ExcelVersion.Excel2016;
    IWorkbook workbook = excelEngine.Excel.Workbooks.Open("InputTemplate.xlsx");
    IWorksheet worksheet = workbook.Worksheets[0];

    int row = 2, col = 5;
    IRange range = worksheet[row, col];
    string data = range.IsMerged ? worksheet[range.MergeArea.Row, range.MergeArea.Column].Value : range.Value;

    Console.WriteLine(data);
    workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As New ExcelEngine()
    excelEngine.Excel.DefaultVersion = ExcelVersion.Excel2016
    Dim workbook As IWorkbook = excelEngine.Excel.Workbooks.Open(Path.GetFullPath("Data/InputTemplate.xlsx"))
    Dim worksheet As IWorksheet = workbook.Worksheets(0)

    Dim data As String = Nothing
    Dim row As Integer = 2
    Dim col As Integer = 5

    Dim range As IRange = worksheet(row, col)

    If range.IsMerged Then
        Dim merged As IRange = range.MergeArea
        data = worksheet(merged.Row, merged.Column).Value
    Else
        data = range.Value
    End If

    Console.WriteLine(data)
    workbook.SaveAs(Path.GetFullPath("Output/Output.xlsx"))
End Using
{% endhighlight %}
{% endtabs %}

A complete working example in C# is present on <a href="https://github.com/SyncfusionExamples/XlsIO-Examples/tree/999887-Merge-Cell/FAQ/Merge%20Cell%20Data/.NET/Merge%20Area%20Data">this GitHub page</a>.
