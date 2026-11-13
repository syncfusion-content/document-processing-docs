---
layout: post
title: Chart Axis in JavaScript PowerPoint | Syncfusion
description: Learn how to format the primary chart axes in a PowerPoint slide using the Syncfusion JavaScript PowerPoint Library.
platform: document-processing
control: PowerPoint
documentation: ug
keywords: javascript, powerpoint, chart axis
---

# Chart Axis in JavaScript PowerPoint

Classic charts expose a primary category axis and a primary value axis. The [JavaScript PowerPoint Library](https://www.syncfusion.com/document-sdk/javascript-powerpoint-library) surfaces them on the chart created with `Slide.addChart`. There is no `setAxis` method.

* `primaryCategoryAxis` maps to the category axis.
* `primaryValueAxis` maps to the value axis.
* Write changes with `commitPrimaryCategoryAxis` and `commitPrimaryValueAxis`.

Supported fields are `title`, `visible`, `hasMajorGridLines`, `hasMinorGridLines`, `numberFormat`, `minimumValue`, `maximumValue`, `majorTickMark`, `minorTickMark`, `line`, and `titleArea`. Tick marks are `none`, `inside`, `outside`, or `cross`. Leave `minimumValue` or `maximumValue` unset for automatic scale. Line and title colors are RRGGBB or `#RRGGBB`.

Secondary, date, and series axes are not supported.

The following code example demonstrates how to format the primary axes while creating a presentation.

{% tabs %}
{% highlight js tabtitle="TypeScript" %}

import { Presentation, SlideLayoutType } from '@syncfusion/ej2-pptx';

let pptxDoc = Presentation.create();
let slide = pptxDoc.slides.add({ layout: SlideLayoutType.Blank });
let chart = slide.addChart({
    type: 'ColumnClustered',
    bounds: { x: 36, y: 36, width: 520, height: 320 }
});
chart.setSeriesValueCells(0, [12, 18, 9]);
chart.commitPrimaryCategoryAxis({
    title: 'Quarter',
    visible: true,
    hasMajorGridLines: false,
    majorTickMark: 'outside',
    titleArea: { bold: true, size: 11, fontName: 'Calibri', color: '404040' }
});
chart.commitPrimaryValueAxis({
    title: 'Units',
    visible: true,
    hasMajorGridLines: true,
    hasMinorGridLines: false,
    minimumValue: 0,
    maximumValue: 24,
    numberFormat: '#,##0',
    majorTickMark: 'outside',
    line: { color: '7F7F7F', weightPt: 0.75 },
    titleArea: { size: 11, fontName: 'Calibri', color: '404040' }
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
chart.setSeriesValueCells(0, [12, 18, 9]);
chart.commitPrimaryCategoryAxis({
    title: 'Quarter',
    visible: true,
    hasMajorGridLines: false,
    majorTickMark: 'outside',
    titleArea: { bold: true, size: 11, fontName: 'Calibri', color: '404040' }
});
chart.commitPrimaryValueAxis({
    title: 'Units',
    visible: true,
    hasMajorGridLines: true,
    hasMinorGridLines: false,
    minimumValue: 0,
    maximumValue: 24,
    numberFormat: '#,##0',
    majorTickMark: 'outside',
    line: { color: '7F7F7F', weightPt: 0.75 },
    titleArea: { size: 11, fontName: 'Calibri', color: '404040' }
});
await pptxDoc.save('Output.pptx');
{% endhighlight %}
{% endtabs %}
