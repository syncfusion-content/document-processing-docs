---
layout: post
title: Working with Charts in JavaScript PowerPoint | Syncfusion
description: Learn how to create and customize charts in a PowerPoint presentation using the Syncfusion JavaScript PowerPoint Library.
platform: document-processing
control: PowerPoint
documentation: ug
keywords: javascript, powerpoint
---

# Working with Charts in JavaScript PowerPoint

## Creating a chart from scratch

An instance of Chart can be used to create or modify the charts in PowerPoint Presentation. The following code example demonstrates how to create a simple chart by adding data from scratch.

{% tabs %}
{% highlight js tabtitle="index.js" %}

import { Presentation } from '@syncfusion/ej2-pptx';
import {
    detectCharts,
    enableCharts,
    loadXlsxRoot,
    addChart
} from '@syncfusion/ej2-pptx/charts';

// Enable classic chart authoring (optional charts module + xlsx root).
detectCharts();
enableCharts();
await loadXlsxRoot();

// Creates a Presentation instance.
const pptxDoc = Presentation.create();

// Adds a blank slide.
const slide = pptxDoc.slides.add();

// Adds chart with type. Bounds are in points.
const chart = await addChart(slide, {
    type: 'ColumnClustered',
    name: 'Sales Chart',
    bounds: { x: 100, y: 10, width: 700, height: 500 }
});

// Chart title.
chart.hasTitle = true;
await chart.applyHasTitle(true);
await chart.applyChartTitle('Sales Analysis');

await chart.setSeriesCategoryCells(0, [2010, 2011, 2012]);

await chart.replaceSeriesFormulas(0, { title: 'Jan' });
await chart.setSeriesValueCells(0, [60, 80, 60]);

await chart.addSeries({
    title: 'Feb',
    categoryLabels: 'Sheet1!$A$2:$A$4',
    values: 'Sheet1!$C$2:$C$4'
});
await chart.setSeriesValueCells(1, [70, 70, 70]);

// March.
await chart.addSeries({
    title: 'March',
    categoryLabels: 'Sheet1!$A$2:$A$4',
    values: 'Sheet1!$D$2:$D$4'
});
await chart.setSeriesValueCells(2, [80, 60, 80]);

// Category axis title.
const categoryAxis = chart.primaryCategoryAxis;
categoryAxis.title = 'Year';
await chart.commitPrimaryCategoryAxis(categoryAxis);
await chart.commitPrimaryValueAxis({
    title: 'Sales',
    numberFormat: '0.0'
});

await chart.refresh();

// Saves the presentation and downloads it in the browser.
const bytes = await pptxDoc.save();
const blob = new Blob([bytes], {
    type: 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
});
const url = window.URL.createObjectURL(blob);
const link = document.createElement('a');
link.href = url;
link.download = 'Output.pptx';
document.body.appendChild(link);
link.click();
document.body.removeChild(link);
window.URL.revokeObjectURL(url);

{% endhighlight %}
{% endtabs %}

## Customizing the chart

A chart is composed of various elements such as legends, axes, series, etc. Each chart element corresponds to an object. The following lists the basic elements of a chart.

* Chart area — the background area of the chart.
* Plot area — the area where the data series are plotted.
* Data points — the individual values that make up a data series.
* Axes — the horizontal (category) and vertical (value) axes along which data is plotted.
* Legend — the key that identifies each data series by color or pattern.
* Title — the chart and axis titles that describe the chart.
* Data labels — labels that identify the details of a data point in a data series.

### Chart Title

Chart title is a concise description at the top of a chart, offering context and clarity for the data displayed. The following code snippet illustrates how to set the chart title name on a chart named chart.

{% tabs %}
{% highlight js tabtitle="index.js" %}

import { Presentation } from '@syncfusion/ej2-pptx';
import {
    addChart,
    detectCharts,
    enableCharts,
    loadXlsxRoot
} from '@syncfusion/ej2-pptx/charts';

// Enable classic chart authoring (optional charts module + xlsx root).
detectCharts();
enableCharts();
await loadXlsxRoot();

// Creates a Presentation instance and adds a blank slide.
const pptxDoc = Presentation.create();
const slide = pptxDoc.slides.add();

// Adds a clustered-column chart to the slide. Bounds are in points.
const chart = await addChart(slide, {
    type: 'ColumnClustered',
    bounds: { x: 100, y: 10, width: 700, height: 500 }
});

// Set the chart title.
await chart.applyChartTitle('Purchase Details');

// Saves the Presentation to a file.
// Saves the presentation and downloads it in the browser.
const bytes = await pptxDoc.save();
const blob = new Blob([bytes], {
    type: 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
});
const url = window.URL.createObjectURL(blob);
const link = document.createElement('a');
link.href = url;
link.download = 'ChartTitle.pptx';
document.body.appendChild(link);
link.click();
document.body.removeChild(link);
window.URL.revokeObjectURL(url);

{% endhighlight %}
{% endtabs %}

### Chart Area

Chart area refers to the space that contains the chart or graph you've inserted into a document. It includes the entire chart and all its elements, such as data points, labels, axes, and the plot area.

The following code snippet illustrates how to modify the border and fill of the chart area.

{% tabs %}
{% highlight js tabtitle="index.js" %}

import { Presentation } from '@syncfusion/ej2-pptx';
import {
    addChart,
    detectCharts,
    enableCharts,
    loadXlsxRoot
} from '@syncfusion/ej2-pptx/charts';

// Enable classic chart authoring (optional charts module + xlsx root).
detectCharts();
enableCharts();
await loadXlsxRoot();

// Creates a Presentation instance and adds a blank slide.
const pptxDoc = Presentation.create();
const slide = pptxDoc.slides.add();

// Adds a clustered-column chart to the slide. Bounds are in points.
const chart = await addChart(slide, {
    type: 'ColumnClustered',
    bounds: { x: 100, y: 10, width: 700, height: 500 }
});

// Format the chart area: border (line colour + weight in points) and solid fill.
await chart.commitChartArea({
    line: { color: '#0000FF', weightPt: 0.25 },
    fill: { type: 'solid', foreColor: '#CAD9EA', transparency: undefined }
});

// Saves the Presentation to a file.
// Saves the presentation and downloads it in the browser.
const bytes = await pptxDoc.save();
const blob = new Blob([bytes], {
    type: 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
});
const url = window.URL.createObjectURL(blob);
const link = document.createElement('a');
link.href = url;
link.download = 'ChartArea.pptx';
document.body.appendChild(link);
link.click();
document.body.removeChild(link);
window.URL.revokeObjectURL(url);

{% endhighlight %}
{% endtabs %}

### Chart Plot Area

The plot area refers to the region that represents the plotted data in a chart. The following code snippet illustrates how to modify the border and fill of the plot area.

{% tabs %}
{% highlight js tabtitle="index.js" %}

import { Presentation } from '@syncfusion/ej2-pptx';
import {
    addChart,
    detectCharts,
    enableCharts,
    loadXlsxRoot
} from '@syncfusion/ej2-pptx/charts';

// Enable classic chart authoring (optional charts module + xlsx root).
detectCharts();
enableCharts();
await loadXlsxRoot();

// Creates a Presentation instance and adds a blank slide.
const pptxDoc = Presentation.create();
const slide = pptxDoc.slides.add();

// Adds a clustered-column chart to the slide. Bounds are in points.
const chart = await addChart(slide, {
    type: 'ColumnClustered',
    bounds: { x: 100, y: 10, width: 700, height: 500 }
});

// Format the plot area: border line colour and weight in points.
await chart.commitPlotArea({
    line: { color: '#0000FF', weightPt: 0.25 }
});

// Saves the Presentation to a file.
// Saves the presentation and downloads it in the browser.
const bytes = await pptxDoc.save();
const blob = new Blob([bytes], {
    type: 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
});
const url = window.URL.createObjectURL(blob);
const link = document.createElement('a');
link.href = url;
link.download = 'ChartPlotArea.pptx';
document.body.appendChild(link);
link.click();
document.body.removeChild(link);
window.URL.revokeObjectURL(url);

{% endhighlight %}
{% endtabs %}

### Chart Legend

Legends are visual keys that provide viewers with information that helps them understand a chart. The following code snippet illustrates how to set the legend position in a chart. Position strings are lowercase engine values: `bottom`, `top`, `left`, `right`, and `corner`.

{% tabs %}
{% highlight js tabtitle="index.js" %}

import { Presentation } from '@syncfusion/ej2-pptx';
import {
    addChart,
    detectCharts,
    enableCharts,
    loadXlsxRoot
} from '@syncfusion/ej2-pptx/charts';

// Enable classic chart authoring (optional charts module + xlsx root).
detectCharts();
enableCharts();
await loadXlsxRoot();

// Creates a Presentation instance and adds a blank slide.
const pptxDoc = Presentation.create();
const slide = pptxDoc.slides.add();

// Adds a clustered-column chart to the slide. Bounds are in points.
const chart = await addChart(slide, {
    type: 'ColumnClustered',
    bounds: { x: 100, y: 10, width: 700, height: 500 }
});

// Set the position of the legend.
await chart.applyHasLegend(true);
await chart.commitLegend({ position: 'bottom' });

// Saves the Presentation to a file.
// Saves the presentation and downloads it in the browser.
const bytes = await pptxDoc.save();
const blob = new Blob([bytes], {
    type: 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
});
const url = window.URL.createObjectURL(blob);
const link = document.createElement('a');
link.href = url;
link.download = 'ChartLegend.pptx';
document.body.appendChild(link);
link.click();
document.body.removeChild(link);
window.URL.revokeObjectURL(url);

{% endhighlight %}
{% endtabs %}

### Chart Data Labels

Data labels make a chart easier to understand by displaying the values of each data point. The following code snippet illustrates how to make the data labels visible in a chart.

{% tabs %}
{% highlight js tabtitle="index.js" %}

import { Presentation } from '@syncfusion/ej2-pptx';
import {
    addChart,
    detectCharts,
    enableCharts,
    loadXlsxRoot
} from '@syncfusion/ej2-pptx/charts';

// Enable classic chart authoring (optional charts module + xlsx root).
detectCharts();
enableCharts();
await loadXlsxRoot();

// Creates a Presentation instance and adds a blank slide.
const pptxDoc = Presentation.create();
const slide = pptxDoc.slides.add();

// Adds a clustered-column chart to the slide. Bounds are in points.
const chart = await addChart(slide, {
    type: 'ColumnClustered',
    bounds: { x: 100, y: 10, width: 700, height: 500 }
});

// Enable value data labels on series 0.
await chart.commitSeriesDataLabels(0, { isValue: true });

// Saves the Presentation to a file.
// Saves the presentation and downloads it in the browser.
const bytes = await pptxDoc.save();
const blob = new Blob([bytes], {
    type: 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
});
const url = window.URL.createObjectURL(blob);
const link = document.createElement('a');
link.href = url;
link.download = 'ChartDataLabels.pptx';
document.body.appendChild(link);
link.click();
document.body.removeChild(link);
window.URL.revokeObjectURL(url);

{% endhighlight %}
{% endtabs %}

### Chart Axis

Charts typically have two axes that are used to measure and categorize data.

* Horizontal axis (also known as category axis or x axis).
* Vertical axis (also known as value axis or y axis).

The following code snippet illustrates how to set the title of an axis.

{% tabs %}
{% highlight js tabtitle="index.js" %}

import { Presentation } from '@syncfusion/ej2-pptx';
import {
    addChart,
    detectCharts,
    enableCharts,
    loadXlsxRoot
} from '@syncfusion/ej2-pptx/charts';

// Enable classic chart authoring (optional charts module + xlsx root).
detectCharts();
enableCharts();
await loadXlsxRoot();

// Creates a Presentation instance and adds a blank slide.
const pptxDoc = Presentation.create();
const slide = pptxDoc.slides.add();

// Adds a clustered-column chart to the slide. Bounds are in points.
const chart = await addChart(slide, {
    type: 'ColumnClustered',
    bounds: { x: 100, y: 10, width: 700, height: 500 }
});

// Set the category and value axis titles.
await chart.commitPrimaryCategoryAxis({ title: 'Year' });
await chart.commitPrimaryValueAxis({ title: 'Sales' });

// Saves the Presentation to a file.
// Saves the presentation and downloads it in the browser.
const bytes = await pptxDoc.save();
const blob = new Blob([bytes], {
    type: 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
});
const url = window.URL.createObjectURL(blob);
const link = document.createElement('a');
link.href = url;
link.download = 'ChartAxis.pptx';
document.body.appendChild(link);
link.click();
document.body.removeChild(link);
window.URL.revokeObjectURL(url);

{% endhighlight %}
{% endtabs %}
