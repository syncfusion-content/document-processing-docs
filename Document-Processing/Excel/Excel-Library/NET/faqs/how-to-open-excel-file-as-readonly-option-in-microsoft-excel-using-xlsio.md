---
title: How to open Excel file as ReadOnly in MS Excel using XlsIO? | Syncfusion
description: Shows how to set the 'Read-only recommended' flag when saving an Excel workbook with Syncfusion XlsIO so Excel prompts to open it as read-only.
platform: document-processing
control: XlsIO
documentation: UG
---

# How to open Excel file as ReadOnly in Microsoft Excel using XlsIO?

You can make Excel prompt users to open a workbook as read-only by setting the Read-only recommended flag on the workbook before saving. The example below shows how to set this flag with Syncfusion XlsIO and save the file so Microsoft Excel offers the "Read-only recommended" option when the file is opened.

The following code examples illustrate this.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    // Instantiate the Excel application object
    IApplication application = excelEngine.Excel;

    // Assigns default application version
    application.DefaultVersion = ExcelVersion.Xlsx;

    // Create a workbook with 1 worksheet
    IWorkbook workbook = application.Workbooks.Create(1);

    // Access first worksheet from the workbook
    IWorksheet worksheet = workbook.Worksheets[0];

    // Adding text to a cell
    worksheet.Range["A1"].Text = "Hello World";

    // Protect the worksheet
    worksheet.Protect("syncfusion", ExcelSheetProtection.All);

    // Save the workbook to disk in XLSX format
    workbook.SaveAs(Path.GetFullPath("Output/Output.xlsx"));
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    // Instantiate the Excel application object
    IApplication application = excelEngine.Excel;

    // Assigns default application version
    application.DefaultVersion = ExcelVersion.Xlsx;

    // Create a workbook with 1 worksheet
    IWorkbook workbook = application.Workbooks.Create(1);

    // Access first worksheet from the workbook
    IWorksheet worksheet = workbook.Worksheets[0];

    // Adding text to a cell
    worksheet.Range["A1"].Text = "Hello World";

    // Protect the worksheet
    worksheet.Protect("syncfusion", ExcelSheetProtection.All);

    // Save the workbook to disk in XLSX format
    workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As New ExcelEngine()
    ' Instantiate the Excel application object
    Dim application As IApplication = excelEngine.Excel

    ' Assigns default application version
    application.DefaultVersion = ExcelVersion.Xlsx

    ' Create a workbook with 1 worksheet
    Dim workbook As IWorkbook = application.Workbooks.Create(1)
    ' Access first worksheet from the workbook
    Dim worksheet As IWorksheet = workbook.Worksheets(0)

    ' Adding text to a cell
    worksheet("A1").Text = "Hello World"

    ' Protect the worksheet
    worksheet.Protect("syncfusion", ExcelSheetProtection.All)

    ' Save the workbook to disk in XLSX format
    workbook.SaveAs("Sample.xlsx")
End Using
{% endhighlight %}
{% endtabs %}


A complete working example in C# is present on <a href="https://github.com/SyncfusionExamples/XlsIO-Examples/tree/992377-ReadOnly-Excel/FAQ/ReadOnly%20Excel/.NET/Readonly%20Excel">this GitHub page</a>.
