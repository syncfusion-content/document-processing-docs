---
layout: post
title: Change Column Header Text in TypeScript Spreadsheet | Syncfusion
description: Learn about changing column header text in the Syncfusion TypeScript Spreadsheet component to customize worksheet headers.
control: Rows and Columns 
platform: document-processing
documentation: ug
---

# Change Column Header Text in TypeScript Spreadsheet

Using the [`beforeCellRender`](https://ej2.syncfusion.com/documentation/api/spreadsheet#beforecellrender) event, you can change the text in the column headers. In that event, you can use the `e-header-cell` class to identify the header cell element and update its text value.

The following code example shows how to change the text in the column headers.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/spreadsheet/javascript-es6/column-header-change-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/spreadsheet/javascript-es6/column-header-change-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "/document-processing/code-snippet/spreadsheet/javascript-es6/column-header-change-cs1" %}