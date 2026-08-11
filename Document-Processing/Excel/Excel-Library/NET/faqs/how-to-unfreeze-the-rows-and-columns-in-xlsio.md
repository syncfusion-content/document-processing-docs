---
title: How to unfreeze the rows and columns in XlsIO | XlsIO | Syncfusion
description: This page demonstrates with an example how to unfreeze rows and columns using the .NET Excel library.
platform: document-processing
control: XlsIO
documentation: UG
---

# How to unfreeze the rows and columns in XlsIO?

You can unfreeze rows and columns in Syncfusion<sup>&reg;</sup> XlsIO by calling the [RemovePanes](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IWorksheet.html#Syncfusion_XlsIO_IWorksheet_RemovePanes) method on a worksheet. The following code example demonstrates this.

## Prerequisites

Before running the code example, make sure the following are in place:

* Install the [Syncfusion.XlsIO.Net.Core](https://www.nuget.org/packages/Syncfusion.XlsIO.Net.Core) NuGet package (or the platform-specific package such as `Syncfusion.XlsIO.WinForms` / `Syncfusion.XlsIO.WPF` for Windows-specific scenarios).
* Register a valid Syncfusion license at the application startup:

```csharp
Syncfusion.Licensing.SyncfusionLicenseProvider.RegisterLicense("YOUR_LICENSE_KEY");
```

* Add a `Sample.xlsx` file in the application's working directory, or update the file path passed to `Workbooks.Open` accordingly. Note that file paths are case-sensitive on Linux.
* Ensure the output directory is writable; the output file is created or overwritten when the code runs.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
using Syncfusion.XlsIO;

using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Excel2013;

  //ExcelOpenType.Automatic detects the file format automatically
  IWorkbook workbook = application.Workbooks.Open("Sample.xlsx", ExcelOpenType.Automatic);
  IWorksheet worksheet = workbook.Worksheets[0];

  //Freeze rows 1-7 at cell A8 (rows above the cell)
  worksheet.Range[8, 1].FreezePanes();

  //Unfreeze the panes
  worksheet.RemovePanes();

  workbook.SaveAs("Unfreeze.xlsx");
  workbook.Close();
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using Syncfusion.XlsIO;

using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Excel2013;
  IWorkbook workbook = application.Workbooks.Open("Sample.xlsx", ExcelOpenType.Automatic);
  IWorksheet worksheet = workbook.Worksheets[0];

  //Freeze rows 1-7 at cell A8
  worksheet.Range[8, 1].FreezePanes();

  //Remove all frozen (and split) panes
  worksheet.RemovePanes();

  workbook.SaveAs("Unfreeze.xlsx");
  workbook.Close();
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Imports Syncfusion.XlsIO

Using excelEngine As ExcelEngine = New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  application.DefaultVersion = ExcelVersion.Excel2013
  Dim workbook As IWorkbook = application.Workbooks.Open("Sample.xlsx", ExcelOpenType.Automatic)
  Dim worksheet As IWorksheet = workbook.Worksheets(0)

  'Freeze rows 1-7 at cell A8
  worksheet.Range(8, 1).FreezePanes()

  'Remove all frozen (and split) panes
  worksheet.RemovePanes()

  workbook.SaveAs("Unfreeze.xlsx")
  workbook.Close()
End Using
{% endhighlight %}
{% endtabs %}

## See Also

* [What is the maximum range of Rows and Columns?](what-is-the-maximum-range-of-rows-and-columns)
* [How to hide the summary rows and columns using XlsIO?](how-to-hide-the-summary-rows-and-columns-using-xlsio)
* [How to sort two or more columns in a pivot table?](how-to-sort-two-or-more-columns-in-a-pivot-table)
* [How to freeze panes?](https://help.syncfusion.com/document-processing/excel/excel-library/net/working-with-excel-worksheet#freeze-panes)
* [How to unfreeze panes?](https://help.syncfusion.com/document-processing/excel/excel-library/net/working-with-excel-worksheet#unfreeze-panes)
* [How to split panes?](https://help.syncfusion.com/document-processing/excel/excel-library/net/working-with-excel-worksheet#split-panes)
