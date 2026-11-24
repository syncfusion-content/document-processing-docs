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

The plot area is the region inside the chart where the series are drawn. The [JavaScript PowerPoint Library](https://www.syncfusion.com/document-sdk/javascript-powerpoint-library) exposes it as `chart.plotArea` on a chart created with `slide.shapes.addChart`. Format the border with `line` and the background with `fill`.

The following code example demonstrates how to format the plot area.

{% tabs %}
{% highlight js tabtitle="TypeScript" %}

import { Presentation, SlideLayoutType, OfficeChartType } from '@syncfusion/ej2-pptx';

let pptxDoc = Presentation.create();
let slide = pptxDoc.slides.add({ layout: SlideLayoutType.Blank });
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
await pptxDoc.save('Output.pptx');

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
var pptxDoc = ej.pptx.Presentation.create();
var slide = pptxDoc.slides.add({ layout: ej.pptx.SlideLayoutType.Blank });
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
await pptxDoc.save('Output.pptx');
{% endhighlight %}
{% endtabs %}
