---
title: Working with Charts | Syncfusion
description: Learn how to add, edit, and remove charts in an Excel document using the .NET Excel (XlsIO) library without Microsoft Excel or interop dependencies.
platform: document-processing
control: XlsIO
documentation: UG
---
# Working with charts in Excel document.

Essential XlsIO has support for creating and modifying Excel charts inside a workbook or as a [chart worksheet](https://support.microsoft.com/en-us/office/create-a-chart-from-start-to-finish-0baf399e-dd61-4e18-8a73-b3fd5d5680c2?ui=en-us&rs=en-us&ad=us).

## Creating a Chart

The [IChartShape](https://help.syncfusion.com/cr/file-formats/Syncfusion.XlsIO.IChartShape.html) interface represents the chart in a worksheet. A chart can be created either through the existing data in the worksheet, directly entering series or by adding series one by one.

The following code example illustrates how to create a chart through the existing data in the worksheet.

{% tabs %}  
{% highlight c# tabtitle="C# [Cross-platform]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Xlsx;
  FileStream inputStream = new FileStream("Sample.xlsx", FileMode.Open, FileAccess.Read);
  IWorkbook workbook = application.Workbooks.Open(inputStream, ExcelOpenType.Automatic);
  IWorksheet sheet = workbook.Worksheets[0];

  //Create a Chart
  IChartShape chart = sheet.Charts.Add();

  //Set Chart Type
  chart.ChartType = ExcelChartType.Column_Clustered;

  //Set data range in the worksheet
  chart.DataRange = sheet.Range["A1:E5"];

  //Saving the workbook as stream
  FileStream stream = new FileStream("Chart.xlsx", FileMode.Create, FileAccess.ReadWrite);
  workbook.SaveAs(stream);
  stream.Dispose();
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Xlsx;
  IWorkbook workbook = application.Workbooks.Open("Sample.xlsx", ExcelOpenType.Automatic);
  IWorksheet sheet = workbook.Worksheets[0];

  //Create a Chart
  IChartShape chart = sheet.Charts.Add();

  //Set Chart Type
  chart.ChartType = ExcelChartType.Column_Clustered;

  //Set data range in the worksheet
  chart.DataRange = sheet.Range["A1:E5"];

  workbook.SaveAs("Chart.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As ExcelEngine = New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  application.DefaultVersion = ExcelVersion.Xlsx
  Dim workbook As IWorkbook = application.Workbooks.Open("Sample.xlsx", ExcelOpenType.Automatic)
  Dim sheet As IWorksheet = workbook.Worksheets(0)

  'Create a Chart
  Dim chart As IChartShape = sheet.Charts.Add()

  'Set Chart Type
  chart.ChartType = ExcelChartType.Column_Clustered

  'Set data range in the worksheet
  chart.DataRange = sheet.Range("A1:E5")

  workbook.SaveAs("Chart.xlsx")
End Using
{% endhighlight %}
{% endtabs %}  

A complete working example to create a chart in C# is present on [this GitHub page](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Create%20and%20Edit%20Charts/Create%20Chart). 

### Creating a Chart from directly entered Values

A chart in XlsIO can also be created from directly entered values. 

The following code example illustrate how to create a chart from directly entered values.

{% tabs %}  
{% highlight c# tabtitle="C# [Cross-platform]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Xlsx;
  IWorkbook workbook = application.Workbooks.Create(1);
  IWorksheet sheet = workbook.Worksheets[0];

  object[] yValues = new object[] { 2000, 1000, 1000 };
  object[] xValues = new object[] { "Total Income", "Expenses", "Profit" };

  //Adding series and values
  IChartShape chart = sheet.Charts.Add();
  IChartSerie serie = chart.Series.Add(ExcelChartType.Pie);

  //Enters the X and Y values directly
  serie.EnteredDirectlyValues = yValues;
  serie.EnteredDirectlyCategoryLabels = xValues;

  //Saving the workbook as stream
  FileStream stream = new FileStream("Chart.xlsx", FileMode.Create, FileAccess.ReadWrite);
  workbook.SaveAs(stream);
  stream.Dispose();
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Xlsx;
  IWorkbook workbook = application.Workbooks.Create(1);
  IWorksheet sheet = workbook.Worksheets[0];

  object[] yValues = new object[] { 2000, 1000, 1000 };
  object[] xValues = new object[] { "Total Income", "Expenses", "Profit" };

  //Adding series and values
  IChartShape chart = sheet.Charts.Add();
  IChartSerie serie = chart.Series.Add(ExcelChartType.Pie);

  //Enters the X and Y values directly
  serie.EnteredDirectlyValues = yValues;
  serie.EnteredDirectlyCategoryLabels = xValues;

  workbook.SaveAs("Chart.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As ExcelEngine = New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  application.DefaultVersion = ExcelVersion.Xlsx
  Dim workbook As IWorkbook = application.Workbooks.Create(1)
  Dim sheet As IWorksheet = workbook.Worksheets(0)

  Dim yValues As Object() = New Object() {2000, 1000, 1000}
  Dim xValues As Object() = New Object() {"Total Income", "Expenses", "Profit"}

  'Adding series and values
  Dim chart As IChartShape = sheet.Charts.Add()
  Dim serie As IChartSerie = chart.Series.Add(ExcelChartType.Pie)

  'Enters the X and Y values directly
  serie.EnteredDirectlyValues = yValues
  serie.EnteredDirectlyCategoryLabels = xValues

  workbook.SaveAs("Chart.xlsx")
End Using
{% endhighlight %}
{% endtabs %}  

A complete working example to create a chart from directly entered values in C# is present on [this GitHub page](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Create%20and%20Edit%20Charts/Chart%20from%20Scratch).

### Creating a Chart by adding Series

A chart can also be created by adding series one by one. 

The following code example illustrates how to create a chart through series.

{% tabs %}  
{% highlight c# tabtitle="C# [Cross-platform]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Xlsx;
  IWorkbook workbook = application.Workbooks.Create(1);
  IWorksheet sheet = workbook.Worksheets[0];

  //Inserts the sample data for the chart
  sheet.Range["A1"].Text = "Month";
  sheet.Range["B1"].Text = "Product A";
  sheet.Range["C1"].Text = "Product B";

  //Months
  sheet.Range["A2"].Text = "Jan";
  sheet.Range["A3"].Text = "Feb";
  sheet.Range["A4"].Text = "Mar";
  sheet.Range["A5"].Text = "Apr";
  sheet.Range["A6"].Text = "May";

  //Create a random Data
  Random r = new Random();
  for (int i = 2; i <= 6; i++)
  {
	for (int j = 2; j <= 3; j++)
	{
      sheet.Range[i, j].Number = r.Next(0, 500);
	}
  }
  IChartShape chart = sheet.Charts.Add();

  //Set chart type
  chart.ChartType = ExcelChartType.Line;

  //Set Chart Title
  chart.ChartTitle = "Product Sales comparison";

  //Set first serie
  IChartSerie productA = chart.Series.Add("ProductA");
  productA.Values = sheet.Range["B2:B6"];
  productA.CategoryLabels = sheet.Range["A2:A6"];

  //Set second serie
  IChartSerie productB = chart.Series.Add("ProductB");
  productB.Values = sheet.Range["C2:C6"];
  productB.CategoryLabels = sheet.Range["A2:A6"];

  //Saving the workbook as stream
  FileStream stream = new FileStream("Chart.xlsx", FileMode.Create, FileAccess.ReadWrite);
  workbook.SaveAs(stream);
  stream.Dispose();
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Xlsx;
  IWorkbook workbook = application.Workbooks.Create(1);
  IWorksheet sheet = workbook.Worksheets[0];

  //Inserts the sample data for the chart
  sheet.Range["A1"].Text = "Month";
  sheet.Range["B1"].Text = "Product A";
  sheet.Range["C1"].Text = "Product B";

  //Months
  sheet.Range["A2"].Text = "Jan";
  sheet.Range["A3"].Text = "Feb";
  sheet.Range["A4"].Text = "Mar";
  sheet.Range["A5"].Text = "Apr";
  sheet.Range["A6"].Text = "May";

  //Create a random Data
  Random r = new Random();
  for (int i = 2; i <= 6; i++)
  {
	for (int j = 2; j <= 3; j++)
	{
      sheet.Range[i, j].Number = r.Next(0, 500);
	}
  }
  IChartShape chart = sheet.Charts.Add();

  //Set chart type
  chart.ChartType = ExcelChartType.Line;

  //Set Chart Title
  chart.ChartTitle = "Product Sales comparison";

  //Set first serie
  IChartSerie productA = chart.Series.Add("ProductA");
  productA.Values = sheet.Range["B2:B6"];
  productA.CategoryLabels = sheet.Range["A2:A6"];

  //Set second serie
  IChartSerie productB = chart.Series.Add("ProductB");
  productB.Values = sheet.Range["C2:C6"];
  productB.CategoryLabels = sheet.Range["A2:A6"];

  workbook.SaveAs("Chart.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As ExcelEngine = New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  application.DefaultVersion = ExcelVersion.Xlsx
  Dim workbook As IWorkbook = application.Workbooks.Create(1)
  Dim sheet As IWorksheet = workbook.Worksheets(0)

  'Inserting sample data for the chart
  sheet.Range("A1").Text = "Month"
  sheet.Range("B1").Text = "Product A"
  sheet.Range("C1").Text = "Product B"

  'Months
  sheet.Range("A2").Text = "Jan"
  sheet.Range("A3").Text = "Feb"
  sheet.Range("A4").Text = "Mar"
  sheet.Range("A5").Text = "Apr"
  sheet.Range("A6").Text = "May"

  'Create a random data
  Dim r As Random = New Random
  For i As Integer = 2 To 6
    For j As Integer = 2 To 3
      sheet.Range(i, j).Number = r.Next(0, 500)
	Next j
  Next i
  
  Dim chart As IChartShape = sheet.Charts.Add()

  'Set chart type
  chart.ChartType = ExcelChartType.Line

  'Set Chart Title
  chart.ChartTitle = "Product Sales comparison"

  'Set first serie
  Dim productA As IChartSerie = chart.Series.Add("ProductA")
  productA.Values = sheet.Range("B2:B6")
  productA.CategoryLabels = sheet.Range("A2:A6")

  'set second serie
  Dim productB As IChartSerie = chart.Series.Add("ProductB")
  productB.Values = sheet.Range("C2:C6")
  productB.CategoryLabels = sheet.Range("A2:A6")

  workbook.SaveAs("Chart.xlsx")
End Using
{% endhighlight %}
{% endtabs %}  

A complete working example to create a chart through series in C# is present on [this GitHub page](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Create%20and%20Edit%20Charts/Chart%20through%20Series).

### Sparkline chart

[Sparkline](https://support.microsoft.com/en-us/office/use-sparklines-to-show-data-trends-1474e169-008c-4783-926b-5c60e620f5ca?ui=en-us&rs=en-us&ad=us) is a small chart in a worksheet cell that provides a visual representation of data.

#### Creation of sparkline chart

XlsIO provides support for creation, modification and removal of Sparklines.

* [ISparklineGroups](https://help.syncfusion.com/cr/file-formats/Syncfusion.XlsIO.ISparklineGroups.html) interface caches the SparklineGroup that need to be added to the Spreadsheet. 
* [ISparklineGroup](https://help.syncfusion.com/cr/file-formats/Syncfusion.XlsIO.ISparklineGroup.html) represents Sparklines in object, and has properties that allows  to customize it. 
* [ISparklines](https://help.syncfusion.com/cr/file-formats/Syncfusion.XlsIO.ISparklines.html) interface returns the collection of Sparkline present in a Worksheet. 
* [ISparkline](https://help.syncfusion.com/cr/file-formats/Syncfusion.XlsIO.ISparkline.html) represents a sparkline in the Sparklines. Currently, XlsIO supports all the three types of sparklines - Line, Column, Win/Loss.

The following code example illustrates how to create Sparkline chart.

{% tabs %}  
{% highlight c# tabtitle="C# [Cross-platform]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Xlsx;
  FileStream inputStream = new FileStream("spark.xlsx", FileMode.Open, FileAccess.Read);
  IWorkbook workbook = application.Workbooks.Open(inputStream, ExcelOpenType.Automatic);
  IWorksheet sheet = workbook.Worksheets[0];

  //Add SparklineGroups
  ISparklineGroup sparklineGroup = sheet.SparklineGroups.Add();

  //Add SparkLineType
  sparklineGroup.SparklineType = SparklineType.Line;
  sparklineGroup.MarkersColor = Color.BlueViolet;

  //Add sparklines
  ISparklines sparklines = sparklineGroup.Add();
  IRange dataRange = sheet.Range["B2:F4"];
  IRange referenceRange = sheet.Range["G2:G4"];
  sparklines.Add(dataRange, referenceRange);

  //Saving the workbook as stream
  FileStream stream = new FileStream("Sparkline.xlsx", FileMode.Create, FileAccess.ReadWrite);
  workbook.SaveAs(stream);
  stream.Dispose();
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Xlsx;
  IWorkbook workbook = application.Workbooks.Open("spark.xlsx", ExcelOpenType.Automatic);
  IWorksheet sheet = workbook.Worksheets[0];

  //Add SparklineGroups
  ISparklineGroup sparklineGroup = sheet.SparklineGroups.Add();

  //Add SparkLineType
  sparklineGroup.SparklineType = SparklineType.Line;
  sparklineGroup.MarkersColor = Color.BlueViolet;

  //Add sparklines
  ISparklines sparklines = sparklineGroup.Add();
  IRange dataRange = sheet.Range["B2:F4"];
  IRange referenceRange = sheet.Range["G2:G4"];
  sparklines.Add(dataRange, referenceRange);

  string fileName = "Sparkline.xlsx";
  workbook.SaveAs(fileName);
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As ExcelEngine = New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  application.DefaultVersion = ExcelVersion.Xlsx
  Dim workbook As IWorkbook = application.Workbooks.Open("spark.xlsx", ExcelOpenType.Automatic)
  Dim sheet As IWorksheet = workbook.Worksheets(0)

  'Add SparklineGroups
  Dim sparklineGroup As ISparklineGroup = sheet.SparklineGroups.Add()

  'Add SparkLineType
  sparklineGroup.SparklineType = SparklineType.Line
  sparklineGroup.MarkersColor = Color.BlueViolet

  'Add sparklines
  Dim sparklines As ISparklines = sparklineGroup.Add()
  Dim dataRange As IRange = sheet.Range("B2:F4")
  Dim referenceRange As IRange = sheet.Range("G2:G4")
  sparklines.Add(dataRange, referenceRange)

  Dim fileName As String = "Sparkline.xlsx"
  workbook.SaveAs(fileName)
End Using
{% endhighlight %}
{% endtabs %}  

A complete working example to create sparkline chart in C# is present on [this GitHub page](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Create%20and%20Edit%20Charts/Create%20Sparkline).

#### Modifying an existing sparkline chart

XlsIO provides an option to edit the data of existing Sparklines. 

The following code example illustrates how to edit an existing sparkline chart.

{% tabs %}  
{% highlight c# tabtitle="C# [Cross-platform]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Xlsx;
  FileStream inputStream = new FileStream("Sparkline.xlsx", FileMode.Open, FileAccess.Read);
  IWorkbook workbook = application.Workbooks.Open(inputStream, ExcelOpenType.Automatic);
  IWorksheet sheet = workbook.Worksheets[0];

  ISparklineGroup sparklineGroup = sheet.SparklineGroups[0];
  ISparklines sparklines = sparklineGroup[0];
  IRange dataRange = sheet["A1:C4"];
  IRange referenceRange = sheet["D1:D4"];

  //Edit the existing sparklines data
  sparklines.RefreshRanges(dataRange, referenceRange);

  //Saving the workbook as stream
  FileStream stream = new FileStream("Output.xlsx", FileMode.Create, FileAccess.ReadWrite);
  workbook.SaveAs(stream);
  stream.Dispose();
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Xlsx;
  IWorkbook workbook = application.Workbooks.Open("Sparkline.xlsx", ExcelOpenType.Automatic);
  IWorksheet sheet = workbook.Worksheets[0];

  ISparklineGroup sparklineGroup = sheet.SparklineGroups[0];
  ISparklines sparklines = sparklineGroup[0];
  IRange dataRange = sheet["A1:C4"];
  IRange referenceRange = sheet["D1:D4"];

  //Edit the existing sparklines data
  sparklines.RefreshRanges(dataRange, referenceRange);
  workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As ExcelEngine = New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  application.DefaultVersion = ExcelVersion.Xlsx
  Dim workbook As IWorkbook = application.Workbooks.Open("Sparkline.xlsx", ExcelOpenType.Automatic)
  Dim sheet As IWorksheet = workbook.Worksheets(0)

  Dim sparklineGroup As ISparklineGroup = sheet.SparklineGroups(0)
  Dim sparklines As ISparklines = sparklineGroup(0)
  Dim dataRange As IRange = sheet("A1:C4")
  Dim referenceRange As IRange = sheet("D1:D4")

  'Edit the existing sparklines data
  sparklines.RefreshRanges(dataRange, referenceRange)
  workbook.SaveAs("Output.xlsx")
End Using
{% endhighlight %}
{% endtabs %}  

A complete working example to edit an existing sparklines in C# is present on [this GitHub page](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Create%20and%20Edit%20Charts/Edit%20Sparkline).

#### Removing Sparklines

XlsIO also provides an option to remove sparklines from a sparkline group and to remove the entire sparkline group from the worksheet.

The following code example illustrates how to remove sparklines.

{% tabs %}  
{% highlight c# tabtitle="C# [Cross-platform]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Xlsx;
  FileStream inputStream = new FileStream("Sparkline.xlsx", FileMode.Open, FileAccess.Read);
  IWorkbook workbook = application.Workbooks.Open(inputStream, ExcelOpenType.Automatic);
  IWorksheet sheet = workbook.Worksheets[0];

  ISparklineGroup sparklineGroup = sheet.SparklineGroups[0];
  ISparklines sparklines = sparklineGroup[0];

  //Remove sparkline specified by index from the sparklines
  sparklines.Remove(sparklines[1]);

  //Remove sparklines from the sparkline group
  sparklineGroup.Remove(sparklines);

  //Remove sparkline group from the sheet
  sheet.SparklineGroups.Remove(sparklineGroup);

  //Saving the workbook as stream
  FileStream stream = new FileStream("Output.xlsx", FileMode.Create, FileAccess.ReadWrite);
  workbook.SaveAs(stream);
  stream.Dispose();
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Xlsx;
  IWorkbook workbook = application.Workbooks.Open("Sparkline.xlsx", ExcelOpenType.Automatic);
  IWorksheet sheet = workbook.Worksheets[0];

  ISparklineGroup sparklineGroup = sheet.SparklineGroups[0];
  ISparklines sparklines = sparklineGroup[0];

  //Remove sparkline specified by index from the sparklines
  sparklines.Remove(sparklines[1]);

  //Remove sparklines from the sparkline group
  sparklineGroup.Remove(sparklines);

  //Remove sparkline group from the sheet
  sheet.SparklineGroups.Remove(sparklineGroup);

  workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As ExcelEngine = New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  application.DefaultVersion = ExcelVersion.Xlsx
  Dim workbook As IWorkbook = application.Workbooks.Open("Sample.xlsx", ExcelOpenType.Automatic)
  Dim sheet As IWorksheet = workbook.Worksheets(0)

  Dim sparklineGroup As ISparklineGroup = sheet.SparklineGroups(0)
  Dim sparklines As ISparklines = sparklineGroup(0)

  'Remove sparkline specified by index from the sparklines
  sparklines.Remove(sparklines(1))

  'Remove sparklines from the sparkline group
  sparklineGroup.Remove(sparklines)

  'Remove sparkline group from the sheet
  sheet.SparklineGroups.Remove(sparklineGroup)

  workbook.SaveAs("Output.xlsx")
End Using
{% endhighlight %}
{% endtabs %}  

A complete working example to remove sparklines in C# is present on [this GitHub page](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Create%20and%20Edit%20Charts/Remove%20Sparklines).

N> Sparklines are supported only from Excel 2007 onwards and are ignored in the earlier versions.

### Excel 2016 Charts

XlsIO supports creating and manipulating new and modern chart types such as waterfall, histogram, pareto, box and whisker, tree map, and sunburst, all of which are introduced in Microsoft Excel 2016.

#### Creating a Funnel chart
 
A [Funnel](https://support.microsoft.com/en-us/office/create-a-funnel-chart-ba21bcba-f325-4d9f-93df-97074589a70e?ui=en-us&rs=en-us&ad=us) chart visualizes data progression through stages in a process, displaying it in a funnel shape. Each section's width corresponds to the magnitude of values at that stage.

The following code example illustrates how to create a Funnel chart.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Excel2016;
  FileStream inputStream = new FileStream("Sample.xlsx", FileMode.Open, FileAccess.Read);
  IWorkbook workbook = application.Workbooks.Open(inputStream, ExcelOpenType.Automatic);
  IWorksheet sheet = workbook.Worksheets[0];

  //Create a chart
  IChartShape chart = sheet.Charts.Add();

  //Set chart type as Funnel
  chart.ChartType = ExcelChartType.Funnel;

  //Set data range in the worksheet
  chart.DataRange = sheet.Range["A1:B6"];

  //Set the chart title
  chart.ChartTitle = "Funnel";

  //Formatting the legend and data label option
  chart.HasLegend = false;
  chart.Series[0].DataPoints.DefaultDataPoint.DataLabels.IsValue = true;
  chart.Series[0].DataPoints.DefaultDataPoint.DataLabels.Size = 8;

  //Saving the workbook as stream
  FileStream stream = new FileStream("Funnel.xlsx", FileMode.Create, FileAccess.ReadWrite);
  workbook.SaveAs(stream);
  stream.Dispose();
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Excel2016;
  IWorkbook workbook = application.Workbooks.Open("Sample.xlsx", ExcelOpenType.Automatic);
  IWorksheet sheet = workbook.Worksheets[0];

  //Create a chart
  IChartShape chart = sheet.Charts.Add();

  //Set chart type as Funnel
  chart.ChartType = ExcelChartType.Funnel;

  //Set data range in the worksheet
  chart.DataRange = sheet.Range["A1:B6"];

  //Set the chart title
  chart.ChartTitle = "Funnel";

  //Formatting the legend and data label option
  chart.HasLegend = false;
  chart.Series[0].DataPoints.DefaultDataPoint.DataLabels.IsValue = true;
  chart.Series[0].DataPoints.DefaultDataPoint.DataLabels.Size = 8;

  workbook.SaveAs("Funnel.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As ExcelEngine = New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  application.DefaultVersion = ExcelVersion.Excel2016
  Dim workbook As IWorkbook = application.Workbooks.Open("Sample.xlsx", ExcelOpenType.Automatic)
  Dim sheet As IWorksheet = workbook.Worksheets(0)

  'Create a chart
  Dim chart As IChartShape = sheet.Charts.Add()

  'Set chart type as Funnel
  chart.ChartType = ExcelChartType.Funnel

  'Set data range in the worksheet
  chart.DataRange = sheet.Range("A1:B6")

  'Set the chart title
  chart.ChartTitle = "Funnel"

  'Formatting the legend and data label option
  chart.HasLegend = False
  chart.Series(0).DataPoints.DefaultDataPoint.DataLabels.IsValue = True
  chart.Series(0).DataPoints.DefaultDataPoint.DataLabels.Size = 8

  workbook.SaveAs("Funnel.xlsx")
End Using
{% endhighlight %}
{% endtabs %}

A complete working example to create funnel chart in C# is present on [this GitHub page](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Create%20and%20Edit%20Charts/Funnel).

By executing the program, you will get the Excel file as below

![funnel chart](Working-with-Charts_images/funnel.jpeg)

#### Creating a Box and Whisker chart

[Box and Whisker](https://support.microsoft.com/en-us/office/create-a-box-and-whisker-chart-62f4219f-db4b-4754-aca8-4743f6190f0d?ui=en-us&rs=en-us&ad=us) chart shows distribution of data into quartiles, highlighting the mean and outliers. Box and Whisker charts are most commonly used in statistical analysis.

The following code example illustrates how to create Box and Whisker chart.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Excel2016;
  FileStream inputStream = new FileStream("Sample.xlsx", FileMode.Open, FileAccess.Read);
  IWorkbook workbook = application.Workbooks.Open(inputStream, ExcelOpenType.Automatic);
  IWorksheet sheet = workbook.Worksheets[0];

  //Create a chart
  IChartShape chart = sheet.Charts.Add();

  //Set the chart title
  chart.ChartTitle = "Test Scores";

  //Set chart type as Box and Whisker
  chart.ChartType = ExcelChartType.BoxAndWhisker;

  //Set data range in the worksheet
  chart.DataRange = sheet["A1:D16"];

  //Box and Whisker settings on first series
  IChartSerie seriesA = chart.Series[0];
  seriesA.SerieFormat.ShowInnerPoints = false;
  seriesA.SerieFormat.ShowOutlierPoints = true;
  seriesA.SerieFormat.ShowMeanMarkers = true;
  seriesA.SerieFormat.ShowMeanLine = false;
  seriesA.SerieFormat.QuartileCalculationType = ExcelQuartileCalculation.ExclusiveMedian;

  //Box and Whisker settings on second series   
  IChartSerie seriesB = chart.Series[1];
  seriesB.SerieFormat.ShowInnerPoints = false;
  seriesB.SerieFormat.ShowOutlierPoints = true;
  seriesB.SerieFormat.ShowMeanMarkers = true;
  seriesB.SerieFormat.ShowMeanLine = false;
  seriesB.SerieFormat.QuartileCalculationType = ExcelQuartileCalculation.InclusiveMedian;

  //Box and Whisker settings on third series   
  IChartSerie seriesC = chart.Series[2];
  seriesC.SerieFormat.ShowInnerPoints = false;
  seriesC.SerieFormat.ShowOutlierPoints = true;
  seriesC.SerieFormat.ShowMeanMarkers = true;
  seriesC.SerieFormat.ShowMeanLine = false;
  seriesC.SerieFormat.QuartileCalculationType = ExcelQuartileCalculation.ExclusiveMedian;

  //Saving the workbook as stream
  FileStream stream = new FileStream("Box and Whisker.xlsx", FileMode.Create, FileAccess.ReadWrite);
  workbook.SaveAs(stream);
  stream.Dispose();
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Excel2016;
  IWorkbook workbook = application.Workbooks.Open("Sample.xlsx", ExcelOpenType.Automatic);
  IWorksheet sheet = workbook.Worksheets[0];

  //Create a chart
  IChartShape chart = sheet.Charts.Add();

  //Set the chart title
  chart.ChartTitle = "Test Scores";

  //Set chart type as Box and Whisker
  chart.ChartType = ExcelChartType.BoxAndWhisker;

  //Set data range in the worksheet
  chart.DataRange = sheet["A1:D16"];

  //Box and Whisker settings on first series
  IChartSerie seriesA = chart.Series[0];
  seriesA.SerieFormat.ShowInnerPoints = false;
  seriesA.SerieFormat.ShowOutlierPoints = true;
  seriesA.SerieFormat.ShowMeanMarkers = true;
  seriesA.SerieFormat.ShowMeanLine = false;
  seriesA.SerieFormat.QuartileCalculationType = ExcelQuartileCalculation.ExclusiveMedian;

  //Box and Whisker settings on second series
  IChartSerie seriesB = chart.Series[1];
  seriesB.SerieFormat.ShowInnerPoints = false;
  seriesB.SerieFormat.ShowOutlierPoints = true;
  seriesB.SerieFormat.ShowMeanMarkers = true;
  seriesB.SerieFormat.ShowMeanLine = false;
  seriesB.SerieFormat.QuartileCalculationType = ExcelQuartileCalculation.InclusiveMedian;

  //Box and Whisker settings on third series
  IChartSerie seriesC = chart.Series[2];
  seriesC.SerieFormat.ShowInnerPoints = false;
  seriesC.SerieFormat.ShowOutlierPoints = true;
  seriesC.SerieFormat.ShowMeanMarkers = true;
  seriesC.SerieFormat.ShowMeanLine = false;
  seriesC.SerieFormat.QuartileCalculationType = ExcelQuartileCalculation.ExclusiveMedian;

  workbook.SaveAs("Box and Whisker.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As ExcelEngine = New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  application.DefaultVersion = ExcelVersion.Excel2016
  Dim workbook As IWorkbook = application.Workbooks.Open("Sample.xlsx", ExcelOpenType.Automatic)
  Dim sheet As IWorksheet = workbook.Worksheets(0)

  'Create a chart
  Dim chart As IChartShape = sheet.Charts.Add()

  'Set the chart title
  chart.ChartTitle = "Test Scores"

  'Set chart type as Box and Whisker
  chart.ChartType = ExcelChartType.BoxAndWhisker

  'Set data range in the worksheet
  chart.DataRange = sheet("A1:D16")

  'Box and Whisker settings on first series
  Dim seriesA As IChartSerie = chart.Series(0)
  seriesA.SerieFormat.ShowInnerPoints = False
  seriesA.SerieFormat.ShowOutlierPoints = True
  seriesA.SerieFormat.ShowMeanMarkers = True
  seriesA.SerieFormat.ShowMeanLine = False
  seriesA.SerieFormat.QuartileCalculationType = ExcelQuartileCalculation.ExclusiveMedian

  'Box and Whisker settings on second series
  Dim seriesB As IChartSerie = chart.Series(1)
  seriesB.SerieFormat.ShowInnerPoints = False
  seriesB.SerieFormat.ShowOutlierPoints = True
  seriesB.SerieFormat.ShowMeanMarkers = True
  seriesB.SerieFormat.ShowMeanLine = False
  seriesB.SerieFormat.QuartileCalculationType = ExcelQuartileCalculation.InclusiveMedian

  'Box and Whisker settings on third series
  Dim seriesC As IChartSerie = chart.Series(2)
  seriesC.SerieFormat.ShowInnerPoints = False
  seriesC.SerieFormat.ShowOutlierPoints = True
  seriesC.SerieFormat.ShowMeanMarkers = True
  seriesC.SerieFormat.ShowMeanLine = False
  seriesC.SerieFormat.QuartileCalculationType = ExcelQuartileCalculation.ExclusiveMedian

  workbook.SaveAs("Box and Whisker.xlsx")
End Using
{% endhighlight %}
{% endtabs %}

A complete working example to create box and whisker chart in C# is present on [this GitHub page](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Create%20and%20Edit%20Charts/Box%20and%20Whisker).

By executing the program, you will get the Excel file as below

![box and whisker chart](Working-with-Charts_images/boxandwhisker.jpeg)

#### Creating a Waterfall chart

[Waterfall](https://support.microsoft.com/en-us/office/create-a-waterfall-chart-8de1ece4-ff21-4d37-acd7-546f5527f185?ui=en-us&rs=en-us&ad=us) chart helps to quickly understand the finances of business owners by viewing profit and loss statements. With a Waterfall chart, you can quickly illustrate the line items in your financial data and get a clear picture of how each item is impacting your bottom line.

The following code example illustrates how to create Waterfall chart.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Excel2016;
  FileStream inputStream = new FileStream("Sample.xlsx", FileMode.Open, FileAccess.Read);
  IWorkbook workbook = application.Workbooks.Open(inputStream,ExcelOpenType.Automatic);
  IWorksheet sheet = workbook.Worksheets[0];

  //Create a chart
  IChartShape chart = sheet.Charts.Add();

  //Set chart type as Waterfall
  chart.ChartType = ExcelChartType.WaterFall;

  //Set data range in the worksheet
  chart.DataRange = sheet["A2:B8"];

  //Data point settings as total in chart
  chart.Series[0].DataPoints[3].SetAsTotal = true;
  chart.Series[0].DataPoints[6].SetAsTotal = true;

  //Showing the connector lines between data points
  chart.Series[0].SerieFormat.ShowConnectorLines = true;

  //Set the chart title
  chart.ChartTitle = "Company Profit (in USD)";

  //Formatting data label and legend option
  chart.Series[0].DataPoints.DefaultDataPoint.DataLabels.IsValue = true;
  chart.Series[0].DataPoints.DefaultDataPoint.DataLabels.Size = 8;
  chart.Legend.Position = ExcelLegendPosition.Right;

  //Saving the workbook as stream
  FileStream stream = new FileStream("Waterfall.xlsx", FileMode.Create, FileAccess.ReadWrite);
  workbook.SaveAs(stream);
  stream.Dispose();
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Excel2016;
  IWorkbook workbook = application.Workbooks.Open("Sample.xlsx", ExcelOpenType.Automatic);
  IWorksheet sheet = workbook.Worksheets[0];

  //Create a chart
  IChartShape chart = sheet.Charts.Add();

  //Set chart type as Waterfall
  chart.ChartType = ExcelChartType.WaterFall;

  //Set data range in the worksheet
  chart.DataRange = sheet["A2:B8"];

  //Data point settings as total in chart
  chart.Series[0].DataPoints[3].SetAsTotal = true;
  chart.Series[0].DataPoints[6].SetAsTotal = true;

  //Showing the connector lines between data points
  chart.Series[0].SerieFormat.ShowConnectorLines = true;

  //Set the chart title
  chart.ChartTitle = "Company Profit (in USD)";

  //Formatting data label and legend option
  chart.Series[0].DataPoints.DefaultDataPoint.DataLabels.IsValue = true;
  chart.Series[0].DataPoints.DefaultDataPoint.DataLabels.Size = 8;
  chart.Legend.Position = ExcelLegendPosition.Right;

  workbook.SaveAs("Waterfall.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As ExcelEngine = New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  application.DefaultVersion = ExcelVersion.Excel2016
  Dim workbook As IWorkbook = application.Workbooks.Open("Sample.xlsx", ExcelOpenType.Automatic)
  Dim sheet As IWorksheet = workbook.Worksheets(0)

  'Create a chart
  Dim chart As IChartShape = sheet.Charts.Add()

  'Set chart type as Waterfall
  chart.ChartType = ExcelChartType.WaterFall

  'Set data range in the worksheet
  chart.DataRange = sheet("A2:B8")

  'Datapoint settings as total in chart
  chart.Series(0).DataPoints(3).SetAsTotal = True
  chart.Series(0).DataPoints(6).SetAsTotal = True

  'Showing the connector lines between data points
  chart.Series(0).SerieFormat.ShowConnectorLines = True

  'Set the chart title
  chart.ChartTitle = "Company Profit (in USD)"

  'Formatting data label and legend option
  chart.Series(0).DataPoints.DefaultDataPoint.DataLabels.IsValue = True
  chart.Series(0).DataPoints.DefaultDataPoint.DataLabels.Size = 8
  chart.Legend.Position = ExcelLegendPosition.Right

  workbook.SaveAs("Waterfall.xlsx")
End Using
{% endhighlight %}
{% endtabs %}

A complete working example to create waterfall chart in C# is present on [this GitHub page](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Create%20and%20Edit%20Charts/Waterfall).

By executing the program, you will get the Excel file as below

![waterfall chart](Working-with-Charts_images/waterfall.jpeg)

#### Creation of Histogram chart

A [Histogram](https://support.microsoft.com/en-us/office/create-a-histogram-85680173-064b-4024-b39d-80f17ff2f4e8?ui=en-us&rs=en-us&ad=us) chart visually represents the frequencies within a distribution of data. It consists of a series of columns, called bins, where each bin represents a range of values.

The following code example illustrates how to create Histogram chart.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Excel2016;
  FileStream inputStream = new FileStream("Sample.xlsx", FileMode.Open, FileAccess.Read);
  IWorkbook workbook = application.Workbooks.Open(inputStream, ExcelOpenType.Automatic);
  IWorksheet sheet = workbook.Worksheets[0];

  //Create a chart
  IChartShape chart = sheet.Charts.Add();

  //Set chart type as Histogram       
  chart.ChartType = ExcelChartType.Histogram;

  //Set data range in the worksheet   
  chart.DataRange = sheet["A1:A15"];

  //Category axis bin settings        
  chart.PrimaryCategoryAxis.BinWidth = 8;

  //Gap width settings
  chart.Series[0].SerieFormat.CommonSerieOptions.GapWidth = 6;

  //Set the chart title and axis title
  chart.ChartTitle = "Height Data";
  chart.PrimaryValueAxis.Title = "Number of students";
  chart.PrimaryCategoryAxis.Title = "Height";

  //Hiding the legend
  chart.HasLegend = false;

  //Saving the workbook as stream
  FileStream stream = new FileStream("Histogram.xlsx", FileMode.Create, FileAccess.ReadWrite);
  workbook.SaveAs(stream);
  stream.Dispose();
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Excel2016;
  IWorkbook workbook = application.Workbooks.Open("Sample.xlsx", ExcelOpenType.Automatic);
  IWorksheet sheet = workbook.Worksheets[0];

  //Create a chart
  IChartShape chart = sheet.Charts.Add();

  //Set chart type as Histogram
  chart.ChartType = ExcelChartType.Histogram;

  //Set data range in the worksheet
  chart.DataRange = sheet["A1:A15"];

  //Category axis bin settings
  chart.PrimaryCategoryAxis.BinWidth = 8;

  //Gap width settings
  chart.Series[0].SerieFormat.CommonSerieOptions.GapWidth = 6;

  //Set the chart title and axis title
  chart.ChartTitle = "Height Data";
  chart.PrimaryValueAxis.Title = "Number of students";
  chart.PrimaryCategoryAxis.Title = "Height";

  //Hiding the legend
  chart.HasLegend = false;

  workbook.SaveAs("Histogram.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As ExcelEngine = New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  application.DefaultVersion = ExcelVersion.Excel2016
  Dim workbook As IWorkbook = application.Workbooks.Open("Sample.xlsx", ExcelOpenType.Automatic)
  Dim sheet As IWorksheet = workbook.Worksheets(0)

  'Create a chart
  Dim chart As IChartShape = sheet.Charts.Add()

  'Set chart type as Histogram
  chart.ChartType = ExcelChartType.Histogram

  'Set data range in the worksheet
  chart.DataRange = sheet("A1:A15")

  'Category axis bin settings
  chart.PrimaryCategoryAxis.BinWidth = 8

  'Gap width settings
  chart.Series(0).SerieFormat.CommonSerieOptions.GapWidth = 6

  'Set the chart title and axis title
  chart.ChartTitle = "Height Data"
  chart.PrimaryValueAxis.Title = "Number of students"
  chart.PrimaryCategoryAxis.Title = "Height"

  'Hiding the legend
  chart.HasLegend = False

  workbook.SaveAs("Histogram.xlsx")
End Using
{% endhighlight %}
{% endtabs %}

A complete working example to create histogram chart in C# is present on [this GitHub page](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Create%20and%20Edit%20Charts/Histogram).

By executing the program, you will get the Excel file as below

![histogram chart](Working-with-Charts_images/histogram.jpeg)

#### Creation of Pareto chart

[Pareto](https://support.microsoft.com/en-us/office/create-a-pareto-chart-a1512496-6dba-4743-9ab1-df5012972856?ui=en-us&rs=en-us&ad=us) is a sorted histogram where columns sorted in descending order and a line representing the cumulative total percentage.

The following code example illustrates how to create Pareto chart.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Excel2016;
  FileStream inputStream = new FileStream("Sample.xlsx", FileMode.Open, FileAccess.Read);
  IWorkbook workbook = application.Workbooks.Open(inputStream, ExcelOpenType.Automatic);
  IWorksheet sheet = workbook.Worksheets[0];

  //Create a chart
  IChartShape chart = sheet.Charts.Add();

  //Set chart type as Pareto
  chart.ChartType = ExcelChartType.Pareto;

  //Set data range in the worksheet   
  chart.DataRange = sheet["A2:B8"];

  //Set category values as bin values   
  chart.PrimaryCategoryAxis.IsBinningByCategory = true;

  //Formatting Pareto line      
  chart.Series[0].ParetoLineFormat.LineProperties.ColorIndex = ExcelKnownColors.Bright_green;

  //Gap width settings
  chart.Series[0].SerieFormat.CommonSerieOptions.GapWidth = 6;

  //Set the chart title
  chart.ChartTitle = "Expenses";

  //Hiding the legend
  chart.HasLegend = false;

  //Saving the workbook as stream
  FileStream stream = new FileStream("Pareto.xlsx", FileMode.Create, FileAccess.ReadWrite);
  workbook.SaveAs(stream);
  stream.Dispose();
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Excel2016;
  IWorkbook workbook = application.Workbooks.Open("Sample.xlsx", ExcelOpenType.Automatic);
  IWorksheet sheet = workbook.Worksheets[0];

  //Create a chart
  IChartShape chart = sheet.Charts.Add();

  //Set chart type as Pareto
  chart.ChartType = ExcelChartType.Pareto;

  //Set data range in the worksheet   
  chart.DataRange = sheet["A2:B8"];

  //Set category values as bin values   
  chart.PrimaryCategoryAxis.IsBinningByCategory = true;

  //Formatting Pareto line      
  chart.Series[0].ParetoLineFormat.LineProperties.ColorIndex = ExcelKnownColors.Bright_green;

  //Gap width settings
  chart.Series[0].SerieFormat.CommonSerieOptions.GapWidth = 6;

  //Set the chart title
  chart.ChartTitle = "Expenses";

  //Hiding the legend
  chart.HasLegend = false;

  workbook.SaveAs("Pareto.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As ExcelEngine = New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  application.DefaultVersion = ExcelVersion.Excel2016
  Dim workbook As IWorkbook = application.Workbooks.Open("Sample.xlsx", ExcelOpenType.Automatic)
  Dim sheet As IWorksheet = workbook.Worksheets(0)

  'Create a chart
  Dim chart As IChartShape = sheet.Charts.Add()

  'Set chart type as Pareto
  chart.ChartType = ExcelChartType.Pareto

  'Set data range in the worksheet
  chart.DataRange = sheet("A2:B8")

  'Set category axis as bin option
  chart.PrimaryCategoryAxis.IsBinningByCategory = True

  'Formatting Pareto line
  chart.Series(0).ParetoLineFormat.LineProperties.ColorIndex = ExcelKnownColors.Bright_green

  'Gap width settings
  chart.Series(0).SerieFormat.CommonSerieOptions.GapWidth = 6

  'Set the chart title
  chart.ChartTitle = "Expenses"

  'Hiding the legend
  chart.HasLegend = False

  workbook.SaveAs("Pareto.xlsx")
End Using
{% endhighlight %}
{% endtabs %}

A complete working example to create pareto chart in C# is present on [this GitHub page](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Create%20and%20Edit%20Charts/Pareto).

By executing the program, you will get the Excel file as below

![pareto chart](Working-with-Charts_images/pareto.jpeg)


#### Creation ofTreemap chart

[Treemap](https://support.microsoft.com/en-us/office/create-a-treemap-chart-in-office-dfe86d28-a610-4ef5-9b30-362d5c624b68?ui=en-us&rs=en-us&ad=us) provides a hierarchical view of data as clustered rectangle with a specific weighted attribute determining the size of the rectangle. 

The following code example illustrates how to create Treemap chart.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Excel2016;
  FileStream inputStream = new FileStream("Sample.xlsx", FileMode.Open, FileAccess.Read);
  IWorkbook workbook = application.Workbooks.Open(inputStream, ExcelOpenType.Automatic);
  IWorksheet sheet = workbook.Worksheets[0];

  //Create a chart
  IChartShape chart = sheet.Charts.Add();

  //Set chart type as TreeMap
  chart.ChartType = ExcelChartType.TreeMap;

  //Set data range in the worksheet
  chart.DataRange = sheet["A2:C11"];

  //Set the chart title
  chart.ChartTitle = "Area by countries";

  //Set the Treemap label option
  chart.Series[0].SerieFormat.TreeMapLabelOption = ExcelTreeMapLabelOption.Banner;

  //Formatting data labels      
  chart.Series[0].DataPoints.DefaultDataPoint.DataLabels.Size = 8;

  //Saving the workbook as stream
  FileStream stream = new FileStream("Treemap.xlsx", FileMode.Create, FileAccess.ReadWrite);
  workbook.SaveAs(stream);
  stream.Dispose();
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Excel2016;
  IWorkbook workbook = application.Workbooks.Open("Sample.xlsx", ExcelOpenType.Automatic);
  IWorksheet sheet = workbook.Worksheets[0];

  //Create a chart
  IChartShape chart = sheet.Charts.Add();

  //Set chart type as TreeMap
  chart.ChartType = ExcelChartType.TreeMap;

  //Set data range in the worksheet
  chart.DataRange = sheet["A2:C11"];

  //Set the chart title
  chart.ChartTitle = "Area by countries";

  //Set the Treemap label option
  chart.Series[0].SerieFormat.TreeMapLabelOption = ExcelTreeMapLabelOption.Banner;

  //Formatting data labels
  chart.Series[0].DataPoints.DefaultDataPoint.DataLabels.Size = 8;

  workbook.SaveAs("Treemap.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As ExcelEngine = New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  application.DefaultVersion = ExcelVersion.Excel2016
  Dim workbook As IWorkbook = application.Workbooks.Open("Sample.xlsx", ExcelOpenType.Automatic)
  Dim sheet As IWorksheet = workbook.Worksheets(0)

  'Create a chart
  Dim chart As IChartShape = sheet.Charts.Add()

  'Set chart type as TreeMap
  chart.ChartType = ExcelChartType.TreeMap

  'Set data range in the worksheet
  chart.DataRange = sheet("A2:C11")

  'Set the chart title
  chart.ChartTitle = "Area by countries"

  'Set the Treemap label option
  chart.Series(0).SerieFormat.TreeMapLabelOption = ExcelTreeMapLabelOption.Banner

  'Formatting data labels
  chart.Series(0).DataPoints.DefaultDataPoint.DataLabels.Size = 8

  workbook.SaveAs("Treemap.xlsx")
End Using
{% endhighlight %}
{% endtabs %}

A complete working example to create treemap chart in C# is present on [this GitHub page](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Create%20and%20Edit%20Charts/Treemap).

By executing the program, you will get the Excel file as below

![treemap chart](Working-with-Charts_images/treemap.jpeg)

#### Creation of Sunburst chart

[Sunburst](https://support.microsoft.com/en-us/office/create-a-sunburst-chart-in-office-4a127977-62cd-4c11-b8c7-65b84a358e0c?ui=en-us&rs=en-us&ad=us) provides a hierarchical view of data where each level of the hierarchy is represented by one ring or circle with the innermost circle as the top of the hierarchy.

The following code example illustrates how to create Sunburst chart.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Excel2016;
  FileStream inputStream = new FileStream("Sample.xlsx", FileMode.Open, FileAccess.Read);
  IWorkbook workbook = application.Workbooks.Open(inputStream, ExcelOpenType.Automatic);
  IWorksheet sheet = workbook.Worksheets[0];

  //Create a chart
  IChartShape chart = sheet.Charts.Add();

  //Set chart type as Sunburst
  chart.ChartType = ExcelChartType.SunBurst;

  //Set data range in the worksheet
  chart.DataRange = sheet["A1:D16"];

  //Set the chart title
  chart.ChartTitle = "Sales by annual";

  //Formatting data labels      
  chart.Series[0].DataPoints.DefaultDataPoint.DataLabels.Size = 8;

  //Hiding the legend
  chart.HasLegend = false;

  //Saving the workbook as stream
  FileStream stream = new FileStream("Sunburst.xlsx", FileMode.Create, FileAccess.ReadWrite);
  workbook.SaveAs(stream);
  stream.Dispose();
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Excel2016;
  IWorkbook workbook = application.Workbooks.Open("Sample.xlsx", ExcelOpenType.Automatic);
  IWorksheet sheet = workbook.Worksheets[0];

  //Create a chart
  IChartShape chart = sheet.Charts.Add();

  //Set chart type as Sunburst
  chart.ChartType = ExcelChartType.SunBurst;

  //Set data range in the worksheet
  chart.DataRange = sheet["A1:D16"];

  //Set the chart title
  chart.ChartTitle = "Sales by annual";

  //Formatting data labels
  chart.Series[0].DataPoints.DefaultDataPoint.DataLabels.Size = 8;

  //Hiding the legend
  chart.HasLegend = false;

  workbook.SaveAs("Sunburst.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As ExcelEngine = New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  application.DefaultVersion = ExcelVersion.Excel2016
  Dim workbook As IWorkbook = application.Workbooks.Open("Sample.xlsx", ExcelOpenType.Automatic)
  Dim sheet As IWorksheet = workbook.Worksheets(0)

  'Create a chart
  Dim chart As IChartShape = sheet.Charts.Add()

  'Set chart type as Sunburst
  chart.ChartType = ExcelChartType.SunBurst

  'Set data range in the worksheet
  chart.DataRange = sheet("A1:D16")

  'Set the chart title
  chart.ChartTitle = "Sales by annual"

  'Formatting data labels
  chart.Series(0).DataPoints.DefaultDataPoint.DataLabels.Size = 8

  'Hiding the legend
  chart.HasLegend = False

  workbook.SaveAs("Sunburst.xlsx")
End Using
{% endhighlight %}
{% endtabs %}

A complete working example to create sunburst chart in C# is present on [this GitHub page](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Create%20and%20Edit%20Charts/Sunburst).

By executing the program, you will get the Excel file as below

![sunburst chart](Working-with-Charts_images/sunburst.jpeg)

N>These Charts are supported only in Excel 2016 and are not visible in the earlier versions.

## Customizing the chart and its elements

A chart is composed of various elements such as chart area, plot area, legend, axis, series, data labels etc. These elements can be customized to enhance the visual presentation.

### Elements of Chart

The following image illustrates the basic elements of a chart.

![chart elements](Working-with-Charts_images/Working-with-charts_img2.jpeg)

1. The chart area of the chart.
2. The plot area of the chart.
3. The data points of the data series that are plotted in the chart.
4. The horizontal (category) and vertical (value) axis along which the data is plotted in the chart.
5. The legend of the chart.
6. A chart axis title that you can use in the chart.
7. A data label that you can use to identify the details of a data point in a data series.

#### Chart Title

With the Syncfusion Excel Library, you can customize the chart title by changing its name, font, color, position and more. Click [here](https://help.syncfusion.com/document-processing/excel/excel-library/net/charts/chart-title) for more details.

#### Chart  Area

With the Syncfusion Excel Library, you can customize the chart area by changing its border, color and transparency. Click [here](https://help.syncfusion.com/document-processing/excel/excel-library/net/charts/chart-area) for more details.

#### Chart Plot Area

With the Syncfusion Excel Library, you can customize the chart plot area by changing its border, color, transparency and position. Click [here](https://help.syncfusion.com/document-processing/excel/excel-library/net/charts/chart-plot-area) for more details.

#### Chart Series

With the Syncfusion Excel Library, you can customize the chart series by changing the series name, type, color, border, and more. Click [here](https://help.syncfusion.com/document-processing/excel/excel-library/net/charts/chart-series) for more details.

#### Chart Legend

With the Syncfusion Excel Library, you can customize the chart legend by changing its border, color, font, position, and more. Click [here](https://help.syncfusion.com/document-processing/excel/excel-library/net/charts/chart-legend) for more details.

#### Chart Data Labels

With the Syncfusion Excel Library, you can customize the chart data labels by changing its color, font and position. Click [here](https://help.syncfusion.com/document-processing/excel/excel-library/net/charts/chart-data-labels) for more details.

#### Chart Axis

With the Syncfusion Excel Library, you can customize the chart axes by changing the title, border, font, rotation angle and more. Click [here](https://help.syncfusion.com/document-processing/excel/excel-library/net/charts/chart-axis) for more details.

## Chart Appearnace
 
### Fill Settings

#### Solid Fill

The following code example illustrates how to apply a solid color to the chart area, plot area, and data series of the chart.

{% tabs %}  
{% highlight c# tabtitle="C# [Cross-platform]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Xlsx;
  FileStream inputStream = new FileStream("../../../Data/InputTemplate.xlsx", FileMode.Open, FileAccess.Read);
  IWorkbook workbook = application.Workbooks.Open(inputStream);
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

  //Saving the workbook as streams
  FileStream outputStream = new FileStream("Output.xlsx", FileMode.Create, FileAccess.Write);
  workbook.SaveAs(outputStream);

  //Dispose streams
  outputStream.Dispose();
  inputStream.Dispose();
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

A complete working example to apply a solid fill in C# is present on [this GitHub page]().

#### Pattern Fill

The following code example illustrates how to apply a pattern fill to the chart area, plot area, and data series of the chart.

{% tabs %}  
{% highlight c# tabtitle="C# [Cross-platform]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Xlsx;
  FileStream inputStream = new FileStream("../../../Data/InputTemplate.xlsx", FileMode.Open, FileAccess.Read);
  IWorkbook workbook = application.Workbooks.Open(inputStream);
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

  //Saving the workbook as streams
  FileStream outputStream = new FileStream("Output.xlsx", FileMode.Create, FileAccess.Write);
  workbook.SaveAs(outputStream);

  //Dispose streams
  outputStream.Dispose();
  inputStream.Dispose();
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

A complete working example to apply a pattern fill in C# is present on [this GitHub page]().

#### Gradient Fill

The following code example illustrates how to apply a gradient fill to the chart area, plot area, and data series of the chart.

{% tabs %}  
{% highlight c# tabtitle="C# [Cross-platform]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Xlsx;
  FileStream inputStream = new FileStream("../../../Data/InputTemplate.xlsx", FileMode.Open, FileAccess.Read);
  IWorkbook workbook = application.Workbooks.Open(inputStream);
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

  //Saving the workbook as streams
  FileStream outputStream = new FileStream("Output.xlsx", FileMode.Create, FileAccess.Write);
  workbook.SaveAs(outputStream);

  //Dispose streams
  outputStream.Dispose();
  inputStream.Dispose();
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

A complete working example to apply a gradient fill in C# is present on [this GitHub page]().

#### Picture Fill
The following code example illustrates how to apply a picture fill to the chart area, plot area, and data series of the chart.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Xlsx;
  FileStream inputStream = new FileStream("../../../Data/InputTemplate.xlsx", FileMode.Open, FileAccess.Read);
  IWorkbook workbook = application.Workbooks.Open(inputStream);
  IWorksheet worksheet = workbook.Worksheets[0];
  IChart chart = worksheet.Charts[0];

  //Get data series
  IChartSerie serie1 = chart.Series[0];
  IChartSerie serie2 = chart.Series[1];

  //Getting an image from the stream
  FileStream imageStream1 = new FileStream("../../../Data/Image1.jpg", FileMode.Open, FileAccess.Read);
  Image image1 = Image.FromStream(imageStream1);
  FileStream imageStream2 = new FileStream("../../../Data/Image2.jpg", FileMode.Open, FileAccess.Read);
  Image image2 = Image.FromStream(imageStream2);

  //Set picture fill to chart area
  chart.ChartArea.Fill.UserPicture(image1, "Image");

  //Set picture fill to plot area
  chart.PlotArea.Fill.UserPicture(image1, "Image");

  //Set picture fill to series
  serie1.SerieFormat.Fill.UserPicture(image2, "Image");
  serie2.SerieFormat.Fill.UserPicture(image2, "Image");

  //Saving the workbook
  FileStream outputStream = new FileStream("Output.xlsx", FileMode.Create, FileAccess.Write);
  workbook.SaveAs(outputStream);
       
  //Dispose streams
  outputStream.Dispose();
  imageStream1.Dispose();
  imageStream2.Dispose();
  inputStream.Dispose();
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

  //Set picture fill to plot area
  chart.PlotArea.Fill.UserPicture("Image1.png");

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

  'Set picture fill to plot area
  chart.PlotArea.Fill.UserPicture("Image1.png")

  'Set picture fill to series
  serie1.SerieFormat.Fill.UserPicture("Image2.png")
  serie2.SerieFormat.Fill.UserPicture("Image2.png")

  workbook.SaveAs("Output.xlsx")
End Using
{% endhighlight %}
{% endtabs %}

A complete working example to apply a picture fill in C# is present on [this GitHub page]().

#### No Fill

The following code example illustrates how to apply a no fill to the chart area, plot area, and data series of the chart.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Xlsx;
  FileStream inputStream = new FileStream("../../../Data/InputTemplate.xlsx", FileMode.Open, FileAccess.Read);
  IWorkbook workbook = application.Workbooks.Open(inputStream, ExcelOpenType.Automatic);
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

  //Saving the workbook as stream
  FileStream outputStream = new FileStream("Output.xlsx", FileMode.Create, FileAccess.Write);
  workbook.SaveAs(outputStream);

  //Dispose streams
  outputStream.Dispose();
  inputStream.Dispose();
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

A complete working example to apply a no fill in C# is present on [this GitHub page]().

### Layout and resizing chart elements

#### Layout

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

#### Resizing

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

### Applying 3D Formats

The following code example illustrates how to apply 3D settings such as rotation, side wall, back wall, and floor settings.

{% tabs %}  
{% highlight c# tabtitle="C# [Cross-platform]" %}
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

  //Saving the workbook as stream
  FileStream stream = new FileStream("Chart.xlsx", FileMode.Create, FileAccess.ReadWrite);
  workbook.SaveAs(stream);
  stream.Dispose();
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

A complete working example to apply 3D chart formats in C# is present on [this GitHub page](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Create%20and%20Edit%20Charts/3D%20Chart).

### Explode a Pie Chart

Essential XlsIO allows you to explode either all data points at a single explosion value or each data point at different explosion using [Percent](https://help.syncfusion.com/cr/windowsforms/Syncfusion.XlsIO.IChartSerieDataFormat.html#Syncfusion_XlsIO_IChartSerieDataFormat_Percent) of [IChartSerieDataFormat](https://help.syncfusion.com/cr/file-formats/Syncfusion.XlsIO.IChartSerieDataFormat.html) interface.

You can either create a pie chart and then explode it or directly create an exploded pie chart using XlsIO. Selecting `Pie_Exploded` as [ChartType](https://help.syncfusion.com/cr/file-formats/Syncfusion.XlsIO.IChart.html#Syncfusion_XlsIO_IChart_ChartType) inserts a pie chart with a default explosion of **25%**. Learn how to [Create an Exploded Pie Chart](https://www.syncfusion.com/kb/8539/how-to-create-excel-exploded-pie-chart-in-c-vb-net).

Refer the following complete code snippets.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Xlsx;
  FileStream fileStream = new FileStream("Sample.xlsx", FileMode.Open, FileAccess.Read);
  IWorkbook workbook = application.Workbooks.Open(fileStream);
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

  //Saving the workbook as stream
  FileStream stream = new FileStream("Output.xlsx", FileMode.Create, FileAccess.ReadWrite);
  workbook.SaveAs(stream);
  stream.Dispose();
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

A complete working example to explode a pie chart in C# is present on [this GitHub page](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Create%20and%20Edit%20Charts/Explode%20Pie%20Chart).

### Add Picture to Chart and assign Hyperlink

Essential XlsIO supports assigning hyperlink to the picture added in a chart in the Excel workbook. To achieve this, create a [chart in workbook](https://help.syncfusion.com/file-formats/xlsio/working-with-charts#creating-a-chart-sheet) and add picture to the chart using [AddPicture](https://help.syncfusion.com/cr/file-formats/Syncfusion.XlsIO.Ipictures.html#Syncfusion_XlsIO_IPictures_AddPicture_System_String_) of [IPictures](https://help.syncfusion.com/cr/file-formats/Syncfusion.XlsIO.IPictures.html) interface. You can assign hyperlink to the picture using [Add](https://help.syncfusion.com/cr/file-formats/Syncfusion.XlsIO.IHyperLinks.html#Syncfusion_XlsIO_IHyperLinks_Add_Syncfusion_XlsIO_IShape_Syncfusion_XlsIO_ExcelHyperLinkType_System_String_System_String_) property of [IHyperLinks](https://help.syncfusion.com/cr/file-formats/Syncfusion.XlsIO.IHyperLinks.html) interface.

Refer to the following complete code snippets.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Xlsx;
  FileStream fileStream = new FileStream("Sample.xlsx", FileMode.Open, FileAccess.Read);
  IWorkbook workbook = application.Workbooks.Open(fileStream);
  IWorksheet worksheet = workbook.Worksheets[0];

  //Adding chart in the workbook
  IChart chart = workbook.Charts.Add();
  chart.DataRange = worksheet.Range["A1:B6"];
  chart.ChartType = ExcelChartType.Column_Clustered;
  chart.IsSeriesInRows = false;

  //Getting an image from the stream
  FileStream imageStream = new FileStream("Image.png", FileMode.Open, FileAccess.Read);
  Image image = Image.FromStream(imageStream);

  //Adding picture on the chart
  chart.Pictures.AddPicture(1, 1, imageStream);

  //Adding hyperlink to the picture on chart
  worksheet.HyperLinks.Add((workbook.Charts[0].Pictures[0] as IShape), ExcelHyperLinkType.Url, "http://www.Syncfusion.com", "click here");

  //Saving the workbook as stream
  FileStream stream = new FileStream("Output.xlsx", FileMode.Create, FileAccess.ReadWrite);
  workbook.SaveAs(stream);
  stream.Dispose();
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

A complete working example for picture hyperlink in chart in C# is present on [this GitHub page](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Create%20and%20Edit%20Charts/Picture%20Hyperlink%20in%20Chart).  

N> XlsIO supports adding picture only to a chart in the workbook,but does not support adding picture to a chart in the worksheet.

### Add DataTable to Chart

Data table beneath the chart clearly represents the chart content in table format. While creating a chart, the data table is hidden, and the option should be manually enabled to view it.

Essential XlsIO supports adding data table using [HasDataTable](https://help.syncfusion.com/cr/file-formats/Syncfusion.XlsIO.IChart.html#Syncfusion_XlsIO_IChart_HasDataTable) of [IChart](https://help.syncfusion.com/cr/file-formats/Syncfusion.XlsIO.IChart.html) interface. Enabling this property adds the data table beneath the chart.

Refer the following complete code snippets.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
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

  //Saving the workbook as stream
  FileStream stream = new FileStream("Output.xlsx", FileMode.Create, FileAccess.ReadWrite);
  workbook.SaveAs(stream);
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

A complete working example to add data table in chart in C# is present on [this GitHub page](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Create%20and%20Edit%20Charts/DataTable%20in%20Chart).

## Removing a Chart

The following code example illustrates how to remove the chart from the worksheet using [Remove](https://help.syncfusion.com/cr/file-formats/Syncfusion.XlsIO.IShape.html#Syncfusion_XlsIO_IShape_Remove) method.

{% tabs %}  
{% highlight c# tabtitle="C# [Cross-platform]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Xlsx;
  FileStream inputStream = new FileStream("InputTemplate.xlsx", FileMode.Open, FileAccess.Read);
  IWorkbook workbook = application.Workbooks.Open(inputStream, ExcelOpenType.Automatic);
  IWorksheet sheet = workbook.Worksheets[0];
  IChartShape chart = sheet.Charts[0];

  //Remove the chart from the worksheet
  chart.Remove();

  //Saving the workbook as stream
  FileStream stream = new FileStream("Output.xlsx", FileMode.Create, FileAccess.ReadWrite);
  workbook.SaveAs(stream);
  stream.Dispose();
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Xlsx;
  IWorkbook workbook = application.Workbooks.Open("InputTemplate.xlsx", ExcelOpenType.Automatic);
  IWorksheet sheet = workbook.Worksheets[0];
  IChartShape chart = sheet.Charts[0];

  //Remove the chart from the worksheet
  chart.Remove();

  workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As ExcelEngine = New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  application.DefaultVersion = ExcelVersion.Xlsx
  Dim workbook As IWorkbook = application.Workbooks.Open("InputTemplate.xlsx", ExcelOpenType.Automatic)
  Dim sheet As IWorksheet = workbook.Worksheets(0)
  Dim chart As IChartShape = sheet.Charts(0)

  'Remove the chart from the worksheet
  chart.Remove()

  workbook.SaveAs("Output.xlsx")
End Using
{% endhighlight %}
{% endtabs %}  

A complete working example to remove chart in C# is present on [this GitHub page](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Create%20and%20Edit%20Charts/Remove%20Chart).

## Supported Chart Types

The following chart types are supported in XlsIO.

* [Area](https://www.syncfusion.com/kb/8380/how-to-create-excel-area-chart-in-c-vb-net)
* [Area_3D](https://www.syncfusion.com/kb/8356/how-to-create-excel-3d-area-chart-in-c-vb-net) 
* [Area_Stacked](https://www.syncfusion.com/kb/8360/how-to-create-excel-stacked-area-chart-in-c-vb-net)
* [Area_Stacked_100](https://www.syncfusion.com/kb/8357/how-to-create-excel-100-stacked-area-chart-in-c-vb-net)
* [Area_Stacked_100_3D](https://www.syncfusion.com/kb/8361/how-to-create-excel-3d-100-stacked-area-chart-in-c-vb-net)
* [Area_Stacked_3D](https://www.syncfusion.com/kb/8362/how-to-create-excel-3d-stacked-area-chart-in-c-vb-net) 
* [Bar_Clustered](https://www.syncfusion.com/kb/8335/how-to-create-excel-clustered-bar-chart-in-c-vb-net)
* [Bar_Clustered_3D](https://www.syncfusion.com/kb/8368/how-to-create-excel-3d-clustered-bar-chart-in-c-vb-net)
* [Bar_Stacked](https://www.syncfusion.com/kb/8371/how-to-create-excel-stacked-bar-chart-in-c-vb-net)
* [Bar_Stacked_100](https://www.syncfusion.com/kb/8365/how-to-create-excel-100-stacked-bar-chart-in-c-vb-net)
* [Bar_Stacked_100_3D](https://www.syncfusion.com/kb/8374/how-to-create-excel-3d-100-stacked-bar-chart-in-c-vb-net)
* [Bar_Stacked_3D](https://www.syncfusion.com/kb/8366/how-to-create-excel-3d-stacked-bar-chart-in-c-vb-net)
* [Bubble](https://www.syncfusion.com/kb/8407/how-to-create-excel-bubble-chart-in-c-vb-net)
* [Bubble_3D](https://www.syncfusion.com/kb/8403/how-to-create-excel-3d-bubble-chart-in-c-vb-net)
* [Column_3D](https://www.syncfusion.com/kb/8369/how-to-create-excel-3d-clustered-column-chart-in-c-vb-net)
* [Column_Clustered](https://www.syncfusion.com/kb/8280/how-to-create-excel-clustered-column-chart-in-c-vb-net)
* [Column_Clustered_3D](https://www.syncfusion.com/kb/8402/how-to-create-excel-3d-column-chart-in-c-vb-net)  
* [Column_Stacked](https://www.syncfusion.com/kb/8344/how-to-create-excel-stacked-column-chart-in-c-vb-net)
* [Column_Stacked_100](https://www.syncfusion.com/kb/8445/how-to-create-excel-100-stacked-column-chart-in-c-vb-net)
* [Column_Stacked_100_3D](https://www.syncfusion.com/kb/8375/how-to-create-excel-3d-100-stacked-column-chart-in-c-vb-net)
* [Column_Stacked_3D](https://www.syncfusion.com/kb/8373/how-to-create-excel-3d-stacked-column-chart-in-c-vb-net)
* [Combination_Chart](https://www.syncfusion.com/kb/8411/how-to-create-excel-combination-chart-in-c-vb-net)       
* [Cone_Bar_Clustered](https://www.syncfusion.com/kb/8558/how-to-create-excel-clustered-bar-cone-chart-in-c-vb-net)
* [Cone_Bar_Stacked](https://www.syncfusion.com/kb/8528/how-to-create-excel-stacked-bar-cone-chart-in-c-vb-net)
* [Cone_Bar_Stacked_100](https://www.syncfusion.com/kb/8524/how-to-create-excel-100-stacked-bar-cone-chart-in-c-vb-net)
* [Cone_Clustered](https://www.syncfusion.com/kb/8541/how-to-create-excel-clustered-cone-chart-in-c-vb-net)
* [Cone_Clustered_3D](https://www.syncfusion.com/kb/8520/how-to-create-excel-3d-clustered-cone-chart-in-c-vb-net)
* [Cone_Stacked](https://www.syncfusion.com/kb/8530/how-to-create-excel-stacked-cone-chart-in-c-vb-net)
* [Cone_Stacked_100](https://www.syncfusion.com/kb/8533/how-to-create-excel-100-stacked-cone-chart-in-c-vb-net)
* [Cylinder_Bar_Clustered](https://www.syncfusion.com/kb/8529/how-to-create-excel-clustered-bar-cylinder-chart-in-c-vb-net)
* [Cylinder_Bar_Stacked](https://www.syncfusion.com/kb/8531/how-to-create-excel-stacked-bar-cylinder-chart-in-c-vb-net)
* [Cylinder_Bar_Stacked_100](https://www.syncfusion.com/kb/8540/how-to-create-excel-100-stacked-bar-cylinder-chart-in-c-vb-net)
* [Cylinder_Clustered](https://www.syncfusion.com/kb/8526/how-to-create-excel-clustered-cylinder-chart-in-c-vb-net)
* [Cylinder_Clustered_3D](https://www.syncfusion.com/kb/8545/how-to-create-excel-3d-clustered-cylinder-chart-in-c-vb-net)
* [Cylinder_Stacked](https://www.syncfusion.com/kb/8519/how-to-create-excel-stacked-cylinder-chart-in-c-vb-net)
* [Cylinder_Stacked_100](https://www.syncfusion.com/kb/8543/how-to-create-excel-100-stacked-cylinder-chart-in-c-vb-net)
* [Doughnut](https://www.syncfusion.com/kb/8398/how-to-create-excel-doughnut-chart-in-c-vb-net)
* [Doughnut_Exploded](https://www.syncfusion.com/kb/8518/how-to-create-excel-exploded-doughnut-chart-in-c-vb-net)
* [Line](https://www.syncfusion.com/kb/8358/how-to-create-excel-line-chart-in-c-vb-net)
* [Line_3D](https://www.syncfusion.com/kb/8416/how-to-create-excel-3d-line-chart-in-c-vb-net)
* [Line_Markers](https://www.syncfusion.com/kb/8359/how-to-create-excel-line-with-markers-chart-in-c-vb-net) 
* [Line_Markers_Stacked](https://www.syncfusion.com/kb/8379/how-to-create-excel-stacked-line-with-markers-chart-in-c-vb-net)
* [Line_Markers_Stacked_100](https://www.syncfusion.com/kb/8376/how-to-create-excel-100-stacked-line-with-markers-chart-in-c-vb-net)
* [Line_Stacked](https://www.syncfusion.com/kb/8372/how-to-create-excel-stacked-line-chart-in-c-vb-net)
* [Line_Stacked_100](https://www.syncfusion.com/kb/8370/how-to-create-excel-100-stacked-line-chart-in-c-vb-net)
* [Pie](https://www.syncfusion.com/kb/8423/how-to-create-excel-pie-chart-in-c-vb-net)
* [Pie_3D](https://www.syncfusion.com/kb/8426/how-to-create-excel-3d-pie-chart-in-c-vb-net)
* [Pie_Bar](https://www.syncfusion.com/kb/8404/how-to-create-excel-bar-of-pie-chart-in-c-vb-net)
* [Pie_Exploded](https://www.syncfusion.com/kb/8539/how-to-create-excel-exploded-pie-chart-in-c-vb-net)
* [Pie_Exploded_3D](https://www.syncfusion.com/kb/8559/how-to-create-excel-3d-exploded-pie-chart-in-c-vb-net)
* [PieOfPie](https://www.syncfusion.com/kb/8406/how-to-create-excel-pie-of-pie-chart-in-c-vb-net)
* [Pyramid_Bar_Clustered](https://www.syncfusion.com/kb/8521/how-to-create-excel-clustered-bar-pyramid-chart-in-c-vb-net)
* [Pyramid_Bar_Stacked](https://www.syncfusion.com/kb/8547/how-to-create-excel-stacked-bar-pyramid-chart-in-c-vb-net)
* [Pyramid_Bar_Stacked_100](https://www.syncfusion.com/kb/8544/how-to-create-excel-100-stacked-bar-pyramid-chart-in-c-vb-net)
* [Pyramid_Clustered](https://www.syncfusion.com/kb/8525/how-to-create-excel-clustered-pyramid-chart-in-c-vb-net)
* [Pyramid_Clustered_3D](https://www.syncfusion.com/kb/8527/how-to-create-excel-3d-clustered-pyramid-chart-in-c-vb-net)
* [Pyramid_Stacked](https://www.syncfusion.com/kb/8536/how-to-create-excel-stacked-pyramid-chart-in-c-vb-net)
* [Pyramid_Stacked_100](https://www.syncfusion.com/kb/8534/how-to-create-excel-100-stacked-pyramid-chart-in-c-vb-net)
* [Radar](https://www.syncfusion.com/kb/8408/how-to-create-excel-radar-chart-in-c-vb-net)
* [Radar_Filled](https://www.syncfusion.com/kb/8414/how-to-create-excel-filled-radar-chart-in-c-vb-net)
* [Radar_Markers](https://www.syncfusion.com/kb/8409/how-to-create-excel-radar-with-markers-chart-in-c-vb-net)
* [Scatter_Line](https://www.syncfusion.com/kb/8405/how-to-create-excel-scatter-with-straight-lines-chart-in-c-vb-net)
* [Scatter_Line_Markers](https://www.syncfusion.com/kb/8400/how-to-create-excel-scatter-with-straight-lines-and-markers-chart-in-c-vb-net)
* [Scatter_Markers](https://www.syncfusion.com/kb/8418/how-to-create-excel-scatter-chart-in-c-vb-net)
* [Scatter_SmoothedLine](https://www.syncfusion.com/kb/8401/how-to-create-excel-scatter-with-smooth-lines-chart-in-c-vb-net)
* [Scatter_SmoothedLine_Markers](https://www.syncfusion.com/kb/8415/how-to-create-excel-scatter-with-smooth-lines-and-markers-chart-in-c-vb-net)
* [Stock_HighLowClose](https://www.syncfusion.com/kb/8397/how-to-create-excel-high-low-close-chart-in-c-vb-net)
* [Stock_OpenHighLowClose](https://www.syncfusion.com/kb/8417/how-to-create-excel-open-high-low-close-chart-in-c-vb-net)
* [Stock_VolumeHighLowClose](https://www.syncfusion.com/kb/8424/how-to-create-excel-volume-high-low-close-chart-in-c-vb-net)
* [Stock_VolumeOpenHighLowClose](https://www.syncfusion.com/kb/8425/how-to-create-excel-volume-open-high-low-close-chart-in-c-vb-net)  
* [Surface_3D](https://www.syncfusion.com/kb/8419/how-to-create-excel-3d-surface-chart-in-c-vb-net)
* [Surface_Contour](https://www.syncfusion.com/kb/8410/how-to-create-excel-contour-chart-in-c-vb-net)
* [Surface_NoColor_3D](https://www.syncfusion.com/kb/8421/how-to-create-excel-wireframe-3d-surface-chart-in-c-vb-net)
* [Surface_NoColor_Contour](https://www.syncfusion.com/kb/8413/how-to-create-excel-wireframe-contour-chart-in-c-vb-net)
* [Funnel](https://www.syncfusion.com/kb/8422/how-to-create-excel-funnel-chart-in-c-vb-net)
* [Box and Whisker](https://www.syncfusion.com/kb/8428/how-to-create-excel-box-and-whisker-chart-in-c-vb-net)
* [Waterfall](https://www.syncfusion.com/kb/8420/how-to-create-excel-waterfall-chart-in-c-vb-net)
* [Histogram](https://www.syncfusion.com/kb/8431/how-to-create-excel-histogram-chart-in-c-vb-net)
* [Pareto](https://www.syncfusion.com/kb/8430/how-to-create-excel-pareto-chart-in-c-vb-net)
* [Treemap](https://www.syncfusion.com/kb/8427/how-to-create-excel-treemap-chart-in-c-vb-net)
* [Sunburst](https://www.syncfusion.com/kb/8429/how-to-create-excel-sunburst-chart-in-c-vb-net)

## See Also

* [How to add chart title with formula in C#, VB.NET?](https://support.syncfusion.com/kb/article/10217/add-excel-chart-title-with-formula-in-c-vb-net-using-xlsio)
* [How to create Excel area chart in C#, VB.NET?](https://support.syncfusion.com/kb/article/7478/how-to-create-excel-area-chart-in-c-vb-net)
* [How to set shadows for plot area or axis in chart using XlsIO?](https://support.syncfusion.com/kb/article/7667/how-to-set-shadows-for-plot-area-or-axis-in-chart-using-xlsio)
* [How to position and re-size a plot area of chart using WinForms XlsIO?](https://support.syncfusion.com/kb/article/4796/how-to-position-and-re-size-a-plot-area-of-chart-using-winforms-xlsio)
* [How to delete Excel chart legend in C#, VB.NET?](https://support.syncfusion.com/kb/article/7525/how-to-delete-excel-chart-legend-in-c-vb-net)
* [Show or hide Excel chart legend in C#, VB.NET](https://support.syncfusion.com/kb/article/2564/show-or-hide-excel-chart-legend-in-c-vb-net)
* [Add Excel chart data labels with formula in C#, VB.NET using XlsIO](https://support.syncfusion.com/kb/article/10222/add-excel-chart-data-labels-with-formula-in-c-vb-net-using-xlsio)
* [Format Excel chart data label in C#, VB.NET](https://support.syncfusion.com/kb/article/2731/format-excel-chart-data-label-in-c-vb-net)
* [How to set the DataLabel position for chart series using XlsIO?](https://support.syncfusion.com/kb/article/2563/how-to-set-the-datalabel-position-for-chart-series-using-xlsio)
* [How to set vertical axis crosses value for chart axis in C#, VB.NET?](https://support.syncfusion.com/kb/article/7608/how-to-set-vertical-axis-crosses-value-for-chart-axis-in-c-vb-net)
* [How to reverse Excel chart axis order in C#, VB.NET?](https://support.syncfusion.com/kb/article/7513/how-to-reverse-excel-chart-axis-order-in-c-vb-net)
* [How to filter Excel chart series in C#, VB.NET?](https://support.syncfusion.com/kb/article/7509/how-to-filter-excel-chart-series-in-c-vb-net)
* [How to change Excel chart series color in C#, VB.NET?](https://support.syncfusion.com/kb/article/2733/how-to-change-excel-chart-series-color-in-c-vbnet)
* [How to set trendlines for Excel chart series in C#, VB.NET?](https://support.syncfusion.com/kb/article/7532/how-to-set-trendlines-for-excel-chart-series-in-c-vb-net)
* [Blog: Excel Charts in C# and VB.NET](https://www.syncfusion.com/document-processing/excel-framework/net/excel-library/charts)