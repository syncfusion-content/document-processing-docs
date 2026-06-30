---
layout: post
title: Changing Text in Column Headers in Angular Spreadsheet | Syncfusion
description: Learn here all about how to change text in column headers in Angular Spreadsheet component of Syncfusion Essential JS 2 and more.
control: Rows and Columns 
platform: document-processing
documentation: ug
---

# Changing text in column headers in Angular Spreadsheet

Using the [`beforeCellRender`](https://ej2.syncfusion.com/angular/documentation/api/spreadsheet#beforecellrender) event, you can change the text in the column headers. In that event, you can use the `e-header-cell` class to identify the header cell element and update its text value.

The following code example shows how to change the text in the column headers.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/spreadsheet/angular/column-header-change-cs1/src/app.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/spreadsheet/angular/column-header-change-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "/document-processing/samples/spreadsheet/angular/column-header-change-cs1" %}
