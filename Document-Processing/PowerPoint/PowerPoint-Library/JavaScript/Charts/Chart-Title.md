---
title: Modify the Appearance of Chart Title | Syncfusion
description: Learn how to modify the appearance of chart title in a chart in a PowerPoint using the Syncfusion JavaScript PowerPoint Library.
platform: document-processing
control: PowerPoint
documentation: UG
---

# Chart Title in JavaScript PowerPoint

The chart title is a concise description at the top of a chart, offering context and clarity for the data displayed. 

The following code example demonstrates how to set the chart title on a chart.

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
// Sets the chart title.
await chart.applyChartTitle('Purchase Details');
// Saves the Presentation to a file.
await pptxDoc.save('ChartTitle.pptx');

{% endhighlight %}
{% endtabs %}