---
title: Retrieve the first cell in the used range in Excel | Syncfusion
description: Code example to retrieve the first cell in the used range in an Excel worksheet using .NET Excel Library.
platform: document-processing
control: XlsIO
documentation: UG
---

# How to retrieve the first cell in the used range in Excel?

The following code examples demonstrate retrieving the first cell in the used range of an Excel worksheet using C# (Cross-platform and Windows-specific) and VB.NET.

## Prerequisites

Before running the code example, make sure the following prerequisites are met:

- Install the **Syncfusion.XlsIO.WinForms** NuGet package (for Windows) or the **Syncfusion.XlsIO.Net.Core** package (for .NET Core / .NET 6+ cross-platform targets).
- Add the required `using` directives at the top of the file:
  - `using System;` - for `Console.WriteLine`.
  - `using System.IO;` - for `Path.GetFullPath` (cross-platform tab).
  - `using Syncfusion.XlsIO;` - for the XlsIO types and `UsedRange`.
- The VB.NET equivalents: `Imports System`, `Imports System.IO`, `Imports Syncfusion.XlsIO`.
- The example expects an input file at `Data/Input.xlsx` (cross-platform tab) or `Input.xlsx` (Windows-specific and VB.NET tabs). The input workbook must contain at least one worksheet with at least one cell that has data or formatting (so the used range is not empty).
- The output folder (`Output`) must exist or be created by the application before calling `SaveAs`. `SaveAs` does not create missing parent directories on its own.

{% tabs %}   
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/FAQ/First%20used%20cell%20in%20used%20range/.NET/FirstUsedCellInUsedRange/FirstUsedCellInUsedRange/Program.cs,180" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;
    IWorkbook workbook = application.Workbooks.Open(Path.GetFullPath(@"Data/Input.xlsx"));
    IWorksheet worksheet = workbook.Worksheets[0];

    //Get the used range of the worksheet
    IRange usedRange = worksheet.UsedRange;

    //Get the first cell from the used range
    IRange firstCell = worksheet.Range[usedRange.Row, usedRange.Column];

    //Get the address of the first cell
    string firstCellAddress = firstCell.AddressLocal;

    //Display the address of the first cell
    Console.WriteLine("The address of the first used cell in used range is: " + firstCellAddress);

    //Save the workbook
    workbook.SaveAs(Path.GetFullPath(@"Output/Output.xlsx"));
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %} 
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;
    IWorkbook workbook = application.Workbooks.Open("Input.xlsx");
    IWorksheet worksheet = workbook.Worksheets[0];

    //Get the used range of the worksheet
    IRange usedRange = worksheet.UsedRange;

    //Get the first cell from the used range
    IRange firstCell = worksheet.Range[usedRange.Row, usedRange.Column];

    //Get the address of the first cell
    string firstCellAddress = firstCell.AddressLocal;

    //Display the address of the first cell
    Console.WriteLine("The address of the first used cell in used range is: " + firstCellAddress);

    //Save the workbook
    workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As New ExcelEngine()
    Dim application As IApplication = excelEngine.Excel
    application.DefaultVersion = ExcelVersion.Xlsx
    Dim workbook As IWorkbook = application.Workbooks.Open("Input.xlsx")
    Dim worksheet As IWorksheet = workbook.Worksheets(0)

    'Get the used range of the worksheet
    Dim usedRange As IRange = worksheet.UsedRange

    'Get the first cell from the used range
    Dim firstCell As IRange = worksheet.Range(usedRange.Row, usedRange.Column)

    'Get the address of the first cell
    Dim firstCellAddress As String = firstCell.AddressLocal

    'Display the address of the first cell
    Console.WriteLine("The address of the first used cell in used range is: " & firstCellAddress)

    'Save the workbook
    workbook.SaveAs("Output.xlsx")
End Using
{% endhighlight %}
{% endtabs %}       

A complete working example in C# is present on <a href="https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/FAQ/First%20used%20cell%20in%20used%20range/.NET/FirstUsedCellInUsedRange">this GitHub page</a>.

## See also

* [FirstUsedCellInUsedRange on GitHub](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/FAQ/First%20used%20cell%20in%20used%20range/.NET/FirstUsedCellInUsedRange)
* [How to copy the used range from one Excel workbook to another](https://help.syncfusion.com/document-processing/excel/excel-library/net/faqs/how-to-copy-the-used-range-from-one-Excel-workbook-to-another)
* [Working with Ranges](https://help.syncfusion.com/document-processing/excel/excel-library/net/cells-manipulation/list-of-apis-under-irange)
