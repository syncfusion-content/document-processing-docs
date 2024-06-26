---
title: Chart Data Label | Excel library | Syncfusion
description: In this section, you can learn about chart data label in an Excel document with XlsIO.
platform: document-processing
control: XlsIO
documentation: UG
---

# Chart Data Labels in Excel document

Data Labels on a chart make it easier to understand. They show important information about the lines or points on the chart. Using XlsIO, you can **customize the data labels in the chart**.

## Add

The following code snippet illustrates how to add the data label.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
//Add the datalabel
chart.Series[0].DataPoints.DefaultDataPoint.DataLabels.IsValue = true;
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Add the datalabel
chart.Series[0].DataPoints.DefaultDataPoint.DataLabels.IsValue = true;
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Add the datalabel
chart.Series(0).DataPoints.DefaultDataPoint.DataLabels.IsValue = True
{% endhighlight %}
{% endtabs %}

### Add from the range of cells

The following code snippet illustrates how to add the data label from the range of cells.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
//Add the datalabel from the range of cells
chart.Series[1].DataPoints.DefaultDataPoint.DataLabels.ValueFromCellsRange = worksheet["I1:I5"];
chart.Series[1].DataPoints.DefaultDataPoint.DataLabels.IsValueFromCells = true;
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Add the datalabel from the range of cells
chart.Series[1].DataPoints.DefaultDataPoint.DataLabels.ValueFromCellsRange = worksheet["I1:I5"];
chart.Series[1].DataPoints.DefaultDataPoint.DataLabels.IsValueFromCells = true;
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Add the datalabel from the range of cells
chart.Series(1).DataPoints.DefaultDataPoint.DataLabels.ValueFromCellsRange = worksheet("I1:I5")
chart.Series(1).DataPoints.DefaultDataPoint.DataLabels.IsValueFromCells = true
{% endhighlight %}
{% endtabs %}

## Formatting

### Color

The following code snippet illustrates how to format the color of the data label.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
//Set the color
chart.Series[0].DataPoints.DefaultDataPoint.DataLabels.Color = ExcelKnownColors.Blue;
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Set the color
chart.Series[0].DataPoints.DefaultDataPoint.DataLabels.Color = ExcelKnownColors.Blue;
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Set the color
chart.Series(0).DataPoints.DefaultDataPoint.DataLabels.Color = ExcelKnownColors.Blue
{% endhighlight %}
{% endtabs %}

### Font

The following code snippet illustrates how to format the font of the data label.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
//Set the font
chart.Series[0].DataPoints.DefaultDataPoint.DataLabels.Size = 10;
chart.Series[0].DataPoints.DefaultDataPoint.DataLabels.FontName = "calibri";
chart.Series[0].DataPoints.DefaultDataPoint.DataLabels.Bold = true;
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Set the font
chart.Series[0].DataPoints.DefaultDataPoint.DataLabels.Size = 10;
chart.Series[0].DataPoints.DefaultDataPoint.DataLabels.FontName = "calibri";
chart.Series[0].DataPoints.DefaultDataPoint.DataLabels.Bold = true;
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Set the font
chart.Series(0).DataPoints.DefaultDataPoint.DataLabels.Size = 10;
chart.Series(0).DataPoints.DefaultDataPoint.DataLabels.FontName = "calibri";
chart.Series(0).DataPoints.DefaultDataPoint.DataLabels.Bold = true;
{% endhighlight %}
{% endtabs %}

### Number Format

The following code snippet illustrates how to set the number format in the data label.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
//Set the number format
IChartDataLabels dataLabel = chart.Series[0].DataPoints.DefaultDataPoint.DataLabels;
(dataLabel as ChartDataLabelsImpl).NumberFormat = "#,##0.00";
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Set the number format
IChartDataLabels dataLabel = chart.Series[0].DataPoints.DefaultDataPoint.DataLabels;
(dataLabel as ChartDataLabelsImpl).NumberFormat = "#,##0.00";
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Set the number format
Dim dataLabel As IChartDataLabels = chart.Series(0).DataPoints.DefaultDataPoint.DataLabels
CType(dataLabel, ChartDataLabelsImpl).NumberFormat = "#,##0.00"
{% endhighlight %}
{% endtabs %}

## Set Position

The following code snippet illustrates how to set the position of the data label.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
//Set the position
chart.Series[0].DataPoints.DefaultDataPoint.DataLabels.Position = ExcelDataLabelPosition.Outside;
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Set the position
chart.Series[0].DataPoints.DefaultDataPoint.DataLabels.Position = ExcelDataLabelPosition.Outside;
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Set the position
chart.Series(0).DataPoints.DefaultDataPoint.DataLabels.Position = ExcelDataLabelPosition.Outside
{% endhighlight %}
{% endtabs %}

The complete code snippet illustrating the above options is shown below.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;
    FileStream inputStream = new FileStream("../../../Data/InputTemplate.xlsx", FileMode.Open, FileAccess.Read);
    IWorkbook workbook = application.Workbooks.Open(inputStream);
    IWorksheet worksheet = workbook.Worksheets[0];
    IChartShape chart = worksheet.Charts[0];

    //Add the datalabel
    chart.Series[0].DataPoints.DefaultDataPoint.DataLabels.IsValue = true;

    //Add the datalabel from the range of cells
    chart.Series[1].DataPoints.DefaultDataPoint.DataLabels.ValueFromCellsRange = worksheet["I1:I5"];
    chart.Series[1].DataPoints.DefaultDataPoint.DataLabels.IsValueFromCells = true;

    //Set the color
    chart.Series[0].DataPoints.DefaultDataPoint.DataLabels.Color = ExcelKnownColors.Blue;
    chart.Series[1].DataPoints.DefaultDataPoint.DataLabels.Color = ExcelKnownColors.Black;

    //Set the font
    chart.Series[0].DataPoints.DefaultDataPoint.DataLabels.Size = 10;
    chart.Series[0].DataPoints.DefaultDataPoint.DataLabels.FontName = "calibri";
    chart.Series[0].DataPoints.DefaultDataPoint.DataLabels.Bold = true;

    chart.Series[1].DataPoints.DefaultDataPoint.DataLabels.Size = 10;
    chart.Series[1].DataPoints.DefaultDataPoint.DataLabels.FontName = "calibri";
    chart.Series[1].DataPoints.DefaultDataPoint.DataLabels.Bold = true;

    //Set the number format
    IChartDataLabels dataLabel = chart.Series[0].DataPoints.DefaultDataPoint.DataLabels;
    (dataLabel as ChartDataLabelsImpl).NumberFormat = "#,##0.00";

    //Set the position
    chart.Series[0].DataPoints.DefaultDataPoint.DataLabels.Position = ExcelDataLabelPosition.Outside;
    chart.Series[1].DataPoints.DefaultDataPoint.DataLabels.Position = ExcelDataLabelPosition.Outside;

    //Saving the workbook as stream
    FileStream outputStream = new FileStream("Output.xlsx", FileMode.Create, FileAccess.ReadWrite);
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
    IChartShape chart = worksheet.Charts[0];

    //Add the datalabel
    chart.Series[0].DataPoints.DefaultDataPoint.DataLabels.IsValue = true;

    //Add the datalabel from the range of cells
    chart.Series[1].DataPoints.DefaultDataPoint.DataLabels.ValueFromCellsRange = worksheet["I1:I5"];
    chart.Series[1].DataPoints.DefaultDataPoint.DataLabels.IsValueFromCells = true;

    //Set the color
    chart.Series[0].DataPoints.DefaultDataPoint.DataLabels.Color = ExcelKnownColors.Blue;
    chart.Series[1].DataPoints.DefaultDataPoint.DataLabels.Color = ExcelKnownColors.Black;

    //Set the font
    chart.Series[0].DataPoints.DefaultDataPoint.DataLabels.Size = 10;
    chart.Series[0].DataPoints.DefaultDataPoint.DataLabels.FontName = "calibri";
    chart.Series[0].DataPoints.DefaultDataPoint.DataLabels.Bold = true;

    chart.Series[1].DataPoints.DefaultDataPoint.DataLabels.Size = 10;
    chart.Series[1].DataPoints.DefaultDataPoint.DataLabels.FontName = "calibri";
    chart.Series[1].DataPoints.DefaultDataPoint.DataLabels.Bold = true;

    //Set the number format
    IChartDataLabels dataLabel = chart.Series[0].DataPoints.DefaultDataPoint.DataLabels;
    (dataLabel as ChartDataLabelsImpl).NumberFormat = "#,##0.00";

    //Set the position
    chart.Series[0].DataPoints.DefaultDataPoint.DataLabels.Position = ExcelDataLabelPosition.Outside;
    chart.Series[1].DataPoints.DefaultDataPoint.DataLabels.Position = ExcelDataLabelPosition.Outside;

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

    'Add the datalabel
    chart.Series(0).DataPoints.DefaultDataPoint.DataLabels.IsValue = True

    'Add the datalabel from the range of cells
    chart.Series(1).DataPoints.DefaultDataPoint.DataLabels.ValueFromCellsRange = worksheet("I1:I5")
    chart.Series(1).DataPoints.DefaultDataPoint.DataLabels.IsValueFromCells = True

    'Set the color
    chart.Series(0).DataPoints.DefaultDataPoint.DataLabels.Color = ExcelKnownColors.Blue
    chart.Series(1).DataPoints.DefaultDataPoint.DataLabels.Color = ExcelKnownColors.Black

    'Set the font
    chart.Series(0).DataPoints.DefaultDataPoint.DataLabels.Size = 10
    chart.Series(0).DataPoints.DefaultDataPoint.DataLabels.FontName = "calibri"
    chart.Series(0).DataPoints.DefaultDataPoint.DataLabels.Bold = True

    chart.Series(1).DataPoints.DefaultDataPoint.DataLabels.Size = 10
    chart.Series(1).DataPoints.DefaultDataPoint.DataLabels.FontName = "calibri"
    chart.Series(1).DataPoints.DefaultDataPoint.DataLabels.Bold = True

    'Set the number format
    Dim dataLabel As IChartDataLabels = chart.Series(0).DataPoints.DefaultDataPoint.DataLabels
    CType(dataLabel, ChartDataLabelsImpl).NumberFormat = "#,##0.00"

    'Set the position
    chart.Series(0).DataPoints.DefaultDataPoint.DataLabels.Position = ExcelDataLabelPosition.Outside
    chart.Series(1).DataPoints.DefaultDataPoint.DataLabels.Position = ExcelDataLabelPosition.Outside

    'Saving the workbook
    workbook.SaveAs("Output.xlsx")
End Using
{% endhighlight %}
{% endtabs %}

A complete working example for the chart data label in C# is present on [this GitHub page](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Create%20and%20Edit%20Charts/Data%20Labels/NET%20Standard/Data%20Labels).