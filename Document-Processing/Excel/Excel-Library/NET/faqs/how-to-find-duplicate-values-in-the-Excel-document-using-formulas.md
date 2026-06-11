---
title: Find duplicate values in the Excel document | Syncfusion
description: This page shows how to find duplicate values in the Excel document using formulas with the Syncfusion .NET Excel library (XlsIO).
platform: document-processing
control: XlsIO
documentation: UG
---

# How to find duplicate values in the Excel document using formulas in C#?

The following code illustrates how to find the duplicate values in the Excel document using formulas.

{% tabs %}  
{% highlight c# tabtitle="C# [Cross-platform]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;

    //Loads an existing file.
    IWorkbook workbook = application.Workbooks.Open("InputTemplate.xlsx");
    IWorksheet worksheet = workbook.Worksheets[0];

    //Find duplicate values in the column
    for(int i = 2; i <= worksheet.UsedRange.LastRow; i++)
    {
        worksheet.Range["D" + i].Formula = $"=IF(MATCH(C{i},C$2:C{i},0)=ROW(C{i})-1,1,0)";
    }

    //Saving the workbook 
    workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;

    //Loads an existing file.
    IWorkbook workbook = application.Workbooks.Open("InputTemplate.xlsx");
    IWorksheet worksheet = workbook.Worksheets[0];

    //Find duplicate values in the column
    for(int i = 2; i <= worksheet.UsedRange.LastRow; i++)
    {
        worksheet.Range["D" + i].Formula = $"=IF(MATCH(C{i},C$2:C{i},0)=ROW(C{i})-1,1,0)";
    }

    // Saving the workbook
    workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As New ExcelEngine()
    Dim application As IApplication = excelEngine.Excel
    application.DefaultVersion = ExcelVersion.Xlsx

    'Loads an existing file.
    Dim workbook As IWorkbook = application.Workbooks.Open("InputTemplate.xlsx")
    Dim worksheet As IWorksheet = workbook.Worksheets(0)

    'Find duplicate values in the column
    For i As Integer = 2 To worksheet.UsedRange.LastRow
        worksheet.Range("D" & i).Formula = $"=IF(MATCH(C{i},C$2:C{i},0)=ROW(C{i})-1,1,0)"
    Next i

    'Saving the workbook
    workbook.SaveAs("Output.xlsx")
End Using
{% endhighlight %}
{% endtabs %}