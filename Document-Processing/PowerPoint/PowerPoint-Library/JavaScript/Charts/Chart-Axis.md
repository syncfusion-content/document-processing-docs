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

Classic charts expose a primary category axis and a primary value axis. The [JavaScript PowerPoint Library](https://www.syncfusion.com/document-sdk/javascript-powerpoint-library) surfaces them on a chart — either a chart created with `Slide.addChart` or a chart in an opened presentation reached through `slide.charts.at(index)`. There is no `setAxis` method.

* `primaryCategoryAxis` maps to the category axis.
* `primaryValueAxis` maps to the value axis.
* Write changes with `commitPrimaryCategoryAxis` and `commitPrimaryValueAxis`.

Supported fields are `title`, `visible`, `hasMajorGridLines`, `hasMinorGridLines`, `numberFormat`, `minimumValue`, `maximumValue`, `majorTickMark`, `minorTickMark`, `line`, and `titleArea`. Tick marks are `none`, `inside`, `outside`, or `cross`. Leave `minimumValue` or `maximumValue` unset for automatic scale. Line and title colors are RRGGBB or `#RRGGBB`.

Secondary, date, and series axes are not supported.

N> Axis edits are dual-written to the chart part and its embedded workbook. A chart whose data source is external-only (an external object relationship and no embedded package, such as a chart linked to a local `.xlsx` path) cannot be edited. `commitPrimaryCategoryAxis` and `commitPrimaryValueAxis` throw `ChartsError: Chart data edit refused: no embedded package relationship on chart part` for that chart. Open a presentation whose chart has an embedded workbook, or create the chart with `Slide.addChart`.

N> `titleArea` is a partial update. You can set `bold`, `italic`, `size`, `fontName`, and `color` independently. If the TypeScript build reports that `italic` is required, the installed `@syncfusion/ej2-pptx` typings type the bag as the full `ChartTitleAreaFormat`. Pass the missing fields as well, for example `italic: false`. Colors are RRGGBB or `#RRGGBB` only. Theme or scheme colors are not written.

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

The axes of a chart in an existing presentation can be formatted the same way after opening the file. The following code example demonstrates how to open an existing presentation, set axis titles, fix the value-axis scale, and save the updated file.

{% tabs %}
{% highlight js tabtitle="TypeScript" %}

import { Presentation } from '@syncfusion/ej2-pptx';

// data is a Uint8Array or Base64 string of an existing .pptx file with a chart on the first slide.
// Opens an existing PowerPoint presentation.
let pptxDoc = await Presentation.open(data);
// Gets the first chart on the first slide.
let chart = pptxDoc.slides[0].charts.at(0);
// Formats the category axis.
chart.commitPrimaryCategoryAxis({
    title: 'Quarter',
    visible: true,
    hasMajorGridLines: true,
    majorTickMark: 'outside',
    titleArea: { bold: true, size: 11, fontName: 'Calibri', color: '404040' }
});
// Formats the value axis with a fixed scale.
chart.commitPrimaryValueAxis({
    title: 'Sales',
    visible: true,
    hasMajorGridLines: true,
    minimumValue: 0,
    maximumValue: 400,
    numberFormat: '#,##0',
    line: { color: '7F7F7F', weightPt: 0.75 },
    titleArea: { size: 11, fontName: 'Calibri', color: '404040' }
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
// Formats the category axis.
chart.commitPrimaryCategoryAxis({
    title: 'Quarter',
    visible: true,
    hasMajorGridLines: true,
    majorTickMark: 'outside',
    titleArea: { bold: true, size: 11, fontName: 'Calibri', color: '404040' }
});
// Formats the value axis with a fixed scale.
chart.commitPrimaryValueAxis({
    title: 'Sales',
    visible: true,
    hasMajorGridLines: true,
    minimumValue: 0,
    maximumValue: 400,
    numberFormat: '#,##0',
    line: { color: '7F7F7F', weightPt: 0.75 },
    titleArea: { size: 11, fontName: 'Calibri', color: '404040' }
});
// Saves the updated presentation.
await pptxDoc.save('Output.pptx');
{% endhighlight %}
{% endtabs %}
