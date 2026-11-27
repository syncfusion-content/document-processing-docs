---
layout: post
title: AutoFit Rows and Columns in React Spreadsheet | Syncfusion
description: Learn how to automatically fit row heights and column widths to content in the Syncfusion React Spreadsheet component.
control: Rows and Columns
platform: document-processing
documentation: ug
---

# AutoFit Rows and Columns in React Spreadsheet

To automatically fit row heights and column widths to their content, double-click the relevant row or column header boundary. You can also use the [`autoFit`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet#autofit) method to fit rows or columns programmatically.

## Row

The rows can be auto-fitted in the following ways:

* Double-click the lower boundary of a row header to fit that row's height to its content.
* Use the `autoFit` method to fit a single row or a range of rows programmatically.
* To fit multiple non-adjacent rows, hold Ctrl while selecting the required row headers, then double-click the boundary of any selected header.

The following code example shows how to fit row heights using the `autoFit` method.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/spreadsheet/react/autofit-rows-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/spreadsheet/react/autofit-rows-cs1/app/app.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/spreadsheet/react/autofit-rows-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/spreadsheet/react/autofit-rows-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/spreadsheet/react/autofit-rows-cs1" %}

## Column

The columns can be auto-fitted in the following ways:

* Double-click the right boundary of a column header to fit that column's width to its content.
* Use the `autoFit` method to fit a single column or a range of columns programmatically.
* To autofit multiple non-adjacent columns, hold Ctrl while selecting the required column headers, then double-click the boundary of any selected header.

The following code example shows how to fit column widths using the `autoFit` method.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/spreadsheet/react/autofit-columns-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/spreadsheet/react/autofit-columns-cs1/app/app.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/spreadsheet/react/autofit-columns-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/spreadsheet/react/autofit-columns-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/spreadsheet/react/autofit-columns-cs1" %}
