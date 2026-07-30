---
title: Avoid loading unused worksheets when opening Excel | Syncfusion
description: Code example to avoid processing unnecessary worksheets when opening an Excel document using .NET Excel Library.
platform: document-processing
control: XlsIO
documentation: UG
---
# How to avoid processing unnecessary worksheets using C#?
XlsIO provides support to avoid processing unnecessary worksheets when opening an Excel. The following code snippet illustrates this.

## Prerequisites

Before running the code example, make sure the following prerequisites are met:

- Install the **Syncfusion.XlsIO.WinForms** NuGet package (for Windows) or the **Syncfusion.XlsIO.Net.Core** package (for .NET Core / .NET 6+ cross-platform targets).
- Add the required `using` directive: `using Syncfusion.XlsIO;` (or `Imports Syncfusion.XlsIO` in VB.NET).
- The example expects `Input.xlsx` in the application's working directory and writes `Output.xlsx` to the same directory.
- The input workbook must contain at least one worksheet; otherwise `workbook.Worksheets[0]` throws an `IndexOutOfRangeException`.

## Code example
{% tabs %} 
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/FAQ/Worksheet/.NET/Parse%20Worksheets%20On%20Demand/Parse%20Worksheets%20On%20Demand/Program.cs,180" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;
    IWorkbook workbook = application.Workbooks.Open("Input.xlsx",ExcelOpenType.Automatic, ExcelParseOptions.ParseWorksheetsOnDemand);

    // Access the first worksheet (triggers parsing)
    IWorksheet worksheet = workbook.Worksheets[0];

    // Process your data
    string value = worksheet.Range["A1"].Text;

    // Save to file system
    workbook.SaveAs("Output.xlsx");
    workbook.Close();
    excelEngine.Dispose();
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %} 
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;
    IWorkbook workbook = application.Workbooks.Open("Input.xlsx",ExcelOpenType.Automatic,ExcelParseOptions.ParseWorksheetsOnDemand);

    // Access the first worksheet (triggers parsing)
    IWorksheet worksheet = workbook.Worksheets[0];

    // Process your data
    string value = worksheet.Range["A1"].Text;
    workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
    Using excelEngine As ExcelEngine = New ExcelEngine()
        Dim application As IApplication = excelEngine.Excel
        application.DefaultVersion = ExcelVersion.Xlsx
        Dim workbook As IWorkbook = application.Workbooks.Open("Input.xlsx", ExcelParseOptions.ParseWorksheetsOnDemand)

        ' Access the first worksheet (triggers parsing)
        Dim worksheet As IWorksheet = workbook.Worksheets(0)

        ' Process your data...
        Dim value As String = worksheet.Range("A1").Text

        workbook.SaveAs("Output.xlsx")
    End Using
{% endhighlight %}
{% endtabs %}


## See also

- [How to check if a worksheet is empty in Excel](how-to-check-if-a-worksheet-is-empty-in-excel.md)
- [How to get the list of worksheet names in an Excel workbook](how-to-get-the-list-of-worksheet-names-in-an-Excel-workbook.md)
- [How to retrieve the last row of a worksheet in Excel](how-to-retrieve-the-last-row-of-a-worksheet-in-excel.md)   
