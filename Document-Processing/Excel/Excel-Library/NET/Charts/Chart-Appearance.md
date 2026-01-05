---
title: Chart Appearance | Excel library | Syncfusion
description: In this section, you can learn about the appearance of charts in an Excel document using Syncfusion .NET Excel library.
platform: document-processing
control: XlsIO
documentation: UG
---

# Chart Appearance in Excel document

Chart appearance refers to the customization of visual elements within charts in Excel documents. Using XlsIO, you can **customize the chart appearance**.

## Fill Settings

### Solid Fill

The following code example illustrates how to apply a solid color to the chart area, plot area, and data series of the chart.

{% tabs %}  
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/Create%20and%20Edit%20Charts/Solid%20Fill/.NET/Solid%20Fill/Solid%20Fill/Program.cs,180" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
	IApplication application = excelEngine.Excel;
	application.DefaultVersion = ExcelVersion.Xlsx;
	IWorkbook workbook = application.Workbooks.Open(Path.GetFullPath(@"Data/InputTemplate.xlsx"));
	IWorksheet worksheet = workbook.Worksheets[0];
	IChart chart = worksheet.Charts[0];
	
	//Get data series
	IChartSerie serie1 = chart.Series[0];
	IChartSerie serie2 = chart.Series[1];

	//Set solid fill to chart area
	IChartFrameFormat chartArea = chart.ChartArea;
	chartArea.Fill.FillType = ExcelFillType.SolidColor;
	chartArea.Fill.ForeColor = Color.FromArgb(208,206,206);

	//Set solid fill to plot area
	IChartFrameFormat plotArea = chart.PlotArea;
	plotArea.Fill.FillType = ExcelFillType.SolidColor;
	plotArea.Fill.ForeColor = Color.FromArgb(208, 206, 206);

	//Set solid fill to series
	ChartFillImpl chartFillImpl1 = serie1.SerieFormat.Fill as ChartFillImpl;
	chartFillImpl1.FillType = ExcelFillType.SolidColor;
	chartFillImpl1.ForeColor = Color.FromArgb(255, 192, 203);

	ChartFillImpl chartFillImpl2 = serie2.SerieFormat.Fill as ChartFillImpl;
	chartFillImpl2.FillType = ExcelFillType.SolidColor;
	chartFillImpl2.ForeColor = Color.FromArgb(143, 170, 220); ;

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
  IChart chart = worksheet.Charts[0];
    
  //Get data series
  IChartSerie serie1 = chart.Series[0];
  IChartSerie serie2 = chart.Series[1];

  //Set solid fill to chart area
  IChartFrameFormat chartArea = chart.ChartArea;
  chartArea.Fill.FillType = ExcelFillType.SolidColor;
  chartArea.Fill.ForeColor = Color.FromArgb(208,206,206);

  //Set solid fill to plot area
  IChartFrameFormat plotArea = chart.PlotArea;
  plotArea.Fill.FillType = ExcelFillType.SolidColor;
  plotArea.Fill.ForeColor = Color.FromArgb(208, 206, 206);

  //Set solid fill to series
  ChartFillImpl chartFillImpl1 = serie1.SerieFormat.Fill as ChartFillImpl;
  chartFillImpl1.FillType = ExcelFillType.SolidColor;
  chartFillImpl1.ForeColor = Color.FromArgb(255, 192, 203);
  //chartFillImpl1.ForeColor = Color.Beige;

  ChartFillImpl chartFillImpl2 = serie2.SerieFormat.Fill as ChartFillImpl;
  chartFillImpl2.FillType = ExcelFillType.SolidColor;
  chartFillImpl2.ForeColor = Color.FromArgb(143, 170, 220);

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
  Dim chart As IChart = worksheet.Charts(0)

  'Get data series
  Dim serie1 As IChartSerie = chart.Series(0)
  Dim serie2 As IChartSerie = chart.Series(1)

  'Set solid fill to chart area
  Dim chartArea As IChartFrameFormat = chart.ChartArea
  chartArea.Fill.FillType = ExcelFillType.SolidColor
  chartArea.Fill.ForeColor = Color.FromArgb(208, 206, 206)

  'Set solid fill to plot area
  Dim plotArea As IChartFrameFormat = chart.PlotArea
  plotArea.Fill.FillType = ExcelFillType.SolidColor
  plotArea.Fill.ForeColor = Color.FromArgb(208, 206, 206)

  'Set solid fill to series
  Dim chartFillImpl1 As ChartFillImpl = TryCast(serie1.SerieFormat.Fill, ChartFillImpl)
  chartFillImpl1.FillType = ExcelFillType.SolidColor
  chartFillImpl1.ForeColor = Color.FromArgb(255, 192, 203)

  Dim chartFillImpl2 As ChartFillImpl = TryCast(serie2.SerieFormat.Fill, ChartFillImpl)
  chartFillImpl2.FillType = ExcelFillType.SolidColor
  chartFillImpl2.ForeColor = Color.FromArgb(143, 170, 220)

  'Saving the workbook
  workbook.SaveAs("Output.xlsx")
End Using
{% endhighlight %}
{% endtabs %} 

A complete working example to apply a solid fill in C# is present on [this GitHub page](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Create%20and%20Edit%20Charts/Solid%20Fill/.NET/Solid%20Fill).

### Pattern Fill

The following code example illustrates how to apply a pattern fill to the chart area, plot area, and data series of the chart.

{% tabs %}  
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/Create%20and%20Edit%20Charts/Pattern%20Fill/.NET/Pattern%20Fill/Pattern%20Fill/Program.cs,180" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
	IApplication application = excelEngine.Excel;
	application.DefaultVersion = ExcelVersion.Xlsx;
	IWorkbook workbook = application.Workbooks.Open(Path.GetFullPath(@"Data/InputTemplate.xlsx"), ExcelOpenType.Automatic);
	IWorksheet worksheet = workbook.Worksheets[0];
	IChart chart = worksheet.Charts[0];

	//Get data series
	IChartSerie serie1 = chart.Series[0];
	IChartSerie serie2 = chart.Series[1];

	//Set pattern fill to chart area
	IChartFrameFormat chartArea = chart.ChartArea;
	chartArea.Fill.FillType = ExcelFillType.Pattern;
	chartArea.Fill.BackColor = Color.Pink;
	chartArea.Fill.ForeColor = Color.White;
	chartArea.Fill.Pattern = ExcelGradientPattern.Pat_90_Percent;

	//Set pattern fill to plot area
	IChartFrameFormat plotArea = chart.PlotArea;
	plotArea.Fill.FillType = ExcelFillType.Pattern;
	plotArea.Fill.BackColor = Color.Pink;
	plotArea.Fill.ForeColor = Color.White;
	plotArea.Fill.Pattern = ExcelGradientPattern.Pat_90_Percent;

	//Set pattern fill to series
	ChartFillImpl chartFillImpl1 = serie1.SerieFormat.Fill as ChartFillImpl;
	chartFillImpl1.FillType = ExcelFillType.Pattern;
	chartFillImpl1.BackColor = Color.Pink;
	chartFillImpl1.ForeColor = Color.White;
	chartFillImpl1.Pattern = ExcelGradientPattern.Pat_5_Percent;

	ChartFillImpl chartFillImpl2 = serie2.SerieFormat.Fill as ChartFillImpl;
	chartFillImpl2.FillType = ExcelFillType.Pattern;
	chartFillImpl2.BackColor = Color.Gray;
	chartFillImpl2.ForeColor = Color.White;
	chartFillImpl2.Pattern = ExcelGradientPattern.Pat_5_Percent;

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
  IChart chart = worksheet.Charts[0];
    
  //Get data series
  IChartSerie serie1 = chart.Series[0];
  IChartSerie serie2 = chart.Series[1];

  //Set pattern fill to chart area
  IChartFrameFormat chartArea = chart.ChartArea;
  chartArea.Fill.FillType = ExcelFillType.Pattern;
  chartArea.Fill.BackColor = Color.Pink;
  chartArea.Fill.ForeColor = Color.White;
  chartArea.Fill.Pattern = ExcelGradientPattern.Pat_90_Percent;

  //Set pattern fill to plot area
  IChartFrameFormat plotArea = chart.PlotArea;
  plotArea.Fill.FillType = ExcelFillType.Pattern;
  plotArea.Fill.BackColor = Color.Pink;
  plotArea.Fill.ForeColor = Color.White;
  plotArea.Fill.Pattern = ExcelGradientPattern.Pat_90_Percent;

  //Set pattern fill to series
  ChartFillImpl chartFillImpl1 = serie1.SerieFormat.Fill as ChartFillImpl;
  chartFillImpl1.FillType = ExcelFillType.Pattern;
  chartFillImpl1.BackColor = Color.Pink;
  chartFillImpl1.ForeColor = Color.White;
  chartFillImpl1.Pattern = ExcelGradientPattern.Pat_5_Percent;

  ChartFillImpl chartFillImpl2 = serie2.SerieFormat.Fill as ChartFillImpl;
  chartFillImpl2.FillType = ExcelFillType.Pattern;
  chartFillImpl2.BackColor = Color.Gray;
  chartFillImpl2.ForeColor = Color.White;
  chartFillImpl2.Pattern = ExcelGradientPattern.Pat_5_Percent;

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
  Dim chart As IChart = worksheet.Charts(0)

  'Get data series
  Dim serie1 As IChartSerie = chart.Series(0)
  Dim serie2 As IChartSerie = chart.Series(1)

  'Set pattern fill to chart area
  Dim chartArea As IChartFrameFormat = chart.ChartArea
  chartArea.Fill.FillType = ExcelFillType.Pattern
  chartArea.Fill.BackColor = Color.Pink
  chartArea.Fill.ForeColor = Color.White
  chartArea.Fill.Pattern = ExcelGradientPattern.Pat_90_Percent

  'Set pattern fill to plot area
  Dim plotArea As IChartFrameFormat = chart.PlotArea
  plotArea.Fill.FillType = ExcelFillType.Pattern
  plotArea.Fill.BackColor = Color.Pink
  plotArea.Fill.ForeColor = Color.White
  plotArea.Fill.Pattern = ExcelGradientPattern.Pat_90_Percent

  'Set pattern fill to series
  Dim chartFillImpl1 As ChartFillImpl = TryCast(serie1.SerieFormat.Fill, ChartFillImpl)
  chartFillImpl1.FillType = ExcelFillType.Pattern
  chartFillImpl1.BackColor = Color.Pink
  chartFillImpl1.ForeColor = Color.White
  chartFillImpl1.Pattern = ExcelGradientPattern.Pat_5_Percent

  Dim chartFillImpl2 As ChartFillImpl = TryCast(serie2.SerieFormat.Fill, ChartFillImpl)
  chartFillImpl2.FillType = ExcelFillType.Pattern
  chartFillImpl2.BackColor = Color.Gray
  chartFillImpl2.ForeColor = Color.White
  chartFillImpl2.Pattern = ExcelGradientPattern.Pat_5_Percent

  'Saving the workbook
  workbook.SaveAs("Output.xlsx")
End Using
{% endhighlight %}
{% endtabs %} 

A complete working example to apply a pattern fill in C# is present on [this GitHub page](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Create%20and%20Edit%20Charts/Pattern%20Fill/.NET/Pattern%20Fill).

### Gradient Fill

The following code example illustrates how to apply a gradient fill to the chart area, plot area, and data series of the chart.

{% tabs %}  
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/Create%20and%20Edit%20Charts/Gradient%20Fill/.NET/Gradient%20Fill/Gradient%20Fill/Program.cs,180" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
	IApplication application = excelEngine.Excel;
	application.DefaultVersion = ExcelVersion.Xlsx;
	IWorkbook workbook = application.Workbooks.Open(Path.GetFullPath(@"Data/InputTemplate.xlsx"), ExcelOpenType.Automatic);
	IWorksheet worksheet = workbook.Worksheets[0];
	IChart chart = worksheet.Charts[0];

	//Get data serie
	IChartSerie serie1 = chart.Series[0];
	IChartSerie serie2 = chart.Series[1];

	//Set gradient fill to chart area
	IChartFrameFormat chartArea = chart.ChartArea;
	chartArea.Fill.FillType = ExcelFillType.Gradient;                
	chartArea.Fill.BackColor = Color.FromArgb(205, 217, 234);
	chartArea.Fill.ForeColor = Color.White;

	//Set gradient fill to plot area
	IChartFrameFormat plotArea = chart.PlotArea;
	plotArea.Fill.FillType = ExcelFillType.Gradient;
	plotArea.Fill.BackColor = Color.FromArgb(205, 217, 234);
	plotArea.Fill.ForeColor = Color.White;

	//Set Gradient fill to series
	ChartFillImpl chartFillImpl1 = serie1.SerieFormat.Fill as ChartFillImpl;
	chartFillImpl1.FillType = ExcelFillType.Gradient;
	chartFillImpl1.GradientColorType = ExcelGradientColor.MultiColor;
	serie1.SerieFormat.Fill.GradientStyle = ExcelGradientStyle.Horizontal;
	GradientStopImpl gradientStopImpl1 = new GradientStopImpl(new ColorObject(Color.FromArgb(0, 176, 240)), 50000, 100000);
	GradientStopImpl gradientStopImpl2 = new GradientStopImpl(new ColorObject(Color.FromArgb(0, 112, 192)), 70000, 100000);
	chartFillImpl1.GradientStops.GradientType = GradientType.Liniar;
	chartFillImpl1.GradientStops.Add(gradientStopImpl1);
	chartFillImpl1.GradientStops.Add(gradientStopImpl2);

	ChartFillImpl chartFillImpl2 = serie2.SerieFormat.Fill as ChartFillImpl;
	chartFillImpl2.FillType = ExcelFillType.Gradient;
	chartFillImpl2.GradientColorType = ExcelGradientColor.MultiColor;
	serie2.SerieFormat.Fill.GradientStyle = ExcelGradientStyle.Horizontal;
	GradientStopImpl gradientStopImpl3 = new GradientStopImpl(new ColorObject(Color.FromArgb(244, 177, 131)), 40000, 100000);
	GradientStopImpl gradientStopImpl4 = new GradientStopImpl(new ColorObject(Color.FromArgb(255, 102, 0)), 70000, 100000);
	chartFillImpl2.GradientStops.GradientType = GradientType.Liniar;
	chartFillImpl2.GradientStops.Add(gradientStopImpl3);
	chartFillImpl2.GradientStops.Add(gradientStopImpl4);

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
  IChart chart = worksheet.Charts[0];
    
  //Get data series
  IChartSerie serie1 = chart.Series[0];
  IChartSerie serie2 = chart.Series[1];

  //Set gradient fill to chart area
  IChartFrameFormat chartArea = chart.ChartArea;
  chartArea.Fill.FillType = ExcelFillType.Gradient;                
  chartArea.Fill.BackColor = Color.FromArgb(205, 217, 234);
  chartArea.Fill.ForeColor = Color.White;

  //Set gradient fill to plot area
  IChartFrameFormat plotArea = chart.PlotArea;
  plotArea.Fill.FillType = ExcelFillType.Gradient;
  plotArea.Fill.BackColor = Color.FromArgb(205, 217, 234);
  plotArea.Fill.ForeColor = Color.White;

  //Set Gradient fill to series
  ChartFillImpl chartFillImpl1 = serie1.SerieFormat.Fill as ChartFillImpl;
  chartFillImpl1.FillType = ExcelFillType.Gradient;
  chartFillImpl1.GradientColorType = ExcelGradientColor.MultiColor;
  serie1.SerieFormat.Fill.GradientStyle = ExcelGradientStyle.Horizontal;
  GradientStopImpl gradientStopImpl1 = new GradientStopImpl(new ColorObject(Color.FromArgb(0, 176, 240)), 50000, 100000);
  GradientStopImpl gradientStopImpl2 = new GradientStopImpl(new ColorObject(Color.FromArgb(0, 112, 192)), 70000, 100000);
  chartFillImpl1.GradientStops.GradientType = GradientType.Liniar;
  chartFillImpl1.GradientStops.Add(gradientStopImpl1);
  chartFillImpl1.GradientStops.Add(gradientStopImpl2);

  ChartFillImpl chartFillImpl2 = serie2.SerieFormat.Fill as ChartFillImpl;
  chartFillImpl2.FillType = ExcelFillType.Gradient;
  chartFillImpl2.GradientColorType = ExcelGradientColor.MultiColor;
  serie2.SerieFormat.Fill.GradientStyle = ExcelGradientStyle.Horizontal;
  GradientStopImpl gradientStopImpl3 = new GradientStopImpl(new ColorObject(Color.FromArgb(244, 177, 131)), 40000, 100000);
  GradientStopImpl gradientStopImpl4 = new GradientStopImpl(new ColorObject(Color.FromArgb(255, 102, 0)), 70000, 100000);
  chartFillImpl2.GradientStops.GradientType = GradientType.Liniar;
  chartFillImpl2.GradientStops.Add(gradientStopImpl3);
  chartFillImpl2.GradientStops.Add(gradientStopImpl4);

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
  Dim chart As IChart = worksheet.Charts(0)

  'Get data series
  Dim serie1 As IChartSerie = chart.Series(0)
  Dim serie2 As IChartSerie = chart.Series(1)

  'Set gradient fill to chart area
  Dim chartArea As IChartFrameFormat = chart.ChartArea
  chartArea.Fill.FillType = ExcelFillType.Gradient
  chartArea.Fill.BackColor = Color.FromArgb(205, 217, 234)
  chartArea.Fill.ForeColor = Color.White

  'Set gradient fill to plot area
  Dim plotArea As IChartFrameFormat = chart.PlotArea
  plotArea.Fill.FillType = ExcelFillType.Gradient
  plotArea.Fill.BackColor = Color.FromArgb(205, 217, 234)
  plotArea.Fill.ForeColor = Color.White

  'Set Gradient fill to series
  Dim chartFillImpl1 As ChartFillImpl = TryCast(serie1.SerieFormat.Fill, ChartFillImpl)
  chartFillImpl1.FillType = ExcelFillType.Gradient
  chartFillImpl1.GradientColorType = ExcelGradientColor.MultiColor
  serie1.SerieFormat.Fill.GradientStyle = ExcelGradientStyle.Horizontal
  Dim gradientStopImpl1 As New GradientStopImpl(New ColorObject(Color.FromArgb(0, 176, 240)), 50000, 100000)
  Dim gradientStopImpl2 As New GradientStopImpl(New ColorObject(Color.FromArgb(0, 112, 192)), 70000, 100000)
  chartFillImpl1.GradientStops.GradientType = GradientType.Linear
  chartFillImpl1.GradientStops.Add(gradientStopImpl1)
  chartFillImpl1.GradientStops.Add(gradientStopImpl2)

  Dim chartFillImpl2 As ChartFillImpl = TryCast(serie2.SerieFormat.Fill, ChartFillImpl)
  chartFillImpl2.FillType = ExcelFillType.Gradient
  chartFillImpl2.GradientColorType = ExcelGradientColor.MultiColor
  serie2.SerieFormat.Fill.GradientStyle = ExcelGradientStyle.Horizontal
  Dim gradientStopImpl3 As New GradientStopImpl(New ColorObject(Color.FromArgb(244, 177, 131)), 40000, 100000)
  Dim gradientStopImpl4 As New GradientStopImpl(New ColorObject(Color.FromArgb(255, 102, 0)), 70000, 100000)
  chartFillImpl2.GradientStops.GradientType = GradientType.Linear
  chartFillImpl2.GradientStops.Add(gradientStopImpl3)
  chartFillImpl2.GradientStops.Add(gradientStopImpl4)

  'Saving the workbook
  workbook.SaveAs("Output.xlsx")
End Using
{% endhighlight %}
{% endtabs %} 

A complete working example to apply a gradient fill in C# is present on [this GitHub page](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Create%20and%20Edit%20Charts/Gradient%20Fill/.NET/Gradient%20Fill).

### Picture Fill
The following code example illustrates how to apply a picture fill to the chart area, plot area, and data series of the chart.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/Create%20and%20Edit%20Charts/Picture%20Fill/.NET/Picture%20Fill/Picture%20Fill/Program.cs,180" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
	IApplication application = excelEngine.Excel;
	application.DefaultVersion = ExcelVersion.Xlsx;
	IWorkbook workbook = application.Workbooks.Open(Path.GetFullPath(@"Data/InputTemplate.xlsx"));
	IWorksheet worksheet = workbook.Worksheets[0];
	IChart chart = worksheet.Charts[0];

	//Get data series
	IChartSerie serie1 = chart.Series[0];
	IChartSerie serie2 = chart.Series[1];

	//Getting an image from the stream
	FileStream imageStream1 = new FileStream(Path.GetFullPath(@"Data/Image1.jpg"), FileMode.Open, FileAccess.Read);
	Image image1 = Image.FromStream(imageStream1);
	FileStream imageStream2 = new FileStream(Path.GetFullPath(@"Data/Image2.jpg"), FileMode.Open, FileAccess.Read);
	Image image2 = Image.FromStream(imageStream2);

	//Set picture fill to chart area
	chart.ChartArea.Fill.UserPicture(image1, "Image");

  //Setting offset to chart area fill picture
  Rectangle chartarea = Rectangle.FromLTRB(5000, 6000, 7000, 8000);
  (chart.ChartArea.Fill as ShapeFillImpl).FillRect = chartarea;

	//Set picture fill to plot area
	chart.PlotArea.Fill.UserPicture(image1, "Image");

  //Setting offset to plot area fill picture
  Rectangle plotarea = Rectangle.FromLTRB(5000, 6000, 7000, 8000);
  (chart.PlotArea.Fill as ShapeFillImpl).FillRect = plotarea;

	//Set picture fill to series
	serie1.SerieFormat.Fill.UserPicture(image2, "Image");
	serie2.SerieFormat.Fill.UserPicture(image2, "Image");

	//Saving the workbook
	workbook.SaveAs(Path.GetFullPath("Output/Output.xlsx"));

	//Dispose streams
	imageStream1.Dispose();
	imageStream2.Dispose();
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Xlsx;
  IWorkbook workbook = application.Workbooks.Open("Sample.xlsx");
  IWorksheet worksheet = workbook.Worksheets[0];
  IChart chart = worksheet.Charts[0];

  //Get data series
  IChartSerie serie1 = chart.Series[0];
  IChartSerie serie2 = chart.Series[1];

  //Set picture fill to chart area
  chart.ChartArea.Fill.UserPicture("Image1.png");

  //Setting offset to chart area Fill picture
  Rectangle chartarea = Rectangle.FromLTRB(5000, 6000, 7000, 8000);
  (chart.ChartArea.Fill as ShapeFillImpl).FillRect = chartarea;

  //Set picture fill to plot area
  chart.PlotArea.Fill.UserPicture("Image1.png");

  //Setting offset to plot area Fill picture
  Rectangle plotarea = Rectangle.FromLTRB(5000, 6000, 7000, 8000);
  (chart.PlotArea.Fill as ShapeFillImpl).FillRect = plotarea;

  //Set picture fill to series
  serie1.SerieFormat.Fill.UserPicture("Image2.png");
  serie2.SerieFormat.Fill.UserPicture("Image2.png");

  workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  application.DefaultVersion = ExcelVersion.Xlsx
  Dim workbook As IWorkbook = application.Workbooks.Open("Sample.xlsx")
  Dim worksheet As IWorksheet = workbook.Worksheets(0)
  Dim chart As IChart = worksheet.Charts(0)

  'Get data series
  Dim serie1 As IChartSerie = chart.Series(0)
  Dim serie2 As IChartSerie = chart.Series(1)

  'Set picture fill to chart area
  chart.ChartArea.Fill.UserPicture("Image1.png")

  'Setting offset to chart area Fill picture
  Dim chartarea As Rectangle = Rectangle.FromLTRB(5000, 6000, 7000, 8000)
  DirectCast(chart.ChartArea.Fill, ShapeFillImpl).FillRect = chartarea

  'Set picture fill to plot area
  chart.PlotArea.Fill.UserPicture("Image1.png")

  'Setting offset to plot area Fill picture
  Dim plotarea As Rectangle = Rectangle.FromLTRB(5000, 6000, 7000, 8000)
  DirectCast(chart.PlotArea.Fill, ShapeFillImpl).FillRect = plotarea

  'Set picture fill to series
  serie1.SerieFormat.Fill.UserPicture("Image2.png")
  serie2.SerieFormat.Fill.UserPicture("Image2.png")

  workbook.SaveAs("Output.xlsx")
End Using
{% endhighlight %}
{% endtabs %}

A complete working example to apply a picture fill in C# is present on [this GitHub page](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Create%20and%20Edit%20Charts/Picture%20Fill/.NET/Picture%20Fill).

### No Fill

The following code example illustrates how to apply a no fill to the chart area, plot area, and data series of the chart.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/Create%20and%20Edit%20Charts/No%20Fill/.NET/No%20Fill/No%20Fill/Program.cs,180" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
	IApplication application = excelEngine.Excel;
	application.DefaultVersion = ExcelVersion.Xlsx;
	IWorkbook workbook = application.Workbooks.Open(Path.GetFullPath(@"Data/InputTemplate.xlsx"), ExcelOpenType.Automatic);
	IWorksheet worksheet = workbook.Worksheets[0];
	IChart chart = worksheet.Charts[0];

	//Get data series
	IChartSerie serie1 = chart.Series[0];
	IChartSerie serie2 = chart.Series[1];

	//Set no fill to chart area
	IChartFrameFormat chartArea = chart.ChartArea;
	chartArea.Fill.Visible = false;

	//Set no fill to plot area
	IChartFrameFormat plotArea = chart.PlotArea;
	plotArea.Fill.Visible = false;

	//Set no fill to series
	serie1.SerieFormat.Fill.Visible = false;

	//Saving the workbook 
	workbook.SaveAs(Path.GetFullPath("Output/Output.xlsx"));
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Xlsx;
  IWorkbook workbook = application.Workbooks.Open("Sample.xlsx");
  IWorksheet worksheet = workbook.Worksheets[0];
  IChart chart = worksheet.Charts[0];

  //Get data series
  IChartSerie serie1 = chart.Series[0];
  IChartSerie serie2 = chart.Series[1];

  //Set no fill to chart area
  IChartFrameFormat chartArea = chart.ChartArea;
  chartArea.Fill.Visible = false;

  //Set no fill to plot area
  IChartFrameFormat plotArea = chart.PlotArea;
  plotArea.Fill.Visible = false;

  //Set no fill to series
  serie1.SerieFormat.Fill.Visible = false;

  //Saving the workbook
  workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  application.DefaultVersion = ExcelVersion.Xlsx
  Dim workbook As IWorkbook = application.Workbooks.Open("Sample.xlsx")
  Dim worksheet As IWorksheet = workbook.Worksheets(0)
  Dim chart As IChart = worksheet.Charts(0)

  'Get data series
  Dim serie1 As IChartSerie = chart.Series(0)
  Dim serie2 As IChartSerie = chart.Series(1)

  'Set no fill to chart area
  Dim chartArea As IChartFrameFormat = chart.ChartArea
  chartArea.Fill.Visible = False

  'Set no fill to plot area
  Dim plotArea As IChartFrameFormat = chart.PlotArea
  plotArea.Fill.Visible = False

  'Set no fill to series
  serie1.SerieFormat.Fill.Visible = False

  'Saving the workbook
  workbook.SaveAs("Output.xlsx")
End Using
{% endhighlight %}
{% endtabs %}

A complete working example to apply a no fill in C# is present on [this GitHub page](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Create%20and%20Edit%20Charts/No%20Fill/.NET/No%20Fill).

## Layout and Resizing Chart Elements

### Layout

The following code snippet illustrates how to set the layout for chart elements such as the plot area and legend.

{% tabs %}  
{% highlight c# tabtitle="C# [Cross-platform]" %}
//Manually positioning chart plot area using Layout
chart.PlotArea.Layout.LayoutTarget = LayoutTargets.inner;
chart.PlotArea.Layout.LeftMode = LayoutModes.edge;
chart.PlotArea.Layout.TopMode = LayoutModes.edge;

//Manually positioning chart plot area using Manual Layout
chart.PlotArea.Layout.ManualLayout.LayoutTarget = LayoutTargets.inner;
chart.PlotArea.Layout.ManualLayout.LeftMode = LayoutModes.edge;
chart.PlotArea.Layout.ManualLayout.TopMode = LayoutModes.edge;

//Manually positioning chart legend area using Layout
chart.Legend.Layout.LeftMode = LayoutModes.edge;
chart.Legend.Layout.TopMode = LayoutModes.edge;

//Manually positioning chart legend area using Manual Layout
chart.Legend.Layout.ManualLayout.LeftMode = LayoutModes.edge;
chart.Legend.Layout.ManualLayout.TopMode = LayoutModes.edge;
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Manually positioning chart plot area using Layout
chart.PlotArea.Layout.LayoutTarget = LayoutTargets.inner;
chart.PlotArea.Layout.LeftMode = LayoutModes.edge;
chart.PlotArea.Layout.TopMode = LayoutModes.edge;

//Manually positioning chart plot area using Manual Layout
chart.PlotArea.Layout.ManualLayout.LayoutTarget = LayoutTargets.inner;
chart.PlotArea.Layout.ManualLayout.LeftMode = LayoutModes.edge;
chart.PlotArea.Layout.ManualLayout.TopMode = LayoutModes.edge;

//Manually positioning chart legend area using Layout
chart.Legend.Layout.LeftMode = LayoutModes.edge;
chart.Legend.Layout.TopMode = LayoutModes.edge;

//Manually positioning chart legend area using Manual Layout
chart.Legend.Layout.ManualLayout.LeftMode = LayoutModes.edge;
chart.Legend.Layout.ManualLayout.TopMode = LayoutModes.edge;
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Manually positioning chart plot area using Layout
chart.PlotArea.Layout.LayoutTarget = LayoutTargets.inner
chart.PlotArea.Layout.LeftMode = LayoutModes.edge
chart.PlotArea.Layout.TopMode = LayoutModes.edge

'Manually positioning chart plot area using Manual Layout
chart.PlotArea.Layout.ManualLayout.LayoutTarget = LayoutTargets.inner
chart.PlotArea.Layout.ManualLayout.LeftMode = LayoutModes.edge
chart.PlotArea.Layout.ManualLayout.TopMode = LayoutModes.edge

'Manually positioning chart legend area using Layout
chart.Legend.Layout.LeftMode = LayoutModes.edge
chart.Legend.Layout.TopMode = LayoutModes.edge

'Manually positioning chart legend area using Manual Layout
chart.Legend.Layout.ManualLayout.LeftMode = LayoutModes.edge
chart.Legend.Layout.ManualLayout.TopMode = LayoutModes.edge
{% endhighlight %}
{% endtabs %} 

### Resizing

The following code snippet illustrates how to resize chart elements such as the plot area, legend, title area, axis area, and data labels.

{% tabs %}  
{% highlight c# tabtitle="C# [Cross-platform]" %}
//Manually resizing chart plot area using Layout
chart.PlotArea.Layout.Left = 70;
chart.PlotArea.Layout.Top = 40;
chart.PlotArea.Layout.Width = 280;
chart.PlotArea.Layout.Height = 200;

//Manually resizing chart plot area using Manual Layout
chart.PlotArea.Layout.ManualLayout.Height = 0.80;
chart.PlotArea.Layout.ManualLayout.Width = 0.65;
chart.PlotArea.Layout.ManualLayout.Top = 0.03;
chart.PlotArea.Layout.ManualLayout.Left = -0.1;

//Manually resizing chart legend area using Layout
chart.Legend.Layout.Left = 400;
chart.Legend.Layout.Top = 150;
chart.Legend.Layout.Width = 150;
chart.Legend.Layout.Height = 100;

//Manually resizing chart legend area using Manual Layout
chart.Legend.Layout.ManualLayout.Height = 0.09;
chart.Legend.Layout.ManualLayout.Width = 0.30;
chart.Legend.Layout.ManualLayout.Top = 0.36;
chart.Legend.Layout.ManualLayout.Left = 0.68;

//Manually resizing chart title area using Layout
chart.ChartTitleArea.Text = "Sample Chart";
chart.ChartTitleArea.Layout.Top = 10;
chart.ChartTitleArea.Layout.Left = 150;

//Manually resizing chart title area using Manual Layout
chart.ChartTitleArea.Text = "Sample Chart";
chart.ChartTitleArea.Layout.ManualLayout.Top = 0.005;
chart.ChartTitleArea.Layout.ManualLayout.Left = 0.26;

//Manually resizing axis title area using Layout
chart.PrimaryValueAxis.TitleArea.Layout.Left = 15;
chart.PrimaryValueAxis.TitleArea.Layout.Top = 20;
chart.PrimaryCategoryAxis.TitleArea.Layout.Left = 25;
chart.PrimaryCategoryAxis.TitleArea.Layout.Top = 20;

//Manually resizing axis title area using Manual Layout
chart.PrimaryValueAxis.TitleArea.Layout.ManualLayout.Left = 0.04;
chart.PrimaryValueAxis.TitleArea.Layout.ManualLayout.Top = 0.34;
chart.PrimaryCategoryAxis.TitleArea.Layout.ManualLayout.Left = 0.38;
chart.PrimaryCategoryAxis.TitleArea.Layout.ManualLayout.Top = 0.95;

//Manually resizing data label area using Layout
chart.Series[0].DataPoints[0].DataLabels.Layout.Left = 0.09;
chart.Series[0].DataPoints[0].DataLabels.Layout.Top = 0.01;

//Manually resizing data label area using Manual Layout
chart.Series[0].DataPoints[0].DataLabels.Layout.ManualLayout.Left = 0.09;
chart.Series[0].DataPoints[0].DataLabels.Layout.ManualLayout.Top = 0.01;
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Manually resizing chart plot area using Layout
chart.PlotArea.Layout.Left = 70;
chart.PlotArea.Layout.Top = 40;
chart.PlotArea.Layout.Width = 280;
chart.PlotArea.Layout.Height = 200;

//Manually resizing chart plot area using Manual Layout
chart.PlotArea.Layout.ManualLayout.Height = 0.80;
chart.PlotArea.Layout.ManualLayout.Width = 0.65;
chart.PlotArea.Layout.ManualLayout.Top = 0.03;
chart.PlotArea.Layout.ManualLayout.Left = -0.1;

//Manually resizing chart legend area using Layout
chart.Legend.Layout.Left = 400;
chart.Legend.Layout.Top = 150;
chart.Legend.Layout.Width = 150;
chart.Legend.Layout.Height = 100;

//Manually resizing chart legend area using Manual Layout
chart.Legend.Layout.ManualLayout.Height = 0.09;
chart.Legend.Layout.ManualLayout.Width = 0.30;
chart.Legend.Layout.ManualLayout.Top = 0.36;
chart.Legend.Layout.ManualLayout.Left = 0.68;

//Manually resizing chart title area using Layout
chart.ChartTitleArea.Text = "Sample Chart";
chart.ChartTitleArea.Layout.Top = 10;
chart.ChartTitleArea.Layout.Left = 150;

//Manually resizing chart title area using Manual Layout
chart.ChartTitleArea.Text = "Sample Chart";
chart.ChartTitleArea.Layout.ManualLayout.Top = 0.005;
chart.ChartTitleArea.Layout.ManualLayout.Left = 0.26;

//Manually resizing axis title area using Layout
chart.PrimaryValueAxis.TitleArea.Layout.Left = 15;
chart.PrimaryValueAxis.TitleArea.Layout.Top = 20;
chart.PrimaryCategoryAxis.TitleArea.Layout.Left = 25;
chart.PrimaryCategoryAxis.TitleArea.Layout.Top = 20;

//Manually resizing axis title area using Manual Layout
chart.PrimaryValueAxis.TitleArea.Layout.ManualLayout.Left = 0.04;
chart.PrimaryValueAxis.TitleArea.Layout.ManualLayout.Top = 0.34;
chart.PrimaryCategoryAxis.TitleArea.Layout.ManualLayout.Left = 0.38;
chart.PrimaryCategoryAxis.TitleArea.Layout.ManualLayout.Top = 0.95;

//Manually resizing data label area using Layout
chart.Series[0].DataPoints[0].DataLabels.Layout.Left = 0.09;
chart.Series[0].DataPoints[0].DataLabels.Layout.Top = 0.01;

//Manually resizing data label area using Manual Layout
chart.Series[0].DataPoints[0].DataLabels.Layout.ManualLayout.Left = 0.09;
chart.Series[0].DataPoints[0].DataLabels.Layout.ManualLayout.Top = 0.01;
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Manually resizing chart plot area using Layout
chart.PlotArea.Layout.Left = 70
chart.PlotArea.Layout.Top = 40
chart.PlotArea.Layout.Width = 280
chart.PlotArea.Layout.Height = 200

'Manually resizing chart plot area using Manual Layout
chart.PlotArea.Layout.ManualLayout.Height = 0.80
chart.PlotArea.Layout.ManualLayout.Width = 0.65
chart.PlotArea.Layout.ManualLayout.Top = 0.03
chart.PlotArea.Layout.ManualLayout.Left = -0.1

'Manually resizing chart legend area using Layout
chart.Legend.Layout.Left = 400
chart.Legend.Layout.Top = 150
chart.Legend.Layout.Width = 150
chart.Legend.Layout.Height = 100

'Manually resizing chart legend area using Manual Layout
chart.Legend.Layout.ManualLayout.Height = 0.09
chart.Legend.Layout.ManualLayout.Width = 0.30
chart.Legend.Layout.ManualLayout.Top = 0.36
chart.Legend.Layout.ManualLayout.Left = 0.68

'Manually resizing chart title area using Layout
chart.ChartTitleArea.Text = "Sample Chart"
chart.ChartTitleArea.Layout.Top = 10
chart.ChartTitleArea.Layout.Left = 150

'Manually resizing chart title area using Manual Layout
chart.ChartTitleArea.Text = "Sample Chart"
chart.ChartTitleArea.Layout.ManualLayout.Top = 0.005
chart.ChartTitleArea.Layout.ManualLayout.Left = 0.26

'Manually resizing axis title area using Layout
chart.PrimaryValueAxis.TitleArea.Layout.Left = 15
chart.PrimaryValueAxis.TitleArea.Layout.Top = 20
chart.PrimaryCategoryAxis.TitleArea.Layout.Left = 25
chart.PrimaryCategoryAxis.TitleArea.Layout.Top = 20

'Manually resizing axis title area using Manual Layout
chart.PrimaryValueAxis.TitleArea.Layout.ManualLayout.Left = 0.04
chart.PrimaryValueAxis.TitleArea.Layout.ManualLayout.Top = 0.34
chart.PrimaryCategoryAxis.TitleArea.Layout.ManualLayout.Left = 0.38
chart.PrimaryCategoryAxis.TitleArea.Layout.ManualLayout.Top = 0.95

'Manually resizing data label area using Layout
chart.Series(0).DataPoints(0).DataLabels.Layout.Left = 0.09
chart.Series(0).DataPoints(0).DataLabels.Layout.Top = 0.01

'Manually resizing data label area using Manual Layout
chart.Series(0).DataPoints(0).DataLabels.Layout.ManualLayout.Left = 0.09
chart.Series(0).DataPoints(0).DataLabels.Layout.ManualLayout.Top = 0.01
{% endhighlight %}
{% endtabs %} 

## Applying 3D Formats

The following code example illustrates how to apply 3D settings such as rotation, side wall, back wall, and floor settings.

{% tabs %}  
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/Create%20and%20Edit%20Charts/3D%20Chart/.NET/3D%20Chart/3D%20Chart/Program.cs,180" %}
 using (ExcelEngine excelEngine = new ExcelEngine())
{
	IApplication application = excelEngine.Excel;
	application.DefaultVersion = ExcelVersion.Xlsx;
	IWorkbook workbook = application.Workbooks.Create(2);
	IWorksheet sheet = workbook.Worksheets[0];

	//Insert the data in sheet-1
	sheet.Range["B1"].Text = "Product-A";
	sheet.Range["C1"].Text = "Product-B";
	sheet.Range["D1"].Text = "Product-C";
	sheet.Range["A2"].Text = "Jan";
	sheet.Range["A3"].Text = "Feb";
	sheet.Range["B2"].Number = 25;
	sheet.Range["B3"].Number = 20;
	sheet.Range["C2"].Number = 35;
	sheet.Range["C3"].Number = 25;
	sheet.Range["D2"].Number = 40;
	sheet.Range["D3"].Number = 55;

	IChartShape chart = sheet.Charts.Add();
	chart.DataRange = sheet.Range["A1:D3"];
	chart.ChartType = ExcelChartType.Column_Clustered_3D;

	//Set Rotation of the 3D chart view
	chart.Rotation = 90;

	//Set Back wall fill option
	chart.BackWall.Fill.FillType = ExcelFillType.Gradient;
	//Set Back wall thickness
	chart.BackWall.Thickness = 10;
	//Set Texture Type
	chart.BackWall.Fill.GradientColorType = ExcelGradientColor.TwoColor;
	chart.BackWall.Fill.GradientStyle = ExcelGradientStyle.Diagonl_Down;
	chart.BackWall.Fill.ForeColor = Color.WhiteSmoke;
	chart.BackWall.Fill.BackColor = Color.LightBlue;

	//Set side wall fill option
	chart.SideWall.Fill.FillType = ExcelFillType.SolidColor;
	//Set side wall fore and back color
	chart.SideWall.Fill.BackColor = Color.White;
	chart.SideWall.Fill.ForeColor = Color.White;

	//Set floor fill option
	chart.Floor.Fill.FillType = ExcelFillType.Pattern;
	chart.Floor.Fill.Pattern = ExcelGradientPattern.Pat_10_Percent;
	//Set floor fore and Back color
	chart.Floor.Fill.ForeColor = Color.Blue;
	chart.Floor.Fill.BackColor = Color.White;
	//Set floor thickness
	chart.Floor.Thickness = 3;

	#region Save
	//Saving the workbook
	workbook.SaveAs(Path.GetFullPath("Output/Chart.xlsx"));
	#endregion
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Xlsx;
  IWorkbook workbook = application.Workbooks.Create(2);
  IWorksheet sheet = workbook.Worksheets[0];

  //Insert the data in sheet-1
  sheet.Range["B1"].Text = "Product-A";
  sheet.Range["C1"].Text = "Product-B";
  sheet.Range["D1"].Text = "Product-C";
  sheet.Range["A2"].Text = "Jan";
  sheet.Range["A3"].Text = "Feb";
  sheet.Range["B2"].Number = 25;
  sheet.Range["B3"].Number = 20;
  sheet.Range["C2"].Number = 35;
  sheet.Range["C3"].Number = 25;
  sheet.Range["D2"].Number = 40;
  sheet.Range["D3"].Number = 55;

  IChartShape chart = sheet.Charts.Add();
  chart.DataRange = sheet.Range["A1:D3"];
  chart.ChartType = ExcelChartType.Column_Clustered_3D;

  //Set Rotation of the 3D chart view
  chart.Rotation = 90;

  //Set Back wall fill option
  chart.BackWall.Fill.FillType = ExcelFillType.Gradient;
  //Set Back wall thickness
  chart.BackWall.Thickness = 10;
  //Set Texture Type
  chart.BackWall.Fill.GradientColorType = ExcelGradientColor.TwoColor;
  chart.BackWall.Fill.GradientStyle = ExcelGradientStyle.Diagonl_Down;
  chart.BackWall.Fill.ForeColor = Color.WhiteSmoke;
  chart.BackWall.Fill.BackColor = Color.LightBlue;

  //Set side wall fill option
  chart.SideWall.Fill.FillType = ExcelFillType.SolidColor;
  //Set side wall fore and back color
  chart.SideWall.Fill.BackColor = Color.White;
  chart.SideWall.Fill.ForeColor = Color.White;

  //Set floor fill option
  chart.Floor.Fill.FillType = ExcelFillType.Pattern;
  chart.Floor.Fill.Pattern = ExcelGradientPattern.Pat_10_Percent.Pat_30_Percent;
  //Set floor fore and Back color
  chart.Floor.Fill.ForeColor = Color.Blue;
  chart.Floor.Fill.BackColor = Color.White;
  //Set floor thickness
  chart.Floor.Thickness = 3;

  workbook.SaveAs("Chart.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As ExcelEngine = New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  application.DefaultVersion = ExcelVersion.Xlsx
  Dim workbook As IWorkbook = application.Workbooks.Create(2)
  Dim sheet As IWorksheet = workbook.Worksheets(0)

  'Insert data in sheet-1
  sheet.Range("B1").Text = "Product-A"
  sheet.Range("C1").Text = "Product-B"
  sheet.Range("D1").Text = "Product-C"
  sheet.Range("A2").Text = "Jan"
  sheet.Range("A3").Text = "Feb"
  sheet.Range("B2").Number = 25
  sheet.Range("B3").Number = 20
  sheet.Range("C2").Number = 35
  sheet.Range("C3").Number = 25
  sheet.Range("D2").Number = 40
  sheet.Range("D3").Number = 55

  Dim chart As IChartShape = sheet.Charts.Add()
  chart.DataRange = sheet.Range("A1:D3")
  chart.ChartType = ExcelChartType.Column_Clustered_3D

  'Set Rotation of the 3D chart view
  chart.Rotation = 90

  'Set Back wall fill option
  chart.BackWall.Fill.FillType = ExcelFillType.Gradient
  'Set Texture Type
  chart.BackWall.Fill.GradientColorType = ExcelGradientColor.TwoColor
  chart.BackWall.Fill.GradientStyle = ExcelGradientStyle.Diagonl_Down
  chart.BackWall.Fill.ForeColor = Color.WhiteSmoke
  chart.BackWall.Fill.BackColor = Color.LightBlue
  'Set Back wall thickness
  chart.BackWall.Thickness = 10

  'Set side wall fill option
  chart.SideWall.Fill.FillType = ExcelFillType.SolidColor
  'Set sidewall fore and back color
  chart.SideWall.Fill.BackColor = Color.White
  chart.SideWall.Fill.ForeColor = Color.White

  'Set floor fill option
  chart.Floor.Fill.FillType = ExcelFillType.Pattern
  chart.Floor.Fill.Pattern = ExcelGradientPattern.Pat_10_Percent.Pat_30_Percent
  'Set floor fore and Back color
  chart.Floor.Fill.ForeColor = Color.Blue
  chart.Floor.Fill.BackColor = Color.White
  'Set floor thickness
  chart.Floor.Thickness = 3

  workbook.SaveAs("Chart.xlsx")
End Using
{% endhighlight %}
{% endtabs %}  

A complete working example to apply 3D chart formats in C# is present on [this GitHub page](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Create%20and%20Edit%20Charts/3D%20Chart/.NET/3D%20Chart).

## Explode a Pie Chart

Essential&reg; XlsIO allows you to explode either all data points at a single explosion value or each data point at different explosion using [Percent](https://help.syncfusion.com/cr/windowsforms/Syncfusion.XlsIO.IChartSerieDataFormat.html#Syncfusion_XlsIO_IChartSerieDataFormat_Percent) of [IChartSerieDataFormat](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IChartSerieDataFormat.html) interface.

You can either create a pie chart and then explode it or directly create an exploded pie chart using XlsIO. Selecting `Pie_Exploded` as [ChartType](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IChart.html#Syncfusion_XlsIO_IChart_ChartType) inserts a pie chart with a default explosion of **25%**. Learn how to [Create an Exploded Pie Chart](https://www.syncfusion.com/kb/8539/how-to-create-excel-exploded-pie-chart-in-c-vb-net).

Refer the following complete code snippets.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/Create%20and%20Edit%20Charts/Explode%20Pie%20Chart/.NET/Explode%20Pie%20Chart/Explode%20Pie%20Chart/Program.cs,180" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
	IApplication application = excelEngine.Excel;
	application.DefaultVersion = ExcelVersion.Xlsx;
	IWorkbook workbook = application.Workbooks.Open(Path.GetFullPath(@"Data/InputTemplate.xlsx"));
	IWorksheet worksheet = workbook.Worksheets[0];

	//Adding pie chart in the worksheet
	IChartShape chart = worksheet.Charts.Add();
	chart.DataRange = worksheet.Range["A3:B7"];
	chart.ChartType = ExcelChartType.Pie;
	chart.IsSeriesInRows = false;

	//Showing the values of data points
	chart.Series[0].DataPoints.DefaultDataPoint.DataLabels.IsValue = true;

	//Exploding the pie chart to 40%
	chart.Series[0].SerieFormat.Percent = 40;

	//Set Legend
	chart.HasLegend = true;
	chart.Legend.Position = ExcelLegendPosition.Bottom;

	//Positioning the chart in the worksheet
	chart.TopRow = 9;
	chart.LeftColumn = 1;
	chart.BottomRow = 22;
	chart.RightColumn = 8;

	#region Save
	//Saving the workbook
	workbook.SaveAs(Path.GetFullPath("Output/Chart.xlsx"));
	#endregion
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Xlsx;
  IWorkbook workbook = application.Workbooks.Open("Sample.xlsx");
  IWorksheet worksheet = workbook.Worksheets[0];

  //Adding pie chart in the worksheet
  IChartShape chart = worksheet.Charts.Add();
  chart.DataRange = worksheet.Range["A3:B7"];
  chart.ChartType = ExcelChartType.Pie;
  chart.IsSeriesInRows = false;

  //Showing the values of data points
  chart.Series[0].DataPoints.DefaultDataPoint.DataLabels.IsValue = true;

  //Exploding the pie chart to 40%
  chart.Series[0].SerieFormat.Percent = 40;

  workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As ExcelEngine = New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  application.DefaultVersion = ExcelVersion.Xlsx
  Dim workbook As IWorkbook = application.Workbooks.Open("Sample.xlsx")
  Dim worksheet As IWorksheet = workbook.Worksheets(0)

  'Adding pie chart in the worksheet
  Dim chart As IChartShape = worksheet.Charts.Add
  chart.DataRange = worksheet.Range("A3:B7")
  chart.ChartType = ExcelChartType.Pie
  chart.IsSeriesInRows = False

  'Showing the values of data points
  chart.Series(0).DataPoints.DefaultDataPoint.DataLabels.IsValue = True

  'Exploding the pie chart to 40%
  chart.Series(0).SerieFormat.Percent = 40

  workbook.SaveAs("Output.xlsx")
End Using
{% endhighlight %}
{% endtabs %}

A complete working example to explode a pie chart in C# is present on [this GitHub page](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Create%20and%20Edit%20Charts/Explode%20Pie%20Chart/.NET/Explode%20Pie%20Chart).

## Add Picture to Chart and assign Hyperlink

Essential&reg; XlsIO supports assigning hyperlink to the picture added in a chart in the Excel workbook. To achieve this, create a [chart in workbook](https://help.syncfusion.com/document-processing/excel/excel-library/net/working-with-charts#creating-a-chart-sheet) and add picture to the chart using [AddPicture](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.Ipictures.html#Syncfusion_XlsIO_IPictures_AddPicture_System_String_) of [IPictures](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IPictures.html) interface. You can assign hyperlink to the picture using [Add](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IHyperLinks.html#Syncfusion_XlsIO_IHyperLinks_Add_Syncfusion_XlsIO_IShape_Syncfusion_XlsIO_ExcelHyperLinkType_System_String_System_String_) property of [IHyperLinks](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IHyperLinks.html) interface.

Refer to the following complete code snippets.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/Create%20and%20Edit%20Charts/Picture%20Hyperlink%20in%20Chart/.NET/Picture%20Hyperlink%20in%20Chart/Picture%20Hyperlink%20in%20Chart/Program.cs,180" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
	IApplication application = excelEngine.Excel;
	application.DefaultVersion = ExcelVersion.Xlsx;
	IWorkbook workbook = application.Workbooks.Open(Path.GetFullPath(@"Data/InputTemplate.xlsx"));
	IWorksheet worksheet = workbook.Worksheets[0];

	//Adding chart in the workbook
	IChart chart = workbook.Charts.Add();
	chart.DataRange = worksheet.Range["A1:C6"];
	chart.ChartType = ExcelChartType.Column_Clustered;
	chart.IsSeriesInRows = false;

	//Getting an image from the stream
	FileStream imageStream = new FileStream(Path.GetFullPath(@"Data/Image.png"), FileMode.Open, FileAccess.Read);
	Image image = Image.FromStream(imageStream);

	//Adding picture on the chart
	chart.Pictures.AddPicture(1, 1, imageStream);

	//Adding hyperlink to the picture on chart
	worksheet.HyperLinks.Add(workbook.Charts[0].Pictures[0] as IShape, ExcelHyperLinkType.Url, "https://www.Syncfusion.com", "click here");

	//Set Legend
	chart.HasLegend = true;
	chart.Legend.Position = ExcelLegendPosition.Bottom;

	#region Save
	//Saving the workbook
	workbook.SaveAs(Path.GetFullPath("Output/Chart.xlsx"));
	#endregion

	//Dispose streams
	imageStream.Dispose();
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Xlsx;
  IWorkbook workbook = application.Workbooks.Open("Sample.xlsx");
  IWorksheet worksheet = workbook.Worksheets[0];				

  //Adding chart in the workbook
  IChart chart = workbook.Charts.Add();
  chart.DataRange = worksheet.Range["A1:B6"];
  chart.ChartType = ExcelChartType.Column_Clustered;
  chart.IsSeriesInRows = false;

  //Adding picture on the chart
  chart.Pictures.AddPicture("Image.png");

  //Adding hyperlink to the picture on chart
  worksheet.HyperLinks.Add((workbook.Charts[0].Pictures[0] as IShape), ExcelHyperLinkType.Url, "http://www.Syncfusion.com", "click here");

  workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As ExcelEngine = New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  application.DefaultVersion = ExcelVersion.Xlsx
  Dim workbook As IWorkbook = application.Workbooks.Open("Sample.xlsx")
  Dim worksheet As IWorksheet = workbook.Worksheets(0)

  'Adding chart in the workbook
  Dim chart As IChart = workbook.Charts.Add
  chart.DataRange = worksheet.Range("A1:B6")
  chart.ChartType = ExcelChartType.Column_Clustered
  chart.IsSeriesInRows = False

  'Adding picture on the chart
  chart.Pictures.AddPicture("Image.png")

  'Adding hyperlink to the picture on chart
  worksheet.HyperLinks.Add(workbook.Charts(0).Pictures(0), ExcelHyperLinkType.Url, "http://www.Syncfusion.com", "click here")

  workbook.SaveAs("Output.xlsx")
End Using
{% endhighlight %}
{% endtabs %}

A complete working example for picture hyperlink in chart in C# is present on [this GitHub page](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Create%20and%20Edit%20Charts/Picture%20Hyperlink%20in%20Chart/.NET/Picture%20Hyperlink%20in%20Chart).  

N> XlsIO supports adding picture only to a chart in the workbook,but does not support adding picture to a chart in the worksheet.

## Add DataTable to Chart

Data table beneath the chart clearly represents the chart content in table format. While creating a chart, the data table is hidden, and the option should be manually enabled to view it.

Essential&reg; XlsIO supports adding data table using [HasDataTable](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IChart.html#Syncfusion_XlsIO_IChart_HasDataTable) of [IChart](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IChart.html) interface. Enabling this property adds the data table beneath the chart.

Refer the following complete code snippets.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/Create%20and%20Edit%20Charts/DataTable%20in%20Chart/.NET/DataTable%20in%20Chart/DataTable%20in%20Chart/Program.cs,180" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
	IApplication application = excelEngine.Excel;
	application.DefaultVersion = ExcelVersion.Xlsx;
	IWorkbook workbook = application.Workbooks.Create(1);
	IWorksheet worksheet = workbook.Worksheets[0];

	//Assigning data in the worksheet
	worksheet.Range["A1"].Text = "Items";
	worksheet.Range["B1"].Text = "Amount(in $)";
	worksheet.Range["C1"].Text = "Count";

	worksheet.Range["A2"].Text = "Beverages";
	worksheet.Range["A3"].Text = "Condiments";
	worksheet.Range["A4"].Text = "Confections";
	worksheet.Range["A5"].Text = "Dairy Products";
	worksheet.Range["A6"].Text = "Grains / Cereals";

	worksheet.Range["B2"].Number = 2776;
	worksheet.Range["B3"].Number = 1077;
	worksheet.Range["B4"].Number = 2287;
	worksheet.Range["B5"].Number = 1368;
	worksheet.Range["B6"].Number = 3325;

	worksheet.Range["C2"].Number = 925;
	worksheet.Range["C3"].Number = 378;
	worksheet.Range["C4"].Number = 880;
	worksheet.Range["C5"].Number = 581;
	worksheet.Range["C6"].Number = 189;

	//Adding a chart to the worksheet
	IChartShape chart = worksheet.Charts.Add();
	chart.DataRange = worksheet.Range["A1:C6"];
	chart.ChartType = ExcelChartType.Column_Clustered;
	chart.IsSeriesInRows = false;

	//Adding title to the chart
	chart.ChartTitle = "Chart with Data Table";

	//Adding data table to the chart
	chart.HasDataTable = true;

	//Set Legend
	chart.HasLegend = true;
	chart.Legend.Position = ExcelLegendPosition.Bottom;

	//Positioning the chart in the worksheet
	chart.TopRow = 8;
	chart.LeftColumn = 1;
	chart.BottomRow = 23;
	chart.RightColumn = 8;

	#region Save
	//Saving the workbook
	workbook.SaveAs(Path.GetFullPath("Output/Chart.xlsx"));
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

  //Assigning data in the worksheet
  worksheet.Range["A1"].Text = "Items";
  worksheet.Range["B1"].Text = "Amount(in $)";
  worksheet.Range["C1"].Text = "Count";

  worksheet.Range["A2"].Text = "Beverages";
  worksheet.Range["A3"].Text = "Condiments";
  worksheet.Range["A4"].Text = "Confections";
  worksheet.Range["A5"].Text = "Dairy Products";
  worksheet.Range["A6"].Text = "Grains / Cereals";

  worksheet.Range["B2"].Number = 2776;
  worksheet.Range["B3"].Number = 1077;
  worksheet.Range["B4"].Number = 2287;
  worksheet.Range["B5"].Number = 1368;
  worksheet.Range["B6"].Number = 3325;

  worksheet.Range["C2"].Number = 925;
  worksheet.Range["C3"].Number = 378;
  worksheet.Range["C4"].Number = 880;
  worksheet.Range["C5"].Number = 581;
  worksheet.Range["C6"].Number = 189;

  //Adding a chart to the worksheet
  IChartShape chart = worksheet.Charts.Add();
  chart.DataRange = worksheet.Range["A1:C6"];
  chart.ChartType = ExcelChartType.Column_Clustered;
  chart.IsSeriesInRows = false;

  //Adding title to the chart
  chart.ChartTitle = "Chart with Data Table";

  //Adding data table to the chart
  chart.HasDataTable = true;

  workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As ExcelEngine = New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  application.DefaultVersion = ExcelVersion.Xlsx
  Dim workbook As IWorkbook = application.Workbooks.Create(1)
  Dim worksheet As IWorksheet = workbook.Worksheets(0)

  'Assigning data in the worksheet
  worksheet.Range("A1").Text = "Items"
  worksheet.Range("B1").Text = "Amount(in $)"
  worksheet.Range("C1").Text = "Count"

  worksheet.Range("A2").Text = "Beverages"
  worksheet.Range("A3").Text = "Condiments"
  worksheet.Range("A4").Text = "Confections"
  worksheet.Range("A5").Text = "Dairy Products"
  worksheet.Range("A6").Text = "Grains / Cereals"

  worksheet.Range("B2").Number = 2776
  worksheet.Range("B3").Number = 1077
  worksheet.Range("B4").Number = 2287
  worksheet.Range("B5").Number = 1368
  worksheet.Range("B6").Number = 3325

  worksheet.Range("C2").Number = 925
  worksheet.Range("C3").Number = 378
  worksheet.Range("C4").Number = 880
  worksheet.Range("C5").Number = 581
  worksheet.Range("C6").Number = 189

  'Adding a chart in the worksheet
  Dim chart As IChartShape = worksheet.Charts.Add
  chart.DataRange = worksheet.Range("A1:C6")
  chart.ChartType = ExcelChartType.Column_Clustered
  chart.IsSeriesInRows = False

  'Adding title to the chart
  chart.ChartTitle = "Chart with Data Table"

  'Adding data table to the chart
  chart.HasDataTable = True

  workbook.SaveAs("Output.xlsx")
End Using
{% endhighlight %}
{% endtabs %}

A complete working example to add data table in chart in C# is present on [this GitHub page](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Create%20and%20Edit%20Charts/DataTable%20in%20Chart/.NET/DataTable%20in%20Chart).