---
title: Modify the Appearance of Chart Legend in JavaScript Word | Syncfusion
description: Learn how to modify the appearance of chart legend in a chart in a Word document using Syncfusion® JavaScript Word library without Microsoft Word.
platform: document-processing
control: Word Library
documentation: UG
---

# Modify the Appearance of Chart Legend in JavaScript Word

Chart legend is a reference guide for the data displayed in a chart, typically located to the right or bottom of the chart. Using the JavaScript Word Library, you can **customize the chart legend in the chart**.

## Enable Chart Legend

The following code snippet illustrates how to enable the chart legend.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import { WordDocument, Chart, LegendPosition } from '@syncfusion/ej2-docx';

// Opens the Word document.
let document = WordDocument.open(data);

// Gets the last paragraph in the document.
let paragraph = document.lastParagraph;

// Gets the first chart from the paragraph items.
let chart = paragraph.items[0] as Chart;

// Enables the chart legend.
chart.hasLegend = true;

// Sets the legend position.
chart.legend.position = LegendPosition.Right;

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Opens the Word document.
let document = ej.docx.WordDocument.open(data);

// Gets the last paragraph in the document.
let paragraph = document.lastParagraph;

// Gets the first chart from the paragraph items.
let chart = paragraph.items[0];

// Enables the chart legend.
chart.hasLegend = true;

// Sets the legend position.
chart.legend.position = ej.docx.LegendPosition.Right;

{% endhighlight %}
{% endtabs %}

## Customize Chart Legend

The following code snippet illustrates how to customize the chart legend appearance including border, format, and text styles.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import { WordDocument, Chart, LegendPosition } from '@syncfusion/ej2-docx';

// Load an existing document
let document = WordDocument.open(data);

// Gets the last paragraph in the document.
let paragraph = document.lastParagraph;

// Gets the first chart from the paragraph items.
let chart = paragraph.items[0] as Chart;

// Enables the chart legend.
chart.hasLegend = true;

// Sets the legend position.
chart.legend.position = LegendPosition.Right;

// Formats the legend border.
chart.legend.frameFormat.line.color = "#000000";

// Formats the legend text.
chart.legend.textArea.bold = true;
chart.legend.textArea.color = "#FF69B4";
chart.legend.textArea.fontName = 'Times New Roman';
chart.legend.textArea.size = 10;

// Saves the Word document.
document.save('Legend.docx');

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Load an existing document
let document = ej.docx.WordDocument.open(data);

// Gets the last paragraph in the document.
let paragraph = document.lastParagraph;

// Gets the first chart from the paragraph items.
let chart = paragraph.items[0];

// Enables the chart legend.
chart.hasLegend = true;

// Sets the legend position.
chart.legend.position = ej.docx.LegendPosition.Right;

// Formats the legend border.
chart.legend.frameFormat.line.color = "#000000";

// Formats the legend text.
chart.legend.textArea.bold = true;
chart.legend.textArea.color = "#FF69B4";
chart.legend.textArea.fontName = 'Times New Roman';
chart.legend.textArea.size = 10;

// Saves the Word document.
document.save('Legend.docx');

{% endhighlight %}
{% endtabs %}
