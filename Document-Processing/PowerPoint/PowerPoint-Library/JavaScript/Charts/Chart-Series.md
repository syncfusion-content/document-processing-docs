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

A chart series maps category labels and values from the embedded workbook. The [JavaScript PowerPoint Library](https://www.syncfusion.com/document-sdk/javascript-powerpoint-library) exposes series on a chart — either a chart created with `Slide.addChart` or a chart in an opened presentation reached through `slide.charts.at(index)`.

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

Series in an existing presentation can be edited the same way after opening the file. The following code example demonstrates how to open an existing presentation, update the values of the first series, add a new series, and save the updated file.

{% tabs %}
{% highlight js tabtitle="TypeScript" %}

import { Presentation } from '@syncfusion/ej2-pptx';

// data is a Uint8Array or Base64 string of an existing .pptx file with a chart on the first slide.
// Opens an existing PowerPoint presentation.
let pptxDoc = await Presentation.open(data);
// Gets the first chart on the first slide.
let chart = pptxDoc.slides[0].charts.at(0);
// Updates the embedded cells of the first series.
chart.setSeriesValueCells(0, [42, 55, 36]);
// Formats the first series fill.
chart.commitSeriesFormat(0, {
    fill: { type: 'solid', foreColor: '4472C4' },
    line: { color: '2F528F', weightPt: 1.25 }
});
// Adds a series. Formulas must match cells in the embedded sheet.
chart.addSeries({
    title: 'Series 2',
    categoryLabels: 'Sheet1!$A$2:$A$4',
    values: 'Sheet1!$C$2:$C$4'
});
chart.setSeriesValueCells(1, [25, 30, 21]);
// Saves the updated presentation.
await pptxDoc.save('Output.pptx');

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
// data is a Uint8Array or Base64 string of an existing .pptx file with a chart on the first slide.
// Opens an existing PowerPoint presentation.
var pptxDoc = await ej.pptx.Presentation.open(data);
// Gets the first chart on the first slide.
var chart = pptxDoc.slides[0].charts.at(0);
// Updates the embedded cells of the first series.
chart.setSeriesValueCells(0, [42, 55, 36]);
// Formats the first series fill.
chart.commitSeriesFormat(0, {
    fill: { type: 'solid', foreColor: '4472C4' },
    line: { color: '2F528F', weightPt: 1.25 }
});
// Adds a series. Formulas must match cells in the embedded sheet.
chart.addSeries({
    title: 'Series 2',
    categoryLabels: 'Sheet1!$A$2:$A$4',
    values: 'Sheet1!$C$2:$C$4'
});
chart.setSeriesValueCells(1, [25, 30, 21]);
// Saves the updated presentation.
await pptxDoc.save('Output.pptx');
{% endhighlight %}
{% endtabs %}

N> Charts that have only an external data source and no embedded package cannot be edited. Check `chart.hasEmbeddedPackage` before calling series mutators.
