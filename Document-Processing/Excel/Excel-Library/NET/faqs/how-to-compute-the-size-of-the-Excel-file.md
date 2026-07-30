---
title: How to compute the size of the Excel file | Syncfusion
description: Code example to compute the size of the Excel file using .NET Excel Library.
platform: document-processing
control: XlsIO
documentation: UG
---
# How to compute the size of the Excel file?
To compute the size of an Excel file using Syncfusion XlsIO, you can save the workbook to a memory stream and then get its length in bytes. This method avoids saving the file to disk just to measure its size. 

## Prerequisites

Before running the code example, make sure the following prerequisites are met:

- Install the **Syncfusion.XlsIO.WinForms** NuGet package (for Windows) or the **Syncfusion.XlsIO.Net.Core** package (for .NET Core / .NET 6+ cross-platform targets).
- Add the required `using` directives: `using Syncfusion.XlsIO;` and `using System.IO;` (or `Imports Syncfusion.XlsIO` and `Imports System.IO` in VB.NET).
- The example creates a new workbook with `Workbooks.Create(1)`, so no input file is required.
- The `MemoryStream` is disposed automatically by the `using` / `Using` block; no file is written to disk.

## Code example
{% tabs %} 
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/FAQ/Excel%20size/.NET/Excel%20size/Excel%20size/Program.cs,180" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;
    IWorkbook workbook = application.Workbooks.Create(1);
    IWorksheet worksheet = workbook.Worksheets[0];

    worksheet.Range["A1"].Text = "Sample Data";

    //Save to memory stream
    using (MemoryStream stream = new MemoryStream())
    {
        workbook.SaveAs(stream);

        //Compute file size in bytes
        long sizeInBytes = stream.Length;
        Console.WriteLine($"File size: {sizeInBytes} bytes");

        //Convert to KB 
        double sizeInKB = sizeInBytes / 1024.0;
        Console.WriteLine($"File size: {sizeInKB:F2} KB");
    } 
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %} 
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;
    IWorkbook workbook = application.Workbooks.Create(1);
    IWorksheet sheet = workbook.Worksheets[0];
    sheet.Range["A1"].Text = "Sample Excel File";

    //Save to memory stream
    using (MemoryStream memoryStream = new MemoryStream())
    {
        workbook.SaveAs(memoryStream);

        //Compute file size in bytes
        long sizeInBytes = memoryStream.Length;
        Console.WriteLine($"File size: {sizeInBytes} bytes");

        //Convert to KB 
        double sizeInKB = sizeInBytes / 1024.0;
        Console.WriteLine($"File size: {sizeInKB:F2} KB");
    }
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As ExcelEngine = New ExcelEngine()
    Dim application As IApplication = excelEngine.Excel
    application.DefaultVersion = ExcelVersion.Xlsx
    Dim workbook As IWorkbook = application.Workbooks.Create(1)
    Dim sheet As IWorksheet = workbook.Worksheets(0)
    sheet.Range("A1").Text = "Excel Size Sample"

    'Save to memory stream
    Using memoryStream As New MemoryStream()
        workbook.SaveAs(memoryStream)

        'Compute file size in bytes
        Dim sizeInBytes As Long = memoryStream.Length
        Console.WriteLine("Excel File Size: " & sizeInBytes & " bytes")

        'Convert to KB 
        Dim sizeInKB As Double = sizeInBytes / 1024.0
        Console.WriteLine("Excel File Size: " & sizeInKB.ToString("F2") & " KB")
    End Using
End Using
{% endhighlight %}
{% endtabs %}

A complete working example to compute the size of the Excel file in C# is present on [this GitHub page](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/FAQ/Excel%20size/.NET/Excel%20size).

## See also

- [How to save a file to stream](how-to-save-a-file-to-stream.md)
- [How to open an Excel file from stream](how-to-open-an-excel-file-from-stream.md)
- [How to convert xls document to xlsx format document](how-to-convert-xls-document-to-xlsx-format-document.md)   
