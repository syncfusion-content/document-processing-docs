---
title: How to open a CSV file with a tab delimiter using XlsIO? | Syncfusion
description: This FAQ explains how to open a CSV file with a tab delimiter using Syncfusion XlsIO Excel library by passing the delimiter as an argument to the Open method.
platform: document-processing
control: XlsIO
documentation: UG
---

# How to open a CSV file with a tab delimiter using XlsIO?

Syncfusion XlsIO allows you to open CSV files with custom delimiters, including tab delimiters. When opening a CSV file, you can specify the delimiter character as the second parameter in the [Open](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IWorkbooks.html#Syncfusion_XlsIO_IWorkbooks_Open_System_String_Syncfusion_XlsIO_ExcelOpenType_) method.

The following code example illustrates how to open a CSV file with a tab delimiter using XlsIO.

## Prerequisites

Before running the code example, make sure the following prerequisites are met:

- Install the **Syncfusion.XlsIO.WinForms** NuGet package (for Windows) or the **Syncfusion.XlsIO.Net.Core** package (for .NET Core / .NET 6+ cross-platform targets).
- Add the required `using` directives at the top of the file:
  - `using System.IO;` - for `Path.GetFullPath` (cross-platform tab).
  - `using Syncfusion.XlsIO;` - for the XlsIO types and `IApplication`, `IWorkbook`, `IWorksheet`, `ExcelOpenType`.
- The VB.NET equivalents: `Imports System.IO`, `Imports Syncfusion.XlsIO`.
- The example expects an input CSV file at `Data/InputTemplate.csv` (cross-platform tab) or `InputTemplate.csv` (Windows-specific and VB.NET tabs). The CSV file must use the tab character (`\t`) as the field delimiter.
- The output folder (`Output`) must exist or be created by the application before calling `SaveAs`. `SaveAs` does not create missing parent directories on its own.
- The second argument to `Workbooks.Open` is the delimiter character. Passing `"\t"` specifies the tab character as the delimiter. Other common delimiters include `","` (comma), `";"` (semicolon), and `"|"` (pipe).

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

A complete working example in C# is present on <a href="https://github.com/SyncfusionExamples/XlsIO-Examples/tree/997601-CSV-Tab/FAQ/CSV%20With%20Tab/.NET/CSV%20Wtih%20Tab">this GitHub page</a>.

## See also

* [CSV With Tab on GitHub](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/997601-CSV-Tab/FAQ/CSV%20With%20Tab/.NET/CSV%20Wtih%20Tab)
* [CSV to Excel Conversion](https://help.syncfusion.com/document-processing/excel/conversions/csv-to-excel/net/csv-to-excel-conversion)

