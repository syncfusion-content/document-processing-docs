---
title: How to Open Tab-Delimited CSV in .NET Excel Library | Syncfusion
description: Open a CSV file with a tab delimiter using the Syncfusion .NET Excel Library by passing the delimiter to the Open method.
platform: document-processing
control: XlsIO
documentation: UG
---

# How to open tab-delimited CSV files in .NET Excel Library

Syncfusion XlsIO allows you to open CSV files with custom delimiters, including tab delimiters. When opening a CSV file, you can specify the delimiter character as the second parameter in the [Open](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IWorkbooks.html#Syncfusion_XlsIO_IWorkbooks_Open_System_String_Syncfusion_XlsIO_ExcelOpenType_) method.

The following code example illustrates how to open a CSV file with a tab delimiter using XlsIO.

{% tabs %}  
{% highlight c# tabtitle="C# [Cross-platform]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    // Instantiate the Excel application object
    IApplication application = excelEngine.Excel;

    // Assign default application version
    application.DefaultVersion = ExcelVersion.Xlsx;

    // Open a CSV file with a tab delimiter ("\t")
    IWorkbook workbook = application.Workbooks.Open(Path.GetFullPath(@"Data/InputTemplate.csv"), "\t");

    // Access the first worksheet from the workbook
    IWorksheet worksheet = workbook.Worksheets[0];

    // Save the workbook to disk in XLSX format
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

    // Open a CSV file with a tab delimiter ("\t")
    IWorkbook workbook = application.Workbooks.Open("InputTemplate.csv", "\t");

    // Access the first worksheet from the workbook
    IWorksheet worksheet = workbook.Worksheets[0];

    // Save the workbook to disk in XLSX format
    workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As New ExcelEngine()
    ' Instantiate the Excel application object
    Dim application As IApplication = excelEngine.Excel

    ' Assign default application version
    application.DefaultVersion = ExcelVersion.Xlsx

    ' Open a CSV file with a tab delimiter ("\t")
    Dim workbook As IWorkbook = application.Workbooks.Open("nputTemplate.csv", "\t")

    ' Access the first worksheet from the workbook
    Dim worksheet As IWorksheet = workbook.Worksheets(0)

    ' Save the workbook to disk in XLSX format
    workbook.SaveAs("Output.xlsx")
End Using
{% endhighlight %}
{% endtabs %}

A complete working example in C# is present on <a href="https://github.com/SyncfusionExamples/XlsIO-Examples/tree/997601-CSV-Tab/FAQ/CSV%20With%20Tab/.NET/CSV%20Wtih%20Tab" aria-label="GitHub demo link">this GitHub page</a>.
