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