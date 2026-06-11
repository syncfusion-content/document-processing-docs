---
title: Set traffic light icons in Excel conditional formatting | Syncfusion
description: Code example to set traffic lights icon in Excel conditional formatting using Syncfusion .NET Excel library (XlsIO).
platform: document-processing
control: XlsIO
documentation: UG
---

# How to set traffic lights icon in Excel conditional formatting using C#?

The following code snippets illustrate how to set traffic lights icon in Excel conditional formatting in C# (cross-platform and Windows-specific) and VB.NET.

{% tabs %}  
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/FAQ/Conditional%20Formatting/.NET/Traffic%20lights%20icon/Traffic%20lights%20icon/Program.cs,180" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;
    IWorkbook workbook = application.Workbooks.Create(1);
    IWorksheet worksheet = workbook.Worksheets[0];

    //Add data and formatting to the worksheet
    worksheet.Range["A1"].Text = "Traffic Lights";

    //Add percentage values to cells A2 to A7 and format them as percentages
    worksheet.Range["A2"].Number = 0.95;
    worksheet.Range["A2"].NumberFormat = "0%";
    worksheet.Range["A3"].Number = 0.5;
    worksheet.Range["A3"].NumberFormat = "0%";
    worksheet.Range["A4"].Number = 0.1;
    worksheet.Range["A4"].NumberFormat = "0%";
    worksheet.Range["A5"].Number = 0.9;
    worksheet.Range["A5"].NumberFormat = "0%";
    worksheet.Range["A6"].Number = 0.7;
    worksheet.Range["A6"].NumberFormat = "0%";
    worksheet.Range["A7"].Number = 0.6;
    worksheet.Range["A7"].NumberFormat = "0%";

    //Adjust row height and column width of the used range
    worksheet.UsedRange.RowHeight = 20;
    worksheet.UsedRange.ColumnWidth = 25;

    //Apply the first conditional format
    IConditionalFormats condition = worksheet.UsedRange.ConditionalFormats;
    IConditionalFormat condition1 = condition.AddCondition();

    condition1.FormatType = ExcelCFType.CellValue;
    condition1.FirstFormula = "300";
    condition1.Operator = ExcelComparisonOperator.Less;
    condition1.FontColor = ExcelKnownColors.Black;
    condition1.BackColor = ExcelKnownColors.Sky_blue;

    //Apply the second conditional format
    IConditionalFormats condition2 = worksheet.UsedRange.ConditionalFormats;
    IConditionalFormat condition3 = condition2.AddCondition();
    condition3.FormatType = ExcelCFType.IconSet;
    IIconSet iconSet = condition3.IconSet;
    iconSet.IconSet = ExcelIconSetType.ThreeTrafficLights1;

    //Saving the workbook
    workbook.SaveAs("Output.xlsx");
} 
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %} 
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;
    IWorkbook workbook = application.Workbooks.Create(1);
    IWorksheet worksheet = workbook.Worksheets[0];

    //Add data and formatting to the worksheet
    worksheet.Range["A1"].Text = "Traffic Lights";
    //Add percentage values to cells A2 to A7 and format them as percentages
    worksheet.Range["A2"].Number = 0.95;
    worksheet.Range["A2"].NumberFormat = "0%";
    worksheet.Range["A3"].Number = 0.5;
    worksheet.Range["A3"].NumberFormat = "0%";
    worksheet.Range["A4"].Number = 0.1;
    worksheet.Range["A4"].NumberFormat = "0%";
    worksheet.Range["A5"].Number = 0.9;
    worksheet.Range["A5"].NumberFormat = "0%";
    worksheet.Range["A6"].Number = 0.7;
    worksheet.Range["A6"].NumberFormat = "0%";
    worksheet.Range["A7"].Number = 0.6;
    worksheet.Range["A7"].NumberFormat = "0%";

    //Adjust row height and column width of the used range
    worksheet.UsedRange.RowHeight = 20;
    worksheet.UsedRange.ColumnWidth = 25;

    //Apply the first conditional format
    IConditionalFormats condition = worksheet.UsedRange.ConditionalFormats;
    IConditionalFormat condition1 = condition.AddCondition();

    condition1.FormatType = ExcelCFType.CellValue;
    condition1.FirstFormula = "300";
    condition1.Operator = ExcelComparisonOperator.Less;
    condition1.FontColor = ExcelKnownColors.Black;
    condition1.BackColor = ExcelKnownColors.Sky_blue;

    //Apply the second conditional format
    IConditionalFormats condition2 = worksheet.UsedRange.ConditionalFormats;
    IConditionalFormat condition3 = condition2.AddCondition();
    condition3.FormatType = ExcelCFType.IconSet;
    IIconSet iconSet = condition3.IconSet;
    iconSet.IconSet = ExcelIconSetType.ThreeTrafficLights1;

    workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As New ExcelEngine()
    Dim application As IApplication = excelEngine.Excel
    application.DefaultVersion = ExcelVersion.Xlsx
    Dim workbook As IWorkbook = application.Workbooks.Create(1)
    Dim worksheet As IWorksheet = workbook.Worksheets(0)

    ' Add data and formatting to the worksheet
    worksheet.Range("A1").Text = "Traffic Lights"

    ' Add percentage values to cells A2 to A7 and format them as percentages      
    worksheet.Range("A2").Number = 0.95
    worksheet.Range("A2").NumberFormat = "0%"
    worksheet.Range("A3").Number = 0.5
    worksheet.Range("A3").NumberFormat = "0%"
    worksheet.Range("A4").Number = 0.1
    worksheet.Range("A4").NumberFormat = "0%"
    worksheet.Range("A5").Number = 0.9
    worksheet.Range("A5").NumberFormat = "0%"
    worksheet.Range("A6").Number = 0.7
    worksheet.Range("A6").NumberFormat = "0%"
    worksheet.Range("A7").Number = 0.6
    worksheet.Range("A7").NumberFormat = "0%"

    'Adjust row height and column width of the used range    
    worksheet.UsedRange.RowHeight = 20
    worksheet.UsedRange.ColumnWidth = 25

    ' Apply the first conditional format
    Dim condition As IConditionalFormats = worksheet.UsedRange.ConditionalFormats
    Dim condition1 As IConditionalFormat = condition.AddCondition()

    condition1.FormatType = ExcelCFType.CellValue
    condition1.FirstFormula = "300"
    condition1.Operator = ExcelComparisonOperator.Less
    condition1.FontColor = ExcelKnownColors.Black
    condition1.BackColorRGB = Color.FromArgb(135, 206, 235) ' Sky blue

    ' Apply the second conditional format
    Dim condition2 As IConditionalFormats = worksheet.UsedRange.ConditionalFormats
    Dim condition3 As IConditionalFormat = condition2.AddCondition()
    condition3.FormatType = ExcelCFType.IconSet
    Dim iconSet As IIconSet = condition3.IconSet
    iconSet.IconSet = ExcelIconSetType.ThreeTrafficLights1
    ' Save the workbook
    workbook.SaveAs("Output.xlsx")
End Using
{% endhighlight %}
{% endtabs %}

A complete working example to set traffic lights icon in Excel conditional formatting using C# is present on [this GitHub page](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/FAQ/Conditional%20Formatting/.NET/Traffic%20lights%20icon).   




