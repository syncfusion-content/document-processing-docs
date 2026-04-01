---
layout: post
title: Paste only values in EJ2 Javascript Spreadsheet component | Syncfusion
description: Learn here about Paste only values without formatting in Syncfusion EJ2 Javascript Spreadsheet component of Syncfusion Essential JS 2 and more.
control: Spreadsheet 
platform: document-processing
documentation: ug
---

# Paste Values Without Formatting in EJ2 JavaScript Spreadsheet

In the Syncfusion EJ2 JavaScript Spreadsheet, you can make the paste action insert only the raw values into the cells, without bringing any formatting or styles from the copied content. This can be done by using the [actionBegin](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet/index-default#actionbegin) event, where the Spreadsheet provides the details of the action being performed. When the action is a clipboard operation, you can set the paste type to Values, ensuring that only plain values are pasted into the sheet.

The following example shows how to paste values without formatting.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/spreadsheet/javascript-es5/paste-values-cs1/index.js %}
{% endhighlight %}
{% highlight ts tabtitle="index.html" %}
{% include code-snippet/spreadsheet/javascript-es5/paste-values-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/spreadsheet/javascript-es5/paste-values-cs1" %}