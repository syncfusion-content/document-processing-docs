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

The legend identifies each series. The [JavaScript PowerPoint Library](https://www.syncfusion.com/document-sdk/javascript-powerpoint-library) exposes it on the chart created with `Slide.addChart`. There is no `setLegend` method.

* `hasLegend` or `applyHasLegend` shows or hides the legend.
* `legend.position` is `bottom`, `top`, `left`, `right`, or `corner`.
* `legend.textArea` formats legend text (`bold`, `italic`, `size`, `fontName`, `color`).
* `legend.frameFormat` sets the legend box fill and line.

Write position, text, and frame together with `commitLegend`. Colors are RRGGBB or `#RRGGBB` only.

The following code example demonstrates how to show and format a chart legend while creating a presentation.

{% tabs %}
{% highlight js tabtitle="TypeScript" %}

import { Presentation, SlideLayoutType } from '@syncfusion/ej2-pptx';

let pptxDoc = Presentation.create();
let slide = pptxDoc.slides.add({ layout: SlideLayoutType.Blank });
let chart = slide.addChart({
    type: 'Pie',
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
var chart = slide.addChart({
    type: 'Pie',
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
