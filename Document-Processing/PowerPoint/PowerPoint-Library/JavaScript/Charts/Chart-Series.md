---
layout: post
title: Chart Series in JavaScript PowerPoint | Syncfusion
description: Learn how to add, format, and remove chart series in a PowerPoint slide using the Syncfusion JavaScript PowerPoint Library.
platform: document-processing
control: PowerPoint
documentation: ug
keywords: javascript, powerpoint, chart series
---

# Chart Series in JavaScript PowerPoint

A chart series maps category labels and values from the embedded workbook. The [JavaScript PowerPoint Library](https://www.syncfusion.com/document-sdk/javascript-powerpoint-library) exposes series on the chart created with `Slide.addChart`.

* `chart.series` returns each series view (`title`, `categoryLabels`, `values`, and optional series format / `dataLabels`).
* `addSeries` adds a series. `values` is required.
* `removeSeries` removes a series by zero-based index.
* `commitSeriesFormat` writes series fill and line (series shape properties). Colors are RRGGBB or `#RRGGBB`.
* `setSeriesValueCells` and `setSeriesCategoryCells` write the embedded cells for that series.
* `isSeriesInRows` or `applyIsSeriesInRows` sets whether series are laid out in rows.

The following code example demonstrates how to format the default series and add another series while creating a presentation.

{% tabs %}
{% highlight js tabtitle="TypeScript" %}

import { Presentation, SlideLayoutType } from '@syncfusion/ej2-pptx';

let pptxDoc = Presentation.create();
let slide = pptxDoc.slides.add({ layout: SlideLayoutType.Blank });
let chart = slide.addChart({
    type: 'ColumnClustered',
    bounds: { x: 36, y: 36, width: 520, height: 320 }
});
chart.setSeriesCategoryCells(0, ['East', 'West', 'North']);
chart.setSeriesValueCells(0, [20, 35, 28]);
chart.commitSeriesFormat(0, {
    fill: { type: 'solid', foreColor: '5B9BD5' },
    line: { color: '2F5597', weightPt: 1 }
});
chart.addSeries({
    title: 'Prior year',
    categoryLabels: 'Sheet1!$A$2:$A$4',
    values: 'Sheet1!$C$2:$C$4'
});
chart.setSeriesValueCells(1, [18, 22, 25]);
chart.commitSeriesFormat(1, {
    fill: { type: 'solid', foreColor: 'ED7D31' }
});
await pptxDoc.save('Output.pptx');

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
var pptxDoc = ej.pptx.Presentation.create();
var slide = pptxDoc.slides.add({ layout: ej.pptx.SlideLayoutType.Blank });
var chart = slide.addChart({
    type: 'ColumnClustered',
    bounds: { x: 36, y: 36, width: 520, height: 320 }
});
chart.setSeriesCategoryCells(0, ['East', 'West', 'North']);
chart.setSeriesValueCells(0, [20, 35, 28]);
chart.commitSeriesFormat(0, {
    fill: { type: 'solid', foreColor: '5B9BD5' },
    line: { color: '2F5597', weightPt: 1 }
});
chart.addSeries({
    title: 'Prior year',
    categoryLabels: 'Sheet1!$A$2:$A$4',
    values: 'Sheet1!$C$2:$C$4'
});
chart.setSeriesValueCells(1, [18, 22, 25]);
chart.commitSeriesFormat(1, {
    fill: { type: 'solid', foreColor: 'ED7D31' }
});
await pptxDoc.save('Output.pptx');
{% endhighlight %}
{% endtabs %}

To drop the second series, call `chart.removeSeries(1)`.
