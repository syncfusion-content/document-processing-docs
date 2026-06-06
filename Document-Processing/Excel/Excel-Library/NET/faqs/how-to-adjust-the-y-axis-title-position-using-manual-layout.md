---
title: How to adjust the Y axis title position using manual layout? | Syncfusion
description: This page explains with an example how to adjust the Y axis title position using manual layout in Syncfusion .NET Excel library (XlsIO).
platform: document-processing
control: XlsIO
documentation: UG
---

# How to adjust the Y axis title position using manual layout?

Manual layout allows you to precisely position chart elements by specifying their relative or absolute position. The `ManualLayout` property of the chart axis title provides options to adjust the title position programmatically using Syncfusion XlsIO.

The following code example illustrates adjusting the Y axis (primary value axis) title position using manual layout.

{% tabs %}  
{% highlight c# tabtitle="C# [Cross-platform]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    // Instantiate the Excel application object
    IApplication application = excelEngine.Excel;

    // Assign default application version
    application.DefaultVersion = ExcelVersion.Xlsx;

    // Open an existing workbook
    IWorkbook workbook = application.Workbooks.Open(Path.GetFullPath(@"Data/InputTemplate.xlsx"));

    // Access first worksheet from the workbook
    IWorksheet worksheet = workbook.Worksheets[0];

    // Access the chart in the worksheet
    IChartShape chart = worksheet.Charts[0];

    // Adjust the Y axis title position using manual layout
    chart.PrimaryValueAxis.TitleArea.Layout.ManualLayout.Top = 0.15;

    // Save the modified workbook
    workbook.SaveAs(Path.GetFullPath(@"Output/Output.xlsx"));
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
    IWorkbook workbook = application.Workbooks.Open("InputTemplate.xlsx");

    // Access first worksheet from the workbook
    IWorksheet worksheet = workbook.Worksheets[0];

    // Access the chart in the worksheet
    IChartShape chart = worksheet.Charts[0];

    // Adjust the Y axis title position using manual layout
    chart.PrimaryValueAxis.TitleArea.Layout.ManualLayout.Top = 0.15;

    // Save the modified workbook
    workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As New ExcelEngine()
    ' Instantiate the Excel application object
    Dim application As IApplication = excelEngine.Excel

    ' Assign default application version
    application.DefaultVersion = ExcelVersion.Xlsx

    ' Open an existing workbook
    Dim workbook As IWorkbook = application.Workbooks.Open("InputTemplate.xlsx")

    ' Access first worksheet from the workbook
    Dim worksheet As IWorksheet = workbook.Worksheets(0)

    ' Access the chart in the worksheet
    Dim chart As IChartShape = worksheet.Charts(0)

    ' Adjust the Y axis title position using manual layout
    chart.PrimaryValueAxis.TitleArea.Layout.ManualLayout.Top = 0.15

    ' Save the modified workbook
    workbook.SaveAs("Output.xlsx")
End Using
{% endhighlight %}
{% endtabs %}


A complete working example in C# is present on <a href="https://github.com/SyncfusionExamples/XlsIO-Examples/tree/1031342-ChartPosition/FAQ/Chart/.NET/Chart%20Axis%20Manual%20Positioning/.NET/Chart%20Axis%20Manual%20Positioning">this GitHub page</a>.