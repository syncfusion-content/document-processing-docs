---
layout: post
title: Open in TypeScript Spreadsheet | Syncfusion
description: Open in TypeScript Spreadsheet enables users to import and load workbook files for viewing, editing, and data management.
platform: document-processing
control: Open 
documentation: ug
---

# Open in TypeScript Spreadsheet 

The Spreadsheet control opens an Excel document with its data, style, format, and more. To enable this feature, set [`allowOpen`](../api/spreadsheet#allowopen) to `true` and assign service url to the [`openUrl`](../api/spreadsheet#openurl) property.

The following list of Excel file formats are supported in Spreadsheet:

* MS Excel (.xlsx)
* MS Excel 97-2003 (.xls)
* Comma Separated Values (.csv)

## User Interface

In user interface you can open an Excel document by clicking `File > Open` menu item in ribbon.

The following code example shows `Open` option in the Spreadsheet control.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/spreadsheet/javascript-es6/open-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/spreadsheet/javascript-es6/open-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "/document-processing/code-snippet/spreadsheet/javascript-es6/open-cs1" %}

> * Use `Ctrl + O` keyboard shortcut to open Excel documents.
> * The default value of the [allowOpen](../api/spreadsheet#allowopen) property is `true`. For demonstration purpose, we have showcased the [allowOpen](../api/spreadsheet#allowopen) property in previous code snippet.