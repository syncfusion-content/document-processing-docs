---
title: How to define discontinuous ranges | XlsIO | Syncfusion
description: This page demonstrates with an example how to define discontinuous ranges using the .NET Excel library.
platform: document-processing
control: XlsIO
documentation: UG
---

# How to define discontinuous ranges?

You can define a discontinuous range by creating an `IRanges` collection and adding multiple `IRange` blocks to it. The following code example demonstrates this.

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

  //Create a discontinuous-range collection
  IRanges rangeCollection = worksheet.CreateRangesCollection();

  //Add two non-contiguous ranges to the collection
  rangeCollection.Add(worksheet.Range["D2:D3"]);
  rangeCollection.Add(worksheet.Range["D10:D11"]);

  //Set text on every range in the collection
  rangeCollection.Text = "Welcome";

  workbook.SaveAs("DiscontinuousRange.xlsx");
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

  //Create a discontinuous-range collection and add two ranges
  IRanges rangeCollection = worksheet.CreateRangesCollection();
  rangeCollection.Add(worksheet.Range["D2:D3"]);
  rangeCollection.Add(worksheet.Range["D10:D11"]);

  //Set text on every range in the collection
  rangeCollection.Text = "Welcome";

  workbook.SaveAs("DiscontinuousRange.xlsx");
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

  'Create Range collection.
  Dim range As IRanges = worksheet.CreateRangesCollection()

  'Add different ranges to the Range collection.
  range.Add(worksheet.Range("D2:D3"))
  range.Add(worksheet.Range("D10:D11"))
  range.Text = "Welcome"

  workbook.SaveAs("DiscontinuousRange.xlsx")
  workbook.Close()
End Using
{% endhighlight %}
{% endtabs %}

## See Also

* [How to create a Chart with a discontinuous range?](how-to-create-a-chart-with-a-discontinuous-range)
* [How to show or hide a specific range?](https://help.syncfusion.com/file-formats/xlsio/worksheet-rows-and-columns-manipulation#show-or-hide-specific-range)
* [How to access a cell or a range?](https://help.syncfusion.com/file-formats/xlsio/worksheet-cells-manipulation#accessing-a-cell-or-a-range)
* [How to access relative range?](https://help.syncfusion.com/file-formats/xlsio/worksheet-cells-manipulation#accessing-relative-range)
* [How to access discontinuous ranges?](https://help.syncfusion.com/file-formats/xlsio/worksheet-cells-manipulation#accessing-discontinuous-ranges)
* [How to access used range of a worksheet?](https://help.syncfusion.com/file-formats/xlsio/worksheet-cells-manipulation#accessing-used-range-of-a-worksheet)
* [How to copy or move a range?](https://help.syncfusion.com/file-formats/xlsio/worksheet-cells-manipulation#copy-or-move-a-range)

