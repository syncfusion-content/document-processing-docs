---
title: How to enable PivotTable Show Details in XlsIO? | Syncfusion
description: This page explains how to enable the pivot table show details option using Syncfusion Excel library.
platform: document-processing
control: XlsIO
documentation: UG
---

# How to enable PivotTable Show Details in XlsIO?

The PivotTable "Show Details" (drilldown) behavior can be enabled by setting the `EnableDrilldown` implementation property to `true` using syncfusion XlsIO.

The following code examples show how to enable drilldown in XlsIO.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    // Create application and set default version
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;

    // Open existing workbook with a PivotTable
    IWorkbook workbook = application.Workbooks.Open(Path.GetFullPath("Data/InputTemplate.xlsx"));
    IWorksheet worksheet = workbook.Worksheets[1];

    // Get the first PivotTable
    IPivotTable pivotTable = worksheet.PivotTables[0];

    // Enable drilldown (Show Details) so double-click opens detail rows
    (pivotTable as PivotTableImpl).EnableDrilldown = true;

    // Save changes
    workbook.SaveAs(Path.GetFullPath("Output/Output.xlsx"));
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    // Windows-specific usage is identical for this feature
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;

    IWorkbook workbook = application.Workbooks.Open("InputTemplate.xlsx");
    IWorksheet worksheet = workbook.Worksheets[1];
    IPivotTable pivotTable = worksheet.PivotTables[0];

    // Enable pivot table drilldown
    (pivotTable as PivotTableImpl).EnableDrilldown = true;

    workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As New ExcelEngine()
    ' Create application and set default version
    Dim application As IApplication = excelEngine.Excel
    application.DefaultVersion = ExcelVersion.Xlsx

    ' Open existing workbook with a PivotTable
    Dim workbook As IWorkbook = application.Workbooks.Open("InputTemplate.xlsx")
    Dim worksheet As IWorksheet = workbook.Worksheets(1)

    ' Get the first PivotTable
    Dim pivotTable As IPivotTable = worksheet.PivotTables(0)

    ' Enable drilldown (Show Details)
    CType(pivotTable, PivotTableImpl).EnableDrilldown = True

    ' Save changes
    workbook.SaveAs("Output.xlsx")
End Using
{% endhighlight %}
{% endtabs %}

A complete working example in C# is present on <a href="https://github.com/SyncfusionExamples/XlsIO-Examples/tree/1010815-Pivot-ShowDetails/FAQ/Pivot%20Enable%20Drill/.NET/Pivot%20Enable%20Drill">this GitHub page</a>.
