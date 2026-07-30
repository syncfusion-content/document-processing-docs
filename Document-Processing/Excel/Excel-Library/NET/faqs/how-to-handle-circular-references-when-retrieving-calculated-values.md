---
title: Handle circular references when get calculated values | Syncfusion
description: This FAQ explains how to handle circular references in Excel formulas when retrieving calculated values using Syncfusion XlsIO's calculation engine properties.
platform: document-processing
control: XlsIO
documentation: UG
---

# How to handle circular references when retrieving calculated values?

Circular references occur when a formula refers back to one of its own cells, creating a loop that Excel must resolve through iteration. XlsIO provides properties in the [CalcEngine](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.ICalcEngine.html) to control how circular references are handled, including enabling iteration, setting maximum iteration count, and configuring exception handling.

The following code example illustrates how to enable circular reference handling and retrieve calculated values.

## Prerequisites

Before running the code example, make sure the following prerequisites are met:

- Install the **Syncfusion.XlsIO.WinForms** NuGet package (for Windows) or the **Syncfusion.XlsIO.Net.Core** package (for .NET Core / .NET 6+ cross-platform targets).
- Add the required `using` directives at the top of the file:
  - `using System;` - for `Console.WriteLine`.
  - `using System.IO;` - for `Path.GetFullPath` (cross-platform tab).
  - `using System.Linq;` - for `.First()` (used to get the first worksheet).
  - `using Syncfusion.XlsIO;` - for the XlsIO types and `IWorkbook`, `IWorksheet`, `CalcEngine`.
- The VB.NET equivalents: `Imports System`, `Imports System.IO`, `Imports System.Linq`, `Imports Syncfusion.XlsIO`.
- The example expects an input file at `Data/InputTemplate.xlsx` (cross-platform tab) or `InputTemplate.xlsx` (Windows-specific and VB.NET tabs). The input workbook must contain at least one worksheet with formulas that may have circular references. The example reads calculated values from cells `I234` and `J234` on the first worksheet.
- The output folder (`Output`) must exist or be created by the application before calling `SaveAs`. `SaveAs` does not create missing parent directories on its own.
- The `CalcEngine` configuration (`AllowShortCircuitIFs`, `UseFormulaValues`, `ThrowCircularException`, `IterationMaxCount`) is set per-worksheet, but the configuration applies globally to the workbook. The loop iterates all worksheets, but the configuration is effectively the same for all of them.

{% tabs %}  
{% highlight c# tabtitle="C# [Cross-platform]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    // Create a new Excel application instance
    IApplication application = excelEngine.Excel;
    IWorkbook workbook = application.Workbooks.Open(Path.GetFullPath("Data/InputTemplate.xlsx"));

    foreach (IWorksheet worksheetxls in workbook.Worksheets)
    {
        // Enable sheet calculations to compute formula values
        worksheetxls.EnableSheetCalculations();

        // Configure calculation engine for circular reference handling
        worksheetxls.CalcEngine.AllowShortCircuitIFs = true;
        worksheetxls.CalcEngine.UseFormulaValues = true;

        // Enable circular reference handling with exception throwing
        worksheetxls.CalcEngine.ThrowCircularException = true;

        // Set maximum iteration count for resolving circular references
        worksheetxls.CalcEngine.IterationMaxCount = 1000;
    }

    // Access the first worksheet to retrieve calculated values
    IWorksheet worksheet = workbook.Worksheets.First();

    // Display the calculated values from cells I234 and J234
    Console.WriteLine(worksheet["I234"].CalculatedValue);
    Console.WriteLine(worksheet["J234"].CalculatedValue);

    // Save the workbook to the specified output path
    workbook.SaveAs(Path.GetFullPath("Output/Output.xlsx"));
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    // Create a new Excel application instance
    IApplication application = excelEngine.Excel;
    IWorkbook workbook = application.Workbooks.Open("InputTemplate.xlsx");

    foreach (IWorksheet worksheetxls in workbook.Worksheets)
    {
        // Enable sheet calculations to compute formula values
        worksheetxls.EnableSheetCalculations();

        // Configure calculation engine for circular reference handling
        worksheetxls.CalcEngine.AllowShortCircuitIFs = true;
        worksheetxls.CalcEngine.UseFormulaValues = true;

        // Enable circular reference handling with exception throwing
        worksheetxls.CalcEngine.ThrowCircularException = true;

        // Set maximum iteration count for resolving circular references
        worksheetxls.CalcEngine.IterationMaxCount = 1000;
    }

    // Access the first worksheet to retrieve calculated values
    IWorksheet worksheet = workbook.Worksheets.First();

    // Display the calculated values from cells I234 and J234
    Console.WriteLine(worksheet["I234"].CalculatedValue);
    Console.WriteLine(worksheet["J234"].CalculatedValue);

    // Save the workbook to the specified output path
    workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As New ExcelEngine()
    ' Create a new Excel application instance
    Dim application As IApplication = excelEngine.Excel
    Dim workbook As IWorkbook = application.Workbooks.Open("InputTemplate.xlsx")

    For Each worksheetxls As IWorksheet In workbook.Worksheets
        ' Enable sheet calculations to compute formula values
        worksheetxls.EnableSheetCalculations()

        ' Configure calculation engine for circular reference handling
        worksheetxls.CalcEngine.AllowShortCircuitIFs = True
        worksheetxls.CalcEngine.UseFormulaValues = True

        ' Enable circular reference handling with exception throwing
        worksheetxls.CalcEngine.ThrowCircularException = True

        ' Set maximum iteration count for resolving circular references
        worksheetxls.CalcEngine.IterationMaxCount = 1000
    Next

    ' Access the first worksheet to retrieve calculated values
    Dim worksheet As IWorksheet = workbook.Worksheets.First()

    ' Display the calculated values from cells I234 and J234
    Console.WriteLine(worksheet("I234").CalculatedValue)
    Console.WriteLine(worksheet("J234").CalculatedValue)

    ' Save the workbook to the specified output path
    workbook.SaveAs("Output.xlsx")
End Using
{% endhighlight %}
{% endtabs %}

A complete working example in C# is present on <a href="https://github.com/SyncfusionExamples/XlsIO-Examples/tree/1017888-Circular-Reference/FAQ/Circular%20Reference/.NET/Circular%20Reference">this GitHub page</a>.

## See also

* [Circular Reference on GitHub](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/1017888-Circular-Reference/FAQ/Circular%20Reference/.NET/Circular%20Reference)
* [Formulas in Excel](https://help.syncfusion.com/document-processing/excel/excel-library/net/working-with-formulas)
* [How to check if a formula in a cell contains an error value](https://help.syncfusion.com/document-processing/excel/excel-library/net/faqs/how-to-check-if-a-formula-in-a-cell-contains-an-error-value)
