---
title: When to Use the SkipAutoFitRow Property | Syncfusion
description: This page explains when to use the SkipAutoFitRow property in the Syncfusion .NET Excel Library (XlsIO).
platform: document-processing
control: XlsIO
documentation: UG
---

# When should you use the SkipAutoFitRow property in XlsIO?

XlsIO invokes `IWorksheet.AutofitRow` when row height appears incorrect while accessing row height. The row height calculated by XlsIO's autofit is not guaranteed to match Microsoft Excel's autofit results for most fonts; it does match Excel's results only for `Calibri` and `Tahoma`.

To avoid differences introduced by XlsIO's autofit behavior (for example, when you need to preserve the original row heights from an existing workbook or rely on Excel's native autofit), set the `SkipAutoFitRow` flag to skip the automatic autofit operation when row height is accessed.

The following code illustrates how to set the property to true.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    
    //Loads an xlsx file
    IWorkbook workbook = application.Workbooks.Open("InputTemplate.xlsx");
    //Set the property 
    application.SkipAutoFitRow = true;

    //Saving the workbook
    workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine engine = new ExcelEngine())
{
    IApplication application = engine.Excel;
    
    //Loads an xlsx file
    IWorkbook workbook = application.Workbooks.Open("InputTemplate.xlsx");
    //Set the property 
    application.SkipAutoFitRow = true;

    //Saving the workbook
    workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using engine As ExcelEngine = New ExcelEngine()
    Dim application As IApplication = engine.Excel
    application.DefaultVersion = ExcelVersion.Xlsx

    'Loads an xlsx file
    Dim workbook As IWorkbook = application.Workbooks.Open("InputTemplate.xlsx")
    'Set the property
    application.SkipAutoFitRow = True

    'Saving the workbook
    workbook.SaveAs("Output.xlsx")
End Using
{% endhighlight %}
{% endtabs %}

When `SkipAutoFitRow` is enabled, XlsIO will not call the autofit routine when reading or accessing row height, preserving the stored height values instead of recalculating them.
