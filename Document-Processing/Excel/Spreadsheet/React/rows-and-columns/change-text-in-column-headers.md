---
layout: post
title: Change Column Header Text in React Spreadsheet | Syncfusion
description: Learn about changing column header text in the Syncfusion React Spreadsheet component to customize worksheet headers.
control: Rows and Columns 
platform: document-processing
documentation: ug
---

# Change Column Header Text in React Spreadsheet

Using the [`beforeCellRender`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet#beforecellrender) event, you can change the text in the column headers. In that event, you can use the `e-header-cell` class to identify the header cell element and update its text value.

The following code example shows how to change the text in the column headers.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/spreadsheet/react/column-header-change-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/spreadsheet/react/column-header-change-cs1/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/spreadsheet/react/column-header-change-cs1" %}