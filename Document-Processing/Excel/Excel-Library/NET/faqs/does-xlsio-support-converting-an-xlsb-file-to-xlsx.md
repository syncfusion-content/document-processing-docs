---
title: Convert XLSB to XLSX using XlsIO | Syncfusion
description: This page explains how to convert an XLSB file to XLSX with the Syncfusion .NET Excel (XlsIO) library. 
platform: document-processing
control: XlsIO
documentation: UG
---

# Does XlsIO support converting an XLSB file to XLSX?

Yes. XlsIO supports converting an XLSB file to XLSX; however, the conversion is limited to cell values and cell styles. 

The example below shows how to convert an XLSB file to an XLSX file.

## Prerequisites

Before running the code example, make sure the following prerequisites are met:

- Install the **Syncfusion.XlsIO.WinForms** NuGet package (for Windows) or the **Syncfusion.XlsIO.Net.Core** package (for .NET Core / .NET 6+ cross-platform targets).
- Add the required `using` directive: `using Syncfusion.XlsIO;` (or `Imports Syncfusion.XlsIO` in VB.NET).
- The example expects an XLSB file named `Sample.xlsb` in the working directory and writes the converted file to `Output.xlsx` in the same directory.
- Confirm that `Output.xlsx` is not open in Excel before running the sample; otherwise `SaveAs` throws an `IOException`.

## Code example

{% tabs %}  
{% highlight c# tabtitle="C# [Cross-platform]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;

    //Open an existing XLSB file
    IWorkbook workbook = application.Workbooks.Open("Sample.xlsb");

    //Save the file as XLSX
    workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;

    //Open an existing XLSB file
    IWorkbook workbook = application.Workbooks.Open("Sample.xlsb");

    //Save the file as XLSX
    workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As New ExcelEngine()
    Dim application As IApplication = excelEngine.Excel
    application.DefaultVersion = ExcelVersion.Xlsx

    ' Open an existing XLSB file
    Dim workbook As IWorkbook = application.Workbooks.Open("Sample.xlsb")

    ' Save the file as XLSX
    workbook.SaveAs("Output.xlsx")
End Using
{% endhighlight %}
{% endtabs %}

## See also

- [How to convert xls document to xlsx format document](how-to-convert-xls-document-to-xlsx-format-document.md)
- [Does XlsIO support converting an empty Excel document to PDF](does-xlsio-support-converting-an-empty-Excel-document-to-PDF.md)
- [How to convert hidden worksheets alone to image](how-to-convert-hidden-worksheets-alone-to-image.md)
