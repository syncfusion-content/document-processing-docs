---
title: Modify the Appearance of Chart Legend | Syncfusion
description: Learn how to modify the appearance of chart legend in a chart in a PowerPoint using the Syncfusion JavaScript PowerPoint Library.
platform: document-processing
control: PowerPoint
documentation: UG
---

# Chart Legend in JavaScript PowerPoint

Legends are visual keys that provide viewers with information that helps them understand a chart.

The following code example demonstrates how to set the legend position in a chart. The supported position values are: `top`, `bottom`, `left`, `right`, and `corner`.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import { Presentation } from '@syncfusion/ej2-pptx';
import { addChart, detectCharts, enableCharts, loadXlsxRoot,
} from '@syncfusion/ej2-pptx/charts';

// Enables classic chart authoring (optional charts module + xlsx root).
detectCharts();
enableCharts();
await loadXlsxRoot();

// Creates a Presentation instance and adds a blank slide.
const pptxDoc = Presentation.create();
const slide = pptxDoc.slides.add();
// Adds a clustered-column chart to the slide.
const chart = await addChart(slide, {
    type: 'ColumnClustered',
    bounds: { x: 1270000, y: 127000, width: 8890000, height: 6350000 },
});
// Sets the position of the legend.
await chart.applyHasLegend(true);
await chart.commitLegend({ position: 'bottom' });
// Saves the Presentation to a file.
await pptxDoc.save('ChartLegend.pptx');

{% endhighlight %}
{% endtabs %}