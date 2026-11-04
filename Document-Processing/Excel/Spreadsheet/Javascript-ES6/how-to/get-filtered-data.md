---
layout: post
title: How to Retrieve Filtered Row Data in TypeScript Spreadsheet | Syncfusion
description: Learn how to retrieve filtered row data from the Syncfusion TypeScript Spreadsheet control after applying filters.
control: Spreadsheet 
platform: document-processing
documentation: ug
---

# How to Retrieve Filtered Row Data in TypeScript Spreadsheet

Filtering in the Spreadsheet allows you to display only the rows that match your criteria, hiding all others. You can enable filtering by setting the [allowFiltering](https://ej2.syncfusion.com/documentation/api/spreadsheet/index-default#allowfiltering) property, and apply filters either through the UI or programmatically using the [applyFilter](https://ej2.syncfusion.com/documentation/api/spreadsheet/index-default#applyfilter) method. To identify which rows are filtered, iterate through the sheet's row collection and check the `isFiltered` property of each row object. This flag indicates whether a row is currently hidden due to filtering.

The following example shows how to get the filtered rows from the Spreadsheet:

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/spreadsheet/javascript-es6/filter-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/spreadsheet/javascript-es6/filter-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "/document-processing/code-snippet/spreadsheet/javascript-es6/filter-cs2" %}