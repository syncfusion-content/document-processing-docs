---
title: How to remove data validation from the specified range | Syncfusion
description: This page shows how to remove data validation from the specified range in Excel using the Syncfusion .NET Excel library (XlsIO).
platform: document-processing
control: XlsIO
documentation: UG
---

# How to remove data validation from the specified range?

You can remove data validation from the specified range using the [Clear](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IRange.html#Syncfusion_XlsIO_IRange_Clear_Syncfusion_XlsIO_ExcelClearOptions_) method with the [ExcelClearOptions](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.ExcelClearOptions.html) of ClearDataValidations option.

The following code example demonstrates how to remove data validation from the specified range.

{% tabs %}  
{% highlight c# tabtitle="C# [Cross-platform]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;
    IWorkbook workbook = application.Workbooks.Open("InputTemplate.xlsx");
    IWorksheet worksheet = workbook.Worksheets[0];

    //Removes data validation from the specified range           
    worksheet.Range["A1:C5"].Clear(ExcelClearOptions.ClearDataValidations);

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

    //Removes data validation from the specified range           
    worksheet.Range["A1:C5"].Clear(ExcelClearOptions.ClearDataValidations);

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

    'Removes data validation from the specified range
    worksheet.Range("A1:C5").Clear(ExcelClearOptions.ClearDataValidations)

    'Saving the workbook
    workbook.SaveAs("Output.xlsx")
End Using

{% endhighlight %}
{% endtabs %}