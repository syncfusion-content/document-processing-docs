---
layout: post
title: Working with Charts in JavaScript PowerPoint | Syncfusion
description: Learn how to create, edit, customize, refresh, and remove charts in a PowerPoint slide using the Syncfusion JavaScript PowerPoint Library.
platform: document-processing
control: PowerPoint
documentation: ug
keywords: javascript, powerpoint, charts
---

# Working with Charts in JavaScript PowerPoint

A chart in a PowerPoint slide is a graphic frame bound to a DrawingML chart part and, for charts created by this library, an embedded spreadsheet. Import `@syncfusion/ej2-pptx/charts` before using `slide.charts`, `slide.addChart`, or `slide.removeChart`. Warm the spreadsheet engine with `loadXlsxRoot()` before reading charts from an existing file.

The library supports classic DrawingML chart types only. Funnel, box and whisker, waterfall, pareto, sunburst, treemap, and histogram charts are not supported. Custom combination charts, 3D scene formatting, and chart-to-image conversion are not supported.

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

## Creating a chart from an Excel sheet

Pass `from.bytes` (an `.xlsx` file as `Uint8Array`) or a live `from.workbook`, plus an optional sheet name or index and an A1 `range`. The default range is the value of `DEFAULT_FROM_EXCEL_RANGE` (`A2:B4` style: categories in the left column, values in the right column).

The embedded workbook stored in the presentation is a new minimal workbook that contains the copied cell **values** for that range and a series header. It is not a copy of the source workbook. Formulas are not calculated. A remote URL cannot be passed.

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

Chart data is stored as series formulas and as cells in the embedded workbook. Use the async methods when the write must finish before save. `setSeriesValueCells` and `setSeriesCategoryCells` write values along the series formulas. `applyDataRange` changes the category/value range. `addSeries` requires a non-empty `values` formula.

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

`refresh` re-opens the embedded workbook and rewrites the chart part from the current formulas and cell values. It does not run a full spreadsheet calculation, does not build trendlines, and does not fetch an external workbook. Call it after cell edits when you need the chart caches rewritten before save. Missing or external-only data throws.

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

## Customizing the chart

Format bags (`chartTitleArea`, `chartArea`, `plotArea`, `legend`, axis, series format) are live only while an edit session is open. Assigning nested fields does not persist until the matching `commit*` method runs. Colors are `RRGGBB` or `#RRGGBB`. Theme colors are not accepted.

### Chart title

{% tabs %}
{% highlight js tabtitle="TypeScript" %}

await chart.applyHasTitle(true);
await chart.applyChartTitle('Regional revenue');
await chart.commitTitleArea({
    bold: true,
    italic: false,
    size: 16,
    fontName: 'Calibri',
    color: '1F4E79'
});

{% endhighlight %}
{% endtabs %}

### Chart area

{% tabs %}
{% highlight js tabtitle="TypeScript" %}

await chart.commitChartArea({
    fill: { type: 'solid', foreColor: 'F2F2F2' },
    line: { color: 'BFBFBF', weightPt: 1 }
});

{% endhighlight %}
{% endtabs %}

### Chart plot area

{% tabs %}
{% highlight js tabtitle="TypeScript" %}

await chart.commitPlotArea({
    fill: { type: 'solid', foreColor: 'FFFFFF' },
    line: { color: 'D9D9D9', weightPt: 0.75 }
});

{% endhighlight %}
{% endtabs %}

### Chart series

`commitSeriesFormat` sets the series fill and line. Per-point formatting is not available.

{% tabs %}
{% highlight js tabtitle="TypeScript" %}

await chart.commitSeriesFormat(0, {
    fill: { type: 'solid', foreColor: '5B9BD5' },
    line: { color: '2E75B6', weightPt: 1 }
});

{% endhighlight %}
{% endtabs %}

### Chart legend

Positions are `bottom`, `top`, `left`, `right`, and `corner`.

{% tabs %}
{% highlight js tabtitle="TypeScript" %}

await chart.applyHasLegend(true);
await chart.commitLegend({
    position: 'bottom',
    textArea: { bold: false, size: 10, fontName: 'Calibri', color: '595959' },
    frameFormat: {
        fill: { type: 'solid', foreColor: 'FFFFFF' },
        line: { color: 'D0D0D0', weightPt: 0.75 }
    }
});

{% endhighlight %}
{% endtabs %}

### Chart data labels

Data labels are series-level. There is no separate chart-level data-label object. `position` is an engine string such as `center` or `outsideEnd`.

{% tabs %}
{% highlight js tabtitle="TypeScript" %}

await chart.commitSeriesDataLabels(0, {
    isValue: true,
    isCategoryName: false,
    isSeriesName: false,
    isPercentage: false,
    position: 'outsideEnd',
    textArea: { bold: false, size: 9, color: '404040' }
});

{% endhighlight %}
{% endtabs %}

### Chart axis

Only the primary category axis and the primary value axis are available. Secondary, date, and series axes are not available. Tick marks are `none`, `inside`, `outside`, or `cross`. Leave `minimumValue` or `maximumValue` unset for automatic scaling.

{% tabs %}
{% highlight js tabtitle="TypeScript" %}

await chart.commitPrimaryCategoryAxis({
    title: 'Region',
    visible: true,
    hasMajorGridLines: false,
    majorTickMark: 'outside'
});
await chart.commitPrimaryValueAxis({
    title: 'Revenue',
    visible: true,
    hasMajorGridLines: true,
    hasMinorGridLines: false,
    minimumValue: 0,
    maximumValue: 200,
    numberFormat: '#,##0',
    majorTickMark: 'outside',
    line: { color: '7F7F7F', weightPt: 1 },
    titleArea: { bold: true, size: 11, color: '404040' }
});

{% endhighlight %}
{% endtabs %}

## Removing the chart from a slide

Pass the chart handle returned by `addChart` or `slide.charts.at`. The graphic frame is removed. Chart parts that are not shared are removed from the package.

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

## Iterating charts

`slide.charts` is ordered like the shape tree. Use `length` and `at(index)`. A numeric indexer is not part of the public API. Out-of-range indexes return `undefined`.

{% tabs %}
{% highlight js tabtitle="TypeScript" %}

const slide = pptxDoc.slides[0];
for (let i = 0; i < slide.charts.length; i++) {
    const chart = slide.charts.at(i);
    if (chart) {
        const chartType = chart.type;
        const title = chart.chartTitle;
    }
}

{% endhighlight %}
{% endtabs %}
