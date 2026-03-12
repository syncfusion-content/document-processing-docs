---
title: How to count the number of decimal places in an Excel numeric cell value | Syncfusion
description: Code examples to count decimal places in a numeric cell value using Syncfusion .NET Excel library (XlsIO).
platform: document-processing
control: XlsIO
documentation: UG
---

# How to count the number of decimal places in an Excel numeric cell value?

The following code examples demonstrate counting the number of decimal places in a numeric cell value using C# (Cross-platform and Windows-specific) and VB.NET.

{% tabs %}   
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/FAQ/Decimal %20Places%20Count/.NET/DecimalPlacesCount/DecimalPlacesCount/Program.cs,180" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;
    IWorkbook workbook = application.Workbooks.Open(Path.GetFullPath(@"Data/Input.xlsx"));
    IWorksheet worksheet = workbook.Worksheets[0];

    // Get the cell text safely
    string cellText = worksheet.Range["G2"].Value?.ToString() ?? string.Empty;

    // Count decimal places: if there's a decimal point, count chars after it; otherwise 0
    int countDecimalPlaces = 0;
    int dotIndex = cellText.IndexOf('.');
    if (dotIndex >= 0)
    {
        countDecimalPlaces = cellText.Length - dotIndex - 1;
    }

    // Display result in console
    Console.WriteLine(countDecimalPlaces);

    //Save the workbook
    workbook.SaveAs(Path.GetFullPath(@"Output/Output.xlsx"));
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %} 
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;
    IWorkbook workbook = application.Workbooks.Open("Input.xlsx");

    // Get the cell text safely
    string cellText = workbook.Worksheets[0].Range["G2"].Value?.ToString() ?? string.Empty;

    // Count decimal places
    int countDecimalPlaces = 0;
    int dotIndex = cellText.IndexOf('.');
    if (dotIndex >= 0)
    {
        countDecimalPlaces = cellText.Length - dotIndex - 1;
    }

    // Display result in console
    Console.WriteLine(countDecimalPlaces);

    //Save the workbook
    workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As New ExcelEngine()
    Dim application As IApplication = excelEngine.Excel
    application.DefaultVersion = ExcelVersion.Xlsx
    Dim workbook As IWorkbook = application.Workbooks.Open("Input.xlsx")
    Dim worksheet As IWorksheet = workbook.Worksheets(0)

    ' Get the cell text safely
    Dim cellText As String = If(worksheet.Range("G2").Value IsNot Nothing, worksheet.Range("G2").Value.ToString(), String.Empty)

    ' Count decimal places
    Dim countDecimalPlaces As Integer = 0
    Dim dotIndex As Integer = cellText.IndexOf("."c)
    If dotIndex >= 0 Then
        countDecimalPlaces = cellText.Length - dotIndex - 1
    End If

    ' Display result in console
    Console.WriteLine(countDecimalPlaces)

    'Save the workbook
    workbook.SaveAs("Output.xlsx")
End Using
{% endhighlight %}
{% endtabs %}       

A complete working example in C# is present on <a href="https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/FAQ/Decimal %20Places%20Count/.NET/DecimalPlacesCount">this GitHub page</a>.
