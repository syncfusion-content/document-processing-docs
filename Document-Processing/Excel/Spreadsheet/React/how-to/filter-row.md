---
layout: post
title: Get filtered row data — React Spreadsheet | Syncfusion
description: Learn how to get filtered row data in the Syncfusion React Spreadsheet component of Syncfusion Essential JS 2.
control: Spreadsheet 
platform: document-processing
documentation: ug
---

# Get filtered row data in React Spreadsheet

You can read only the visible rows after filtering by checking the `isFiltered` property on each row. Filters can be applied through the UI or by using `applyFilter` in code, and the same row collection can then be used to extract the filtered data. This helps when you need to work only with the displayed rows for tasks such as exporting, validating, or processing filtered content.

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