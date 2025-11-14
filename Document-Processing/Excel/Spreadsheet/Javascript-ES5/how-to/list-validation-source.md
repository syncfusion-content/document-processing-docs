---
layout: post
title: Surpassing the 255-Character Limitation for List Validation Sources in EJ2 Spreadsheet Control | Syncfusion
description: Learn here all about how to surpass the 255-Character limitation for list validation sources in EJ2 Spreadsheet Control of Syncfusion Essential JS 2 and more.
control: Spreadsheet
platform: document-processing
documentation: ug
---

## How to surpass the 255-Character limitation for list validation sources in Javascript Spreadsheet Control

In EJ2 Spreadsheet Control, if you enter a list validation source that exceeds 255 characters, the validation will not be applied to the cell, and further input will be restricted. This behavior is not specific to the Spreadsheet component alone — it also aligns with the behavior of Microsoft Excel as well. You can refer to the following [article](https://support.microsoft.com/en-us/office/excel-specifications-and-limits-1672b34d-7043-467e-8e27-269d656771c3?ui=en-us&rs=en-us&ad=us) to learn more about this limitation.

To surpass this limitation, you can use a reference to a range of cells as the list validation source instead of providing the values directly. For example: `=Sheet1!B2:B10` or `=Sheet1!$B$2:$B$10`.

Refer to the following code example to understand how to use a cell range as the list validation source.

The following code example shows how to identify the context menu opened.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/spreadsheet/javascript-es5/list-validation-source-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/spreadsheet/javascript-es5/list-validation-source-cs1/index.html %}
{% endhighlight %}
{% highlight html tabtitle="datasource.js" %}
{% include code-snippet/spreadsheet/javascript-es5/list-validation-source-cs1/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/spreadsheet/javascript-es5/list-validation-source-cs1" %}