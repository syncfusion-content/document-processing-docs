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

A chart title describes the chart. The [JavaScript PowerPoint Library](https://www.syncfusion.com/document-sdk/javascript-powerpoint-library) exposes the title as properties on a chart — either a chart created with `slide.shapes.addChart` or a chart in an opened presentation reached through `slide.charts.at(index)`. There is no separate `setTitle` method.

* `chartTitle` or `applyChartTitle` sets the plain-text title and enables the title when the text is not empty.
* `hasTitle` or `applyHasTitle` shows or hides the title.
* `chartTitleArea` holds run formatting (`bold`, `italic`, `size`, `fontName`, `color`). Call `commitTitleArea` to write nested changes. Color is RRGGBB or `#RRGGBB` only.

The following code example demonstrates how to add and format a chart title while creating a presentation.

{% tabs %}
{% highlight js tabtitle="TypeScript" %}

import { Presentation, SlideLayoutType, OfficeChartType } from '@syncfusion/ej2-pptx';

let pptxDoc = Presentation.create();
let slide = pptxDoc.slides.add({ layout: SlideLayoutType.Blank });
let chart = slide.shapes.addChart({
    type: OfficeChartType.ColumnClustered,
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
var chart = slide.shapes.addChart({
    type: ej.pptx.OfficeChartType.ColumnClustered,
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

The same API edits the title of a chart in an existing presentation. Open the file with `Presentation.open`, reach the chart through `slide.charts.at(index)`, and save the updated presentation.

{% tabs %}
{% highlight js tabtitle="TypeScript" %}

import { Presentation } from '@syncfusion/ej2-pptx';

// data is a Uint8Array or Base64 string of an existing .pptx file with a chart on the first slide.
// Opens an existing PowerPoint presentation.
let pptxDoc = await Presentation.open(data);
// Gets the first chart on the first slide.
let chart = pptxDoc.slides[0].charts.at(0);
// Replaces the title text.
chart.applyChartTitle('Updated chart title');
// Formats the title text.
chart.commitTitleArea({
    bold: true,
    size: 16,
    fontName: 'Calibri',
    color: '1F4E79'
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
// Replaces the title text.
chart.applyChartTitle('Updated chart title');
// Formats the title text.
chart.commitTitleArea({
    bold: true,
    size: 16,
    fontName: 'Calibri',
    color: '1F4E79'
});
// Saves the updated presentation.
await pptxDoc.save('Output.pptx');
{% endhighlight %}
{% endtabs %}
