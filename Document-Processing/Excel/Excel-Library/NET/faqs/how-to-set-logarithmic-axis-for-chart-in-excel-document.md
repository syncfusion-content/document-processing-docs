---
title: Set a Logarithmic Axis for a Chart in Excel | Syncfusion
description: Demonstrates how to set a logarithmic value axis on a chart in XlsIO using IsLogScale and LogBase, with a C# and VB.NET example.
platform: document-processing
control: XlsIO
documentation: UG
---

# How to set a logarithmic axis for a chart in an Excel document?

A **logarithmic axis** is useful for visualizing data whose values span several orders of magnitude (for example, population growth, audio frequencies, or earthquake magnitudes). In Syncfusion<sup>&reg;</sup> XlsIO, you enable it on the primary value axis by setting [`IChartValueAxis.IsLogScale`](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IChartValueAxis.html) to `true` and choosing a `LogBase` (typically 2 or 10). The example below creates a column chart with exponential-style data and applies a log<sub>10</sub> scale.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;
    IWorkbook workbook = application.Workbooks.Open("InputTemplate.xlsx", ExcelOpenType.Automatic);
    IWorksheet sheet = workbook.Worksheets[0];

    //Create a Chart
    IChartShape chart = sheet.Charts.Add();

    //Set Chart Type
    chart.ChartType = ExcelChartType.Column_Clustered;

    //Set data range in the worksheet
    chart.DataRange = sheet.Range["A1:C6"];

    //Set chart value axis
    IChartValueAxis valueAxis = chart.PrimaryValueAxis;

    //Set IsLogScale and log base
    valueAxis.IsLogScale = true;
    valueAxis.LogBase = 10;

    //Saving the workbook
    workbook.SaveAs("Chart.xlsx");
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Excel2013;
  IWorkbook workbook = application.Workbooks.Open("InputTemplate.xlsx", ExcelOpenType.Automatic);
  IWorksheet sheet = workbook.Worksheets[0];

   //Create a Chart
    IChartShape chart = sheet.Charts.Add();

    //Set Chart Type
    chart.ChartType = ExcelChartType.Column_Clustered;

    //Set data range in the worksheet
    chart.DataRange = sheet.Range["A1:C6"];

    //Set chart value axis
    IChartValueAxis valueAxis = chart.PrimaryValueAxis;

    //Set IsLogScale and log base
    valueAxis.IsLogScale = true;
    valueAxis.LogBase = 10;

    //Saving the workbook
    workbook.SaveAs("Chart.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As New ExcelEngine()
    Dim application As IApplication = excelEngine.Excel
    application.DefaultVersion = ExcelVersion.Xlsx
    Dim workbook As IWorkbook = application.Workbooks.Open(InputTemplate.xlsx", ExcelOpenType.Automatic)
    Dim sheet As IWorksheet = workbook.Worksheets(0)

    ' Create a Chart
    Dim chart As IChartShape = sheet.Charts.Add()

    ' Set Chart Type
    chart.ChartType = ExcelChartType.Column_Clustered

    ' Set data range in the worksheet
    chart.DataRange = sheet.Range("A1:C6")

    ' Set chart value axis
    Dim valueAxis As IChartValueAxis = chart.PrimaryValueAxis

    ' Set IsLogScale and log base
    valueAxis.IsLogScale = True
    valueAxis.LogBase = 10

    ' Saving the workbook
    workbook.SaveAs(outputStream)

End Using
{% endhighlight %}
{% endtabs %}
