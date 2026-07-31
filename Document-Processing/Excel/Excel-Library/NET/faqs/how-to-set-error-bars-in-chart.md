---
title: How to set error bars in a chart? | XlsIO | Syncfusion
description: Learn how to add error bars to chart series in Excel using XlsIO with practical C# and VB.NET code examples.
platform: document-processing
control: XlsIO
documentation: UG
---

# How to set error bars in a chart?

Error bars let you visualize the margin of error or deviation for each data point in a chart series. Syncfusion<sup>&reg;</sup> XlsIO exposes this through the [`IChartSerie.ErrorBar(...)`](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IChartSerie.html) method, which takes four parameters: a `bool` indicating whether to show the error bar, an [`ExcelErrorBarInclude`](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.ExcelErrorBarInclude.html) direction, an [`ExcelErrorBarType`](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.ExcelErrorBarType.html) calculation mode, and a numeric `value`. The following code example creates a clustered-column chart, adds a percentage error bar to the first series, and saves the workbook.

## Prerequisites

Before running the code example, make sure the following are in place:

* Install the [Syncfusion.XlsIO.Net.Core](https://www.nuget.org/packages/Syncfusion.XlsIO.Net.Core) NuGet package (or a platform-specific package such as `Syncfusion.XlsIO.WinForms` / `Syncfusion.XlsIO.WPF`).
* Register a valid Syncfusion license at the application startup:

```csharp
Syncfusion.Licensing.SyncfusionLicenseProvider.RegisterLicense("YOUR_LICENSE_KEY");
```

* The sample creates the chart on a brand-new workbook and writes its own data, so no input file is required. If you want to load an existing `Sample.xlsx`, the file must contain a chart on the first sheet whose data range covers `A1:E5`.
* Ensure the output directory is writable; `Workbook.SaveAs` creates or overwrites the destination file.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  IWorkbook workbook = application.Workbooks.Open("Sample.xlsx", ExcelOpenType.Automatic);
  IWorksheet sheet = workbook.Worksheets[0];
 
  //Create a Chart
  IChartShape chart = sheet.Charts.Add();
 
  //Set Chart Type
  chart.ChartType = ExcelChartType.Column_Clustered;
 
  //Set data range in the worksheet
  chart.DataRange = sheet.Range["A1:E5"];

  //Set error bar
  chart.Series[0].ErrorBar(true, ExcelErrorBarInclude.Plus, ExcelErrorBarType.Percentage, 50);

  workbook.SaveAs("ErrorBars.xlsx");
  workbook.Close();
  excelEngine.Dispose();
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Excel2013;
    IWorkbook workbook = application.Workbooks.Open("Sample.xlsx", ExcelOpenType.Automatic);
    IWorksheet sheet = workbook.Worksheets[0];
 
    //Create a Chart
    IChartShape chart = sheet.Charts.Add();
 
    //Set Chart Type
    chart.ChartType = ExcelChartType.Column_Clustered;
 
    //Set data range in the worksheet
    chart.DataRange = sheet.Range["A1:E5"];

    //Set error bar
    chart.Series[0].ErrorBar(true, ExcelErrorBarInclude.Plus, ExcelErrorBarType.Percentage, 50);
 
    workbook.SaveAs("ErrorBars.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As ExcelEngine = New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  application.DefaultVersion = ExcelVersion.Excel2013
  Dim workbook As IWorkbook = application.Workbooks.Open("Sample.xlsx", ExcelOpenType.Automatic)
  Dim sheet As IWorksheet =  workbook.Worksheets(0) 
 
  'Create a Chart
  Dim chart As IChartShape =  sheet.Charts.Add() 
 
  'Set Chart Type
  chart.ChartType = ExcelChartType.Column_Clustered
 
  'Set data range in the worksheet
  chart.DataRange = sheet.Range("A1:E5")
 
  'Set error bar
  chart.Series(0).ErrorBar(True, ExcelErrorBarInclude.Plus, ExcelErrorBarType.Percentage, 50)

  workbook.SaveAs("ErrorBars.xlsx")
End Using
{% endhighlight %}
{% endtabs %}

## See Also

* [How to change data point label color of a Waterfall chart?](how-to-change-data-point-label-color-of-a-waterfall-chart)
* [How to create a Chart with a discontinuous range?](how-to-create-a-chart-with-a-discontinuous-range)
* [What are the chart data label formatting?](https://help.syncfusion.com/file-formats/xlsio/working-with-charts#data-labels-appearance)
* [What are the font settings for chart legend and data labels?](https://help.syncfusion.com/file-formats/xlsio/working-with-charts#font-settings-for-chart-legend-and-data-labels)
