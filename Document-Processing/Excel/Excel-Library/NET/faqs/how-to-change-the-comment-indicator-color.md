---
title: How to change the comment indicator color? | Syncfusion
description: This page explains how to change the comment indicator color in Excel using the Syncfusion .NET Excel library (XlsIO).
platform: document-processing
control: XlsIO
documentation: UG
---

# How to change the comment indicator color?

In Excel, comment indicators are small triangles displayed in the upper-right corner of cells that contain comments. XlsIO allows you to customize the appearance of comment indicators by creating a shape and positioning it over the comment cell. You can set the fill color of the shape to change the indicator color.

The following code example illustrates how to change the comment indicator color by creating a custom shape with the desired color.

{% tabs %}  
{% highlight c# tabtitle="C# [Cross-platform]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    // Set the default version as Excel 2016
    excelEngine.Excel.DefaultVersion = ExcelVersion.Excel2016;
    // Create a new workbook
    IWorkbook workbook = excelEngine.Excel.Workbooks.Create(1);
    IWorksheet worksheet = workbook.Worksheets[0];

    int height = 8;
    int width = 5;

    // Add a comment to cell A1
    ICommentShape comment = worksheet.Range["A1"].AddComment();

    // Create a right triangle shape to act as custom indicator
    IShape shape = worksheet.Shapes.AddAutoShapes(AutoShapeType.RightTriangle, 1, 1, width, height);
    // Position the shape at the upper-right corner of the cell
    shape.Left = (int)worksheet.GetColumnWidthInPixels(1) - height;
    // Rotate to point downward
    shape.ShapeRotation = 180;
    // Set the indicator (shape) color to blue
    shape.Fill.ForeColor = Color.Blue;

    // Save the workbook to a file
    workbook.SaveAs(Path.GetFullPath("Output/CommentIndicatorColor.xlsx"));
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    // Set the default version as Excel 2016
    excelEngine.Excel.DefaultVersion = ExcelVersion.Excel2016;
    // Create a new workbook
    IWorkbook workbook = excelEngine.Excel.Workbooks.Create(1);
    IWorksheet worksheet = workbook.Worksheets[0];

    int height = 8;
    int width = 5;

    // Add a comment to cell A1
    ICommentShape comment = worksheet.Range["A1"].AddComment();

    // Create a right triangle shape to act as custom indicator
    IShape shape = worksheet.Shapes.AddAutoShapes(AutoShapeType.RightTriangle, 1, 1, width, height);
    // Position the shape at the upper-right corner of the cell
    shape.Left = (int)worksheet.GetColumnWidthInPixels(1) - height;
    // Rotate to point downward
    shape.ShapeRotation = 180;
    // Set the indicator (shape) color to blue
    shape.Fill.ForeColor = System.Drawing.Color.Blue;

    // Save the workbook to a file
    workbook.SaveAs("CommentIndicatorColor.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As New ExcelEngine()
    ' Set the default version as Excel 2016
    excelEngine.Excel.DefaultVersion = ExcelVersion.Excel2016
    ' Create a new workbook
    Dim workbook As IWorkbook = excelEngine.Excel.Workbooks.Create(1)
    Dim worksheet As IWorksheet = workbook.Worksheets(0)

    Dim height As Integer = 8
    Dim width As Integer = 5

    ' Add a comment to cell A1
    Dim comment As ICommentShape = worksheet.Range("A1").AddComment()

    ' Create a right triangle shape to act as custom indicator
    Dim shape As IShape = worksheet.Shapes.AddAutoShapes(AutoShapeType.RightTriangle, 1, 1, width, height)
    ' Position the shape at the upper-right corner of the cell
    shape.Left = CInt(worksheet.GetColumnWidthInPixels(1)) - height
    ' Rotate to point downward
    shape.ShapeRotation = 180
    ' Set the indicator (shape) color to blue
    shape.Fill.ForeColor = Color.Blue

    ' Save the workbook to a file
    workbook.SaveAs("CommentIndicatorColor.xlsx")
End Using
{% endhighlight %}
{% endtabs %}

A complete working example in C# is present on <a href="https://github.com/SyncfusionExamples/XlsIO-Examples/tree/999921-Comment-Indicator/FAQ/Comment%20Indicator%20Color/.NET/Comment%20Indicator%20Color">this GitHub page</a>.
