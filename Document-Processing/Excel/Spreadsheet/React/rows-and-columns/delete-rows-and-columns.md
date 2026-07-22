---
layout: post
title: Delete in React Spreadsheet component | Syncfusion
description: Learn here all about how to delete in React Spreadsheet component of Syncfusion Essential JS 2 and more.
control: Rows and Columns 
platform: document-processing
documentation: ug
---

# Delete in React Spreadsheet

Delete support provides an option for deleting the rows and columns in the spreadsheet. Use [`allowDelete`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet#allowdelete) property to enable or disable the delete option in Spreadsheet.

The rows and columns can be deleted dynamically in the following ways,

* Using [`delete`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet#delete) method, you can delete the loaded rows and columns.
* Using context menu, you can delete the selected rows and columns.

The following code example shows the delete operation of rows and columns in the spreadsheet.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/spreadsheet/react/delete-row-column-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/spreadsheet/react/delete-row-column-cs1/app/app.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/spreadsheet/react/delete-row-column-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/spreadsheet/react/delete-row-column-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/spreadsheet/react/delete-row-column-cs1" %}

## Limitations of delete

The following features have some limitations in Delete:

* Delete row/column between the filter applied cells.