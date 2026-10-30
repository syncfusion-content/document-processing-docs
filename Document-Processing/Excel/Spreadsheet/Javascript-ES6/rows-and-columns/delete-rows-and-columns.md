---
layout: post
title: Delete in JavaScript ES6 Spreadsheet | Syncfusion
description: Learn about deleting rows, columns, cells, and worksheet content in the Syncfusion JavaScript ES6 Spreadsheet component.
control: Rows and Columns 
platform: document-processing
documentation: ug
---

# Delete in JavaScript ES6 Spreadsheet

Delete support provides an option for deleting the rows and columns in the spreadsheet. Use [`allowDelete`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet#allowdelete) property to enable or disable the delete option in Spreadsheet.

The rows and columns can be deleted dynamically in the following ways,

* Using [`delete`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet#delete) method, you can delete the loaded rows and columns.
* Using context menu, you can delete the selected rows and columns.

The following code example shows the delete operation of rows and columns in the spreadsheet.

{% tabs %}
{% highlight js tabtitle="app.js" %}
{% include code-snippet/spreadsheet/javascript-es6/delete-row-column-cs1/app/app.js %}
{% endhighlight %}
{% highlight js tabtitle="datasource.js" %}
{% include code-snippet/spreadsheet/javascript-es6/delete-row-column-cs1/app/datasource.js %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/spreadsheet/javascript-es6/delete-row-column-cs1" %}

## Limitations of delete

The following features have some limitations in Delete:

* Delete row/column between the filter applied cells.
