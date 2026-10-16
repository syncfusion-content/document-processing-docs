---
title: Modify the Appearance of Chart Area in JavaScript Word | Syncfusion
description: Learn how to customize the chart area appearance including border and color in Syncfusion JavaScript Word library.
platform: document-processing
control: Word Library
documentation: UG
---

# Modify the Appearance of Chart Area in JavaScript Word

Chart area refers to the space that contains the chart or graph you've inserted into a document. It includes the entire chart and all its elements, such as data points, labels, axes, and the plot area. Using the JavaScript Word Library, you can **customize the chart area in the chart**.

## Customization of Border

The following code snippet illustrates how to modify the border of the chart area.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import { WordDocument, Chart } from '@syncfusion/ej2-docx';
import { readFileSync, writeFileSync } from 'fs';

// Opens the Word document.
const fileBytes: Uint8Array = new Uint8Array(readFileSync('Template.docx'));
let document = WordDocument.open(fileBytes);

// Gets the last paragraph in the document.
let paragraph = document.lastParagraph;

// Gets the first chart from the paragraph items.
let chart = paragraph.items[0] as Chart;

// Sets the chart-area border.
chart.chartArea.line.color = "#0000FF";
chart.chartArea.line.weightPt = 2;

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

const { readFileSync, writeFileSync } = require('fs');

// Opens the Word document.
const fileBytes = new Uint8Array(readFileSync('Template.docx'));
let document = ej.docx.WordDocument.open(fileBytes);

// Gets the last paragraph in the document.
let paragraph = document.lastParagraph;

// Gets the first chart from the paragraph items.
let chart = paragraph.items[0];

// Sets the chart-area border.
chart.chartArea.line.color = "#0000FF";
chart.chartArea.line.weightPt = 2;

{% endhighlight %}
{% endtabs %}

## Customization of Color

The following code snippet illustrates how to fill the chart area with color.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import { WordDocument, Chart } from '@syncfusion/ej2-docx';
import { readFileSync, writeFileSync } from 'fs';

// Opens the Word document.
const fileBytes: Uint8Array = new Uint8Array(readFileSync('Template.docx'));
let document = WordDocument.open(fileBytes);

// Gets the last paragraph in the document.
let paragraph = document.lastParagraph;

// Gets the first chart from the paragraph items.
let chart = paragraph.items[0] as Chart;

// Applies a fill to the chart area.
chart.chartArea.fill.type = 'solid';
chart.chartArea.fill.foreColor = "#D3D3D3";

// Set the transparency of the chart area.
chart.chartArea.fill.transparency = 0.5;

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

const { readFileSync, writeFileSync } = require('fs');

// Opens the Word document.
const fileBytes = new Uint8Array(readFileSync('Template.docx'));
let document = ej.docx.WordDocument.open(fileBytes);

// Gets the last paragraph in the document.
let paragraph = document.lastParagraph;

// Gets the first chart from the paragraph items.
let chart = paragraph.items[0];

// Applies a fill to the chart area.
chart.chartArea.fill.type = 'solid';
chart.chartArea.fill.foreColor = "#D3D3D3";

// Set the transparency of the chart area.
chart.chartArea.fill.transparency = 0.5;

{% endhighlight %}
{% endtabs %}

## Complete Chart Area Customization

The complete code snippet illustrating chart area customization with borders and colors is shown below.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import { WordDocument, Chart } from '@syncfusion/ej2-docx';
import { readFileSync } from 'fs';

// Opens the Word document.
const fileBytes: Uint8Array = new Uint8Array(readFileSync('Template.docx'));
let document = WordDocument.open(fileBytes);

// Gets the last paragraph in the document.
let paragraph = document.lastParagraph;

// Gets the first chart from the paragraph items.
let chart = paragraph.items[0] as Chart;

// Modifies the chart height and width.
chart.height = 300;
chart.width = 500;

// Sets the chart-area border.
chart.chartArea.line.color = "#0000FF";
chart.chartArea.line.weightPt = 1.5;

// Applies a fill to the chart area.
chart.chartArea.fill.type = 'solid';
chart.chartArea.fill.foreColor = "#D3D3D3";

// Set the transparency of the chart area.
chart.chartArea.fill.transparency = 0.5;

// Saves the Word document.
document.save('ChartArea.docx');

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

const { readFileSync } = require('fs');

// Opens the Word document.
const fileBytes = new Uint8Array(readFileSync('Template.docx'));
let document = ej.docx.WordDocument.open(fileBytes);

// Gets the last paragraph in the document.
let paragraph = document.lastParagraph;

// Gets the first chart from the paragraph items.
let chart = paragraph.items[0];

// Modifies the chart height and width.
chart.height = 300;
chart.width = 500;

// Sets the chart-area border.
chart.chartArea.line.color = "#0000FF";
chart.chartArea.line.weightPt = 1.5;

// Applies a fill to the chart area.
chart.chartArea.fill.type = 'solid';
chart.chartArea.fill.foreColor = "#D3D3D3";

// Set the transparency of the chart area.
chart.chartArea.fill.transparency = 0.5;

// Saves the Word document.
document.save('ChartArea.docx');

{% endhighlight %}
{% endtabs %}
