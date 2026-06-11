---
title: How to get the frozen rows and columns in an Excel | Syncfusion.
description: This page explains how to get the frozen rows and columns in an Excel document using Syncfusion .NET Excel library (XlsIO).
platform: document-processing
control: XlsIO
documentation: UG
---

# How to get the frozen rows and columns in an Excel document?

The following code example illustrates how to get the frozen rows and columns in an Excel document.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;
    IWorkbook workbook = application.Workbooks.Open(Path.GetFullPath(@"Data/InputTemplate.xlsx"));
    IWorksheet worksheet = workbook.Worksheets[0];

    //Get the pane record
    PaneRecord paneRecord = (worksheet as WorksheetImpl).Pane;

    //Get the first visible row
    int rowValue = paneRecord.FirstRow;

    //Get the first visible column
    int columnValue = paneRecord.FirstColumn;

    //Get the no of frozen rows
    int frozenrows = paneRecord.HorizontalSplit;

    //Get the no of frozen columns
    int frozencolumns = paneRecord.VerticalSplit;
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;
    IWorkbook workbook = application.Workbooks.Open("../../Data/InuputTemplate.xlsx");
    IWorksheet worksheet = workbook.Worksheets[0];

    //Get the pane record
    PaneRecord paneRecord = (worksheet as WorksheetImpl).Pane;

    //Get the first visible row
    int rowValue = paneRecord.FirstRow;

    //Get the first visible column
    int columnValue = paneRecord.FirstColumn;

    //Get the no of frozen rows
    int frozenrows = paneRecord.HorizontalSplit;

    //Get the no of frozen columns
    int frozencolumns = paneRecord.VerticalSplit;
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As ExcelEngine = New ExcelEngine()
    Dim application As IApplication = excelEngine.Excel
    application.DefaultVersion = ExcelVersion.Xlsx
    Dim workbook As IWorkbook = application.Workbooks.Open("../../Data/InputTemplate.xlsx")
    Dim worksheet As IWorksheet = workbook.Worksheets(0)

    'Get the pane record
    Dim paneRecord As PaneRecord = CType(worksheet, WorksheetImpl).Pane

    'Get the first visible row
    Dim rowValue As Integer = paneRecord.FirstRow

    'Get the first visible column
    Dim columnValue As Integer = paneRecord.FirstColumn

    'Get the number of frozen rows
    Dim frozenRows As Integer = paneRecord.HorizontalSplit

    'Get the number of frozen columns
    Dim frozenColumns As Integer = paneRecord.VerticalSplit
End Using
{% endhighlight %}
{% endtabs %}