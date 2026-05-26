---
layout: post
title: Insert Charts in React Spreadsheet component | Syncfusion
description: Learn here how to insert charts in React Spreadsheet component of Syncfusion Essential JS 2 and more.
control: Spreadsheet
platform: document-processing
documentation: ug
---

## Insert Charts in React Spreadsheet

### Insert a Chart Using the UI

You can insert a chart by selecting the chart icon in the Ribbon toolbar under the Insert Tab. The chart will be inserted based on the selected range of cells in the Spreadsheet.

### Insert a Chart Programmatically

Use the [insertChart](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#insertchart) method to insert the chart programmatically.

The available parameter in the [`insertChart()`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet#insertchart) method is,

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
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/spreadsheet/react/insert-chart-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/spreadsheet/react/insert-chart-cs1/app/app.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/spreadsheet/react/insert-chart-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/spreadsheet/react/insert-chart-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/spreadsheet/react/insert-chart-cs1" %}
