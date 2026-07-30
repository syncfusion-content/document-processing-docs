---
title: How to show the leader line on Excel chart | Syncfusion 
description: Code example to show the leader line on Excel chart using .NET Excel library. 
platform: document-processing
control: XlsIO
documentation: UG
---

# How to show the leader line on Excel chart?

The following code snippets demonstrate how to show the leader line on Excel chart using C# (cross-platform and Windows-specific) and VB.NET.

The following code example creates a pie chart from a small fruit-distribution dataset, enables value data labels with leader lines, manually positions the first data label using the layout API, and saves the workbook. Three variants are shown: a C# cross-platform sample, a C# Windows-specific sample, and a VB.NET Windows-specific sample.

## Prerequisites

Before running the code example, make sure the following prerequisites are met:

- Install the **Syncfusion.XlsIO.WinForms** NuGet package (for Windows) or the **Syncfusion.XlsIO.Net.Core** package (for .NET Core / .NET 6+ cross-platform targets).
- Add the required `using` directive: `using Syncfusion.XlsIO;` (or `Imports Syncfusion.XlsIO` in VB.NET).
- The example creates a new workbook with `Workbooks.Create(1)`, so no input file is required.
- The output file is written to the application's current working directory by `SaveAs`.

## Code example

{% tabs %}  
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/FAQ/Chart/.NET/Show%20leader%20line/Show%20leader%20line/Program.cs,180" %} 
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;
    IWorkbook workbook = application.Workbooks.Create(1);
    IWorksheet sheet = workbook.Worksheets[0];

    //Add data
    sheet.Range["A1"].Text = "Fruit";
    sheet.Range["B1"].Text = "Quantity";
    sheet.Range["A2"].Text = "Apple";
    sheet.Range["A3"].Text = "Banana";
    sheet.Range["A4"].Text = "Cherry";
    sheet.Range["B2"].Number = 40;
    sheet.Range["B3"].Number = 30;
    sheet.Range["B4"].Number = 30;

    //Add a Pie chart 
    IChart chart = sheet.Charts.Add();
    chart.ChartType = ExcelChartType.Pie;
    chart.DataRange = sheet.Range["A1:B4"];
    chart.IsSeriesInRows = false;
    chart.ChartTitle = "Fruit Distribution";

    //Enable data labels with values and leader lines
    IChartSerie series = chart.Series[0];
    series.DataPoints.DefaultDataPoint.DataLabels.IsValue = true;
    series.DataPoints.DefaultDataPoint.DataLabels.ShowLeaderLines = true;

    //Manually resizing data label area using Manual Layout
    chart.Series[0].DataPoints[0].DataLabels.Layout.ManualLayout.Left = 0.09;
    chart.Series[0].DataPoints[0].DataLabels.Layout.ManualLayout.Top = 0.01;

    #region Save
    //Saving the workbook
    workbook.SaveAs("Output.xlsx");
    #endregion
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %} 
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;
    IWorkbook workbook = application.Workbooks.Create(1);
    IWorksheet sheet = workbook.Worksheets[0];

    //Add data
    sheet.Range["A1"].Text = "Fruit";
    sheet.Range["B1"].Text = "Quantity";
    sheet.Range["A2"].Text = "Apple";
    sheet.Range["A3"].Text = "Banana";
    sheet.Range["A4"].Text = "Cherry";
    sheet.Range["B2"].Number = 40;
    sheet.Range["B3"].Number = 30;
    sheet.Range["B4"].Number = 30;

    //Add a Pie chart 
    IChart chart = sheet.Charts.Add();
    chart.ChartType = ExcelChartType.Pie;
    chart.DataRange = sheet.Range["A1:B4"];
    chart.IsSeriesInRows = false;
    chart.ChartTitle = "Fruit Distribution";

    //Enable data labels with values and leader lines
    IChartSerie series = chart.Series[0];
    series.DataPoints.DefaultDataPoint.DataLabels.IsValue = true;
    series.DataPoints.DefaultDataPoint.DataLabels.ShowLeaderLines = true;

    //Manually resizing data label area using Manual Layout
    chart.Series[0].DataPoints[0].DataLabels.Layout.ManualLayout.Left = 0.09;
    chart.Series[0].DataPoints[0].DataLabels.Layout.ManualLayout.Top = 0.01;

    //Saving the workbook
    workbook.SaveAs("Output.xlsx");
} 
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As New ExcelEngine()
    Dim application As IApplication = excelEngine.Excel
    application.DefaultVersion = ExcelVersion.Xlsx
    Dim workbook As IWorkbook = application.Workbooks.Create(1)
    Dim sheet As IWorksheet = workbook.Worksheets(0)

    'Add data
    sheet.Range("A1").Text = "Fruit"
    sheet.Range("B1").Text = "Quantity"
    sheet.Range("A2").Text = "Apple"
    sheet.Range("A3").Text = "Banana"
    sheet.Range("A4").Text = "Cherry"
    sheet.Range("B2").Number = 40
    sheet.Range("B3").Number = 30
    sheet.Range("B4").Number = 30

    'Add a Pie chart
    Dim chart As IChart = sheet.Charts.Add()
    chart.ChartType = ExcelChartType.Pie
    chart.DataRange = sheet.Range("A1:B4")
    chart.IsSeriesInRows = False
    chart.ChartTitle = "Fruit Distribution"

    'Enable data labels and leader lines
    Dim series As IChartSerie = chart.Series(0)
    series.DataPoints.DefaultDataPoint.DataLabels.IsValue = True
    series.DataPoints.DefaultDataPoint.DataLabels.ShowLeaderLines = True

    'Manually resizing data label area using Manual Layout          
    series.DataPoints(0).DataLabels.Layout.ManualLayout.Left = 0.09
    series.DataPoints(0).DataLabels.Layout.ManualLayout.Top = 0.01

    'Saving the workbook
    workbook.SaveAs("Output.xlsx")
End Using
{% endhighlight %} 
{% endtabs %}

A complete working example to show the leader line on an Excel chart is available on [GitHub](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/FAQ/Chart/.NET/Show%20leader%20line).

## See also

- [How to add an oval shape to an Excel chart using XlsIO](how-to-add-oval-shape-to-Excel-chart.md)
- [How to switch chart series data interpretation from rows to columns in Excel](how-to-switch-chart-series-data-interpretation-from-horizontal-(rows)-to-vertical-(columns)-in-Excel.md)
