---
title: How to set a line break inside a cell | XlsIO | Syncfusion
description: Learn how to insert and display line breaks within an Excel cell using the .NET Excel Library with code examples.
platform: document-processing
control: XlsIO
documentation: UG
---

# How to set a line break inside a cell?

To set a line break inside a cell, enable the `WrapText` style for the cell and include a newline character in the cell text. The following code example demonstrates this.

## Prerequisites

Before running the code example, make sure the following are in place:

* Install the [Syncfusion.XlsIO.Net.Core](https://www.nuget.org/packages/Syncfusion.XlsIO.Net.Core) NuGet package (or the platform-specific package such as `Syncfusion.XlsIO.WinForms` / `Syncfusion.XlsIO.WPF` for Windows-specific scenarios).
* Register a valid Syncfusion license at the application startup:

```csharp
Syncfusion.Licensing.SyncfusionLicenseProvider.RegisterLicense("YOUR_LICENSE_KEY");
```

* Ensure the output directory is writable; the output file is created or overwritten when the code runs.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
using Syncfusion.XlsIO;

using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Excel2013;

  //Workbooks.Create(int) creates a workbook with the given number of worksheets
  IWorkbook workbook = application.Workbooks.Create(1);
  IWorksheet worksheet = workbook.Worksheets[0];

  //Enable text wrapping so the line break is visible in the cell
  worksheet.Range["A1"].CellStyle.WrapText = true;
  worksheet.Range["A1"].Text = String.Format("Hello\nworld");
 
  workbook.SaveAs("LineBreak.xlsx");
  workbook.Close();
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using Syncfusion.XlsIO;

using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Excel2013;
  IWorkbook workbook = application.Workbooks.Create(1);
  IWorksheet worksheet = workbook.Worksheets[0];

  //Enable text wrapping and insert a line break into A1
  worksheet.Range["A1"].CellStyle.WrapText = true;
  worksheet.Range["A1"].Text = String.Format("Hello\nworld");
  workbook.SaveAs("LineBreak.xlsx");
  workbook.Close();
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Imports Syncfusion.XlsIO

Using excelEngine As ExcelEngine = New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  application.DefaultVersion = ExcelVersion.Excel2013
  Dim workbook As IWorkbook = application.Workbooks.Create(1)
  Dim worksheet As IWorksheet = workbook.Worksheets(0)

  'Enable text wrapping and insert a line break into A1
  worksheet.Range("A1").CellStyle.WrapText = True
  worksheet.Range("A1").Text = String.Format("Hello" & vbLf & "world")
  workbook.SaveAs("LineBreak.xlsx")
  workbook.Close()
End Using
{% endhighlight %}
{% endtabs %}

## See Also

* [How to format text within a cell?](how-to-format-text-within-a-cell)
* [How to protect certain cells in a worksheet?](how-to-protect-certain-cells-in-a-worksheet)
* [How to copy/paste the cell values that contain only formula?](how-to-copy-paste-the-cell-values-that-contain-only-formula)
* [How to change the grid line color of the Excel sheet?](how-to-change-the-grid-line-color-of-the-excel-sheet)
* [How to show or hide gridlines?](https://help.syncfusion.com/file-formats/xlsio/working-with-excel-worksheet#show-or-hide-grid-lines)
* [How to apply wrap text?](https://help.syncfusion.com/file-formats/xlsio/working-with-cell-or-range-formatting#apply-wrap-text)
