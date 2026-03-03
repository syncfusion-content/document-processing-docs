---
title: How to read all values of a column | Syncfusion
description: This page explains how to read all values of a column in an Excel worksheet using Syncfusion .NET Excel library (XlsIO).
platform: document-processing
control: XlsIO
documentation: UG
---

# How to read all values from a column in an Excel worksheet?

The following code example illustrates how to read all values from a specific column in an Excel worksheet using XlsIO in C# (cross-platform and Windows-specific) and VB.NET.

{% tabs %}  
{% highlight c# tabtitle="C# [Cross-platform]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;
    IWorkbook workbook = application.Workbooks.Open(Path.GetFullPath(@"Data/InputTemplate.xlsx"));
    IWorksheet worksheet = workbook.Worksheets[0];

    // Select the column
    string columnName = "E"; 
    foreach (IRange row in sheet.Rows) 
    {
        // Read all the value of a column 
        var val = sheet[columnName + row.Row].Value;                 
    } 
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;
    IWorkbook workbook = application.Workbooks.Open(Path.GetFullPath(@"Data/InputTemplate.xlsx"));
    IWorksheet worksheet = workbook.Worksheets[0];

    // Select the column
    string columnName = "E"; 
    foreach (IRange row in sheet.Rows) 
    {
        // Read all the value of a column 
        var val = sheet[columnName + row.Row].Value;                 
    } 
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As ExcelEngine = New ExcelEngine()
    Dim application As IApplication = excelEngine.Excel
    application.DefaultVersion = ExcelVersion.Xlsx
    Dim workbook As IWorkbook = application.Workbooks.Open("InputTemplate.xlsx")
    Dim worksheet As IWorksheet = workbook.Worksheets(0)

    ' Select the column
    Dim columnName As String = "E"
    For Each row As IRange In worksheet.Rows
        Dim cellAddress As String = columnName & row.Row.ToString()
        ' Read all the value of a column 
        Dim val = worksheet(cellAddress).Value
    Next
End Using
{% endhighlight %}
{% endtabs %}  
