---
title: How to change chart series data interpretation in Excel | Syncfusion 
description: Code example to switch chart series data interpretation from horizontal (rows) to vertical (columns) in Excel using Syncfusion .NET Excel library (XlsIO). 
platform: document-processing 
control: XlsIO 
documentation: UG
---

# How to switch chart series data interpretation from horizontal (rows) to vertical (columns) in Excel?

You can change how data is interpreted in a chart by switching the series alignment from horizontal (rows) to vertical (columns) using Syncfusion XlsIO. This is done by using [IsSeriesInRows](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IChart.html#Syncfusion_XlsIO_IChart_IsSeriesInRows) property of the [IChart](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IChart.html) interface. 

The following code snippets demonstrate how to switch chart series data interpretation from horizontal (rows) to vertical (columns) in Excel using C# (cross-platform and Windows-specific) and VB.NET.

{% tabs %}  
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/FAQ/Chart/.NET/Switch%20chart%20series%20orientation/Switch%20chart%20series%20orientation/Program.cs,180" %} 
using (ExcelEngine excelEngine = new ExcelEngine()) 
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;
    IWorkbook workbook = application.Workbooks.Create(1);
    IWorksheet sheet = workbook.Worksheets[0];

    //Add data for chart
    sheet.Range["A1"].Text = "Year";
    sheet.Range["B1"].Text = "2022";
    sheet.Range["C1"].Text = "2023";
    sheet.Range["D1"].Text = "2024";

    sheet.Range["A2"].Text = "Sales";
    sheet.Range["B2"].Number = 1000;
    sheet.Range["C2"].Number = 1500;
    sheet.Range["D2"].Number = 1800;

    sheet.Range["A3"].Text = "Profit";
    sheet.Range["B3"].Number = 200;
    sheet.Range["C3"].Number = 300;
    sheet.Range["D3"].Number = 400;

    //Create a Chart
    IChartShape chart = sheet.Charts.Add();

    //Set chart type
    chart.ChartType = ExcelChartType.Bar_Clustered;

    //Set data range in the worksheet
    chart.DataRange = sheet.Range["A1:D3"];

    //Set series orientation from rows to columns
    chart.IsSeriesInRows = false;

    //Positioning the chart in the worksheet
    chart.TopRow = 9;
    chart.LeftColumn = 1;
    chart.BottomRow = 22;
    chart.RightColumn = 8;

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

    //Add data for chart
    sheet.Range["A1"].Text = "Year";
    sheet.Range["B1"].Text = "2022";
    sheet.Range["C1"].Text = "2023";
    sheet.Range["D1"].Text = "2024";

    sheet.Range["A2"].Text = "Sales";
    sheet.Range["B2"].Number = 1000;
    sheet.Range["C2"].Number = 1500;
    sheet.Range["D2"].Number = 1800;

    sheet.Range["A3"].Text = "Profit";
    sheet.Range["B3"].Number = 200;
    sheet.Range["C3"].Number = 300;
    sheet.Range["D3"].Number = 400;

    //Create a Chart
    IChartShape chart = sheet.Charts.Add();

    //Set chart type
    chart.ChartType = ExcelChartType.Bar_Clustered;

    //Set data range in the worksheet
    chart.DataRange = sheet.Range["A1:D3"];

    //Set series orientation from rows to columns 
    chart.IsSeriesInRows = false;

    //Positioning the chart in the worksheet
    chart.TopRow = 9;
    chart.LeftColumn = 1;
    chart.BottomRow = 22;
    chart.RightColumn = 8;

    //Saving the workbook
    workbook.SaveAs("Output.xlsx");
} 
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As ExcelEngine = New ExcelEngine()
    Dim application As IApplication = excelEngine.Excel
    application.DefaultVersion = ExcelVersion.Xlsx
    Dim workbook As IWorkbook = application.Workbooks.Create(1)
    Dim sheet As IWorksheet = workbook.Worksheets(0)

    'Add data for chart
    sheet.Range("A1").Text = "Year"
    sheet.Range("B1").Text = "2022"
    sheet.Range("C1").Text = "2023"
    sheet.Range("D1").Text = "2024"

    sheet.Range("A2").Text = "Sales"
    sheet.Range("B2").Number = 1000
    sheet.Range("C2").Number = 1500
    sheet.Range("D2").Number = 1800

    sheet.Range("A3").Text = "Profit"
    sheet.Range("B3").Number = 200
    sheet.Range("C3").Number = 300
    sheet.Range("D3").Number = 400

    'Create a Chart
    Dim chart As IChartShape = sheet.Charts.Add()

    'Set chart type
    chart.ChartType = ExcelChartType.Bar_Clustered

    'Set data range in the worksheet
    chart.DataRange = sheet.Range("A1:D3")

    'Set series orientation from rows to columns
    chart.IsSeriesInRows = False

    'Positioning the chart in the worksheet
    chart.TopRow = 9
    chart.LeftColumn = 1
    chart.BottomRow = 22
    chart.RightColumn = 8

    'Saving the workbook
    workbook.SaveAs("Output.xlsx")
End Using
{% endhighlight %} 
{% endtabs %}

A complete working example to switch chart series data interpretation from horizontal (rows) to vertical (columns) in Excel is available on [this GitHub page](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/FAQ/Chart/.NET/Switch%20chart%20series%20orientation).


