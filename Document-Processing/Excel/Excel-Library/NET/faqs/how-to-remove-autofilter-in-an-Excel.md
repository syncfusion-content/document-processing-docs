---
title: How to remove autofilter from an Excel worksheet | Syncfusion
description: This page shows how to remove autofilter from an Excel worksheet Syncfusion .NET Excel library (XlsIO).
platform: document-processing
control: XlsIO
documentation: UG
---

# How to remove autofilter from an Excel worksheet?

You can remove the AutoFilter from a specified worksheet by setting the [FilterRange](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IAutoFilters.html#Syncfusion_XlsIO_IAutoFilters_FilterRange) property to null.

The following code example illustrates how to remove the AutoFilter from a worksheet.

{% tabs %}  
{% highlight c# tabtitle="C# [Cross-platform]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;
    IWorkbook workbook = application.Workbooks.Open("InputTemplate.xlsx");
    IWorksheet worksheet = workbook.Worksheets[0];

    //Remove autofilter from worksheet
    IAutoFilters filter = worksheet.AutoFilters;
    filter.FilterRange = null;

    //Saving the workbook 
    workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;
    IWorkbook workbook = application.Workbooks.Open("InputTemplate.xlsx");
    IWorksheet worksheet = workbook.Worksheets[0];

    //Remove autofilter from worksheet
    IAutoFilters filter = worksheet.AutoFilters;
    filter.FilterRange = null;

    //Saving the workbook
    workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As ExcelEngine = New ExcelEngine()
    Dim application As IApplication = excelEngine.Excel
    application.DefaultVersion = ExcelVersion.Xlsx
    Dim workbook As IWorkbook = application.Workbooks.Open("InputTemplate.xlsx")
    Dim worksheet As IWorksheet = workbook.Worksheets(0)

    'Remove autofilter from the worksheet
    Dim filter As IAutoFilters = worksheet.AutoFilters
    filter.FilterRange = Nothing

    'Saving the workbook
    workbook.SaveAs("Output.xlsx")
End Using
{% endhighlight %}
{% endtabs %}
