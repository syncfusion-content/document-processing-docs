---
title: Modify the Appearance of Chart Title in JavaScript Word | Syncfusion
description: Learn how to modify the appearance of chart title in a chart in a Word document using Syncfusion® JavaScript Word library without Microsoft Word.
platform: document-processing
control: Word Library
documentation: UG
---

# Modify the Appearance of Chart Title in JavaScript Word

Chart title is a concise description at the top of a chart, offering context and clarity for the data displayed. Using the JavaScript Word Library, you can **customize the chart title in the chart**.

## Set the Chart Title Name

The following code snippet illustrates how to set the chart title name.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import { WordDocument } from '@syncfusion/ej2-docx';

// Creates an empty Word document.
let document = WordDocument.create();

let paragraph = document.sections[0].body.paragraphs[0];

// Creates and appends a Pie chart to the paragraph.
let chart = paragraph.appendChart(ej.docx.ChartType.Pie, 446, 270);

// Sets the chart title.
chart.chartTitle = 'Purchase Details';

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Creates an empty Word document.
let document = ej.docx.WordDocument.create();

let paragraph = document.sections[0].body.paragraphs[0];

// Creates and appends a Pie chart to the paragraph.
let chart = paragraph.appendChart(ej.docx.ChartType.Pie, 446, 270);

// Sets the chart title.
chart.chartTitle = 'Purchase Details';

{% endhighlight %}
{% endtabs %}

## Customize the Chart Title Area

The following code snippet illustrates how to customize the chart title area.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import { WordDocument } from '@syncfusion/ej2-docx';

// Creates an empty Word document.
let document = WordDocument.create();

let paragraph = document.sections[0].body.paragraphs[0];

// Creates and appends a Pie chart to the paragraph.
let chart = paragraph.appendChart(ej.docx.ChartType.Pie, 446, 270);

// Customizes the chart title area.
chart.chartTitleArea.fontName = 'Calibri';
chart.chartTitleArea.size = 14;
chart.chartTitleArea.bold = true;
chart.chartTitleArea.color = "#FF0000";

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Creates an empty Word document.
let document = ej.docx.WordDocument.create();

let paragraph = document.sections[0].body.paragraphs[0];

// Creates and appends a Pie chart to the paragraph.
let chart = paragraph.appendChart(ej.docx.ChartType.Pie, 446, 270);

// Customizes the chart title area.
chart.chartTitleArea.fontName = 'Calibri';
chart.chartTitleArea.size = 14;
chart.chartTitleArea.bold = true;
chart.chartTitleArea.color = "#FF0000";

{% endhighlight %}
{% endtabs %}

## Remove Chart Title

You can remove the chart title by setting an empty string value to the chartTitle property.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import { WordDocument, ChartType } from '@syncfusion/ej2-docx';
import { writeFileSync } from 'fs';

// Creates an empty Word document.
let document = WordDocument.create();

let paragraph = document.sections[0].body.paragraphs[0];

// Creates and appends a Pie chart to the paragraph.
let chart = paragraph.appendChart(ChartType.Pie, 446, 270);

// Removes the chart title.
chart.chartTitle = '';

// Sets the chart data.
chart.chartData.setValue(1, 1, '');
chart.chartData.setValue(1, 2, 'Sales');
chart.chartData.setValue(2, 1, 'Phyllis Lapin');
chart.chartData.setValue(2, 2, 141.396);
chart.chartData.setValue(3, 1, 'Stanley Hudson');
chart.chartData.setValue(3, 2, 80.368);

let pieSeries = chart.addSeries('Sales');
pieSeries.categoryLabels = chart.chartData.getRange(2, 1, 3, 1);
pieSeries.values = chart.chartData.getRange(2, 2, 3, 2);

// Saves the Word document.
const documentBytes: Uint8Array = document.saveSync();
writeFileSync('Result.docx', documentBytes);

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

const { writeFileSync } = require('fs');

// Creates an empty Word document.
let document = ej.docx.WordDocument.create();

let paragraph = document.sections[0].body.paragraphs[0];

// Creates and appends a Pie chart to the paragraph.
let chart = paragraph.appendChart(ej.docx.ChartType.Pie, 446, 270);

// Removes the chart title.
chart.chartTitle = '';

// Sets the chart data.
chart.chartData.setValue(1, 1, '');
chart.chartData.setValue(1, 2, 'Sales');
chart.chartData.setValue(2, 1, 'Phyllis Lapin');
chart.chartData.setValue(2, 2, 141.396);
chart.chartData.setValue(3, 1, 'Stanley Hudson');
chart.chartData.setValue(3, 2, 80.368);

let pieSeries = chart.addSeries('Sales');
pieSeries.categoryLabels = chart.chartData.getRange(2, 1, 3, 1);
pieSeries.values = chart.chartData.getRange(2, 2, 3, 2);

// Saves the Word document.
const documentBytes = document.saveSync();
writeFileSync('Result.docx', documentBytes);

{% endhighlight %}
{% endtabs %}
