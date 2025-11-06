---
title: How to override an Excel document using C# | Syncfusion
description: This page explains how to override an existing Excel document using Syncfusion .NET Excel library (XlsIO).
platform: document-processing
control: XlsIO
documentation: UG
---

# How to override an Excel document using C#?

You can override an existing Excel document by opening it, making necessary changes, and saving it using the Syncfusion XlsIO library.

The following code examples demonstrate how to do this in C# (Cross-platform and Windows-specific) and VB.NET.

{% tabs %} 
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/FAQ/Override%20Excel%20Document/.NET/Override%20Excel%20Document/Override%20Excel%20Document/Program.cs,180" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;

    //Open an existing Excel file as stream
    IWorkbook workbook = application.Workbooks.Open(Path.GetFullPath(@"Data/Sample.xlsx"));
    IWorksheet worksheet = workbook.Worksheets[0];

    //Modify the data
    worksheet.Range["A1"].Text = "Hello World";

    #region Save
    //Saving the workbook
    workbook.SaveAs(Path.GetFullPath("Output/Sample.xlsx"));
    #endregion
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %} 
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;

    //Open an existing Excel file
    IWorkbook workbook = application.Workbooks.Open("Sample.xlsx");
    IWorksheet worksheet = workbook.Worksheets[0];

    //Modify the data
    worksheet.Range["A1"].Text = "Hello World";

    workbook.SaveAs("Sample.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As New ExcelEngine()
    Dim application As IApplication = excelEngine.Excel
    application.DefaultVersion = ExcelVersion.Xlsx

    'Open an existing Excel file
    Dim workbook As IWorkbook = application.Workbooks.Open("Sample.xlsx")
    Dim worksheet As IWorksheet = workbook.Worksheets(0)

    'Modify the data
    worksheet.Range("A1").Text = "Hello World"

    workbook.SaveAs("Sample.xlsx")
End Using
{% endhighlight %}
{% endtabs %}

A complete working example to override an Excel document in C# is present on [this GitHub page](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/FAQ/Override%20Excel%20Document/.NET/Override%20Excel%20Document).   