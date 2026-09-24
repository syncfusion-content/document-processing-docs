---
title: Modify the Appearance of Chart Area | Syncfusion
description: Learn how to modify the appearance of chart area in a chart in a PowerPoint using the Syncfusion JavaScript PowerPoint Library.
platform: document-processing
control: PowerPoint
documentation: UG
---

# Chart Area in JavaScript PowerPoint

The chart area refers to the space that contains the chart or graph inserted into a slide. It includes the entire chart and all its elements, such as data points, labels, axes, and the plot area.

The following code example demonstrates how to modify the border and fill of the chart area.

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
// Formats the chart area: border (line colour and weight in points) and solid fill.
await chart.commitChartArea({
    line: { color: '#0000FF', weightPt: 0.25 },
    fill: { type: 'solid', foreColor: '#CAD9EA', transparency: undefined },
});
// Saves the Presentation to a file.
await pptxDoc.save('ChartArea.pptx');

{% endhighlight %}
{% endtabs %}