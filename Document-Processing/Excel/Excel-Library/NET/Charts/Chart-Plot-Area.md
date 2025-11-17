---
title: Chart Plot Area | Excel library | Syncfusion
description: In this section, you can learn about chart plot area in an Excel document using Syncfusion .NET Excel library.
platform: document-processing
control: XlsIO
documentation: UG
---

# Chart Plot Area in Excel document

The plot area refers to the region that represents the plotted data in a chart. Using XlsIO, you can **customize the plot area in the chart**.

## Formatting

###  Border

The following code snippet illustrates how to format the border of the plot area.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
//Format Plot Area
IChartFrameFormat chartPlotArea = chart.PlotArea;

//Set the border
chartPlotArea.Border.LinePattern = ExcelChartLinePattern.Solid;
chartPlotArea.Border.LineColor = Color.Blue;
chartPlotArea.Border.LineWeight = ExcelChartLineWeight.Hairline;
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Format Plot Area
IChartFrameFormat chartPlotArea = chart.PlotArea;

//Set the border
chartPlotArea.Border.LinePattern = ExcelChartLinePattern.Solid;
chartPlotArea.Border.LineColor = Color.Blue;
chartPlotArea.Border.LineWeight = ExcelChartLineWeight.Hairline;
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Format Plot Area
IChartFrameFormat chartPlotArea = chart.PlotArea

'Set the border
chartPlotArea.Border.LinePattern = ExcelChartLinePattern.Solid
chartPlotArea.Border.LineColor = Color.Blue
chartPlotArea.Border.LineWeight = ExcelChartLineWeight.Hairline
{% endhighlight %}
{% endtabs %}

### Color

The following code snippet illustrates how to format the color of the plot area.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
//Set the color
chartPlotArea.Fill.FillType = ExcelFillType.Gradient;
chartPlotArea.Fill.GradientColorType = ExcelGradientColor.TwoColor;
chartPlotArea.Fill.BackColor = Color.FromArgb(205, 217, 234);
chartPlotArea.Fill.ForeColor = Color.White;
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Set the color
chartPlotArea.Fill.FillType = ExcelFillType.Gradient;
chartPlotArea.Fill.GradientColorType = ExcelGradientColor.TwoColor;
chartPlotArea.Fill.BackColor = Color.FromArgb(205, 217, 234);
chartPlotArea.Fill.ForeColor = Color.White;
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Set the color
chartPlotArea.Fill.FillType = ExcelFillType.Gradient
chartPlotArea.Fill.GradientColorType = ExcelGradientColor.TwoColor
chartPlotArea.Fill.BackColor = Color.FromArgb(205, 217, 234)
chartPlotArea.Fill.ForeColor = Color.White
{% endhighlight %}
{% endtabs %}

### Transparency

The following code snippet illustrates how to apply transparency in the plot area.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
//Set the transparency
chartPlotArea.Fill.Transparency = 0.5;
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Set the transparency 
chartPlotArea.Fill.Transparency = 0.5;
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Set the transparency 
chartPlotArea.Fill.Transparency = 0.5
{% endhighlight %}
{% endtabs %}

N> [Transparency](https://help.syncfusion.com/cr/file-formats/Syncfusion.XlsIO.IFill.html#Syncfusion_XlsIO_IFill_Transparency) is only applicable when [FillType](https://help.syncfusion.com/cr/file-formats/Syncfusion.XlsIO.IFill.html#Syncfusion_XlsIO_IFill_FillType) is set as SolidColor. Color-shaded fill is represented as a floating-point value ranging from 0.0 (Clear) to 1.0 (Opaque).

## Set position

The following code snippet illustrates how to set the position of the plot area.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
//Set the position
chartPlotArea.Layout.Left = 5;
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Set the position
chartPlotArea.Layout.Left = 5;
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Set the position 
chartPlotArea.Layout.Left = 5;
{% endhighlight %}
{% endtabs %}

The complete code snippet illustrating the above options is shown below.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/Create%20and%20Edit%20Charts/Plot%20Area/.NET/Plot%20Area/Plot%20Area/Program.cs,180" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
	IApplication application = excelEngine.Excel;
	application.DefaultVersion = ExcelVersion.Xlsx;
	IWorkbook workbook = application.Workbooks.Open(Path.GetFullPath(@"Data/InputTemplate.xlsx"));
	IWorksheet sheet = workbook.Worksheets[0];
	IChartShape chart = sheet.Charts[0];

	//Format Plot Area
	IChartFrameFormat chartPlotArea = chart.PlotArea;

	//Set the border
	chartPlotArea.Border.LinePattern = ExcelChartLinePattern.Solid;
	chartPlotArea.Border.LineColor = Color.Blue;
	chartPlotArea.Border.LineWeight = ExcelChartLineWeight.Hairline;

	//Set the color.
	chartPlotArea.Fill.FillType = ExcelFillType.Gradient;
	chartPlotArea.Fill.GradientColorType = ExcelGradientColor.TwoColor;
	chartPlotArea.Fill.BackColor = Color.FromArgb(205, 217, 234);
	chartPlotArea.Fill.ForeColor = Color.White;

	//Set the position
	chartPlotArea.Layout.Left = 5;

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
  IWorksheet sheet = workbook.Worksheets[0];
  IChartShape chart = sheet.Charts[0];

  //Format Plot Area
  IChartFrameFormat chartPlotArea = chart.PlotArea;

  //Set the border
  chartPlotArea.Border.LinePattern = ExcelChartLinePattern.Solid;
  chartPlotArea.Border.LineColor = Color.Blue;
  chartPlotArea.Border.LineWeight = ExcelChartLineWeight.Hairline;

  //Set the color
  chartPlotArea.Fill.FillType = ExcelFillType.Gradient;
  chartPlotArea.Fill.GradientColorType = ExcelGradientColor.TwoColor;
  chartPlotArea.Fill.BackColor = Color.FromArgb(205, 217, 234);
  chartPlotArea.Fill.ForeColor = Color.White;

  //Set the position
  chartPlotArea.Layout.Left = 5;

  //Saving the workbook
  workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As ExcelEngine = New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  application.DefaultVersion = ExcelVersion.Xlsx
  Dim workbook As IWorkbook = application.Workbooks.Open("InputTemplate.xlsx")
  Dim sheet As IWorksheet = workbook.Worksheets(0)
  Dim chart As IChartShape = sheet.Charts(0)

  'Format Plot Area
  Dim chartPlotArea As IChartFrameFormat = chart.PlotArea

  'Set the border
  chartPlotArea.Border.LinePattern = ExcelChartLinePattern.Solid
  chartPlotArea.Border.LineColor = Color.Blue
  chartPlotArea.Border.LineWeight = ExcelChartLineWeight.Hairline

  'Set the color
  chartPlotArea.Fill.FillType = ExcelFillType.Gradient
  chartPlotArea.Fill.GradientColorType = ExcelGradientColor.TwoColor
  chartPlotArea.Fill.BackColor = Color.FromArgb(205, 217, 234)
  chartPlotArea.Fill.ForeColor = Color.White

  'Set the position
  chartPlotArea.Layout.Left = 5

  'Saving the workbook
  workbook.SaveAs("Output.xlsx")
End Using
{% endhighlight %}
{% endtabs %}

A complete working example for the chart plot area in C# is present on [this GitHub page](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Create%20and%20Edit%20Charts/Plot%20Area/.NET/Plot%20Area).
