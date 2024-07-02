---
title: How to get the RGB color value for the applied cell color |Syncfusion.
description: This page explains how to get the RGB color value for the applied cell color in an Excel document using Syncfusion .NET Excel library (XlsIO).
platform: document-processing
control: XlsIO
documentation: UG
---

# How to get the RGB color value for the applied cell color?

The following code example illustrates how to get the RGB color value for the applied cell color in an Excel document.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;

    //Create a workbook
    IWorkbook workbook = application.Workbooks.Create(1);
    IWorksheet worksheet = workbook.Worksheets[0];

    //Apply cell background color
    worksheet.Range["A1"].CellStyle.ColorIndex = ExcelKnownColors.Custom50;

    //Get the RGB values of the cell color
    Color color = worksheet.Range["A1"].CellStyle.Color;
    byte red = color.R;
    byte green = color.G;
    byte blue = color.B;
    Console.WriteLine($"Red: {red}, Green: {green}, Blue: {blue}");
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;

    //Create a workbook
    IWorkbook workbook = application.Workbooks.Create(1);
    IWorksheet worksheet = workbook.Worksheets[0];

    //Apply cell background color
    worksheet.Range["A1"].CellStyle.ColorIndex = ExcelKnownColors.Custom50;

    //Get the RGB values of the cell color
    Color color = worksheet.Range["A1"].CellStyle.Color;
    byte red = color.R;
    byte green = color.G;
    byte blue = color.B;
    Console.WriteLine($"Red: {red}, Green: {green}, Blue: {blue}");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As New ExcelEngine()
    Dim application As IApplication = excelEngine.Excel
    application.DefaultVersion = ExcelVersion.Xlsx

    'Create a workbook
    Dim workbook As IWorkbook = application.Workbooks.Create(1)
    Dim worksheet As IWorksheet = workbook.Worksheets(0)

    'Apply cell background color
    worksheet.Range("A1").CellStyle.ColorIndex = ExcelKnownColors.Custom50

    'Get the RGB values of the cell color
    Dim color As Color = worksheet.Range("A1").CellStyle.Color
    Dim red As Byte = color.R
    Dim green As Byte = color.G
    Dim blue As Byte = color.B
    Console.WriteLine($"Red: {red}, Green: {green}, Blue: {blue}")
End Using
{% endhighlight %}
{% endtabs %}