---
layout: post
title: Chart Axis in JavaScript PowerPoint | Syncfusion
description: Learn how to format the primary chart axes in a PowerPoint slide using the Syncfusion JavaScript PowerPoint Library.
platform: document-processing
control: PowerPoint
documentation: ug
keywords: javascript, powerpoint, chart axis
---

# Chart Axis in JavaScript PowerPoint

A chart has a primary category axis and a primary value axis. The [JavaScript PowerPoint Library](https://www.syncfusion.com/document-sdk/javascript-powerpoint-library) exposes them as `primaryCategoryAxis` and `primaryValueAxis` on a chart created with `slide.shapes.addChart`. You can customize the axes by:

* Setting the axis title.
* Customizing the border.
* Customizing the axis title area.
* Setting the maximum value of an axis.
* Setting the number format of an axis.
* Managing gridline visibility.
* Setting the category labels.

The following code example demonstrates how to format the primary axes.

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
// Sets the axis title.
chart.primaryCategoryAxis.title = 'Products';
chart.primaryValueAxis.title = 'In Dollars';
// Customizes the border.
chart.primaryCategoryAxis.line.color = '5A78F2';
chart.primaryCategoryAxis.line.weightPt = 3;
chart.primaryValueAxis.line.color = '5A78F2';
chart.primaryValueAxis.line.weightPt = 3;
// Customizes the axis title area.
chart.primaryCategoryAxis.titleArea.fontName = 'Calibri';
chart.primaryCategoryAxis.titleArea.bold = true;
chart.primaryCategoryAxis.titleArea.color = '5AF2EE';
chart.primaryCategoryAxis.titleArea.size = 14;
chart.primaryCategoryAxis.titleArea.italic = true;
// Sets the maximum value of an axis.
chart.primaryCategoryAxis.maximumValue = 14.0;
// Sets the number format of an axis.
chart.primaryValueAxis.numberFormat = '0.0';
// Manages gridline visibility.
chart.primaryValueAxis.hasMajorGridLines = false;
chart.primaryValueAxis.hasMinorGridLines = true;
// Sets the category labels.
chart.primaryCategoryAxis.categoryLabels = chart.chartData.getRange(2, 1, 11, 1);
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
// Sets the axis title.
chart.primaryCategoryAxis.title = 'Products';
chart.primaryValueAxis.title = 'In Dollars';
// Customizes the border.
chart.primaryCategoryAxis.line.color = '5A78F2';
chart.primaryCategoryAxis.line.weightPt = 3;
chart.primaryValueAxis.line.color = '5A78F2';
chart.primaryValueAxis.line.weightPt = 3;
// Customizes the axis title area.
chart.primaryCategoryAxis.titleArea.fontName = 'Calibri';
chart.primaryCategoryAxis.titleArea.bold = true;
chart.primaryCategoryAxis.titleArea.color = '5AF2EE';
chart.primaryCategoryAxis.titleArea.size = 14;
chart.primaryCategoryAxis.titleArea.italic = true;
// Sets the maximum value of an axis.
chart.primaryCategoryAxis.maximumValue = 14.0;
// Sets the number format of an axis.
chart.primaryValueAxis.numberFormat = '0.0';
// Manages gridline visibility.
chart.primaryValueAxis.hasMajorGridLines = false;
chart.primaryValueAxis.hasMinorGridLines = true;
// Sets the category labels.
chart.primaryCategoryAxis.categoryLabels = chart.chartData.getRange(2, 1, 11, 1);
// Saves the presentation.
await pptxDoc.save('Output.pptx');
{% endhighlight %}
{% endtabs %}

## Set the axis title

The following code snippet illustrates how to set the axis titles.

{% tabs %}
{% highlight js tabtitle="TypeScript" %}

// Sets the axis title.
chart.primaryCategoryAxis.title = 'Products';
chart.primaryValueAxis.title = 'In Dollars';

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
// Sets the axis title.
chart.primaryCategoryAxis.title = 'Products';
chart.primaryValueAxis.title = 'In Dollars';
{% endhighlight %}
{% endtabs %}

## Customize the border

The following code snippet illustrates how to customize the axis borders.

{% tabs %}
{% highlight js tabtitle="TypeScript" %}

// Customizes the border.
chart.primaryCategoryAxis.line.color = '5A78F2';
chart.primaryCategoryAxis.line.weightPt = 3;
chart.primaryValueAxis.line.color = '5A78F2';
chart.primaryValueAxis.line.weightPt = 3;

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
// Customizes the border.
chart.primaryCategoryAxis.line.color = '5A78F2';
chart.primaryCategoryAxis.line.weightPt = 3;
chart.primaryValueAxis.line.color = '5A78F2';
chart.primaryValueAxis.line.weightPt = 3;
{% endhighlight %}
{% endtabs %}

## Customize the axis title area

The following code snippet illustrates how to customize the axis title area.

{% tabs %}
{% highlight js tabtitle="TypeScript" %}

// Customizes the axis title area.
chart.primaryCategoryAxis.titleArea.fontName = 'Calibri';
chart.primaryCategoryAxis.titleArea.bold = true;
chart.primaryCategoryAxis.titleArea.color = '5AF2EE';
chart.primaryCategoryAxis.titleArea.size = 14;
chart.primaryCategoryAxis.titleArea.italic = true;

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
// Customizes the axis title area.
chart.primaryCategoryAxis.titleArea.fontName = 'Calibri';
chart.primaryCategoryAxis.titleArea.bold = true;
chart.primaryCategoryAxis.titleArea.color = '5AF2EE';
chart.primaryCategoryAxis.titleArea.size = 14;
chart.primaryCategoryAxis.titleArea.italic = true;
{% endhighlight %}
{% endtabs %}

## Set the maximum value of an axis

The following code snippet illustrates how to set the maximum value of an axis.

{% tabs %}
{% highlight js tabtitle="TypeScript" %}

// Sets the maximum value of an axis.
chart.primaryCategoryAxis.maximumValue = 14.0;

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
// Sets the maximum value of an axis.
chart.primaryCategoryAxis.maximumValue = 14.0;
{% endhighlight %}
{% endtabs %}

## Set the number format of an axis

The following code snippet illustrates how to set the number format of an axis.

{% tabs %}
{% highlight js tabtitle="TypeScript" %}

// Sets the number format of an axis.
chart.primaryValueAxis.numberFormat = '0.0';

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
// Sets the number format of an axis.
chart.primaryValueAxis.numberFormat = '0.0';
{% endhighlight %}
{% endtabs %}

## Manage gridline visibility

The following code snippet illustrates how to manage gridline visibility.

{% tabs %}
{% highlight js tabtitle="TypeScript" %}

// Manages gridline visibility.
chart.primaryValueAxis.hasMajorGridLines = false;
chart.primaryValueAxis.hasMinorGridLines = true;

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
// Manages gridline visibility.
chart.primaryValueAxis.hasMajorGridLines = false;
chart.primaryValueAxis.hasMinorGridLines = true;
{% endhighlight %}
{% endtabs %}

## Set the category labels

The following code snippet illustrates how to set the category labels.

{% tabs %}
{% highlight js tabtitle="TypeScript" %}

// Sets the category labels.
chart.primaryCategoryAxis.categoryLabels = chart.chartData.getRange(2, 1, 11, 1);

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
// Sets the category labels.
chart.primaryCategoryAxis.categoryLabels = chart.chartData.getRange(2, 1, 11, 1);
{% endhighlight %}
{% endtabs %}

## See Also

* [Working with Charts](../Working-with-Charts)
* [Chart Title](./Chart-Title)
* [Chart Area](./Chart-Area)
* [Chart Legend](./Chart-Legend)
