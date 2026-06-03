---
title: How to create a Pivot Cache when the worksheet data is stored as a table? | Syncfusion
description: This page explains how to create a Pivot Cache when the worksheet data is stored as a table using Syncfusion XlsIO.
platform: document-processing
control: XlsIO
documentation: UG
---

# How to create a Pivot Cache when the worksheet data is stored as a table?

You can create a Pivot Cache from a worksheet's ListObject (table) by accessing the table's location and passing it to the PivotCaches.Add method. The following code illustrates this.

{% tabs %}  
{% highlight c# tabtitle="C# [Cross-platform]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    // Instantiate the Excel application object
    IApplication application = excelEngine.Excel;

    // Assign default application version
    application.DefaultVersion = ExcelVersion.Xlsx;

    // Open a new workbook contains table
    IWorkbook workbook = application.Workbooks.Open(Path.GetFullPath(@"Data\InputTemplate.xlsx"));

    // Access first worksheet from the workbook
    IWorksheet worksheet = workbook.Worksheets[0];

    IWorksheet pivotSheet = workbook.Worksheets[1];

    // Create pivot cache from the table location
    IPivotCache cache = workbook.PivotCaches.Add(worksheet.ListObjects[0].Location);

    IPivotTable pivotTable = pivotSheet.PivotTables.Add("PivotTable1", pivotSheet["A1"], cache);

    // Save the workbook to disk in XLSX format
    workbook.SaveAs(Path.GetFullPath(@"Output\Output.xlsx"));
}
{% endhighlight %}
{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    // Instantiate the Excel application object
    IApplication application = excelEngine.Excel;

    // Assign default application version
    application.DefaultVersion = ExcelVersion.Xlsx;

    // Open a new workbook contains table
    IWorkbook workbook = application.Workbooks.Open("InputTemplate.xlsx");

    // Access first worksheet from the workbook
    IWorksheet worksheet = workbook.Worksheets[0];

    IWorksheet pivotSheet = workbook.Worksheets[1];

    // Create pivot cache from the table location
    IPivotCache cache = workbook.PivotCaches.Add(worksheet.ListObjects[0].Location);

    IPivotTable pivotTable = pivotSheet.PivotTables.Add("PivotTable1", pivotSheet["A1"], cache);

    // Save the workbook to disk in XLSX format
    workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}
{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As New ExcelEngine()
    ' Instantiate the Excel application object
    Dim application As IApplication = excelEngine.Excel

    ' Assign default application version
    application.DefaultVersion = ExcelVersion.Xlsx

    ' Open a new workbook contains table
    Dim workbook As IWorkbook = application.Workbooks.Open("InputTemplate.xlsx")

    ' Access first worksheet from the workbook
    Dim worksheet As IWorksheet = workbook.Worksheets(0)

    Dim pivotSheet As IWorksheet = workbook.Worksheets(1)

    ' Create pivot cache from the table location
    Dim cache As IPivotCache = workbook.PivotCaches.Add(worksheet.ListObjects(0).Location)

    Dim pivotTable As IPivotTable = pivotSheet.PivotTables.Add("PivotTable1", pivotSheet("A1"), cache)

    ' Save the workbook to disk in XLSX format
    workbook.SaveAs("Output.xlsx")
End Using
{% endhighlight %}
{% endtabs %}

A complete working example in C# is present on <a href="https://github.com/SyncfusionExamples/XlsIO-Examples/tree/1025701-RowheightPixels/FAQ/PivotCacheFromTable/.NET/PivotCacheFromTable">this GitHub page</a>.