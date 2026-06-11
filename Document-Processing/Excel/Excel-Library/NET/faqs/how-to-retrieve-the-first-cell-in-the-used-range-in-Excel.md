---
title: Retrieve the first cell in the used range in Excel | Syncfusion
description: Code example to retrieve the first cell in the used range in an Excel worksheet using Syncfusion .NET Excel library (XlsIO).
platform: document-processing
control: XlsIO
documentation: UG
---

# How to retrieve the first cell in the used range in Excel?

The following code examples demonstrate retrieving the first cell in the used range of an Excel worksheet using C# (Cross-platform and Windows-specific) and VB.NET.

{% tabs %}   
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/FAQ/First%20used%20cell%20in%20used%20range/.NET/FirstUsedCellInUsedRange/FirstUsedCellInUsedRange/Program.cs,180" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;
    IWorkbook workbook = application.Workbooks.Open(Path.GetFullPath(@"Data/Input.xlsx"));
    IWorksheet worksheet = workbook.Worksheets[0];

    //Get the used range of the worksheet
    IRange usedRange = worksheet.UsedRange;

    //Get the first cell from the used range
    IRange firstCell = worksheet.Range[usedRange.Row, usedRange.Column];

    //Get the address of the first cell
    string firstCellAddress = firstCell.AddressLocal;

    //Display the address of the first cell
    Console.WriteLine("The address of the first used cell in used range is: " + firstCellAddress);

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

    //Get the used range of the worksheet
    IRange usedRange = worksheet.UsedRange;

    //Get the first cell from the used range
    IRange firstCell = worksheet.Range[usedRange.Row, usedRange.Column];

    //Get the address of the first cell
    string firstCellAddress = firstCell.AddressLocal;

    //Display the address of the first cell
    Console.WriteLine("The address of the first used cell in used range is: " + firstCellAddress);

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

    'Get the used range of the worksheet
    Dim usedRange As IRange = worksheet.UsedRange

    'Get the first cell from the used range
    Dim firstCell As IRange = worksheet.Range(usedRange.Row, usedRange.Column)

    'Get the address of the first cell
    Dim firstCellAddress As String = firstCell.AddressLocal

    'Display the address of the first cell
    Console.WriteLine("The address of the first used cell in used range is: " & firstCellAddress)

    'Save the workbook
    workbook.SaveAs("Output.xlsx")
End Using
{% endhighlight %}
{% endtabs %}       

A complete working example in C# is present on <a href="https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/FAQ/First%20used%20cell%20in%20used%20range/.NET/FirstUsedCellInUsedRange">this GitHub page</a>.