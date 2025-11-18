---
title: How to set and format time values in Excel using TimeSpan | Syncfusion
description: Code example to set and format time values in Excel using TimeSpan in C# using Syncfusion .NET Excel library (XlsIO).
platform: document-processing
control: XlsIO
documentation: UG
---
# How to set and format time values in Excel using TimeSpan?
You can set a TimeSpan value into an Excel worksheet cell and format it to display as time using the Syncfusion XlsIO library. The following code examples demonstrate how to do this in C# (cross-platform and Windows-specific) and VB.NET.
{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/FAQ/Timespan/.NET/Set%20and%20format%20time%20values/Set%20and%20format%20time%20values/Program.cs,180" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;
    IWorkbook workbook = application.Workbooks.Create(1);
    IWorksheet sheet = workbook.Worksheets[0];

    TimeSpan ts = new TimeSpan(12, 32, 38);

    //Convert the TimeSpan to a fractional day value that Excel understands
    double excelTimeValue = ts.TotalDays;

    //Set value in cell
    sheet.SetValueRowCol(excelTimeValue, 1, 1);

    //Apply the time format to the cell to display it as 'hh:mm:ss'
    sheet.Range[1, 1].NumberFormat = "hh:mm:ss";

    #region Save
    //Saving the workbook
    workbook.SaveAs("Output.xlsx");
    #endregion    
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine engine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;
    IWorkbook workbook = application.Workbooks.Create(1);
    IWorksheet sheet = workbook.Worksheets[0];

    TimeSpan ts = new TimeSpan(12, 32, 38);

    //Convert the TimeSpan to a fractional day value that Excel understands
    double excelTimeValue = ts.TotalDays;

    //Set value in cell
    sheet.SetValueRowCol(excelTimeValue, 1, 1);

    //Apply the time format to the cell to display it as 'hh:mm:ss'
    sheet.Range[1, 1].NumberFormat = "hh:mm:ss";

    //Saving the workbook
    workbook.SaveAs("Output.xlsx"); 
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using engine As New ExcelEngine()
    Dim application As IApplication = engine.Excel
    application.DefaultVersion = ExcelVersion.Xlsx
    Dim workbook As IWorkbook = application.Workbooks.Create(1)
    Dim sheet As IWorksheet = workbook.Worksheets(0)    
    Dim ts As New TimeSpan(12, 32, 38)

    'Convert the TimeSpan to a fractional day value that Excel understands
    Dim excelTimeValue As Double = ts.TotalDays

    'Set value in cell
    sheet.SetValueRowCol(excelTimeValue, 1, 1)

    'Apply the time format to the cell to display it as 'hh:mm:ss'
    sheet.Range(1, 1).NumberFormat = "hh:mm:ss"

    'Saving the workbook
    workbook.SaveAs("Output.xlsx")
End Using
{% endhighlight %}
{% endtabs %}

A complete working example to set and format time values in Excel using TimeSpan is available on [this GitHub page](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/FAQ/Timespan/.NET/Set%20and%20format%20time%20values).
