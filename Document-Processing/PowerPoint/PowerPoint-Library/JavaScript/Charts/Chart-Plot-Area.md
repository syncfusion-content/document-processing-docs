---
layout: post
title: Chart Plot Area in JavaScript PowerPoint | Syncfusion
description: Learn how to format the chart plot area in a PowerPoint slide using the Syncfusion JavaScript PowerPoint Library.
platform: document-processing
control: PowerPoint
documentation: ug
keywords: javascript, powerpoint, chart plot area
---

# Chart Plot Area in JavaScript PowerPoint

The plot area is the region that contains the chart series (`c:plotArea` shape properties). The [JavaScript PowerPoint Library](https://www.syncfusion.com/document-sdk/javascript-powerpoint-library) exposes it as `chart.plotArea`, with the same fill and line bags as the chart area.

Write changes with `commitPlotArea`. Colors are RRGGBB or `#RRGGBB` only.

The following code example demonstrates how to format the plot area on a chart created in the same presentation.

{% tabs %}
{% highlight js tabtitle="TypeScript" %}

import { Presentation, SlideLayoutType } from '@syncfusion/ej2-pptx';

let pptxDoc = Presentation.create();
let slide = pptxDoc.slides.add({ layout: SlideLayoutType.Blank });
let chart = slide.shapes.addChart({
    type: 'Area',
    bounds: { x: 36, y: 36, width: 500, height: 320 }
});
chart.commitPlotArea({
    fill: { type: 'solid', foreColor: 'FFFFFF' },
    line: { color: '7F7F7F', weightPt: 0.75 }
});
await pptxDoc.save('Output.pptx');

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
var pptxDoc = ej.pptx.Presentation.create();
var slide = pptxDoc.slides.add({ layout: ej.pptx.SlideLayoutType.Blank });
var chart = slide.shapes.addChart({
    type: 'Area',
    bounds: { x: 36, y: 36, width: 500, height: 320 }
});
chart.commitPlotArea({
    fill: { type: 'solid', foreColor: 'FFFFFF' },
    line: { color: '7F7F7F', weightPt: 0.75 }
});
await pptxDoc.save('Output.pptx');
{% endhighlight %}
{% endtabs %}

The plot area of a chart in an existing presentation can be formatted the same way after opening the file.

{% tabs %}
{% highlight js tabtitle="TypeScript" %}

import { Presentation } from '@syncfusion/ej2-pptx';

// data is a Uint8Array or Base64 string of an existing .pptx file with a chart on the first slide.
// Opens an existing PowerPoint presentation.
let pptxDoc = await Presentation.open(data);
// Gets the first chart on the first slide.
let chart = pptxDoc.slides[0].charts.at(0);
// Formats the plot area fill and border.
chart.commitPlotArea({
    fill: { type: 'solid', foreColor: 'F8F8F8' },
    line: { color: 'BFBFBF', weightPt: 0.75 }
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
// Formats the plot area fill and border.
chart.commitPlotArea({
    fill: { type: 'solid', foreColor: 'F8F8F8' },
    line: { color: 'BFBFBF', weightPt: 0.75 }
});
// Saves the updated presentation.
await pptxDoc.save('Output.pptx');
{% endhighlight %}
{% endtabs %}
