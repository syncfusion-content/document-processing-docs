---
title: Modify the Appearance of Plot Area in JavaScript Word | Syncfusion
description: Learn how to customize the plot area appearance including border and color in Syncfusion JavaScript Word library.
platform: document-processing
control: Word Library
documentation: UG
---

# Modify the Appearance of Plot Area in JavaScript Word

The plot area refers to the region that represents the plotted data in a chart. Using the JavaScript Word Library, you can **customize the plot area in the chart**.

## Customization of Border

The following code snippet illustrates how to modify the border of the plot area.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import { WordDocument, Chart } from '@syncfusion/ej2-docx';

// Load an existing document
let document = WordDocument.open(data);

// Gets the last paragraph in the document.
let paragraph = document.lastParagraph;

// Gets the first chart from the paragraph items.
let chart = paragraph.items[0] as Chart;

// Sets the chart plot area border.
chart.plotArea.line.color = "#0000FF";

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Load an existing document
let document = ej.docx.WordDocument.open(data);

// Gets the last paragraph in the document.
let paragraph = document.lastParagraph;

// Gets the first chart from the paragraph items.
let chart = paragraph.items[0];

// Sets the chart plot area border.
chart.plotArea.line.color = "#0000FF";

{% endhighlight %}
{% endtabs %}

## Customization of Color

The following code snippet illustrates how to fill the plot area with color.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import { WordDocument, Chart } from '@syncfusion/ej2-docx';

// Load an existing document
let document = WordDocument.open(data);

// Gets the last paragraph in the document.
let paragraph = document.lastParagraph;

// Gets the first chart from the paragraph items.
let chart = paragraph.items[0] as Chart;

// Applies a fill to the chart plot area.
chart.plotArea.fill.type = 'solid';
chart.plotArea.fill.foreColor = "#D3D3D3";

// Set the transparency of the chart plot area.
chart.plotArea.fill.transparency = 0.5;

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Load an existing document
let document = ej.docx.WordDocument.open(data);

// Gets the last paragraph in the document.
let paragraph = document.lastParagraph;

// Gets the first chart from the paragraph items.
let chart = paragraph.items[0];

// Applies a fill to the chart plot area.
chart.plotArea.fill.type = 'solid';
chart.plotArea.fill.foreColor = "#D3D3D3";

// Set the transparency of the chart plot area.
chart.plotArea.fill.transparency = 0.5;

{% endhighlight %}
{% endtabs %}

## Complete Plot Area Customization

The complete code snippet illustrating the plot area customization with borders and colors is shown below.

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

// Sets the chart plot area border.
chart.plotArea.line.color = "#0000FF";

// Applies a fill to the chart plot area.
chart.plotArea.fill.type = 'solid';
chart.plotArea.fill.foreColor = "#D3D3D3";

// Set the transparency of the chart plot area.
chart.plotArea.fill.transparency = 0.5;

// Saves the Word document.
document.save('ChartPlotArea.docx');

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

// Sets the chart plot area border.
chart.plotArea.line.color = "#0000FF";

// Applies a fill to the chart plot area.
chart.plotArea.fill.type = 'solid';
chart.plotArea.fill.foreColor = "#D3D3D3";

// Set the transparency of the chart plot area.
chart.plotArea.fill.transparency = 0.5;

// Saves the Word document.
document.save('ChartPlotArea.docx');

{% endhighlight %}
{% endtabs %}
