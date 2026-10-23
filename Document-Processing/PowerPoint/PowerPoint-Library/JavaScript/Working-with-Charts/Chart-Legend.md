---
layout: post
title: Chart Legend in JavaScript PowerPoint | Syncfusion
description: Learn how to show and format the chart legend in a PowerPoint slide using the Syncfusion JavaScript PowerPoint Library.
platform: document-processing
control: PowerPoint
documentation: ug
keywords: javascript, powerpoint, charts
---

# Chart Legend in JavaScript PowerPoint

The legend identifies each series. You can show or hide it, set its position, and format its text and frame. Positions are `bottom`, `top`, `left`, `right`, and `corner`. Overlay and manual legend layout are not supported.

N> Create or open a chart before formatting the legend. Refer to [Working with Charts](/document-processing/powerpoint/powerpoint-library/javascript/working-with-charts/working-with-charts).

## Show the legend

`applyHasLegend` shows or hides the legend.

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
        await chart.applyHasLegend(true);
    }
    await pptxDoc.save('Output.pptx');
})();

{% endhighlight %}
{% endtabs %}

## Format the legend

`commitLegend` sets position, text, fill, and border. Text color is `RRGGBB` or `#RRGGBB`.

{% tabs %}
{% highlight js tabtitle="TypeScript" %}

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
