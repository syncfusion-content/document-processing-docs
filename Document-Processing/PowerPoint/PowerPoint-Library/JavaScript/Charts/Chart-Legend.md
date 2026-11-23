---
layout: post
title: Chart Legend in JavaScript PowerPoint | Syncfusion
description: Learn how to show and format a chart legend in a PowerPoint slide using the Syncfusion JavaScript PowerPoint Library.
platform: document-processing
control: PowerPoint
documentation: ug
keywords: javascript, powerpoint, chart legend
---

# Chart Legend in JavaScript PowerPoint

The legend identifies each series. The [JavaScript PowerPoint Library](https://www.syncfusion.com/document-sdk/javascript-powerpoint-library) exposes it on a chart — either a chart created with `slide.shapes.addChart` or a chart in an opened presentation reached through `slide.charts.at(index)`. There is no `setLegend` method.

* `hasLegend` or `applyHasLegend` shows or hides the legend.
* `legend.position` is `bottom`, `top`, `left`, `right`, or `corner`.
* `legend.textArea` formats legend text (`bold`, `italic`, `size`, `fontName`, `color`).
* `legend.frameFormat` sets the legend box fill and line.

Write position, text, and frame together with `commitLegend`. Colors are RRGGBB or `#RRGGBB` only.

The following code example demonstrates how to show and format a chart legend while creating a presentation.

{% tabs %}
{% highlight js tabtitle="TypeScript" %}

import { Presentation, SlideLayoutType, OfficeChartType } from '@syncfusion/ej2-pptx';

let pptxDoc = Presentation.create();
let slide = pptxDoc.slides.add({ layout: SlideLayoutType.Blank });
let chart = slide.shapes.addChart({
    type: OfficeChartType.Pie,
    bounds: { x: 40, y: 40, width: 420, height: 300 }
});
chart.applyHasLegend(true);
chart.commitLegend({
    position: 'bottom',
    textArea: { fontName: 'Calibri', size: 11, color: '404040' },
    frameFormat: {
        fill: { type: 'solid', foreColor: 'FFFFFF' },
        line: { color: 'BFBFBF', weightPt: 0.75 }
    }
});
await pptxDoc.save('Output.pptx');

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
var pptxDoc = ej.pptx.Presentation.create();
var slide = pptxDoc.slides.add({ layout: ej.pptx.SlideLayoutType.Blank });
var chart = slide.shapes.addChart({
    type: ej.pptx.OfficeChartType.Pie,
    bounds: { x: 40, y: 40, width: 420, height: 300 }
});
chart.applyHasLegend(true);
chart.commitLegend({
    position: 'bottom',
    textArea: { fontName: 'Calibri', size: 11, color: '404040' },
    frameFormat: {
        fill: { type: 'solid', foreColor: 'FFFFFF' },
        line: { color: 'BFBFBF', weightPt: 0.75 }
    }
});
await pptxDoc.save('Output.pptx');
{% endhighlight %}
{% endtabs %}

Hide the legend with `chart.applyHasLegend(false)`.

The legend of a chart in an existing presentation can be shown, hidden, or formatted the same way after opening the file.

{% tabs %}
{% highlight js tabtitle="TypeScript" %}

import { Presentation } from '@syncfusion/ej2-pptx';

// data is a Uint8Array or Base64 string of an existing .pptx file with a chart on the first slide.
// Opens an existing PowerPoint presentation.
let pptxDoc = await Presentation.open(data);
// Gets the first chart on the first slide.
let chart = pptxDoc.slides[0].charts.at(0);
// Moves the legend to the right and formats it.
chart.applyHasLegend(true);
chart.commitLegend({
    position: 'right',
    textArea: { fontName: 'Calibri', size: 10, color: '333333' },
    frameFormat: {
        fill: { type: 'solid', foreColor: 'FFFFFF' }
    }
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
// Moves the legend to the right and formats it.
chart.applyHasLegend(true);
chart.commitLegend({
    position: 'right',
    textArea: { fontName: 'Calibri', size: 10, color: '333333' },
    frameFormat: {
        fill: { type: 'solid', foreColor: 'FFFFFF' }
    }
});
// Saves the updated presentation.
await pptxDoc.save('Output.pptx');
{% endhighlight %}
{% endtabs %}
