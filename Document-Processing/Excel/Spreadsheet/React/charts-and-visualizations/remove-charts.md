---
layout: post
title: Remove Charts in React Spreadsheet component | Syncfusion
description: Learn here how to remove charts in React Spreadsheet component of Syncfusion Essential JS 2 and more.
control: Spreadsheet
platform: document-processing
documentation: ug
---

# Remove Charts in React Spreadsheet

You can remove a chart from your worksheet either through the user interface or programmatically.

## Remove a Chart Using the UI

To delete a chart:

1. **Select the chart** by clicking on it. Selection handles appear around the chart's border.
2. **Press `Delete` or `Backspace`** to remove the chart immediately.

**Alternative method:**
- **Select the chart** and choose **Clear All** from the ribbon (this clears the selected chart)

## Remove a Chart Programmatically

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