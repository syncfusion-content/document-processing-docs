---
title: Chart Area | Excel library | Syncfusion
description: In this section, you can learn about chart area in an Excel document using Syncfusion .NET Excel library.
platform: document-processing
control: XlsIO
documentation: UG
---

# Chart Area in Excel document

Chart area refers to the space that contains the entire chart or graph within a document. It includes all elements of the chart, such as data points, labels, axes, and the plot area. Using XlsIO, you **can customize various aspects of the chart area in the chart**.

## Formatting

### Border

The following code snippet illustrates how to format the border of the chart area.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
//Format Chart Area
IChartFrameFormat chartArea = chart.ChartArea;

//Set the border
chartArea.Border.LinePattern = ExcelChartLinePattern.Solid;
chartArea.Border.LineColor = Color.Blue;
chartArea.Border.LineWeight = ExcelChartLineWeight.Hairline;
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Format Chart Area
IChartFrameFormat chartArea = chart.ChartArea;

//Set the border
chartArea.Border.LinePattern = ExcelChartLinePattern.Solid;
chartArea.Border.LineColor = Color.Blue;
chartArea.Border.LineWeight = ExcelChartLineWeight.Hairline;
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Format Chart Area
IChartFrameFormat chartArea = chart.ChartArea

'Set the border
chartArea.Border.LinePattern = ExcelChartLinePattern.Solid
chartArea.Border.LineColor = Color.Blue
chartArea.Border.LineWeight = ExcelChartLineWeight.Hairline
{% endhighlight %}
{% endtabs %}

### Color

The following code snippet illustrates how to format the color of the chart area.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
//Set the color
chartArea.Fill.FillType = ExcelFillType.Gradient;
chartArea.Fill.GradientColorType = ExcelGradientColor.TwoColor;
chartArea.Fill.BackColor = Color.FromArgb(205, 217, 234);
chartArea.Fill.ForeColor = Color.White;
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Set the color
chartArea.Fill.FillType = ExcelFillType.Gradient;
chartArea.Fill.GradientColorType = ExcelGradientColor.TwoColor;
chartArea.Fill.BackColor = Color.FromArgb(205, 217, 234);
chartArea.Fill.ForeColor = Color.White;
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Set the color
chartArea.Fill.FillType = ExcelFillType.Gradient
chartArea.Fill.GradientColorType = ExcelGradientColor.TwoColor
chartArea.Fill.BackColor = Color.FromArgb(205, 217, 234)
chartArea.Fill.ForeColor = Color.White
{% endhighlight %}
{% endtabs %}

The complete code snippet illustrating the above options is shown below.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/Create%20and%20Edit%20Charts/Chart%20Area/.NET/Chart%20Area/Chart%20Area/Program.cs,180" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
	IApplication application = excelEngine.Excel;
	application.DefaultVersion = ExcelVersion.Xlsx;
	IWorkbook workbook = application.Workbooks.Open(Path.GetFullPath(@"Data/InputTemplate.xlsx"));
	IWorksheet sheet = workbook.Worksheets[0];
	IChartShape chart = sheet.Charts[0];

	//Format Chart Area
	IChartFrameFormat chartArea = chart.ChartArea;

	//Set the border
	chartArea.Border.LinePattern = ExcelChartLinePattern.Solid;
	chartArea.Border.LineColor = Color.Blue;
	chartArea.Border.LineWeight = ExcelChartLineWeight.Hairline;

	//Set the color
	chartArea.Fill.FillType = ExcelFillType.Gradient;
	chartArea.Fill.GradientColorType = ExcelGradientColor.TwoColor;
	chartArea.Fill.BackColor = Color.FromArgb(205, 217, 234);
	chartArea.Fill.ForeColor = Color.White;

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

  //Format Chart Area
  IChartFrameFormat chartArea = chart.ChartArea;

  //Set the border
  chartArea.Border.LinePattern = ExcelChartLinePattern.Solid;
  chartArea.Border.LineColor = Color.Blue;
  chartArea.Border.LineWeight = ExcelChartLineWeight.Hairline;

  //Set the color
  chartArea.Fill.FillType = ExcelFillType.Gradient;
  chartArea.Fill.GradientColorType = ExcelGradientColor.TwoColor;
  chartArea.Fill.BackColor = Color.FromArgb(205, 217, 234);
  chartArea.Fill.ForeColor = Color.White;

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

  'Format Chart Area
  Dim chartArea As IChartFrameFormat = chart.ChartArea

  'Set the border
  chartArea.Border.LinePattern = ExcelChartLinePattern.Solid
  chartArea.Border.LineColor = Color.Blue
  chartArea.Border.LineWeight = ExcelChartLineWeight.Hairline

  'Set the color
  chartArea.Fill.FillType = ExcelFillType.Gradient
  chartArea.Fill.GradientColorType = ExcelGradientColor.TwoColor
  chartArea.Fill.BackColor = Color.FromArgb(205, 217, 234)
  chartArea.Fill.ForeColor = Color.White

  'Saving the workbook
  workbook.SaveAs("Output.xlsx")
End Using
{% endhighlight %}
{% endtabs %}

A complete working example for the chart area in C# is present on [this GitHub page](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Create%20and%20Edit%20Charts/Chart%20Area/.NET/Chart%20Area).

### Transparency

The following code snippet illustrates how to apply transparency in the chart area.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
//Set the transparency
chartArea.Fill.Transparency = 0.5;
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Set the transparency
chartArea.Fill.Transparency = 0.5;
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Set the transparency
chartArea.Fill.Transparency = 0.5
{% endhighlight %}
{% endtabs %}

N> [Transparency](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IFill.html#Syncfusion_XlsIO_IFill_Transparency) is only applicable when [FillType](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IFill.html#Syncfusion_XlsIO_IFill_FillType) is set as SolidColor. Color-shaded fill is represented as a floating-point value ranging from 0.0 (Clear) to 1.0 (Opaque).