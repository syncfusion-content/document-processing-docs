---
layout: post
title: Retrieve filtered row data in Angular Spreadsheet component | Syncfusion
description: Learn here all about getting filtered row data in Syncfusion Angular Spreadsheet component of Syncfusion Essential JS 2 and more.
control: Spreadsheet 
platform: document-processing
documentation: ug
---

# Get filtered row data in Angular Spreadsheet

Filtering in the Syncfusion Spreadsheet allows you to display only the rows that match your criteria, hiding all others. You can enable filtering by setting the [allowFiltering](https://ej2.syncfusion.com/angular/documentation/api/spreadsheet/index-default#allowfiltering) property, and apply filters either through the UI or programmatically using the [applyFilter](https://ej2.syncfusion.com/angular/documentation/api/spreadsheet/index-default#applyfilter) method. To identify which rows are filtered, iterate through the sheet's row collection and check the `isFiltered` property of each row object. This flag indicates whether a row is currently hidden due to filtering.

The following example shows how to get the filtered rows from the Spreadsheet:

{% tabs %}
{% highlight js tabtitle="app.ts" %}
{% include code-snippet/spreadsheet/angular/filter-cs2/app/app.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/spreadsheet/angular/filter-cs2/app/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/spreadsheet/angular/filter-cs2" %}