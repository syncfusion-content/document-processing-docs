---
title: Modify the Appearance of Chart Plot Area | Syncfusion
description: Learn how to modify the appearance of chart plot area in a chart in a PowerPoint using the Syncfusion JavaScript PowerPoint Library.
platform: document-processing
control: PowerPoint
documentation: UG
---

# Chart Plot Area in JavaScript PowerPoint

The plot area refers to the region that represents the plotted data in a chart.

The following code example demonstrates how to modify the border and fill of the plot area.

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
// Formats the plot area: border line colour and weight in points.
await chart.commitPlotArea({
    line: { color: '#0000FF', weightPt: 0.25 },
});
// Saves the Presentation to a file.
await pptxDoc.save('ChartPlotArea.pptx');

{% endhighlight %}
{% endtabs %}