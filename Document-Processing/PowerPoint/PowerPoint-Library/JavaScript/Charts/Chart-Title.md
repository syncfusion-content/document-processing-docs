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

A chart title describes the chart. The [JavaScript PowerPoint Library](https://www.syncfusion.com/document-sdk/javascript-powerpoint-library) exposes the title as properties on the chart created with `Slide.addChart`. There is no separate `setTitle` method.

* `chartTitle` or `applyChartTitle` sets the plain-text title and enables the title when the text is not empty.
* `hasTitle` or `applyHasTitle` shows or hides the title.
* `chartTitleArea` holds run formatting (`bold`, `italic`, `size`, `fontName`, `color`). Call `commitTitleArea` to write nested changes. Color is RRGGBB or `#RRGGBB` only.

The following code example demonstrates how to add and format a chart title while creating a presentation.

{% tabs %}
{% highlight js tabtitle="TypeScript" %}

import { Presentation, SlideLayoutType } from '@syncfusion/ej2-pptx';

let pptxDoc = Presentation.create();
let slide = pptxDoc.slides.add({ layout: SlideLayoutType.Blank });
let chart = slide.addChart({
    type: 'ColumnClustered',
    bounds: { x: 40, y: 30, width: 480, height: 320 }
});
chart.applyChartTitle('Quarterly sales');
chart.applyHasTitle(true);
chart.commitTitleArea({
    bold: true,
    size: 16,
    fontName: 'Calibri',
    color: '1F4E79'
});
await pptxDoc.save('Output.pptx');

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
var pptxDoc = ej.pptx.Presentation.create();
var slide = pptxDoc.slides.add({ layout: ej.pptx.SlideLayoutType.Blank });
var chart = slide.addChart({
    type: 'ColumnClustered',
    bounds: { x: 40, y: 30, width: 480, height: 320 }
});
chart.applyChartTitle('Quarterly sales');
chart.applyHasTitle(true);
chart.commitTitleArea({
    bold: true,
    size: 16,
    fontName: 'Calibri',
    color: '1F4E79'
});
await pptxDoc.save('Output.pptx');
{% endhighlight %}
{% endtabs %}

To clear the title text, call `applyChartTitle(undefined)`. Hide the title with `applyHasTitle(false)`.
