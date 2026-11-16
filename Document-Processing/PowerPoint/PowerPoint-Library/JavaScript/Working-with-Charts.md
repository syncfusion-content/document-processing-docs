---
layout: post
title: Working with Charts in JavaScript PowerPoint | Syncfusion
description: Learn how to create, edit, refresh, customize, and remove charts in a PowerPoint slide using the Syncfusion JavaScript PowerPoint Library.
platform: document-processing
control: PowerPoint
documentation: ug
keywords: javascript, powerpoint, chart
---

# Working with Charts in JavaScript PowerPoint

A chart in a PowerPoint presentation is used to visualize numeric data. The [JavaScript PowerPoint Library](https://www.syncfusion.com/document-sdk/javascript-powerpoint-library) supports creating classic DrawingML charts on a slide, editing the embedded chart data and formatting of charts in an existing presentation, refreshing chart data, and removing a chart from the slide.

Each chart is stored as a graphic frame on the slide and an embedded workbook that holds the category and value cells. ChartEx types (box and whisker, funnel, Pareto, sunburst, treemap, and waterfall) are not supported.

N> Refer to the appropriate tabs in the code snippet section: **TypeScript** for TypeScript applications and **JavaScript** for JavaScript applications.

## Prerequisites

Before you begin, make sure the following npm packages are installed in your application.

```sh
npm install @syncfusion/ej2-pptx @syncfusion/ej2-xlsx
```

The chart engine of the JavaScript PowerPoint library is built on the `@syncfusion/ej2-xlsx` package. Charts authored with `Slide.addChart` and charts enumerated through `slide.charts` require this package to be resolvable at runtime. The library loads the chart engine itself, so no separate chart-engine initialization call is needed before creating, reading, or editing charts.

For more information on package setup for each platform, refer to [Getting Started](./Getting-Started).

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

Supported classic type keys include column, bar, line, pie, doughnut, scatter, bubble, area, and their stacked, exploded, and 3D variants (`Column3D`, `Pie3D`, `Area3D`, `Surface3D`, and so on). Deprecated aliases `Column`, `Bar`, and `Scatter` are also accepted. See [Supported Chart Types](#supported-chart-types) for the full list.

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

## Refreshing the chart

Sometimes a chart does not represent the actual data in its embedded workbook, In those cases, refresh the chart so its series caches are rebuilt from the embedded worksheet.

`Chart.refresh` re-opens the embedded workbook, rebuilds the host chart from the current sheet cells and series formulas, and rewrites the chart part. It does not run a full Excel calculation, evaluate trendlines, or fetch an external workbook. Charts that have only an external data source and no embedded package cannot be refreshed.

The following code example demonstrates how to open an existing presentation and refresh a chart on its first slide.

{% tabs %}
{% highlight js tabtitle="TypeScript" %}

import { Presentation } from '@syncfusion/ej2-pptx';

// data is a Uint8Array or Base64 string of an existing .pptx file.
// Opens an existing PowerPoint presentation.
let pptxDoc = await Presentation.open(data);
// Gets the first slide.
let slide = pptxDoc.slides[0];
// Gets the first chart on the slide.
let chart = slide.charts.at(0);
if (chart) {
    // Rebuilds the chart part from the current embedded workbook cells.
    chart.refresh();
}
// Saves the presentation.
await pptxDoc.save('Output.pptx');

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
// data is a Uint8Array or Base64 string of an existing .pptx file.
// Opens an existing PowerPoint presentation.
var pptxDoc = await ej.pptx.Presentation.open(data);
// Gets the first slide.
var slide = pptxDoc.slides[0];
// Gets the first chart on the slide.
var chart = slide.charts.at(0);
if (chart) {
    // Rebuilds the chart part from the current embedded workbook cells.
    chart.refresh();
}
// Saves the presentation.
await pptxDoc.save('Output.pptx');
{% endhighlight %}
{% endtabs %}

N> `refresh` requires an embedded package. When `chart.hasEmbeddedPackage` is `false` (external-only data source), the call throws.

## Editing the chart data

Charts in an existing presentation can be edited. Open the presentation with [`Presentation.open`](https://help.syncfusion.com/cr/javascript/ej.pptx.Presentation.html), reach the chart through `slide.charts.at(index)`, and edit its embedded cells and series formulas on the returned `Chart` instance.

* `setSeriesValueCells` and `setSeriesCategoryCells` write values along the series formulas.
* `dataRange` and `applyDataRange` set the category/value range.
* `addSeries` requires a `values` formula. `removeSeries` deletes a series by index.
* `readSeriesValueCells` reads the current sheet cell values of a series.
* `replaceSeriesFormulas` replaces the series title, category, or value formulas.

The following code example demonstrates how to open an existing presentation, edit the chart data, and save the updated file.

{% tabs %}
{% highlight js tabtitle="TypeScript" %}

import { Presentation } from '@syncfusion/ej2-pptx';

// data is a Uint8Array or Base64 string of an existing .pptx file with a chart on the first slide.
// Opens an existing PowerPoint presentation.
let pptxDoc = await Presentation.open(data);
// Gets the first slide.
let slide = pptxDoc.slides[0];
// Gets the first chart on the slide.
let chart = slide.charts.at(0);
// Updates the embedded cells of the first series.
chart.setSeriesCategoryCells(0, ['Jan', 'Feb', 'Mar']);
chart.setSeriesValueCells(0, [10, 14, 11]);
// Adds a second series. Formulas must match cells in the embedded sheet.
chart.addSeries({
    title: 'Series 2',
    categoryLabels: 'Sheet1!$A$2:$A$4',
    values: 'Sheet1!$C$2:$C$4'
});
chart.setSeriesValueCells(1, [6, 9, 8]);
// Removes the second series again when it is no longer needed.
// chart.removeSeries(1);
// Saves the updated presentation.
await pptxDoc.save('Output.pptx');

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
// data is a Uint8Array or Base64 string of an existing .pptx file with a chart on the first slide.
// Opens an existing PowerPoint presentation.
var pptxDoc = await ej.pptx.Presentation.open(data);
// Gets the first slide.
var slide = pptxDoc.slides[0];
// Gets the first chart on the slide.
var chart = slide.charts.at(0);
// Updates the embedded cells of the first series.
chart.setSeriesCategoryCells(0, ['Jan', 'Feb', 'Mar']);
chart.setSeriesValueCells(0, [10, 14, 11]);
// Adds a second series. Formulas must match cells in the embedded sheet.
chart.addSeries({
    title: 'Series 2',
    categoryLabels: 'Sheet1!$A$2:$A$4',
    values: 'Sheet1!$C$2:$C$4'
});
chart.setSeriesValueCells(1, [6, 9, 8]);
// Removes the second series again when it is no longer needed.
// chart.removeSeries(1);
// Saves the updated presentation.
await pptxDoc.save('Output.pptx');
{% endhighlight %}
{% endtabs %}

The same edits also work on a chart created in the same session with `Slide.addChart`.

N> Chart data and format edits are dual-written to the chart part and its embedded workbook. A chart that has only an external data source cannot be edited. That includes a chart whose `c:externalData` relationship is an external `oleObject` pointing at a local `.xlsx` path and that has no `ppt/embeddings` workbook. Calling a chart mutator on that chart throws `ChartsError` with the message `Chart data edit refused: no embedded package relationship on chart part` (or `chart data source is external-only`). Open a presentation whose chart has an embedded workbook, or create the chart with `Slide.addChart`.

## Customizing the chart

Formatting can be applied both to a chart created with `Slide.addChart` and to a chart in an existing presentation opened with `Presentation.open` and reached through `slide.charts.at(index)`. Colors are RRGGBB or `#RRGGBB` only. Nested format changes are written with the matching `commit*` method (`commitTitleArea`, `commitChartArea`, `commitPlotArea`, `commitSeriesFormat`, `commitSeriesDataLabels`, `commitLegend`, `commitPrimaryCategoryAxis`, and `commitPrimaryValueAxis`).

See the following topics for each area:

* [Chart title](./Charts/Chart-Title)
* [Chart area](./Charts/Chart-Area)
* [Chart plot area](./Charts/Chart-Plot-Area)
* [Chart series](./Charts/Chart-Series)
* [Chart legend](./Charts/Chart-Legend)
* [Chart data labels](./Charts/Chart-Data-Labels)
* [Chart axis](./Charts/Chart-Axis)

Gradient fills on an existing chart source can be set with `setSourceGradientFill`. Theme or scheme colors are not written through the solid-color format bags.

## Removing the chart from a slide

Remove a chart by its instance with [`Slide.removeChart`](https://help.syncfusion.com/cr/javascript/ej.pptx.Slide.html). Unshared chart parts are removed from the package.

The following code example demonstrates how to open an existing presentation and remove a chart from its first slide.

{% tabs %}
{% highlight js tabtitle="TypeScript" %}

import { Presentation } from '@syncfusion/ej2-pptx';

// data is a Uint8Array or Base64 string of an existing .pptx file.
// Opens an existing PowerPoint presentation.
let pptxDoc = await Presentation.open(data);
// Gets the first slide.
let slide = pptxDoc.slides[0];
// Gets the first chart on the slide.
let chart = slide.charts.at(0);
if (chart) {
    // Removes the chart frame and unshared chart parts.
    slide.removeChart(chart);
}
// Saves the presentation.
await pptxDoc.save('Output.pptx');

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
// data is a Uint8Array or Base64 string of an existing .pptx file.
// Opens an existing PowerPoint presentation.
var pptxDoc = await ej.pptx.Presentation.open(data);
// Gets the first slide.
var slide = pptxDoc.slides[0];
// Gets the first chart on the slide.
var chart = slide.charts.at(0);
if (chart) {
    // Removes the chart frame and unshared chart parts.
    slide.removeChart(chart);
}
// Saves the presentation.
await pptxDoc.save('Output.pptx');
{% endhighlight %}
{% endtabs %}

Charts created in the same session can also be removed by passing the handle returned by `slide.addChart` directly to `slide.removeChart`.

## Supported chart types

The following chart types are supported by the JavaScript PowerPoint library. Pass the catalog key as the `type` of `Slide.addChart`.

| Chart type | Catalog keys |
|---|---|
| Column | `ColumnClustered`, `ColumnStacked`, `ColumnPercentStacked`, `Column3D`, `ColumnClustered3D`, `ColumnStacked3D`, `ColumnPercentStacked3D` |
| Bar | `BarClustered`, `BarStacked`, `BarPercentStacked`, `BarClustered3D`, `BarStacked3D`, `BarPercentStacked3D` |
| Line | `Line`, `LineStacked`, `LinePercentStacked`, `LineMarkers`, `LineStackedMarkers`, `LinePercentStackedMarkers`, `Line3D` |
| Pie | `Pie`, `PieExploded`, `Pie3D`, `PieExploded3D`, `PieOfPie`, `BarOfPie` |
| Doughnut | `Doughnut`, `DoughnutExploded` |
| Scatter | `ScatterMarkers`, `ScatterLine`, `ScatterLineMarkers`, `ScatterSmooth`, `ScatterSmoothMarkers` |
| Bubble | `Bubble`, `Bubble3D` |
| Area | `Area`, `AreaStacked`, `AreaPercentStacked`, `Area3D`, `AreaStacked3D`, `AreaPercentStacked3D` |
| Surface | `Surface3D` |

Deprecated aliases `Column`, `Bar`, `Scatter`, and `Bar3D` are also accepted and map to a primary classic value.

N> ChartEx types (box and whisker, funnel, Pareto, sunburst, treemap, and waterfall) are not supported and are refused by `Slide.addChart`.

## Online demo

* Explore how to create a chart in a PowerPoint presentation with the [JavaScript PowerPoint Library](https://www.syncfusion.com/document-sdk/javascript-powerpoint-library) in the [PowerPoint chart demo](https://github.com/SyncfusionExamples/javascript-powerpoint-examples/tree/master/Charts).

## See Also

* [Working with Slides](./Working-with-Slide)
* [Working with Shapes](./Working-with-shapes)
* [Working with Tables](./Working-with-Tables)
* [Loading and Saving Presentation](./Loading-and-Saving-Presentation)
