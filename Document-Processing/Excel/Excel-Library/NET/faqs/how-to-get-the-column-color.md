---
title: How to get the column color | Syncfusion.
description: This page explains how to get the styled column color when column cells have different colors in an Excel document using Syncfusion .NET Excel library (XlsIO).
platform: document-processing
control: XlsIO
documentation: UG
---

# How to get the column color when column cells have different colors?

According to Microsoft Excel behavior, when a column's cells have different fill colors, the column color property returns an empty value. Syncfusion XlsIO mirrors this behavior, as Excel doesn't set a unified column color in such cases. This can lead to issues when trying to retrieve color using column cell style properties.
The following code example illustrates how to get the column color when column cells have different colors in an Excel document.

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