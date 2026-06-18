---
layout: post
title: Paste Without Formatting in Angular Spreadsheet component | Syncfusion
description: Learn here about Paste only values without formatting during copy and paste in Syncfusion Angular Spreadsheet component of Syncfusion Essential JS 2 and more.
control: Spreadsheet 
platform: document-processing
documentation: ug
---

# Paste Values Without Formatting and styles in Angular Spreadsheet

In the Syncfusion angular Spreadsheet, you can make the paste action insert only the raw values into the cells, without bringing any formatting or styles from the copied content. This can be done by using the [actionBegin](https://ej2.syncfusion.com/angular/documentation/api/spreadsheet/index-default#actionbegin) event, where the Spreadsheet provides the details of the action being performed. When the action is a clipboard operation, you can set the paste type to Values, ensuring that only plain values are pasted into the sheet.

The following example shows how to paste values without formatting.

{% tabs %}
{% highlight js tabtitle="app.ts" %}
{% include code-snippet/spreadsheet/angular/paste-values-cs1/src/app.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/spreadsheet/angular/paste-values-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/spreadsheet/angular/paste-values-cs1" %}