---
layout: post
title: Get filtered row data — React Spreadsheet | Syncfusion
description: Learn how to get filtered row data in the Syncfusion React Spreadsheet component of Syncfusion Essential JS 2.
control: Spreadsheet 
platform: document-processing
documentation: ug
---

## Get filtered row data in React Spreadsheet

This guide explains how to get the filtered row data in the Syncfusion React Spreadsheet component.

When filtering is used, some rows stay visible and the others are hidden. To get only the filtered rows, you can loop through the row collection in the active sheet. Each row has an `isFiltered` property that tells whether the row is hidden by the filter. Rows that are not filtered can then be processed or used for your own logic.

You can apply filters through the UI or use the `applyFilter` method in code. After filtering, you can get the filtered results in a simple way by checking each row and picking the ones that are currently shown to the user.

### Filtered row extraction logic:

Filtering can be enabled with the `allowFiltering` property. After a filter is applied, the row objects in the active sheet include an `isFiltered` flag. By checking this flag, you can identify which rows are included in the filter results. This helps when you need to work only with the visible rows, such as exporting, validating, or processing filtered data.

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