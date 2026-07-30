---
title: How to remove AutoFilter from an Excel worksheet | Syncfusion
description: This page shows how to remove AutoFilter from an Excel worksheet using the Syncfusion .NET Excel Library (XlsIO).
platform: document-processing
control: XlsIO
documentation: UG
---

# How to remove AutoFilter from an Excel worksheet?

AutoFilter lets users display only the rows that meet specified criteria in an Excel worksheet. You can remove the AutoFilter from a specified worksheet by setting the [FilterRange](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IAutoFilters.html#Syncfusion_XlsIO_IAutoFilters_FilterRange) property of the [IAutoFilters](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IAutoFilters.html) interface to null. Setting the range to null clears the filter range without deleting the filter object, and the worksheet no longer has an AutoFilter applied when the file is reopened.

## Prerequisites

Before running the code example, make sure the following prerequisites are met:

- Install the **Syncfusion.XlsIO.WinForms** NuGet package (for Windows) or the **Syncfusion.XlsIO.Net.Core** package (for .NET Core / .NET 6+ cross-platform targets).
- Add the required `using` directive: `using Syncfusion.XlsIO;`.
- The input workbook (`InputTemplate.xlsx`) must already contain an AutoFilter applied to a range on the target worksheet.
- The output file is written to the application's current working directory by `SaveAs`.

## Code example

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
