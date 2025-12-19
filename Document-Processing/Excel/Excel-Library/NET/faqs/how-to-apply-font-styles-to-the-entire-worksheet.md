---
title: How to apply styles to an Entire Excel Worksheet | Syncfusion 
description: Learn how to apply font settings and fill color to an entire Excel worksheet using the Syncfusion .NET Excel library (XlsIO) in C# and VB.NET.
platform: document-processing 
control: XlsIO 
documentation: UG
---

# How to apply styles to the entire worksheet in Excel?

The following examples show how to apply font attributes (name and size) and fill color to an entire worksheet using C# (cross-platform and Windows-specific) and VB.NET.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;
    IWorkbook workbook = application.Workbooks.Open("../../../Data/Input.xlsx", ExcelOpenType.Automatic);
    IWorksheet worksheet = workbook.Worksheets[0];

    //Define new styles to apply in rows and columns
    IStyle columnStyle = workbook.Styles.Add("ColumnStyle");
    columnStyle.Font.FontName = "Times New Roman";
    columnStyle.Font.Size = 10;
    columnStyle.Color = Color.Pink;

    worksheet.SetDefaultColumnStyle(1, 16384, columnStyle);

    //Save the Excel document
    workbook.SaveAs("../../../Output/FontStyle.xlsx");
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %} 
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;
    IWorkbook workbook = application.Workbooks.Open("../../Data/Input.xlsx", ExcelOpenType.Automatic);
    IWorksheet worksheet = workbook.Worksheets[0];

    //Define new styles to apply in rows and columns
    IStyle columnStyle = workbook.Styles.Add("ColumnStyle");
    columnStyle.Font.FontName = "Times New Roman";
    columnStyle.Font.Size = 10;
    columnStyle.Color = Color.Pink;

    worksheet.SetDefaultColumnStyle(1, 16384, columnStyle);

    //Save the Excel document
    workbook.SaveAs("../../Output/FontStyle.xlsx");

}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %} 
Using excelEngine As New ExcelEngine()
    Dim application As IApplication = excelEngine.Excel
    application.DefaultVersion = ExcelVersion.Xlsx

    Dim workbook As IWorkbook = application.Workbooks.Open("../../Data/Input.xlsx", ExcelOpenType.Automatic)
    Dim worksheet As IWorksheet = workbook.Worksheets(0)

    'Define new styles to apply in rows and columns
    Dim columnStyle As IStyle = workbook.Styles.Add("ColumnStyle")
    columnStyle.Font.FontName = "Times New Roman"
    columnStyle.Font.Size = 10
    columnStyle.Color = Color.Pink

    worksheet.SetDefaultColumnStyle(1, 16384, columnStyle)

    'Save the Excel document
    workbook.SaveAs("../../Output/FontStyle.xlsx")
End Using
{% endhighlight %} 
{% endtabs %}

N>
* Applying a default style to cells replaces any existing styles. This is standard Excel behavior.
* To add new styling  without removing existing formats, set specific properties on targeted ranges.

The following code snippet shows how to apply a new style without affecting existing styles:

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
 worksheet.Range["A1:F13"].CellStyle.Font.FontName = "Times New Roman";
 worksheet.Range["A1:F13"].CellStyle.Font.Size = 10;
 worksheet.Range["A1:F13"].CellStyle.Color = Color.Lavender;
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %} 
 worksheet.Range["A1:F13"].CellStyle.Font.FontName = "Times New Roman";
 worksheet.Range["A1:F13"].CellStyle.Font.Size = 10;
 worksheet.Range["A1:F13"].CellStyle.Color = Color.Lavender;
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %} 
worksheet.Range("A1:F13").CellStyle.Font.FontName = "Times New Roman"
worksheet.Range("A1:F13").CellStyle.Font.Size = 10
worksheet.Range("A1:F13").CellStyle.Color = Color.Lavender
{% endhighlight %} 
{% endtabs %}

