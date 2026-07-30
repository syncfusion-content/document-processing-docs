---
title: Hide the summary rows and columns using XlsIO | Syncfusion
description: This page shows how to control the position of summary rows and columns using the .NET Excel library.
platform: document-processing
control: XlsIO
documentation: UG
---

# How to hide the summary rows and columns using XlsIO?

You can hide the summary rows and columns by using the [IsSummaryRowBelow](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IPageSetup.html#Syncfusion_XlsIO_IPageSetup_IsSummaryRowBelow) and [IsSummaryColumnRight](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IPageSetup.html#Syncfusion_XlsIO_IPageSetup_IsSummaryColumnRight) properties. The following code snippet illustrates this.

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

  //ExcelOpenType.Automatic detects the source file format automatically
  IWorkbook workbook = application.Workbooks.Open("Sample.xlsx", ExcelOpenType.Automatic);
  IWorksheet worksheet = workbook.Worksheets[0];

  //Place summary rows above the detail rows (default is below)
  worksheet.PageSetup.IsSummaryRowBelow = false;

  //Place summary columns to the left of the detail columns (default is to the right)
  worksheet.PageSetup.IsSummaryColumnRight = false;

  workbook.SaveAs("SuppressRowsColumns.xlsx");
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

  //Place summary rows above the detail rows (default is below)
  worksheet.PageSetup.IsSummaryRowBelow = false;

  //Place summary columns to the left of the detail columns (default is to the right)
  worksheet.PageSetup.IsSummaryColumnRight = false;

  workbook.SaveAs("SuppressRowsColumns.xlsx");
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

  'Place summary rows above the detail rows (default is below)
  worksheet.PageSetup.IsSummaryRowBelow = False

  'Place summary columns to the left of the detail columns (default is to the right)
  worksheet.PageSetup.IsSummaryColumnRight = False

  workbook.SaveAs("SuppressRowsColumns.xlsx")
  workbook.Close()
End Using
{% endhighlight %}
{% endtabs %}

## See Also

* [What is the maximum range of Rows and Columns?](https://help.syncfusion.com/document-processing/excel/excel-library/net/faqs/what-is-the-maximum-range-of-rows-and-columns)
* [How to unfreeze the rows and columns in XlsIO?](https://help.syncfusion.com/document-processing/excel/excel-library/net/faqs/how-to-unfreeze-the-rows-and-columns-in-xlsio)
* [How to sort two or more columns in a pivot table?](https://help.syncfusion.com/document-processing/excel/excel-library/net/faqs/how-to-sort-two-or-more-columns-in-a-pivot-table)
* [How to hide Excel worksheets?](https://help.syncfusion.com/document-processing/excel/excel-library/net/migrate-from-office-automation-to-syncfusion-xlsio/hide-excel-worksheets)
* [How to show or hide rows and columns?](https://help.syncfusion.com/document-processing/excel/excel-library/net/worksheet-rows-and-columns-manipulation#show-or-hide-rows-and-columns)
* [How to show or hide specific range?](https://help.syncfusion.com/document-processing/excel/excel-library/net/worksheet-rows-and-columns-manipulation#show-or-hide-specific-range)
