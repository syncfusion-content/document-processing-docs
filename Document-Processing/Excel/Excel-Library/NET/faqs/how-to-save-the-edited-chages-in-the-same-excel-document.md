---
title: How to save the edited changes in the same Excel | Syncfusion.
description: This page explains how to save the edited changes in the same Excel document using Syncfusion .NET Excel library (XlsIO).
platform: document-processing
control: XlsIO
documentation: UG
---

# How to save the edited changes in the same Excel document?

The [Save](https://help.syncfusion.com/cr/file-formats/Syncfusion.XlsIO.IWorkbook.html#Syncfusion_XlsIO_IWorkbook_Save) method is only supported on the framework platform. 

The following code example illustrates how to save the edited changes in the same Excel document.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;

    //File path
    string filepath = @"../../../Data/InputTemplate.xlsx";

    //Load an Excel document
    IWorkbook workbook = application.Workbooks.Open(filepath);
    IWorksheet worksheet = workbook.Worksheets[0];

    //Set text in the cell
    worksheet["B1"].Text = "Text";

    //Save the workbook to the same file
    workbook.SaveAs(filepath);
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;

    //File path
    string filepath = @"../../Data/InputTemplate.xlsx";

    //Load an Excel document
    IWorkbook workbook = application.Workbooks.Open(filepath);
    IWorksheet worksheet = workbook.Worksheets[0];

    //Set text in the cell
    worksheet["B1"].Text = "Text"; 

    //Save the workbook to the same file
    workbook.Save();
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As New ExcelEngine()
    Dim application As IApplication = excelEngine.Excel
    application.DefaultVersion = ExcelVersion.Xlsx

    'File path
    Dim filepath As String = "../../Data/InputTemplate.xlsx"

    'Load an Excel document
    Dim workbook As IWorkbook = application.Workbooks.Open(filepath)
    Dim worksheet As IWorksheet = workbook.Worksheets(0)

    'Set text in the cell
    worksheet("B1").Text = "Text"

    'Save the workbook to the same file
    workbook.Save()
End Using
{% endhighlight %}
{% endtabs %}