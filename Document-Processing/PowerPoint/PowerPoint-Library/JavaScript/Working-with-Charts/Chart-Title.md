---
layout: post
title: Chart Title in JavaScript PowerPoint | Syncfusion
description: Learn how to set and format the chart title in a PowerPoint slide using the Syncfusion JavaScript PowerPoint Library.
platform: document-processing
control: PowerPoint
documentation: ug
keywords: javascript, powerpoint, charts
---

# Chart Title in JavaScript PowerPoint

A chart title is the text shown for the chart. You can show or hide it, set the title text, and format the title font. Title color is `RRGGBB` or `#RRGGBB`. Theme colors are not accepted.

N> Create or open a chart before formatting the title. Refer to [Working with Charts](/document-processing/powerpoint/powerpoint-library/javascript/working-with-charts/working-with-charts).

## Set the chart title

`applyChartTitle` writes the title text and shows the title when the string is not empty. `applyHasTitle` shows or hides the title without changing the text. An empty string clears the title text.

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
        await chart.applyHasTitle(true);
        await chart.applyChartTitle('Regional revenue');
    }
    await pptxDoc.save('Output.pptx');
})();

{% endhighlight %}
{% endtabs %}

## Format the chart title area

`commitTitleArea` sets bold, italic, size, font name, and color. Size is in points. Nested changes are saved only when this method runs.

{% tabs %}
{% highlight js tabtitle="TypeScript" %}

await chart.commitTitleArea({
    bold: true,
    italic: false,
    size: 16,
    fontName: 'Calibri',
    color: '1F4E79'
});

{% endhighlight %}
{% endtabs %}
