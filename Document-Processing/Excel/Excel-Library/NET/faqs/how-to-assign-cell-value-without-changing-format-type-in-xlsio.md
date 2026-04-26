---
title: How to Assign Cell Value Without Changing Format in XlsIO
description: Demonstrates assigning values to cells in Syncfusion XlsIO without changing formats, using Text or setting NumberFormat before Value.
platform: document-processing
control: XlsIO
documentation: UG
---

# How to assign cell value without changing the format type in XlsIO?

Assigning a value to a cell using the `Value` property can change the cell's format type based on the assigned value. If you want to preserve the existing display/format, write the value using the `Text` property. Alternatively, set the desired `NumberFormat` (for example text format "@") before assigning with `Value`.

The following examples show both approaches.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;
    IWorkbook workbook = application.Workbooks.Create(1);
    IWorksheet worksheet = workbook.Worksheets[0];

    // Preserve existing formatting by assigning text directly
    worksheet.Range["A1"].Text = "1-";

    // Or set the cell's NumberFormat to Text before using Value
    worksheet.Range["A2"].NumberFormat = "@";
    worksheet.Range["A2"].Value = "1-";

    workbook.SaveAs(Path.GetFullPath("Output/Output.xlsx"));
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;
    IWorkbook workbook = application.Workbooks.Create(1);
    IWorksheet worksheet = workbook.Worksheets[0];

    // Preserve formatting by using Text
    worksheet.Range["A1"].Text = "1-";

    // Force Text number format, then set value
    worksheet.Range["A2"].NumberFormat = "@";
    worksheet.Range["A2"].Value = "1-";

    workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As New ExcelEngine()
    Dim application As IApplication = excelEngine.Excel
    application.DefaultVersion = ExcelVersion.Xlsx
    Dim workbook As IWorkbook = application.Workbooks.Create(1)
    Dim worksheet As IWorksheet = workbook.Worksheets(0)

    ' Preserve existing formatting by assigning text directly
    worksheet("A1").Text = "1-"

    ' Or set the NumberFormat to Text then assign Value
    worksheet("A2").NumberFormat = "@"
    worksheet("A2").Value = "1-"

    workbook.SaveAs("Output.xlsx")
End Using
{% endhighlight %}
{% endtabs %}

A complete working example in C# is present on <a href="https://github.com/SyncfusionExamples/XlsIO-Examples/tree/991935-Cell-Value-Format/FAQ/Cell%20Value%20Without%20Changing%20Format/.NET/Cell%20Value%20Without%20Changing%20Format">this GitHub page</a>.
