---
layout: post
title: Working with Charts in JavaScript PowerPoint | Syncfusion
description: Learn how to create, edit, and remove charts in a PowerPoint slide using the Syncfusion JavaScript PowerPoint Library.
platform: document-processing
control: PowerPoint
documentation: ug
keywords: javascript, powerpoint, chart
---

# Working with Charts in JavaScript PowerPoint

A chart in a PowerPoint presentation is used to visualize numeric data. The [JavaScript PowerPoint Library](https://www.syncfusion.com/document-sdk/javascript-powerpoint-library) supports creating classic DrawingML charts on a slide, editing the embedded chart data and formatting, and removing a chart from the slide.

Each chart is stored as a graphic frame on the slide and an embedded workbook that holds the category and value cells. ChartEx types (box and whisker, funnel, Pareto, sunburst, treemap, and waterfall) are not supported.

N> The following examples create a presentation with `Presentation.create()` and save it with `save`. They do not open an existing file.

## Creating a chart from scratch

Use [`Slide.addChart`](https://help.syncfusion.com/cr/javascript/ej.pptx.Slide.html) to insert a classic chart. When `from` is omitted, the library seeds a demo workbook (`Category` / `Value` headers and three rows: A/1, B/2, C/3) and binds the series to `A2:A4` and `B2:B4`.

`type` is a classic catalog key such as `ColumnClustered`, `BarClustered`, `Line`, `LineMarkers`, `Pie`, `Doughnut`, `Area`, `ScatterMarkers`, or `Bubble`. Pass `bounds` in points and an optional frame `name`.

The following code example demonstrates how to create a clustered column chart from scratch.

{% tabs %}
{% highlight js tabtitle="TypeScript" %}

import { Presentation, SlideLayoutType } from '@syncfusion/ej2-pptx';

// Creates a PowerPoint presentation.
let pptxDoc = Presentation.create();
// Adds a blank slide to the presentation.
let slide = pptxDoc.slides.add({ layout: SlideLayoutType.Blank });
// Adds a clustered column chart. Bounds are in points.
let chart = slide.addChart({
    type: 'ColumnClustered',
    name: 'Sales',
    bounds: { x: 50, y: 40, width: 480, height: 300 }
});
// Optional: replace the seeded category labels and values (Sheet1!A2:A4 / B2:B4).
chart.setSeriesCategoryCells(0, ['Q1', 'Q2', 'Q3']);
chart.setSeriesValueCells(0, [12, 18, 9]);
// Saves the presentation.
await pptxDoc.save('Output.pptx');

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
// Creates a PowerPoint presentation.
var pptxDoc = ej.pptx.Presentation.create();
// Adds a blank slide to the presentation.
var slide = pptxDoc.slides.add({ layout: ej.pptx.SlideLayoutType.Blank });
// Adds a clustered column chart. Bounds are in points.
var chart = slide.addChart({
    type: 'ColumnClustered',
    name: 'Sales',
    bounds: { x: 50, y: 40, width: 480, height: 300 }
});
// Optional: replace the seeded category labels and values (Sheet1!A2:A4 / B2:B4).
chart.setSeriesCategoryCells(0, ['Q1', 'Q2', 'Q3']);
chart.setSeriesValueCells(0, [12, 18, 9]);
// Saves the presentation.
await pptxDoc.save('Output.pptx');
{% endhighlight %}
{% endtabs %}

Supported classic type keys include column, bar, line, pie, doughnut, scatter, bubble, area, and their stacked, exploded, and 3D variants (`Column3D`, `Pie3D`, `Area3D`, `Surface3D`, and so on). Deprecated aliases `Column`, `Bar`, and `Scatter` are also accepted.

## Creating charts from an Excel sheet

Pass `from` to copy category and value cells from a workbook into a new minimal embedded sheet. Provide either `bytes` (a `Uint8Array` of an `.xlsx` file) or a host `workbook`, plus an optional sheet name or zero-based index and an A1 `range`.

The range must be a single two-column area (categories in the left column, values in the right). The default range is `A2:B4`. Formulas are not calculated; cell values at add time are copied. The embedded workbook is not a full copy of the source package.

The following code example demonstrates how to create a pie chart from Excel bytes.

{% tabs %}
{% highlight js tabtitle="TypeScript" %}

import { Presentation, SlideLayoutType } from '@syncfusion/ej2-pptx';

// excelBytes is a Uint8Array of an .xlsx file whose first sheet has categories in column A and values in column B.
let pptxDoc = Presentation.create();
let slide = pptxDoc.slides.add({ layout: SlideLayoutType.Blank });
let chart = slide.addChart({
    type: 'Pie',
    name: 'Share',
    bounds: { x: 40, y: 40, width: 420, height: 280 },
    from: {
        bytes: excelBytes,
        sheet: 0,
        range: 'A2:B5'
    }
});
await pptxDoc.save('Output.pptx');

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
// excelBytes is a Uint8Array of an .xlsx file whose first sheet has categories in column A and values in column B.
var pptxDoc = ej.pptx.Presentation.create();
var slide = pptxDoc.slides.add({ layout: ej.pptx.SlideLayoutType.Blank });
var chart = slide.addChart({
    type: 'Pie',
    name: 'Share',
    bounds: { x: 40, y: 40, width: 420, height: 280 },
    from: {
        bytes: excelBytes,
        sheet: 0,
        range: 'A2:B5'
    }
});
await pptxDoc.save('Output.pptx');
{% endhighlight %}
{% endtabs %}

## Editing the chart data

After a chart is created, edit its embedded cells and series formulas on the same `Chart` instance. `setSeriesValueCells` and `setSeriesCategoryCells` write values along the series formulas. `dataRange` and `applyDataRange` set the category/value range. `addSeries` requires a `values` formula. `removeSeries` deletes a series by index.

`refresh` rebuilds the chart part from the current embedded cells and series formulas. It does not run a full Excel calculation, evaluate trendlines, or fetch an external workbook.

The following code example demonstrates how to edit chart data on a chart created in the same presentation.

{% tabs %}
{% highlight js tabtitle="TypeScript" %}

import { Presentation, SlideLayoutType } from '@syncfusion/ej2-pptx';

let pptxDoc = Presentation.create();
let slide = pptxDoc.slides.add({ layout: SlideLayoutType.Blank });
let chart = slide.addChart({
    type: 'LineMarkers',
    bounds: { x: 36, y: 36, width: 500, height: 300 }
});
// Update the seeded series (categories A2:A4, values B2:B4).
chart.setSeriesCategoryCells(0, ['Jan', 'Feb', 'Mar']);
chart.setSeriesValueCells(0, [10, 14, 11]);
chart.applyDataRange('A2:B4');
// Adds a second series. Formulas must match cells in the embedded sheet.
chart.addSeries({
    title: 'Series 2',
    categoryLabels: 'Sheet1!$A$2:$A$4',
    values: 'Sheet1!$C$2:$C$4'
});
chart.setSeriesValueCells(1, [6, 9, 8]);
chart.refresh();
await pptxDoc.save('Output.pptx');

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
var pptxDoc = ej.pptx.Presentation.create();
var slide = pptxDoc.slides.add({ layout: ej.pptx.SlideLayoutType.Blank });
var chart = slide.addChart({
    type: 'LineMarkers',
    bounds: { x: 36, y: 36, width: 500, height: 300 }
});
// Update the seeded series (categories A2:A4, values B2:B4).
chart.setSeriesCategoryCells(0, ['Jan', 'Feb', 'Mar']);
chart.setSeriesValueCells(0, [10, 14, 11]);
chart.applyDataRange('A2:B4');
// Adds a second series. Formulas must match cells in the embedded sheet.
chart.addSeries({
    title: 'Series 2',
    categoryLabels: 'Sheet1!$A$2:$A$4',
    values: 'Sheet1!$C$2:$C$4'
});
chart.setSeriesValueCells(1, [6, 9, 8]);
chart.refresh();
await pptxDoc.save('Output.pptx');
{% endhighlight %}
{% endtabs %}

You can also replace formulas with `replaceSeriesFormulas` and read the current value cells with `readSeriesValueCells`. Charts that have only an external data source and no embedded package cannot be edited.

## Customizing the chart

Formatting is applied on the chart returned by `addChart`. Colors are RRGGBB or `#RRGGBB` only. Nested format changes are written with the matching `commit*` method (`commitTitleArea`, `commitChartArea`, `commitPlotArea`, `commitSeriesFormat`, `commitSeriesDataLabels`, `commitLegend`, `commitPrimaryCategoryAxis`, and `commitPrimaryValueAxis`).

See the following topics for each area:

* [Chart title](Charts/Chart-Title.md)
* [Chart area](Charts/Chart-Area.md)
* [Chart plot area](Charts/Chart-Plot-Area.md)
* [Chart series](Charts/Chart-Series.md)
* [Chart legend](Charts/Chart-Legend.md)
* [Chart data labels](Charts/Chart-Data-Labels.md)
* [Chart axis](Charts/Chart-Axis.md)

Gradient fills on an existing chart source can be set with `setSourceGradientFill`. Theme or scheme colors are not written through the solid-color format bags.

## Removing the chart from a slide

Remove a chart by its instance with [`Slide.removeChart`](https://help.syncfusion.com/cr/javascript/ej.pptx.Slide.html). Unshared chart parts are removed from the package. Charts on the current slide can also be reached with `slide.charts.at(index)` after the chart is created in the same presentation.

The following code example demonstrates how to remove a chart from a slide.

{% tabs %}
{% highlight js tabtitle="TypeScript" %}

import { Presentation, SlideLayoutType } from '@syncfusion/ej2-pptx';

let pptxDoc = Presentation.create();
let slide = pptxDoc.slides.add({ layout: SlideLayoutType.Blank });
let chart = slide.addChart({
    type: 'BarClustered',
    bounds: { x: 40, y: 40, width: 400, height: 260 }
});
// Removes the chart frame and unshared chart parts.
slide.removeChart(chart);
await pptxDoc.save('Output.pptx');

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
var pptxDoc = ej.pptx.Presentation.create();
var slide = pptxDoc.slides.add({ layout: ej.pptx.SlideLayoutType.Blank });
var chart = slide.addChart({
    type: 'BarClustered',
    bounds: { x: 40, y: 40, width: 400, height: 260 }
});
// Removes the chart frame and unshared chart parts.
slide.removeChart(chart);
await pptxDoc.save('Output.pptx');
{% endhighlight %}
{% endtabs %}
