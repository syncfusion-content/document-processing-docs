---
title: Chart Axis | Excel library | Syncfusion
description: In this section, you can learn about chart axis in an Excel document using Syncfusion .NET Excel library (XlsIO).
platform: document-processing
control: XlsIO
documentation: UG
---

# Chart Axis in Excel document

Charts typically have two axes that are used to measure and categorize data.
-  Horizontal axis (also known as category axis or x axis).
-  Vertical axis (also known as value axis or y axis).

Using XlsIO, you can **customize the axis in the chart**.

## Add

The following code snippet illustrates how to add the chart axis title.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
//Set the axis title
chart.PrimaryCategoryAxis.Title = "Months";
chart.PrimaryValueAxis.Title = "Precipitation,in.";
chart.SecondaryValueAxis.Title = "Temperature,deg.F";
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Set the axis title
chart.PrimaryCategoryAxis.Title = "Months";
chart.PrimaryValueAxis.Title = "Precipitation,in.";
chart.SecondaryValueAxis.Title = "Temperature,deg.F";
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Set the axis title
chart.PrimaryCategoryAxis.Title = "Months"
chart.PrimaryValueAxis.Title = "Precipitation,in."
chart.SecondaryValueAxis.Title = "Temperature,deg.F"
{% endhighlight %}
{% endtabs %}

## Formatting

### Border

The following code snippet illustrates how to format the border of the chart axis.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
//Set the border 
chart.PrimaryCategoryAxis.Border.LinePattern = ExcelChartLinePattern.CircleDot;
chart.PrimaryCategoryAxis.Border.LineColor = Syncfusion.Drawing.Color.Blue;
chart.PrimaryCategoryAxis.Border.LineWeight = ExcelChartLineWeight.Hairline;

chart.PrimaryValueAxis.Border.LinePattern = ExcelChartLinePattern.CircleDot;
chart.PrimaryValueAxis.Border.LineColor = Syncfusion.Drawing.Color.Blue;
chart.PrimaryValueAxis.Border.LineWeight = ExcelChartLineWeight.Hairline;

chart.SecondaryValueAxis.Border.LinePattern = ExcelChartLinePattern.Solid;
chart.SecondaryValueAxis.Border.LineColor = Syncfusion.Drawing.Color.Blue;
chart.SecondaryValueAxis.Border.LineWeight = ExcelChartLineWeight.Hairline;
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Set the border 
chart.PrimaryCategoryAxis.Border.LinePattern = ExcelChartLinePattern.CircleDot;
chart.PrimaryCategoryAxis.Border.LineColor = Syncfusion.Drawing.Color.Blue;
chart.PrimaryCategoryAxis.Border.LineWeight = ExcelChartLineWeight.Hairline;

chart.PrimaryValueAxis.Border.LinePattern = ExcelChartLinePattern.CircleDot;
chart.PrimaryValueAxis.Border.LineColor = Syncfusion.Drawing.Color.Blue;
chart.PrimaryValueAxis.Border.LineWeight = ExcelChartLineWeight.Hairline;

chart.SecondaryValueAxis.Border.LinePattern = ExcelChartLinePattern.Solid;
chart.SecondaryValueAxis.Border.LineColor = Syncfusion.Drawing.Color.Blue;
chart.SecondaryValueAxis.Border.LineWeight = ExcelChartLineWeight.Hairline;
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Set the border 
chart.PrimaryCategoryAxis.Border.LinePattern = ExcelChartLinePattern.CircleDot
chart.PrimaryCategoryAxis.Border.LineColor = Syncfusion.Drawing.Color.Blue
chart.PrimaryCategoryAxis.Border.LineWeight = ExcelChartLineWeight.Hairline

chart.PrimaryValueAxis.Border.LinePattern = ExcelChartLinePattern.CircleDot
chart.PrimaryValueAxis.Border.LineColor = Syncfusion.Drawing.Color.Blue
chart.PrimaryValueAxis.Border.LineWeight = ExcelChartLineWeight.Hairline

chart.SecondaryValueAxis.Border.LinePattern = ExcelChartLinePattern.Solid
chart.SecondaryValueAxis.Border.LineColor = Syncfusion.Drawing.Color.Blue
chart.SecondaryValueAxis.Border.LineWeight = ExcelChartLineWeight.Hairline
{% endhighlight %}
{% endtabs %}

### Font

The following code snippet illustrates how to format the font of the chart axis.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
//Set the font
chart.PrimaryCategoryAxis.Font.Color = ExcelKnownColors.Red;
chart.PrimaryCategoryAxis.Font.FontName = "Calibri";
chart.PrimaryCategoryAxis.Font.Bold = true;
chart.PrimaryCategoryAxis.Font.Size = 8;

chart.PrimaryValueAxis.Font.Color = ExcelKnownColors.Red;
chart.PrimaryValueAxis.Font.FontName = "Calibri";
chart.PrimaryValueAxis.Font.Bold = true;
chart.PrimaryValueAxis.Font.Size = 8;

chart.SecondaryValueAxis.Font.Color = ExcelKnownColors.Red;
chart.SecondaryValueAxis.Font.FontName = "Calibri";
chart.SecondaryValueAxis.Font.Bold = true;
chart.SecondaryValueAxis.Font.Size = 8;
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Set the font
chart.PrimaryCategoryAxis.Font.Color = ExcelKnownColors.Red;
chart.PrimaryCategoryAxis.Font.FontName = "Calibri";
chart.PrimaryCategoryAxis.Font.Bold = true;
chart.PrimaryCategoryAxis.Font.Size = 8;

chart.PrimaryValueAxis.Font.Color = ExcelKnownColors.Red;
chart.PrimaryValueAxis.Font.FontName = "Calibri";
chart.PrimaryValueAxis.Font.Bold = true;
chart.PrimaryValueAxis.Font.Size = 8;

chart.SecondaryValueAxis.Font.Color = ExcelKnownColors.Red;
chart.SecondaryValueAxis.Font.FontName = "Calibri";
chart.SecondaryValueAxis.Font.Bold = true;
chart.SecondaryValueAxis.Font.Size = 8;
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Set the font
chart.PrimaryCategoryAxis.Font.Color = ExcelKnownColors.Red
chart.PrimaryCategoryAxis.Font.FontName = "Calibri"
chart.PrimaryCategoryAxis.Font.Bold = true
chart.PrimaryCategoryAxis.Font.Size = 8

chart.PrimaryValueAxis.Font.Color = ExcelKnownColors.Red
chart.PrimaryValueAxis.Font.FontName = "Calibri"
chart.PrimaryValueAxis.Font.Bold = true
chart.PrimaryValueAxis.Font.Size = 8

chart.SecondaryValueAxis.Font.Color = ExcelKnownColors.Red
chart.SecondaryValueAxis.Font.FontName = "Calibri"
chart.SecondaryValueAxis.Font.Bold = true
chart.SecondaryValueAxis.Font.Size = 8
{% endhighlight %}
{% endtabs %}

### Rotation

The following code snippet illustrates how to rotate the text angle for the axis title area.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
//Set the rotation
chart.PrimaryValueAxis.TitleArea.TextRotationAngle = 270;
chart.SecondaryValueAxis.TitleArea.TextRotationAngle = 90;
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Set the rotation
chart.PrimaryValueAxis.TitleArea.TextRotationAngle = 270;
chart.SecondaryValueAxis.TitleArea.TextRotationAngle = 90;
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Set the rotation
chart.PrimaryValueAxis.TitleArea.TextRotationAngle = 270
chart.SecondaryValueAxis.TitleArea.TextRotationAngle = 90
{% endhighlight %}
{% endtabs %}

### Number Format

The following code snippet illustrates how to set the number format in the chart axis.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
//Set the number format
chart.PrimaryValueAxis.NumberFormat = "0.0";
chart.SecondaryValueAxis.NumberFormat = "0.0";
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Set the number format
chart.PrimaryValueAxis.NumberFormat = "0.0";
chart.SecondaryValueAxis.NumberFormat = "0.0";
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Set the number format
chart.PrimaryValueAxis.NumberFormat = "0.0"
chart.SecondaryValueAxis.NumberFormat = "0.0"
{% endhighlight %}
{% endtabs %}

## Axis Settings

### Maximum Value

The following code snippet illustrates how to set the maximum value in the chart axis.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
//Set maximum value
chart.PrimaryValueAxis.MaximumValue = 14.0;
chart.SecondaryValueAxis.MaximumValue = 49.5;
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Set maximum value
chart.PrimaryValueAxis.MaximumValue = 14.0;
chart.SecondaryValueAxis.MaximumValue = 49.5;
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Set maximum value
chart.PrimaryValueAxis.MaximumValue = 14.0
chart.SecondaryValueAxis.MaximumValue = 49.5
{% endhighlight %}
{% endtabs %}

### Minimum Value

The following code snippet illustrates how to set the minimum value in the chart axis.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
//Set minimum value
chart.PrimaryValueAxis.MinimumValue = 0;
chart.SecondaryValueAxis.MinimumValue = 46.5;
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Set minimum value
chart.PrimaryValueAxis.MinimumValue = 0;
chart.SecondaryValueAxis.MinimumValue = 46.5;
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Set minimum value
chart.PrimaryValueAxis.MinimumValue = 0
chart.SecondaryValueAxis.MinimumValue = 46.5
{% endhighlight %}
{% endtabs %}

N> 1) The [MinimumValue](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IChartValueAxis.html#Syncfusion_XlsIO_IChartValueAxis_MinimumValue) and [MaximumValue](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IChartValueAxis.html#Syncfusion_XlsIO_IChartValueAxis_MaximumValue) properties can only be read when they are explicitly set; otherwise, the default value of 0 is returned. This is the behavior of XlsIO.
N> 2) When the [IsAutoMax](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IChartValueAxis.html#Syncfusion_XlsIO_IChartValueAxis_IsAutoMax) and [IsAutoMin](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IChartValueAxis.html#Syncfusion_XlsIO_IChartValueAxis_IsAutoMin) properties are set to true, the chart automatically determines its default maximum and minimum values.

### Gridline Visibility

The following code snippet illustrates how to hide or show major and minor gridlines.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
//Showing major gridlines
chart.PrimaryValueAxis.HasMajorGridLines = true;

//Hiding minor gridlines
chart.PrimaryValueAxis.HasMinorGridLines = false;
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Showing major gridlines
chart.PrimaryValueAxis.HasMajorGridLines = true;

//Hiding minor gridlines
chart.PrimaryValueAxis.HasMinorGridLines = false;
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Showing major gridlines
chart.PrimaryValueAxis.HasMajorGridLines = True

'Hiding minor gridlines
chart.PrimaryValueAxis.HasMinorGridLines = False
{% endhighlight %}
{% endtabs %}

### Max cross

The following code snippet illustrates how to set the max cross in the chart axis.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
//Set maxcross
chart.SecondaryValueAxis.IsMaxCross = true;
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Set maxcross
chart.SecondaryValueAxis.IsMaxCross = true;
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Set maxcross
chart.SecondaryValueAxis.IsMaxCross = true
{% endhighlight %}
{% endtabs %}

### Tick Mark

The following code snippet illustrates how to set the tick mark in the chart axis.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
//Set major tick mark
chart.PrimaryCategoryAxis.MajorTickMark = ExcelTickMark.TickMark_Inside;
chart.PrimaryValueAxis.MajorTickMark = ExcelTickMark.TickMark_Outside;
chart.SecondaryValueAxis.MajorTickMark = ExcelTickMark.TickMark_Outside;
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Set major tick mark
chart.PrimaryCategoryAxis.MajorTickMark = ExcelTickMark.TickMark_Inside;
chart.PrimaryValueAxis.MajorTickMark = ExcelTickMark.TickMark_Outside;
chart.SecondaryValueAxis.MajorTickMark = ExcelTickMark.TickMark_Outside;
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Set major tick mark
chart.PrimaryCategoryAxis.MajorTickMark = ExcelTickMark.TickMark_Inside
chart.PrimaryValueAxis.MajorTickMark = ExcelTickMark.TickMark_Outside
chart.SecondaryValueAxis.MajorTickMark = ExcelTickMark.TickMark_Outside
{% endhighlight %}
{% endtabs %}

The complete code snippet illustrating the above options is shown below.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/Create%20and%20Edit%20Charts/Axis/.NET/Axis/Axis/Program.cs,180" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
	IApplication application = excelEngine.Excel;
	application.DefaultVersion = ExcelVersion.Xlsx;
	IWorkbook workbook = application.Workbooks.Open(Path.GetFullPath(@"Data/InputTemplate.xlsx"));
	IWorksheet sheet = workbook.Worksheets[0];
	IChartShape chart = sheet.Charts[0];

	//Set the axis title
	chart.PrimaryCategoryAxis.Title = "Months";
	chart.PrimaryValueAxis.Title = "Precipitation,in.";
	chart.SecondaryValueAxis.Title = "Temperature,deg.F";

	//Set the border 
	chart.PrimaryCategoryAxis.Border.LinePattern = ExcelChartLinePattern.CircleDot;
	chart.PrimaryCategoryAxis.Border.LineColor = Syncfusion.Drawing.Color.Blue;
	chart.PrimaryCategoryAxis.Border.LineWeight = ExcelChartLineWeight.Hairline;

	chart.PrimaryValueAxis.Border.LinePattern = ExcelChartLinePattern.CircleDot;
	chart.PrimaryValueAxis.Border.LineColor = Syncfusion.Drawing.Color.Blue;
	chart.PrimaryValueAxis.Border.LineWeight = ExcelChartLineWeight.Hairline;

	chart.SecondaryValueAxis.Border.LinePattern = ExcelChartLinePattern.Solid;
	chart.SecondaryValueAxis.Border.LineColor = Syncfusion.Drawing.Color.Blue;
	chart.SecondaryValueAxis.Border.LineWeight = ExcelChartLineWeight.Hairline;

	//Set the font
	chart.PrimaryCategoryAxis.Font.Color = ExcelKnownColors.Red;
	chart.PrimaryCategoryAxis.Font.FontName = "Calibri";
	chart.PrimaryCategoryAxis.Font.Bold = true;
	chart.PrimaryCategoryAxis.Font.Size = 8;

	chart.PrimaryValueAxis.Font.Color = ExcelKnownColors.Red;
	chart.PrimaryValueAxis.Font.FontName = "Calibri";
	chart.PrimaryValueAxis.Font.Bold = true;
	chart.PrimaryValueAxis.Font.Size = 8;

	chart.SecondaryValueAxis.Font.Color = ExcelKnownColors.Red;
	chart.SecondaryValueAxis.Font.FontName = "Calibri";
	chart.SecondaryValueAxis.Font.Bold = true;
	chart.SecondaryValueAxis.Font.Size = 8;

	//Set the rotation
	chart.PrimaryValueAxis.TitleArea.TextRotationAngle = 270;
	chart.SecondaryValueAxis.TitleArea.TextRotationAngle = 90;

	//Set the number format
	chart.PrimaryValueAxis.NumberFormat = "0.0";
	chart.SecondaryValueAxis.NumberFormat = "0.0";

	//Set maximum value
	chart.PrimaryValueAxis.MaximumValue = 14.0;
	chart.SecondaryValueAxis.MaximumValue = 49.5;

	//Set minimum value
	chart.PrimaryValueAxis.MinimumValue = 0;
	chart.SecondaryValueAxis.MinimumValue = 46.5;

	//Set maxcross
	chart.SecondaryValueAxis.IsMaxCross = true;

	//Set major tick mark
	chart.PrimaryCategoryAxis.MajorTickMark = ExcelTickMark.TickMark_Inside;
	chart.PrimaryValueAxis.MajorTickMark = ExcelTickMark.TickMark_Outside;
	chart.SecondaryValueAxis.MajorTickMark = ExcelTickMark.TickMark_Outside;

	//Showing major gridlines
	chart.PrimaryValueAxis.HasMajorGridLines = true;
	
	//Hiding minor gridlines
	chart.PrimaryValueAxis.HasMinorGridLines = false;

	//Saving the workbook 
	workbook.SaveAs(Path.GetFullPath("Output/Output.xlsx"));
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;
    IWorkbook workbook = application.Workbooks.Open("InputTemplate.xlsx");
    IWorksheet worksheet = workbook.Worksheets[0];
    IChartShape chart = worksheet.Charts[0];

    //Set the axis title
    chart.PrimaryCategoryAxis.Title = "Months";
    chart.PrimaryValueAxis.Title = "Precipitation,in.";
    chart.SecondaryValueAxis.Title = "Temperature,deg.F";

    //Set the border 
    chart.PrimaryCategoryAxis.Border.LinePattern = ExcelChartLinePattern.CircleDot;
    chart.PrimaryCategoryAxis.Border.LineColor = Syncfusion.Drawing.Color.Blue;
    chart.PrimaryCategoryAxis.Border.LineWeight = ExcelChartLineWeight.Hairline;

    chart.PrimaryValueAxis.Border.LinePattern = ExcelChartLinePattern.CircleDot;
    chart.PrimaryValueAxis.Border.LineColor = Syncfusion.Drawing.Color.Blue;
    chart.PrimaryValueAxis.Border.LineWeight = ExcelChartLineWeight.Hairline;

    chart.SecondaryValueAxis.Border.LinePattern = ExcelChartLinePattern.Solid;
    chart.SecondaryValueAxis.Border.LineColor = Syncfusion.Drawing.Color.Blue;
    chart.SecondaryValueAxis.Border.LineWeight = ExcelChartLineWeight.Hairline;

    //Set the font
    chart.PrimaryCategoryAxis.Font.Color = ExcelKnownColors.Red;
    chart.PrimaryCategoryAxis.Font.FontName = "Calibri";
    chart.PrimaryCategoryAxis.Font.Bold = true;
    chart.PrimaryCategoryAxis.Font.Size = 8;

    chart.PrimaryValueAxis.Font.Color = ExcelKnownColors.Red;
    chart.PrimaryValueAxis.Font.FontName = "Calibri";
    chart.PrimaryValueAxis.Font.Bold = true;
    chart.PrimaryValueAxis.Font.Size = 8;

    chart.SecondaryValueAxis.Font.Color = ExcelKnownColors.Red;
    chart.SecondaryValueAxis.Font.FontName = "Calibri";
    chart.SecondaryValueAxis.Font.Bold = true;
    chart.SecondaryValueAxis.Font.Size = 8;

    //Set the rotation
    chart.PrimaryValueAxis.TitleArea.TextRotationAngle = 270;
    chart.SecondaryValueAxis.TitleArea.TextRotationAngle = 90;

    //Set the number format
    chart.PrimaryValueAxis.NumberFormat = "0.0";
    chart.SecondaryValueAxis.NumberFormat = "0.0";

    //Set maximum value
    chart.PrimaryValueAxis.MaximumValue = 14.0;
    chart.SecondaryValueAxis.MaximumValue = 49.5;

    //Set minimum value
    chart.PrimaryValueAxis.MinimumValue = 0;
    chart.SecondaryValueAxis.MinimumValue = 46.5;

    //Set maxcross
    chart.SecondaryValueAxis.IsMaxCross = true;

    //Set major tick mark
    chart.PrimaryCategoryAxis.MajorTickMark = ExcelTickMark.TickMark_Inside;
    chart.PrimaryValueAxis.MajorTickMark = ExcelTickMark.TickMark_Outside;
    chart.SecondaryValueAxis.MajorTickMark = ExcelTickMark.TickMark_Outside;

    //Showing major gridlines
    chart.PrimaryValueAxis.HasMajorGridLines = true;
    
    //Hiding minor gridlines
    chart.PrimaryValueAxis.HasMinorGridLines = false;

    //Saving the workbook
    workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As New ExcelEngine()
    Dim application As IApplication = excelEngine.Excel
    application.DefaultVersion = ExcelVersion.Xlsx
    Dim workbook As IWorkbook = application.Workbooks.Open("InputTemplate.xlsx")
    Dim worksheet As IWorksheet = workbook.Worksheets(0)
    Dim chart As IChartShape = worksheet.Charts(0)

    'Set the axis title
    chart.PrimaryCategoryAxis.Title = "Months"
    chart.PrimaryValueAxis.Title = "Precipitation,in."
    chart.SecondaryValueAxis.Title = "Temperature,deg.F"

    'Set the border 
    chart.PrimaryCategoryAxis.Border.LinePattern = ExcelChartLinePattern.CircleDot
    chart.PrimaryCategoryAxis.Border.LineColor = Syncfusion.Drawing.Color.Blue
    chart.PrimaryCategoryAxis.Border.LineWeight = ExcelChartLineWeight.Hairline

    chart.PrimaryValueAxis.Border.LinePattern = ExcelChartLinePattern.CircleDot
    chart.PrimaryValueAxis.Border.LineColor = Syncfusion.Drawing.Color.Blue
    chart.PrimaryValueAxis.Border.LineWeight = ExcelChartLineWeight.Hairline

    chart.SecondaryValueAxis.Border.LinePattern = ExcelChartLinePattern.Solid
    chart.SecondaryValueAxis.Border.LineColor = Syncfusion.Drawing.Color.Blue
    chart.SecondaryValueAxis.Border.LineWeight = ExcelChartLineWeight.Hairline

    'Set the font
    chart.PrimaryCategoryAxis.Font.Color = ExcelKnownColors.Red
    chart.PrimaryCategoryAxis.Font.FontName = "Calibri"
    chart.PrimaryCategoryAxis.Font.Bold = True
    chart.PrimaryCategoryAxis.Font.Size = 8

    chart.PrimaryValueAxis.Font.Color = ExcelKnownColors.Red
    chart.PrimaryValueAxis.Font.FontName = "Calibri"
    chart.PrimaryValueAxis.Font.Bold = True
    chart.PrimaryValueAxis.Font.Size = 8

    chart.SecondaryValueAxis.Font.Color = ExcelKnownColors.Red
    chart.SecondaryValueAxis.Font.FontName = "Calibri"
    chart.SecondaryValueAxis.Font.Bold = True
    chart.SecondaryValueAxis.Font.Size = 8

    'Set the rotation
    chart.PrimaryValueAxis.TitleArea.TextRotationAngle = 270
    chart.SecondaryValueAxis.TitleArea.TextRotationAngle = 90

    'Set the number format
    chart.PrimaryValueAxis.NumberFormat = "0.0"
    chart.SecondaryValueAxis.NumberFormat = "0.0"

    'Set maximum value
    chart.PrimaryValueAxis.MaximumValue = 14.0
    chart.SecondaryValueAxis.MaximumValue = 49.5

    'Set minimum value
    chart.PrimaryValueAxis.MinimumValue = 0
    chart.SecondaryValueAxis.MinimumValue = 46.5

    'Set maxcross
    chart.SecondaryValueAxis.IsMaxCross = True

    'Set major tick mark
    chart.PrimaryCategoryAxis.MajorTickMark = ExcelTickMark.TickMark_Inside
    chart.PrimaryValueAxis.MajorTickMark = ExcelTickMark.TickMark_Outside
    chart.SecondaryValueAxis.MajorTickMark = ExcelTickMark.TickMark_Outside

    'Showing major gridlines
    chart.PrimaryValueAxis.HasMajorGridLines = True

    'Hiding minor gridlines
    chart.PrimaryValueAxis.HasMinorGridLines = False

    'Saving the workbook
    workbook.SaveAs("Output.xlsx")
End Using
{% endhighlight %}
{% endtabs %}

A complete working example for the chart axis in C# is present on [this GitHub page](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Create%20and%20Edit%20Charts/Axis/.NET/Axis).