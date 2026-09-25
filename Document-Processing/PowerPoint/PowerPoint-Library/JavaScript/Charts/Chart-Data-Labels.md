---
title: Modify the Appearance of Chart Data Labels | Syncfusion
description: Learn how to modify the appearance of chart data labels in a chart in a PowerPoint using the Syncfusion JavaScript PowerPoint Library.
platform: document-processing
control: PowerPoint
documentation: UG
---

# Chart Data Labels in JavaScript PowerPoint

Data labels make a chart easier to understand by displaying the values of each data point.

The following code example demonstrates how to make the data labels visible in a chart.

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
// Enables value data labels on series 0.
await chart.commitSeriesDataLabels(0, { isValue: true });
// Saves the Presentation to a file.
await pptxDoc.save('ChartDataLabels.pptx');

{% endhighlight %}
{% endtabs %}