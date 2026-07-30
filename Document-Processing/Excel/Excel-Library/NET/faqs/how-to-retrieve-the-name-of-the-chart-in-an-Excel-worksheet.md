---
title: Retrieve the name of the chart in an Excel worksheet | Syncfusion
description: Learn how to retrieve the name of a chart in an Excel worksheet using the .NET Excel Library with code examples.
platform: document-processing
control: XlsIO
documentation: UG
---

# How to retrieve the name of the chart in an Excel worksheet?

The following code examples demonstrate retrieving the name of the chart in an Excel worksheet using C# (Cross-platform and Windows-specific) and VB.NET.

## Prerequisites

Before running the code example, make sure the following prerequisites are met:

- Install the **Syncfusion.XlsIO.WinForms** NuGet package (for Windows) or the **Syncfusion.XlsIO.Net.Core** package (for .NET Core / .NET 6+ cross-platform targets).
- Add the required `using` directives at the top of the file:
  - `using System;` - for `Console.WriteLine`.
  - `using System.IO;` - for `Path.GetFullPath` (cross-platform tab).
  - `using Syncfusion.XlsIO;` - for the XlsIO types and `Charts`.
- The VB.NET equivalents: `Imports System`, `Imports System.IO`, `Imports Syncfusion.XlsIO`.
- The example expects an input file at `Data/Input.xlsx` (cross-platform tab), `Input.xlsx` (Windows-specific tab), or `InputTemplate.xlsx` (VB.NET tab). The input workbook must contain at least one worksheet with at least one chart. The chart's name will be retrieved and displayed.
- The output folder (`Output`) must exist or be created by the application before calling `SaveAs`. `SaveAs` does not create missing parent directories on its own.

{% tabs %}   
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/FAQ/Chart/.NET/ChartNameInWorksheet/ChartNameInWorksheet/Program.cs,180" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;
    IWorkbook workbook = application.Workbooks.Open(Path.GetFullPath(@"Data/Input.xlsx"));
    IWorksheet worksheet = workbook.Worksheets[0];

    //Get the chart name 
    string chartName = worksheet.Charts[0].Name;
    //Display the chart name 
    Console.WriteLine("The name of the chart is: " + chartName);

    //Saving the workbook
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

    //Get the chart name 
    string chartName = worksheet.Charts[0].Name;
    //Display the chart name 
    Console.WriteLine("The name of the chart is: " + chartName);

    //Saving the workbook
    workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As New ExcelEngine()
    ' Access the IApplication instance
    Dim application As IApplication = excelEngine.Excel

    ' Set the default version
    application.DefaultVersion = ExcelVersion.Xlsx

    ' Open the input workbook
    Dim workbook As IWorkbook = application.Workbooks.Open("InputTemplate.xlsx")

    ' Get the first worksheet
    Dim worksheet As IWorksheet = workbook.Worksheets(0)

    ' Get the chart name
    Dim chartName As String = worksheet.Charts(0).Name

    ' Display the chart name
    Console.WriteLine("The name of the chart is: " & chartName)

    ' Save the workbook to output
    workbook.SaveAs("Output.xlsx")
End Using
{% endhighlight %}
{% endtabs %}       

A complete working example in C# is present on <a href="https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/FAQ/Chart/.NET/ChartNameInWorksheet">this GitHub page</a>.

## See also

* [ChartNameInWorksheet on GitHub](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/FAQ/Chart/.NET/ChartNameInWorksheet)
* [Charts in Excel](https://help.syncfusion.com/document-processing/excel/excel-library/net/working-with-charts)
