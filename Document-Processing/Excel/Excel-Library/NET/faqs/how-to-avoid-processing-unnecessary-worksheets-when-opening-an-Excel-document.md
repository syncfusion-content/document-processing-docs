---
title: How to Skip Unused Sheets in .NET Excel Library | Syncfusion
description: Avoid processing unnecessary worksheets when opening Excel documents using the .NET Excel Library for better performance.
platform: document-processing
control: XlsIO
documentation: UG
---
# How to skip unnecessary worksheets in .NET Excel Library
XlsIO provides support to avoid processing unnecessary worksheets when opening an Excel. The following code snippet illustrates this.
{% tabs %} 
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/FAQ/Worksheet/.NET/Parse%20Worksheets%20On%20Demand/Parse%20Worksheets%20On%20Demand/Program.cs,180" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;
    IWorkbook workbook = application.Workbooks.Open("Input.xlsx",ExcelOpenType.Automatic, ExcelParseOptions.ParseWorksheetsOnDemand);

    // Access the first worksheet (triggers parsing)
    IWorksheet worksheet = workbook.Worksheets[0];

    // Process your data
    string value = worksheet.Range["A1"].Text;

    // Save to file system
    workbook.SaveAs("Output.xlsx");
    workbook.Close();
    excelEngine.Dispose();
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %} 
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;
    IWorkbook workbook = application.Workbooks.Open("Input.xlsx",ExcelOpenType.Automatic,ExcelParseOptions.ParseWorksheetsOnDemand);

    // Access the first worksheet (triggers parsing)
    IWorksheet worksheet = workbook.Worksheets[0];

    // Process your data
    string value = worksheet.Range["A1"].Text;
    workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
    Using excelEngine As ExcelEngine = New ExcelEngine()
        Dim application As IApplication = excelEngine.Excel
        application.DefaultVersion = ExcelVersion.Xlsx
        Dim workbook As IWorkbook = application.Workbooks.Open("Input.xlsx", ExcelParseOptions.ParseWorksheetsOnDemand)

        ' Access the first worksheet (triggers parsing)
        Dim worksheet As IWorksheet = workbook.Worksheets(0)

        ' Process your data...
        Dim value As String = worksheet.Range("A1").Text

        workbook.SaveAs("Output.xlsx")
    End Using
{% endhighlight %}
{% endtabs %}

A complete working example to avoid processing unnecessary worksheets when opening an Excel document using C# is present on [this GitHub page](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/FAQ/Worksheet/.NET/Parse%20Worksheets%20On%20Demand).   
