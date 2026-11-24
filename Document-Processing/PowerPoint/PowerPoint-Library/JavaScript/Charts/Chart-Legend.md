---
layout: post
title: Chart Legend in JavaScript PowerPoint | Syncfusion
description: Learn how to format the legend of a PowerPoint chart using the Syncfusion JavaScript PowerPoint Library.
platform: document-processing
control: PowerPoint
documentation: ug
keywords: javascript, powerpoint, chart legend
---

# Chart Legend in JavaScript PowerPoint

The legend identifies each series. The [JavaScript PowerPoint Library](https://www.syncfusion.com/document-sdk/javascript-powerpoint-library) exposes it as `chart.legend` on a chart created with `slide.shapes.addChart`. You can customize the legend by:

* Setting the legend position.
* Customizing the fill.
* Customizing the legend border.
* Customizing the legend text area.

The following code example demonstrates how to format the chart legend.

{% tabs %}
{% highlight js tabtitle="TypeScript" %}

import { Presentation, SlideLayoutType, OfficeChartType } from '@syncfusion/ej2-pptx';

// Creates a Presentation instance.
let pptxDoc = Presentation.create();
// Adds a blank slide.
let slide = pptxDoc.slides.add({ layout: SlideLayoutType.Blank });
// Adds a chart with position and size (points) and the chart type.
let chart = slide.shapes.addChart({
    type: OfficeChartType.ColumnClustered,
    bounds: { x: 100, y: 10, width: 700, height: 500 }
});
// Sets the position of the legend.
chart.legend.position = 'left';
// Customizes the fill.
chart.legend.frameFormat.fill.type = 'solid';
chart.legend.frameFormat.fill.transparency = 0.7;
chart.legend.frameFormat.fill.foreColor = 'F25AA9';
// Customizes the legend border.
chart.legend.frameFormat.line.color = '5A78F2';
chart.legend.frameFormat.line.weightPt = 3;
// Customizes the legend text area.
chart.legend.textArea.fontName = 'Calibri';
chart.legend.textArea.bold = true;
chart.legend.textArea.color = '5AF2EE';
chart.legend.textArea.size = 14;
chart.legend.textArea.italic = true;
// Saves the presentation.
await pptxDoc.save('Output.pptx');

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
// Creates a Presentation instance.
var pptxDoc = ej.pptx.Presentation.create();
// Adds a blank slide.
var slide = pptxDoc.slides.add({ layout: ej.pptx.SlideLayoutType.Blank });
// Adds a chart with position and size (points) and the chart type.
var chart = slide.shapes.addChart({
    type: ej.pptx.OfficeChartType.ColumnClustered,
    bounds: { x: 100, y: 10, width: 700, height: 500 }
});
// Sets the position of the legend.
chart.legend.position = 'left';
// Customizes the fill.
chart.legend.frameFormat.fill.type = 'solid';
chart.legend.frameFormat.fill.transparency = 0.7;
chart.legend.frameFormat.fill.foreColor = 'F25AA9';
// Customizes the legend border.
chart.legend.frameFormat.line.color = '5A78F2';
chart.legend.frameFormat.line.weightPt = 3;
// Customizes the legend text area.
chart.legend.textArea.fontName = 'Calibri';
chart.legend.textArea.bold = true;
chart.legend.textArea.color = '5AF2EE';
chart.legend.textArea.size = 14;
chart.legend.textArea.italic = true;
// Saves the presentation.
await pptxDoc.save('Output.pptx');
{% endhighlight %}
{% endtabs %}

## Set the position of the legend

The following code snippet illustrates how to set the legend position.

{% tabs %}
{% highlight js tabtitle="TypeScript" %}

// Sets the position of the legend.
chart.legend.position = 'left';

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
// Sets the position of the legend.
chart.legend.position = 'left';
{% endhighlight %}
{% endtabs %}

## Customize the fill

The following code snippet illustrates how to customize the legend fill.

{% tabs %}
{% highlight js tabtitle="TypeScript" %}

// Customizes the fill.
chart.legend.frameFormat.fill.type = 'solid';
chart.legend.frameFormat.fill.transparency = 0.7;
chart.legend.frameFormat.fill.foreColor = 'F25AA9';

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
// Customizes the fill.
chart.legend.frameFormat.fill.type = 'solid';
chart.legend.frameFormat.fill.transparency = 0.7;
chart.legend.frameFormat.fill.foreColor = 'F25AA9';
{% endhighlight %}
{% endtabs %}

## Customize the legend border

The following code snippet illustrates how to customize the legend border.

{% tabs %}
{% highlight js tabtitle="TypeScript" %}

// Customizes the legend border.
chart.legend.frameFormat.line.color = '5A78F2';
chart.legend.frameFormat.line.weightPt = 3;

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
// Customizes the legend border.
chart.legend.frameFormat.line.color = '5A78F2';
chart.legend.frameFormat.line.weightPt = 3;
{% endhighlight %}
{% endtabs %}

## Customize the legend text area

The following code snippet illustrates how to customize the legend text area.

{% tabs %}
{% highlight js tabtitle="TypeScript" %}

// Customizes the legend text area.
chart.legend.textArea.fontName = 'Calibri';
chart.legend.textArea.bold = true;
chart.legend.textArea.color = '5AF2EE';
chart.legend.textArea.size = 14;
chart.legend.textArea.italic = true;

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
// Customizes the legend text area.
chart.legend.textArea.fontName = 'Calibri';
chart.legend.textArea.bold = true;
chart.legend.textArea.color = '5AF2EE';
chart.legend.textArea.size = 14;
chart.legend.textArea.italic = true;
{% endhighlight %}
{% endtabs %}

## See Also

* [Working with Charts](../Working-with-Charts)
* [Chart Title](./Chart-Title)
* [Chart Area](./Chart-Area)
* [Chart Axis](./Chart-Axis)
