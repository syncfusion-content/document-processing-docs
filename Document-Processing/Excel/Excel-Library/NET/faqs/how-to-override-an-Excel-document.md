---
title: How to override an Excel document using C# | Syncfusion
description: Learn how to overwrite an existing Excel document programmatically using the .NET Excel Library with code examples.
platform: document-processing
control: XlsIO
documentation: UG
---

# How to override an Excel document using C#?

You can override an existing Excel document by opening it, making necessary changes, and saving it using the Syncfusion XlsIO library.

The following code examples demonstrate how to do this in C# (Cross-platform and Windows-specific) and VB.NET.

## Prerequisites

Before running the code example, make sure the following prerequisites are met:

- Install the **Syncfusion.XlsIO.WinForms** NuGet package (for Windows) or the **Syncfusion.XlsIO.Net.Core** package (for .NET Core / .NET 6+ cross-platform targets).
- Add the required `using` directive: `using Syncfusion.XlsIO;` (or `Imports Syncfusion.XlsIO` in VB.NET). The cross-platform C# sample also requires `using System.IO;` for `Path.GetFullPath`.
- The cross-platform C# sample expects the input file at `Data/Sample.xlsx` relative to the working directory and writes the output to `Output/Sample.xlsx`.
- The Windows-specific C# and VB.NET samples read `Sample.xlsx` from the working directory and write the result back to the **same path** (`Sample.xlsx`). Confirm the source file is not open in Excel before running the sample, or change the destination path to a different file.

## Code example

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

A complete working example to override an Excel document is available on [GitHub](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/FAQ/Override%20Excel%20Document/.NET/Override%20Excel%20Document).

## See also

- [How to save a file to stream](how-to-save-a-file-to-stream.md)
- [How to save the edited chages in the same Excel document](how-to-save-the-edited-chages-in-the-same-excel-document.md)  
