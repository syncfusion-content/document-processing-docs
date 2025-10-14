---
layout: post
title: Open in EJ2 Javascript Spreadsheet control | Syncfusion
description: Learn here all about Open in Syncfusion EJ2 Javascript Spreadsheet control of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Open 
documentation: ug
---

# Open in EJ2 Javascript Spreadsheet control

The Spreadsheet control opens an Excel document with its data, style, format, and more. To enable this feature, set [`allowOpen`](../api/spreadsheet/#allowopen) to `true` and assign service url to the [`openUrl`](../api/spreadsheet/#openurl) property.

The following list of Excel file formats are supported in Spreadsheet:

* MS Excel (.xlsx)
* MS Excel 97-2003 (.xls)
* Comma Separated Values (.csv)

## User Interface

In user interface you can open an Excel document by clicking `File > Open` menu item in ribbon.

The following code example shows `Open` option in the Spreadsheet control.

{% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/spreadsheet/javascript-es5/open-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/spreadsheet/javascript-es5/open-cs1" %}

> * Use `Ctrl + O` keyboard shortcut to open Excel documents.
> * The default value of the [allowOpen](../api/spreadsheet/#allowopen) property is `true`. For demonstration purpose, we have showcased the [allowOpen](../api/spreadsheet/#allowopen) property in previous code snippet.