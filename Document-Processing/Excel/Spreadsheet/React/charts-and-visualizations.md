---
layout: post
title: Charts and visualizations in React Spreadsheet component | Syncfusion
description: Learn here how to insert, customize, update, and remove charts in Syncfusion React Spreadsheet component of Syncfusion Essential JS 2 and more.
control: Spreadsheet
platform: document-processing
documentation: ug
---

# Charts and Visualizations

Syncfusion react spreadsheet component supports built-in charts so you can create visuals from a cell range inside a worksheet. Supported types include Column, Bar, Line, Area, Pie/Doughnut, and Scatter. Charts stay linked to their source range and update when the data changes.

Enable charts in Syncfusion react spreadsheet component with the `allowChart` property (true by default). You can also create charts in code in Syncfusion react spreadsheet component using the [insertChart](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#insertchart) method, then move or resize them in the UI.

## Insert Charts

Insert a chart from a selected cell range so the range values become the chart's data source. Use the [insertChart](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#insertchart) method to set the chart type, data range, and position. The chart will reflect later changes to the source cells.

The example below shows how to insert a chart.

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

## Customize Chart Appearance

Charts behave like sheet objects: select and drag to move, or use the resize handles to change size. The Chart Design ribbon offers quick appearance options.

### Chart Design Options

Use the Chart Design options to add or change elements:
- **Axes and Axis Titles:** describe values.
- **Chart Title:** explain the chart.
- **Data Labels:** show values on the chart.
- **Gridlines:** improve readability.
- **Legends:** identify series.

Use `Switch Row/Column` to change data orientation. Use the Chart Type option to change the chart style after creation.

## Remove Chart

You can delete a chart from the UI (select it and press Delete/Backspace) or clear embedded objects via the ribbon's Clear All when a chart is selected.

Programmatically, in Syncfusion react spreadsheet component, use [deleteChart](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#deletechart) to remove a chart by id or to remove the active chart when called without an id. Use [selectChart](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#selectchart) and [deselectChart](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#deselectchart) to control chart selection by code.

The example below shows how to delete a chart.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/spreadsheet/react/delete-chart-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/spreadsheet/react/delete-chart-cs1/app/app.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/spreadsheet/react/delete-chart-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/spreadsheet/react/delete-chart-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/spreadsheet/react/delete-chart-cs1" %}