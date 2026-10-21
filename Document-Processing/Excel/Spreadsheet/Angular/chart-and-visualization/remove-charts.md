---
layout: post
title: Remove Charts in Angular Spreadsheet component | Syncfusion
description: Learn here how to remove charts in Angular Spreadsheet component of Syncfusion Essential JS 2 and more.
control: Spreadsheet
platform: document-processing
documentation: ug
---

# Remove Charts in Angular Spreadsheet

You can remove a chart from your worksheet either through the user interface or programmatically.

## Remove a Chart Using the UI

To delete a chart:

1. **Select the chart** by clicking on it
2. **Press Delete** or **Backspace** to remove it immediately

**Alternative method:**
- **Select the chart** and choose **Clear All** from the ribbon (this clears the selected chart)

## Remove a Chart Programmatically

Use the [deleteChart](https://ej2.syncfusion.com/angular/documentation/api/spreadsheet/index-default#deletechart) method to remove charts through code:

- **With a chart ID** — Pass the chart ID to remove that specific chart
- **Without an ID** — Call the method without arguments to remove the currently active (selected) chart

The following code example shows how to remove a chart in the spreadsheet:

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/spreadsheet/angular/delete-chart-cs1/src/app.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/spreadsheet/angular/delete-chart-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "/document-processing/samples/spreadsheet/angular/delete-chart-cs1" %}
