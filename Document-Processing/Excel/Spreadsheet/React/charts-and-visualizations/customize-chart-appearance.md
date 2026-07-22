---
layout: post
title: How to Customize a Chart in React Spreadsheet component | Syncfusion
description: Learn how to customize the appearance and structure of a chart in the React Spreadsheet component of Syncfusion Essential JS 2 and more.
control: Spreadsheet
platform: document-processing
documentation: ug
---

# Customize Chart Appearance in React Spreadsheet

Once a chart is inserted into the worksheet, you can customize its appearance and structure from the **Chart Design** tab in the ribbon.

## Move a Chart

To reposition a chart within the worksheet:

1. **Click the chart** to select it (selection handles appear around it).
2. **Click and drag** the chart to your desired location.
3. **Release** to place the chart in the new position.

## Resize a Chart

To adjust the chart size:

1. **Click the chart** to select it.
2. **Drag a middle edge handle** to resize along a single axis — horizontally or vertically.
3. **Release** to apply the new size.

## Access Chart Design Options

When a chart is selected, a **Chart Design** tab becomes available in the ribbon. This tab provides tools to modify chart elements and structure.

## Add or Modify Chart Elements

Using the **Add Chart Element** option, you can enhance your chart with the following elements:

### Axes and Axis Titles
- **Purpose** — Clearly describe what your data values represent
- **When to use** — Add when axis measurements are not immediately obvious
- **How to add** — Chart Design tab → Add Chart Element → Axes → Select the desired axis type

### Chart Title
- **Purpose** — Explain what the chart represents at a glance
- **When to use** — Always recommended for clarity
- **How to add** — Chart Design tab → Add Chart Element → Chart Title → Choose a title style

### Data Labels
- **Purpose** — Display exact values directly on the chart
- **When to use** — Helpful when precise values are important to viewers
- **How to add** — Chart Design tab → Add Chart Element → Data Labels → Select label position

### Gridlines
- **Purpose** — Improve readability by providing a reference grid
- **When to use** — Useful for charts with many data points
- **How to add** — Chart Design tab → Add Chart Element → Gridlines → Select gridline type

### Legends
- **Purpose** — Identify and distinguish data series in multi-series charts
- **When to use** — Essential when multiple data series are plotted
- **How to add** — Chart Design tab → Add Chart Element → Legend → Choose legend position

## Switch Data Orientation

If your chart is not displaying data as intended, you can reverse how rows and columns are interpreted:

1. **Select the chart** by clicking on it
2. **Go to Chart Design tab** in the ribbon
3. **Click Switch Row/Column** to flip the data orientation
4. **Review the result** — The chart now groups data differently

This is useful when:
- You want to compare categories differently
- Your data is organized differently than expected
- You need to highlight different trends or patterns

## Change Chart Type

To switch between chart types after creation:

1. **Select the chart** by clicking on it
2. **Go to Chart Design tab** in the ribbon
3. **Click Chart Type** option
4. **Select a new type** (Column, Bar, Line, Area, Pie, etc.)

## Customization of line chart markers

Using the [`actionBegin`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet#actionbegin) event, you can change the shape, size, fill color, and border of the line chart marker. In the following example, you can see the modified marker appearance, such as shape and size, while creating the line chart with UI interaction.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/spreadsheet/react/chart-cs3/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/spreadsheet/react/chart-cs3/app/app.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/spreadsheet/react/chart-cs3/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/spreadsheet/react/chart-cs3/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/spreadsheet/react/chart-cs3" %}
