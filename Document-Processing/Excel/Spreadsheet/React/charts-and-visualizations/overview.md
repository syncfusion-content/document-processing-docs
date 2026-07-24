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

The [React Spreadsheet Editor](https://www.syncfusion.com/spreadsheet-editor-sdk/react-spreadsheet-editor) component supports built-in charts, allowing you to turn cell ranges into clear visual representations directly inside your worksheet. Charts help you identify trends, compare values, and communicate data insights at a glance.

## Supported Chart Types

The following types of charts are available in the Spreadsheet.

>* Column Chart
>* Bar Chart
>* Area Chart
>* Line Chart
>* Pie Chart
>* Doughnut Chart
>* Scatter Chart

## How Charts Stay Synchronized

When you create a chart from a cell range, the chart becomes linked to that data source. If values in the source range change, the chart automatically updates to reflect the new data. This makes it easy to build dynamic spreadsheets where visuals and data stay in sync.

## Chart Behavior

By default, charts are enabled in the Spreadsheet (via the [allowChart](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#allowchart) property). Once created, charts behave as objects within the worksheet—they can be moved, resized, and customized without affecting the underlying data.

## Overview of Chart and Visualization Operations

The React Spreadsheet component provides a variety of features for working with charts and visualizations. Below is a quick overview of each feature, with links to their respective documentation sections:

- **[Insert Charts](./insert-charts)**: Add charts to your spreadsheet to visually represent your data.
- **[Customize Chart Appearance](./customize-chart-appearance)**: Change the look and feel of your charts, including styles, colors, and chart types.
- **[Remove Charts](./remove-charts)**: Delete charts that are no longer needed from your worksheet.

## Limitations of Chart

The following features have some limitations in the Chart:

* Insert row/delete row between the chart data source will not reflect the chart.
* Copy/paste into the chart data source will not reflect the chart.
* Corner resizing option in chart element.

## See Also
* [Images](../images-and-illustrations/overview)
* [Formatting](./formatting)
* [Rows and columns](../rows-and-columns/overview)
