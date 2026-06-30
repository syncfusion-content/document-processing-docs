---
layout: post
title: Insert in Angular Spreadsheet component | Syncfusion
description: Learn here all about how to insert in Angular Spreadsheet component of Syncfusion Essential JS 2 and more.
control: Rows and Columns 
platform: document-processing
documentation: ug
---

# Insert in Angular Spreadsheet

You can insert rows or columns anywhere in a spreadsheet. Use the [`allowInsert`](https://ej2.syncfusion.com/angular/documentation/api/spreadsheet#allowinsert) property to enable or disable the insert option in Spreadsheet.

## Row

The rows can be inserted in the following ways,

* Using [`insertRow`](https://ej2.syncfusion.com/angular/documentation/api/spreadsheet#insertrow) method, you can insert the rows once the component is loaded.
* Using context menu, insert the empty rows in the desired position.

The following code example shows the options for inserting rows in the spreadsheet.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/spreadsheet/angular/insert/row-cs1/src/app.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/spreadsheet/angular/insert/row-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "/document-processing/samples/spreadsheet/angular/insert/row-cs1" %}

## Column

The columns can be inserted in the following ways,

* Using [`insertColumn`](https://ej2.syncfusion.com/angular/documentation/api/spreadsheet#insertcolumn) method, you can insert the columns once the component is loaded.
* Using context menu, insert the empty columns in the desired position.

The following code example shows the options for inserting columns in the spreadsheet.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/spreadsheet/angular/insert/column-cs1/src/app.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/spreadsheet/angular/insert/column-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "/document-processing/samples/spreadsheet/angular/insert/column-cs1" %}

## Limitations of insert

The following features have some limitations in Insert/Delete:

* Insert row/column between the formatting applied cells.
* Insert row/column between the data validation.
* Insert row/column between the conditional formatting applied cells.
* Insert row/column between the filter applied cells.