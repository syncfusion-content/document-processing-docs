---
title: How to set the background color for Excel Chart in C# | Syncfusion
description: This page explains how to set the background color for the chart using Syncfusion .NET Excel library (XlsIO).
platform: document-processing
control: XlsIO
documentation: UG
---

# How to set the background color for Excel Chart in C#?

You can set the background color of a chart by customizing either the plot area or the chart area. XlsIO allows you to set the background color for both the PlotArea and ChartArea using the [ForeColor](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IFill.html#Syncfusion_XlsIO_IFill_ForeColor) property of the [IFill](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IFill.html) interface.


The following code example illustrates how to set the background color for Excel Chart in C# (cross-platform and Windows-specific) and VB.NET.

{% tabs %}  
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/FAQ/Chart/.NET/Set%20background%20color%20for%20chart/Set%20background%20color%20for%20chart/Program.cs,180" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;
    IWorkbook workbook = application.Workbooks.Open(Path.GetFullPath(@"Data/InputTemplate.xlsx"));
    IWorksheet worksheet = workbook.Worksheets[0];

    //Get the first chart in the worksheet
    IChartShape chart = worksheet.Charts[0];

    //Applying background color for plot area
    chart.PlotArea.Fill.ForeColor = Color.LightYellow;

    //Applying background color for chart area
    chart.ChartArea.Fill.ForeColor = Color.LightGreen;

    #region Save
    //Saving the workbook
    workbook.SaveAs(Path.GetFullPath("Output/Output.xlsx"));
    #endregion
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;
    IWorkbook workbook = application.Workbooks.Open("InputTemplate.xlsx");
    IWorksheet worksheet = workbook.Worksheets[0];

    //Get the first chart in the worksheet
    IChartShape chart = worksheet.Charts[0];

    //Applying background color for plot area
    chart.PlotArea.Fill.ForeColor = Color.LightYellow;

    //Applying background color for chart area
    chart.ChartArea.Fill.ForeColor = Color.LightGreen;

    //Saving the workbook
    workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As ExcelEngine = New ExcelEngine()
    Dim application As IApplication = excelEngine.Excel
    application.DefaultVersion = ExcelVersion.Xlsx
    Dim workbook As IWorkbook = application.Workbooks.Open("InputTemplate.xlsx")
    Dim worksheet As IWorksheet = workbook.Worksheets(0)

    'Get the first chart in the worksheet
    Dim chart As IChartShape = worksheet.Charts(0)

    'Applying background color for plot area
    chart.PlotArea.Fill.ForeColor = Color.Yellow

    'Applying background color for chart area
    chart.ChartArea.Fill.ForeColor = Color.LightGreen

    'Save the workbook
    workbook.SaveAs("Output.xlsx")
End Using
{% endhighlight %}
{% endtabs %}  

A complete working example to set the background color for Excel Chart using C# is present on [this GitHub page](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/FAQ/Chart/.NET/Set%20background%20color%20for%20chart).