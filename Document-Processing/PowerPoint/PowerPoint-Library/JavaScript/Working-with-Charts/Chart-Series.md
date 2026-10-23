---
layout: post
title: Chart Series in JavaScript PowerPoint | Syncfusion
description: Learn how to add, remove, and format chart series in a PowerPoint slide using the Syncfusion JavaScript PowerPoint Library.
platform: document-processing
control: PowerPoint
documentation: ug
keywords: javascript, powerpoint, charts
---

# Chart Series in JavaScript PowerPoint

A series is one set of values on the chart. You can add a series, remove a series, replace formulas, and set the series fill and line. Per-point formatting, trendlines, and error bars are not supported. The chart must have an embedded workbook.

N> Create or open a chart before editing series. Refer to [Working with Charts](/document-processing/powerpoint/powerpoint-library/javascript/working-with-charts/working-with-charts).

## Add and remove a series

`addSeries` requires a `values` formula. `categoryLabels` and `title` are optional. `removeSeries` takes a zero-based index.

{% tabs %}
{% highlight js tabtitle="TypeScript" %}

import { Presentation } from '@syncfusion/ej2-pptx';
import '@syncfusion/ej2-pptx/charts';
import { loadXlsxRoot } from '@syncfusion/ej2-pptx/charts';

(async () => {
    await loadXlsxRoot();
    const pptxDoc = await Presentation.open(data);
    const chart = pptxDoc.slides[0].charts.at(0);
    if (chart) {
        await chart.addSeries({
            title: 'Series 2',
            categoryLabels: 'Sheet1!$A$2:$A$4',
            values: 'Sheet1!$C$2:$C$4'
        });
        await chart.removeSeries(1);
    }
    await pptxDoc.save('Output.pptx');
})();

{% endhighlight %}
{% endtabs %}

## Format a series

`commitSeriesFormat` sets the fill and line for one series. The first argument is the zero-based series index.

{% tabs %}
{% highlight js tabtitle="TypeScript" %}

await chart.commitSeriesFormat(0, {
    fill: { type: 'solid', foreColor: '5B9BD5' },
    line: { color: '2E75B6', weightPt: 1 }
});

{% endhighlight %}
{% endtabs %}
