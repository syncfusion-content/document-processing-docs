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

Before you begin, make sure the following npm package is installed in your application.

```sh
npm install @syncfusion/ej2-pptx
```

For more information on package setup for each platform, refer to [Getting Started](./Getting-Started).

## Creating a chart from scratch

Use [`slide.shapes.addChart`](https://help.syncfusion.com/cr/javascript/ej.pptx.Slide.html) to insert a classic chart. Pass the chart type from the `OfficeChartType` enumeration and the frame `bounds` in points. Write the category and value cells with `chart.chartData.setValue`, add each series with `chart.series.add`, and bind the series values and category labels with `chart.chartData.getRange`.

The following code example demonstrates how to create a clustered column chart from scratch.

{% tabs %}
{% highlight js tabtitle="TypeScript" %}

import { Presentation, SlideLayoutType, OfficeChartType } from '@syncfusion/ej2-pptx';

// Creates a Presentation instance.
let pptxDoc = Presentation.create();
// Adds a blank slide.
let slide = pptxDoc.slides.add({ layout: SlideLayoutType.Blank });
// Adds a chart with position and size (points) and the chart type.
let chart = slide.shapes.addChart({
    type: OfficeChartType.ColumnClustered,
    bounds: { x: 100, y: 10, width: 700, height: 500 }
});
// Sets the chart title.
chart.chartTitle = 'Sales Analysis';
// Sets chart data.
chart.chartData.setValue(1, 2, 'Jan');
chart.chartData.setValue(1, 3, 'Feb');
chart.chartData.setValue(1, 4, 'March');
chart.chartData.setValue(2, 1, 2010);
chart.chartData.setValue(2, 2, 60);
chart.chartData.setValue(2, 3, 70);
chart.chartData.setValue(2, 4, 80);
chart.chartData.setValue(3, 1, 2011);
chart.chartData.setValue(3, 2, 80);
chart.chartData.setValue(3, 3, 70);
chart.chartData.setValue(3, 4, 60);
chart.chartData.setValue(4, 1, 2012);
chart.chartData.setValue(4, 2, 60);
chart.chartData.setValue(4, 3, 70);
chart.chartData.setValue(4, 4, 80);
// Creates series.
let seriesJan = chart.series.add('Jan');
seriesJan.values = chart.chartData.getRange(2, 2, 4, 2);
let seriesFeb = chart.series.add('Feb');
seriesFeb.values = chart.chartData.getRange(2, 3, 4, 3);
let seriesMarch = chart.series.add('March');
seriesMarch.values = chart.chartData.getRange(2, 4, 4, 4);
// Sets the category labels.
chart.primaryCategoryAxis.categoryLabels = chart.chartData.getRange(2, 1, 4, 1);
// Saves the presentation.
await pptxDoc.save('Output.pptx');

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
// Creates a Presentation instance.
var pptxDoc = ej.pptx.Presentation.create();
// Adds a blank slide.
var slide = pptxDoc.slides.add({ layout: ej.pptx.SlideLayoutType.Blank });
// Adds a chart with position and size (points) and the chart type.
var chart = slide.shapes.addChart({
    type: ej.pptx.OfficeChartType.ColumnClustered,
    bounds: { x: 100, y: 10, width: 700, height: 500 }
});
// Sets the chart title.
chart.chartTitle = 'Sales Analysis';
// Sets chart data.
chart.chartData.setValue(1, 2, 'Jan');
chart.chartData.setValue(1, 3, 'Feb');
chart.chartData.setValue(1, 4, 'March');
chart.chartData.setValue(2, 1, 2010);
chart.chartData.setValue(2, 2, 60);
chart.chartData.setValue(2, 3, 70);
chart.chartData.setValue(2, 4, 80);
chart.chartData.setValue(3, 1, 2011);
chart.chartData.setValue(3, 2, 80);
chart.chartData.setValue(3, 3, 70);
chart.chartData.setValue(3, 4, 60);
chart.chartData.setValue(4, 1, 2012);
chart.chartData.setValue(4, 2, 60);
chart.chartData.setValue(4, 3, 70);
chart.chartData.setValue(4, 4, 80);
// Creates series.
var seriesJan = chart.series.add('Jan');
seriesJan.values = chart.chartData.getRange(2, 2, 4, 2);
var seriesFeb = chart.series.add('Feb');
seriesFeb.values = chart.chartData.getRange(2, 3, 4, 3);
var seriesMarch = chart.series.add('March');
seriesMarch.values = chart.chartData.getRange(2, 4, 4, 4);
// Sets the category labels.
chart.primaryCategoryAxis.categoryLabels = chart.chartData.getRange(2, 1, 4, 1);
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

import { Presentation, SlideLayoutType, OfficeChartType } from '@syncfusion/ej2-pptx';

// excelBytes is a Uint8Array of an .xlsx file whose first sheet has categories in column A and values in column B.
// Creates a Presentation instance.
let pptxDoc = Presentation.create();
// Adds a blank slide.
let slide = pptxDoc.slides.add({ layout: SlideLayoutType.Blank });
// Adds a pie chart from the Excel range.
let chart = slide.shapes.addChart({
    type: OfficeChartType.Pie,
    name: 'Share',
    bounds: { x: 40, y: 40, width: 420, height: 280 },
    from: {
        bytes: excelBytes,
        sheet: 0,
        range: 'A2:B5'
    }
});
// Saves the presentation.
await pptxDoc.save('Output.pptx');

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
// excelBytes is a Uint8Array of an .xlsx file whose first sheet has categories in column A and values in column B.
// Creates a Presentation instance.
var pptxDoc = ej.pptx.Presentation.create();
// Adds a blank slide.
var slide = pptxDoc.slides.add({ layout: ej.pptx.SlideLayoutType.Blank });
// Adds a pie chart from the Excel range.
var chart = slide.shapes.addChart({
    type: ej.pptx.OfficeChartType.Pie,
    name: 'Share',
    bounds: { x: 40, y: 40, width: 420, height: 280 },
    from: {
        bytes: excelBytes,
        sheet: 0,
        range: 'A2:B5'
    }
});
// Saves the presentation.
await pptxDoc.save('Output.pptx');
{% endhighlight %}
{% endtabs %}

## Creating a custom chart

A custom chart combines series of different chart types in one chart. Create the chart with `slide.shapes.addChart`, write the category and value cells with `chart.chartData.setValue`, and set `seriesType` on each series to an `OfficeChartType` value.

The following code example demonstrates how to create a custom chart with a line series and an area series.

{% tabs %}
{% highlight js tabtitle="TypeScript" %}

import { Presentation, SlideLayoutType, OfficeChartType } from '@syncfusion/ej2-pptx';

// Creates a Presentation instance.
let pptxDoc = Presentation.create();
// Adds a blank slide.
let slide = pptxDoc.slides.add({ layout: SlideLayoutType.Blank });
// Adds a chart with position and size (points) and the chart type.
let chart = slide.shapes.addChart({
    type: OfficeChartType.ColumnClustered,
    bounds: { x: 100, y: 80, width: 500, height: 350 }
});
// Sets the chart title.
chart.chartTitle = 'Sales comparison';
// Sets the chart title area bold.
chart.chartTitleArea.bold = true;
// Sets chart data.
chart.chartData.setValue(1, 1, 'Month');
chart.chartData.setValue(2, 1, 'July');
chart.chartData.setValue(3, 1, 'August');
chart.chartData.setValue(4, 1, 'September');
chart.chartData.setValue(5, 1, 'October');
chart.chartData.setValue(6, 1, 'November');
chart.chartData.setValue(7, 1, 'December');
chart.chartData.setValue(1, 2, '2013');
chart.chartData.setValue(2, 2, 35);
chart.chartData.setValue(3, 2, 47);
chart.chartData.setValue(4, 2, 30);
chart.chartData.setValue(5, 2, 29);
chart.chartData.setValue(6, 2, 25);
chart.chartData.setValue(7, 2, 30);
chart.chartData.setValue(1, 3, '2014');
chart.chartData.setValue(2, 3, 30);
chart.chartData.setValue(3, 3, 25);
chart.chartData.setValue(4, 3, 29);
chart.chartData.setValue(5, 3, 35);
chart.chartData.setValue(6, 3, 38);
chart.chartData.setValue(7, 3, 32);
chart.chartData.setValue(1, 4, '2015');
chart.chartData.setValue(2, 4, 35);
chart.chartData.setValue(3, 4, 37);
chart.chartData.setValue(4, 4, 30);
chart.chartData.setValue(5, 4, 29);
chart.chartData.setValue(6, 4, 25);
chart.chartData.setValue(7, 4, 30);
// Creates series.
let serie2013 = chart.series.add('2013');
serie2013.values = chart.chartData.getRange(2, 2, 7, 2);
// Sets the series type to line.
serie2013.seriesType = OfficeChartType.Line;
let serie2014 = chart.series.add('2014');
serie2014.values = chart.chartData.getRange(2, 3, 7, 3);
// Sets the series type to area.
serie2014.seriesType = OfficeChartType.Area;
// Saves the presentation.
await pptxDoc.save('Output.pptx');

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
// Creates a Presentation instance.
var pptxDoc = ej.pptx.Presentation.create();
// Adds a blank slide.
var slide = pptxDoc.slides.add({ layout: ej.pptx.SlideLayoutType.Blank });
// Adds a chart with position and size (points) and the chart type.
var chart = slide.shapes.addChart({
    type: ej.pptx.OfficeChartType.ColumnClustered,
    bounds: { x: 100, y: 80, width: 500, height: 350 }
});
// Sets the chart title.
chart.chartTitle = 'Sales comparison';
// Sets the chart title area bold.
chart.chartTitleArea.bold = true;
// Sets chart data.
chart.chartData.setValue(1, 1, 'Month');
chart.chartData.setValue(2, 1, 'July');
chart.chartData.setValue(3, 1, 'August');
chart.chartData.setValue(4, 1, 'September');
chart.chartData.setValue(5, 1, 'October');
chart.chartData.setValue(6, 1, 'November');
chart.chartData.setValue(7, 1, 'December');
chart.chartData.setValue(1, 2, '2013');
chart.chartData.setValue(2, 2, 35);
chart.chartData.setValue(3, 2, 47);
chart.chartData.setValue(4, 2, 30);
chart.chartData.setValue(5, 2, 29);
chart.chartData.setValue(6, 2, 25);
chart.chartData.setValue(7, 2, 30);
chart.chartData.setValue(1, 3, '2014');
chart.chartData.setValue(2, 3, 30);
chart.chartData.setValue(3, 3, 25);
chart.chartData.setValue(4, 3, 29);
chart.chartData.setValue(5, 3, 35);
chart.chartData.setValue(6, 3, 38);
chart.chartData.setValue(7, 3, 32);
chart.chartData.setValue(1, 4, '2015');
chart.chartData.setValue(2, 4, 35);
chart.chartData.setValue(3, 4, 37);
chart.chartData.setValue(4, 4, 30);
chart.chartData.setValue(5, 4, 29);
chart.chartData.setValue(6, 4, 25);
chart.chartData.setValue(7, 4, 30);
// Creates series.
var serie2013 = chart.series.add('2013');
serie2013.values = chart.chartData.getRange(2, 2, 7, 2);
// Sets the series type to line.
serie2013.seriesType = ej.pptx.OfficeChartType.Line;
var serie2014 = chart.series.add('2014');
serie2014.values = chart.chartData.getRange(2, 3, 7, 3);
// Sets the series type to area.
serie2014.seriesType = ej.pptx.OfficeChartType.Area;
// Saves the presentation.
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
let chart = slide.shapes[0];
// Rebuilds the chart part from the current embedded workbook cells.
chart.refresh();
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
var chart = slide.shapes[0];
// Rebuilds the chart part from the current embedded workbook cells.
chart.refresh();
// Saves the presentation.
await pptxDoc.save('Output.pptx');
{% endhighlight %}
{% endtabs %}

N> `refresh` requires an embedded package. When `chart.hasEmbeddedPackage` is `false` (external-only data source), the call throws.

## Editing the chart data

Charts in an existing presentation can be edited. Open the presentation with [`Presentation.open`](https://help.syncfusion.com/cr/javascript/ej.pptx.Presentation.html), reach the chart through `slide.charts.at(index)`, and edit its embedded cells and series formulas on the returned `Chart` instance.

Write the category and value cells with `chart.chartData.setValue`, then call `chart.refresh` so the chart reflects the updated cells.

The following code example demonstrates how to open an existing presentation, edit the chart data, refresh the chart, and save the updated file.

{% tabs %}
{% highlight js tabtitle="TypeScript" %}

import { Presentation, Chart } from '@syncfusion/ej2-pptx';

// data is a Uint8Array or Base64 string of an existing .pptx file with a chart on the first slide.
// Opens an existing PowerPoint presentation.
let pptxDoc = await Presentation.open(data);
// Gets the first slide.
let slide = pptxDoc.slides[0];
// Gets the chart from the slide.
let chart = slide.shapes[0] as Chart;
// Modifies chart data - Row 1 (Category Names).
chart.chartData.setValue(1, 2, 'Jan');
chart.chartData.setValue(1, 3, 'Feb');
chart.chartData.setValue(1, 4, 'March');
// Modifies chart data - Row 2 (Series Data).
chart.chartData.setValue(2, 1, 2010);
chart.chartData.setValue(2, 2, 60);
chart.chartData.setValue(2, 3, 70);
chart.chartData.setValue(2, 4, 80);
// Refreshes the chart after data modification.
chart.refresh();
// Saves the updated presentation.
await pptxDoc.save('Output.pptx');

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
// data is a Uint8Array or Base64 string of an existing .pptx file with a chart on the first slide.
// Opens an existing PowerPoint presentation.
var pptxDoc = await ej.pptx.Presentation.open(data);
// Gets the first slide.
var slide = pptxDoc.slides[0];
// Gets the chart from the slide.
var chart = slide.shapes[0];
// Modifies chart data - Row 1 (Category Names).
chart.chartData.setValue(1, 2, 'Jan');
chart.chartData.setValue(1, 3, 'Feb');
chart.chartData.setValue(1, 4, 'March');
// Modifies chart data - Row 2 (Series Data).
chart.chartData.setValue(2, 1, 2010);
chart.chartData.setValue(2, 2, 60);
chart.chartData.setValue(2, 3, 70);
chart.chartData.setValue(2, 4, 80);
// Refreshes the chart after data modification.
chart.refresh();
// Saves the updated presentation.
await pptxDoc.save('Output.pptx');
{% endhighlight %}
{% endtabs %}

The same edits also work on a chart created in the same session with `slide.shapes.addChart`.

N> `chart.chartData.setValue` and `chart.refresh` update a chart that was created in the presentation. A chart that is linked only to an external workbook cannot be edited. Create the chart with `slide.shapes.addChart`, or open a presentation whose chart data is stored in the presentation.

## Customizing the chart

Formatting is applied on a chart created with `slide.shapes.addChart`.

See the following topics for each area:

* [Chart title](./Charts/Chart-Title)
* [Chart area](./Charts/Chart-Area)
* [Chart plot area](./Charts/Chart-Plot-Area)
* [Chart legend](./Charts/Chart-Legend)
* [Chart axis](./Charts/Chart-Axis)

## Removing the chart from a slide

Remove a chart by passing its instance to `slide.shapes.remove`. Unshared chart parts are removed from the package.

The following code example demonstrates how to open an existing presentation and remove a chart from its first slide.

{% tabs %}
{% highlight js tabtitle="TypeScript" %}

import { Presentation } from '@syncfusion/ej2-pptx';

// data is a Uint8Array or Base64 string of an existing .pptx file.
// Opens an existing PowerPoint presentation.
let pptxDoc = await Presentation.open(data);
// Gets the first slide.
let slide = pptxDoc.slides[0];
// Gets the chart from the slide.
let chart = slide.shapes[0];
// Removes the chart from the slide.
slide.shapes.remove(chart);
// Saves the presentation.
await pptxDoc.save('Output.pptx');

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
// data is a Uint8Array or Base64 string of an existing .pptx file.
// Opens an existing PowerPoint presentation.
var pptxDoc = await ej.pptx.Presentation.open(data);
// Gets the first slide.
var slide = pptxDoc.slides[0];
// Gets the chart from the slide.
var chart = slide.shapes[0];
// Removes the chart from the slide.
slide.shapes.remove(chart);
// Saves the presentation.
await pptxDoc.save('Output.pptx');
{% endhighlight %}
{% endtabs %}

Charts created in the same session can also be removed by passing the handle returned by `slide.shapes.addChart` directly to `slide.shapes.remove`.

## Creating a scatter chart

A scatter chart plots numeric values on both axes. Add the chart with `slide.shapes.addChart`, set `chartType` to `OfficeChartType.ScatterMarkers`, write the X and Y cells with `chart.chartData.setValue`, and assign the data range with `chart.dataRange`.

The following code example demonstrates how to create a scatter markers chart.

{% tabs %}
{% highlight js tabtitle="TypeScript" %}

import { Presentation, SlideLayoutType, OfficeChartType } from '@syncfusion/ej2-pptx';

// Creates a Presentation instance.
let pptxDoc = Presentation.create();
// Adds a blank slide.
let slide = pptxDoc.slides.add({ layout: SlideLayoutType.Blank });
// Adds a chart.
let chart = slide.shapes.addChart({ bounds: { x: 100, y: 10, width: 700, height: 500 } });
// Sets the chart type.
chart.chartType = OfficeChartType.ScatterMarkers;
// Sets chart data.
chart.chartData.setValue(1, 1, 'X-Axis');
chart.chartData.setValue(1, 2, 'Y-Axis');
chart.chartData.setValue(2, 1, 1);
chart.chartData.setValue(3, 1, 5);
chart.chartData.setValue(4, 1, 10);
chart.chartData.setValue(2, 2, 10);
chart.chartData.setValue(3, 2, 5);
chart.chartData.setValue(4, 2, 1);
// Assigns the data range.
chart.dataRange = chart.chartData.getRange(1, 1, 4, 2);
chart.isSeriesInRows = false;
// Sets the chart title.
chart.chartTitle = 'Scatter Markers Chart';
// Hides the legend.
chart.hasLegend = false;
// Saves the presentation.
await pptxDoc.save('Output.pptx');

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
// Creates a Presentation instance.
var pptxDoc = ej.pptx.Presentation.create();
// Adds a blank slide.
var slide = pptxDoc.slides.add({ layout: ej.pptx.SlideLayoutType.Blank });
// Adds a chart.
var chart = slide.shapes.addChart({ bounds: { x: 100, y: 10, width: 700, height: 500 } });
// Sets the chart type.
chart.chartType = ej.pptx.OfficeChartType.ScatterMarkers;
// Sets chart data.
chart.chartData.setValue(1, 1, 'X-Axis');
chart.chartData.setValue(1, 2, 'Y-Axis');
chart.chartData.setValue(2, 1, 1);
chart.chartData.setValue(3, 1, 5);
chart.chartData.setValue(4, 1, 10);
chart.chartData.setValue(2, 2, 10);
chart.chartData.setValue(3, 2, 5);
chart.chartData.setValue(4, 2, 1);
// Assigns the data range.
chart.dataRange = chart.chartData.getRange(1, 1, 4, 2);
chart.isSeriesInRows = false;
// Sets the chart title.
chart.chartTitle = 'Scatter Markers Chart';
// Hides the legend.
chart.hasLegend = false;
// Saves the presentation.
await pptxDoc.save('Output.pptx');
{% endhighlight %}
{% endtabs %}

## Supported chart types

The following chart types are supported by the JavaScript PowerPoint library. Pass the `OfficeChartType` member as the `type` of `slide.shapes.addChart`, or assign it to `chart.chartType` or `series.seriesType`.

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

N> ChartEx types (box and whisker, funnel, Pareto, sunburst, treemap, and waterfall) are not supported and are refused by `slide.shapes.addChart`.

## Online demo

* Explore how to create a chart in a PowerPoint presentation with the [JavaScript PowerPoint Library](https://www.syncfusion.com/document-sdk/javascript-powerpoint-library).

## See Also

* [Working with Slides](./Working-with-Slide)
* [Working with Shapes](./Working-with-shapes)
* [Working with Tables](./Working-with-Tables)
* [Loading and Saving Presentation](./Loading-and-Saving-Presentation)
