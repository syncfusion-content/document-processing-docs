---
title: How to avoid UnauthorizedAccessException using xlsio? | Syncfusion
description: This page explains how to overcome UnauthorizedAccessException when saving hidden Excel files programmatically using Syncfusion XlsIO and FileAttributes.
platform: document-processing
control: XlsIO
documentation: UG
---

# How to avoid UnauthorizedAccessException using xlsio?

When saving an Excel file that has the hidden attribute set, an `UnauthorizedAccessException` may occur because the file is protected by the operating system's file attributes. To overcome this exception, you can temporarily change the hidden state of the file to normal, perform the save operation, and then restore the hidden attribute back using the `FileAttributes` enumeration.

The following code example demonstrates how to toggle the hidden file attribute before opening and after saving the workbook.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    //Set the default version as Excel 2016
    excelEngine.Excel.DefaultVersion = ExcelVersion.Excel2016;

    File.SetAttributes(Path.GetFullPath("Data/InputTemplate.xlsm"), FileAttributes.Normal);

    //Open a workbook
    IWorkbook workbook = excelEngine.Excel.Workbooks.Open(Path.GetFullPath("Data/InputTemplate.xlsm"));

    IWorksheet worksheet = workbook.Worksheets[0];

    worksheet.Range["A2"].Text = "Hello, World!";

    File.SetAttributes(Path.GetFullPath("Data/InputTemplate.xlsm"), FileAttributes.Hidden);

    //Save the workbook to disk in xlsx format
    workbook.SaveAs(Path.GetFullPath("Output/Output.xlsm"));
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    //Set the default version as Excel 2016
    excelEngine.Excel.DefaultVersion = ExcelVersion.Excel2016;

    File.SetAttributes("InputTemplate.xlsm", FileAttributes.Normal);

    //Open a workbook
    IWorkbook workbook = excelEngine.Excel.Workbooks.Open("InputTemplate.xlsm");

    IWorksheet worksheet = workbook.Worksheets[0];

    worksheet.Range["A2"].Text = "Hello, World!";

    File.SetAttributes("InputTemplate.xlsm", FileAttributes.Hidden);

    //Save the workbook to disk in xlsx format
    workbook.SaveAs("Output.xlsm");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As New ExcelEngine()
    'Set the default version as Excel 2016
    excelEngine.Excel.DefaultVersion = ExcelVersion.Excel2016

    File.SetAttributes("InputTemplate.xlsm", FileAttributes.Normal)

    'Open a workbook
    Dim workbook As IWorkbook = excelEngine.Excel.Workbooks.Open("InputTemplate.xlsm")

    Dim worksheet As IWorksheet = workbook.Worksheets(0)

    worksheet.Range("A2").Text = "Hello, World!"

    File.SetAttributes("InputTemplate.xlsm", FileAttributes.Hidden)

    'Save the workbook to disk in xlsx format
    workbook.SaveAs("Output.xlsm")
End Using
{% endhighlight %}
{% endtabs %}

A complete working example in C# is present on <a href="https://github.com/SyncfusionExamples/XlsIO-Examples/tree/995570-Unauthorize-Exception/FAQ/Unathorize_Exception/.NET/Unauthorize_Exception">this GitHub page</a>.
## See Also

* [How to overcome StackOverflow exception with IWorksheet Calculate()?](https://help.syncfusion.com/document-processing/excel/excel-library/net/faqs/how-to-overcome-stackoverflow-exception-with-iworksheet-calculate)
* [How to avoid exception when adding worksheets with same name?](https://help.syncfusion.com/document-processing/excel/excel-library/net/faqs/how-to-avoid-exception-when-adding-worksheets-with-same-name)
