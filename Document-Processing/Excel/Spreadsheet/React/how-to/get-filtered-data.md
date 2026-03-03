---
layout: post
title: Get filtered row data — React Spreadsheet | Syncfusion
description: Learn how to get filtered row data in the Syncfusion React Spreadsheet component of Syncfusion Essential JS 2.
control: Spreadsheet 
platform: document-processing
documentation: ug
---

# Get filtered row data in React Spreadsheet

Filtering allows you to view specific rows that match your criteria while hiding the rest. You can enable filtering using the [allowFiltering](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#allowfiltering) property and apply filters through the UI or with the [applyFilter](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#applyfilter) method in code. The filtered rows can be identified by iterating through the row collection on the sheet and using the isFiltered property available in each row object. The filtered row includes an `isFiltered` flag that tells whether the row is hidden or visible.

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