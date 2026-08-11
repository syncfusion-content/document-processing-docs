---
title: How to detect if a column is hidden using XlsIO | Syncfusion
description: Shows how to detect whether a column is hidden in an Excel and also shows how to check IsHidden property in a worksheet using Syncfusion XlsIO.
platform: document-processing
control: XlsIO
documentation: UG
---

# How to detect whether a column is hidden in an Excel file using XlsIO?

You can determine whether a column is hidden by inspecting the worksheet's column information. The example below uses `WorksheetImpl` to access the `ColumnInformation` collection and checks the `IsHidden` property for the requested column index.

Note: column indices in `ColumnInformation` are 1-based.

The following examples show the pattern in C# (cross-platform and Windows-specific) and VB.NET.

## Prerequisites

Before running the code example, make sure the following prerequisites are met:

- Install the **Syncfusion.XlsIO.WinForms** NuGet package (for Windows) or the **Syncfusion.XlsIO.Net.Core** package (for .NET Core / .NET 6+ cross-platform targets).
- Add the required `using` directives at the top of the file:
  - `using System;` - for `Console.WriteLine`.
  - `using System.IO;` - for `Path.GetFullPath` (cross-platform tab).
  - `using Syncfusion.XlsIO;` - for the XlsIO types and `IApplication`, `IWorkbook`.
  - `using Syncfusion.XlsIO.Implementation;` - for the internal `WorksheetImpl` type. This namespace is part of the XlsIO assembly but is not part of the public API. Using internal types is a code-smell and may break in future releases.
- The VB.NET equivalents: `Imports System`, `Imports System.IO`, `Imports Syncfusion.XlsIO`, `Imports Syncfusion.XlsIO.Implementation`.
- The example creates a new workbook with `Workbooks.Create(1)`, so no input file is required.
- The output folder (`Output`) must exist or be created by the application before calling `SaveAs`. `SaveAs` does not create missing parent directories on its own.

{% tabs %}  
{% highlight c# tabtitle="C# [Cross-platform]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;
    IWorkbook workbook = application.Workbooks.Create(1);

    // Use the concrete WorksheetImpl when you need access to implementation-specific members
    WorksheetImpl sheet = workbook.Worksheets[0] as WorksheetImpl;

    // Hide column 1
    sheet.ShowColumn(1, false);

    // Detect whether column 1 is hidden
    bool hidden = sheet.ColumnInformation[1] != null && sheet.ColumnInformation[1].IsHidden;

    Console.WriteLine($"Column 1 hidden: {hidden}");

    workbook.SaveAs(Path.GetFullPath(@"Output/Output.xlsx"));
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;
    IWorkbook workbook = application.Workbooks.Create(1);

    WorksheetImpl sheet = workbook.Worksheets[0] as WorksheetImpl;

    // Hide column 1
    sheet.ShowColumn(1, false);

    // Detect whether column 1 is hidden
    bool hidden = sheet.ColumnInformation[1] != null && sheet.ColumnInformation[1].IsHidden;

    Console.WriteLine($"Column 1 hidden: {hidden}");

    workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As New ExcelEngine()
    Dim application As IApplication = excelEngine.Excel
    application.DefaultVersion = ExcelVersion.Xlsx
    Dim workbook As IWorkbook = application.Workbooks.Create(1)

    ' Use the concrete WorksheetImpl when you need access to implementation-specific members
    Dim sheet As WorksheetImpl = TryCast(workbook.Worksheets(0), WorksheetImpl)

    ' Hide column 1
    sheet.ShowColumn(1, False)

    ' Detect whether column 1 is hidden
    Dim hidden As Boolean = sheet.ColumnInformation(1) IsNot Nothing AndAlso sheet.ColumnInformation(1).IsHidden

    Console.WriteLine($"Column 1 hidden: {hidden}")

    workbook.SaveAs("Output.xlsx")
End Using
{% endhighlight %}
{% endtabs %}

A complete working example in C# is present on <a href="https://github.com/SyncfusionExamples/XlsIO-Examples/tree/1003194-Hidden-Column/FAQ/Hidden%20Column/.NET/Hidden%20Column">this GitHub page</a>.

## See also

* [Working with Excel Worksheet](https://help.syncfusion.com/document-processing/excel/excel-library/net/working-with-excel-worksheet)
* [Working with Rows and Columns](https://help.syncfusion.com/document-processing/excel/excel-library/net/worksheet-rows-and-columns-manipulation)
