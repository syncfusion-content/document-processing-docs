---
layout: post
title: Add icons to cells — React Spreadsheet | Syncfusion
description: Add plus-icons inside Spreadsheet cells using a custom template in Syncfusion React Spreadsheet component of Syncfusion Essential JS 2 and more.
control: Spreadsheet 
platform: document-processing
documentation: ug
---

# Add Custom Icons to Cells in React Spreadsheet

Icons can be initialized directly in specific cells when the sheet loads. A custom Ribbon tab can also be added so you can insert the icon into the selected cell. You can attach your own event for actions to that icon such as showing child rows, inserting new rows, loading extra data, or anything else you need.

Add icons using [updateCell](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#updatecell) method. A wrapper element is generated and inserted in `beforeCellRender` when the cell contains the icon template.

The following code example shows how to add custom icons to cells for grouping functionality:

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/spreadsheet/react/add-icon-in-cell-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/spreadsheet/react/add-icon-in-cell-cs1/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/spreadsheet/react/add-icon-in-cell-cs1" %}
