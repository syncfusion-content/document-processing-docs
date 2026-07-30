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

## Prerequisites

Before running the code example, make sure the following prerequisites are met:

- Install the **Syncfusion.XlsIO.WinForms** NuGet package (for Windows) or the **Syncfusion.XlsIO.Net.Core** package (for .NET Core / .NET 6+ cross-platform targets).
- Add the required `using` directives at the top of the file:
  - `using System.IO;` - for `Path.GetFullPath` (cross-platform tab).
  - `using Syncfusion.XlsIO;` - for the XlsIO types and `IRange`, `Merge`.
- The VB.NET equivalents: `Imports System.IO`, `Imports Syncfusion.XlsIO`.
- The example expects an input file at `Data/InputTemplate.xlsx` (cross-platform tab) or `InputTemplate.xlsx` (Windows-specific and VB.NET tabs). The input workbook must contain at least one worksheet with data in cells `B8:C11` (the range to be merged).
- The output folder (`Output`) must exist or be created by the application before calling `SaveAs`. `SaveAs` does not create missing parent directories on its own.

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

## See also

* [Merge Cells Formatting on GitHub](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/1010768-Merge-Cells/FAQ/Merge%20Cells%20Formatting/.NET/Merge%20Cells%20Formatting)
* [Merged Cells in Excel](https://help.syncfusion.com/document-processing/excel/excel-library/net/migrate-from-office-automation-to-syncfusion-xlsio/merge-cells-in-excel)
* [How to unmerge cells in an Excel worksheet](https://help.syncfusion.com/document-processing/excel/excel-library/net/migrate-from-office-automation-to-syncfusion-xlsio/unmerge-cells-in-excel)

