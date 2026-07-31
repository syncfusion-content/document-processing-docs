---
title: How to set the default font and font size in Excel files | Syncfusion
description: Learn how to set the default font and font size for an Excel workbook using the .NET Excel Library with code examples.
platform: document-processing
control: XlsIO
documentation: UG
---

# How to set the default font and font size in an Excel workbook?

You can programmatically set the default font and font size in an Excel workbook using the [StandardFont](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IWorkbook.html#Syncfusion_XlsIO_IWorkbook_StandardFont) and [StandardFontSize](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IWorkbook.html#Syncfusion_XlsIO_IWorkbook_StandardFontSize) properties of the [IWorkbook](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IWorkbook.html) interface. The following code examples demonstrate how to do this in C# (Cross-platform and Windows-specific) and VB.NET.

## Prerequisites

Before running the code example, make sure the following prerequisites are met:

- Install the **Syncfusion.XlsIO.WinForms** NuGet package (for Windows) or the **Syncfusion.XlsIO.Net.Core** package (for .NET Core / .NET 6+ cross-platform targets).
- Add the required `using` directive: `using Syncfusion.XlsIO;` (or `Imports Syncfusion.XlsIO` in VB.NET).
- The cross-platform C# sample requires the additional `using System.IO;` directive for `Path.GetFullPath`, and writes the output to `Output/Output.xlsx`.
- The Windows-specific C# and VB.NET samples write `Output.xlsx` to the current working directory.
- The example creates a new workbook with `Workbooks.Create(1)`, so no input file is required.

## Code example

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/FAQ/Workbook%20default%20font%20and%20font%20size/.NET/Workbook%20default%20font%20and%20font%20size/Workbook%20default%20font%20and%20font%20size/Program.cs,180" %} 
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;

    IWorkbook workbook = application.Workbooks.Create(1);
    IWorksheet sheet = workbook.Worksheets[0];

    //Set default font and font size
    workbook.StandardFont = "Calibri";
    workbook.StandardFontSize = 12;

    //Add some text
    sheet.Range["A1"].Text = "This is default font and size";

    //Save to file
    workbook.SaveAs(Path.GetFullPath("Output/Output.xlsx"));
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;
    IWorkbook workbook = application.Workbooks.Create(1);
    IWorksheet sheet = workbook.Worksheets[0];

    //Set default font and font size
    workbook.StandardFont = "Calibri";
    workbook.StandardFontSize = 12;

    //Add some text
    sheet.Range["A1"].Text = "This is default font and size";

    //Save the workbook
    workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Imports Syncfusion.XlsIO

Using excelEngine As New ExcelEngine()
    Dim application As IApplication = excelEngine.Excel
    Dim workbook As IWorkbook = application.Workbooks.Create(1)
    Dim sheet As IWorksheet = workbook.Worksheets(0)

    'Set default font and font size
    workbook.StandardFont = "Calibri"
    workbook.StandardFontSize = 12

    'Add some text
    sheet.Range("A1").Text = "This is default font and size"

    'Save the workbook
    workbook.SaveAs("Output.xlsx")
End Using
{% endhighlight %}
{% endtabs %}

A complete working example to set the default font and font size in an Excel Workbook using C# is available on [this GitHub page](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/FAQ/Workbook%20default%20font%20and%20font%20size/.NET/Workbook%20default%20font%20and%20font%20size).

## See also

- [How to apply font styles to the entire worksheet](how-to-apply-font-styles-to-the-entire-worksheet.md)
- [How to format text within a cell](how-to-format-text-within-a-cell.md)
- [How to change the shape text font](how-to-change-the-shape-text-font.md)
