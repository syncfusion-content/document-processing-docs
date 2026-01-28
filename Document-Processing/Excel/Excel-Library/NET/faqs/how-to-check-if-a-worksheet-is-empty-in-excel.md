---
title: Check if a worksheet is empty in Excel | Syncfusion
description: Code example to check if a worksheet is empty in Excel using Syncfusion .NET Excel library (XlsIO).
platform: document-processing
control: XlsIO
documentation: UG
---

# How to check if a worksheet is empty in Excel?

The following code examples demonstrate how to check whether a worksheet is empty in Excel using C# (Cross-platform and Windows-specific) and VB.NET.

{% tabs %}   
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/FAQ/Worksheet/.NET/CheckIfWorksheetIsEmpty/CheckIfWorksheetIsEmpty/Program.cs,180" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;
    IWorkbook workbook = application.Workbooks.Open(Path.GetFullPath(@"Data/Input.xlsx"));
    IWorksheet worksheet;
    for (int i = 0; i < workbook.Worksheets.Count; i++)
    {
        // Access the worksheet 
        worksheet = workbook.Worksheets[i];

        // Check if worksheet is empty
        if (worksheet.UsedCells.Length == 0)
            Console.WriteLine("The worksheet with name \""+ worksheet.Name + "\" is empty");
    }
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %} 
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;
    IWorkbook workbook = application.Workbooks.Open("Input.xlsx");
    IWorksheet worksheet;
    for (int i = 0; i < workbook.Worksheets.Count; i++)
    {
        // Access the worksheet 
        worksheet = workbook.Worksheets[i];

        // Check if worksheet is empty
        if (worksheet.UsedCells.Length == 0)
            Console.WriteLine("The worksheet with name \""+ worksheet.Name + "\" is empty");
    }
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As New ExcelEngine()
    Dim application As IApplication = excelEngine.Excel
    application.DefaultVersion = ExcelVersion.Xlsx

    Dim workbook As IWorkbook = application.Workbooks.Open("Input.xlsx")
    Dim worksheet As IWorksheet

    For i As Integer = 0 To workbook.Worksheets.Count - 1
        ' Access the worksheet 
        worksheet = workbook.Worksheets(i)

        ' Check if worksheet is empty
        If worksheet.UsedCells.Length = 0 Then
            Console.WriteLine("The worksheet with name """ & worksheet.Name & """ is empty")
        End If
    Next
End Using
{% endhighlight %}
{% endtabs %}       

A complete working example in C# is present on <a href="https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/FAQ/Worksheet/.NET/CheckIfWorksheetIsEmpty">this GitHub page</a>.