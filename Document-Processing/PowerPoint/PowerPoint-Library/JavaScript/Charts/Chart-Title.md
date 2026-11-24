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

A chart title describes the chart. The [JavaScript PowerPoint Library](https://www.syncfusion.com/document-sdk/javascript-powerpoint-library) exposes the title as properties on a chart created with `slide.shapes.addChart`. Set the title text with `chartTitle`, then format the title area with `chartTitleArea`.

The following code example demonstrates how to set and format a chart title.

{% tabs %}
{% highlight js tabtitle="TypeScript" %}

import { Presentation, SlideLayoutType, OfficeChartType } from '@syncfusion/ej2-pptx';

let pptxDoc = Presentation.create();
let slide = pptxDoc.slides.add({ layout: SlideLayoutType.Blank });
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
await pptxDoc.save('Output.pptx');

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
var pptxDoc = ej.pptx.Presentation.create();
var slide = pptxDoc.slides.add({ layout: ej.pptx.SlideLayoutType.Blank });
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
await pptxDoc.save('Output.pptx');
{% endhighlight %}
{% endtabs %}
