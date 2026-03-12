---
title: Retrieve the last row of a worksheet in Excel | Syncfusion
description: Code example to retrieve the last row of the used range in an Excel worksheet using Syncfusion .NET Excel library (XlsIO).
platform: document-processing
control: XlsIO
documentation: UG
---

# How to retrieve the last row of a worksheet in Excel?

The following code examples demonstrate retrieving the last row in the used range of an Excel worksheet using C# (Cross-platform and Windows-specific) and VB.NET.

{% tabs %}   
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/FAQ/Last%20row%20of%20worksheet/.NET/LastRowOfWorksheet/LastRowOfWorksheet/Program.cs,180" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;
    IWorkbook workbook = application.Workbooks.Open(Path.GetFullPath(@"Data/Input.xlsx"));
    IWorksheet worksheet = workbook.Worksheets[0];

    //Get the last row from the used range
    int lastrow = workbook.ActiveSheet.UsedRange.LastRow;

    //Display the last row
    Console.WriteLine("The last row in the used range is: " + lastrow);

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
    IWorksheet worksheet = workbook.Worksheets[0];

    //Get the last row from the used range
    int lastrow = workbook.ActiveSheet.UsedRange.LastRow;

    //Display the last row
    Console.WriteLine("The last row in the used range is: " + lastrow);

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

    'Get the last row from the used range
    Dim lastrow As Integer = workbook.ActiveSheet.UsedRange.LastRow

    'Display the last row
    Console.WriteLine("The last row in the used range is: " & lastrow)

    'Save the workbook
    workbook.SaveAs("Output.xlsx")
End Using
{% endhighlight %}
{% endtabs %}       

A complete working example in C# is present on <a href="https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/FAQ/Last%20row%20of%20worksheet/.NET/LastRowOfWorksheet">this GitHub page</a>.
