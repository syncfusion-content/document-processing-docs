---
layout: post
title: Insert Charts in TypeScript Spreadsheet | Syncfusion
description: Learn about inserting charts in the Syncfusion TypeScript Spreadsheet control to visualize worksheet data effectively.
control: Spreadsheet
platform: document-processing
documentation: ug
---

# Insert Charts in TypeScript Spreadsheet

## Insert a Chart Using the UI

You can insert a chart by selecting the chart icon in the Ribbon toolbar under the Insert Tab. The chart will be inserted based on the selected range of cells in the Spreadsheet.

## Insert a Chart Programmatically

Use the [insertChart](https://ej2.syncfusion.com/documentation/api/spreadsheet/index-default#insertchart) method to insert the chart programmatically.

The available parameter in the [`insertChart()`](https://ej2.syncfusion.com/documentation/api/spreadsheet/index-default#insertchart) method is,

| Parameter | Type | Description |
|-----|------|----|
| chart | `ChartModel` | Specifies the options to insert a chart in the spreadsheet. |

The available arguments in the `ChartModel` are:

* type: Specifies the type of chart.
* theme: Specifies the theme of a chart.
* isSeriesInRows: Specifies to switch the row or a column.
* range: Specifies the selected range or specified range.
* id: Specifies the chart element id.
* markerSettings: Specifies the marker settings. The marker is used to provide information about the data points in the series and is currently only applicable to the line chart.

The following code example shows how to insert a chart in the spreadsheet:

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/spreadsheet/javascript-es6/chart-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/spreadsheet/javascript-es6/chart-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "/document-processing/code-snippet/spreadsheet/javascript-es6/chart-cs2" %}
