---
title: Positioning Legend, Chart and Axis Titles | Syncfusion
description: This page explains how to position the legend, chart title, and axis title on a chart using Syncfusion XlsIO library in Excel documents.
platform: document-processing
control: XlsIO
documentation: UG
---

# How to Position Legend, Chart Title, and Axis Titles on a Chart?

The legend can be placed at preset positions such as Top, Bottom, Left, Right, or Corner using the `Position` property. For finer control over the chart title, the `Layout` property allows setting exact left and top positions in points.

The following code example illustrates positioning the legend at the left, chart title at a specific location, and axis titles on a chart.

{% tabs %}  
{% highlight c# tabtitle="C# [Cross-platform]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    // Instantiate the Excel application object
    IApplication application = excelEngine.Excel;

    // Assign default application version
    application.DefaultVersion = ExcelVersion.Xlsx;

    // Open an existing workbook
    IWorkbook workbook = application.Workbooks.Open(Path.GetFullPath(@"Data/InputTemplate.xlsx"), ExcelOpenType.Automatic);

    // Access the first worksheet
    IWorksheet sheet = workbook.Worksheets[0];

    // Create a chart
    IChartShape chart = sheet.Charts.Add();

    // Set chart type
    chart.ChartType = ExcelChartType.Column_Clustered;

    // Set data range in the worksheet
    chart.DataRange = sheet.Range["A1:C6"];
    chart.IsSeriesInRows = false;

    // Set data labels for series 1
    IChartSerie serie1 = chart.Series[0];
    IChartSerie serie2 = chart.Series[1];
    serie1.DataPoints.DefaultDataPoint.DataLabels.IsValue = true;
    serie1.DataPoints.DefaultDataPoint.DataLabels.Position = ExcelDataLabelPosition.Outside;

    // Set data labels for series 2
    serie2.DataPoints.DefaultDataPoint.DataLabels.IsValue = true;
    serie2.DataPoints.DefaultDataPoint.DataLabels.Position = ExcelDataLabelPosition.Outside;

    // Set chart title
    chart.ChartTitle = "Sales Analysis";

    // Set legend and position it at the left
    chart.HasLegend = true;
    chart.Legend.Position = ExcelLegendPosition.Left;

    // Position the chart in the worksheet
    chart.TopRow = 8;
    chart.LeftColumn = 1;
    chart.BottomRow = 23;
    chart.RightColumn = 8;

    // Manual layout positioning of the chart title
    chart.ChartTitleArea.Layout.LeftMode = LayoutModes.edge;
    chart.ChartTitleArea.Layout.TopMode = LayoutModes.edge;
    chart.ChartTitleArea.Layout.Left = 100;
    chart.ChartTitleArea.Layout.Top = 20;

    // Save the workbook to disk in XLSX format
    workbook.SaveAs(Path.GetFullPath("Output/Chart.xlsx"));
}
{% endhighlight %}
{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    // Instantiate the Excel application object
    IApplication application = excelEngine.Excel;

    // Assign default application version
    application.DefaultVersion = ExcelVersion.Xlsx;

    // Open an existing workbook
    IWorkbook workbook = application.Workbooks.Open("InputTemplate.xlsx", ExcelOpenType.Automatic);

    // Access the first worksheet
    IWorksheet sheet = workbook.Worksheets[0];

    // Create a chart
    IChartShape chart = sheet.Charts.Add();

    // Set chart type
    chart.ChartType = ExcelChartType.Column_Clustered;

    // Set data range in the worksheet
    chart.DataRange = sheet.Range["A1:C6"];
    chart.IsSeriesInRows = false;

    // Set data labels for series 1
    IChartSerie serie1 = chart.Series[0];
    IChartSerie serie2 = chart.Series[1];
    serie1.DataPoints.DefaultDataPoint.DataLabels.IsValue = true;
    serie1.DataPoints.DefaultDataPoint.DataLabels.Position = ExcelDataLabelPosition.Outside;

    // Set data labels for series 2
    serie2.DataPoints.DefaultDataPoint.DataLabels.IsValue = true;
    serie2.DataPoints.DefaultDataPoint.DataLabels.Position = ExcelDataLabelPosition.Outside;

    // Set chart title
    chart.ChartTitle = "Sales Analysis";

    // Set legend and position it at the left
    chart.HasLegend = true;
    chart.Legend.Position = ExcelLegendPosition.Left;

    // Position the chart in the worksheet
    chart.TopRow = 8;
    chart.LeftColumn = 1;
    chart.BottomRow = 23;
    chart.RightColumn = 8;

    // Manual layout positioning of the chart title
    chart.ChartTitleArea.Layout.LeftMode = LayoutModes.edge;
    chart.ChartTitleArea.Layout.TopMode = LayoutModes.edge;
    chart.ChartTitleArea.Layout.Left = 100;
    chart.ChartTitleArea.Layout.Top = 20;

    // Save the workbook to disk in XLSX format
    workbook.SaveAs("Chart.xlsx");
}
{% endhighlight %}
{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As New ExcelEngine()
    ' Instantiate the Excel application object
    Dim application As IApplication = excelEngine.Excel

    ' Assign default application version
    application.DefaultVersion = ExcelVersion.Xlsx

    ' Open an existing workbook
    Dim workbook As IWorkbook = application.Workbooks.Open("InputTemplate.xlsx", ExcelOpenType.Automatic)

    ' Access the first worksheet
    Dim sheet As IWorksheet = workbook.Worksheets(0)

    ' Create a chart
    Dim chart As IChartShape = sheet.Charts.Add()

    ' Set chart type
    chart.ChartType = ExcelChartType.Column_Clustered

    ' Set data range in the worksheet
    chart.DataRange = sheet.Range("A1:C6")
    chart.IsSeriesInRows = False

    ' Set data labels for series 1
    Dim serie1 As IChartSerie = chart.Series(0)
    Dim serie2 As IChartSerie = chart.Series(1)
    serie1.DataPoints.DefaultDataPoint.DataLabels.IsValue = True
    serie1.DataPoints.DefaultDataPoint.DataLabels.Position = ExcelDataLabelPosition.Outside

    ' Set data labels for series 2
    serie2.DataPoints.DefaultDataPoint.DataLabels.IsValue = True
    serie2.DataPoints.DefaultDataPoint.DataLabels.Position = ExcelDataLabelPosition.Outside

    ' Set chart title
    chart.ChartTitle = "Sales Analysis"

    ' Set legend and position it at the left
    chart.HasLegend = True
    chart.Legend.Position = ExcelLegendPosition.Left

    ' Position the chart in the worksheet
    chart.TopRow = 8
    chart.LeftColumn = 1
    chart.BottomRow = 23
    chart.RightColumn = 8

    ' Manual layout positioning of the chart title
    chart.ChartTitleArea.Layout.LeftMode = LayoutModes.edge
    chart.ChartTitleArea.Layout.TopMode = LayoutModes.edge
    chart.ChartTitleArea.Layout.Left = 100
    chart.ChartTitleArea.Layout.Top = 20

    ' Save the workbook to disk in XLSX format
    workbook.SaveAs("Chart.xlsx")
End Using
{% endhighlight %}
{% endtabs %}