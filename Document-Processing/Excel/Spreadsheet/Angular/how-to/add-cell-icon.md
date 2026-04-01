---
layout: post
title: Add icons inside cells in Angular Spreadsheet component | Syncfusion
description: Learn here all about adding icon inside cells using a custom template in Syncfusion Angular Spreadsheet component of Syncfusion Essential JS 2 and more.
control: Spreadsheet 
platform: document-processing
documentation: ug
---

# Add Custom Icons to Cells in Angular Spreadsheet

In the Syncfusion Spreadsheet, you can render custom icons inside specific cells by defining a custom template property within the cell model. During the [beforeCellRender](https://ej2.syncfusion.com/angular/documentation/api/spreadsheet/index-default#beforecellrender) event, the icon element can be appended to the corresponding table cell (td) by checking whether the cell contains this template property.

The following sample demonstrates how to add icons to cells by assigning the template property in the cell definition. Additionally, a custom ribbon item named "Add Icon" is included under a new "Template" ribbon tab. When this ribbon item is selected, the Spreadsheet dynamically inserts an icon into the currently active cell.

{% tabs %}
{% highlight js tabtitle="app.ts" %}
{% include code-snippet/spreadsheet/angular/add-icon-in-cell-cs1/src/app.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/spreadsheet/angular/add-icon-in-cell-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/spreadsheet/angular/add-icon-in-cell-cs1" %}
