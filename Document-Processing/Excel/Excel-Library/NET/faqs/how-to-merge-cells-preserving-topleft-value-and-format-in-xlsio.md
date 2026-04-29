---
title: How to merge cells preserving cell value and formatting | Syncfusion
description: Shows how to merge a range so only the top-left cell's value is kept and its formatting applied to the merged region using Syncfusion XlsIO.
platform: document-processing
control: XlsIO
documentation: UG
---

# How to merge cells preserving top left cell value and formatting?

To merge cells in Excel while preserving only the top-left cell’s value and extending its formatting across the entire merged range, you can use the Range.Merge(true) method. This approach ensures that all other cells within the selected region are cleared, while the content and style of the top-left cell are retained and applied uniformly to the merged area.

The following code examples shows how to merge cells preserving cell value and formatting using C# (cross-platform and Windows-specific) and VB.NET.

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
