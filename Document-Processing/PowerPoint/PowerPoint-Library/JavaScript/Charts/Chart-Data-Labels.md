---
layout: post
title: Chart Data Labels in JavaScript PowerPoint | Syncfusion
description: Learn how to show and format chart data labels in a PowerPoint slide using the Syncfusion JavaScript PowerPoint Library.
platform: document-processing
control: PowerPoint
documentation: ug
keywords: javascript, powerpoint, chart data labels
---

# Chart Data Labels in JavaScript PowerPoint

Data labels display values on each point of a series. The [JavaScript PowerPoint Library](https://www.syncfusion.com/document-sdk/javascript-powerpoint-library) models data labels on the series, not as a separate chart-level bag. Use `commitSeriesDataLabels` on a chart — either a chart created with `Slide.addChart` or a chart in an opened presentation reached through `slide.charts.at(index)`.

* `isValue`, `isCategoryName`, `isSeriesName`, and `isPercentage` choose what the label shows.
* `position` is an engine position such as `center` or `outsideEnd`.
* `textArea` formats the label text. Color is RRGGBB or `#RRGGBB` only.

The following code example demonstrates how to show value labels on the first series while creating a presentation.

{% tabs %}
{% highlight js tabtitle="TypeScript" %}

import { Presentation, SlideLayoutType } from '@syncfusion/ej2-pptx';

let pptxDoc = Presentation.create();
let slide = pptxDoc.slides.add({ layout: SlideLayoutType.Blank });
let chart = slide.addChart({
    type: 'ColumnClustered',
    bounds: { x: 36, y: 36, width: 480, height: 300 }
});
chart.setSeriesValueCells(0, [12, 18, 9]);
chart.commitSeriesDataLabels(0, {
    isValue: true,
    isCategoryName: false,
    isSeriesName: false,
    position: 'outsideEnd',
    textArea: { size: 10, fontName: 'Calibri', color: '000000' }
});
await pptxDoc.save('Output.pptx');

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
var pptxDoc = ej.pptx.Presentation.create();
var slide = pptxDoc.slides.add({ layout: ej.pptx.SlideLayoutType.Blank });
var chart = slide.addChart({
    type: 'ColumnClustered',
    bounds: { x: 36, y: 36, width: 480, height: 300 }
});
chart.setSeriesValueCells(0, [12, 18, 9]);
chart.commitSeriesDataLabels(0, {
    isValue: true,
    isCategoryName: false,
    isSeriesName: false,
    position: 'outsideEnd',
    textArea: { size: 10, fontName: 'Calibri', color: '000000' }
});
await pptxDoc.save('Output.pptx');
{% endhighlight %}
{% endtabs %}

There is no public `applyDataLabels` method. Chart-level plot data labels are not a separate live object; set labels on each series index.

Data labels of a chart in an existing presentation can be turned on or off the same way after opening the file.

{% tabs %}
{% highlight js tabtitle="TypeScript" %}

import { Presentation, loadXlsxRoot } from '@syncfusion/ej2-pptx';

// data is a Uint8Array or Base64 string of an existing .pptx file with a chart on the first slide.
// Loads the chart engine before enumerating slide.charts.
await loadXlsxRoot();
// Opens an existing PowerPoint presentation.
let pptxDoc = await Presentation.open(data);
// Gets the first chart on the first slide.
let chart = pptxDoc.slides[0].charts.at(0);
// Shows value data labels on the first series.
chart.commitSeriesDataLabels(0, {
    isValue: true,
    position: 'outsideEnd',
    textArea: { size: 9, fontName: 'Calibri', color: '000000' }
});
// Saves the updated presentation.
await pptxDoc.save('Output.pptx');

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
// data is a Uint8Array or Base64 string of an existing .pptx file with a chart on the first slide.
// Loads the chart engine before enumerating slide.charts.
await ej.pptx.loadXlsxRoot();
// Opens an existing PowerPoint presentation.
var pptxDoc = await ej.pptx.Presentation.open(data);
// Gets the first chart on the first slide.
var chart = pptxDoc.slides[0].charts.at(0);
// Shows value data labels on the first series.
chart.commitSeriesDataLabels(0, {
    isValue: true,
    position: 'outsideEnd',
    textArea: { size: 9, fontName: 'Calibri', color: '000000' }
});
// Saves the updated presentation.
await pptxDoc.save('Output.pptx');
{% endhighlight %}
{% endtabs %}
