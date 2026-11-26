---
layout: post
title: Chart Title in JavaScript PowerPoint | Syncfusion
description: Learn how to set and format a chart title in a PowerPoint slide using the Syncfusion JavaScript PowerPoint Library.
platform: document-processing
control: PowerPoint
documentation: ug
keywords: javascript, powerpoint, chart title
---

# Chart Title in JavaScript PowerPoint

A chart title describes the chart. The [JavaScript PowerPoint Library](https://www.syncfusion.com/document-sdk/javascript-powerpoint-library) exposes the title as properties on a chart created with `slide.shapes.addChart`. You can customize the chart title by:

* Setting the chart title text.
* Customizing the chart title area (font, color, size, and weight).

The following code example demonstrates how to set and format a chart title.

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
// Sets the chart title name.
chart.chartTitle = 'Sales Analysis';
// Customizes the chart title area.
chart.chartTitleArea.fontName = 'Calibri';
chart.chartTitleArea.bold = true;
chart.chartTitleArea.color = '5AF2EE';
chart.chartTitleArea.size = 14;
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
// Sets the chart title name.
chart.chartTitle = 'Sales Analysis';
// Customizes the chart title area.
chart.chartTitleArea.fontName = 'Calibri';
chart.chartTitleArea.bold = true;
chart.chartTitleArea.color = '5AF2EE';
chart.chartTitleArea.size = 14;
// Saves the presentation.
await pptxDoc.save('Output.pptx');
{% endhighlight %}
{% endtabs %}

## Set the chart title name

The following code snippet illustrates how to set the chart title name.

{% tabs %}
{% highlight js tabtitle="TypeScript" %}

// Sets the chart title name.
chart.chartTitle = 'Sales Analysis';

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
// Sets the chart title name.
chart.chartTitle = 'Sales Analysis';
{% endhighlight %}
{% endtabs %}

## Customize the chart title area

The following code snippet illustrates how to customize the chart title area.

{% tabs %}
{% highlight js tabtitle="TypeScript" %}

// Customizes the chart title area.
chart.chartTitleArea.fontName = 'Calibri';
chart.chartTitleArea.bold = true;
chart.chartTitleArea.color = '5AF2EE';
chart.chartTitleArea.size = 14;

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
// Customizes the chart title area.
chart.chartTitleArea.fontName = 'Calibri';
chart.chartTitleArea.bold = true;
chart.chartTitleArea.color = '5AF2EE';
chart.chartTitleArea.size = 14;
{% endhighlight %}
{% endtabs %}

## See Also

* [Working with Charts](../Working-with-Charts)
* [Chart Area](./Chart-Area)
* [Chart Legend](./Chart-Legend)
* [Chart Axis](./Chart-Axis)
