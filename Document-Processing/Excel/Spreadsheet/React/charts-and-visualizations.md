---
layout: post
title: Charts and visualizations in React Spreadsheet component | Syncfusion
description: Learn here how to insert, customize, update, and remove charts in Syncfusion React Spreadsheet component of Syncfusion Essential JS 2 and more.
control: Spreadsheet
platform: document-processing
documentation: ug
---

# Charts and Visualizations

Our Syncfusion React Spreadsheet component supports built‑in charts so you can turn a cell range into clear visuals directly inside a worksheet. You can insert charts (like Column, Bar, Line, Pie/Doughnut, Area, and Scatter), position and resize them, and keep them in sync with the data in their source range.

Charts can be enabled with the Spreadsheet’s [allowChart](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#allowchart) property, which is true as default and created programmatically (for example, with [insertChart](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#insertchart)), then moved or resized using drag handles in the UI.

Charts are added against a cell range, so when values in that range change, the chart reflects the new data. This makes it straightforward to build sheets where visuals update alongside table edits.

## Insert Charts

In the Syncfusion React Spreadsheet component, charts can be inserted into a worksheet to visually represent data stored in cells. A chart is created from a selected cell range, which means the values in that range are used as the data source for the chart. This allows data in the spreadsheet to be presented in a clear and visual way.

The Spreadsheet supports common chart types such as Column, Bar, Line, Area, Pie, Doughnut, and Scatter. Each type helps display data differently—for example, column and bar charts are useful for comparing values, while line charts show trends and pie charts display proportions.

Charts can be inserted programmatically using the [insertChart](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#insertchart) method. With this method, you can specify the chart type, the data range, and where the chart should appear in the worksheet. Once inserted, the chart can be moved or resized as needed. When the values in the source cells change, the chart updates automatically.

The following code example shows how to insert a chart in spreadsheet.

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

Charts can be customized to make them clearer and easier to understand after they are inserted into the worksheet. Once a chart is added, it behaves like an object inside the sheet, so it can be adjusted visually and functionally to suit the data being displayed.

You can move a chart to any location by selecting it and dragging it within the worksheet. You can also resize the chart using the resize handles shown around it, which helps fit the chart neatly alongside the data or other content.

### Chart Design Options

When a chart is selected, a Chart Design tab becomes available in the ribbon. This tab provides several options to customize the chart appearance.

Using the Add Chart Element option, you can perform the following in the chart, such as:

`Axes and Axis Titles` to clearly describe data values
`Chart Title` to explain what the chart represents
`Data Labels` to display values directly on the chart
`Gridlines` to improve readability
`Legends` to identify data series

You can also use `Switch Row/Column` to change how the data is plotted. This is useful when the chart needs to compare categories differently or when the data orientation changes.

The Chart Type option lets you change the chart style after it is created. For example, you can switch between column, bar, and line charts to better highlight comparisons or trends, depending on the data.

By using these Chart Design options, you can adjust both the look and structure of a chart, making it more informative and visually appealing directly within the spreadsheet.

## Remove Chart

In our Syncfusion React Spreadsheet component, you can remove a chart directly from the sheet or by code.

To remove it in the UI, you can also choose Clear All from the ribbon to clear the current selection and embedded objects—charts included—when the chart is selected. You can also select the chart and press `Delete/Backspace`; this deletes the selected chart immediately.

The Spreadsheet provides the [deleteChart](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#deletechart) method to remove charts through code. When you pass a chart id, that specific chart is removed; when you call it without an id, the active (selected) chart is removed. This approach is useful when you track chart ids at insertion time and want to remove them later without relying on user selection.

The Spreadsheet also provides methods to control chart selection. The [selectChart](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#selectchart) method is used to select a chart from the active sheet. If a chart id is provided, the specified chart is selected. If no argument is passed, the chart present in the active cell is selected. If the active cell does not contain a chart, the initially rendered chart in the active sheet is selected. The [deselectChart](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#deselectchart) method is used to remove the selection from the currently selected chart.

The following code example shows how to remove a chart in spreadsheet.

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