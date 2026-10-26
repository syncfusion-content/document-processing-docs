---
layout: post
title: Chart Data Labels in JavaScript PowerPoint | Syncfusion
description: Learn how to show series data labels on a PowerPoint chart using the Syncfusion JavaScript PowerPoint Library.
platform: document-processing
control: PowerPoint
documentation: ug
keywords: javascript, powerpoint, charts
---

# Chart Data Labels in JavaScript PowerPoint

Data labels are set on each series. There is no separate chart-level data-label object, and per-point labels are not supported. You can show the value, category name, series name, or percentage, and set the label position and font.

N> Create or open a chart before formatting data labels. Refer to [Working with Charts](/document-processing/powerpoint/powerpoint-library/javascript/working-with-charts/working-with-charts).

## Show series data labels

`commitSeriesDataLabels` takes a zero-based series index. `position` is an engine string such as `center` or `outsideEnd`.

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
        await chart.commitSeriesDataLabels(0, {
            isValue: true,
            isCategoryName: false,
            isSeriesName: false,
            isPercentage: false,
            position: 'outsideEnd',
            textArea: { bold: false, size: 9, color: '404040' }
        });
    }
    await pptxDoc.save('Output.pptx');
})();

{% endhighlight %}
{% endtabs %}
