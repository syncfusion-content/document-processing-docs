---
title: Modify the Appearance of the Chart Area | Syncfusion
description: Learn how to customize the chart area in a PowerPoint presentation using the .NET PowerPoint library (Presentation) without Microsoft PowerPoint.
platform: document-processing
control: PowerPoint
documentation: UG
---

# Customize the Chart Area in PowerPoint

Chart area refers to the space that contains the chart or graph you've inserted into a document. It includes the entire chart and all its elements, such as data points, labels, axes, and the plot area. Using Presentation, you can **customize the chart area in the chart**.

N> For prerequisites (installing the NuGet packages, required namespaces, and creating a chart), refer to the [Getting Started](https://help.syncfusion.com/document-processing/powerpoint/powerpoint-library/net/getting-started) and [NuGet Packages Required](https://help.syncfusion.com/document-processing/powerpoint/powerpoint-library/net/nuget-packages-required) documentation.

## Customize the Border

The following code snippet illustrates how to modify the border of the chart area.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}

//Format the chart area.
IOfficeChartFrameFormat chartArea = chart.ChartArea;
//Set border line pattern, color, and line weight.
chartArea.Border.LinePattern = OfficeChartLinePattern.Solid;
chartArea.Border.LineColor = Syncfusion.Drawing.Color.Blue;
chartArea.Border.LineWeight = OfficeChartLineWeight.Hairline;

{% endhighlight %}
{% highlight c# tabtitle="C# [Windows-specific]" %}

//Format the chart area.
IOfficeChartFrameFormat chartArea = chart.ChartArea;
//Set border line pattern, color, and line weight.
chartArea.Border.LinePattern = OfficeChartLinePattern.Solid;
chartArea.Border.LineColor = Color.Blue;
chartArea.Border.LineWeight = OfficeChartLineWeight.Hairline;

{% endhighlight %}
{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

' Format the chart area.
Dim chartArea As IOfficeChartFrameFormat = chart.ChartArea
' Set border line pattern, color, and line weight.
chartArea.Border.LinePattern = OfficeChartLinePattern.Solid
chartArea.Border.LineColor = Color.Blue
chartArea.Border.LineWeight = OfficeChartLineWeight.Hairline

{% endhighlight %}
{% endtabs %}

N> For more information on the available `OfficeChartLinePattern` and `OfficeChartLineWeight` enum values, see the [API reference](https://help.syncfusion.com/cr/document-processing/Syncfusion.OfficeChart.html).

## Customize the Fill

The following code snippet illustrates how to apply a gradient fill to the chart area.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}

//Format the chart area.
IOfficeChartFrameFormat chartArea = chart.ChartArea;
//Set fill type and fill colors.
chartArea.Fill.FillType = OfficeFillType.Gradient;
chartArea.Fill.GradientColorType = OfficeGradientColor.TwoColor;
chartArea.Fill.BackColor = Syncfusion.Drawing.Color.FromArgb(205, 217, 234);
chartArea.Fill.ForeColor = Syncfusion.Drawing.Color.White;

{% endhighlight %}
{% highlight c# tabtitle="C# [Windows-specific]" %}

//Format the chart area.
IOfficeChartFrameFormat chartArea = chart.ChartArea;
//Set fill type and fill colors.
chartArea.Fill.FillType = OfficeFillType.Gradient;
chartArea.Fill.GradientColorType = OfficeGradientColor.TwoColor;
chartArea.Fill.BackColor = Color.FromArgb(205, 217, 234);
chartArea.Fill.ForeColor = Color.White;

{% endhighlight %}
{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

' Format the chart area.
Dim chartArea As IOfficeChartFrameFormat = chart.ChartArea
' Set fill type and fill colors.
chartArea.Fill.FillType = OfficeFillType.Gradient
chartArea.Fill.GradientColorType = OfficeGradientColor.TwoColor
chartArea.Fill.BackColor = Color.FromArgb(205, 217, 234)
chartArea.Fill.ForeColor = Color.White

{% endhighlight %}
{% endtabs %}

The complete code snippet illustrating the above options is shown below.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PowerPoint-Examples/master/Charts/Format-Chart-Area/.NET/Format-Chart-Area/Program.cs" %}


//Open an existing PowerPoint Presentation.
using (IPresentation pptxDoc = Presentation.Open("Data/Template.pptx"))
{
    //Gets the first slide.
    ISlide slide = pptxDoc.Slides[0];
    //Gets the chart in the slide.
    IPresentationChart chart = slide.Shapes[0] as IPresentationChart;

    //Format the chart area.
    IOfficeChartFrameFormat chartArea = chart.ChartArea;

    //Set border line pattern, color, and line weight.
    chartArea.Border.LinePattern = OfficeChartLinePattern.Solid;
    chartArea.Border.LineColor = Syncfusion.Drawing.Color.Blue;
    chartArea.Border.LineWeight = OfficeChartLineWeight.Hairline;

    //Set fill type and fill colors.
    chartArea.Fill.FillType = OfficeFillType.Gradient;
    chartArea.Fill.GradientColorType = OfficeGradientColor.TwoColor;
    chartArea.Fill.BackColor = Syncfusion.Drawing.Color.FromArgb(205, 217, 234);
    chartArea.Fill.ForeColor = Syncfusion.Drawing.Color.White;

    //Save the PowerPoint Presentation.
    pptxDoc.Save("Result.pptx");
}

{% endhighlight %}
{% highlight c# tabtitle="C# [Windows-specific]" %}

//Open an existing PowerPoint Presentation.
using (IPresentation pptxDoc = Presentation.Open("Template.pptx"))
{
    //Gets the first slide.
    ISlide slide = pptxDoc.Slides[0];
    //Gets the chart in the slide.
    IPresentationChart chart = slide.Shapes[0] as IPresentationChart;

    //Format the chart area.
    IOfficeChartFrameFormat chartArea = chart.ChartArea;

    //Set border line pattern, color, and line weight.
    chartArea.Border.LinePattern = OfficeChartLinePattern.Solid;
    chartArea.Border.LineColor = Syncfusion.Drawing.Color.Blue;
    chartArea.Border.LineWeight = OfficeChartLineWeight.Hairline;

    //Set fill type and fill colors.
    chartArea.Fill.FillType = OfficeFillType.Gradient;
    chartArea.Fill.GradientColorType = OfficeGradientColor.TwoColor;
    chartArea.Fill.BackColor = Syncfusion.Drawing.Color.FromArgb(205, 217, 234);
    chartArea.Fill.ForeColor = Syncfusion.Drawing.Color.White;

    //Save the PowerPoint Presentation.
    pptxDoc.Save("Result.pptx");
}

{% endhighlight %}
{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

' Load an existing PowerPoint presentation.
Using pptxDoc As IPresentation = Presentation.Open("Template.pptx")
    ' Get the first slide.
    Dim slide As ISlide = pptxDoc.Slides(0)
    ' Get the chart from the slide.
    Dim chart As IPresentationChart = TryCast(slide.Shapes(0), IPresentationChart)

    ' Format the chart area.
    Dim chartArea As IOfficeChartFrameFormat = chart.ChartArea

    ' Set border line pattern, color, and line weight.
    chartArea.Border.LinePattern = OfficeChartLinePattern.Solid
    chartArea.Border.LineColor = Syncfusion.Drawing.Color.Blue
    chartArea.Border.LineWeight = OfficeChartLineWeight.Hairline

    ' Set fill type and fill colors.
    chartArea.Fill.FillType = OfficeFillType.Gradient
    chartArea.Fill.GradientColorType = OfficeGradientColor.TwoColor
    chartArea.Fill.BackColor = Syncfusion.Drawing.Color.FromArgb(205, 217, 234)
    chartArea.Fill.ForeColor = Syncfusion.Drawing.Color.White

    ' Save the PowerPoint presentation.
    pptxDoc.Save("Result.pptx")
End Using

{% endhighlight %}
{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PowerPoint-Examples/tree/master/Charts/Format-Chart-Area/.NET).

## Add Image in Chart Area

The following code snippet illustrates how to fill the image in chart area.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}

//Append image in chart area.
FileStream imageStream = new FileStream("Data/Image.png", FileMode.Open, FileAccess.Read);
Image image = Image.FromStream(imageStream);
chartArea.Fill.UserPicture(image, "image");

{% endhighlight %}
{% highlight c# tabtitle="C# [Windows-specific]" %}

//Append image in chart area.
chartArea.Fill.UserPicture("Image.png");

{% endhighlight %}
{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

' Append an image to the chart area.
chartArea.Fill.UserPicture("Image.png")

{% endhighlight %}
{% endtabs %}

## Set the Transparency level

The following code snippet illustrates how to make transparency in chart area.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}

// Set the transparency of the chart area.
chartArea.Fill.Transparency = 0.5;

{% endhighlight %}
{% highlight c# tabtitle="C# [Windows-specific]" %}

// Set the transparency of the chart area.
chartArea.Fill.Transparency = 0.5;

{% endhighlight %}
{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

' Set the transparency of the chart area.
chartArea.Fill.Transparency = 0.5

{% endhighlight %}
{% endtabs %}

N> [Transparency](https://help.syncfusion.com/cr/document-processing/Syncfusion.OfficeChart.IOfficeFill.html#Syncfusion_OfficeChart_IOfficeFill_Transparency) is only applicable when [FillType](https://help.syncfusion.com/cr/document-processing/Syncfusion.OfficeChart.IOfficeFill.html#Syncfusion_OfficeChart_IOfficeFill_FillType) is set as SolidColor. Color-shaded fill is represented as a floating-point value ranging from 0.0 (Clear) to 1.0 (Opaque).

## See Also
* [Chart Title in PowerPoint](Chart-Title)
* [Chart Axis in PowerPoint](Chart-Axis)
* [Chart Data Labels in PowerPoint](Chart-Data-Labels)
* [Chart Legend in PowerPoint](Chart-Legend)
* [Chart Plot Area in PowerPoint](Chart-Plot-Area)
* [Chart Series in PowerPoint](Chart-Series)