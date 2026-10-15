---
layout: post
title: Insert Rows and Columns in JavaScript ES6 Spreadsheet | Syncfusion
description: Learn about inserting rows and columns in the Syncfusion JavaScript ES6 Spreadsheet component for data management.
control: Rows and Columns 
platform: document-processing
documentation: ug
---

# Insert Rows and Columns in JavaScript ES6 Spreadsheet

You can insert rows or columns anywhere in a spreadsheet. Use the [`allowInsert`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet#allowinsert) property to enable or disable the insert option in Spreadsheet.

## Row

The rows can be inserted in the following ways,

* Using [`insertRow`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet#insertrow) method, you can insert the rows once the component is loaded.
* Using context menu, insert the empty rows in the desired position.

The following code example shows the options for inserting rows in the spreadsheet.

{% tabs %}
{% highlight js tabtitle="app.js" %}
{% include code-snippet/spreadsheet/javascript-es6/insert-row-cs1/app/app.js %}
{% endhighlight %}
{% highlight js tabtitle="datasource.js" %}
{% include code-snippet/spreadsheet/javascript-es6/insert-row-cs1/app/datasource.js %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "/document-processing/code-snippet/spreadsheet/javascript-es6/insert-row-cs1" %}

## Column

The columns can be inserted in the following ways,

* Using [`insertColumn`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet#insertcolumn) method, you can insert the columns once the component is loaded.
* Using context menu, insert the empty columns in the desired position.

The following code example shows the options for inserting columns in the spreadsheet.

{% tabs %}
{% highlight js tabtitle="app.js" %}
{% include code-snippet/spreadsheet/javascript-es6/insert-column-cs1/app/app.js %}
{% endhighlight %}
{% highlight js tabtitle="datasource.js" %}
{% include code-snippet/spreadsheet/javascript-es6/insert-column-cs1/app/datasource.js %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/spreadsheet/javascript-es6/insert-column-cs1" %}

## Limitations of insert

The following features have some limitations in Insert/Delete:

* Insert row/column between the formatting applied cells.
* Insert row/column between the data validation.
* Insert row/column between the conditional formatting applied cells.
* Insert row/column between the filter applied cells.
