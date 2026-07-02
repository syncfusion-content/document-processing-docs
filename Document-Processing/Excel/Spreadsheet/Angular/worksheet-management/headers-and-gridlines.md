---
layout: post
title: Headers and Gridlines in Angular Spreadsheet component | Syncfusion
description: Learn here all about headers and gridlines in Angular Spreadsheet component of Syncfusion Essential JS 2 and more.
control: Worksheet 
platform: document-processing
documentation: ug
---

# Headers and Gridlines in Angular Spreadsheet

Headers and gridlines are essential visual elements in the Angular Spreadsheet component. Headers display the row numbers and column letters, helping you identify and reference cells easily. Gridlines are the faint lines that separate cells, making the worksheet easier to read and organize. Both headers and gridlines can be shown or hidden to customize the appearance of your spreadsheet.

## Headers

By default, the row and column headers are visible in worksheets. You can dynamically show or hide worksheet headers by using one of the following ways,

* Switch to `View` tab, and then select `Hide Headers` option to hide both the row and column headers.
* Set `showHeaders` property in `sheets` as `true` or `false` to show or hide the headers at initial load. By default, the `showHeaders` property is enabled in each worksheet.

## Gridlines

Gridlines act as a border like appearance of cells. They are used to distinguish cells on the worksheet. You can dynamically show or hide gridlines by using one of the following ways,

* Switch to `View` tab, and then select `Hide Gridlines` option to hide the gridlines in worksheet.
* Set `showGridLines` property in `sheets` as `true` or `false` to show or hide the gridlines at initial load. By default, the [showGridLines](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/sheet#showgridlines) property is enabled in each worksheet.

The following code example shows the headers and gridlines operation in spreadsheet.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/spreadsheet/angular/headers-gridlines-cs1/src/app.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/spreadsheet/angular/headers-gridlines-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "/document-processing/samples/spreadsheet/angular/headers-gridlines-cs1" %}
