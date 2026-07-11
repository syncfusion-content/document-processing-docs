---
layout: post
title: Hide and show in React Spreadsheet component | Syncfusion
description: Learn here all about how to hide and show in React Spreadsheet component of Syncfusion Essential JS 2 and more.
control: Rows and Columns 
platform: document-processing
documentation: ug
---

# Hide and show in React Spreadsheet component

You can show or hide the rows and columns in the spreadsheet through property binding, method, and context menu.

## Row

The rows can be hidden or shown through the following ways,

* Using `hidden` property in row, you can hide/show the rows at initial load.
* Using `hideRow` method, you can hide the rows by specifying the start and end row index, set the last argument `hide` as `false` to unhide the hidden rows.
* Right-click on the row header and select the desired option from context menu

## Column

The columns can be hidden or shown through following ways,

* Using `hidden` property in columns, you can hide/show the columns at initial load.
* Using `hideColumn` method, you can hide the columns by specifying the start and end column index, set the last argument `hide` as `false` to unhide the hidden columns.
* Right-click on the column header and select the desired option from context menu

The following code example shows the hide/show rows and columns operation in the spreadsheet.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/spreadsheet/react/show-hide-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/spreadsheet/react/show-hide-cs1/app/app.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/spreadsheet/react/show-hide-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/spreadsheet/react/show-hide-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "/document-processing/code-snippet/spreadsheet/react/show-hide-cs1" %}

