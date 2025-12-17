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
{% highlight c# tabtitle="C# [Cross-platform]"
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

    //Set Datalabels
    IChartSerie serie1 = chart.Series[0];
    serie1.DataPoints.DefaultDataPoint.DataLabels.IsCategoryName = false;
    serie1.DataPoints.DefaultDataPoint.DataLabels.IsValue = true;

    Color[] seriecolor = new Color[12];
    seriecolor[0] = Color.FromArgb(253, 182, 33);
    seriecolor[1] = Color.FromArgb(18, 151, 243);
    seriecolor[2] = Color.FromArgb(38, 7, 142);
    seriecolor[3] = Color.FromArgb(5, 60, 122);
    seriecolor[4] = Color.FromArgb(180, 70, 243);
    seriecolor[5] = Color.FromArgb(53, 12, 133);
    seriecolor[6] = Color.FromArgb(108, 11, 23);
    seriecolor[7] = Color.FromArgb(200, 70, 112);
    seriecolor[8] = Color.FromArgb(125, 200, 12);
    seriecolor[9] = Color.FromArgb(10, 150, 43);
    seriecolor[10] = Color.FromArgb(150, 82, 133);
    seriecolor[11] = Color.FromArgb(98, 15, 103);

    for (int i = 0; i < (serie1 as ChartSerieImpl).PointNumber; i++)
    {
        serie1.DataPoints[i].DataFormat.AreaProperties.ForegroundColor = seriecolor[i];
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

     //Set Datalabels
     IChartSerie serie1 = chart.Series[0];
     serie1.DataPoints.DefaultDataPoint.DataLabels.IsCategoryName = false;
     serie1.DataPoints.DefaultDataPoint.DataLabels.IsValue = true;

     Color[] seriecolor = new Color[12];
     seriecolor[0] = Color.FromArgb(253, 182, 33);
     seriecolor[1] = Color.FromArgb(18, 151, 243);
     seriecolor[2] = Color.FromArgb(38, 7, 142);
     seriecolor[3] = Color.FromArgb(5, 60, 122);
     seriecolor[4] = Color.FromArgb(180, 70, 243);
     seriecolor[5] = Color.FromArgb(53, 12, 133);
     seriecolor[6] = Color.FromArgb(108, 11, 23);
     seriecolor[7] = Color.FromArgb(200, 70, 112);
     seriecolor[8] = Color.FromArgb(125, 200, 12);
     seriecolor[9] = Color.FromArgb(10, 150, 43);
     seriecolor[10] = Color.FromArgb(150, 82, 133);
     seriecolor[11] = Color.FromArgb(98, 15, 103);

     for (int i = 0; i < (serie1 as ChartSerieImpl).PointNumber; i++)
     {
         serie1.DataPoints[i].DataFormat.AreaProperties.ForegroundColor = seriecolor[i];
     }

     //Set Legend
     chart.HasLegend = true;

     //Positioning the chart in the worksheet
     chart.TopRow = 8;
     chart.LeftColumn = 1;
     chart.BottomRow = 23;
     chart.RightColumn = 8;

     //Saving and closing the workbook
     workbook.SaveAs("../../Output/SunBurst.xlsx");
 }
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As New ExcelEngine()

    Dim application As IApplication = excelEngine.Excel
    application.DefaultVersion = ExcelVersion.Xlsx

    'Open existing workbook with data
    Dim workbook As IWorkbook = application.Workbooks.Open("../../Data/Input.xlsx")
    Dim worksheet As IWorksheet = workbook.Worksheets(0)

    'Create and configure Sunburst chart
    Dim chart As IChartShape = worksheet.Charts.Add()
    chart.ChartType = ExcelChartType.SunBurst

    'Assign data
    chart.DataRange = worksheet("A1:B13")
    chart.IsSeriesInRows = False

    'Chart Title
    chart.ChartTitle = "Transfer Summary"

    'Data labels (show value only)
    Dim serie1 As IChartSerie = chart.Series(0)
    serie1.DataPoints.DefaultDataPoint.DataLabels.IsCategoryName = False
    serie1.DataPoints.DefaultDataPoint.DataLabels.IsValue = True

    'Custom colors for each data point
    Dim serieColor(11) As Color
    serieColor(0) = Color.FromArgb(253, 182, 33)
    serieColor(1) = Color.FromArgb(18, 151, 243)
    serieColor(2) = Color.FromArgb(38, 7, 142)
    serieColor(3) = Color.FromArgb(5, 60, 122)
    serieColor(4) = Color.FromArgb(180, 70, 243)
    serieColor(5) = Color.FromArgb(53, 12, 133)
    serieColor(6) = Color.FromArgb(108, 11, 23)
    serieColor(7) = Color.FromArgb(200, 70, 112)
    serieColor(8) = Color.FromArgb(125, 200, 12)
    serieColor(9) = Color.FromArgb(10, 150, 43)
    serieColor(10) = Color.FromArgb(150, 82, 133)
    serieColor(11) = Color.FromArgb(98, 15, 103)

    For i As Integer = 0 To CType(serie1, ChartSerieImpl).PointNumber - 1
        serie1.DataPoints(i).DataFormat.AreaProperties.ForegroundColor = serieColor(i)
    Next

    'Legend
    chart.HasLegend = True

    'Position the chart in the worksheet
    chart.TopRow = 8
    chart.LeftColumn = 1
    chart.BottomRow = 23
    chart.RightColumn = 8

    'Save and close
    workbook.SaveAs("../../Output/SunBurst.xlsx")

End Using
{% endhighlight %}
{% endtabs %}  