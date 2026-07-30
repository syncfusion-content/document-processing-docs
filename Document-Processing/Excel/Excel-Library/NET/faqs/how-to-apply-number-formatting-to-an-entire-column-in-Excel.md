---
title: Apply number formatting to an entire column in Excel | Syncfusion
description: Learn how to apply number formatting to an entire column in an Excel worksheet using the .NET Excel Library.
platform: document-processing
control: XlsIO
documentation: UG
---

# How to apply number formatting to an entire column in Excel?

The following code examples demonstrate applying number formatting to an entire column in Excel using C# (Cross-platform and Windows-specific) and VB.NET.

## Prerequisites

Before running the code example, make sure the following prerequisites are met:

- Install the **Syncfusion.XlsIO.WinForms** NuGet package (for Windows) or the **Syncfusion.XlsIO.Net.Core** package (for .NET Core / .NET 6+ cross-platform targets).
- Add the required `using` directives at the top of the file:
  - `using System.IO;` - for `Path.GetFullPath` (cross-platform tab).
  - `using Syncfusion.XlsIO;` - for the XlsIO types and `IStyle`, `Columns`, `SetDefaultColumnStyle`.
- The VB.NET equivalents: `Imports System.IO`, `Imports Syncfusion.XlsIO`.
- The example expects an input file at `Data/Input.xlsx` (cross-platform tab) or `Input.xlsx` (Windows-specific and VB.NET tabs). The input workbook must contain at least one worksheet with data in the columns being formatted.
- The output folder (`Output`) must exist or be created by the application before calling `SaveAs`. `SaveAs` does not create missing parent directories on its own.

{% tabs %}   
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/FAQ/Column%20Number%20Format/.NET/ColumnNumberFormat/ColumnNumberFormat/Program.cs,180" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;
    IWorkbook workbook = application.Workbooks.Open(Path.GetFullPath(@"Data/Input.xlsx"));
    IWorksheet sheet = workbook.Worksheets[0];

    //Case 1: Apply direct number format (zero-based index)
    sheet.Columns[0].NumberFormat = "yyyy-mm-dd"; //Column A
    sheet.Columns[3].NumberFormat = "$#,##0.00"; //Column D
    sheet.Columns[4].NumberFormat = "0.00%"; //Column E

    //Case 2: Apply style-based format (one-based index)
    IStyle style = workbook.Styles.Add("DecimalStyle");
    style.NumberFormat = "0.00";
    sheet.SetDefaultColumnStyle(3, style); //Column C 

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
    IWorksheet sheet = workbook.Worksheets[0];

    //Case 1: Apply direct number format (zero-based index)
    sheet.Columns[0].NumberFormat = "yyyy-mm-dd"; //Column A
    sheet.Columns[3].NumberFormat = "$#,##0.00"; //Column D
    sheet.Columns[4].NumberFormat = "0.00%"; //Column E

    //Case 2: Apply style-based format (one-based index)
    IStyle style = workbook.Styles.Add("DecimalStyle");
    style.NumberFormat = "0.00";
    sheet.SetDefaultColumnStyle(3, style); //Column C 

    //Saving the workbook
    workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As New ExcelEngine()
    Dim application As IApplication = excelEngine.Excel
    application.DefaultVersion = ExcelVersion.Xlsx
    Dim workbook As IWorkbook = application.Workbooks.Open("Input.xlsx")
    Dim sheet As IWorksheet = workbook.Worksheets(0)

    'Case 1: Apply direct number format (zero-based index)
    sheet.Columns(0).NumberFormat = "yyyy-mm-dd" 'Column A
    sheet.Columns(3).NumberFormat = "$#,##0.00" 'Column D
    sheet.Columns(4).NumberFormat = "0.00%" 'Column E

    'Case 2: Apply style-based format (one-based index)
    Dim style As IStyle = workbook.Styles.Add("DecimalStyle")
    style.NumberFormat = "0.00"
    sheet.SetDefaultColumnStyle(3, style) 'Column C

    'Save the workbook
    workbook.SaveAs("Output.xlsx")
End Using
{% endhighlight %}
{% endtabs %}       
 
A complete working example that shows how to apply number formatting to an entire column in Excel using C# is present on <a href="https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/FAQ/Column%20Number%20Format/.NET/ColumnNumberFormat">this GitHub page</a>.

## See also

* [ColumnNumberFormat on GitHub](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/FAQ/Column%20Number%20Format/.NET/ColumnNumberFormat)
* [Number Formatting in Excel](https://help.syncfusion.com/document-processing/excel/excel-library/net/working-with-cell-or-range-formatting#apply-number-formats)
* [How to apply number formatting to a specific column when importing data from collection objects](https://help.syncfusion.com/document-processing/excel/excel-library/net/faqs/how-to-apply-the-formatting-for-a-particular-column-while-importing-data-from-collection-objects)
* [Working with Styles](https://help.syncfusion.com/document-processing/excel/excel-library/net/working-with-cell-or-range-formatting#create-a-style)

