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

A chart has a primary category axis and a primary value axis. The [JavaScript PowerPoint Library](https://www.syncfusion.com/document-sdk/javascript-powerpoint-library) exposes them as `primaryCategoryAxis` and `primaryValueAxis` on a chart created with `slide.shapes.addChart`.

The following code example demonstrates how to format the primary axes.

{% tabs %}
{% highlight js tabtitle="TypeScript" %}

import { Presentation, SlideLayoutType, OfficeChartType } from '@syncfusion/ej2-pptx';

let pptxDoc = Presentation.create();
let slide = pptxDoc.slides.add({ layout: SlideLayoutType.Blank });
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
await pptxDoc.save('Output.pptx');

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
var pptxDoc = ej.pptx.Presentation.create();
var slide = pptxDoc.slides.add({ layout: ej.pptx.SlideLayoutType.Blank });
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
await pptxDoc.save('Output.pptx');
{% endhighlight %}
{% endtabs %}
