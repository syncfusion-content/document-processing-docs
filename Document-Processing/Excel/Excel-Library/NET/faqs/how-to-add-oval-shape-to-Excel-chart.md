---
title: How to add Oval shape to Excel chart using XlsIO | Syncfusion
description: This page explains how to add Oval shape to Excel chart in C# (cross-platform and Windows-specific) and VB.NET using Syncfusion .NET Excel library (XlsIO).
platform: document-processing
control: XlsIO
documentation: UG
---

# How to add Oval shape to Excel chart using XlsIO?

The following code snippets illustrate how to add Oval shape to Excel chart in C# (cross-platform and Windows-specific) and VB.NET.

{% tabs %}  
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/FAQ/Add%20oval%20shape%20to%20chart/.NET/Add%20oval%20shape%20to%20chart/Add%20oval%20shape%20to%20chart/Program.cs,180" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;
    IWorkbook workbook = application.Workbooks.Create(1);
    IWorksheet worksheet = workbook.Worksheets[0];

    //Add chart to worksheet
    IChart chart = worksheet.Charts.Add();

    //Add oval shape to chart
    IShape shape = chart.Shapes.AddAutoShapes(AutoShapeType.Oval, 20, 60, 500, 400);

    //Format the shape
    shape.Line.ForeColorIndex = ExcelKnownColors.Red;

    //Add the text to the oval shape and set the text alignment on the shape
    shape.TextFrame.TextRange.Text = "This is an oval shape";
    shape.TextFrame.VerticalAlignment = ExcelVerticalAlignment.MiddleCentered;
    shape.TextFrame.HorizontalAlignment = ExcelHorizontalAlignment.CenterMiddle;

    #region Save
    //Saving the workbook
    workbook.SaveAs("Output.xlsx");
    #endregion
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %} 
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;
    IWorkbook workbook = application.Workbooks.Create(1);
    IWorksheet worksheet = workbook.Worksheets[0];

    //Add chart to worksheet
    IChart chart = worksheet.Charts.Add();

    //Add oval shape to chart
    IShape shape = chart.Shapes.AddAutoShapes(AutoShapeType.Oval, 20, 60, 500, 400);

    //Format the shape
    shape.Line.ForeColorIndex = ExcelKnownColors.Red;

    //Add the text to the oval shape and set the text alignment on the shape
    shape.TextFrame.TextRange.Text = "This is an oval shape";
    shape.TextFrame.VerticalAlignment = ExcelVerticalAlignment.MiddleCentered;
    shape.TextFrame.HorizontalAlignment = ExcelHorizontalAlignment.CenterMiddle;

    workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As New ExcelEngine()
    Dim application As IApplication = excelEngine.Excel
    application.DefaultVersion = ExcelVersion.Xlsx
    Dim workbook As IWorkbook = application.Workbooks.Create(1)
    Dim worksheet As IWorksheet = workbook.Worksheets(0)

    'Add chart to worksheet
    Dim chart As IChart = worksheet.Charts.Add()

    'Add oval shape to chart
    Dim shape As IShape = chart.Shapes.AddAutoShapes(AutoShapeType.Oval, 20, 60, 500, 400)

    'Format the shape
    shape.Line.ForeColorIndex = ExcelKnownColors.Red

    'Add the text to the oval shape and set the text alignment on the shape
    shape.TextFrame.TextRange.Text = "This is an oval shape"
    shape.TextFrame.VerticalAlignment = ExcelVerticalAlignment.MiddleCentered
    shape.TextFrame.HorizontalAlignment = ExcelHorizontalAlignment.CenterMiddle

    workbook.SaveAs("Output.xlsx")
End Using
{% endhighlight %}
{% endtabs %}

A complete working example to add Oval shape to Excel chart using C# is present on [this GitHub page](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/FAQ/Add%20oval%20shape%20to%20chart/.NET/Add%20oval%20shape%20to%20chart).  