---
layout: post
title: Chart Axis in JavaScript PowerPoint | Syncfusion
description: Learn how to format the primary chart axes in a PowerPoint slide using the Syncfusion JavaScript PowerPoint Library.
platform: document-processing
control: PowerPoint
documentation: ug
keywords: javascript, powerpoint, charts
---

# Chart Axis in JavaScript PowerPoint

Only the primary category axis and the primary value axis can be formatted. Secondary, date, and series axes are not available. You can set the title, visibility, gridlines, scale, tick marks, number format, axis line, and title font.

Tick marks are `none`, `inside`, `outside`, or `cross`. Leave `minimumValue` or `maximumValue` unset for automatic scaling. Colors are `RRGGBB` or `#RRGGBB`.

N> Create or open a chart before formatting axes. Refer to [Working with Charts](/document-processing/powerpoint/powerpoint-library/javascript/working-with-charts/working-with-charts).

## Format the primary category axis

`commitPrimaryCategoryAxis` writes the category axis. `title` is the axis caption.

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
        await chart.commitPrimaryCategoryAxis({
            title: 'Region',
            visible: true,
            hasMajorGridLines: false,
            majorTickMark: 'outside'
        });
    }
    await pptxDoc.save('Output.pptx');
})();

{% endhighlight %}
{% endtabs %}

## Format the primary value axis

`commitPrimaryValueAxis` writes the value axis, including scale and number format.

{% tabs %}
{% highlight js tabtitle="TypeScript" %}

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
