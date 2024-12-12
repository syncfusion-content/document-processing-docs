---
title: How to set the background color for the chart | Syncfusion
description: This page explains how to set the background color for the chart using Syncfusion .NET Excel library (XlsIO).
platform: document-processing
control: XlsIO
documentation: UG
---

# How to set the background color for the chart?

You can set the background of a chart as either the plot area background or the chart area background. Essential XlsIO allows you to set the background color for both the PlotArea and ChartArea using the [ForeColor](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IFill.html#Syncfusion_XlsIO_IFill_ForeColor) property of the [IFill](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IFill.html) interface.


The following code example illustrates how to set the background color of the chart to a specified color.

{% tabs %}  
{% highlight c# tabtitle="C# [Cross-platform]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;
    FileStream inputStream = new FileStream(Path.GetFullPath(@"Data/InputTemplate.xlsx"), FileMode.Open, FileAccess.Read);
    IWorkbook workbook = application.Workbooks.Open(inputStream);
    IWorksheet worksheet = workbook.Worksheets[0];

    //Get the first chart in the worksheet
    IChartShape chart = worksheet.Charts[0];

    //Applying background color for plot area
    chart.PlotArea.Fill.ForeColor = Color.Yellow;

    //Applying background color for chart area
    chart.ChartArea.Fill.ForeColor = Color.LightGreen;

    //Saving the workbook as stream
    FileStream outputStream = new FileStream(Path.GetFullPath("Output/Output.xlsx"), FileMode.Create, FileAccess.Write);
    workbook.SaveAs(outputStream);
  
    //Dispose streams
    outputStream.Dispose();
    inputStream.Dispose();
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;
    IWorkbook workbook = application.Workbooks.Open("../../Data/InputTemplate.xlsx");
    IWorksheet worksheet = workbook.Worksheets[0];

    //Get the first chart in the worksheet
    IChartShape chart = worksheet.Charts[0];

    //Applying background color for plot area
    chart.PlotArea.Fill.ForeColor = Color.Yellow;

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
    Dim workbook As IWorkbook = application.Workbooks.Open("../../Data/InputTemplate.xlsx")
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