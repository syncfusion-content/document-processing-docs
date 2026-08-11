---
title: How to create a chart with a discontinuous range | XlsIO | Syncfusion
description: Learn how to create an Excel chart using discontinuous data ranges with the .NET Excel Library and code examples.
platform: document-processing
control: XlsIO
documentation: UG
---

# How to create a chart with a discontinuous range?

The following code example demonstrates how to create a chart with discontinuous data ranges using Syncfusion<sup>&reg;</sup> XlsIO.

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

  //Enter the data for the chart
  worksheet.Range["A1"].Text = "Texas books Unit sales";
  worksheet.Range["A1:D1"].Merge();
  worksheet.Range["A1"].CellStyle.Font.Bold = true;
  worksheet.Range["B2"].Text = "Jan";
  worksheet.Range["C2"].Text = "Feb";
  worksheet.Range["D2"].Text = "Mar";
  worksheet.Range["A3"].Text = "Austin";
  worksheet.Range["A4"].Text = "Dallas";
  worksheet.Range["A5"].Text = "Houston";
  worksheet.Range["A6"].Text = "San Antonio";
  worksheet.Range["B3"].Number = 53.75;
  worksheet.Range["B4"].Number = 52.85;
  worksheet.Range["B5"].Number = 59.77;
  worksheet.Range["B6"].Number = 96.15;
  worksheet.Range["C3"].Number = 79.79;
  worksheet.Range["C4"].Number = 59.22;
  worksheet.Range["C5"].Number = 10.09;
  worksheet.Range["C6"].Number = 73.02;
  worksheet.Range["D3"].Number = 26.72;
  worksheet.Range["D4"].Number = 33.71;
  worksheet.Range["D5"].Number = 45.81;
  worksheet.Range["D6"].Number = 12.17;
  worksheet.Range["F1"].Number = 26.72;
  worksheet.Range["F2"].Number = 33.71;
  worksheet.Range["F3"].Number = 45.81;
  worksheet.Range["F4"].Number = 12.17;

  //Build two IRanges collections (each combining a contiguous block with a separate block)
  IRanges rangesOne = worksheet.CreateRangesCollection();
  rangesOne.Add(worksheet.Range["B3:B6"]);
  rangesOne.Add(worksheet.Range["F1:F2"]);
  IRanges rangesTwo = worksheet.CreateRangesCollection();
  rangesTwo.Add(worksheet.Range["D3:D6"]);
  rangesTwo.Add(worksheet.Range["F3:F4"]);

  //Add a new embedded chart and configure titles
  IChartShape shape = worksheet.Charts.Add();
  shape.PrimaryCategoryAxis.Title = "City";
  shape.PrimaryValueAxis.Title = "Sales (in Dollars)";
  shape.ChartTitle = "Texas Books Unit Sales";

  //Add the two series; the names appear in the legend
  IChartSerie seriesOne = shape.Series.Add();
  seriesOne.Name = "Jan";
  seriesOne.Values = rangesOne;
  IChartSerie seriesTwo = shape.Series.Add();
  seriesTwo.Name = "March";
  seriesTwo.Values = rangesTwo;

  //Position the chart on the worksheet (1-based row/column indices)
  shape.TopRow = 10;
  shape.BottomRow = 40;
  shape.LeftColumn = 3;
  shape.RightColumn = 15;

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

  //Enter the data for the chart (same data layout as the cross-platform sample)
  worksheet.Range["A1"].Text = "Texas books Unit sales";
  worksheet.Range["A1:D1"].Merge();
  worksheet.Range["A1"].CellStyle.Font.Bold = true;
  worksheet.Range["B2"].Text = "Jan";
  worksheet.Range["C2"].Text = "Feb";
  worksheet.Range["D2"].Text = "Mar";
  worksheet.Range["A3"].Text = "Austin";
  worksheet.Range["A4"].Text = "Dallas";
  worksheet.Range["A5"].Text = "Houston";
  worksheet.Range["A6"].Text = "San Antonio";
  worksheet.Range["B3"].Number = 53.75;
  worksheet.Range["B4"].Number = 52.85;
  worksheet.Range["B5"].Number = 59.77;
  worksheet.Range["B6"].Number = 96.15;
  worksheet.Range["C3"].Number = 79.79;
  worksheet.Range["C4"].Number = 59.22;
  worksheet.Range["C5"].Number = 10.09;
  worksheet.Range["C6"].Number = 73.02;
  worksheet.Range["D3"].Number = 26.72;
  worksheet.Range["D4"].Number = 33.71;
  worksheet.Range["D5"].Number = 45.81;
  worksheet.Range["D6"].Number = 12.17;
  worksheet.Range["F1"].Number = 26.72;
  worksheet.Range["F2"].Number = 33.71;
  worksheet.Range["F3"].Number = 45.81;
  worksheet.Range["F4"].Number = 12.17;

  //Build two IRanges collections
  IRanges rangesOne = worksheet.CreateRangesCollection();
  rangesOne.Add(worksheet.Range["B3:B6"]);
  rangesOne.Add(worksheet.Range["F1:F2"]);
  IRanges rangesTwo = worksheet.CreateRangesCollection();
  rangesTwo.Add(worksheet.Range["D3:D6"]);
  rangesTwo.Add(worksheet.Range["F3:F4"]);

  //Add a new embedded chart
  IChartShape shape = worksheet.Charts.Add();
  shape.PrimaryCategoryAxis.Title = "City";
  shape.PrimaryValueAxis.Title = "Sales (in Dollars)";
  shape.ChartTitle = "Texas Books Unit Sales";

  //Add the two series
  IChartSerie seriesOne = shape.Series.Add();
  seriesOne.Name = "Jan";
  seriesOne.Values = rangesOne;
  IChartSerie seriesTwo = shape.Series.Add();
  seriesTwo.Name = "March";
  seriesTwo.Values = rangesTwo;

  //Position the chart
  shape.TopRow = 10;
  shape.BottomRow = 40;
  shape.LeftColumn = 3;
  shape.RightColumn = 15;

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

  'Enter the data for the chart (same data layout as the cross-platform sample)
  worksheet.Range("A1").Text = "Texas books Unit sales"
  worksheet.Range("A1:D1").Merge()
  worksheet.Range("A1").CellStyle.Font.Bold = True
  worksheet.Range("B2").Text = "Jan"
  worksheet.Range("C2").Text = "Feb"
  worksheet.Range("D2").Text = "Mar"
  worksheet.Range("A3").Text = "Austin"
  worksheet.Range("A4").Text = "Dallas"
  worksheet.Range("A5").Text = "Houston"
  worksheet.Range("A6").Text = "San Antonio"
  worksheet.Range("B3").Number = 53.75
  worksheet.Range("B4").Number = 52.85
  worksheet.Range("B5").Number = 59.77
  worksheet.Range("B6").Number = 96.15
  worksheet.Range("C3").Number = 79.79
  worksheet.Range("C4").Number = 59.22
  worksheet.Range("C5").Number = 10.09
  worksheet.Range("C6").Number = 73.02
  worksheet.Range("D3").Number = 26.72
  worksheet.Range("D4").Number = 33.71
  worksheet.Range("D5").Number = 45.81
  worksheet.Range("D6").Number = 12.17
  worksheet.Range("F1").Number = 26.72
  worksheet.Range("F2").Number = 33.71
  worksheet.Range("F3").Number = 45.81
  worksheet.Range("F4").Number = 12.17

  'Build two IRanges collections
  Dim rangesOne As IRanges = worksheet.CreateRangesCollection()
  rangesOne.Add(worksheet.Range("B3:B6"))
  rangesOne.Add(worksheet.Range("F1:F2"))
  Dim rangesTwo As IRanges = worksheet.CreateRangesCollection()
  rangesTwo.Add(worksheet.Range("D3:D6"))
  rangesTwo.Add(worksheet.Range("F3:F4"))

  'Add a new embedded chart
  Dim shape As IChartShape = worksheet.Charts.Add()
  shape.PrimaryCategoryAxis.Title = "City"
  shape.PrimaryValueAxis.Title = "Sales (in Dollars)"
  shape.ChartTitle = "Texas Books Unit Sales"

  'Add the two series
  Dim seriesOne As IChartSerie = shape.Series.Add()
  seriesOne.Name = "Jan"
  seriesOne.Values = rangesOne
  Dim seriesTwo As IChartSerie = shape.Series.Add()
  seriesTwo.Name = "March"
  seriesTwo.Values = rangesTwo

  'Position the chart
  shape.TopRow = 10
  shape.BottomRow = 40
  shape.LeftColumn = 3
  shape.RightColumn = 15

  workbook.SaveAs("DiscontinuousRange.xlsx")
  workbook.Close()
End Using
{% endhighlight %}
{% endtabs %}

## See Also

* [How to define discontinuous ranges?](https://help.syncfusion.com/document-processing/excel/excel-library/net/faqs/how-to-define-discontinuous-ranges)
* [How to add chart labels to scatter points?](https://help.syncfusion.com/document-processing/excel/excel-library/net/faqs/how-to-add-chart-labels-to-scatter-points)
* [How to change data point label color of a Waterfall chart?](https://help.syncfusion.com/document-processing/excel/excel-library/net/faqs/how-to-change-data-point-label-color-of-a-waterfall-chart)
* [How to set data range to chart?](https://help.syncfusion.com/document-processing/excel/excel-library/net/working-with-charts#set-data-range-to-chart)
* [How to access discontinuous ranges?](https://help.syncfusion.com/document-processing/excel/excel-library/net/worksheet-cells-manipulation#accessing-discontinuous-ranges)
* [How to create a chart?](https://help.syncfusion.com/document-processing/excel/excel-library/net/working-with-charts#creating-a-chart)
* [How to create a pie chart in Excel?](https://help.syncfusion.com/document-processing/excel/excel-library/net/working-with-charts#creating-a-chart)
* [How to create a sparkline from a named range?](https://help.syncfusion.com/document-processing/excel/excel-library/net/faqs/how-to-create-a-sparkline-from-a-named-range)
