---
title: Apply number formatting to an entire column in Excel | Syncfusion
description: Code example to apply number formatting to an entire column in Excel using Syncfusion .NET Excel library (XlsIO).
platform: document-processing
control: XlsIO
documentation: UG
---

# How to apply number formatting to an entire column in Excel?

The following code examples demonstrate applying number formatting to an entire column in Excel using C# (Cross-platform and Windows-specific) and VB.NET.

{% tabs %}   
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/FAQ/Column%20Number%20Format/.NET/ColumnNumberFormat/ColumnNumberFormat/Program.cs,180" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;
    IWorkbook workbook = application.Workbooks.Open(Path.GetFullPath(@"Data/Input.xlsx"));
    IWorksheet sheet = workbook.Worksheets[0];

    //Case 1: Apply direct number format (zero-based index)
    sheet.Columns[0].NumberFormat = "yyyy-mm-dd"; //Column A
    sheet.Columns[3].NumberFormat = "$#,##0.00"; //Column D
    sheet.Columns[4].NumberFormat = "0.00%"; //Column E

    //Case 2: Apply style-based format (one-based index)
    IStyle style = workbook.Styles.Add("DecimalStyle");
    style.NumberFormat = "0.00";
    sheet.SetDefaultColumnStyle(3, style); //Column C 

    //Saving the workbook
    workbook.SaveAs(Path.GetFullPath(@"Output/Output.xlsx"));
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %} 
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;
    IWorkbook workbook = application.Workbooks.Open("Input.xlsx");
    IWorksheet sheet = workbook.Worksheets[0];

    //Case 1: Apply direct number format (zero-based index)
    sheet.Columns[0].NumberFormat = "yyyy-mm-dd"; //Column A
    sheet.Columns[3].NumberFormat = "$#,##0.00"; //Column D
    sheet.Columns[4].NumberFormat = "0.00%"; //Column E

    //Case 2: Apply style-based format (one-based index)
    IStyle style = workbook.Styles.Add("DecimalStyle");
    style.NumberFormat = "0.00";
    sheet.SetDefaultColumnStyle(3, style); //Column C 

    //Saving the workbook
    workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As New ExcelEngine()
    Dim application As IApplication = excelEngine.Excel
    application.DefaultVersion = ExcelVersion.Xlsx
    Dim workbook As IWorkbook = application.Workbooks.Open("Input.xlsx")
    Dim sheet As IWorksheet = workbook.Worksheets(0)

    'Case 1: Apply direct number format (zero-based index)
    sheet.Columns(0).NumberFormat = "yyyy-mm-dd" 'Column A
    sheet.Columns(3).NumberFormat = "$#,##0.00" 'Column D
    sheet.Columns(4).NumberFormat = "0.00%" 'Column E

    'Case 2: Apply style-based format (one-based index)
    Dim style As IStyle = workbook.Styles.Add("DecimalStyle")
    style.NumberFormat = "0.00"
    sheet.SetDefaultColumnStyle(3, style) 'Column C

    'Save the workbook
    workbook.SaveAs("Output.xlsx")
End Using
{% endhighlight %}
{% endtabs %}       
 
A complete working example that shows how to apply number formatting to an entire column in Excel using C# is present on <a href="https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/FAQ/Column%20Number%20Format/.NET/ColumnNumberFormat">this GitHub page</a>.