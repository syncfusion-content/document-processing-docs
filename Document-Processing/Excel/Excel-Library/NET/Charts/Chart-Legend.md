---
title: Chart Legend | Excel library | Syncfusion
description: In this section, you can learn about chart legend in an Excel document with XlsIO.
platform: document-processing
control: XlsIO
documentation: UG
---

# Chart Legend in Excel document

Legends are visual pictorial hints that provide a viewer information that helps them understand an chart. Using DocIO, you can **customize the legend in the chart**.

## Add

The following code snippet illustrates how to add the legend.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
//Add the legend
chart.HasLegend = true;
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Add the legend
chart.HasLegend = true;
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Add the legend
chart.HasLegend = False
{% endhighlight %}
{% endtabs %}

## Formatting

### Border

The following code snippet illustrates how to format the border of the legend.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
//Set the border
chart.Legend.FrameFormat.Border.AutoFormat = false;
chart.Legend.FrameFormat.Border.IsAutoLineColor = false;
chart.Legend.FrameFormat.Border.LineColor = Color.Black;
chart.Legend.FrameFormat.Border.LinePattern = ExcelChartLinePattern.DashDot;
chart.Legend.FrameFormat.Border.LineWeight = ExcelChartLineWeight.Narrow;
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Set the border
chart.Legend.FrameFormat.Border.AutoFormat = false;
chart.Legend.FrameFormat.Border.IsAutoLineColor = false;
chart.Legend.FrameFormat.Border.LineColor = Color.Black;
chart.Legend.FrameFormat.Border.LinePattern = ExcelChartLinePattern.DashDot;
chart.Legend.FrameFormat.Border.LineWeight = ExcelChartLineWeight.Narrow;
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Set the border
chart.Legend.FrameFormat.Border.AutoFormat = false
chart.Legend.FrameFormat.Border.IsAutoLineColor = false
chart.Legend.FrameFormat.Border.LineColor = Color.Black
chart.Legend.FrameFormat.Border.LinePattern = ExcelChartLinePattern.DashDot
chart.Legend.FrameFormat.Border.LineWeight = ExcelChartLineWeight.Narrow
{% endhighlight %}
{% endtabs %}

### Color

The following code snippet illustrates how to format the color of the legend.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
//Set the color
chart.Legend.TextArea.Color = ExcelKnownColors.Pink;
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Set the color
chart.Legend.TextArea.Color = ExcelKnownColors.Pink;
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Set the color
chart.Legend.TextArea.Color = ExcelKnownColors.Pink
{% endhighlight %}
{% endtabs %}

### Font

The following code snippet illustrates how to format the font of the legend.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
//Set the font
chart.Legend.TextArea.Bold = true;
chart.Legend.TextArea.FontName = "Times New Roman";
chart.Legend.TextArea.Size = 10;
chart.Legend.TextArea.Strikethrough = false;
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Set the font
chart.Legend.TextArea.Bold = true;
chart.Legend.TextArea.FontName = "Times New Roman";
chart.Legend.TextArea.Size = 10;
chart.Legend.TextArea.Strikethrough = false;
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Set the font
chart.Legend.TextArea.Bold = true
chart.Legend.TextArea.FontName = "Times New Roman"
chart.Legend.TextArea.Size = 10
chart.Legend.TextArea.Strikethrough = false
{% endhighlight %}
{% endtabs %}

## Set Position

The following code snippet illustrates how to set the position of the legend.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
//Set the position
chart.Legend.Position = ExcelLegendPosition.Bottom;
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Set the position
chart.Legend.Position = ExcelLegendPosition.Bottom;
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Set the position
chart.Legend.Position = ExcelLegendPosition.Bottom
{% endhighlight %}
{% endtabs %}

### View horizontally

The following code snippet illustrates how to view the legend horizontally.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
//View legend horizontally
chart.Legend.IsVerticalLegend = false;
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//View legend horizontally
chart.Legend.IsVerticalLegend = false;
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'View legend horizontally
chart.Legend.IsVerticalLegend = False
{% endhighlight %}
{% endtabs %}

### Layout Inclusion

The following code snippet illustrates how to prevent the legend from overlapping the chart.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
//Set Legend without overlapping the chart
chart.Legend.IncludeInLayout = true;
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Set Legend without overlapping the chart
chart.Legend.IncludeInLayout = true;
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Set Legend without overlapping the chart
chart.Legend.IncludeInLayout = true
{% endhighlight %}
{% endtabs %}

## Remove

The following code snippet illustrates how to remove the legend.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
//Remove the legend
chart.Legend.LegendEntries[0].IsDeleted = true;
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Remove the legend
chart.Legend.LegendEntries[0].IsDeleted = true;
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Remove the legend
chart.Legend.LegendEntries(0).IsDeleted = True
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
    IWorksheet sheet = workbook.Worksheets[0];
    IChartShape chart = sheet.Charts[0];

    //Add the legend
    chart.HasLegend = true;

    //Set the position
    chart.Legend.Position = ExcelLegendPosition.Bottom;

    //View legend horizontally
    chart.Legend.IsVerticalLegend = false;

    //Set the border
    chart.Legend.FrameFormat.Border.AutoFormat = false;
    chart.Legend.FrameFormat.Border.IsAutoLineColor = false;
    chart.Legend.FrameFormat.Border.LineColor = Color.Black;
    chart.Legend.FrameFormat.Border.LinePattern = ExcelChartLinePattern.DashDot;
    chart.Legend.FrameFormat.Border.LineWeight = ExcelChartLineWeight.Narrow;

    //Set the color
    chart.Legend.TextArea.Color = ExcelKnownColors.Pink;

    //Set the font
    chart.Legend.TextArea.Bold = true;
    chart.Legend.TextArea.FontName = "Times New Roman";
    chart.Legend.TextArea.Size = 10;
    chart.Legend.TextArea.Strikethrough = false;

    //Remove the legend
    chart.Legend.LegendEntries[0].IsDeleted = true;

    //Set Legend without overlapping the chart
    chart.Legend.IncludeInLayout = true;

    //Saving the workbook as stream
    FileStream outputStream = new FileStream("Output.xlsx", FileMode.Create, FileAccess.ReadWrite);
    workbook.SaveAs(outputStream);

    //Dipose streams
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
    IWorksheet sheet = workbook.Worksheets[0];
    IChartShape chart = sheet.Charts[0];

    //Add the legend
    chart.HasLegend = true;

    //Set the position
    chart.Legend.Position = ExcelLegendPosition.Bottom;

    //View legend horizontally
    chart.Legend.IsVerticalLegend = false;

    //Set the border
    chart.Legend.FrameFormat.Border.AutoFormat = false;
    chart.Legend.FrameFormat.Border.IsAutoLineColor = false;
    chart.Legend.FrameFormat.Border.LineColor = Color.Black;
    chart.Legend.FrameFormat.Border.LinePattern = ExcelChartLinePattern.DashDot;
    chart.Legend.FrameFormat.Border.LineWeight = ExcelChartLineWeight.Narrow;

    //Set the color
    chart.Legend.TextArea.Color = ExcelKnownColors.Pink;

    //Set the font
    chart.Legend.TextArea.Bold = true;
    chart.Legend.TextArea.FontName = "Times New Roman";
    chart.Legend.TextArea.Size = 10;
    chart.Legend.TextArea.Strikethrough = false;

    //Remove the legend
    chart.Legend.LegendEntries[0].IsDeleted = true;

    //Set Legend without overlapping the chart
    chart.Legend.IncludeInLayout = true;

    //Saving the workbook
    workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As New ExcelEngine()
    Dim application As IApplication = excelEngine.Excel
    application.DefaultVersion = ExcelVersion.Xlsx
    Dim workbook As IWorkbook = application.Workbooks.Open("InputTemplate.xlsx")
    Dim sheet As IWorksheet = workbook.Worksheets(0)
    Dim chart As IChartShape = sheet.Charts(0)

    'Add the legend
    chart.HasLegend = True

    'Set the position
    chart.Legend.Position = ExcelLegendPosition.Bottom

    'View legend horizontally
    chart.Legend.IsVerticalLegend = False

    'Set the border
    chart.Legend.FrameFormat.Border.AutoFormat = False
    chart.Legend.FrameFormat.Border.IsAutoLineColor = False
    chart.Legend.FrameFormat.Border.LineColor = Color.Black
    chart.Legend.FrameFormat.Border.LinePattern = ExcelChartLinePattern.DashDot
    chart.Legend.FrameFormat.Border.LineWeight = ExcelChartLineWeight.Narrow

    'Set the color
    chart.Legend.TextArea.Color = ExcelKnownColors.Pink

    'Set the font
    chart.Legend.TextArea.Bold = True
    chart.Legend.TextArea.FontName = "Times New Roman"
    chart.Legend.TextArea.Size = 10
    chart.Legend.TextArea.Strikethrough = False

    'Remove the legend
    chart.Legend.LegendEntries(0).IsDeleted = True

    'Set Legend without overlapping the chart
    chart.Legend.IncludeInLayout = True

    'Saving the workbook
    workbook.SaveAs("Output.xlsx")
End Using
{% endhighlight %}
{% endtabs %}

A complete working example for the chart legend in C# is present on [this GitHub page]().