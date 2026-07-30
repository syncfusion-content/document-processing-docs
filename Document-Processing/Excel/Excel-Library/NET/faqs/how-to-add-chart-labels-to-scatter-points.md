---
title: How to add chart labels to scatter points | XlsIO | Syncfusion
description: This page shows how to add chart labels to scatter points using the .NET Excel library.
platform: document-processing
control: XlsIO
documentation: UG
---

# How to add chart labels to scatter points?

The following code example demonstrates how to add chart labels to scatter points using Syncfusion<sup>&reg;</sup> XlsIO.

## Prerequisites

Before running the code example, make sure the following are in place:

* Install the [Syncfusion.XlsIO.Net.Core](https://www.nuget.org/packages/Syncfusion.XlsIO.Net.Core) NuGet package (or the platform-specific package such as `Syncfusion.XlsIO.WinForms` / `Syncfusion.XlsIO.WPF` for Windows-specific scenarios).
* Register a valid Syncfusion license at the application startup:

```csharp
Syncfusion.Licensing.SyncfusionLicenseProvider.RegisterLicense("YOUR_LICENSE_KEY");
```

* Add a `Sample.xlsx` file in the application's working directory that contains a chart in the first worksheet (`Worksheets[0]`), or update the file path and chart index passed to `Workbooks.Open` and `Charts[0]` accordingly. Note that file paths are case-sensitive on Linux.
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

  //Get the chart from the worksheet's charts collection
  IChart chart = worksheet.Charts[0];

  //Get the first series from the series collection
  IChartSerie seriesOne = chart.Series[0];

  //Show the series name on the first data point's label
  seriesOne.DataPoints[0].DataLabels.IsSeriesName = true;

  //Show the value on the first data point's label
  seriesOne.DataPoints[0].DataLabels.IsValue = true;

  workbook.SaveAs("ChartLabels.xlsx");
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

  //Get the chart and the first series
  IChart chart = worksheet.Charts[0];
  IChartSerie seriesOne = chart.Series[0];

  //Show the series name and value on the first data point's label
  seriesOne.DataPoints[0].DataLabels.IsSeriesName = true;
  seriesOne.DataPoints[0].DataLabels.IsValue = true;

  workbook.SaveAs("ChartLabels.xlsx");
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

  'Get the chart and the first series
  Dim chart As IChart = worksheet.Charts(0)
  Dim seriesOne As IChartSerie = chart.Series(0)

  'Show the series name and value on the first data point's label
  seriesOne.DataPoints(0).DataLabels.IsSeriesName = True
  seriesOne.DataPoints(0).DataLabels.IsValue = True

  workbook.SaveAs("ChartLabels.xlsx")
  workbook.Close()
End Using
{% endhighlight %}
{% endtabs %}

## See Also

* [How to change data point label color of a Waterfall chart?](how-to-change-data-point-label-color-of-a-waterfall-chart)
* [How to create a Chart with a discontinuous range?](how-to-create-a-chart-with-a-discontinuous-range)
* [What are the chart data label formatting?](https://help.syncfusion.com/file-formats/xlsio/working-with-charts#data-labels-appearance)
* [What are the font settings for chart legend and data labels?](https://help.syncfusion.com/file-formats/xlsio/working-with-charts#font-settings-for-chart-legend-and-data-labels)
