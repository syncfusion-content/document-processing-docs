---
layout: post
title: How to Retrieve Filtered Row Data in React Spreadsheet | Syncfusion
description: Learn how to retrieve filtered row data from the Syncfusion React Spreadsheet component after applying filters.
control: Spreadsheet 
platform: document-processing
documentation: ug
---

# How to Retrieve Filtered Row Data in React Spreadsheet

Filtering in the Spreadsheet allows you to display only the rows that match your criteria, hiding all others. You can enable filtering by setting the [allowFiltering](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#allowfiltering) property, and apply filters either through the UI or programmatically using the [applyFilter](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#applyfilter) method. To identify which rows are filtered, iterate through the sheet's row collection and check the `isFiltered` property of each row object. This flag indicates whether a row is currently hidden due to filtering.

The following example shows how to get the filtered rows from the Spreadsheet:

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/spreadsheet/react/filter-cs2/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/spreadsheet/react/filter-cs2/app/app.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/spreadsheet/react/filter-cs2/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/spreadsheet/react/filter-cs2/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/spreadsheet/react/filter-cs2" %}