---
layout: post
title: Chart Area in JavaScript PowerPoint | Syncfusion
description: Learn how to format the chart area of a PowerPoint chart using the Syncfusion JavaScript PowerPoint Library.
platform: document-processing
control: PowerPoint
documentation: ug
keywords: javascript, powerpoint, chart area
---

# Chart Area in JavaScript PowerPoint

The chart area is the frame around the whole chart. The [JavaScript PowerPoint Library](https://www.syncfusion.com/document-sdk/javascript-powerpoint-library) exposes it as `chart.chartArea` on a chart created with `slide.shapes.addChart`. You can customize the chart area by:

* Customizing the border.
* Customizing the fill.
* Setting the transparency level.

The following code example demonstrates how to format the chart area.

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
// Formats the chart area.
let chartArea = chart.chartArea;
// Customizes the border.
chartArea.line.color = 'F25AD6';
chartArea.line.weightPt = 10;
// Customizes the fill.
chartArea.fill.type = 'solid';
chartArea.fill.foreColor = 'F2715A';
// Sets the transparency level.
chartArea.fill.transparency = 0.5;
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
// Formats the chart area.
var chartArea = chart.chartArea;
// Customizes the border.
chartArea.line.color = 'F25AD6';
chartArea.line.weightPt = 10;
// Customizes the fill.
chartArea.fill.type = 'solid';
chartArea.fill.foreColor = 'F2715A';
// Sets the transparency level.
chartArea.fill.transparency = 0.5;
// Saves the presentation.
await pptxDoc.save('Output.pptx');
{% endhighlight %}
{% endtabs %}

## Customize the border

The following code snippet illustrates how to customize the chart area border.

{% tabs %}
{% highlight js tabtitle="TypeScript" %}

// Formats the chart area.
let chartArea = chart.chartArea;
// Customizes the border.
chartArea.line.color = 'F25AD6';
chartArea.line.weightPt = 10;

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
// Formats the chart area.
var chartArea = chart.chartArea;
// Customizes the border.
chartArea.line.color = 'F25AD6';
chartArea.line.weightPt = 10;
{% endhighlight %}
{% endtabs %}

## Customize the fill

The following code snippet illustrates how to customize the chart area fill.

{% tabs %}
{% highlight js tabtitle="TypeScript" %}

// Formats the chart area.
let chartArea = chart.chartArea;
// Customizes the fill.
chartArea.fill.type = 'solid';
chartArea.fill.foreColor = 'F2715A';

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
// Formats the chart area.
var chartArea = chart.chartArea;
// Customizes the fill.
chartArea.fill.type = 'solid';
chartArea.fill.foreColor = 'F2715A';
{% endhighlight %}
{% endtabs %}

## Set the transparency level

The following code snippet illustrates how to set the chart area transparency.

{% tabs %}
{% highlight js tabtitle="TypeScript" %}

// Formats the chart area.
let chartArea = chart.chartArea;
// Sets the transparency level.
chartArea.fill.transparency = 0.5;

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
// Formats the chart area.
var chartArea = chart.chartArea;
// Sets the transparency level.
chartArea.fill.transparency = 0.5;
{% endhighlight %}
{% endtabs %}

## See Also

* [Working with Charts](../Working-with-Charts)
* [Chart Title](./Chart-Title)
* [Chart Plot Area](./Chart-Plot-Area)
* [Chart Legend](./Chart-Legend)
