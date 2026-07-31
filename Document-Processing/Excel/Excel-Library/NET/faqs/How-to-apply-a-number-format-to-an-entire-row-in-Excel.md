---
title:  Apply a number format to an entire row in Excel | Syncfusion
description: Learn how to apply a number format to an entire row in Excel using the Syncfusion .NET Excel (XlsIO) library. 
platform: document-processing
control: XlsIO
documentation: UG
---

# How to apply a number format to an entire row in Excel?

The following examples illustrate how to apply a number format to an entire row in Excel in C# (cross-platform and Windows-specific) and VB.NET.

## Prerequisites

Before running the code example, make sure the following prerequisites are met:

- Install the **Syncfusion.XlsIO.WinForms** NuGet package (for Windows) or the **Syncfusion.XlsIO.Net.Core** package (for .NET Core / .NET 6+ cross-platform targets).
- Add the required `using` directive at the top of the file:
  - `using Syncfusion.XlsIO;` — for the XlsIO types and `IRange.EntireRow`.
- The VB.NET equivalent: `Imports Syncfusion.XlsIO`.
- The example creates a new workbook with `Workbooks.Create(1)`, so no input file is required.
- The output folder (`Output`) must exist or be created by the application before calling `SaveAs`. `SaveAs` does not create missing parent directories on its own.
- The cross-platform tab saves to `../../../Output/NumberFormats.xlsx`; the Windows-specific and VB.NET tabs save to `../../Output/NumberFormats.xlsx`. Confirm that the path matches your project's working directory.

{% tabs %}                                          
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/FAQ/Number%20format%20for%20entire%20row/.NET/Numberformatforentirerow/Numberformatforentirerow/Program.cs,180" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;
    IWorkbook workbook = application.Workbooks.Create(1);
    IWorksheet worksheet = workbook.Worksheets[0];

    worksheet["A1"].Number = 1000.500;
    worksheet["B1"].Number = 1234;
    worksheet["C1"].Number = 54321.500;
    worksheet["D1"].Number = .500;

    worksheet["A1"].EntireRow.NumberFormat = "#,##0.0000";

    workbook.SaveAs("../../../Output/NumberFormats.xlsx");
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %} 
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;
    IWorkbook workbook = application.Workbooks.Create(1);
    IWorksheet worksheet = workbook.Worksheets[0];

    worksheet["A1"].Number = 1000.500;
    worksheet["B1"].Number = 1234;
    worksheet["C1"].Number = 54321.500;
    worksheet["D1"].Number = .500;

    worksheet["A1"].EntireRow.NumberFormat = "#,##0.0000";

    workbook.SaveAs("../../Output/NumberFormats.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As New ExcelEngine()
    Dim application As IApplication = excelEngine.Excel
    application.DefaultVersion = ExcelVersion.Xlsx

    Dim workbook As IWorkbook = application.Workbooks.Create(1)
    Dim worksheet As IWorksheet = workbook.Worksheets(0)

    worksheet("A1").Number = 1000.5
    worksheet("B1").Number = 1234
    worksheet("C1").Number = 54321.5
    worksheet("D1").Number = 0.5

    worksheet("A1").EntireRow.NumberFormat = "#,##0.0000"

    workbook.SaveAs("../../Output/NumberFormats.xlsx")
End Using
{% endhighlight %}
{% endtabs %}

A complete working example to demonstrate how to apply a number format to an entire row in Excel using C# is present on <a href="https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/FAQ/Number%20format%20for%20entire%20row/.NET/Numberformatforentirerow">this GitHub page</a>.

## See also

* [Numberformatforentirerow on GitHub](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/FAQ/Number%20format%20for%20entire%20row/.NET/Numberformatforentirerow)
* [Number Formatting in Excel](https://help.syncfusion.com/document-processing/excel/excel-library/net/working-with-cell-or-range-formatting#apply-number-formats)
* [How to apply number formatting to an entire column in Excel](https://help.syncfusion.com/document-processing/excel/excel-library/net/faqs/how-to-apply-number-formatting-to-an-entire-column-in-Excel)
* [Working with Rows and Columns](https://help.syncfusion.com/document-processing/excel/excel-library/net/worksheet-rows-and-columns-manipulation)
  
