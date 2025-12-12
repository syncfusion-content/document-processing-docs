---
title: Get RGB values of a cell's background color | Syncfusion 
description: Code example to get RGB values of a cell's background color using Syncfusion .NET Excel library (XlsIO). 
platform: document-processing 
control: XlsIO 
documentation: UG
---

# How to get RGB values of a cell's background color?

The following examples show how to get RGB values of a cell's background color in C# (cross-platform and Windows-specific) and VB.NET.

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

A complete working example to get RGB values of a cell's background color is available on <a href="https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/FAQ/RGB%20Value%20for%20Cell%20Color/.NET/RGB%20Value%20for%20Cell%20Color">this GitHub page</a>.