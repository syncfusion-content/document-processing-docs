---
title: Modify the Appearance of Data Labels | Syncfusion
description: Learn how to modify the appearance of data labels in a chart in a PowerPoint using .NET PowerPoint library (Presentation) without Microsoft PowerPoint.
platform: document-processing
control: PowerPoint
documentation: UG
---

# Chart Data Labels in PowerPoint

Data labels make a chart easier to understand by displaying the values of each data point. Using Presentation, you can **customize the data labels in a chart** without Microsoft PowerPoint.

## Enable Data Labels in Chart

The following code snippet illustrates how to make the data labels visible in a chart.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}

// Enable the data labels in the chart.
chart.Series[0].DataPoints.DefaultDataPoint.DataLabels.IsValue = true;

{% endhighlight %}
{% highlight c# tabtitle="C# [Windows-specific]" %}

// Enable the data labels in the chart.
chart.Series[0].DataPoints.DefaultDataPoint.DataLabels.IsValue = true;

{% endhighlight %}
{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

' Enable the data labels in the chart.
chart.Series(0).DataPoints.DefaultDataPoint.DataLabels.IsValue = True

{% endhighlight %}
{% endtabs %}

## Customize the Data Labels

The following code snippet illustrates how to customize the data labels in a chart.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}

// Set the font size of the data labels.
chart.Series[0].DataPoints.DefaultDataPoint.DataLabels.Size = 8;
// Change the color of the data labels.
chart.Series[0].DataPoints.DefaultDataPoint.DataLabels.Color = OfficeKnownColors.Red;
// Make the data labels bold.
chart.Series[0].DataPoints.DefaultDataPoint.DataLabels.Bold = true;
// Set the font name for the data labels.
chart.Series[0].DataPoints.DefaultDataPoint.DataLabels.FontName = "calibri";
// Make the data labels italic.
chart.Series[0].DataPoints.DefaultDataPoint.DataLabels.Italic = true;

{% endhighlight %}
{% highlight c# tabtitle="C# [Windows-specific]" %}

// Set the font size of the data labels.
chart.Series[0].DataPoints.DefaultDataPoint.DataLabels.Size = 8;
// Change the color of the data labels.
chart.Series[0].DataPoints.DefaultDataPoint.DataLabels.Color = OfficeKnownColors.Red;
// Make the data labels bold.
chart.Series[0].DataPoints.DefaultDataPoint.DataLabels.Bold = true;
// Set the font name for the data labels.
chart.Series[0].DataPoints.DefaultDataPoint.DataLabels.FontName = "calibri";
// Make the data labels italic.
chart.Series[0].DataPoints.DefaultDataPoint.DataLabels.Italic = true;

{% endhighlight %}
{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

' Set the font size of the data labels.
chart.Series(0).DataPoints.DefaultDataPoint.DataLabels.Size = 8
' Change the color of the data labels.
chart.Series(0).DataPoints.DefaultDataPoint.DataLabels.Color = OfficeKnownColors.Red
' Make the data labels bold.
chart.Series(0).DataPoints.DefaultDataPoint.DataLabels.Bold = True
' Set the font name for the data labels.
chart.Series(0).DataPoints.DefaultDataPoint.DataLabels.FontName = "calibri"
' Make the data labels italic.
chart.Series(0).DataPoints.DefaultDataPoint.DataLabels.Italic = True

{% endhighlight %}
{% endtabs %}

## Set the Position of Data Labels

The following code snippet illustrates how to set the position of the data labels in a chart.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}

// Set the position of data labels for the first series.
chart.Series[0].DataPoints.DefaultDataPoint.DataLabels.Position = OfficeDataLabelPosition.Center;

{% endhighlight %}
{% highlight c# tabtitle="C# [Windows-specific]" %}

// Set the position of data labels for the first series.
chart.Series[0].DataPoints.DefaultDataPoint.DataLabels.Position = OfficeDataLabelPosition.Center;

{% endhighlight %}
{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

' Set the position of data labels for the first series.
chart.Series(0).DataPoints.DefaultDataPoint.DataLabels.Position = OfficeDataLabelPosition.Center

{% endhighlight %}
{% endtabs %}

The complete code snippet illustrating the above options is shown below.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PowerPoint-Examples/master/Charts/Format-Data-Labels/.NET/Format-Data-Labels/Program.cs" %}

// Open an existing PowerPoint Presentation.
using (IPresentation pptxDoc = Presentation.Open("Data/Template.pptx"))
{
    // Gets the first slide.
    ISlide slide = pptxDoc.Slides[0];
    // Gets the chart in the slide.
    IPresentationChart chart = slide.Shapes[0] as IPresentationChart;
    for (int i = 0; i < chart.Series.Count; i++)
    {
        // Enable the data labels in the chart.
        chart.Series[i].DataPoints.DefaultDataPoint.DataLabels.IsValue = true;

        // Set the font size of the data labels.
        chart.Series[i].DataPoints.DefaultDataPoint.DataLabels.Size = 10;
        // Change the color of the data labels.
        chart.Series[i].DataPoints.DefaultDataPoint.DataLabels.Color = OfficeKnownColors.Black;
        // Make the data labels bold.
        chart.Series[i].DataPoints.DefaultDataPoint.DataLabels.Bold = true;
        // Set the position of data labels for the first series.
        chart.Series[i].DataPoints.DefaultDataPoint.DataLabels.Position = OfficeDataLabelPosition.Center;
    }
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

    for (int i = 0; i < chart.Series.Count; i++)
    {
        // Enable the data labels in the chart.
        chart.Series[i].DataPoints.DefaultDataPoint.DataLabels.IsValue = true;

        // Set the font size of the data labels.
        chart.Series[i].DataPoints.DefaultDataPoint.DataLabels.Size = 10;
        // Change the color of the data labels.
        chart.Series[i].DataPoints.DefaultDataPoint.DataLabels.Color = OfficeKnownColors.Black;
        // Make the data labels bold.
        chart.Series[i].DataPoints.DefaultDataPoint.DataLabels.Bold = true;
        // Set the position of data labels for the first series.
        chart.Series[i].DataPoints.DefaultDataPoint.DataLabels.Position = OfficeDataLabelPosition.Center;
    }
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

    For i As Integer = 0 To chart.Series.Count - 1
        ' Enable the data labels in the chart.
        chart.Series(i).DataPoints.DefaultDataPoint.DataLabels.IsValue = True

        ' Set the font size of the data labels.
        chart.Series(i).DataPoints.DefaultDataPoint.DataLabels.Size = 10
        ' Change the color of the data labels.
        chart.Series(i).DataPoints.DefaultDataPoint.DataLabels.Color = OfficeKnownColors.Black
        ' Make the data labels bold.
        chart.Series(i).DataPoints.DefaultDataPoint.DataLabels.Bold = True
        ' Set the position of data labels for the first series.
        chart.Series(i).DataPoints.DefaultDataPoint.DataLabels.Position = OfficeDataLabelPosition.Center
    Next

    ' Save the PowerPoint Presentation.
    pptxDoc.Save("Result.pptx")
End Using

{% endhighlight %}
{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PowerPoint-Examples/tree/master/Charts/Format-Data-Labels/.NET).

## Resize the Data Labels

The following code snippet illustrates how to resize the data label in chart.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}

// Manually resize the data label area using Layout.
chart.Series[0].DataPoints[0].DataLabels.Layout.Left = 3;
chart.Series[0].DataPoints[0].DataLabels.Layout.Top = 3;

// Manually resize the data label area using Manual Layout.
chart.Series[0].DataPoints[0].DataLabels.Layout.ManualLayout.Left = 3;
chart.Series[0].DataPoints[0].DataLabels.Layout.ManualLayout.Top = 3;

{% endhighlight %}
{% highlight c# tabtitle="C# [Windows-specific]" %}

// Manually resize the data label area using Layout.
chart.Series[0].DataPoints[0].DataLabels.Layout.Left = 3;
chart.Series[0].DataPoints[0].DataLabels.Layout.Top = 3;

// Manually resize the data label area using Manual Layout.
chart.Series[0].DataPoints[0].DataLabels.Layout.ManualLayout.Left = 3;
chart.Series[0].DataPoints[0].DataLabels.Layout.ManualLayout.Top = 3;

{% endhighlight %}
{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

' Manually resize the data label area using Layout.
chart.Series(0).DataPoints(0).DataLabels.Layout.Left = 3
chart.Series(0).DataPoints(0).DataLabels.Layout.Top = 3

' Manually resize the data label area using Manual Layout.
chart.Series(0).DataPoints(0).DataLabels.Layout.ManualLayout.Left = 3
chart.Series(0).DataPoints(0).DataLabels.Layout.ManualLayout.Top = 3

{% endhighlight %}
{% endtabs %}


## Show Leader Lines

The leader lines can be shown in a chart through [ShowLeaderLines](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.Implementation.Charts.ChartDataLabelsImpl.html#Syncfusion_XlsIO_Implementation_Charts_ChartDataLabelsImpl_ShowLeaderLines) API which can be set to all data labels by enabling the leader lines for [DefaultDataPoint](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.Implementation.Charts.ChartDataPointsCollection.html#Syncfusion_XlsIO_Implementation_Charts_ChartDataPointsCollection_DefaultDataPoint).

The following code illustrates how to enable the leader lines for all data labels in the chart.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PowerPoint-Examples/master/Charts/Show-Leader-Lines/.NET/Show-Leader-Lines/Program.cs" %}

// Enable the leader lines in Chart.
chart.Series[0].DataPoints.DefaultDataPoint.DataLabels.ShowLeaderLines = true;

{% endhighlight %}
{% highlight c# tabtitle="C# [Windows-specific]" %}

// Enable the leader lines in Chart.
chart.Series[0].DataPoints.DefaultDataPoint.DataLabels.ShowLeaderLines = true;

{% endhighlight %}
{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

' Enable the leader lines in Chart.
chart.Series(0).DataPoints.DefaultDataPoint.DataLabels.ShowLeaderLines = True

{% endhighlight %}
{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PowerPoint-Examples/tree/master/Charts/Show-Leader-Lines/.NET).

## See Also

* [How to change text of data labels for Chart in Presentation](https://support.syncfusion.com/kb/article/13828/how-to-change-the-text-in-data-labels-inside-a-chart-in-presentation-using-c-in-aspnet-core)
* [Chart Area in PowerPoint](Chart-Area)
* [Chart Axis in PowerPoint](Chart-Axis)
* [Chart Title in PowerPoint](Chart-Title)
* [Chart Legend in PowerPoint](Chart-Legend)
* [Chart Plot Area in PowerPoint](Chart-Plot-Area)
* [Chart Series in PowerPoint](Chart-Series)