---
title: How to convert inches to points in Syncfusion XlsIO? | Syncfusion
description: Shows how to convert inches to points using `IApplication.InchesToPoints` in Syncfusion XlsIO. Useful for precise sizing of cells, shapes, and page layouts.
platform: document-processing
control: XlsIO
documentation: UG
---

# How to convert inches to points in Syncfusion XlsIO?

Converting measurements between units is common when laying out Excel content programmatically. Syncfusion XlsIO exposes an `InchesToPoints` helper on the `IApplication` instance that converts a measurement in inches to points.

The following code example illustrates the conversion.

## Prerequisites

Before running the code example, make sure the following prerequisites are met:

- Install the **Syncfusion.XlsIO.WinForms** NuGet package (for Windows) or the **Syncfusion.XlsIO.Net.Core** package (for .NET Core / .NET 6+ cross-platform targets).
- Add the required `using` directives at the top of the file:
  - `using System;` - for `Console.WriteLine`.
  - `using Syncfusion.XlsIO;` - for the XlsIO types and `IApplication`, `InchesToPoints`.
- The VB.NET equivalents: `Imports System`, `Imports Syncfusion.XlsIO`.
- The example does not require an input file or a workbook. The conversion is performed on the `IApplication` instance directly.
- The conversion factor is **1 inch = 72 points** (the standard typographic conversion). XlsIO's `InchesToPoints` uses this factor.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
// Create an instance of ExcelEngine
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;

    // Converts inches to points
    double inches = 4.5;
    double points = application.InchesToPoints(inches);
    Console.WriteLine($"{inches} inches is equal to {points} points.");
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
// Create an instance of ExcelEngine
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;

    // Converts inches to points
    double inches = 4.5;
    double points = application.InchesToPoints(inches);
    Console.WriteLine($"{inches} inches is equal to {points} points.");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As New ExcelEngine()
    Dim application As IApplication = excelEngine.Excel

    ' Converts inches to points
    Dim inches As Double = 4.5
    Dim points = application.InchesToPoints(inches)
    Console.WriteLine($"{inches} inches is equal to {points} points.")
End Using
{% endhighlight %}
{% endtabs %}

A complete working example in C# is present on <a href="https://github.com/SyncfusionExamples/XlsIO-Examples/tree/996021-Inches-To-Points/FAQ/Inches%20To%20Points/.NET/Inches%20To%20Points">this GitHub page</a>.

## See also

* [Page Setup in Excel](https://help.syncfusion.com/document-processing/excel/excel-library/net/worksheet/page-setup-options)
* [How to set the print area in an Excel worksheet](https://help.syncfusion.com/document-processing/excel/excel-library/net/worksheet/page-setup-options#print-area)