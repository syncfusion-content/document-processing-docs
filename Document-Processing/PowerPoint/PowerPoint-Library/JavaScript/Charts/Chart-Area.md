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

The chart area is the frame around the whole chart. The [JavaScript PowerPoint Library](https://www.syncfusion.com/document-sdk/javascript-powerpoint-library) exposes it as `chart.chartArea` on a chart created with `slide.shapes.addChart`. Format the border with `line` and the background with `fill`.

The following code example demonstrates how to format the chart area.

{% tabs %}
{% highlight js tabtitle="TypeScript" %}

import { Presentation, SlideLayoutType, OfficeChartType } from '@syncfusion/ej2-pptx';

let pptxDoc = Presentation.create();
let slide = pptxDoc.slides.add({ layout: SlideLayoutType.Blank });
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
await pptxDoc.save('Output.pptx');

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
var pptxDoc = ej.pptx.Presentation.create();
var slide = pptxDoc.slides.add({ layout: ej.pptx.SlideLayoutType.Blank });
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
await pptxDoc.save('Output.pptx');
{% endhighlight %}
{% endtabs %}
