---
layout: post
title: Charts and visualizations in React Spreadsheet component | Syncfusion
description: Learn here how to insert, customize, update, and remove charts in Syncfusion React Spreadsheet component of Syncfusion Essential JS 2 and more.
control: Spreadsheet
platform: document-processing
documentation: ug
---

# Charts and Visualizations

## Understanding Charts

The Syncfusion React Spreadsheet component supports built-in charts, allowing you to turn cell ranges into clear visual representations directly inside your worksheet. Charts help you identify trends, compare values, and communicate data insights at a glance.

## Supported Chart Types

The following types of charts are available in the Spreadsheet.

>* Column Chart
>* Bar Chart
>* Area Chart
>* Line Chart
>* Pie Chart
>* Scatter Chart

## How Charts Stay Synchronized

When you create a chart from a cell range, the chart becomes linked to that data source. If values in the source range change, the chart automatically updates to reflect the new data. This makes it easy to build dynamic spreadsheets where visuals and data stay in sync.

## Chart Behavior

By default, charts are enabled in the Spreadsheet (via the [allowChart](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#allowchart) property). Once created, charts behave as objects within the worksheet—they can be moved, resized, and customized without affecting the underlying data.

---

## How To: Insert Charts

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

---

## How To: Customize Chart Appearance

Once a chart is inserted into the worksheet, you can customize its appearance and structure to make it clearer and more informative.

### Move a Chart

To reposition a chart within the worksheet:

1. **Click the chart** to select it (selection handles appear around it)
2. **Click and drag** the chart to your desired location
3. **Release** to place the chart in the new position

### Resize a Chart

To adjust the chart size:

1. **Click the chart** to select it (resize handles appear on the edges and corners)
2. **Drag any corner handle** to resize proportionally, or **drag an edge handle** to resize in one direction
3. **Release** to apply the new size

### Access Chart Design Options

When a chart is selected, a **Chart Design** tab becomes available in the ribbon. This tab provides tools to modify chart elements and structure.

### Add or Modify Chart Elements

Using the **Add Chart Element** option, you can enhance your chart with the following elements:

#### Axes and Axis Titles
- **Purpose** — Clearly describe what your data values represent
- **When to use** — Add when axis measurements are not immediately obvious
- **How to add** — Chart Design tab → Add Chart Element → Axes → Select the desired axis type

#### Chart Title
- **Purpose** — Explain what the chart represents at a glance
- **When to use** — Always recommended for clarity
- **How to add** — Chart Design tab → Add Chart Element → Chart Title → Choose a title style

#### Data Labels
- **Purpose** — Display exact values directly on the chart
- **When to use** — Helpful when precise values are important to viewers
- **How to add** — Chart Design tab → Add Chart Element → Data Labels → Select label position

#### Gridlines
- **Purpose** — Improve readability by providing a reference grid
- **When to use** — Useful for charts with many data points
- **How to add** — Chart Design tab → Add Chart Element → Gridlines → Select gridline type

#### Legends
- **Purpose** — Identify and distinguish data series in multi-series charts
- **When to use** — Essential when multiple data series are plotted
- **How to add** — Chart Design tab → Add Chart Element → Legend → Choose legend position

### Switch Data Orientation

If your chart is not displaying data as intended, you can reverse how rows and columns are interpreted:

1. **Select the chart** by clicking on it
2. **Go to Chart Design tab** in the ribbon
3. **Click Switch Row/Column** to flip the data orientation
4. **Review the result** — The chart now groups data differently

This is useful when:
- You want to compare categories differently
- Your data is organized differently than expected
- You need to highlight different trends or patterns

### Change Chart Type

To switch between chart types after creation:

1. **Select the chart** by clicking on it
2. **Go to Chart Design tab** in the ribbon
3. **Click Chart Type** option
4. **Select a new type** (Column, Bar, Line, Area, Pie, etc.)

---

## How To: Remove Charts

You can remove a chart from your worksheet either through the user interface or programmatically.

### Remove a Chart Using the UI

To delete a chart:

1. **Select the chart** by clicking on it
2. **Press Delete** or **Backspace** to remove it immediately

**Alternative method:**
- **Select the chart** and choose **Clear All** from the ribbon (this clears the selected chart)

### Remove a Chart Programmatically

Use the [deleteChart](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#deletechart) method to remove charts through code:

- **With a chart ID** — Pass the chart ID to remove that specific chart
- **Without an ID** — Call the method without arguments to remove the currently active (selected) chart

The following code example shows how to remove a chart in the spreadsheet:

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

---

## API Reference

### Methods

#### insertChart()
Inserts a new chart into the worksheet at a specified location with the given chart type and data range.

**Parameters:**
- `ChartModel[]` — Specifies the options to insert a chart in the spreadsheet.

**See:** [insertChart API Documentation](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#insertchart)

#### deleteChart()
Removes a chart from the worksheet.

**Parameters:**
- `chartId` (optional) — The ID of the specific chart to remove. If omitted, the active chart is deleted.

**See:** [deleteChart API Documentation](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#deletechart)

#### selectChart()
Selects a chart in the active worksheet.

**Parameters:**
- `chartId` (optional) — The ID of the chart to select. If omitted, the chart in the active cell is selected. If the active cell contains no chart, the first rendered chart in the active sheet is selected.

**See:** [selectChart API Documentation](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#selectchart)

#### deselectChart()
Removes selection from the currently selected chart.

**See:** [deselectChart API Documentation](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#deselectchart)

### Properties

#### allowChart
Enables or disables chart functionality in the Spreadsheet.

**Type:** `boolean`  
**Default:** `true`

**See:** [allowChart API Documentation](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#allowchart)