---
title: Chart Title | Excel library | Syncfusion
description: In this section, you can learn about chart title in an Excel document using Syncfusion .NET Excel library.
platform: document-processing
control: XlsIO
documentation: UG
---

# Chart Title in Excel document

Chart title is a brief description at the top of a chart, offering context and clarity for the data displayed. Using XlsIO, you can **customize the chart title in the chart**.

## Add

The following code snippet illustrates how to add the chart title.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
//Set chart name and title
chart.Name = "Purchase Details";
chart.ChartTitle = "Purchase Details";
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Set chart name and title
chart.Name = "Purchase Details";
chart.ChartTitle = "Purchase Details";
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Set chart name and title
chart.Name = "Purchase Details"
chart.ChartTitle = "Purchase Details"
{% endhighlight %}
{% endtabs %}

## Formatting

### Color

The following code snippet illustrates how to format the color of the chart area.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
//Set the color
chart.ChartTitleArea.Color = ExcelKnownColors.Black;
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Set the color
chart.ChartTitleArea.Color = ExcelKnownColors.Black;
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Set the color
chart.ChartTitleArea.Color = ExcelKnownColors.Black
{% endhighlight %}
{% endtabs %}

### Font

The following code snippet illustrates how to format the font of the legend.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
//Set the font
chart.ChartTitleArea.FontName = "Calibri";
chart.ChartTitleArea.Bold = true;
chart.ChartTitleArea.Underline = ExcelUnderline.Single;
chart.ChartTitleArea.Size = 15;
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Set the font
chart.ChartTitleArea.FontName = "Calibri";
chart.ChartTitleArea.Bold = true;
chart.ChartTitleArea.Underline = ExcelUnderline.Single;
chart.ChartTitleArea.Size = 15;
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Set the font
chart.ChartTitleArea.FontName = "Calibri"
chart.ChartTitleArea.Bold = true
chart.ChartTitleArea.Underline = ExcelUnderline.Single
chart.ChartTitleArea.Size = 15
{% endhighlight %}
{% endtabs %}

## Set Position

The following code snippet illustrates how to set the position of the chart title.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
//Set the position
chart.ChartTitleArea.Layout.Left = 20;
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Set the position
chart.ChartTitleArea.Layout.Left = 20;
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Set the position
chart.ChartTitleArea.Layout.Left = 20
{% endhighlight %}
{% endtabs %}

The complete code snippet illustrating the above options is shown below.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/Create%20and%20Edit%20Charts/Chart%20Title/.NET/Chart%20Title/Chart%20Title/Program.cs,180" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
	IApplication application = excelEngine.Excel;
	application.DefaultVersion = ExcelVersion.Xlsx;
	IWorkbook workbook = application.Workbooks.Open(Path.GetFullPath(@"Data/InputTemplate.xlsx"), ExcelOpenType.Automatic);
	IWorksheet sheet = workbook.Worksheets[0];
	IChartShape chart = sheet.Charts[0];

	//Set chart name and title
	chart.Name = "Purchase Details";
	chart.ChartTitle = "Purchase Details";

	//Formatting chart title area
	chart.ChartTitleArea.FontName = "Calibri";
	chart.ChartTitleArea.Bold = true;
	chart.ChartTitleArea.Color = ExcelKnownColors.Black;
	chart.ChartTitleArea.Underline = ExcelUnderline.Single;
	chart.ChartTitleArea.Size = 15;

	//Manually resizing chart title area using Layout.
	chart.ChartTitleArea.Layout.Left = 20;

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

    //Set chart name and title
    chart.Name = "Purchase Details";
    chart.ChartTitle = "Purchase Details";

    //Set the color
    chart.ChartTitleArea.Color = ExcelKnownColors.Black;

    //Set the font
    chart.ChartTitleArea.FontName = "Calibri";
    chart.ChartTitleArea.Bold = true;
    chart.ChartTitleArea.Underline = ExcelUnderline.Single;
    chart.ChartTitleArea.Size = 15;

    //Set the position
    chart.ChartTitleArea.Layout.Left = 20;

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

    'Set chart name and title
    chart.Name = "Purchase Details"
    chart.ChartTitle = "Purchase Details"

    'Set the color
    chart.ChartTitleArea.Color = ExcelKnownColors.Black

    'Set the font
    chart.ChartTitleArea.FontName = "Calibri"
    chart.ChartTitleArea.Bold = True
    chart.ChartTitleArea.Underline = ExcelUnderline.Single
    chart.ChartTitleArea.Size = 15

    'Set the position of
    chart.ChartTitleArea.Layout.Left = 20

    'Saving the workbook as stream
    workbook.SaveAs("Output.xlsx")
End Using
{% endhighlight %}
{% endtabs %}

A complete working example for the chart title in C# is present on [this GitHub page](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Create%20and%20Edit%20Charts/Chart%20Title/.NET/Chart%20Title).

## Remove

The following code snippet illustrates how to remove the chart title.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
//Remove the chart title 
chart.ChartTitleArea.Text = String.Empty;
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Remove the chart title
chart.ChartTitleArea.Text = String.Empty;
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Remove the chart title 
chart.ChartTitleArea.Text = String.Empty
{% endhighlight %}
{% endtabs %}