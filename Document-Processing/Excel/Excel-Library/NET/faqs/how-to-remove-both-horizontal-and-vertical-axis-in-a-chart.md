---
title: Remove horizontal and vertical axes in a chart | Syncfusion
description: This page explains how to remove the horizontal and vertical axis in a chart using syncfusion XlsIO.
platform: document-processing
control: XlsIO
documentation: UG
---

# How to remove both horizontal and vertical axis in a chart?

Both the category (horizontal) and value (vertical) axes can be removed from a chart by setting the `PrimaryCategoryAxis.Visible` and `PrimaryValueAxis.Visible` properties to `false`.

The following examples show the cross-platform C#, Windows-specific C#, and VB.NET variants.

## Prerequisites

Before running the code example, make sure the following prerequisites are met:

- Install the **Syncfusion.XlsIO.WinForms** NuGet package (for Windows) or the **Syncfusion.XlsIO.Net.Core** package (for .NET Core / .NET 6+ cross-platform targets).
- Add the required `using` directives at the top of the file:
  - `using System.IO;` — for `Path.GetFullPath` (cross-platform tab).
  - `using Syncfusion.XlsIO;` — for the XlsIO types and `IApplication`, `IWorkbook`, `IWorksheet`, `IChart`.
- The VB.NET equivalents: `Imports System.IO`, `Imports Syncfusion.XlsIO`.
- The example expects an input file at `Data\InputTemplate.xlsx` (cross-platform tab) or `InputTemplate.xlsx` (Windows-specific and VB.NET tabs). The input workbook must contain at least one worksheet with at least one chart.
- The output folder (`Output`) must exist or be created by the application before calling `SaveAs`. `SaveAs` does not create missing parent directories on its own.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
// Create an instance of ExcelEngine
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;

    // Open workbook and get worksheet and chart
    IWorkbook workbook = application.Workbooks.Open(Path.GetFullPath(@"Data\InputTemplate.xlsx"));
    IWorksheet worksheet = workbook.Worksheets[0];
    IChartShape chart = worksheet.Charts[0];

    // Removing legend
    chart.HasLegend = false;

    // Remove horizontal (category) axis
    chart.PrimaryCategoryAxis.Visible = false;

    // Remove vertical (value) axis
    chart.PrimaryValueAxis.Visible = false;

    // Save the workbook to a file
    workbook.SaveAs(Path.GetFullPath(@"Output\Output.xlsx"));
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;

    IWorkbook workbook = application.Workbooks.Open("InputTemplate.xlsx");
    IWorksheet worksheet = workbook.Worksheets[0];
    IChartShape chart = worksheet.Charts[0];

    // Removing legend
    chart.HasLegend = false;

    // Removing CategoryAxis
    chart.PrimaryCategoryAxis.Visible = false;

    // Removing ValueAxis
    chart.PrimaryValueAxis.Visible = false;

    workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As New ExcelEngine()
    Dim application As IApplication = excelEngine.Excel
    application.DefaultVersion = ExcelVersion.Xlsx

    Dim workbook As IWorkbook = application.Workbooks.Open("InputTemplate.xlsx")
    Dim worksheet As IWorksheet = workbook.Worksheets(0)
    Dim chart As IChartShape = worksheet.Charts(0)

    ' Removing legend
    chart.HasLegend = False

    ' Removing CategoryAxis (horizontal)
    chart.PrimaryCategoryAxis.Visible = False

    ' Removing ValueAxis (vertical)
    chart.PrimaryValueAxis.Visible = False

    workbook.SaveAs("Output.xlsx")
End Using
{% endhighlight %}
{% endtabs %}

A complete working example in C# is present on <a href="https://github.com/SyncfusionExamples/XlsIO-Examples/tree/1008514-ChartAxis/FAQ/Chart/.NET/Remove%20Axis">this GitHub page</a>.

## See also

* [Remove Axis on GitHub](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/1008514-ChartAxis/FAQ/Chart/.NET/Remove%20Axis)
* [Charts in Excel](https://help.syncfusion.com/document-processing/excel/excel-library/net/working-with-charts)
