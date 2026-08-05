---
title: Modify the Appearance of Legend | Syncfusion
description: Learn how to modify the appearance of the legend in a PowerPoint chart using the .NET PowerPoint library (Presentation) without Microsoft PowerPoint.
platform: document-processing
control: PowerPoint
documentation: UG
---

# Chart Legend in PowerPoint

Legends are visual keys that provide viewers with information that helps them understand a chart. Using Presentation, you can **customize the legend in the chart**.

## Prerequisites

Before applying the operations in this document, install the required NuGet packages and reference the following namespaces. For more information, refer to [Assemblies Required](../Assemblies-Required) and [NuGet Packages Required](../NuGet-Packages-Required).


## Set the Position of Legend

The following code snippet illustrates how to set the legend position in a chart. The [`OfficeLegendPosition`](https://help.syncfusion.com/cr/document-processing/Syncfusion.OfficeChart.OfficeLegendPosition.html) enum supports the values: `Top`, `Bottom`, `Left`, `Right`, etc.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}

// Set the position of the legend.
chart.Legend.Position = OfficeLegendPosition.Bottom;

{% endhighlight %}
{% highlight c# tabtitle="C# [Windows-specific]" %}

// Set the position of the legend.
chart.Legend.Position = OfficeLegendPosition.Bottom;

{% endhighlight %}
{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

' Set the position of the legend.
chart.Legend.Position = OfficeLegendPosition.Bottom

{% endhighlight %}
{% endtabs %}

## Include the Legend in the Chart Layout

The following code snippet illustrates how to include the legend in the chart layout so that the chart plot area is automatically resized to prevent the legend from overlapping the chart.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}

// Include the legend in the chart layout.
chart.Legend.IncludeInLayout = true;

{% endhighlight %}
{% highlight c# tabtitle="C# [Windows-specific]" %}

// Include the legend in the chart layout.
chart.Legend.IncludeInLayout = true;

{% endhighlight %}
{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

' Include the legend in the chart layout.
chart.Legend.IncludeInLayout = True

{% endhighlight %}
{% endtabs %}

## Customize the Legend Border

The following code snippet illustrates how to modify the legend border in a chart using the [`OfficeChartLinePattern`](https://help.syncfusion.com/cr/document-processing/Syncfusion.OfficeChart.OfficeChartLinePattern.html) enum and [`OfficeChartLineWeight`](https://help.syncfusion.com/cr/document-processing/Syncfusion.OfficeChart.OfficeChartLineWeight.html) enum.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}

// Set the legend border format - color, pattern, weight.
chart.Legend.FrameFormat.Border.AutoFormat = false;
chart.Legend.FrameFormat.Border.IsAutoLineColor = false;
chart.Legend.FrameFormat.Border.LineColor = Syncfusion.Drawing.Color.Blue;
chart.Legend.FrameFormat.Border.LinePattern = OfficeChartLinePattern.DashDot;
chart.Legend.FrameFormat.Border.LineWeight = OfficeChartLineWeight.Wide;

{% endhighlight %}
{% highlight c# tabtitle="C# [Windows-specific]" %}

// Set the legend border format - color, pattern, weight.
chart.Legend.FrameFormat.Border.AutoFormat = false;
chart.Legend.FrameFormat.Border.IsAutoLineColor = false;
chart.Legend.FrameFormat.Border.LineColor = Color.Blue;
chart.Legend.FrameFormat.Border.LinePattern = OfficeChartLinePattern.DashDot;
chart.Legend.FrameFormat.Border.LineWeight = OfficeChartLineWeight.Wide;

{% endhighlight %}
{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

' Sets the legend border format - color, pattern, weight.
chart.Legend.FrameFormat.Border.AutoFormat = False
chart.Legend.FrameFormat.Border.IsAutoLineColor = False
chart.Legend.FrameFormat.Border.LineColor = Color.Blue
chart.Legend.FrameFormat.Border.LinePattern = OfficeChartLinePattern.DashDot
chart.Legend.FrameFormat.Border.LineWeight = OfficeChartLineWeight.Wide

{% endhighlight %}
{% endtabs %}

## Customize the Legend Text Area

The following code snippet illustrates how to modify the text area of the legend in a chart. The [`OfficeKnownColors`](https://help.syncfusion.com/cr/document-processing/Syncfusion.OfficeChart.OfficeKnownColors.html) enum exposes a wide range of named colors (for example, `Bright_green`, `Pink`, `Red`).

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}

// Set the legend's text area formatting - font name, weight, color, size.
chart.Legend.TextArea.Bold = true;
chart.Legend.TextArea.Color = OfficeKnownColors.Bright_green;
chart.Legend.TextArea.FontName = "Times New Roman";
chart.Legend.TextArea.Size = 20;
chart.Legend.TextArea.Strikethrough = true;

{% endhighlight %}
{% highlight c# tabtitle="C# [Windows-specific]" %}

// Set the legend's text area formatting - font name, weight, color, size.
chart.Legend.TextArea.Bold = true;
chart.Legend.TextArea.Color = OfficeKnownColors.Bright_green;
chart.Legend.TextArea.FontName = "Times New Roman";
chart.Legend.TextArea.Size = 20;
chart.Legend.TextArea.Strikethrough = true;

{% endhighlight %}
{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

' Set the legend's text area formatting - font name, weight, color, size.
chart.Legend.TextArea.Bold = True
chart.Legend.TextArea.Color = OfficeKnownColors.Bright_green
chart.Legend.TextArea.FontName = "Times New Roman"
chart.Legend.TextArea.Size = 20
chart.Legend.TextArea.Strikethrough = True

{% endhighlight %}
{% endtabs %}

## Delete a Legend Entry

The following code snippet illustrates how to delete a legend entry. The index passed to `LegendEntries` corresponds to the order of the chart series (0 for the first series, 1 for the second, and so on).

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}

// Delete the legend entry.
chart.Legend.LegendEntries[0].IsDeleted = true;

{% endhighlight %}
{% highlight c# tabtitle="C# [Windows-specific]" %}

// Delete the legend entry.
chart.Legend.LegendEntries[0].IsDeleted = true;

{% endhighlight %}
{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

' Delete the legend entry.
chart.Legend.LegendEntries(0).IsDeleted = True

{% endhighlight %}
{% endtabs %}


## Manage Legend Visibility

The following code snippet illustrates how to hide the legend in chart.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}

// Hide the legend.
chart.HasLegend = false;

{% endhighlight %}
{% highlight c# tabtitle="C# [Windows-specific]" %}

// Hide the legend.
chart.HasLegend = false;

{% endhighlight %}
{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

' Hide the legend.
chart.HasLegend = False

{% endhighlight %}
{% endtabs %}

## Display the Legend Horizontally

The following code snippet illustrates how to view legend horizontally.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}

// Display legend horizontally.
chart.Legend.IsVerticalLegend = false;

{% endhighlight %}
{% highlight c# tabtitle="C# [Windows-specific]" %}

// Display legend horizontally.
chart.Legend.IsVerticalLegend = false;

{% endhighlight %}
{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

' Display legend horizontally.
chart.Legend.IsVerticalLegend = False

{% endhighlight %}
{% endtabs %}

## Set the Legend Anchor Mode

The following code snippet illustrates how to position the legend using layout.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}

//Manually positioning chart legend area using Layout.
chart.Legend.Layout.LeftMode = LayoutModes.edge;
chart.Legend.Layout.TopMode = LayoutModes.edge;

//Manually positioning chart legend area using Manual Layout.
chart.Legend.Layout.ManualLayout.LeftMode = LayoutModes.edge;
chart.Legend.Layout.ManualLayout.TopMode = LayoutModes.edge;

{% endhighlight %}
{% highlight c# tabtitle="C# [Windows-specific]" %}

//Manually positioning chart legend area using Layout.
chart.Legend.Layout.LeftMode = LayoutModes.edge;
chart.Legend.Layout.TopMode = LayoutModes.edge;

//Manually positioning chart legend area using Manual Layout.
chart.Legend.Layout.ManualLayout.LeftMode = LayoutModes.edge;
chart.Legend.Layout.ManualLayout.TopMode = LayoutModes.edge;

{% endhighlight %}
{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

' Manually positioning chart legend area using Layout.
chart.Legend.Layout.LeftMode = LayoutModes.Edge
chart.Legend.Layout.TopMode = LayoutModes.Edge

' Manually positioning chart legend area using Manual Layout.
chart.Legend.Layout.ManualLayout.LeftMode = LayoutModes.Edge
chart.Legend.Layout.ManualLayout.TopMode = LayoutModes.Edge

{% endhighlight %}
{% endtabs %}


## Resize the Legend

The following code snippet illustrates how to resize the legend in a chart. The [`Layout`](https://help.syncfusion.com/cr/document-processing/Syncfusion.OfficeChart.IOfficeChartLegend.html#Syncfusion_OfficeChart_IOfficeChartLegend_Layout) properties accept values in points, whereas the [`ManualLayout`](https://help.syncfusion.com/cr/document-processing/Syncfusion.OfficeChart.IOfficeChartLayout.html#Syncfusion_OfficeChart_IOfficeChartLayout_ManualLayout) properties accept fractional values in the range 0–1 relative to the chart area.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}

// Resize the legend area (values in points).
chart.Legend.Layout.Left = 400;
chart.Legend.Layout.Top = 150;
chart.Legend.Layout.Width = 150;
chart.Legend.Layout.Height = 100;

// Resize the manual layout (values are fractions of the chart area, 0 to 1).
chart.Legend.Layout.ManualLayout.Height = 0.09;
chart.Legend.Layout.ManualLayout.Width = 0.30;
chart.Legend.Layout.ManualLayout.Top = 0.36;
chart.Legend.Layout.ManualLayout.Left = 0.68;

{% endhighlight %}
{% highlight c# tabtitle="C# [Windows-specific]" %}

// Resize the legend area (values in points).
chart.Legend.Layout.Left = 400;
chart.Legend.Layout.Top = 150;
chart.Legend.Layout.Width = 150;
chart.Legend.Layout.Height = 100;

// Resize the manual layout (values are fractions of the chart area, 0 to 1).
chart.Legend.Layout.ManualLayout.Height = 0.09;
chart.Legend.Layout.ManualLayout.Width = 0.30;
chart.Legend.Layout.ManualLayout.Top = 0.36;
chart.Legend.Layout.ManualLayout.Left = 0.68;

{% endhighlight %}
{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

' Resize the legend area (values in points).
chart.Legend.Layout.Left = 400
chart.Legend.Layout.Top = 150
chart.Legend.Layout.Width = 150
chart.Legend.Layout.Height = 100

' Resize the manual layout (values are fractions of the chart area, 0 to 1).
chart.Legend.Layout.ManualLayout.Height = 0.09
chart.Legend.Layout.ManualLayout.Width = 0.30
chart.Legend.Layout.ManualLayout.Top = 0.36
chart.Legend.Layout.ManualLayout.Left = 0.68

{% endhighlight %}
{% endtabs %}

The complete code snippet illustrating the above options is shown below.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PowerPoint-Examples/master/Charts/Format-Legend/.NET/Format-Legend/Program.cs" %}

// Open an existing PowerPoint Presentation.
using (IPresentation pptxDoc = Presentation.Open("Data/Template.pptx"))
{
    // Get the first slide.
    ISlide slide = pptxDoc.Slides[0];
    // Get the chart in the slide.
    IPresentationChart chart = slide.Shapes[0] as IPresentationChart;

    // Enable the legend.
    chart.HasLegend = true;

    // Set the position of the legend.
    chart.Legend.Position = OfficeLegendPosition.Right;

    // Include the legend in the chart layout and apply the legend border.
    chart.Legend.IncludeInLayout = true;
    chart.Legend.FrameFormat.Border.AutoFormat = false;
    chart.Legend.FrameFormat.Border.IsAutoLineColor = false;
    chart.Legend.FrameFormat.Border.LineColor = Syncfusion.Drawing.Color.Black;
    chart.Legend.FrameFormat.Border.LinePattern = OfficeChartLinePattern.DashDot;
    chart.Legend.FrameFormat.Border.LineWeight = OfficeChartLineWeight.Hairline;

    // Set the legend's text area formatting - font name, weight, color, size.
    chart.Legend.TextArea.Bold = true;
    chart.Legend.TextArea.Color = OfficeKnownColors.Pink;
    chart.Legend.TextArea.FontName = "Times New Roman";
    chart.Legend.TextArea.Size = 10;
    chart.Legend.TextArea.Strikethrough = false;

    // Display the legend vertically.
    chart.Legend.IsVerticalLegend = true;

    // Delete the legend entry.
    chart.Legend.LegendEntries[0].IsDeleted = true;

    // Resize the legend area (values in points).
    chart.Legend.Layout.Left = 0.2;
    chart.Legend.Layout.Top = 5;
    chart.Legend.Layout.Width = 40;
    chart.Legend.Layout.Height = 40;

    // Save the PowerPoint Presentation.
    pptxDoc.Save("Result.pptx");
}

{% endhighlight %}
{% highlight c# tabtitle="C# [Windows-specific]" %}

// Open an existing PowerPoint Presentation.
using (IPresentation pptxDoc = Presentation.Open("Template.pptx"))
{
    // Get the first slide.
    ISlide slide = pptxDoc.Slides[0];
    // Get the chart in the slide.
    IPresentationChart chart = slide.Shapes[0] as IPresentationChart;

    // Enable the legend.
    chart.HasLegend = true;

    // Set the position of the legend.
    chart.Legend.Position = OfficeLegendPosition.Right;

    // Include the legend in the chart layout and apply the legend border.
    chart.Legend.IncludeInLayout = true;
    chart.Legend.FrameFormat.Border.AutoFormat = false;
    chart.Legend.FrameFormat.Border.IsAutoLineColor = false;
    chart.Legend.FrameFormat.Border.LineColor = Syncfusion.Drawing.Color.Black;
    chart.Legend.FrameFormat.Border.LinePattern = OfficeChartLinePattern.DashDot;
    chart.Legend.FrameFormat.Border.LineWeight = OfficeChartLineWeight.Hairline;

    // Set the legend's text area formatting - font name, weight, color, size.
    chart.Legend.TextArea.Bold = true;
    chart.Legend.TextArea.Color = OfficeKnownColors.Pink;
    chart.Legend.TextArea.FontName = "Times New Roman";
    chart.Legend.TextArea.Size = 10;
    chart.Legend.TextArea.Strikethrough = false;

    // Display the legend vertically.
    chart.Legend.IsVerticalLegend = true;

    // Delete the legend entry.
    chart.Legend.LegendEntries[0].IsDeleted = true;

    // Resize the legend area (values in points).
    chart.Legend.Layout.Left = 0.2;
    chart.Legend.Layout.Top = 5;
    chart.Legend.Layout.Width = 40;
    chart.Legend.Layout.Height = 40;

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

    ' Enable the legend.
    chart.HasLegend = True

    ' Set the position of the legend.
    chart.Legend.Position = OfficeLegendPosition.Right

    ' Legend without overlapping the chart.
    chart.Legend.IncludeInLayout = True
    chart.Legend.FrameFormat.Border.AutoFormat = False
    chart.Legend.FrameFormat.Border.IsAutoLineColor = False
    chart.Legend.FrameFormat.Border.LineColor = Syncfusion.Drawing.Color.Black
    chart.Legend.FrameFormat.Border.LinePattern = OfficeChartLinePattern.DashDot
    chart.Legend.FrameFormat.Border.LineWeight = OfficeChartLineWeight.Hairline

    ' Set the legend's text area formatting - font name, weight, color, size.
    chart.Legend.TextArea.Bold = True
    chart.Legend.TextArea.Color = OfficeKnownColors.Pink
    chart.Legend.TextArea.FontName = "Times New Roman"
    chart.Legend.TextArea.Size = 10
    chart.Legend.TextArea.Strikethrough = False

    ' View legend in vertical.
    chart.Legend.IsVerticalLegend = True

    ' Delete the legend entry.
    chart.Legend.LegendEntries(0).IsDeleted = True

    ' Resize the legend area (values in points).
    chart.Legend.Layout.Left = 0.2
    chart.Legend.Layout.Top = 5
    chart.Legend.Layout.Width = 40
    chart.Legend.Layout.Height = 40

    ' Legend without overlapping the chart.
    chart.Legend.IncludeInLayout = True

    ' Save the PowerPoint Presentation.
    pptxDoc.Save("Result.pptx")
End Using

{% endhighlight %}
{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PowerPoint-Examples/tree/master/Charts/Format-Legend/.NET).

## See Also

* [How to remove legend for Chart in Presentation](https://support.syncfusion.com/kb/article/13832/how-to-remove-legend-of-chart-in-powerpoint-using-c-in-aspnet-core)
* [Chart Area in PowerPoint](Chart-Area)
* [Chart Axis in PowerPoint](Chart-Axis)
* [Chart Data Labels in PowerPoint](Chart-Data-Labels)
* [Chart Title in PowerPoint](Chart-Title)
* [Chart Plot Area in PowerPoint](Chart-Plot-Area)
* [Chart Series in PowerPoint](Chart-Series)