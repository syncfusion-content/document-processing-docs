---
title: Setting Chart properties using Syncfusion XLsIO | Syncfusion
description: This page tells how to set chart title properties like type of font, color, bold, size.
platform: document-processing
control: XlsIO
documentation: UG
---

# How to set chart title properties like type of font, color, bold, size using XLsIO?

This following code samples demonstrate how to set chart title properties like type of font, color, bold, size using C# (Cross-platform and Windows-specific) and VB.NET.

{% tabs %}  
{% highlight c# tabtitle="C# [Cross-platform]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    #region Workbook Initialization
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;
    IWorkbook workbook = application.Workbooks.Open(Path.GetFullPath(@"Data/InputTemplate.xlsx"));
    IWorksheet worksheet = workbook.Worksheets[0];
    #endregion

    //Create a Chart
    IChartShape chart = workbook.Worksheets[0].Charts.Add();

    chart.DataRange = worksheet.Range["A3:C15"];
    chart.ChartType = ExcelChartType.Column_Clustered;
    chart.IsSeriesInRows = false;

    //Formatting the chart
    chart.ChartTitle = "Crescent City, CA";
    chart.ChartTitleArea.FontName = "Calibri";
    chart.ChartTitleArea.Size = 14;
    chart.ChartTitleArea.Bold = true;
    chart.ChartTitleArea.Color = ExcelKnownColors.Red;

    //Embedded Chart Position
    chart.TopRow = 2;
    chart.BottomRow = 30;
    chart.LeftColumn = 5;
    chart.RightColumn = 18;

    #region Save
    //Saving the workbook
    workbook.SaveAs(Path.GetFullPath("Output/Output.xlsx"));
    #endregion
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    #region Workbook Initialization
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;
    IWorkbook workbook = application.Workbooks.Open("InputTemplate.xlsx");
    IWorksheet worksheet = workbook.Worksheets[0];
    #endregion

    //Create a Chart
    IChartShape chart = workbook.Worksheets[0].Charts.Add();

    chart.DataRange = worksheet.Range["A3:C15"];
    chart.ChartType = ExcelChartType.Column_Clustered;
    chart.IsSeriesInRows = false;

    //Formatting the chart
    chart.ChartTitle = "Crescent City, CA";
    chart.ChartTitleArea.FontName = "Calibri";
    chart.ChartTitleArea.Size = 14;
    chart.ChartTitleArea.Bold = true;
    chart.ChartTitleArea.Color = ExcelKnownColors.Red;

    //Embedded Chart Position
    chart.TopRow = 2;
    chart.BottomRow = 30;
    chart.LeftColumn = 5;
    chart.RightColumn = 18;

    #region Save
    //Saving the workbook
    workbook.SaveAs("Output.xlsx");
    #endregion
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As New ExcelEngine()
    Dim application As IApplication = excelEngine.Excel
    application.DefaultVersion = ExcelVersion.Xlsx
    Dim workbook As IWorkbook = application.Workbooks.Open("InputTemplate.xlsx")
    Dim worksheet As IWorksheet = workbook.Worksheets(0)

    'Create a Chart
    Dim chart As IChartShape = workbook.Worksheets(0).Charts.Add()

    chart.DataRange = worksheet.Range("A3:C15")
    chart.ChartType = ExcelChartType.Column_Clustered
    chart.IsSeriesInRows = False

    'Formatting the chart
    chart.ChartTitle = "Crescent City, CA"
    chart.ChartTitleArea.FontName = "Calibri"
    chart.ChartTitleArea.Size = 14
    chart.ChartTitleArea.Bold = True
    chart.ChartTitleArea.Color = ExcelKnownColors.Red

    'Embedded Chart Position
    chart.TopRow = 2
    chart.BottomRow = 30
    chart.LeftColumn = 5
    chart.RightColumn = 18

    'Saving the workbook
    workbook.SaveAs("Output.xlsx")
End Using
{% endhighlight %}
{% endtabs %} 

A complete working example in C# is present on <a href="https://github.com/SyncfusionExamples/XlsIO-Examples/tree/1006546-ChartProperties/FAQ/Chart/.NET/ChartProperties">this GitHub page</a>.