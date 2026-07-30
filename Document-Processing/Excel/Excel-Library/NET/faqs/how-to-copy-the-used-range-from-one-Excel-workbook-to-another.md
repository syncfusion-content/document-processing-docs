---
title: Copy used range in Excel | Syncfusion  
description: Learn how to copy the used range from one Excel workbook to another using the .NET Excel Library.
platform: document-processing
control: XlsIO
documentation: UG
---

# How to copy the used range from one Excel workbook to another?

The [UsedRange](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IWorksheet.html#Syncfusion_XlsIO_IWorksheet_UsedRange) of [IWorksheet](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IWorksheet.html) returns the contiguous range that contains data in a worksheet. By default, Excel also considers cells that have only formatting applied as part of the used range.

The following code examples show how to copy the used range from a source workbook to a destination workbook in C# (cross-platform and Windows-specific) and VB.NET.

## Prerequisites

Before running the code example, make sure the following prerequisites are met:

- Install the **Syncfusion.XlsIO.WinForms** NuGet package (for Windows) or the **Syncfusion.XlsIO.Net.Core** package (for .NET Core / .NET 6+ cross-platform targets).
- Add the required `using` directives at the top of the file:
  - `using System.IO;` - for `Path.GetFullPath` (cross-platform tab).
  - `using Syncfusion.XlsIO;` - for the XlsIO types and `UsedRange`, `CopyTo`.
- The VB.NET equivalents: `Imports System.IO`, `Imports Syncfusion.XlsIO`.
- The example expects two input files: `Data/Source.xlsx` and `Data/Destination.xlsx` (cross-platform tab) or `Source.xlsx` and `Destination.xlsx` (Windows-specific and VB.NET tabs). Both files must exist relative to the application's working directory.
- The destination workbook must contain a worksheet named `Sheet1`. If the source and destination workbooks use a different sheet name, change `"Sheet1"` to match.
- The output folder (`Output`) must exist or be created by the application before calling `SaveAs`. `SaveAs` does not create missing parent directories on its own.

{% tabs %}                                  
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/FAQ/Copy%20Used%20Range/.NET/CopyUsedRange/CopyUsedRange/Program.cs,180" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;
    IWorkbook sourceWorkbook = application.Workbooks.Open(Path.GetFullPath(@"Data/Source.xlsx"));
    IWorkbook destinationWorkbook = application.Workbooks.Open(Path.GetFullPath(@"Data/Destination.xlsx"));

    IWorksheet sourceWorksheet = sourceWorkbook.Worksheets["Sheet1"];
    IWorksheet destinationWorksheet = destinationWorkbook.Worksheets["Sheet1"];

    //Get the actual used range from source sheet
    IRange sourceRange = sourceWorksheet.UsedRange;

    //Copy the entire used range from source sheet to destination sheet
    sourceRange.CopyTo(destinationWorksheet.Range[sourceRange.Row, sourceRange.Column]);

    //Save the destination workbook
    destinationWorkbook.SaveAs(Path.GetFullPath(@"Output/Output.xlsx"));
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %} 
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;
    IWorkbook sourceWorkbook = application.Workbooks.Open("Source.xlsx");
    IWorkbook destinationWorkbook = application.Workbooks.Open("Destination.xlsx");

    IWorksheet sourceWorksheet = sourceWorkbook.Worksheets["Sheet1"];
    IWorksheet destinationWorksheet = destinationWorkbook.Worksheets["Sheet1"];

    //Get the actual used range from source sheet
    IRange sourceRange = sourceWorksheet.UsedRange;

    //Copy the entire used range from source sheet to destination sheet
    sourceRange.CopyTo(destinationWorksheet.Range[sourceRange.Row, sourceRange.Column]);

    //Save the destination workbook
    destinationWorkbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As New ExcelEngine()
    Dim application As IApplication = excelEngine.Excel
    application.DefaultVersion = ExcelVersion.Xlsx
    Dim sourceWorkbook As IWorkbook = application.Workbooks.Open("Source.xlsx")
    Dim destinationWorkbook As IWorkbook = application.Workbooks.Open("Destination.xlsx")

    Dim sourceWorksheet As IWorksheet = sourceWorkbook.Worksheets("Sheet1")
    Dim destinationWorksheet As IWorksheet = destinationWorkbook.Worksheets("Sheet1")

    'Get the actual used range from source sheet
    Dim sourceRange As IRange = sourceWorksheet.UsedRange

    'Copy the entire used range from source sheet to destination sheet
    sourceRange.CopyTo(destinationWorksheet.Range(sourceRange.Row, sourceRange.Column))

    'Save the destination workbook
    destinationWorkbook.SaveAs("Output.xlsx")
End Using
{% endhighlight %}
{% endtabs %}

A complete working example to copy the used range from a source workbook to a destination workbook using C# is present on <a href="https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/FAQ/Copy%20Used%20Range/.NET/CopyUsedRange">this GitHub page</a>.

## See also

* [CopyUsedRange on GitHub](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/FAQ/Copy%20Used%20Range/.NET/CopyUsedRange)
