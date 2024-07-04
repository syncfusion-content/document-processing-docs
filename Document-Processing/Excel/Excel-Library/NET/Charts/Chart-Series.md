---
title: Chart Series | Excel library | Syncfusion
description: In this section, you can learn about chart series in an Excel document using Syncfusion .NET Excel library (XlsIO).
platform: document-processing
control: XlsIO
documentation: UG
---

# Chart Series in Excel document

In a chart, a **series** represents a set of related data points, often depicted using lines, bars, or markers to show data trends or comparisons. Using XlsIO, you can **customize the series in the chart**.

## Add

The following code snippet illustrates how to add series in chart.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
//Add series
IChartSerie Amount = chart.Series.Add("Amount");
Amount.Values = worksheet.Range["B2:B6"];
Amount.CategoryLabels = worksheet.Range["A2:A6"];
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Add series
IChartSerie Amount = chart.Series.Add("Amount");
Amount.Values = worksheet.Range["B2:B6"];
Amount.CategoryLabels = worksheet.Range["A2:A6"];
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Add series
IChartSerie Amount = chart.Series.Add("Amount")
Amount.Values = worksheet.Range["B2:B6"]
Amount.CategoryLabels = worksheet.Range["A2:A6"]
{% endhighlight %}
{% endtabs %}

## Format

### Border

The following code snippet illustrates how to format the border of the series.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
//Set the border
chart.Series[1].SerieFormat.LineProperties.LineColor = Color.Red;
chart.Series[1].SerieFormat.LineProperties.LinePattern = ExcelChartLinePattern.Dot;
chart.Series[1].SerieFormat.LineProperties.LineWeight = ExcelChartLineWeight.Narrow;
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Set the border
chart.Series[1].SerieFormat.LineProperties.LineColor = Color.Red;
chart.Series[1].SerieFormat.LineProperties.LinePattern = ExcelChartLinePattern.Dot;
chart.Series[1].SerieFormat.LineProperties.LineWeight = ExcelChartLineWeight.Narrow;
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
' Set the border
chart.Series(1).SerieFormat.LineProperties.LineColor = Color.Red
chart.Series(1).SerieFormat.LineProperties.LinePattern = ExcelChartLinePattern.Dot
chart.Series(1).SerieFormat.LineProperties.LineWeight = ExcelChartLineWeight.Narrow
{% endhighlight %}
{% endtabs %}

### Color

The following code snippet illustrates how to format the color of the series.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
//Set the color
chart.Series[1].SerieFormat.Fill.FillType = ExcelFillType.Gradient;
chart.Series[1].SerieFormat.Fill.GradientColorType = ExcelGradientColor.TwoColor;
chart.Series[1].SerieFormat.Fill.BackColor = Color.FromArgb(205, 217, 234);
chart.Series[1].SerieFormat.Fill.ForeColor = Color.Red;
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Set the color
chart.Series[1].SerieFormat.Fill.FillType = ExcelFillType.Gradient;
chart.Series[1].SerieFormat.Fill.GradientColorType = ExcelGradientColor.TwoColor;
chart.Series[1].SerieFormat.Fill.BackColor = Color.FromArgb(205, 217, 234);
chart.Series[1].SerieFormat.Fill.ForeColor = Color.Red;
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Set the color
chart.Series(1).SerieFormat.Fill.FillType = ExcelFillType.Gradient
chart.Series(1).SerieFormat.Fill.GradientColorType = ExcelGradientColor.TwoColor
chart.Series(1).SerieFormat.Fill.BackColor = Color.FromArgb(205, 217, 234)
chart.Series(1).SerieFormat.Fill.ForeColor = Color.Red
{% endhighlight %}
{% endtabs %}

### Transparency

The following code snippet illustrates how to apply transparency to the series.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
//Set the transparency
chart.Series[1].SerieFormat.Fill.Transparency = 1.0;
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Set the transparency 
chart.Series[1].SerieFormat.Fill.Transparency = 1.0;
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Set the transparency 
chart.Series(1).SerieFormat.Fill.Transparency = 1.0
{% endhighlight %}
{% endtabs %}

N> [Transparency](https://help.syncfusion.com/cr/file-formats/Syncfusion.XlsIO.IFill.html#Syncfusion_XlsIO_IFill_Transparency) is only applicable when [FillType](https://help.syncfusion.com/cr/file-formats/Syncfusion.XlsIO.IFill.html#Syncfusion_XlsIO_IFill_FillType) is set as SolidColor. Color-shaded fill is represented as a floating-point value ranging from 0.0 (Clear) to 1.0 (Opaque).

## Series Type

The following code snippet illustrates how to set the series type.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
//Set the series type
chart.Series[0].SerieType = ExcelChartType.Line_Markers;
chart.Series[1].SerieType = ExcelChartType.Bar_Clustered;
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Set the series type
chart.Series[0].SerieType = ExcelChartType.Line_Markers;
chart.Series[1].SerieType = ExcelChartType.Bar_Clustered;
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Set the series type
chart.Series(0).SerieType = ExcelChartType.Line_Markers
chart.Series(1).SerieType = ExcelChartType.Bar_Clustered
{% endhighlight %}
{% endtabs %}

The complete code snippet illustrating the above options is shown below.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;
    IWorkbook workbook = application.Workbooks.Create(1);
    IWorksheet worksheet = workbook.Worksheets[0];

    worksheet.Range["A1"].Text = "Items";
    worksheet.Range["A2"].Text = "Beverages";
    worksheet.Range["A3"].Text = "Condiments";
    worksheet.Range["A4"].Text = "Confections";
    worksheet.Range["A5"].Text = "Dairy Products";
    worksheet.Range["A6"].Text = "Grains/Cereals";

    worksheet.Range["B1"].Text = "Amount(in $)";
    worksheet.Range["B2"].Number = 2776;
    worksheet.Range["B3"].Number = 1077;
    worksheet.Range["B4"].Number = 2287;
    worksheet.Range["B5"].Number = 1368;
    worksheet.Range["B6"].Number = 3325;

    worksheet.Range["C1"].Text = "Count";
    worksheet.Range["C2"].Number = 925;
    worksheet.Range["C3"].Number = 378;
    worksheet.Range["C4"].Number = 880;
    worksheet.Range["C5"].Number = 581;
    worksheet.Range["C6"].Number = 189;

    IChartShape chart = worksheet.Charts.Add();

    //Set chart type
    chart.ChartType = ExcelChartType.Column_Clustered;

    //Set chart title
    chart.ChartTitle = "Product Sales";

    //Add first serie
    IChartSerie serie1 = chart.Series.Add("Amount");
    serie1.Values = worksheet.Range["B2:B6"];
    serie1.CategoryLabels = worksheet.Range["A2:A6"];

    //Add second serie
    IChartSerie serie2 = chart.Series.Add("Count");
    serie2.Values = worksheet.Range["C2:C6"];
    serie2.CategoryLabels = worksheet.Range["A2:A6"];

    //Set the series type
    chart.Series[0].SerieType = ExcelChartType.Line_Markers;
    chart.Series[1].SerieType = ExcelChartType.Bar_Clustered;

    //Set the color
    chart.Series[1].SerieFormat.Fill.FillType = ExcelFillType.Gradient;
    chart.Series[1].SerieFormat.Fill.GradientColorType = ExcelGradientColor.TwoColor;
    chart.Series[1].SerieFormat.Fill.BackColor = Color.FromArgb(205, 217, 234);
    chart.Series[1].SerieFormat.Fill.ForeColor = Color.Red;

    //Set the border
    chart.Series[1].SerieFormat.LineProperties.LineColor = Color.Red;
    chart.Series[1].SerieFormat.LineProperties.LinePattern = ExcelChartLinePattern.Dot;
    chart.Series[1].SerieFormat.LineProperties.LineWeight = ExcelChartLineWeight.Narrow;

    //Positioning chart in a worksheet
    chart.TopRow = 9;
    chart.LeftColumn = 1;
    chart.RightColumn = 10;
    chart.BottomRow = 25;

    //Saving the workbook as stream
    FileStream stream = new FileStream("Output.xlsx", FileMode.Create, FileAccess.ReadWrite);
    workbook.SaveAs(stream);

    //Dispose streams
    stream.Dispose();
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
   IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;
    IWorkbook workbook = application.Workbooks.Create(1);
    IWorksheet worksheet = workbook.Worksheets[0];

    worksheet.Range["A1"].Text = "Items";
    worksheet.Range["A2"].Text = "Beverages";
    worksheet.Range["A3"].Text = "Condiments";
    worksheet.Range["A4"].Text = "Confections";
    worksheet.Range["A5"].Text = "Dairy Products";
    worksheet.Range["A6"].Text = "Grains/Cereals";

    worksheet.Range["B1"].Text = "Amount(in $)";
    worksheet.Range["B2"].Number = 2776;
    worksheet.Range["B3"].Number = 1077;
    worksheet.Range["B4"].Number = 2287;
    worksheet.Range["B5"].Number = 1368;
    worksheet.Range["B6"].Number = 3325;

    worksheet.Range["C1"].Text = "Count";
    worksheet.Range["C2"].Number = 925;
    worksheet.Range["C3"].Number = 378;
    worksheet.Range["C4"].Number = 880;
    worksheet.Range["C5"].Number = 581;
    worksheet.Range["C6"].Number = 189;

    IChartShape chart = worksheet.Charts.Add();

    //Set chart type
    chart.ChartType = ExcelChartType.Column_Clustered;

    //Set chart title
    chart.ChartTitle = "Product Sales";

    //Add first serie
    IChartSerie serie1 = chart.Series.Add("Amount");
    serie1.Values = worksheet.Range["B2:B6"];
    serie1.CategoryLabels = worksheet.Range["A2:A6"];

    //Add second serie
    IChartSerie serie2 = chart.Series.Add("Count");
    serie2.Values = worksheet.Range["C2:C6"];
    serie2.CategoryLabels = worksheet.Range["A2:A6"];

    //Set the series type
    chart.Series[0].SerieType = ExcelChartType.Line_Markers;
    chart.Series[1].SerieType = ExcelChartType.Bar_Clustered;

    //Set the color
    chart.Series[1].SerieFormat.Fill.FillType = ExcelFillType.Gradient;
    chart.Series[1].SerieFormat.Fill.GradientColorType = ExcelGradientColor.TwoColor;
    chart.Series[1].SerieFormat.Fill.BackColor = Color.FromArgb(205, 217, 234);
    chart.Series[1].SerieFormat.Fill.ForeColor = Color.Red;

    //Set the border
    chart.Series[1].SerieFormat.LineProperties.LineColor = Color.Red;
    chart.Series[1].SerieFormat.LineProperties.LinePattern = ExcelChartLinePattern.Dot;
    chart.Series[1].SerieFormat.LineProperties.LineWeight = ExcelChartLineWeight.Narrow;

    //Positioning chart in a worksheet
    chart.TopRow = 9;
    chart.LeftColumn = 1;
    chart.RightColumn = 10;
    chart.BottomRow = 25;

    //Saving the workbook
    workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As New ExcelEngine()
    Dim application As IApplication = excelEngine.Excel
    application.DefaultVersion = ExcelVersion.Xlsx
    Dim workbook As IWorkbook = application.Workbooks.Create(1)
    Dim worksheet As IWorksheet = workbook.Worksheets(0)

    worksheet.Range("A1").Text = "Items"
    worksheet.Range("A2").Text = "Beverages"
    worksheet.Range("A3").Text = "Condiments"
    worksheet.Range("A4").Text = "Confections"
    worksheet.Range("A5").Text = "Dairy Products"
    worksheet.Range("A6").Text = "Grains/Cereals"

    worksheet.Range("B1").Text = "Amount(in $)"
    worksheet.Range("B2").Number = 2776
    worksheet.Range("B3").Number = 1077
    worksheet.Range("B4").Number = 2287
    worksheet.Range("B5").Number = 1368
    worksheet.Range("B6").Number = 3325

    worksheet.Range("C1").Text = "Count"
    worksheet.Range("C2").Number = 925
    worksheet.Range("C3").Number = 378
    worksheet.Range("C4").Number = 880
    worksheet.Range("C5").Number = 581
    worksheet.Range("C6").Number = 189

    Dim chart As IChartShape = worksheet.Charts.Add()

    'Set chart type
    chart.ChartType = ExcelChartType.Column_Clustered

    'Set chart title
    chart.ChartTitle = "Product Sales"

    'Add first series
    Dim serie1 As IChartSerie = chart.Series.Add("Amount")
    serie1.Values = worksheet.Range("B2:B6")
    serie1.CategoryLabels = worksheet.Range("A2:A6")

    'Add second series
    Dim serie2 As IChartSerie = chart.Series.Add("Count")
    serie2.Values = worksheet.Range("C2:C6")
    serie2.CategoryLabels = worksheet.Range("A2:A6")

    'Set the series type
    chart.Series(0).SerieType = ExcelChartType.Line_Markers
    chart.Series(1).SerieType = ExcelChartType.Bar_Clustered

    'Set the color
    chart.Series(1).SerieFormat.Fill.FillType = ExcelFillType.Gradient
    chart.Series(1).SerieFormat.Fill.GradientColorType = ExcelGradientColor.TwoColor
    chart.Series(1).SerieFormat.Fill.BackColor = Color.FromArgb(205, 217, 234)
    chart.Series(1).SerieFormat.Fill.ForeColor = Color.Red

    'Set the border
    chart.Series(1).SerieFormat.LineProperties.LineColor = Color.Red
    chart.Series(1).SerieFormat.LineProperties.LinePattern = ExcelChartLinePattern.Dot
    chart.Series(1).SerieFormat.LineProperties.LineWeight = ExcelChartLineWeight.Narrow

    'Positioning chart in a worksheet
    chart.TopRow = 9
    chart.LeftColumn = 1
    chart.RightColumn = 10
    chart.BottomRow = 25

    'Saving the workbook
    workbook.SaveAs("Output.xlsx")
End Using
{% endhighlight %}
{% endtabs %}

A complete working example for the chart data series in C# is present on [this GitHub page](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Create%20and%20Edit%20Charts/Series%20Lines/NET%20Standard/Series%20Lines).

## Series Settings

### Add DataPoint as total

The following code snippet illustrates how to add the Data Point as total in chart.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
//Data point settings as total in chart
chart.Series[0].DataPoints[3].SetAsTotal = true;
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Data point settings as total in chart
chart.Series[0].DataPoints[3].SetAsTotal = true;
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Data point settings as total in chart
chart.Series(0).DataPoints(3).SetAsTotal = True
{% endhighlight %}
{% endtabs %}

### Add Connector lines between data points 

The following code snippet illustrates how to add the connector lines between data points. 

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
//Showing the connector lines between data points
chart.Series[0].SerieFormat.ShowConnectorLines = true;
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Showing the connector lines between data points
chart.Series[0].SerieFormat.ShowConnectorLines = true;
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Showing the connector lines between data points
chart.Series(0).SerieFormat.ShowConnectorLines = True
{% endhighlight %}
{% endtabs %}

### Add space between bars

Spaces between chart bars are of two types.

1. **Series Overlap** : Space between bars of different data series of single category.
2. **Gap Width** : Space between different categories.

XlsIO allows you to adjust the space between chart bars using [Overlap](https://help.syncfusion.com/cr/windowsforms/Syncfusion.XlsIO.IChartFormat.html#Syncfusion_XlsIO_IChartFormat_Overlap) and [GapWidth](https://help.syncfusion.com/cr/windowsforms/Syncfusion.XlsIO.IChartFormat.html#Syncfusion_XlsIO_IChartFormat_GapWidth) properties of [IChartFormat](https://help.syncfusion.com/cr/file-formats/Syncfusion.XlsIO.IChartFormat.html) interface.

The following code snippet illustrates how to add space between bars.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
//Adding space between bars of different series of single category.
chart.Series[0].SerieFormat.CommonSerieOptions.Overlap = 60;

//Adding space between bars of different categories.
chart.Series[0].SerieFormat.CommonSerieOptions.GapWidth = 80;
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Adding space between bars of different series of single category.
chart.Series[0].SerieFormat.CommonSerieOptions.Overlap = 60;

//Adding space between bars of different categories.
chart.Series[0].SerieFormat.CommonSerieOptions.GapWidth = 80;
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Adding space between bars of different series of a single category.
chart.Series(0).SerieFormat.CommonSerieOptions.Overlap = 60

'Adding space between bars of different categories.
chart.Series(0).SerieFormat.CommonSerieOptions.GapWidth = 80
{% endhighlight %}
{% endtabs %}

A complete working example for adding space between chart bars in C# is present on [this GitHub page](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Create%20and%20Edit%20Charts/Chart%20Bars%20Spacing).

### Add High-Low Lines

The following code snippet illustrates how to add high-low lines.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
//Set HasHighLowLines property to true
chart.Series[0].SerieFormat.CommonSerieOptions.HasHighLowLines = true;

//Apply formats to HighLowLines
chart.Series[0].SerieFormat.CommonSerieOptions.HighLowLines.LineColor = Syncfusion.Drawing.Color.Red;
chart.Series[0].SerieFormat.CommonSerieOptions.HighLowLines.LinePattern = ExcelChartLinePattern.Dot;
chart.Series[0].SerieFormat.CommonSerieOptions.HighLowLines.LineWeight = ExcelChartLineWeight.Narrow;
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Set HasHighLowLines property to true
chart.Series[0].SerieFormat.CommonSerieOptions.HasHighLowLines = true;

//Apply formats to HighLowLine
chart.Series[0].SerieFormat.CommonSerieOptions.HighLowLines.LineColor = Color.Red;
chart.Series[0].SerieFormat.CommonSerieOptions.HighLowLines.LinePattern = ExcelChartLinePattern.Dot;
chart.Series[0].SerieFormat.CommonSerieOptions.HighLowLines.LineWeight = ExcelChartLineWeight.Narrow;
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Set HasHighLowLines property to true
chart.Series(0).SerieFormat.CommonSerieOptions.HasHighLowLines = True

'Apply formats to HighLowLines
chart.Series(0).SerieFormat.CommonSerieOptions.HighLowLines.LineColor = Color.Red
chart.Series(0).SerieFormat.CommonSerieOptions.HighLowLines.LinePattern = ExcelChartLinePattern.Dot
chart.Series(0).SerieFormat.CommonSerieOptions.HighLowLines.LineWeight = ExcelChartLineWeight.Narrow
{% endhighlight %}
{% endtabs %}

A complete working example to show high low lines of chart in C# is present on [this GitHub page](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Create%20and%20Edit%20Charts/High%20Low%20Lines).

### Add Drop Lines

The following code snippet illustrates how to add drop lines.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
//Set the HasDropLines property to true.
chart.Series[0].SerieFormat.CommonSerieOptions.HasDropLines = true;

//Apply formats to DropLines.
chart.Series[0].SerieFormat.CommonSerieOptions.DropLines.LineColor = Syncfusion.Drawing.Color.Red;
chart.Series[0].SerieFormat.CommonSerieOptions.DropLines.LinePattern = ExcelChartLinePattern.Dot;
chart.Series[0].SerieFormat.CommonSerieOptions.DropLines.LineWeight = ExcelChartLineWeight.Narrow;
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Set the HasDropLines property to true.
chart.Series[0].SerieFormat.CommonSerieOptions.HasDropLines = true;

//Apply formats to DropLines.
chart.Series[0].SerieFormat.CommonSerieOptions.DropLines.LineColor = Color.Red;
chart.Series[0].SerieFormat.CommonSerieOptions.DropLines.LinePattern = ExcelChartLinePattern.Dot;
chart.Series[0].SerieFormat.CommonSerieOptions.DropLines.LineWeight = ExcelChartLineWeight.Narrow;
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Set HasDropLines property to true.
chart.Series(0).SerieFormat.CommonSerieOptions.HasDropLines = True

'Apply formats to DropLines.
chart.Series(0).SerieFormat.CommonSerieOptions.DropLines.LineColor = Color.Red
chart.Series(0).SerieFormat.CommonSerieOptions.DropLines.LinePattern = ExcelChartLinePattern.Dot;
chart.Series(0).SerieFormat.CommonSerieOptions.DropLines.LineWeight = ExcelChartLineWeight.Narrow
{% endhighlight %}
{% endtabs %}

A complete working example to add drop lines of chart in C# is present on [this GitHub page](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Create%20and%20Edit%20Charts/Drop%20Lines).

### Add Series Lines

The following code snippet illustrates how to add series lines in chart.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
//Set HasSeriesLines property to true
chart.Series[0].SerieFormat.CommonSerieOptions.HasSeriesLines = true;

//Apply formats to SeriesLines
chart.Series[0].SerieFormat.CommonSerieOptions.PieSeriesLine.LineColor = Syncfusion.Drawing.Color.Red;
chart.Series[0].SerieFormat.CommonSerieOptions.PieSeriesLine.LinePattern = ExcelChartLinePattern.Dot;
chart.Series[0].SerieFormat.CommonSerieOptions.PieSeriesLine.LineWeight = ExcelChartLineWeight.Narrow;
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Set HasSeriesLines property to true
chart.Series[0].SerieFormat.CommonSerieOptions.HasSeriesLines = true;

//Apply formats to SeriesLines
chart.Series[0].SerieFormat.CommonSerieOptions.PieSeriesLine.LineColor = Color.Red;
chart.Series[0].SerieFormat.CommonSerieOptions.PieSeriesLine.LinePattern = ExcelChartLinePattern.Dot;
chart.Series[0].SerieFormat.CommonSerieOptions.PieSeriesLine.LineWeight = ExcelChartLineWeight.Narrow;
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Set HasSeriesLines property to true
chart.Series(0).SerieFormat.CommonSerieOptions.HasSeriesLines = true

'Apply formats to SeriesLines
chart.Series(0).SerieFormat.CommonSerieOptions.PieSeriesLine.LineColor = Color.Red
chart.Series(0).SerieFormat.CommonSerieOptions.PieSeriesLine.LinePattern = ExcelChartLinePattern.Dot
chart.Series(0).SerieFormat.CommonSerieOptions.PieSeriesLine.LineWeight = ExcelChartLineWeight.Narrow
{% endhighlight %}
{% endtabs %}

A complete working example to add series lines of chart in C# is present on [this GitHub page](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Create%20and%20Edit%20Charts/Series%20Lines).