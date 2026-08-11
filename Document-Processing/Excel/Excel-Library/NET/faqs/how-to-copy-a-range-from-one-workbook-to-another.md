---
title: How to copy a range from one workbook to another | XlsIO | Syncfusion
description: Learn how to copy a range of cells from one Excel workbook to another using the .NET Excel Library with code examples.
platform: document-processing
control: XlsIO
documentation: UG
---

# How to copy a range from one workbook to another?

You can copy a range from a source workbook to a destination workbook using the [CopyTo](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IRange.html#Syncfusion_XlsIO_IRange_CopyTo_Syncfusion_XlsIO_IRange_Syncfusion_XlsIO_ExcelCopyRangeOptions_) method. The following code example demonstrates this.

## Prerequisites

Before running the code example, make sure the following are in place:

* Install the [Syncfusion.XlsIO.Net.Core](https://www.nuget.org/packages/Syncfusion.XlsIO.Net.Core) NuGet package (or the platform-specific package such as `Syncfusion.XlsIO.WinForms` / `Syncfusion.XlsIO.WPF` for Windows-specific scenarios).
* Register a valid Syncfusion license at the application startup:

```csharp
Syncfusion.Licensing.SyncfusionLicenseProvider.RegisterLicense("YOUR_LICENSE_KEY");
```

* Add `SourceWorkbook.xlsx` and `DestinationWorkbook.xlsx` files in the application's working directory, or update the file paths passed to `Workbooks.Open` accordingly. Note that file paths are case-sensitive on Linux.
* Ensure the output directory is writable; the output file is created or overwritten when the code runs.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
using Syncfusion.XlsIO;

using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Excel2013;

  //ExcelOpenType.Automatic detects the source and destination file formats automatically
  IWorkbook sourceWorkbook = application.Workbooks.Open("SourceWorkbook.xlsx", ExcelOpenType.Automatic);
  IWorkbook destinationWorkbook = application.Workbooks.Open("DestinationWorkbook.xlsx", ExcelOpenType.Automatic);

  //Worksheets[0] accesses the first worksheet (0-based index)
  IWorksheet sourceWorksheet = sourceWorkbook.Worksheets[0];
  IWorksheet destinationWorksheet = destinationWorkbook.Worksheets[0];

  //Range[row, column, lastRow, lastColumn] defines a 90-row x 100-column range (A1:CV90)
  IRange sourceRange = sourceWorksheet.Range[1, 1, 90, 100];
  IRange destinationRange = destinationWorksheet.Range[1, 1, 90, 100];

  //Copy the source range to the destination range
  sourceRange.CopyTo(destinationRange);

  destinationWorkbook.SaveAs("CopyingRange.xlsx");
  sourceWorkbook.Close();
  destinationWorkbook.Close();
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using Syncfusion.XlsIO;

using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Excel2013;
  IWorkbook sourceWorkbook = application.Workbooks.Open("SourceWorkbook.xlsx", ExcelOpenType.Automatic);
  IWorkbook destinationWorkbook = application.Workbooks.Open("DestinationWorkbook.xlsx", ExcelOpenType.Automatic);

  //Worksheets[0] accesses the first worksheet (0-based index)
  IWorksheet sourceWorksheet = sourceWorkbook.Worksheets[0];
  IWorksheet destinationWorksheet = destinationWorkbook.Worksheets[0];

  //Range[row, column, lastRow, lastColumn] defines a 90-row x 100-column range (A1:CV90)
  IRange sourceRange = sourceWorksheet.Range[1, 1, 90, 100];
  IRange destinationRange = destinationWorksheet.Range[1, 1, 90, 100];

  //Copy the source range to the destination range
  sourceRange.CopyTo(destinationRange);

  destinationWorkbook.SaveAs("CopyingRange.xlsx");
  sourceWorkbook.Close();
  destinationWorkbook.Close();
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Imports Syncfusion.XlsIO

Using excelEngine As ExcelEngine = New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  application.DefaultVersion = ExcelVersion.Excel2013
  Dim sourceWorkbook As IWorkbook = application.Workbooks.Open("SourceWorkbook.xlsx", ExcelOpenType.Automatic)
  Dim destinationWorkbook As IWorkbook = application.Workbooks.Open("DestinationWorkbook.xlsx", ExcelOpenType.Automatic)

  'Worksheets(0) accesses the first worksheet (0-based index)
  Dim sourceWorksheet As IWorksheet = sourceWorkbook.Worksheets(0)
  Dim destinationWorksheet As IWorksheet = destinationWorkbook.Worksheets(0)

  'Range(row, column, lastRow, lastColumn) defines a 90-row x 100-column range (A1:CV90)
  Dim sourceRange As IRange = sourceWorksheet.Range(1, 1, 90, 100)
  Dim destinationRange As IRange = destinationWorksheet.Range(1, 1, 90, 100)

  'Copy the source range to the destination range
  sourceRange.CopyTo(destinationRange)

  destinationWorkbook.SaveAs("CopyingRange.xlsx")
  sourceWorkbook.Close()
  destinationWorkbook.Close()
End Using
{% endhighlight %}
{% endtabs %}

## See Also

* [How to copy/paste the cell values that contain only formula?](https://help.syncfusion.com/file-formats/xlsio/faqs/how-to-copy-paste-the-cell-values-that-contain-only-formula)
* [How to copy or move a range?](https://help.syncfusion.com/file-formats/xlsio/worksheet-cells-manipulation#copy-or-move-a-range)
* [How to copy and paste as link?](https://help.syncfusion.com/file-formats/xlsio/worksheet-cells-manipulation#copy-and-paste-as-link)
* [How to skip blanks while copying?](https://help.syncfusion.com/file-formats/xlsio/worksheet-cells-manipulation#skip-blanks-while-copying)
* [How to open an existing XLSX workbook and save it as XLS?](https://help.syncfusion.com/file-formats/xlsio/faqs/how-to-open-an-existing-xlsx-workbook-and-save-it-as-xls)
