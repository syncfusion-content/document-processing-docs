---
title: Modify the Appearance of Chart Axis | Syncfusion
description: Learn how to modify the appearance of chart axes in a chart in a PowerPoint using the Syncfusion JavaScript PowerPoint Library.
platform: document-processing
control: PowerPoint
documentation: UG
---

# Chart Axis in JavaScript PowerPoint

Charts typically have two axes that are used to measure and categorize data:
- Horizontal axis (also known as the category axis or x axis).
- Vertical axis (also known as the value axis or y axis).

The following code example demonstrates how to set the title of an axis.

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
// Enable value data labels on series 0. 
await chart.commitSeriesDataLabels(0, { isValue: true }); 
// Saves the Presentation to a file.
await pptxDoc.save('ChartAxis.pptx');

{% endhighlight %}
{% endtabs %}