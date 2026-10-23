---
layout: post
title: Working with Charts in JavaScript PowerPoint | Syncfusion
description: Learn how to create, edit, refresh, and remove charts in a PowerPoint slide using the Syncfusion JavaScript PowerPoint Library.
platform: document-processing
control: PowerPoint
documentation: ug
keywords: javascript, powerpoint, charts
---

# Working with Charts in JavaScript PowerPoint

A chart in a PowerPoint slide is a graphic frame bound to a DrawingML chart part and, for charts created by this library, an embedded spreadsheet. Import `@syncfusion/ej2-pptx/charts` before using `slide.charts`, `slide.addChart`, or `slide.removeChart`. Call `loadXlsxRoot()` before reading charts from an existing file.

The library supports classic DrawingML chart types only. Funnel, box and whisker, waterfall, pareto, sunburst, treemap, and histogram charts are not supported. Custom combination charts, 3D scene formatting, and chart-to-image conversion are not supported.

Format colors are `RRGGBB` or `#RRGGBB`. Theme colors are not accepted. Nested format changes persist only after the matching `commit` method runs. See the child topics for title, area, plot area, series, legend, data labels, and axis.

## Creating a chart from scratch

`slide.addChart` inserts a classic chart. When `from` is omitted, the chart is created from the built-in sample data (categories and one value series). `type` is a classic catalog key such as `ColumnClustered`. Bounds are in points. The method is asynchronous.

{% tabs %}
{% highlight js tabtitle="TypeScript" %}

import { Presentation, SlideLayoutType } from '@syncfusion/ej2-pptx';
import '@syncfusion/ej2-pptx/charts';
import { loadXlsxRoot } from '@syncfusion/ej2-pptx/charts';

(async () => {
    await loadXlsxRoot();
    const pptxDoc = Presentation.create();
    const slide = pptxDoc.slides.add({ layout: SlideLayoutType.Blank });
    const chart = await slide.addChart({
        type: 'ColumnClustered',
        name: 'SalesChart',
        bounds: { x: 50, y: 40, width: 480, height: 300 }
    });
    await chart.applyChartTitle('Quarterly Sales');
    await pptxDoc.save('Output.pptx');
})();

{% endhighlight %}
{% endtabs %}

Supported `type` values include column, bar, line, pie, doughnut, scatter, bubble, area, and surface keys such as `ColumnClustered`, `BarClustered`, `Line`, `Pie`, `Doughnut`, `ScatterMarkers`, `Bubble`, `Area`, and `Pie3D`. A 3D type key selects that chart type only. It does not expose rotation, depth, or bevel settings. `BoxAndWhisker`, `Funnel`, `Pareto`, `Sunburst`, `TreeMap`, and `Waterfall` throw.

## Creating a chart from an Excel sheet

Pass `from.bytes` (an `.xlsx` file as `Uint8Array`) or a live `from.workbook`, plus an optional sheet name or index and an A1 `range`. The default range is `DEFAULT_FROM_EXCEL_RANGE` (categories in the left column, values in the right column, `A2:B4`).

The embedded workbook stored in the presentation is a new minimal workbook that contains the copied cell values for that range and a series header. It is not a copy of the source workbook. Formulas are not calculated. A remote URL cannot be passed.

{% tabs %}
{% highlight js tabtitle="TypeScript" %}

import { Presentation, SlideLayoutType } from '@syncfusion/ej2-pptx';
import '@syncfusion/ej2-pptx/charts';
import { loadXlsxRoot } from '@syncfusion/ej2-pptx/charts';

// excelBytes is a Uint8Array of an .xlsx file.
(async () => {
    await loadXlsxRoot();
    const pptxDoc = Presentation.create();
    const slide = pptxDoc.slides.add({ layout: SlideLayoutType.Blank });
    await slide.addChart({
        type: 'BarClustered',
        bounds: { x: 40, y: 40, width: 500, height: 320 },
        from: {
            bytes: excelBytes,
            sheet: 0,
            range: 'A2:B6'
        }
    });
    await pptxDoc.save('Output.pptx');
})();

{% endhighlight %}
{% endtabs %}

## Editing the chart data

Chart data is stored as series formulas and as cells in the embedded workbook. Use the async methods when the write must finish before save. `setSeriesValueCells` and `setSeriesCategoryCells` write values along the series formulas. `applyDataRange` changes the category and value range. `addSeries` requires a non-empty `values` formula.

These methods throw when the chart has no embedded workbook (external-only data).

{% tabs %}
{% highlight js tabtitle="TypeScript" %}

import { Presentation } from '@syncfusion/ej2-pptx';
import '@syncfusion/ej2-pptx/charts';
import { loadXlsxRoot } from '@syncfusion/ej2-pptx/charts';

// data is a Uint8Array or ArrayBuffer of a .pptx file that contains a chart.
(async () => {
    await loadXlsxRoot();
    const pptxDoc = await Presentation.open(data);
    const chart = pptxDoc.slides[0].charts.at(0);
    if (chart) {
        await chart.setSeriesCategoryCells(0, ['East', 'West', 'North']);
        await chart.setSeriesValueCells(0, [120, 90, 150]);
        await chart.addSeries({
            title: 'Series 2',
            categoryLabels: 'Sheet1!$A$2:$A$4',
            values: 'Sheet1!$C$2:$C$4'
        });
    }
    await pptxDoc.save('Output.pptx');
})();

{% endhighlight %}
{% endtabs %}

## Refreshing the chart

`refresh` re-opens the embedded workbook and rewrites the chart part from the current formulas and cell values. It does not run a full spreadsheet calculation, does not build trendlines, and does not fetch an external workbook. Call it after cell edits when the chart caches must be rewritten before save. Missing or external-only data throws.

{% tabs %}
{% highlight js tabtitle="TypeScript" %}

import { Presentation } from '@syncfusion/ej2-pptx';
import '@syncfusion/ej2-pptx/charts';
import { loadXlsxRoot } from '@syncfusion/ej2-pptx/charts';

(async () => {
    await loadXlsxRoot();
    const pptxDoc = await Presentation.open(data);
    const chart = pptxDoc.slides[0].charts.at(0);
    if (chart && chart.hasEmbeddedPackage) {
        await chart.refresh();
    }
    await pptxDoc.save('Output.pptx');
})();

{% endhighlight %}
{% endtabs %}

## Iterating charts

`slide.charts.length` is the number of classic charts on the slide. Use `charts.at(index)`. A numeric indexer is not supported. The collection is empty until `loadXlsxRoot()` has completed.

{% tabs %}
{% highlight js tabtitle="TypeScript" %}

import { Presentation } from '@syncfusion/ej2-pptx';
import '@syncfusion/ej2-pptx/charts';
import { loadXlsxRoot } from '@syncfusion/ej2-pptx/charts';

(async () => {
    await loadXlsxRoot();
    const pptxDoc = await Presentation.open(data);
    const charts = pptxDoc.slides[0].charts;
    for (let i = 0; i < charts.length; i++) {
        const chart = charts.at(i);
        if (chart) {
            const title = chart.chartTitle;
        }
    }
})();

{% endhighlight %}
{% endtabs %}

## Removing the chart from a slide

Pass the chart handle returned by `addChart` or `slide.charts.at`. The graphic frame is removed. Chart parts that are not shared are removed from the package. Removal is by handle, not by index.

{% tabs %}
{% highlight js tabtitle="TypeScript" %}

import { Presentation } from '@syncfusion/ej2-pptx';
import '@syncfusion/ej2-pptx/charts';
import { loadXlsxRoot } from '@syncfusion/ej2-pptx/charts';

(async () => {
    await loadXlsxRoot();
    const pptxDoc = await Presentation.open(data);
    const slide = pptxDoc.slides[0];
    const chart = slide.charts.at(0);
    if (chart) {
        slide.removeChart(chart);
    }
    await pptxDoc.save('Output.pptx');
})();

{% endhighlight %}
{% endtabs %}
