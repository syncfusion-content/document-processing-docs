---
title: How to set read only mode in Excel document | Syncfusion
description: This page explains how to to set read only mode in Excel document using XlsIO
platform: document-processing
control: XlsIO
documentation: UG

# How to set read only mode in Excel document using XlsIO?

To enable, read only mode in Excel document, ReadOnlyRecommended property needs to be set as 'True' before saving the Excel document using XlsIO.

The following code examples illustrate how to set read only mode in Excel.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    // Instantiate the Excel application object
    IApplication application = excelEngine.Excel;

    // Assigns default application version
    application.DefaultVersion = ExcelVersion.Xlsx;

    // Create a workbook with 1 worksheet
    IWorkbook workbook = application.Workbooks.Create(1);

    // Access first worksheet from the workbook
    IWorksheet worksheet = workbook.Worksheets[0];

    // Adding text to a cell
    worksheet.Range["A1"].Text = "Hello World";

    // Set the workbook to be read-only recommended
    workbook.ReadOnlyRecommended = true;

    // Save the workbook to disk in XLSX format
    workbook.SaveAs(Path.GetFullPath("Output/Output.xlsx"));
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    // Instantiate the Excel application object
    IApplication application = excelEngine.Excel;

    // Assigns default application version
    application.DefaultVersion = ExcelVersion.Xlsx;

    // Create a workbook with 1 worksheet
    IWorkbook workbook = application.Workbooks.Create(1);

    // Access first worksheet from the workbook
    IWorksheet worksheet = workbook.Worksheets[0];

    // Adding text to a cell
    worksheet.Range["A1"].Text = "Hello World";
    // Set the workbook to be read-only recommended
    workbook.ReadOnlyRecommended = true;

    // Save the workbook to disk in XLSX format
    workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As New ExcelEngine()
    ' Instantiate the Excel application object
    Dim application As IApplication = excelEngine.Excel

    ' Assigns default application version
    application.DefaultVersion = ExcelVersion.Xlsx

    ' Create a workbook with 1 worksheet
    Dim workbook As IWorkbook = application.Workbooks.Create(1)
    ' Access first worksheet from the workbook
    Dim worksheet As IWorksheet = workbook.Worksheets(0)

    ' Adding text to a cell
    worksheet("A1").Text = "Hello World"

    ' Set the workbook to be read-only recommended
    workbook.ReadOnlyRecommended = true

    ' Save the workbook to disk in XLSX format
    workbook.SaveAs("Sample.xlsx")
End Using
{% endhighlight %}
{% endtabs %}

A complete working example in C# is present on <a href="https://github.com/SyncfusionExamples/XlsIO-Examples/tree/992377-ReadOnly-Excel/FAQ/ReadOnly%20Excel/.NET/Readonly%20Excel">this GitHub page</a>.
