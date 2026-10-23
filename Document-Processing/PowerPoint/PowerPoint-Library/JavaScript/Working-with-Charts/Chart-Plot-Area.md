---
layout: post
title: Chart Plot Area in JavaScript PowerPoint | Syncfusion
description: Learn how to format the chart plot area fill and border in a PowerPoint slide using the Syncfusion JavaScript PowerPoint Library.
platform: document-processing
control: PowerPoint
documentation: ug
keywords: javascript, powerpoint, charts
---

# Chart Plot Area in JavaScript PowerPoint

The plot area is the region inside the chart where the series are drawn. You can set a solid fill and a border line. Gradient and picture fills are not supported.

N> Create or open a chart before formatting the plot area. Refer to [Working with Charts](/document-processing/powerpoint/powerpoint-library/javascript/working-with-charts/working-with-charts).

## Format the plot area

`commitPlotArea` writes the fill and line. `fill.type` is `solid` or `none`. `line.weightPt` is the border weight in points.

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
        await chart.commitPlotArea({
            fill: { type: 'solid', foreColor: 'FFFFFF' },
            line: { color: 'D9D9D9', weightPt: 0.75 }
        });
    }
    await pptxDoc.save('Output.pptx');
})();

{% endhighlight %}
{% endtabs %}
