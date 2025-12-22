---
title: How to apply Line Pattern to Line Chart Series | Syncfusion
description: Learn how to apply a line pattern to every data point in a line chart series using Syncfusion .NET Excel library (XlsIO) in C# and VB.NET.
platform: document-processing
control: XlsIO
documentation: UG
---

# How to apply a line pattern to a line chart series in Excel?

By default, Microsoft Excel applies a line pattern to each data point when you set it on a series. Syncfusion XlsIO, however, does not propagate the pattern automatically. To ensure every point in a line series uses the same pattern, you must apply it to the series and then to each data point individually.

The code snippet below shows how to set a CircleDot line pattern on the second series of a line chart in both C# and VB.NET.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;
    IWorkbook workbook = application.Workbooks.Open("../../../Data/Input.xlsx", ExcelOpenType.Automatic);
    IWorksheet sheet = workbook.Worksheets[0];

    //Access the first chart and its second series
    IChartShape chart = sheet.Charts[0];
    IChartSerie serie = chart.Series[1];
	
	//Set the line pattern for the series
    serie.SerieFormat.LineProperties.LinePattern = ExcelChartLinePattern.CircleDot;
	
	//Apply the same line pattern to each data point
    foreach (IChartDataPoint dataPoint in serie.DataPoints)
    {
        dataPoint.DataFormat.LineProperties.LinePattern = ExcelChartLinePattern.CircleDot;
    }

    //Save the modified workbook
    workbook.SaveAs("../../../Output/Chart.xlsx");
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;
    IWorkbook workbook = application.Workbooks.Open("../../Data/Input.xlsx", ExcelOpenType.Automatic);
    IWorksheet sheet = workbook.Worksheets[0];

    //Access the first chart and its second series
    IChartShape chart = sheet.Charts[0];
    IChartSerie serie = chart.Series[1];

    //Set the line pattern for the series
    serie.SerieFormat.LineProperties.LinePattern = ExcelChartLinePattern.CircleDot;

    //Apply the same line pattern to each data point
    foreach (IChartDataPoint dataPoint in serie.DataPoints)
    {
        dataPoint.DataFormat.LineProperties.LinePattern = ExcelChartLinePattern.CircleDot;
    }

    //Save the modified workbook
    workbook.SaveAs("../../Output/Chart.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As New ExcelEngine()
    Dim application As IApplication = excelEngine.Excel
    application.DefaultVersion = ExcelVersion.Xlsx

    Dim workbook As IWorkbook = application.Workbooks.Open("../../Data/Input.xlsx", ExcelOpenType.Automatic)
    Dim sheet As IWorksheet = workbook.Worksheets(0)

    ' Access the first chart and its second series
    Dim chart As IChartShape = sheet.Charts(0)
    Dim serie As IChartSerie = chart.Series(1)

    ' Set the line pattern for the series
    serie.SerieFormat.LineProperties.LinePattern = ExcelChartLinePattern.CircleDot

    ' Apply the same line pattern to each data point
    For Each dataPoint As IChartDataPoint In serie.DataPoints
        dataPoint.DataFormat.LineProperties.LinePattern = ExcelChartLinePattern.CircleDot
    Next

    ' Save the modified workbook
    workbook.SaveAs("../../Output/Chart.xlsx")
End Using
{% endhighlight %}
{% endtabs %}

## See Also

* [How to change the grid line color of the Excel sheet?](https://help.syncfusion.com/file-formats/xlsio/faqs/how-to-change-the-grid-line-color-of-the-excel-sheet)
* [How to add chart labels to scatter points?](https://help.syncfusion.com/file-formats/xlsio/faqs/how-to-add-chart-labels-to-scatter-points)
* [How to create a Chart with a discontinuous range?](https://help.syncfusion.com/file-formats/xlsio/faqs/how-to-create-a-chart-with-a-discontinuous-range)