---
layout: post
title: Retrieve filtered row data in EJ2 TypeScript Spreadsheet component | Syncfusion
description: Learn here all about getting filtered row data in Syncfusion EJ2 TypeScript Spreadsheet component of Syncfusion Essential JS 2 and more.
control: Spreadsheet 
platform: document-processing
documentation: ug
---

# Get filtered row data in EJ2 TypeScript Spreadsheet

Filtering in the Syncfusion Spreadsheet allows you to display only the rows that match your criteria, hiding all others. You can enable filtering by setting the [allowFiltering](https://ej2.syncfusion.com/documentation/api/spreadsheet/index-default#allowfiltering) property, and apply filters either through the UI or programmatically using the [applyFilter](https://ej2.syncfusion.com/documentation/api/spreadsheet/index-default#applyfilter) method. To identify which rows are filtered, iterate through the sheet's row collection and check the `isFiltered` property of each row object. This flag indicates whether a row is currently hidden due to filtering.

The following example shows how to get the filtered rows from the Spreadsheet:

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/spreadsheet/javascript-es6/filter-cs2/app/index.js %}
{% endhighlight %}
{% highlight ts tabtitle="index.html" %}
{% include code-snippet/spreadsheet/javascript-es6/filter-cs2/app/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/spreadsheet/javascript-es6/filter-cs2" %}