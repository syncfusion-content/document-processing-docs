---
title: How to get the RGB color value of an applied cell color? | XlsIO | Syncfusion
description: Explains how to read the resolved RGB value of a cell's fill color in XlsIO using CellStyle.Color, with a C# and VB.NET example.
platform: document-processing
control: XlsIO
documentation: UG
---

# How to get the RGB color value of an applied cell color?

Syncfusion<sup>&reg;</sup> XlsIO exposes two color APIs on a cell's [`IStyle`](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IStyle.html):

## Prerequisites

Before running the code example, make sure the following are in place:

* Install the [Syncfusion.XlsIO.Net.Core](https://www.nuget.org/packages/Syncfusion.XlsIO.Net.Core) NuGet package (or a platform-specific package such as `Syncfusion.XlsIO.WinForms` / `Syncfusion.XlsIO.WPF`).
* Register a valid Syncfusion license at application startup:

```csharp
Syncfusion.Licensing.SyncfusionLicenseProvider.RegisterLicense("YOUR_LICENSE_KEY");
```

* The example creates a fresh workbook and applies an explicit RGB color, so no input file is required.
* Ensure the working directory is writable; the example writes `Output.xlsx`.

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

## See Also

* [How to apply a background color to a cell in XlsIO?](https://help.syncfusion.com/document-processing/excel/excel-library/net/faqs/how-to-apply-cell-background-color)
* [How to apply a theme color to a cell in XlsIO?](https://help.syncfusion.com/document-processing/excel/excel-library/net/faqs/how-to-apply-theme-color)
* [IStyle API reference](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IStyle.html)
* [ExcelKnownColors enum reference](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.ExcelKnownColors.html)
