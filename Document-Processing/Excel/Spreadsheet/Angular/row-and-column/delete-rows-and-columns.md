---
layout: post
title: Delete in Angular Spreadsheet component | Syncfusion
description: Learn here all about how to delete in Angular Spreadsheet component of Syncfusion Essential JS 2 and more.
control: Rows and Columns 
platform: document-processing
documentation: ug
---

# Delete in Angular Spreadsheet

Delete support provides an option for deleting the rows and columns in the spreadsheet. Use [`allowDelete`](https://ej2.syncfusion.com/angular/documentation/api/spreadsheet#allowdelete) property to enable or disable the delete option in Spreadsheet.

The rows and columns can be deleted dynamically in the following ways,

* Using [`delete`](https://ej2.syncfusion.com/angular/documentation/api/spreadsheet#delete) method, you can delete the loaded rows and columns.
* Using context menu, you can delete the selected rows and columns.

The following code example shows the delete operation of rows and columns in the spreadsheet.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/spreadsheet/angular/delete/row-column-cs1/src/app.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/spreadsheet/angular/delete/row-column-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "/document-processing/samples/spreadsheet/angular/delete/row-column-cs1" %}

## Limitations of delete

The following features have some limitations in Insert/Delete:

* Delete row/column between the filter applied cells.