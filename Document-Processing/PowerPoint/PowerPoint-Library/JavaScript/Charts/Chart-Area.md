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

The chart area is the frame around the whole chart (`c:chartSpace` shape properties). The [JavaScript PowerPoint Library](https://www.syncfusion.com/document-sdk/javascript-powerpoint-library) exposes it as `chart.chartArea`, with a `fill` and a `line`.

Write fill and line changes with `commitChartArea`. Fill `foreColor` and line `color` are RRGGBB or `#RRGGBB`. `line.weightPt` is the border weight in points. Fill `type` is an engine value such as `solid`.

The following code example demonstrates how to format the chart area on a chart created in the same presentation.

{% tabs %}
{% highlight js tabtitle="TypeScript" %}

import { Presentation, SlideLayoutType } from '@syncfusion/ej2-pptx';

let pptxDoc = Presentation.create();
let slide = pptxDoc.slides.add({ layout: SlideLayoutType.Blank });
let chart = slide.addChart({
    type: 'ColumnClustered',
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
var chart = slide.addChart({
    type: 'ColumnClustered',
    bounds: { x: 36, y: 36, width: 500, height: 320 }
});
chart.commitChartArea({
    fill: { type: 'solid', foreColor: 'F2F2F2' },
    line: { color: '5B9BD5', weightPt: 1.5 }
});
await pptxDoc.save('Output.pptx');
{% endhighlight %}
{% endtabs %}
