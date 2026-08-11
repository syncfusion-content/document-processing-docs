---
title: How to get the column color | Syncfusion.
description: This page explains how to get the styled column color when column cells have different colors in an Excel document using .NET Excel Library.
platform: document-processing
control: XlsIO
documentation: UG
---

# How to get the column color when column cells have different colors?

According to Microsoft Excel behavior, when a column's cells have different fill colors, the column color property returns an empty value. Syncfusion XlsIO mirrors this behavior, as Excel doesn't set a unified column color in such cases. This can lead to issues when trying to retrieve color using column cell style properties.
The following code example illustrates how to get the column color when column cells have different colors in an Excel document.

## Prerequisites

Before running the code example, make sure the following prerequisites are met:

- Install the **Syncfusion.XlsIO.WinForms** NuGet package (for Windows) or the **Syncfusion.XlsIO.Net.Core** package (for .NET Core / .NET 6+ cross-platform targets).
- Add the required `using` directives at the top of the file:
  - `using System.Drawing;` — for the `Color` type (or `using Syncfusion.Drawing;` for cross-platform targets).
  - `using Syncfusion.XlsIO;` — for the XlsIO types and `ExcelOpenType`.
  - `using Syncfusion.XlsIO.Implementation;` — for the internal `ExtendedFormatImpl`, `WorkbookImpl`, and `RangeImpl` types. This namespace is part of the XlsIO assembly but is not part of the public API. Using internal types is a code-smell and may break in future releases.
- The VB.NET equivalents: `Imports System.Drawing`, `Imports Syncfusion.XlsIO`, `Imports Syncfusion.XlsIO.Implementation`.
- The example expects an input file named `Column styles.xlsx` in the application's working directory. The file must contain a worksheet where cell `A1` has a fill color set. The file is opened with `ExcelOpenType.Automatic`, which lets XlsIO detect the file format.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;

    IWorkbook workbook = application.Workbooks.Open("Column styles.xlsx", ExcelOpenType.Automatic);

    IWorksheet worksheet = workbook.Worksheets[0];

    ExtendedFormatImpl format = (workbook as WorkbookImpl).InnerExtFormats[(worksheet["A1"] as RangeImpl).ExtendedFormatIndex];
    Color color = format.Color;
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;

    IWorkbook workbook = application.Workbooks.Open("Column styles.xlsx", ExcelOpenType.Automatic);

    IWorksheet worksheet = workbook.Worksheets[0];

    ExtendedFormatImpl format = (workbook as WorkbookImpl).InnerExtFormats[(worksheet["A1"] as RangeImpl).ExtendedFormatIndex];
    Color color = format.Color;
}  
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As New ExcelEngine()
    Dim application As IApplication = excelEngine.Excel
    application.DefaultVersion = ExcelVersion.Xlsx

    Dim workbook As IWorkbook = application.Workbooks.Open("Column styles.xlsx", ExcelOpenType.Automatic)
    Dim worksheet As IWorksheet = workbook.Worksheets(0)

    Dim format As ExtendedFormatImpl = DirectCast(workbook, WorkbookImpl).InnerExtFormats(DirectCast(worksheet("A1"), RangeImpl).ExtendedFormatIndex)
    Dim color As Color = format.Color

End Using
{% endhighlight %}
{% endtabs %}

## See also

* [Cell Styles in Excel](https://help.syncfusion.com/document-processing/excel/excel-library/net/working-with-cell-or-range-formatting#create-a-style)