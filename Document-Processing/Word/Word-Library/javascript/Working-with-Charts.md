---
title: Charts in Word document in JavaScript Word | Syncfusion
description: Learn how to add, edit, and remove charts in a Word document using the JavaScript Word library without Microsoft Word or interop dependencies.
platform: document-processing
control: Word Library
documentation: UG
---

# Charts in Word document in JavaScript Word

A Chart is a graphical representation of data where the data is represented as symbols such as bars, lines, etc. Charts can represent numerical data, functions, or some kinds of qualitative structures. The JavaScript Word Library supports the following chart types:

## Supported Chart Types

### Column Charts
* ColumnClustered
* ColumnStacked
* ColumnPercentStacked

### Bar Charts
* BarClustered
* BarStacked
* BarPercentStacked

### Line Charts
* Line
* LineStacked
* LineMarkers
* LineMarkersStacked
* LinePercentStacked

### Pie and Doughnut Charts
* Pie
* PieExploded
* Doughnut
* PieOfPie
* BarOfPie

### Scatter and Bubble Charts
* ScatterMarkers
* ScatterLine
* Bubble

### Area Charts
* Area
* AreaStacked
* AreaPercentStacked

### 3-D Charts
* Column3D
* Pie3D
* Line3D

> The Word Library works with Office Open XML `.docx` packages.

## Creating a simple Chart from scratch

A new chart can be created by appending it to a paragraph. The following code example illustrates how to create a new chart.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import { WordDocument, ChartType } from '@syncfusion/ej2-docx';

// Create a new Word document
let document = WordDocument.create();

// Get last section from the document
let section = document.lastSection;

// Get paragraph from the section
let paragraph = section.body.paragraphs[0];

// Creates and appends chart to the paragraph
let chart = paragraph.appendChart(ChartType.Pie, 446, 270);

// Sets chart title
chart.chartTitle = 'Best Selling Products';
chart.chartTitleArea.fontName = 'Calibri';
chart.chartTitleArea.size = 14;

// Sets data for chart
chart.chartData.setValue(1, 1, '');
chart.chartData.setValue(1, 2, 'Sales');
chart.chartData.setValue(2, 1, 'Phyllis Lapin');
chart.chartData.setValue(2, 2, 141.396);
chart.chartData.setValue(3, 1, 'Stanley Hudson');
chart.chartData.setValue(3, 2, 80.368);
chart.chartData.setValue(4, 1, 'Bernard Shah');
chart.chartData.setValue(4, 2, 71.155);
chart.chartData.setValue(5, 1, 'Patricia Lincoln');
chart.chartData.setValue(5, 2, 47.234);
chart.chartData.setValue(6, 1, 'Camembert Pierrot');
chart.chartData.setValue(6, 2, 46.825);
chart.chartData.setValue(7, 1, 'Thomas Hardy');
chart.chartData.setValue(7, 2, 42.593);
chart.chartData.setValue(8, 1, 'Hanna Moos');
chart.chartData.setValue(8, 2, 41.819);
chart.chartData.setValue(9, 1, 'Alice Mutton');
chart.chartData.setValue(9, 2, 32.698);
chart.chartData.setValue(10, 1, 'Christina Berglund');
chart.chartData.setValue(10, 2, 29.171);
chart.chartData.setValue(11, 1, 'Elizabeth Lincoln');
chart.chartData.setValue(11, 2, 25.696);

// Creates a new chart series with the name "Sales"
let pieSeries = chart.addSeries('Sales');
pieSeries.categoryLabels = chart.chartData.getRange(2, 1, 11, 1);
pieSeries.values = chart.chartData.getRange(2, 2, 11, 2);

// Sets background color
chart.chartArea.fill.foreColor = "#D3D3D3";
chart.plotArea.fill.foreColor = "#D3D3D3";

document.save('Chart.docx');

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Create a new Word document
let document = ej.docx.WordDocument.create();

// Get last section from the document
let section = document.lastSection;

// Get paragraph from the section
let paragraph = section.body.paragraphs[0];

// Creates and appends chart to the paragraph
let chart = paragraph.appendChart(ej.docx.ChartType.Pie, 446, 270);

// Sets chart title
chart.chartTitle = 'Best Selling Products';
chart.chartTitleArea.fontName = 'Calibri';
chart.chartTitleArea.size = 14;

// Sets data for chart
chart.chartData.setValue(1, 1, '');
chart.chartData.setValue(1, 2, 'Sales');
chart.chartData.setValue(2, 1, 'Phyllis Lapin');
chart.chartData.setValue(2, 2, 141.396);
chart.chartData.setValue(3, 1, 'Stanley Hudson');
chart.chartData.setValue(3, 2, 80.368);
chart.chartData.setValue(4, 1, 'Bernard Shah');
chart.chartData.setValue(4, 2, 71.155);
chart.chartData.setValue(5, 1, 'Patricia Lincoln');
chart.chartData.setValue(5, 2, 47.234);
chart.chartData.setValue(6, 1, 'Camembert Pierrot');
chart.chartData.setValue(6, 2, 46.825);
chart.chartData.setValue(7, 1, 'Thomas Hardy');
chart.chartData.setValue(7, 2, 42.593);
chart.chartData.setValue(8, 1, 'Hanna Moos');
chart.chartData.setValue(8, 2, 41.819);
chart.chartData.setValue(9, 1, 'Alice Mutton');
chart.chartData.setValue(9, 2, 32.698);
chart.chartData.setValue(10, 1, 'Christina Berglund');
chart.chartData.setValue(10, 2, 29.171);
chart.chartData.setValue(11, 1, 'Elizabeth Lincoln');
chart.chartData.setValue(11, 2, 25.696);

// Creates a new chart series with the name "Sales"
let pieSeries = chart.addSeries('Sales');
pieSeries.categoryLabels = chart.chartData.getRange(2, 1, 11, 1);
pieSeries.values = chart.chartData.getRange(2, 2, 11, 2);

// Sets background color
chart.chartArea.fill.foreColor = "#D3D3D3";
chart.plotArea.fill.foreColor = "#D3D3D3";

document.save('Chart.docx');

{% endhighlight %}
{% endtabs %}

## Modifying the Chart data

You can modify an existing chart's data values by opening the Word document, accessing the chart, and updating its data.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import { WordDocument, Chart } from '@syncfusion/ej2-docx';
import { readFileSync, writeFileSync } from 'fs';

const fileBytes: Uint8Array = new Uint8Array(readFileSync('Template.docx'));

// Opens the Word document.
let document = WordDocument.open(fileBytes);

// Gets the last paragraph in the document.
let paragraph = document.lastParagraph;

// Gets the first chart from the paragraph items.
let chart = paragraph.items[0] as Chart;

// Modifies the chart data values.
chart.chartData.setValue(2, 2, 120);
chart.chartData.setValue(3, 2, 60);
chart.chartData.setValue(4, 2, 70);

// Saves the Word document.
const documentBytes: Uint8Array = document.saveSync();
writeFileSync('Output.docx', documentBytes);

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

const { readFileSync, writeFileSync } = require('fs');

const fileBytes = new Uint8Array(readFileSync('Template.docx'));

// Opens the Word document.
let document = ej.docx.WordDocument.open(fileBytes);

// Gets the last paragraph in the document.
let paragraph = document.lastParagraph;

// Gets the first chart from the paragraph items.
let chart = paragraph.items[0];

// Modifies the chart data values.
chart.chartData.setValue(2, 2, 120);
chart.chartData.setValue(3, 2, 60);
chart.chartData.setValue(4, 2, 70);

// Saves the Word document.
const documentBytes = document.saveSync();
writeFileSync('Output.docx', documentBytes);

{% endhighlight %}
{% endtabs %}

## Removing Chart

You can remove an existing chart from a Word document by accessing it and removing it from the paragraph items collection.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import { WordDocument, Chart } from '@syncfusion/ej2-docx';
import { readFileSync, writeFileSync } from 'fs';

const fileBytes: Uint8Array = new Uint8Array(readFileSync('Template.docx'));

let document = WordDocument.open(fileBytes);

// Gets the last paragraph in the document.
let paragraph = document.lastParagraph;

for (let item of paragraph.items) {
    if (item instanceof Chart) {
        paragraph.items.remove(item);
        break;
    }
}

// Saves the Word document.
const documentBytes: Uint8Array = document.saveSync();
writeFileSync('Result.docx', documentBytes);

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

const { readFileSync, writeFileSync } = require('fs');

const fileBytes = new Uint8Array(readFileSync('Template.docx'));

let document = ej.docx.WordDocument.open(fileBytes);

// Gets the last paragraph in the document.
let paragraph = document.lastParagraph;

for (let item of paragraph.items) {
    if (item instanceof ej.docx.Chart) {
        paragraph.items.remove(item);
        break;
    }
}

// Saves the Word document.
const documentBytes = document.saveSync();
writeFileSync('Result.docx', documentBytes);

{% endhighlight %}
{% endtabs %}
