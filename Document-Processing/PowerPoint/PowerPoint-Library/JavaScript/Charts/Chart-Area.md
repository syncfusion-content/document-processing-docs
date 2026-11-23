---
layout: post
title: Chart Area in JavaScript PowerPoint | Syncfusion
description: Learn how to format the chart area in a PowerPoint slide using the Syncfusion JavaScript PowerPoint Library.
platform: document-processing
control: PowerPoint
documentation: ug
keywords: javascript, powerpoint, chart area
---

# Chart Area in JavaScript PowerPoint

The chart area is the frame around the whole chart (`c:chartSpace` shape properties). The [JavaScript PowerPoint Library](https://www.syncfusion.com/document-sdk/javascript-powerpoint-library) exposes it as `chart.chartArea` — on a chart created with `slide.shapes.addChart` or on a chart in an opened presentation reached through `slide.charts.at(index)` — with a `fill` and a `line`.

Write fill and line changes with `commitChartArea`. Fill `foreColor` and line `color` are RRGGBB or `#RRGGBB`. `line.weightPt` is the border weight in points. Fill `type` is an engine value such as `solid`.

The following code example demonstrates how to format the chart area on a chart created in the same presentation.

{% tabs %}
{% highlight js tabtitle="TypeScript" %}

import { Presentation, SlideLayoutType, OfficeChartType } from '@syncfusion/ej2-pptx';

let pptxDoc = Presentation.create();
let slide = pptxDoc.slides.add({ layout: SlideLayoutType.Blank });
let chart = slide.shapes.addChart({
    type: OfficeChartType.ColumnClustered,
    bounds: { x: 36, y: 36, width: 500, height: 320 }
});
chart.commitChartArea({
    fill: { type: 'solid', foreColor: 'F2F2F2' },
    line: { color: '5B9BD5', weightPt: 1.5 }
});
await pptxDoc.save('Output.pptx');

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
var pptxDoc = ej.pptx.Presentation.create();
var slide = pptxDoc.slides.add({ layout: ej.pptx.SlideLayoutType.Blank });
var chart = slide.shapes.addChart({
    type: ej.pptx.OfficeChartType.ColumnClustered,
    bounds: { x: 36, y: 36, width: 500, height: 320 }
});
chart.commitChartArea({
    fill: { type: 'solid', foreColor: 'F2F2F2' },
    line: { color: '5B9BD5', weightPt: 1.5 }
});
await pptxDoc.save('Output.pptx');
{% endhighlight %}
{% endtabs %}

The chart area of a chart in an existing presentation can be formatted the same way after opening the file.

{% tabs %}
{% highlight js tabtitle="TypeScript" %}

import { Presentation } from '@syncfusion/ej2-pptx';

// data is a Uint8Array or Base64 string of an existing .pptx file with a chart on the first slide.
// Opens an existing PowerPoint presentation.
let pptxDoc = await Presentation.open(data);
// Gets the first chart on the first slide.
let chart = pptxDoc.slides[0].charts.at(0);
// Formats the chart area fill and border.
chart.commitChartArea({
    fill: { type: 'solid', foreColor: 'FFFFFF' },
    line: { color: 'D9D9D9', weightPt: 1 }
});
// Saves the updated presentation.
await pptxDoc.save('Output.pptx');

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
// data is a Uint8Array or Base64 string of an existing .pptx file with a chart on the first slide.
// Opens an existing PowerPoint presentation.
var pptxDoc = await ej.pptx.Presentation.open(data);
// Gets the first chart on the first slide.
var chart = pptxDoc.slides[0].charts.at(0);
// Formats the chart area fill and border.
chart.commitChartArea({
    fill: { type: 'solid', foreColor: 'FFFFFF' },
    line: { color: 'D9D9D9', weightPt: 1 }
});
// Saves the updated presentation.
await pptxDoc.save('Output.pptx');
{% endhighlight %}
{% endtabs %}
