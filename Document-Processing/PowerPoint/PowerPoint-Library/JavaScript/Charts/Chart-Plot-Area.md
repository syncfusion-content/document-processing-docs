---
layout: post
title: Chart Plot Area in JavaScript PowerPoint | Syncfusion
description: Learn how to format the plot area of a PowerPoint chart using the Syncfusion JavaScript PowerPoint Library.
platform: document-processing
control: PowerPoint
documentation: ug
keywords: javascript, powerpoint, chart plot area
---

# Chart Plot Area in JavaScript PowerPoint

The plot area is the region inside the chart where the series are drawn. The [JavaScript PowerPoint Library](https://www.syncfusion.com/document-sdk/javascript-powerpoint-library) exposes it as `chart.plotArea` on a chart created with `slide.shapes.addChart`. You can customize the plot area by:

* Customizing the border.
* Customizing the fill.
* Setting the transparency level.

The following code example demonstrates how to format the plot area.

{% tabs %}
{% highlight js tabtitle="TypeScript" %}

import { Presentation, SlideLayoutType, OfficeChartType } from '@syncfusion/ej2-pptx';

// Creates a Presentation instance.
let pptxDoc = Presentation.create();
// Adds a blank slide.
let slide = pptxDoc.slides.add({ layout: SlideLayoutType.Blank });
// Adds a chart with position and size (points) and the chart type.
let chart = slide.shapes.addChart({
    type: OfficeChartType.ColumnClustered,
    bounds: { x: 100, y: 10, width: 700, height: 500 }
});
// Formats the plot area.
let chartPlotArea = chart.plotArea;
// Customizes the border.
chartPlotArea.line.color = '5A78F2';
chartPlotArea.line.weightPt = 3;
// Customizes the fill.
chartPlotArea.fill.type = 'solid';
chartPlotArea.fill.foreColor = 'F25AA9';
// Sets the transparency level.
chartPlotArea.fill.transparency = 0.7;
// Saves the presentation.
await pptxDoc.save('Output.pptx');

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
// Creates a Presentation instance.
var pptxDoc = ej.pptx.Presentation.create();
// Adds a blank slide.
var slide = pptxDoc.slides.add({ layout: ej.pptx.SlideLayoutType.Blank });
// Adds a chart with position and size (points) and the chart type.
var chart = slide.shapes.addChart({
    type: ej.pptx.OfficeChartType.ColumnClustered,
    bounds: { x: 100, y: 10, width: 700, height: 500 }
});
// Formats the plot area.
var chartPlotArea = chart.plotArea;
// Customizes the border.
chartPlotArea.line.color = '5A78F2';
chartPlotArea.line.weightPt = 3;
// Customizes the fill.
chartPlotArea.fill.type = 'solid';
chartPlotArea.fill.foreColor = 'F25AA9';
// Sets the transparency level.
chartPlotArea.fill.transparency = 0.7;
// Saves the presentation.
await pptxDoc.save('Output.pptx');
{% endhighlight %}
{% endtabs %}

## Customize the border

The following code snippet illustrates how to customize the plot area border.

{% tabs %}
{% highlight js tabtitle="TypeScript" %}

// Formats the plot area.
let chartPlotArea = chart.plotArea;
// Customizes the border.
chartPlotArea.line.color = '5A78F2';
chartPlotArea.line.weightPt = 3;

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
// Formats the plot area.
var chartPlotArea = chart.plotArea;
// Customizes the border.
chartPlotArea.line.color = '5A78F2';
chartPlotArea.line.weightPt = 3;
{% endhighlight %}
{% endtabs %}

## Customize the fill

The following code snippet illustrates how to customize the plot area fill.

{% tabs %}
{% highlight js tabtitle="TypeScript" %}

// Formats the plot area.
let chartPlotArea = chart.plotArea;
// Customizes the fill.
chartPlotArea.fill.type = 'solid';
chartPlotArea.fill.foreColor = 'F25AA9';

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
// Formats the plot area.
var chartPlotArea = chart.plotArea;
// Customizes the fill.
chartPlotArea.fill.type = 'solid';
chartPlotArea.fill.foreColor = 'F25AA9';
{% endhighlight %}
{% endtabs %}

## Set the transparency level

The following code snippet illustrates how to set the plot area transparency.

{% tabs %}
{% highlight js tabtitle="TypeScript" %}

// Formats the plot area.
let chartPlotArea = chart.plotArea;
// Sets the transparency level.
chartPlotArea.fill.transparency = 0.7;

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
// Formats the plot area.
var chartPlotArea = chart.plotArea;
// Sets the transparency level.
chartPlotArea.fill.transparency = 0.7;
{% endhighlight %}
{% endtabs %}

## See Also

* [Working with Charts](../Working-with-Charts)
* [Chart Area](./Chart-Area)
* [Chart Legend](./Chart-Legend)
* [Chart Axis](./Chart-Axis)
