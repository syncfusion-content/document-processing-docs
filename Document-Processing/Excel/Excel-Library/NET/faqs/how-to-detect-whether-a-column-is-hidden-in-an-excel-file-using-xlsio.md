---
title: How to detect whether a column is hidden in an Excel file using XlsIO | Syncfusion
description: This FAQ shows how to detect whether a specific column is hidden in an Excel worksheet using Syncfusion XlsIO. It demonstrates using the worksheet's column information to check the hidden state.
platform: document-processing
control: XlsIO
documentation: UG
---

# How to detect whether a column is hidden in an Excel file using XlsIO?

You can determine whether a column is hidden by inspecting the worksheet's column information. The example below uses `WorksheetImpl` to access the `ColumnInformation` collection and checks the `IsHidden` property for the requested column index.

Note: column indices in `ColumnInformation` are 1-based.

The following examples show the pattern in C# (cross-platform and Windows-specific) and VB.NET.

{% tabs %}  
{% highlight c# tabtitle="C# [Cross-platform]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;
    IWorkbook workbook = application.Workbooks.Create(1);

    // Use the concrete WorksheetImpl when you need access to implementation-specific members
    WorksheetImpl sheet = workbook.Worksheets[0] as WorksheetImpl;

    // Hide column 1
    sheet.ShowColumn(1, false);

    // Detect whether column 1 is hidden
    bool hidden = sheet.ColumnInformation[1] != null && sheet.ColumnInformation[1].IsHidden;

    Console.WriteLine($"Column 1 hidden: {hidden}");

    workbook.SaveAs(Path.GetFullPath(@"Output/Output.xlsx"));
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;
    IWorkbook workbook = application.Workbooks.Create(1);

    WorksheetImpl sheet = workbook.Worksheets[0] as WorksheetImpl;

    // Hide column 1
    sheet.ShowColumn(1, false);

    // Detect whether column 1 is hidden
    bool hidden = sheet.ColumnInformation[1] != null && sheet.ColumnInformation[1].IsHidden;

    Console.WriteLine($"Column 1 hidden: {hidden}");

    workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As New ExcelEngine()
    Dim application As IApplication = excelEngine.Excel
    application.DefaultVersion = ExcelVersion.Xlsx
    Dim workbook As IWorkbook = application.Workbooks.Create(1)

    ' Use the concrete WorksheetImpl when you need access to implementation-specific members
    Dim sheet As WorksheetImpl = TryCast(workbook.Worksheets(0), WorksheetImpl)

    ' Hide column 1
    sheet.ShowColumn(1, False)

    ' Detect whether column 1 is hidden
    Dim hidden As Boolean = sheet.ColumnInformation(1) IsNot Nothing AndAlso sheet.ColumnInformation(1).IsHidden

    Console.WriteLine($"Column 1 hidden: {hidden}")

    workbook.SaveAs("Output.xlsx")
End Using
{% endhighlight %}
{% endtabs %}

A complete working example in C# is present on <a href="https://github.com/SyncfusionExamples/XlsIO-Examples/tree/1003194-Hidden-Column/FAQ/Hidden%20Column/.NET/Hidden%20Column">this GitHub page</a>.

## See Also

* [Working with Excel Worksheet](https://help.syncfusion.com/document-processing/excel/excel-library/net/working-with-excel-worksheet)
