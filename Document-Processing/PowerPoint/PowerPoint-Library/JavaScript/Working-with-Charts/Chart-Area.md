---
layout: post
title: Chart Area in JavaScript PowerPoint | Syncfusion
description: Learn how to format the chart area fill and border in a PowerPoint slide using the Syncfusion JavaScript PowerPoint Library.
platform: document-processing
control: PowerPoint
documentation: ug
keywords: javascript, powerpoint, charts
---

# Chart Area in JavaScript PowerPoint

The chart area is the outer frame of the chart. You can set a solid fill and a border line. Gradient, picture, and pattern fills are not supported. Colors are `RRGGBB` or `#RRGGBB`.

N> Create or open a chart before formatting the chart area. Refer to [Working with Charts](/document-processing/powerpoint/powerpoint-library/javascript/working-with-charts/working-with-charts).

## Format the chart area

`commitChartArea` writes the fill and line. `fill.type` is `solid` or `none`. `foreColor` is the solid color. `line.weightPt` is the border weight in points.

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
        await chart.commitChartArea({
            fill: { type: 'solid', foreColor: 'F2F2F2' },
            line: { color: 'BFBFBF', weightPt: 1 }
        });
    }
    await pptxDoc.save('Output.pptx');
})();

{% endhighlight %}
{% endtabs %}
