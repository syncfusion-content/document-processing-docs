---
title: How to Merge Cells Preserving Top-Left Value in XlsIO | Syncfusion
description: Shows how to merge a range so only the top-left cell's value is kept and its formatting applied to the merged region using Syncfusion XlsIO.
platform: document-processing
control: XlsIO
documentation: UG
---

# How to Merge Cells Preserving TopLeft Value and Format in XlsIO?

When you need Excel-style merging that keeps only the top-left cell's value and applies the top-left cell style to the whole merged area, call `Range.Merge(true)`. This clears the other cells in the region and preserves the top-left value and formatting.

The following examples show a minimal, copy-paste-ready pattern for C# (cross-platform and Windows-specific) and VB.NET.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;
    IWorkbook workbook = application.Workbooks.Open(Path.GetFullPath(@"Data/InputTemplate.xlsx"));
    IWorksheet worksheet = workbook.Worksheets[0];

    // Merge: true preserves top-left value and copies top-left formatting to merged area
    worksheet.Range["B8:C11"].Merge();

    workbook.SaveAs(Path.GetFullPath(@"Output/Output.xlsx"));
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;
    IWorkbook workbook = application.Workbooks.Open(InputTemplate.xlsx");
    IWorksheet worksheet = workbook.Worksheets[0];

    // Merge the range and keep top-left value & formatting
    worksheet.Range["B8:C11"].Merge(true);

    workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As New ExcelEngine()
    Dim application As IApplication = excelEngine.Excel
    application.DefaultVersion = ExcelVersion.Xlsx
    Dim workbook As IWorkbook = application.Workbooks.Open("InputTemplate.xlsx")
    Dim worksheet As IWorksheet = workbook.Worksheets(0)

    ' Merge the range and keep top-left value & formatting
    worksheet.Range("B8:C11").Merge(True)

    workbook.SaveAs("Output.xlsx")
End Using
{% endhighlight %}
{% endtabs %}

A complete working example in C# is present on <a href="https://github.com/SyncfusionExamples/XlsIO-Examples/tree/1010768-Merge-Cells/FAQ/Merge%20Cells%20Formatting/.NET/Merge%20Cells%20Formatting">this GitHub page</a>.