---
title: Get RGB values of a cell's background color | Syncfusion 
description: Code example to get RGB values of a cell's background color using .NET Excel Library. 
platform: document-processing
control: XlsIO
documentation: UG
---

# How to get RGB values of a cell's background color?

The following examples show how to get RGB values of a cell's background color in C# (cross-platform and Windows-specific) and VB.NET.

## Prerequisites

Before running the code example, make sure the following prerequisites are met:

- Install the **Syncfusion.XlsIO.WinForms** NuGet package (for Windows) or the **Syncfusion.XlsIO.Net.Core** package (for .NET Core / .NET 6+ cross-platform targets).
- Add the required `using` directives: `using Syncfusion.XlsIO;`, `using System.Drawing;`, and (for the cross-platform sample) `using System.IO;` (or `Imports Syncfusion.XlsIO` and `Imports System.Drawing` in VB.NET).
- The example creates a new workbook with `Workbooks.Create(1)`, so no input file is required.
- The output file is written to the application's current working directory by `SaveAs`.

## Code example

{% tabs %}                                                                                 
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/FAQ/RGB%20Value%20for%20Cell%20Color/.NET/RGB%20Value%20for%20Cell%20Color/RGBValueCellColor/Program.cs,180" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;
    IWorkbook workbook = application.Workbooks.Create(1);
    IWorksheet worksheet = workbook.Worksheets[0];

    //Apply cell color
    worksheet.Range["A1"].CellStyle.ColorIndex = ExcelKnownColors.Custom50;

    //Get the RGB values of the cell color
    Color color = worksheet.Range["A1"].CellStyle.Color;
    byte red = color.R;
    byte green = color.G;
    byte blue = color.B;

    //Print the RGB values
    Console.WriteLine($"Red: {red}, Green: {green}, Blue: {blue}");

    //Save the workbook
    workbook.SaveAs(Path.GetFullPath("Output/Output.xlsx"));
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %} 
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;
    IWorkbook workbook = application.Workbooks.Create(1);
    IWorksheet worksheet = workbook.Worksheets[0];

    //Apply cell color
    worksheet.Range["A1"].CellStyle.ColorIndex = ExcelKnownColors.Custom50;

    //Get the RGB values of the cell color
    Color color = worksheet.Range["A1"].CellStyle.Color;
    byte red = color.R;
    byte green = color.G;
    byte blue = color.B;

    //Print the RGB values
    Console.WriteLine($"Red: {red}, Green: {green}, Blue: {blue}");

    //Save the workbook
    workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %} 
Using excelEngine As New ExcelEngine()
    Dim application As IApplication = excelEngine.Excel
    application.DefaultVersion = ExcelVersion.Xlsx
    Dim workbook As IWorkbook = application.Workbooks.Create(1)
    Dim worksheet As IWorksheet = workbook.Worksheets(0)

    'Apply cell color
    worksheet.Range("A1").CellStyle.ColorIndex = ExcelKnownColors.Custom50

    'Get the RGB values of the cell color
    Dim cellColor As Color = worksheet.Range("A1").CellStyle.Color
    Dim red As Byte = cellColor.R
    Dim green As Byte = cellColor.G
    Dim blue As Byte = cellColor.B

    'Print the RGB values
    Console.WriteLine($"Red: {red}, Green: {green}, Blue: {blue}")

    'Save the workbook
    workbook.SaveAs("Output.xlsx")
End Using
{% endhighlight %} 
{% endtabs %}

A complete working example to get RGB values of a cell's background color is available on [GitHub](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/FAQ/RGB%20Value%20for%20Cell%20Color/.NET/RGB%20Value%20for%20Cell%20Color).

## See also

- [How to set the background color for an Excel chart](how-to-set-the-background-color-for-Excel-chart.md)
- [How to apply font styles to the entire worksheet](how-to-apply-font-styles-to-the-entire-worksheet.md)
- [How to get the RGB color value for the applied cell color](how-to-get-the-rgb-color-value-for-the-applied-cell-color.md)
