---
title: How to set the color for the dynamic series in sunburst chart| Syncfusion
description: Learn how to apply custom colors to each data point in a Sunburst chart dynamically with the Syncfusion .NET Excel library (XlsIO) using C# and VB.NET.
platform: document-processing
control: XlsIO
documentation: UG
---

# How to set colors for dynamic series in a Sunburst chart?

The examples below show how to assign custom colors to each data point in a Sunburst chart with Syncfusion XlsIO. Code is provided for C# (cross-platform and Windows-specific) and VB.NET.

{% tabs %}  
{% highlight c# tabtitle="C# [Cross-platform]" %}
{% endhighlight %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;
    IWorkbook workbook = application.Workbooks.Open("../../../Data/Input.xlsx");
    IWorksheet worksheet = workbook.Worksheets[0];

    //Initialize chart
    IChartShape chart = worksheet.Charts.Add();
    chart.ChartType = ExcelChartType.SunBurst;

    //Assign data
    chart.DataRange = worksheet["A1:B13"];
    chart.IsSeriesInRows = false;

    //Apply chart elements
    //Set Chart Title
    chart.ChartTitle = "Transfer Summary";

    //Set Data labels
    IChartSerie series = chart.Series[0];
    series.DataPoints.DefaultDataPoint.DataLabels.IsCategoryName = false;
    series.DataPoints.DefaultDataPoint.DataLabels.IsValue = true;

    Color[] seriescolor = new Color[12];
    seriescolor[0] = Color.FromArgb(253, 182, 33);
    seriescolor[1] = Color.FromArgb(18, 151, 243);
    seriescolor[2] = Color.FromArgb(38, 7, 142);
    seriescolor[3] = Color.FromArgb(5, 60, 122);
    seriescolor[4] = Color.FromArgb(180, 70, 243);
    seriescolor[5] = Color.FromArgb(53, 12, 133);
    seriescolor[6] = Color.FromArgb(108, 11, 23);
    seriescolor[7] = Color.FromArgb(200, 70, 112);
    seriescolor[8] = Color.FromArgb(125, 200, 12);
    seriescolor[9] = Color.FromArgb(10, 150, 43);
    seriescolor[10] = Color.FromArgb(150, 82, 133);
    seriescolor[11] = Color.FromArgb(98, 15, 103);

    for (int i = 0; i < (series as ChartSerieImpl).PointNumber; i++)
    {
        series.DataPoints[i].DataFormat.AreaProperties.ForegroundColor = seriescolor[i];
    }

    //Set Legend
    chart.HasLegend = true;

    //Positioning the chart in the worksheet
    chart.TopRow = 8;
    chart.LeftColumn = 1;
    chart.BottomRow = 23;
    chart.RightColumn = 8;

    //Saving the workbook
    workbook.SaveAs("../../../Output/SunBurst.xlsx");
}
{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;
    IWorkbook workbook = application.Workbooks.Open("../../Data/Input.xlsx");
    IWorksheet worksheet = workbook.Worksheets[0];

    //Initialize chart
    IChartShape chart = worksheet.Charts.Add();
    chart.ChartType = ExcelChartType.SunBurst;

    //Assign data
    chart.DataRange = worksheet["A1:B13"];
    chart.IsSeriesInRows = false;

    //Apply chart elements
    //Set Chart Title
    chart.ChartTitle = "Transfer Summary";

    //Set Data labels
    IChartSerie series = chart.Series[0];
    series.DataPoints.DefaultDataPoint.DataLabels.IsCategoryName = false;
    series.DataPoints.DefaultDataPoint.DataLabels.IsValue = true;

    Color[] seriescolor = new Color[12];
    seriescolor[0] = Color.FromArgb(253, 182, 33);
    seriescolor[1] = Color.FromArgb(18, 151, 243);
    seriescolor[2] = Color.FromArgb(38, 7, 142);
    seriescolor[3] = Color.FromArgb(5, 60, 122);
    seriescolor[4] = Color.FromArgb(180, 70, 243);
    seriescolor[5] = Color.FromArgb(53, 12, 133);
    seriescolor[6] = Color.FromArgb(108, 11, 23);
    seriescolor[7] = Color.FromArgb(200, 70, 112);
    seriescolor[8] = Color.FromArgb(125, 200, 12);
    seriescolor[9] = Color.FromArgb(10, 150, 43);
    seriescolor[10] = Color.FromArgb(150, 82, 133);
    seriescolor[11] = Color.FromArgb(98, 15, 103);

    for (int i = 0; i < (series as ChartSerieImpl).PointNumber; i++)
    {
        series.DataPoints[i].DataFormat.AreaProperties.ForegroundColor = seriescolor[i];
    }

    //Set Legend
    chart.HasLegend = true;

    //Positioning the chart in the worksheet
    chart.TopRow = 8;
    chart.LeftColumn = 1;
    chart.BottomRow = 23;
    chart.RightColumn = 8;

    //Saving the workbook
    workbook.SaveAs("../../Output/SunBurst.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As New ExcelEngine()
    Dim application As IApplication = excelEngine.Excel
    application.DefaultVersion = ExcelVersion.Xlsx

    Dim workbook As IWorkbook = application.Workbooks.Open("../../Data/Input.xlsx")
    Dim worksheet As IWorksheet = workbook.Worksheets(0)

    'Initialize chart
    Dim chart As IChartShape = worksheet.Charts.Add()
    chart.ChartType = ExcelChartType.SunBurst

    'Assign data
    chart.DataRange = worksheet("A1:B13")
    chart.IsSeriesInRows = False

    'Apply chart elements
    'Set Chart Title
    chart.ChartTitle = "Transfer Summary"

    'Set Data labels
    Dim series As IChartSerie = chart.Series(0)
    series.DataPoints.DefaultDataPoint.DataLabels.IsCategoryName = False
    series.DataPoints.DefaultDataPoint.DataLabels.IsValue = True

    Dim seriescolor(11) As Color
    seriescolor(0) = Color.FromArgb(253, 182, 33)
    seriescolor(1) = Color.FromArgb(18, 151, 243)
    seriescolor(2) = Color.FromArgb(38, 7, 142)
    seriescolor(3) = Color.FromArgb(5, 60, 122)
    seriescolor(4) = Color.FromArgb(180, 70, 243)
    seriescolor(5) = Color.FromArgb(53, 12, 133)
    seriescolor(6) = Color.FromArgb(108, 11, 23)
    seriescolor(7) = Color.FromArgb(200, 70, 112)
    seriescolor(8) = Color.FromArgb(125, 200, 12)
    seriescolor(9) = Color.FromArgb(10, 150, 43)
    seriescolor(10) = Color.FromArgb(150, 82, 133)
    seriescolor(11) = Color.FromArgb(98, 15, 103)

    For i As Integer = 0 To CType(series, ChartSerieImpl).PointNumber - 1
        series.DataPoints(i).DataFormat.AreaProperties.ForegroundColor = seriescolor(i)
    Next

    'Set Legend
    chart.HasLegend = True

    'Positioning the chart in the worksheet
    chart.TopRow = 8
    chart.LeftColumn = 1
    chart.BottomRow = 23
    chart.RightColumn = 8

    'Saving and closing the workbook
    workbook.SaveAs("../../Output/SunBurst.xlsx")
End Using
{% endhighlight %}
{% endtabs %}  