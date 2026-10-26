---
title: Modify the Appearance of Chart Title | Syncfusion
description: Learn how to modify the appearance of chart title in a chart in a PowerPoint using .NET PowerPoint library (Presentation) without Microsoft PowerPoint.
platform: document-processing
control: PowerPoint
documentation: UG
---

# Chart Title in PowerPoint

Chart title is a concise description at the top of a chart, offering context and clarity for the data displayed. Using Presentation, you can **customize the chart title in the chart** by:

- Setting the chart title text.
- Customizing the chart title area (font, color, size, weight, underline, and so on).
- Positioning the chart title area within the chart.

N> For prerequisites (installing the NuGet packages, required namespaces, and creating a chart), refer to the [Getting Started](https://help.syncfusion.com/document-processing/powerpoint/powerpoint-library/net/getting-started) and [NuGet Packages Required](https://help.syncfusion.com/document-processing/powerpoint/powerpoint-library/net/nuget-packages-required) documentation.

## Set the Chart Title Name

The following code snippet illustrates how to set the chart title name on a chart named `chart`.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}

// Set the chart title.
chart.ChartTitle = "Purchase Details";

{% endhighlight %}
{% highlight c# tabtitle="C# [Windows-specific]" %}

// Set the chart title.
chart.ChartTitle = "Purchase Details";

{% endhighlight %}
{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

' Set the chart title.
chart.ChartTitle = "Purchase Details"

{% endhighlight %}
{% endtabs %}

## Customize the Chart Title Area

The following code snippet illustrates how to customize the chart title area. The [`OfficeKnownColors`](https://help.syncfusion.com/cr/document-processing/Syncfusion.OfficeChart.OfficeKnownColors.html) enum exposes a wide range of named colors (for example, `Red`, `Black`, `Blue`), and the [`OfficeUnderline`](https://help.syncfusion.com/cr/document-processing/Syncfusion.OfficeChart.OfficeUnderline.html) enum defines the supported underline styles (for example, `DashLong`, `WavyHeavy`, `None`).

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}

// Customize the chart title area.
chart.ChartTitleArea.FontName = "Calibri";
chart.ChartTitleArea.Bold = true;
chart.ChartTitleArea.Color = OfficeKnownColors.Red;
chart.ChartTitleArea.Underline = OfficeUnderline.DashLong;
chart.ChartTitleArea.Size = 14;

{% endhighlight %}
{% highlight c# tabtitle="C# [Windows-specific]" %}

// Customize chart title area.
chart.ChartTitleArea.FontName = "Calibri";
chart.ChartTitleArea.Bold = true;
chart.ChartTitleArea.Color = OfficeKnownColors.Red;
chart.ChartTitleArea.Underline = OfficeUnderline.DashLong;
chart.ChartTitleArea.Size = 14;

{% endhighlight %}
{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

' Customize the chart title area.
chart.ChartTitleArea.FontName = "Calibri"
chart.ChartTitleArea.Bold = True
chart.ChartTitleArea.Color = OfficeKnownColors.Red
chart.ChartTitleArea.Underline = OfficeUnderline.DashLong
chart.ChartTitleArea.Size = 14

{% endhighlight %}
{% endtabs %}

## Position the Chart Title Area

The following code snippet illustrates how to position the chart title area. The [`Layout`](https://help.syncfusion.com/cr/document-processing/Syncfusion.OfficeChart.IOfficeChartTitleArea.html#Syncfusion_OfficeChart_IOfficeChartTitleArea_Layout) properties (`Top`, `Left`, `Width`, `Height`) accept values in points, whereas the [`ManualLayout`](https://help.syncfusion.com/cr/document-processing/Syncfusion.OfficeChart.IOfficeChartLayout.html#Syncfusion_OfficeChart_IOfficeChartLayout_ManualLayout) properties accept fractional values in the range 0–1 relative to the chart area.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}

// Position the chart title area using Layout (values in points).
chart.ChartTitleArea.Layout.Top = 10;
chart.ChartTitleArea.Layout.Left = 10;

//Manually resizing chart title area using Manual Layout.
chart.ChartTitleArea.Layout.ManualLayout.Top = 0.005;
chart.ChartTitleArea.Layout.ManualLayout.Left = 0.26;

{% endhighlight %}
{% highlight c# tabtitle="C# [Windows-specific]" %}

//Manually resizing chart title area using Layout.
chart.ChartTitleArea.Layout.Top = 10;
chart.ChartTitleArea.Layout.Left = 10;

//Manually resizing chart title area using Manual Layout.
chart.ChartTitleArea.Layout.ManualLayout.Top = 0.005;
chart.ChartTitleArea.Layout.ManualLayout.Left = 0.26;

{% endhighlight %}
{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

' Position the chart title area using Layout (values in points).
chart.ChartTitleArea.Layout.Top = 10
chart.ChartTitleArea.Layout.Left = 10

' Position the chart title area using Manual Layout (values are fractions of the chart area, 0 to 1).
chart.ChartTitleArea.Layout.ManualLayout.Top = 0.005
chart.ChartTitleArea.Layout.ManualLayout.Left = 0.26

{% endhighlight %}
{% endtabs %}

The complete code snippet illustrating the above options is shown below.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PowerPoint-Examples/master/Charts/Format_Chart_Title/.NET/Format-Chart-Title/Program.cs" %}

// Open an existing PowerPoint Presentation.
using (IPresentation pptxDoc = Presentation.Open("Data/Template.pptx"))
{
    // Gets the first slide.
    ISlide slide = pptxDoc.Slides[0];
    // Gets the chart in the slide.
    IPresentationChart chart = slide.Shapes[0] as IPresentationChart;

    // Set the chart title.
    chart.ChartTitle = "Purchase Details";

    // Customize the chart title area.
    chart.ChartTitleArea.FontName = "Calibri";
    chart.ChartTitleArea.Bold = true;
    chart.ChartTitleArea.Color = OfficeKnownColors.Red;
    chart.ChartTitleArea.Underline = OfficeUnderline.DashLong;
    chart.ChartTitleArea.Size = 14;

    // Position the chart title area using Layout (values in points).
    chart.ChartTitleArea.Layout.Top = 10;
    chart.ChartTitleArea.Layout.Left = 10;

    // Save the PowerPoint Presentation.
    pptxDoc.Save("Result.pptx");
}

{% endhighlight %}
{% highlight c# tabtitle="C# [Windows-specific]" %}

// Open an existing PowerPoint Presentation.
using (IPresentation pptxDoc = Presentation.Open("Template.pptx"))
{
    // Gets the first slide.
    ISlide slide = pptxDoc.Slides[0];
    // Gets the chart in the slide.
    IPresentationChart chart = slide.Shapes[0] as IPresentationChart;

    // Set the chart title.
    chart.ChartTitle = "Purchase Details";

    // Customize the chart title area.
    chart.ChartTitleArea.FontName = "Calibri";
    chart.ChartTitleArea.Bold = true;
    chart.ChartTitleArea.Color = OfficeKnownColors.Red;
    chart.ChartTitleArea.Underline = OfficeUnderline.DashLong;
    chart.ChartTitleArea.Size = 14;

    // Position the chart title area using Layout (values in points).
    chart.ChartTitleArea.Layout.Top = 10;
    chart.ChartTitleArea.Layout.Left = 10;

    // Save the PowerPoint Presentation.
    pptxDoc.Save("Result.pptx");
}

{% endhighlight %}
{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

' Open an existing PowerPoint Presentation.
Using pptxDoc As IPresentation = Presentation.Open("Template.pptx")
    ' Gets the first slide.
    Dim slide As ISlide = pptxDoc.Slides(0)
    ' Gets the chart in the slide.
    Dim chart As IPresentationChart = TryCast(slide.Shapes(0), IPresentationChart)

    ' Set the chart title.
    chart.ChartTitle = "Purchase Details"

    ' Customize the chart title area.
    chart.ChartTitleArea.FontName = "Calibri"
    chart.ChartTitleArea.Bold = True
    chart.ChartTitleArea.Color = OfficeKnownColors.Red
    chart.ChartTitleArea.Underline = OfficeUnderline.DashLong
    chart.ChartTitleArea.Size = 14

    ' Position the chart title area using Layout (values in points).
    chart.ChartTitleArea.Layout.Top = 10
    chart.ChartTitleArea.Layout.Left = 10

    ' Save the PowerPoint presentation.
    pptxDoc.Save("Result.pptx")
End Using

{% endhighlight %}
{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PowerPoint-Examples/tree/master/Charts/Format_Chart_Title/.NET).

## See Also
* [How to format chart title in PowerPoint using C#?](https://support.syncfusion.com/kb/article/13825/how-to-format-chart-title-in-powerpoint-using-c)
* [Chart Area in PowerPoint](Chart-Area)
* [Chart Axis in PowerPoint](Chart-Axis)
* [Chart Data Labels in PowerPoint](Chart-Data-Labels)
* [Chart Legend in PowerPoint](Chart-Legend)
* [Chart Plot Area in PowerPoint](Chart-Plot-Area)
* [Chart Series in PowerPoint](Chart-Series)